import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/ohs_test_responses'
import { OHS_INPUTS } from './definition/oxford_hip_score_inputs'
import { oxford_hip_score } from './oxford_hip_score'

const OKS_8_WORST_SCORE = 0
const OKS_MEDIAN_SCORE = 24
const OKS_8_BEST_SCORE = 48

const oxford_hip_score_calculation = execute_test_calculation(oxford_hip_score)

describe('oxford_hip_score', function () {
  it('oxford_hip_score calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('oxford_hip_score')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ohs_01',
        'ohs_02',
        'ohs_03',
        'ohs_04',
        'ohs_05',
        'ohs_06',
        'ohs_07',
        'ohs_08',
        'ohs_09',
        'ohs_10',
        'ohs_11',
        'ohs_12',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(OHS_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = oxford_hip_score_calculation(best_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['OXFORD_HIP_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst total score', function () {
        const outcome = oxford_hip_score_calculation(worst_response)
        const result = view_result()(outcome)

        expect(result).toEqual(OKS_8_WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = oxford_hip_score_calculation(median_response)
        const result = view_result()(outcome)

        expect(result).toEqual(OKS_MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best total score', function () {
        const outcome = oxford_hip_score_calculation(best_response)
        const result = view_result()(outcome)

        expect(result).toEqual(OKS_8_BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const EXPECTED_SCORE = 22

        const outcome = oxford_hip_score_calculation(random_response)
        const result = view_result()(outcome)

        expect(result).toEqual(EXPECTED_SCORE)
      })
    })
  })
  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = oxford_hip_score_calculation({})
        const result = view_result()(outcome)

        expect(result).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          oxford_hip_score_calculation({
            ohs_01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          oxford_hip_score_calculation({
            ohs_01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          oxford_hip_score_calculation({
            ohs_01: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
