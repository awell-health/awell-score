import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ompq_test_responses'
import { INVERSE_ITEMS } from './definition'
import { ompq } from './ompq'

const OMPQ_MAX_SCORE = 210 // 21 inputs with a maximum score of 10
const OMPQ_MEDIAN_SCORE = 105
const OMPQ_MIN_SCORE = 4

const ompq_calculation = new Score(ompq)

describe('ompq', function () {
  it('ompq calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ompq')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'OMPQ_Q05',
        'OMPQ_Q06',
        'OMPQ_Q07',
        'OMPQ_Q08',
        'OMPQ_Q09',
        'OMPQ_Q10',
        'OMPQ_Q11',
        'OMPQ_Q12',
        'OMPQ_Q13',
        'OMPQ_Q14',
        'OMPQ_Q15',
        'OMPQ_Q16',
        'OMPQ_Q17',
        'OMPQ_Q18',
        'OMPQ_Q19',
        'OMPQ_Q20',
        'OMPQ_Q21',
        'OMPQ_Q22',
        'OMPQ_Q23',
        'OMPQ_Q24',
        'OMPQ_Q25',
      ]

      const configured_calculation_input_ids = Object.keys(
        ompq_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })

    it('should use the correct inverted fields', function () {
      const EXPECTED_CALCULATION_INVERTED_INPUT_IDS = [
        'OMPQ_Q12',
        'OMPQ_Q16',
        'OMPQ_Q17',
        'OMPQ_Q21',
        'OMPQ_Q22',
        'OMPQ_Q23',
        'OMPQ_Q24',
        'OMPQ_Q25',
      ]

      expect(EXPECTED_CALCULATION_INVERTED_INPUT_IDS).toEqual(INVERSE_ITEMS)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ompq_calculation.calculate({ payload: min_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_NAMES = ['OMPQ']

      const EXTRACTED_CALCULATION_NAMES_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).toEqual(
        EXPECTED_CALCULATION_NAMES,
      )
    })
  })

  describe('validation', function () {
    describe('when question 5 is not passed as an array', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation.calculate({
            payload: {
              OMPQ_Q05: 'neck',
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when question 6 has an invalid minimum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation.calculate({
            payload: {
              OMPQ_Q06: 0,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when question 7 has an invalid minimum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation.calculate({
            payload: {
              OMPQ_Q07: 0,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when any other input has an invalid minimum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation.calculate({
            payload: {
              OMPQ_Q10: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when any other input has an invalid maximum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation.calculate({
            payload: {
              OMPQ_Q10: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('when called with an empty response', function () {
    it('should throw a ZodError', function () {
      expect(() => ompq_calculation.calculate({ payload: {} })).toThrow(
        ZodError,
      )
    })
  })

  describe('when called with a minimum response', function () {
    it('should return the minimum score', function () {
      const outcome = ompq_calculation.calculate({ payload: min_response })
      expect(outcome.OMPQ).toEqual(OMPQ_MIN_SCORE)
    })
  })

  describe('when called with a median response', function () {
    it('should return the median score', function () {
      const outcome = ompq_calculation.calculate({ payload: median_response })
      expect(outcome.OMPQ).toEqual(OMPQ_MEDIAN_SCORE)
    })
  })

  describe('when called with a maximum response', function () {
    it('should return the maximum score', function () {
      const outcome = ompq_calculation.calculate({ payload: max_response })
      expect(outcome.OMPQ).toEqual(OMPQ_MAX_SCORE)
    })
  })

  describe('when called with a random response', function () {
    it('should return the expected score', function () {
      const outcome = ompq_calculation.calculate({ payload: random_response })
      const EXPECTED_SCORE = 70
      expect(outcome.OMPQ).toEqual(EXPECTED_SCORE)
    })
  })
})
