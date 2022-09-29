import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/koos_ps_form_responses'
import { KOOS_PS_INPUTS } from './definition/koos_ps_inputs'
// eslint-disable-next-line sort-imports
import { koos_ps, KOOS_PS_CALCULATION_ID } from './koos_ps'

const KOOS_WORST_SCORE = 0
const KOOS_MEDIAN_SCORE = 59.7
const KOOS_BEST_SCORE = 100

const koos_ps_calculation = execute_test_calculation(koos_ps)

describe('koos_ps', function () {
  it('koos_ps calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('koos_ps')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        '1_rise_from_bed',
        '2_socks',
        '3_rise_from_chair',
        '4_pickup_from_floor',
        '5_turn_on_knee',
        '6_kneel',
        '7_staying_squat',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(KOOS_PS_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = koos_ps_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['KOOS_PS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum (best) response', function () {
      it('should return the best score', function () {
        const score = R.compose(
          view_result(KOOS_PS_CALCULATION_ID),
          koos_ps_calculation
        )(min_response)

        expect(score).to.eql(KOOS_BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result(KOOS_PS_CALCULATION_ID),
          koos_ps_calculation
        )(median_response)

        expect(score).to.eql(KOOS_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum (worst) response', function () {
      it('should return the worst score', function () {
        const score = R.compose(
          view_result(KOOS_PS_CALCULATION_ID),
          koos_ps_calculation
        )(max_response)

        expect(score).to.eql(KOOS_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(KOOS_PS_CALCULATION_ID),
          koos_ps_calculation
        )(random_response)

        const EXPECTED_SCORE = 64.7

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const score = R.compose(
          view_result(KOOS_PS_CALCULATION_ID),
          koos_ps_calculation
        )({})

        expect(score).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          koos_ps_calculation({
            '1_rise_from_bed': "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          koos_ps_calculation({
            '1_rise_from_bed': -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          koos_ps_calculation({
            '1_rise_from_bed': 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
