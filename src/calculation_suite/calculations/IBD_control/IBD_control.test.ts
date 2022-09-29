import { expect } from 'chai'

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
} from './__testdata__/IBD_control_responses'
import { IBD_CONTROL_INPUTS } from './definition/ibd_control_inputs'
import { IBD_control } from './IBD_control'

const IBD_CONTROL_8_MIN_SCORE = 0
const IBD_CONTROL_8_MEDIAN_SCORE = 8
const IBD_CONTROL_8_MAX_SCORE = 16

const IBD_CONTROL_VAS_MIN_SCORE = 0
const IBD_CONTROL_VAS_MEDIAN_SCORE = 50
const IBD_CONTROL_VAS_MAX_SCORE = 100

const ibd_control_calculation = execute_test_calculation(IBD_control)

describe('IBD_control', function () {
  it('IBD_control calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('IBD_control')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ibd_control_1a',
        'ibd_control_1b',
        'ibd_control_3a',
        'ibd_control_3b',
        'ibd_control_3c',
        'ibd_control_3d',
        'ibd_control_3e',
        'ibd_control_3f',
        'ibd_control_5',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(IBD_CONTROL_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ibd_control_calculation(min_response)

    it('should return 2 scores', function () {
      expect(outcome).to.have.length(2)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['IBD_CONTROL_8', 'IBD_CONTROL_VAS']

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).to.eql(
        extracted_calculation_ids_from_outcome
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = ibd_control_calculation(min_response)

      it('should return the minimum score for IBD-Control-8', function () {
        const IBD_CONTROL_8_SCORE = view_result('IBD_CONTROL_8')(outcome)
        expect(IBD_CONTROL_8_SCORE).to.eql(IBD_CONTROL_8_MIN_SCORE)
      })

      it('should return the minimum score for IBD-Control-VAS', function () {
        const IBD_CONTROL_VAS_SCORE = view_result('IBD_CONTROL_VAS')(outcome)
        expect(IBD_CONTROL_VAS_SCORE).to.eql(IBD_CONTROL_VAS_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = ibd_control_calculation(median_response)

      it('should return the median score for IBD-Control-8', function () {
        const IBD_CONTROL_8_SCORE = view_result('IBD_CONTROL_8')(outcome)
        expect(IBD_CONTROL_8_SCORE).to.eql(IBD_CONTROL_8_MEDIAN_SCORE)
      })

      it('should return the median score for IBD-Control-VAS', function () {
        const IBD_CONTROL_VAS_SCORE = view_result('IBD_CONTROL_VAS')(outcome)
        expect(IBD_CONTROL_VAS_SCORE).to.eql(IBD_CONTROL_VAS_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      const outcome = ibd_control_calculation(max_response)

      it('should return the maximum score for IBD-Control-8', function () {
        const IBD_CONTROL_8_SCORE = view_result('IBD_CONTROL_8')(outcome)
        expect(IBD_CONTROL_8_SCORE).to.eql(IBD_CONTROL_8_MAX_SCORE)
      })

      it('should return the maximum score for IBD-Control-VAS', function () {
        const IBD_CONTROL_VAS_SCORE = view_result('IBD_CONTROL_VAS')(outcome)
        expect(IBD_CONTROL_VAS_SCORE).to.eql(IBD_CONTROL_VAS_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = ibd_control_calculation(random_response)

      it('should return the expected score for IBD-Control-8', function () {
        const IBD_CONTROL_8_SCORE = view_result('IBD_CONTROL_8')(outcome)
        const EXPECTED_CONTROL_8_SCORE = 7
        expect(IBD_CONTROL_8_SCORE).to.eql(EXPECTED_CONTROL_8_SCORE)
      })

      it('should return the expected score for IBD-Control-VAS', function () {
        const IBD_CONTROL_VAS_SCORE = view_result('IBD_CONTROL_VAS')(outcome)
        const EXPECTED_CONTROL_VAS_SCORE = 54
        expect(IBD_CONTROL_VAS_SCORE).to.eql(EXPECTED_CONTROL_VAS_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = ibd_control_calculation({})

      it('should return MISSING_MESSAGE for the IBD-Control-8', function () {
        const IBD_CONTROL_8_SCORE = view_result('IBD_CONTROL_8')(outcome)
        expect(IBD_CONTROL_8_SCORE).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE for the IBD-Control-VAS', function () {
        const IBD_CONTROL_VAS_SCORE = view_result('IBD_CONTROL_VAS')(outcome)
        expect(IBD_CONTROL_VAS_SCORE).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ibd_control_calculation({
            ibd_control_1a: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ibd_control_calculation({
            ibd_control_1a: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ibd_control_calculation({
            ibd_control_5: 101, // VAS
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
