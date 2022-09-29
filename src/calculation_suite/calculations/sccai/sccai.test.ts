import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/SCCAI_responses'
import { SCCAI_INPUTS } from './definition/sccai_inputs'
import { sccai } from './sccai'

const SCCAI_BEST_SCORE = 0
const SCCAI_MEDIAN_SCORE = 9
const SCCAI_WORST_SCORE = 19

const sccai_calculation = execute_test_calculation(sccai)

describe('sccai', function () {
  it('sccai calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('sccai')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'number_of_stools_during_day',
        'nbr_stools_during_night',
        'urgency_of_going_to_toilet',
        'blood_in_stool',
        'general_wellness',
        'joint_pain',
        'eye_problems',
        'deep_skin_problems',
        'surface_skin_problems',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(SCCAI_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sccai_calculation(best_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['SCCAI'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst score', function () {
        const outcome = R.compose(
          view_result(),
          sccai_calculation
        )(worst_response)

        expect(outcome).to.eql(SCCAI_WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = R.compose(
          view_result(),
          sccai_calculation
        )(median_response)

        expect(outcome).to.eql(SCCAI_MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best score', function () {
        const outcome = R.compose(
          view_result(),
          sccai_calculation
        )(best_response)

        expect(outcome).to.eql(SCCAI_BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = R.compose(
          view_result(),
          sccai_calculation
        )(random_response)

        const EXPECTED_SCORE = 10

        expect(outcome).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed (i.e. not all inputs of SCCAI are answered)', function () {
      it('should return undefined as the result', function () {
        const outcome = R.compose(view_result(), sccai_calculation)({})

        expect(outcome).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          sccai_calculation({
            number_of_stools_during_day: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an error', function () {
        expect(() =>
          sccai_calculation({
            number_of_stools_during_day: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sccai_calculation({
            number_of_stools_during_day: 4,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
