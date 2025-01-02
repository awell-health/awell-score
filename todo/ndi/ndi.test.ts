import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ndi_form_responses'
import { NDI_INPUTS } from './definition/ndi_inputs'
// eslint-disable-next-line sort-imports
import { ndi, NDI_CALCULATION_ID } from './ndi'

const NDI_MIN_SCORE = 0
const NDI_MEDIAN_SCORE = 50
const NDI_MAX_SCORE = 100

const ndi_calculation = execute_test_calculation(ndi)

describe('ndi calculation', function () {
  it('ndi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('ndi')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'NDI_Q01',
        'NDI_Q02',
        'NDI_Q03',
        'NDI_Q04',
        'NDI_Q05',
        'NDI_Q06',
        'NDI_Q07',
        'NDI_Q08',
        'NDI_Q09',
        'NDI_Q10',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(NDI_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ndi_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['NDI'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = R.compose(
          view_result(NDI_CALCULATION_ID),
          ndi_calculation,
        )(min_response)

        expect(score).toEqual(NDI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result(NDI_CALCULATION_ID),
          ndi_calculation,
        )(median_response)

        expect(score).toEqual(NDI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = R.compose(
          view_result(NDI_CALCULATION_ID),
          ndi_calculation,
        )(max_response)

        expect(score).toEqual(NDI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(NDI_CALCULATION_ID),
          ndi_calculation,
        )(random_response)

        const EXPECTED_SCORE = 42

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const score = R.compose(
          view_result(NDI_CALCULATION_ID),
          ndi_calculation,
        )({})
        expect(score).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ndi_calculation({
            NDI_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ndi_calculation({
            NDI_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ndi_calculation({
            NDI_Q01: 6,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
