import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sf12_test_responses'
import { sf12 } from './sf12'

const SCORES = {
  WORST: {
    PHYSICAL_COMPONENT_SCORE: 23.99938,
    MENTAL_COMPONENT_SCORE: 19.06444,
  },
  MEDIAN: {
    PHYSICAL_COMPONENT_SCORE: 48.60638,
    MENTAL_COMPONENT_SCORE: 33.57777,
  },
  BEST: {
    PHYSICAL_COMPONENT_SCORE: 56.57706,
    MENTAL_COMPONENT_SCORE: 60.75781,
  },
  RANDOM: {
    PHYSICAL_COMPONENT_SCORE: 37.10464,
    MENTAL_COMPONENT_SCORE: 46.00098,
  },
}

const score = new Score(sf12)

describe('sf12', function () {
  it('sf12 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('acro')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'SF12_Q01',
        'SF12_Q02',
        'SF12_Q03',
        'SF12_Q04',
        'SF12_Q05',
        'SF12_Q06',
        'SF12_Q07',
        'SF12_Q08',
        'SF12_Q09',
        'SF12_Q10',
        'SF12_Q11',
        'SF12_Q12',
      ]

      const configured_input_ids = Object.keys(score.inputSchemaAsObject.shape)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = score.calculate({ payload: best_response })

    it('should return a score for all 2 subscales', function () {
      expect(Object.keys(outcome)).toHaveLength(2)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PHYSICAL_COMPONENT_SCORE',
        'MENTAL_COMPONENT_SCORE',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = score.calculate({ payload: {} })

      it('should return "Missing" as the score for the mental health subscale', function () {
        expect(outcome.MENTAL_COMPONENT_SCORE).toEqual(null)
      })

      it('should return "Missing" as the score for the physical health subscale', function () {
        expect(outcome.PHYSICAL_COMPONENT_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges for question 1', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          score.calculate({ payload: { SF12_Q01: "I'm not a number" } }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() => score.calculate({ payload: { SF12_Q01: -1 } })).toThrow(
          ZodError,
        )
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() => score.calculate({ payload: { SF12_Q01: 6 } })).toThrow(
          ZodError,
        )
      })
      it('should throw an ZodError for question 4', function () {
        expect(() => score.calculate({ payload: { SF12_Q04: 3 } })).toThrow(
          ZodError,
        )
      })
      it('should throw an ZodError for question 9', function () {
        expect(() => score.calculate({ payload: { SF12_Q09: 7 } })).toThrow(
          ZodError,
        )
      })
      it('should pass for question 9', function () {
        expect(() => score.calculate({ payload: { SF12_Q09: 6 } })).not.toThrow(
          ZodError,
        )
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when the worst response is passed', function () {
      it('should return the worst score for the mental health subscale', function () {
        const outcome = score.calculate({ payload: worst_response })
        expect(outcome.MENTAL_COMPONENT_SCORE).toEqual(
          SCORES.WORST.MENTAL_COMPONENT_SCORE,
        )
      })

      it('should return the worst score for the physical health subscale', function () {
        const outcome = score.calculate({ payload: worst_response })
        expect(outcome.PHYSICAL_COMPONENT_SCORE).toEqual(
          SCORES.WORST.PHYSICAL_COMPONENT_SCORE,
        )
      })
    })

    describe('when the best response is passed', function () {
      it('should return the best score for the mental health subscale', function () {
        const outcome = score.calculate({ payload: best_response })
        expect(outcome.MENTAL_COMPONENT_SCORE).toEqual(
          SCORES.BEST.MENTAL_COMPONENT_SCORE,
        )
      })

      it('should return the best score for the physical health subscale', function () {
        const outcome = score.calculate({ payload: best_response })
        expect(outcome.PHYSICAL_COMPONENT_SCORE).toEqual(
          SCORES.BEST.PHYSICAL_COMPONENT_SCORE,
        )
      })
    })
  })

  describe('when a median response is passed', function () {
    it('should return the median score for the mental health subscale', function () {
      const outcome = score.calculate({ payload: median_response })
      expect(outcome.MENTAL_COMPONENT_SCORE).toEqual(
        SCORES.MEDIAN.MENTAL_COMPONENT_SCORE,
      )
    })

    it('should return the median score for the physical health subscale', function () {
      const outcome = score.calculate({ payload: median_response })
      expect(outcome.PHYSICAL_COMPONENT_SCORE).toEqual(
        SCORES.MEDIAN.PHYSICAL_COMPONENT_SCORE,
      )
    })
  })

  describe('when a random response is passed', function () {
    it('should return the random score for the mental health subscale', function () {
      const outcome = score.calculate({ payload: random_response })
      expect(outcome.MENTAL_COMPONENT_SCORE).toEqual(
        SCORES.RANDOM.MENTAL_COMPONENT_SCORE,
      )
    })

    it('should return the random score for the physical health subscale', function () {
      const outcome = score.calculate({ payload: random_response })
      expect(outcome.PHYSICAL_COMPONENT_SCORE).toEqual(
        SCORES.RANDOM.PHYSICAL_COMPONENT_SCORE,
      )
    })
  })
})
