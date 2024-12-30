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
} from './__testdata__/posas_patient_responses'
import { POSAS_PATIENT_INPUTS } from './definition/posas_patient_inputs'
import { posas_patient } from './posas_patient'

const POSAS_PATIENT_MIN_SCORE = 6
const POSAS_PATIENT_MEDIAN_SCORE = 30
const POSAS_PATIENT_MAX_SCORE = 60

const posas_patient_calculation = execute_test_calculation(posas_patient)

describe('posas_patient', function () {
  it('posas_patient calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('posas_patient')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'PAIN',
        'ITCH',
        'COLOR_DIFFERENCE',
        'STIFFNESS',
        'THICKNESS',
        'IRREGULARITY',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(POSAS_PATIENT_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = posas_patient_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['POSAS_PATIENT'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = R.compose(
          view_result(),
          posas_patient_calculation,
        )(min_response)

        expect(outcome).toEqual(POSAS_PATIENT_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = R.compose(
          view_result(),
          posas_patient_calculation,
        )(median_response)

        expect(outcome).toEqual(POSAS_PATIENT_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = R.compose(
          view_result(),
          posas_patient_calculation,
        )(max_response)

        expect(outcome).toEqual(POSAS_PATIENT_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = R.compose(
          view_result(),
          posas_patient_calculation,
        )(random_response)

        const EXPECTED_SCORE = 32

        expect(outcome).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = R.compose(view_result(), posas_patient_calculation)({})

        expect(outcome).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          posas_patient_calculation({
            PAIN: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          posas_patient_calculation({
            PAIN: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          posas_patient_calculation({
            PAIN: 11,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
