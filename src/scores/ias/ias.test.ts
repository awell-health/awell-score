import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ias_test_responses'
import { IAS_SUBSCALES } from './definition/ias_scales'
import { ias } from './ias'

const ias_calclation = new Score(ias)

describe('ias', function () {
  it('ias calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ias')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        // 'IAS_Q01', - Not used in score calculation
        'IAS_Q02',
        'IAS_Q03',
        'IAS_Q04',
        // 'IAS_Q05', - Not used in score calculation
        'IAS_Q06',
        // 'IAS_Q07', - Not used in score calculation
        // 'IAS_Q08', - Not used in score calculation
        // 'IAS_Q09', - Not used in score calculation
        // 'IAS_Q10', - Not used in score calculation
        // 'IAS_Q11', - Not used in score calculation
        // 'IAS_Q12', - Not used in score calculation
        'IAS_Q13',
        'IAS_Q14',
        'IAS_Q15',
        'IAS_Q16',
        'IAS_Q17',
        // 'IAS_Q18', - Not used in score calculation
        'IAS_Q19',
        // 'IAS_Q20', - Not used in score calculation
        'IAS_Q21',
        // 'IAS_Q22', - Not used in score calculation
        'IAS_Q23',
        'IAS_Q24',
        'IAS_Q25',
        // 'IAS_Q26', - Not used in score calculation
        'IAS_Q27',
        'IAS_Q28',
        'IAS_Q29',
      ].sort()

      const configured_input_ids = Object.keys(
        ias_calclation.inputSchema,
      ).sort()

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Health anxiety" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'IAS_Q02',
        'IAS_Q03',
        'IAS_Q04',
        'IAS_Q06',
        'IAS_Q13',
        'IAS_Q14',
        'IAS_Q15',
        'IAS_Q16',
        'IAS_Q17',
        'IAS_Q19',
        'IAS_Q21',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(IAS_SUBSCALES.HEALTH_ANXIETY)
    })

    it('should have the expected input idss configured for the "Ilness behaviour" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'IAS_Q23',
        'IAS_Q24',
        'IAS_Q25',
        'IAS_Q27',
        'IAS_Q28',
        'IAS_Q29',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(IAS_SUBSCALES.ILNESS_BEHAVIOUR)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ias_calclation.calculate({ payload: min_response })

    it('should calculate a score for both subscales (n=2)', function () {
      const AMOUNT_OF_SCORES = 2
      expect(Object.keys(outcome)).toHaveLength(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = ['HEALTH_ANXIETY', 'ILNESS_BEHAVIOUR']

      const EXTRACTED_SCALE_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when all inputs are answered with the min response', function () {
      const MIN_SCORE = 0
      const outcome = ias_calclation.calculate({ payload: min_response })

      it('should return the min score on the "Health anxiety" subscale', function () {
        const score = outcome.HEALTH_ANXIETY
        expect(score).toEqual(MIN_SCORE)
      })

      it('should return the min score on the "Ilness behaviour" subscale', function () {
        const score = outcome.ILNESS_BEHAVIOUR
        expect(score).toEqual(MIN_SCORE)
      })
    })

    describe('when all inputs are answered with the median response', function () {
      const outcome = ias_calclation.calculate({ payload: median_response })

      it('should return the median score on the "Health anxiety" subscale', function () {
        const score = outcome.HEALTH_ANXIETY
        const MEDIAN_SCORE = 22

        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score on the "Ilness behaviour" subscale', function () {
        const score = outcome.ILNESS_BEHAVIOUR
        const MEDIAN_SCORE = 12

        expect(score).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when all inputs are answered with the max response', function () {
      const outcome = ias_calclation.calculate({ payload: max_response })

      it('should return the maximum score on the "Health anxiety" subscale', function () {
        const score = outcome.HEALTH_ANXIETY
        const MAX_SCORE = 44

        expect(score).toEqual(MAX_SCORE)
      })

      it('should return the maximum score on the "Ilness behaviour" subscale', function () {
        const score = outcome.ILNESS_BEHAVIOUR
        const MAX_SCORE = 24

        expect(score).toEqual(MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = ias_calclation.calculate({ payload: random_response })

      it('should return the expected score on the "Health anxiety" subscale', function () {
        const score = outcome.HEALTH_ANXIETY
        const EXPECTED_SCORE = 20

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score on the "Ilness behaviour" subscale', function () {
        const score = outcome.ILNESS_BEHAVIOUR
        const EXPECTED_SCORE = 8

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => ias_calclation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ias_calclation.calculate({
            payload: {
              IAS_Q02: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ias_calclation.calculate({
            payload: {
              IAS_Q02: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ias_calclation.calculate({
            payload: {
              IAS_Q02: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
