import { expect } from 'chai'
import R from 'ramda'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  minimum_response,
  random_response_with_insufficient_physical_activity,
  random_response_with_sufficient_physical_activity,
} from './__testdata__/physical_activity_measurements_responses'
import { PA_INPUTS } from './definition/physical_activity_measurements_inputs'
import { physical_activity_measurement } from './physical_activity_measurements'

const physical_activity_measurement_calculation = execute_test_calculation(
  physical_activity_measurement,
)

describe('physical_activity_measurement', function () {
  it('physical_activity_measurement calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('physical_activity_measurement')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'LIGHT_PA_DAYS_PER_WEEK',
        'LIGHT_PA_MINUTES_PER_DAY',
        'MODERATE_PA_DAYS_PER_WEEK',
        'MODERATE_PA_MINUTES_PER_DAY',
        'VIGOROUS_PA_DAYS_PER_WEEK',
        'VIGOROUS_PA_MINUTES_PER_DAY',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(PA_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = R.compose(physical_activity_measurement_calculation)(
      minimum_response,
    )

    it('should return 3 calculation results', function () {
      expect(outcome).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PA_MINUTES_PER_WEEK',
        'PA_MET_MINUTES_PER_WEEK',
        'ENOUGH_PA',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      const outcome = R.compose(physical_activity_measurement_calculation)(
        minimum_response,
      )

      it('should return 0 for "PA_MINUTES_PER_WEEK" calculation', function () {
        const score = view_result('PA_MINUTES_PER_WEEK')(outcome)
        expect(score).toEqual(0)
      })

      it('should return 0 for "PA_MET_MINUTES_PER_WEEK" calculation', function () {
        const score = view_result('PA_MET_MINUTES_PER_WEEK')(outcome)
        expect(score).toEqual(0)
      })

      it('should return 0 for "ENOUGH_PA" calculation', function () {
        const score = view_result('ENOUGH_PA')(outcome)
        expect(score).toEqual(0)
      })
    })

    describe('when called with a random response with insufficient physical activity', function () {
      const outcome = R.compose(physical_activity_measurement_calculation)(
        random_response_with_insufficient_physical_activity,
      )

      it('should return the expected score for "PA_MINUTES_PER_WEEK" calculation', function () {
        const score = view_result('PA_MINUTES_PER_WEEK')(outcome)
        const EXPECTED_SCORE = 60

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "PA_MET_MINUTES_PER_WEEK" calculation', function () {
        const score = view_result('PA_MET_MINUTES_PER_WEEK')(outcome)
        const EXPECTED_SCORE = 169.5

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "ENOUGH_PA" calculation', function () {
        const score = view_result('ENOUGH_PA')(outcome)
        const EXPECTED_SCORE = 0

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with a random response with sufficient physical activity', function () {
      const outcome = R.compose(physical_activity_measurement_calculation)(
        random_response_with_sufficient_physical_activity,
      )

      it('should return the expected score for "PA_MINUTES_PER_WEEK" calculation', function () {
        const score = view_result('PA_MINUTES_PER_WEEK')(outcome)
        const EXPECTED_SCORE = 480

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "PA_MET_MINUTES_PER_WEEK" calculation', function () {
        const score = view_result('PA_MET_MINUTES_PER_WEEK')(outcome)
        const EXPECTED_SCORE = 2274

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "ENOUGH_PA" calculation', function () {
        const score = view_result('ENOUGH_PA')(outcome)
        const EXPECTED_SCORE = 1

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return MISSING_MESSAGE as the score for each result', function () {
        const outcome = R.compose(physical_activity_measurement_calculation)({})

        outcome.forEach(result => {
          const score = result.result
          expect(score).toEqual(undefined)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          physical_activity_measurement_calculation({
            LIGHT_PA_DAYS_PER_WEEK: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not one of the allowed answers (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          physical_activity_measurement_calculation({
            LIGHT_PA_DAYS_PER_WEEK: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed one of the allowed answers (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          physical_activity_measurement_calculation({
            LIGHT_PA_DAYS_PER_WEEK: 8,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
