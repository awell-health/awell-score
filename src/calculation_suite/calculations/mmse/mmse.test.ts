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
} from './__testdata__/mmse_responses'
import { MMSE_INPUTS } from './definition/mmse_inputs'
// eslint-disable-next-line sort-imports
import { mmse, MMSE_CALCULATION_ID } from './mmse'

const MMSE_MIN_SCORE = 0
const MMSE_MEDIAN_SCORE = 15
const MMSE_MAX_SCORE = 30

const mmse_calculation = execute_test_calculation(mmse)

describe('mmse', function () {
  it('mmse calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('mmse')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ORIENTATION_TO_TIME',
        'ORIENTATION_TO_PLACE',
        'REGISTRATION',
        'ATTENTION_AND_CALCULATION',
        'RECALL',
        'LANGUAGE',
        'CONSTRUCT',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(MMSE_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = mmse_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['MMSE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = R.compose(
          view_result(MMSE_CALCULATION_ID),
          mmse_calculation
        )(min_response)

        expect(score).to.eql(MMSE_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result(MMSE_CALCULATION_ID),
          mmse_calculation
        )(median_response)

        expect(score).to.eql(MMSE_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = R.compose(
          view_result(MMSE_CALCULATION_ID),
          mmse_calculation
        )(max_response)

        expect(score).to.eql(MMSE_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(MMSE_CALCULATION_ID),
          mmse_calculation
        )(random_response)

        const EXPECTED_SCORE = 13

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const score = R.compose(
          view_result(MMSE_CALCULATION_ID),
          mmse_calculation
        )({})

        expect(score).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an error', function () {
        expect(() =>
          mmse_calculation({
            ORIENTATION_TO_TIME: "I'm not a number, you can't do math with me",
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with a response where there are answers that are not allowed', function () {
      it('should throw an InvalidInputsError when value on "ORIENTATION_TO_TIME" is out of the expected [0, 5] range', function () {
        expect(() =>
          mmse_calculation({
            ORIENTATION_TO_TIME: 6,
          })
        ).to.throw(InvalidInputsError)
      })

      it('should throw an InvalidInputsError when value on "ORIENTATION_TO_PLACE" is out of the expected [0, 5] range', function () {
        expect(() =>
          mmse_calculation({
            ORIENTATION_TO_PLACE: 6,
          })
        ).to.throw(InvalidInputsError)
      })

      it('should throw an InvalidInputsError when value on "REGISTRATION" is out of the expected [0, 3] range', function () {
        expect(() =>
          mmse_calculation({
            REGISTRATION: 4,
          })
        ).to.throw(InvalidInputsError)
      })

      it('should throw an InvalidInputsError when value on "ATTENTION_AND_CALCULATION" is out of the expected [0, 5] range', function () {
        expect(() =>
          mmse_calculation({
            ATTENTION_AND_CALCULATION: 6,
          })
        ).to.throw(InvalidInputsError)
      })

      it('should throw an InvalidInputsError when value on "RECALL" is out of the expected [0, 3] range', function () {
        expect(() =>
          mmse_calculation({
            RECALL: 4,
          })
        ).to.throw(InvalidInputsError)
      })

      it('should throw an InvalidInputsError when value on "LANGUAGE" is out of the expected [0, 8] range', function () {
        expect(() =>
          mmse_calculation({
            LANGUAGE: 9,
          })
        ).to.throw(InvalidInputsError)
      })

      it('should throw an InvalidInputsError when value on "CONSTRUCT" is out of the expected [0, 1] range', function () {
        expect(() =>
          mmse_calculation({
            CONSTRUCT: 2,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
