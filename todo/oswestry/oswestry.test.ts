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
  response_with_one_missing_item,
} from './__testdata__/oswestry_form_responses'
import { OSWESTRY_INPUTS } from './definition/oswestry_inputs'
// eslint-disable-next-line sort-imports
import { oswestry, OSWESTRY_CALCULATION_ID } from './oswestry'

const OSWESTRY_MIN_SCORE = 0
const OSWESTRY_MEDIAN_SCORE = 50
const OSWESTRY_MAX_SCORE = 100

const oswestry_calculation = execute_test_calculation(oswestry)

describe('oswestry', function () {
  it('oswestry calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('oswestry')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        '1_pain',
        '2_personal_care',
        '3_lifting',
        '4_running',
        '5_sitting',
        '6_standing',
        '7_sleep',
        '8_sex_life',
        '9_social_life',
        '10_travel',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(OSWESTRY_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = oswestry_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['OSWESTRY'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = R.compose(
          view_result(OSWESTRY_CALCULATION_ID),
          oswestry_calculation,
        )(min_response)

        expect(score).toEqual(OSWESTRY_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result(OSWESTRY_CALCULATION_ID),
          oswestry_calculation,
        )(median_response)

        expect(score).toEqual(OSWESTRY_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = R.compose(
          view_result(OSWESTRY_CALCULATION_ID),
          oswestry_calculation,
        )(max_response)

        expect(score).toEqual(OSWESTRY_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(OSWESTRY_CALCULATION_ID),
          oswestry_calculation,
        )(random_response)

        const EXPECTED_SCORE = 60

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const result = R.compose(view_result(), oswestry_calculation)({})

        expect(result).toEqual(undefined)
      })
    })

    describe('when called with a response with one missing item', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(OSWESTRY_CALCULATION_ID),
          oswestry_calculation,
        )(response_with_one_missing_item)

        const EXPECTED_SCORE = 36 // actual score is 35.5 but number is rounded up

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          oswestry_calculation({
            '1_pain': "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          oswestry_calculation({
            '1_pain': -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          oswestry_calculation({
            '1_pain': 6,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
