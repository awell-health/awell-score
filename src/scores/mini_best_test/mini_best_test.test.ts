import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/mini_best_test_responses'
import { MINI_BEST_TEST_SECTIONS } from './definition/mini_best_test_sections'
import { mini_best_test } from './mini_best_test'

const MINI_BEST_TEST_TOTAL_MIN_SCORE = 0
const MINI_BEST_TEST_TOTAL_MEDIAN_SCORE = 14
const MINI_BEST_TEST_TOTAL_MAX_SCORE = 28

const mini_best_test_calculation = new Score(mini_best_test)

describe('mini_best_test', function () {
  it('mini_best_test calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('mini_best_test')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q01',
        'MINI_BEST_TEST_Q02',
        'MINI_BEST_TEST_Q03_LEFT',
        'MINI_BEST_TEST_Q03_RIGHT',
        'MINI_BEST_TEST_Q04',
        'MINI_BEST_TEST_Q05',
        'MINI_BEST_TEST_Q06_LEFT',
        'MINI_BEST_TEST_Q06_RIGHT',
        'MINI_BEST_TEST_Q07',
        'MINI_BEST_TEST_Q08',
        'MINI_BEST_TEST_Q09',
        'MINI_BEST_TEST_Q10',
        'MINI_BEST_TEST_Q11',
        'MINI_BEST_TEST_Q12',
        'MINI_BEST_TEST_Q13',
        'MINI_BEST_TEST_Q14',
      ]

      const configured_input_ids = Object.keys(
        mini_best_test_calculation.inputSchema,
      )

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Anticipatory postural adjustments" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q01',
        'MINI_BEST_TEST_Q02',
        'MINI_BEST_TEST_Q03_LEFT',
        'MINI_BEST_TEST_Q03_RIGHT',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        MINI_BEST_TEST_SECTIONS.ANTICIPATORY_POSTURAL_ADJUSTEMENTS,
      )
    })

    it('should have the expected input idss configured for the "Reactive postural control" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q04',
        'MINI_BEST_TEST_Q05',
        'MINI_BEST_TEST_Q06_LEFT',
        'MINI_BEST_TEST_Q06_RIGHT',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        MINI_BEST_TEST_SECTIONS.REACTIVE_POSTURAL_CONTROL,
      )
    })

    it('should have the expected input idss configured for the "Sensory orientation" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q07',
        'MINI_BEST_TEST_Q08',
        'MINI_BEST_TEST_Q09',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        MINI_BEST_TEST_SECTIONS.SENSORY_ORIENTATION,
      )
    })

    it('should have the expected input idss configured for the "Dynamic gait" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q10',
        'MINI_BEST_TEST_Q11',
        'MINI_BEST_TEST_Q12',
        'MINI_BEST_TEST_Q13',
        'MINI_BEST_TEST_Q14',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(MINI_BEST_TEST_SECTIONS.DYNAMIC_GAIT)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = mini_best_test_calculation.calculate({
      payload: min_response,
    })

    it('should return a score for all subscales (n=4) and a total score', function () {
      expect(Object.keys(outcome)).toHaveLength(5)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'TOTAL',
        'ANTICIPATORY_POSTURAL_ADJUSTEMENTS',
        'REACTIVE_POSTURAL_CONTROL',
        'SENSORY_ORIENTATION',
        'DYNAMIC_GAIT',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = mini_best_test_calculation.calculate({ payload: {} })

      it('should return null as the result for "Anticipatory postural adjustments" subscale', function () {
        expect(outcome.ANTICIPATORY_POSTURAL_ADJUSTEMENTS).toEqual(null)
      })

      it('should return undefined as the result for "Reactive postural control" subscale', function () {
        expect(outcome.REACTIVE_POSTURAL_CONTROL).toEqual(null)
      })

      it('should return undefined as the result for "Sensory orientation" subscale', function () {
        expect(outcome.SENSORY_ORIENTATION).toEqual(null)
      })

      it('should return undefined as the result for "Dynamic gait" subscale', function () {
        expect(outcome.DYNAMIC_GAIT).toEqual(null)
      })

      it('should return undefined for the total score', function () {
        expect(outcome.TOTAL).toEqual(null)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      const outcome = mini_best_test_calculation.calculate({
        payload: min_response,
      })

      it('should return the minimum the score for "Anticipatory postural adjustments" subscale', function () {
        const EXPECTED_MIN_SCORE = 0
        expect(outcome.ANTICIPATORY_POSTURAL_ADJUSTEMENTS).toEqual(
          EXPECTED_MIN_SCORE,
        )
      })

      it('should return the minimum the score for "Reactive postural control" subscale', function () {
        const EXPECTED_MIN_SCORE = 0
        expect(outcome.REACTIVE_POSTURAL_CONTROL).toEqual(EXPECTED_MIN_SCORE)
      })

      it('should return the minimum the score for "Sensory orientation" subscale', function () {
        const EXPECTED_MIN_SCORE = 0
        expect(outcome.SENSORY_ORIENTATION).toEqual(EXPECTED_MIN_SCORE)
      })

      it('should return the minimum the score for "Dynamic gait" subscale', function () {
        const EXPECTED_MIN_SCORE = 0
        expect(outcome.DYNAMIC_GAIT).toEqual(EXPECTED_MIN_SCORE)
      })

      it('should return the minimum total score', function () {
        expect(outcome.TOTAL).toEqual(MINI_BEST_TEST_TOTAL_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = mini_best_test_calculation.calculate({
        payload: median_response,
      })

      it('should return the median the score for "Anticipatory postural adjustments" subscale', function () {
        const EXPECTED_MEDIAN_SCORE = 3
        expect(outcome.ANTICIPATORY_POSTURAL_ADJUSTEMENTS).toEqual(
          EXPECTED_MEDIAN_SCORE,
        )
      })

      it('should return the median the score for "Reactive postural control" subscale', function () {
        const EXPECTED_MEDIAN_SCORE = 3
        expect(outcome.REACTIVE_POSTURAL_CONTROL).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the median the score for "Sensory orientation" subscale', function () {
        const EXPECTED_MEDIAN_SCORE = 3
        expect(outcome.SENSORY_ORIENTATION).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the median the score for "Dynamic gait" subscale', function () {
        const EXPECTED_MEDIAN_SCORE = 5
        expect(outcome.DYNAMIC_GAIT).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the median total score', function () {
        expect(outcome.TOTAL).toEqual(MINI_BEST_TEST_TOTAL_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      const outcome = mini_best_test_calculation.calculate({
        payload: max_response,
      })

      it('should return the maximum the score for "Anticipatory postural adjustments" subscale', function () {
        const EXPECTED_MAX_SCORE = 6
        expect(outcome.ANTICIPATORY_POSTURAL_ADJUSTEMENTS).toEqual(
          EXPECTED_MAX_SCORE,
        )
      })

      it('should return the maximum the score for "Reactive postural control" subscale', function () {
        const EXPECTED_MAX_SCORE = 6
        expect(outcome.REACTIVE_POSTURAL_CONTROL).toEqual(EXPECTED_MAX_SCORE)
      })

      it('should return the maximum the score for "Sensory orientation" subscale', function () {
        const EXPECTED_MAX_SCORE = 6
        expect(outcome.SENSORY_ORIENTATION).toEqual(EXPECTED_MAX_SCORE)
      })

      it('should return the maximum the score for "Dynamic gait" subscale', function () {
        const EXPECTED_MAX_SCORE = 10
        expect(outcome.DYNAMIC_GAIT).toEqual(EXPECTED_MAX_SCORE)
      })

      it('should return the maximum total score', function () {
        expect(outcome.TOTAL).toEqual(MINI_BEST_TEST_TOTAL_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = mini_best_test_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score for the "Anticipatory postural adjustments" section', function () {
        const EXPECTED_ANTICIPATORY_POSTURAL_ADJUSTEMENTS_SCORE = 3
        expect(outcome.ANTICIPATORY_POSTURAL_ADJUSTEMENTS).toEqual(
          EXPECTED_ANTICIPATORY_POSTURAL_ADJUSTEMENTS_SCORE,
        )
      })

      it('should return the expected score for the "Reactive postural control" section', function () {
        const EXPECTED_REACTIVE_POSTURAL_CONTROL_SCORE = 2
        expect(outcome.REACTIVE_POSTURAL_CONTROL).toEqual(
          EXPECTED_REACTIVE_POSTURAL_CONTROL_SCORE,
        )
      })

      it('should return the expected score for the "Sensory orientation" section', function () {
        const EXPECTED_SENSORY_ORIENTATION_SCORE = 3
        expect(outcome.SENSORY_ORIENTATION).toEqual(
          EXPECTED_SENSORY_ORIENTATION_SCORE,
        )
      })

      it('should return the expected score for the "Dynamic gait" section', function () {
        const EXPECTED_DYNAMIC_GAIT_SCORE = 5
        expect(outcome.DYNAMIC_GAIT).toEqual(EXPECTED_DYNAMIC_GAIT_SCORE)
      })

      it('should return the expected total score', function () {
        const EXPECTED_TOTAL = 13
        expect(outcome.TOTAL).toEqual(EXPECTED_TOTAL)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mini_best_test_calculation.calculate({
            payload: {
              ...min_response,
              MINI_BEST_TEST_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mini_best_test_calculation.calculate({
            payload: {
              ...min_response,
              MINI_BEST_TEST_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mini_best_test_calculation.calculate({
            payload: {
              ...min_response,
              MINI_BEST_TEST_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
