import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  minimum_response,
  random_response_with_insufficient_physical_activity,
  random_response_with_sufficient_physical_activity,
} from './__testdata__/physical_activity_measurements_responses'
import { physical_activity_measurement } from './physical_activity_measurement'

const physical_activity_measurement_calculation = new Score(
  physical_activity_measurement,
)

describe('physical_activity_measurement', function () {
  it('physical_activity_measurement calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('physical_activity_measurement')
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

      const configured_calculation_input_ids = Object.keys(
        physical_activity_measurement_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = physical_activity_measurement_calculation.calculate({
      payload: minimum_response,
    })

    it('should return 3 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PA_MINUTES_PER_WEEK',
        'PA_MET_MINUTES_PER_WEEK',
        'ENOUGH_PA',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      const outcome = physical_activity_measurement_calculation.calculate({
        payload: minimum_response,
      })

      it('should return 0 for "PA_MINUTES_PER_WEEK" calculation', function () {
        expect(outcome.PA_MINUTES_PER_WEEK).toEqual(0)
      })

      it('should return 0 for "PA_MET_MINUTES_PER_WEEK" calculation', function () {
        expect(outcome.PA_MET_MINUTES_PER_WEEK).toEqual(0)
      })

      it('should return 0 for "ENOUGH_PA" calculation', function () {
        expect(outcome.ENOUGH_PA).toEqual(0)
      })
    })

    describe('when called with a random response with insufficient physical activity', function () {
      const outcome = physical_activity_measurement_calculation.calculate({
        payload: random_response_with_insufficient_physical_activity,
      })

      it('should return the expected score for "PA_MINUTES_PER_WEEK" calculation', function () {
        expect(outcome.PA_MINUTES_PER_WEEK).toEqual(60)
      })

      it('should return the expected score for "PA_MET_MINUTES_PER_WEEK" calculation', function () {
        expect(outcome.PA_MET_MINUTES_PER_WEEK).toEqual(169.5)
      })

      it('should return the expected score for "ENOUGH_PA" calculation', function () {
        expect(outcome.ENOUGH_PA).toEqual(0)
      })
    })

    describe('when called with a random response with sufficient physical activity', function () {
      const outcome = physical_activity_measurement_calculation.calculate({
        payload: random_response_with_sufficient_physical_activity,
      })

      it('should return the expected score for "PA_MINUTES_PER_WEEK" calculation', function () {
        expect(outcome.PA_MINUTES_PER_WEEK).toEqual(480)
      })

      it('should return the expected score for "PA_MET_MINUTES_PER_WEEK" calculation', function () {
        expect(outcome.PA_MET_MINUTES_PER_WEEK).toEqual(2274)
      })

      it('should return the expected score for "ENOUGH_PA" calculation', function () {
        expect(outcome.ENOUGH_PA).toEqual(1)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the score for each result', function () {
        const outcome = physical_activity_measurement_calculation.calculate({
          payload: {},
        })

        Object.values(outcome).forEach(result => {
          expect(result).toEqual(null)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          physical_activity_measurement_calculation.calculate({
            payload: {
              ...minimum_response,
              LIGHT_PA_DAYS_PER_WEEK: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not one of the allowed answers (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          physical_activity_measurement_calculation.calculate({
            payload: {
              ...minimum_response,
              LIGHT_PA_DAYS_PER_WEEK: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed one of the allowed answers (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          physical_activity_measurement_calculation.calculate({
            payload: {
              ...minimum_response,
              LIGHT_PA_DAYS_PER_WEEK: 8,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
