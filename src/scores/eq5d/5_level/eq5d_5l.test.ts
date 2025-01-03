import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/eq5d_5l_test_responses'
import { EQ5D_5L_INPUTS } from './definition/eq5d_5l_inputs'
import { eq5d_5l } from './eq5d_5l'

const EQ5D_5L_MIN_HEALTH_STATE = 11111
const EQ5D_5L_MEDIAN_HEALTH_STATE = 33333
const EQ5D_5L_MAX_HEALTH_STATE = 55555

const EQ5D_5L_MIN_VAS = 0
const EQ5D_5L_MEDIAN_VAS = 50
const EQ5D_5L_MAX_VAS = 100

const eq5d_5l_calculation = new Score(eq5d_5l)

describe('eq5d_5l', function () {
  it('eq5d_5l calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('eq5d_5l')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'eq5d_5l_mobility',
        'eq5d_5l_selfcare',
        'eq5d_5l_usual',
        'eq5d_5l_pain',
        'eq5d_5l_anxiety',
        'eq5d_5l_vas',
      ]

      const configured_calculation_input_ids = Object.keys(
        eq5d_5l_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = eq5d_5l_calculation.calculate({ payload: min_response })

    it('should return 2 scores', function () {
      expect(Object.keys(outcome).length).toEqual(3)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'EQ_HEALTH_STATE',
        'EQ_VAS',
        'UTILITY_VALUE_HEALTH_STATE_BELGIUM',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = eq5d_5l_calculation.calculate({ payload: min_response })

      it('should return the minimum score for EQ Health state', function () {
        expect(outcome.EQ_HEALTH_STATE).toEqual(EQ5D_5L_MIN_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        expect(outcome.EQ_VAS).toEqual(EQ5D_5L_MIN_VAS)
      })

      it('should return a score for EQ Utility Value (Belgium)', function () {
        expect(outcome.UTILITY_VALUE_HEALTH_STATE_BELGIUM).toEqual(1)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = eq5d_5l_calculation.calculate({
        payload: median_response,
      })

      it('should return the minimum score for EQ Health state', function () {
        expect(outcome.EQ_HEALTH_STATE).toEqual(EQ5D_5L_MEDIAN_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        expect(outcome.EQ_VAS).toEqual(EQ5D_5L_MEDIAN_VAS)
      })

      it('should return a score for EQ Utility Value (Belgium)', function () {
        expect(outcome.UTILITY_VALUE_HEALTH_STATE_BELGIUM).toEqual(
          0.576553031441399,
        )
      })
    })

    describe('when a maximum response is passed', function () {
      const outcome = eq5d_5l_calculation.calculate({ payload: max_response })

      it('should return the minimum score for EQ Health state', function () {
        expect(outcome.EQ_HEALTH_STATE).toEqual(EQ5D_5L_MAX_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        expect(outcome.EQ_VAS).toEqual(EQ5D_5L_MAX_VAS)
      })

      it('should return a score for EQ Utility Value (Belgium)', function () {
        expect(outcome.UTILITY_VALUE_HEALTH_STATE_BELGIUM).toEqual(
          -0.531645728835225,
        )
      })
    })

    describe('when a random response is passed', function () {
      const outcome = eq5d_5l_calculation.calculate({
        payload: random_response,
      })

      it('should return the minimum score for EQ Health state', function () {
        const EXPECTED_HEALTH_STATE = 15421
        expect(outcome.EQ_HEALTH_STATE).toEqual(EXPECTED_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        const EXPECTED_VAS_SCORE = 74
        expect(outcome.EQ_VAS).toEqual(EXPECTED_VAS_SCORE)
      })

      it('should return a score for EQ Utility Value (Belgium)', function () {
        expect(outcome.UTILITY_VALUE_HEALTH_STATE_BELGIUM).toEqual(
          0.587383672120598,
        )
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => eq5d_5l_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eq5d_5l_calculation.calculate({
            payload: {
              eq5d_5l_mobility: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eq5d_5l_calculation.calculate({
            payload: {
              eq5d_5l_mobility: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eq5d_5l_calculation.calculate({
            payload: {
              eq5d_5l_mobility: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
