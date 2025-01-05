import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/csi_responses'
import { csi } from './csi'

const MINIMUM_RESULT = 0
const MEDIAN_RESULT = 50
const MAX_RESULT = 100

const csi_calculation = new Score(csi)

describe('csi', function () {
  it('csi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('csi')
  })

  describe('basic Assumption', function () {
    const outcome = csi_calculation.calculate({ payload: random_response })

    it('should return two calculation results', function () {
      const AMOUNT_OF_RESULTS = 2
      expect(Object.keys(outcome)).toHaveLength(AMOUNT_OF_RESULTS)
    })

    it('should return a result with correct calculation name', function () {
      const EXPECTED_CALCULATION_ID = ['csi', 'interpretation']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validations', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
          'Q22',
          'Q23',
          'Q24',
          'Q25',
        ]
        const configured_calculation_input_ids = Object.keys(
          csi_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
      })
    })

    describe('when called with a response with answers out of the expected [0,4] range', function () {
      describe('when an answer is not a number', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            csi_calculation.calculate({
              payload: {
                Q01: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is below the expected [0,4] range', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            csi_calculation.calculate({
              payload: {
                Q01: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when an answer is above the expected [0,4] range', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            csi_calculation.calculate({
              payload: {
                Q01: 5,
              },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('When the response is empty', function () {
        it('should throw an error', function () {
          expect(() => csi_calculation.calculate({ payload: {} })).toThrow(
            ZodError,
          )
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with random response', function () {
      it('should return the expected result', function () {
        const outcome = csi_calculation.calculate({ payload: random_response })
        const EXPECTED_SCORE = 49

        expect(outcome.csi).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with minimum response', function () {
      it('should return the minimum result', function () {
        const outcome = csi_calculation.calculate({ payload: min_response })

        const EXPECTED_SCORE = MINIMUM_RESULT

        expect(outcome.csi).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with median response', function () {
      it('should return the median result', function () {
        const outcome = csi_calculation.calculate({ payload: median_response })

        const EXPECTED_SCORE = MEDIAN_RESULT

        expect(outcome.csi).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with maximum response', function () {
      it('should return the maximum result', function () {
        const outcome = csi_calculation.calculate({ payload: max_response })

        const EXPECTED_SCORE = MAX_RESULT

        expect(outcome.csi).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
