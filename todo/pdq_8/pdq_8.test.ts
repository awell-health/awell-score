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
} from './__testdata__/pdq_8_responses'
import { PDQ_8_INPUTS } from './definition/pdq_8_inputs'
import { pdq_8 } from './pdq_8'

const PDQ_8_MIN_SCORE = 0
const PDQ_8_MEDIAN_SCORE = 50
const PDQ_8_MAX_SCORE = 100

const pdq8_calculation = execute_test_calculation(pdq_8)

describe('pdq_8', function () {
  it('pdq_8 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('pdq_8')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'PDQ_8_MOBILITY',
        'PDQ_8_ADL',
        'PDQ_8_EMOTIONAL_WELLBEING',
        'PDQ_8_STIGMA',
        'PDQ_8_SOCIAL_SUPPORT',
        'PDQ_8_COGNITIONS',
        'PDQ_8_COMMUNICATIONS',
        'PDQ_8_BODILY_DISCOMFORT',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(PDQ_8_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pdq8_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['PDQ_8'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = R.compose(view_result(), pdq8_calculation)(min_response)

        expect(outcome).toEqual(PDQ_8_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = R.compose(
          view_result(),
          pdq8_calculation,
        )(median_response)

        expect(outcome).toEqual(PDQ_8_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = R.compose(view_result(), pdq8_calculation)(max_response)

        expect(outcome).toEqual(PDQ_8_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = R.compose(
          view_result(),
          pdq8_calculation,
        )(random_response)

        const EXPECTED_SCORE = 53

        expect(outcome).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = R.compose(view_result(), pdq8_calculation)({})

        expect(outcome).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pdq8_calculation({
            PDQ_8_MOBILITY: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pdq8_calculation({
            PDQ_8_MOBILITY: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pdq8_calculation({
            PDQ_8_MOBILITY: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
