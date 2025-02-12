// @flow
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
  min_response,
  random_response
} from './__testdata__/haq_form_responses'
import { HAQ_INPUTS } from './definition/haq_inputs'
import { haq } from './haq'

const HAQ_MIN_SCORE = 0
const HAQ_MAX_SCORE = 3

const haq_calculation = execute_test_calculation(haq)

describe('haq', function () {
  it('haq calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('haq')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'DRESSING_1',
        'DRESSING_2',
        'ARISING_1',
        'ARISING_2',
        'EATING_1',
        'EATING_2',
        'EATING_3',
        'WALKING_1',
        'WALKING_2',
        'AIDS_OR_DEVICES_PART_1',
        'NEED_HELP_PART_1',
        'HYGIENE_1',
        'HYGIENE_2',
        'HYGIENE_3',
        'REACH_1',
        'REACH_2',
        'GRIP_1',
        'GRIP_2',
        'GRIP_3',
        'ACTIVITIES_1',
        'ACTIVITIES_2',
        'ACTIVITIES_3',
        'AIDS_OR_DEVICES_PART_2',
        'NEED_HELP_PART_2'
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(HAQ_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })

    it('should use the expected answer values for sections that need help', function () {
      const EXPECTED_ANSWER_OPTIONS = [
        'dressing',
        'arising',
        'eating',
        'walking',
        'hygiene',
        'reach',
        'grip',
        'activities'
      ]

      const help_answer_options = HAQ_INPUTS.filter((i) =>
        ['NEED_HELP_PART_1', 'NEED_HELP_PART_2'].includes(i.input_id)
      )
        // $FlowFixMe
        .flatMap((_) => _.input_type?.allowed_answers)
        .map((_) => _?.value)

      expect(help_answer_options).to.have.members(EXPECTED_ANSWER_OPTIONS)
    })

    it('should use the answer values for sections that need help', function () {
      const EXPECTED_ANSWER_OPTIONS = [
        'cane',
        'walker',
        'crutches',
        'wheelchair',
        'devices_used_for_dressing',
        'built_up_or_special_utensils',
        'special_or_built_up_chair',
        'other',
        'raised_toilet_seat',
        'bathtub_seat',
        'jar_opener',
        'long_handled_appliances_for_reach',
        'long_handled_appliances_in_bathroom',
        'bathtub_bar',
        'other'
      ]

      const aids_answer_options = HAQ_INPUTS.filter((i) =>
        ['AIDS_OR_DEVICES_PART_1', 'AIDS_OR_DEVICES_PART_2'].includes(
          i.input_id
        )
      )
        // $FlowFixMe
        .flatMap((_) => _.input_type?.allowed_answers)
        .map((_) => _?.value)

      expect(aids_answer_options).to.have.members(EXPECTED_ANSWER_OPTIONS)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = haq_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.have.members(['DI'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = R.compose(view_result(), haq_calculation)(min_response)

        expect(score).to.eql(HAQ_MIN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = R.compose(view_result(), haq_calculation)(max_response)

        expect(score).to.eql(HAQ_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(view_result(), haq_calculation)(random_response)

        const EXPECTED_SCORE = 2.25

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = haq_calculation({})
        const result = view_result()(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          haq_calculation({
            DRESSING_1: "I'm not a number"
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          haq_calculation({
            DRESSING_1: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          haq_calculation({
            DRESSING_1: 4
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
