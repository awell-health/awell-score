import { expect } from 'chai'
import R from 'ramda'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/oks_test_responses'
import { OKS_INPUTS } from './definition/oxford_knee_score_inputs'
import { oxford_knee_score } from './oxford_knee_score'

const OKS_8_WORST_SCORE = 0
const OKS_MEDIAN_SCORE = 24
const OKS_8_BEST_SCORE = 48

const oxford_knee_score_calculation =
  execute_test_calculation(oxford_knee_score)

describe('oxford_knee_score', function () {
  it('oxford_knee_score calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('oxford_knee_score')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        '1_usual_knee_pain',
        '2_washing_and_trouble_washing',
        '3_car_problem',
        '4_time_before_pain',
        '5_table_pain',
        '6_have_you_been_limping_when_walking',
        '7_kneel_down_and_get_up',
        '8_trouble_with_night_pain',
        '9_usual_pain_work',
        '10_knee_sudden_failure',
        '11_household_shopping',
        '12_flight_of_stairs',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(OKS_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = oxford_knee_score_calculation(best_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['OXFORD_KNEE_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst total score', function () {
        const outcome = R.compose(
          view_result(),
          oxford_knee_score_calculation,
        )(worst_response)

        expect(outcome).toEqual(OKS_8_WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = R.compose(
          view_result(),
          oxford_knee_score_calculation,
        )(median_response)

        expect(outcome).toEqual(OKS_MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best total score', function () {
        const outcome = R.compose(
          view_result(),
          oxford_knee_score_calculation,
        )(best_response)

        expect(outcome).toEqual(OKS_8_BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = R.compose(
          view_result(),
          oxford_knee_score_calculation,
        )(random_response)

        const EXPECTED_SCORE = 22

        expect(outcome).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = R.compose(
          view_result(),
          oxford_knee_score_calculation,
        )({})

        expect(outcome).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oxford_knee_score_calculation({
            '1_usual_knee_pain': "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oxford_knee_score_calculation({
            '1_usual_knee_pain': -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oxford_knee_score_calculation({
            '1_usual_knee_pain': 5,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
