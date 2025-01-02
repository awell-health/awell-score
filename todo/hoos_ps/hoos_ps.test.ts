import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../src/calculation_suite/errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../../src/calculation_suite/calculations/calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/hoos_ps_form_responses'
import { HOOS_PS_INPUTS } from './definition/hoos_ps_inputs'
// eslint-disable-next-line sort-imports
import { hoos_ps, HOOS_PS_CALCULATION_ID } from './hoos_ps'

const HOOS_WORST_SCORE = 0
const HOOS_MEDIAN_SCORE = 62.3
const HOOS_BEST_SCORE = 100

const hoos_ps_calculation = execute_test_calculation(hoos_ps)

describe('hoos_ps', function () {
  it('hoos_ps calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('hoos_ps')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        '1_stairs',
        '2_bath_shower',
        '3_sit',
        '4_running',
        '5_turn_on_leg',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(HOOS_PS_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = hoos_ps_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['HOOS_PS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum (best) response', function () {
      it('should return the best score', function () {
        const score = R.compose(
          view_result(HOOS_PS_CALCULATION_ID),
          hoos_ps_calculation,
        )(min_response)

        expect(score).toEqual(HOOS_BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result(HOOS_PS_CALCULATION_ID),
          hoos_ps_calculation,
        )(median_response)

        expect(score).toEqual(HOOS_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum (worst) response', function () {
      it('should return the worst score', function () {
        const score = R.compose(
          view_result(HOOS_PS_CALCULATION_ID),
          hoos_ps_calculation,
        )(max_response)

        expect(score).toEqual(HOOS_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(HOOS_PS_CALCULATION_ID),
          hoos_ps_calculation,
        )(random_response)

        const EXPECTED_SCORE = 58.3

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const score = R.compose(
          view_result(HOOS_PS_CALCULATION_ID),
          hoos_ps_calculation,
        )({})

        expect(score).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hoos_ps_calculation({
            '1_stairs': "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hoos_ps_calculation({
            '1_stairs': -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hoos_ps_calculation({
            '1_stairs': 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
