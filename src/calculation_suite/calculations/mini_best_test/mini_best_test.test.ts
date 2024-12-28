import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../shared_functions'
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

const mini_best_test_calculation = execute_test_calculation(mini_best_test)

describe('mini_best_test', function () {
  it('mini_best_test calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('mini_best_test')
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
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(MINI_BEST_TEST_SECTIONS)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Anticipatory postural adjustments" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q01',
        'MINI_BEST_TEST_Q02',
        'MINI_BEST_TEST_Q03_LEFT',
        'MINI_BEST_TEST_Q03_RIGHT',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'ANTICIPATORY_POSTURAL_ADJUSTEMENTS'
        )(MINI_BEST_TEST_SECTIONS)
      )
    })

    it('should have the expected input idss configured for the "Reactive postural control" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q04',
        'MINI_BEST_TEST_Q05',
        'MINI_BEST_TEST_Q06_LEFT',
        'MINI_BEST_TEST_Q06_RIGHT',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('REACTIVE_POSTURAL_CONTROL')(
          MINI_BEST_TEST_SECTIONS
        )
      )
    })

    it('should have the expected input idss configured for the "Sensory orientation" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'MINI_BEST_TEST_Q07',
        'MINI_BEST_TEST_Q08',
        'MINI_BEST_TEST_Q09',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SENSORY_ORIENTATION')(
          MINI_BEST_TEST_SECTIONS
        )
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

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('DYNAMIC_GAIT')(
          MINI_BEST_TEST_SECTIONS
        )
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = mini_best_test_calculation(min_response)

    it('should return a score for all subscales (n=4) and a total score', function () {
      expect(outcome).to.have.length(5)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'ANTICIPATORY_POSTURAL_ADJUSTEMENTS',
        'REACTIVE_POSTURAL_CONTROL',
        'SENSORY_ORIENTATION',
        'DYNAMIC_GAIT',
        'TOTAL',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).to.eql(
        extracted_calculation_ids_from_outcome
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = mini_best_test_calculation({})

      it('should return undefined as the result for "Anticipatory postural adjustments" subscale', function () {
        const score = view_result('ANTICIPATORY_POSTURAL_ADJUSTEMENTS')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined as the result for "Reactive postural control" subscale', function () {
        const score = view_result('REACTIVE_POSTURAL_CONTROL')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined as the result for "Sensory orientation" subscale', function () {
        const score = view_result('SENSORY_ORIENTATION')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined as the result for "Dynamic gait" subscale', function () {
        const score = view_result('DYNAMIC_GAIT')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined for the total score', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).to.eql(undefined)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      const outcome = mini_best_test_calculation(min_response)

      it('should return the minimum the score for "Anticipatory postural adjustments" subscale', function () {
        const score = view_result('ANTICIPATORY_POSTURAL_ADJUSTEMENTS')(outcome)
        const EXPECTED_MIN_SCORE = 0

        expect(score).to.eql(EXPECTED_MIN_SCORE)
      })

      it('should return the minimum the score for "Reactive postural control" subscale', function () {
        const score = view_result('REACTIVE_POSTURAL_CONTROL')(outcome)
        const EXPECTED_MIN_SCORE = 0

        expect(score).to.eql(EXPECTED_MIN_SCORE)
      })

      it('should return the minimum the score for "Sensory orientation" subscale', function () {
        const score = view_result('SENSORY_ORIENTATION')(outcome)
        const EXPECTED_MIN_SCORE = 0

        expect(score).to.eql(EXPECTED_MIN_SCORE)
      })

      it('should return the minimum the score for "Dynamic gait" subscale', function () {
        const score = view_result('DYNAMIC_GAIT')(outcome)
        const EXPECTED_MIN_SCORE = 0

        expect(score).to.eql(EXPECTED_MIN_SCORE)
      })

      it('should return the minimum total score', function () {
        const score = view_result('TOTAL')(outcome)

        expect(score).to.eql(MINI_BEST_TEST_TOTAL_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = mini_best_test_calculation(median_response)

      it('should return the median the score for "Anticipatory postural adjustments" subscale', function () {
        const score = view_result('ANTICIPATORY_POSTURAL_ADJUSTEMENTS')(outcome)
        const EXPECTED_MEDIAN_SCORE = 3

        expect(score).to.eql(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the median the score for "Reactive postural control" subscale', function () {
        const score = view_result('REACTIVE_POSTURAL_CONTROL')(outcome)
        const EXPECTED_MEDIAN_SCORE = 3

        expect(score).to.eql(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the median the score for "Sensory orientation" subscale', function () {
        const score = view_result('SENSORY_ORIENTATION')(outcome)
        const EXPECTED_MEDIAN_SCORE = 3

        expect(score).to.eql(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the median the score for "Dynamic gait" subscale', function () {
        const score = view_result('DYNAMIC_GAIT')(outcome)
        const EXPECTED_MEDIAN_SCORE = 5

        expect(score).to.eql(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the median total score', function () {
        const score = view_result('TOTAL')(outcome)

        expect(score).to.eql(MINI_BEST_TEST_TOTAL_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      const outcome = mini_best_test_calculation(max_response)

      it('should return the maximum the score for "Anticipatory postural adjustments" subscale', function () {
        const score = view_result('ANTICIPATORY_POSTURAL_ADJUSTEMENTS')(outcome)
        const EXPECTED_MAX_SCORE = 6

        expect(score).to.eql(EXPECTED_MAX_SCORE)
      })

      it('should return the maximum the score for "Reactive postural control" subscale', function () {
        const score = view_result('REACTIVE_POSTURAL_CONTROL')(outcome)
        const EXPECTED_MAX_SCORE = 6

        expect(score).to.eql(EXPECTED_MAX_SCORE)
      })

      it('should return the maximum the score for "Sensory orientation" subscale', function () {
        const score = view_result('SENSORY_ORIENTATION')(outcome)
        const EXPECTED_MAX_SCORE = 6

        expect(score).to.eql(EXPECTED_MAX_SCORE)
      })

      it('should return the maximum the score for "Dynamic gait" subscale', function () {
        const score = view_result('DYNAMIC_GAIT')(outcome)
        const EXPECTED_MAX_SCORE = 10

        expect(score).to.eql(EXPECTED_MAX_SCORE)
      })

      it('should return the maximum total score', function () {
        const score = view_result('TOTAL')(outcome)

        expect(score).to.eql(MINI_BEST_TEST_TOTAL_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = mini_best_test_calculation(random_response)

      it('should return the expected score for the "Anticipatory postural adjustments" section', function () {
        const score = view_result('ANTICIPATORY_POSTURAL_ADJUSTEMENTS')(outcome)
        const EXPECTED_ANTICIPATORY_POSTURAL_ADJUSTEMENTS_SCORE = 3

        expect(score).to.eql(EXPECTED_ANTICIPATORY_POSTURAL_ADJUSTEMENTS_SCORE)
      })

      it('should return the expected score for the "Reactive postural control" section', function () {
        const score = view_result('REACTIVE_POSTURAL_CONTROL')(outcome)
        const EXPECTED_REACTIVE_POSTURAL_CONTROL_SCORE = 2

        expect(score).to.eql(EXPECTED_REACTIVE_POSTURAL_CONTROL_SCORE)
      })

      it('should return the expected score for the "Sensory orientation" section', function () {
        const score = view_result('SENSORY_ORIENTATION')(outcome)
        const EXPECTED_SENSORY_ORIENTATION_SCORE = 3

        expect(score).to.eql(EXPECTED_SENSORY_ORIENTATION_SCORE)
      })

      it('should return the expected score for the "Dynamic gait" section', function () {
        const score = view_result('DYNAMIC_GAIT')(outcome)
        const EXPECTED_DYNAMIC_GAIT_SCORE = 5

        expect(score).to.eql(EXPECTED_DYNAMIC_GAIT_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('TOTAL')(outcome)
        const EXPECTED_TOTAL = 13

        expect(score).to.eql(EXPECTED_TOTAL)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mini_best_test_calculation({
            MINI_BEST_TEST_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mini_best_test_calculation({
            MINI_BEST_TEST_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mini_best_test_calculation({
            MINI_BEST_TEST_Q01: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
