import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { view_status } from '../../../helper_functions/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/forgotten_joint_score_12_hip_test_responses'
import { FJS_HIP_INPUTS } from './definition'
import { forgotten_joint_score_hip } from './forgotten_joint_score_hip_12'

const BEST_FJS_SCORE = 100
const MEDIAN_FJS_SCORE = 50
const WORST_FJS_SCORE = 0

const fjs_calculation = execute_test_calculation(forgotten_joint_score_hip)

describe('forgotten_joint_score_hip', function () {
  it('forgotten_joint_score_hip calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('forgotten_joint_score_hip')
  })

  describe('basic assumptions', function () {
    const outcome = fjs_calculation(best_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation result id', function () {
      const EXPECTED_CALCULATION_ID = ['FORGOTTEN_JOINT_SCORE_HIP']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(FJS_HIP_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is below the expected [1,5] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          fjs_calculation({
            Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with a response where there are answers out of the expected [1, 5] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          fjs_calculation({
            Q01: 6,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          fjs_calculation({
            Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      it('should return undefined result as the score and a missing status', function () {
        const outcome = fjs_calculation({})

        const score = view_result('FORGOTTEN_JOINT_SCORE_HIP')(outcome)
        const status = view_status('FORGOTTEN_JOINT_SCORE_HIP')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      it('should return the best FJS score', function () {
        const outcome = fjs_calculation(best_response)
        const score = view_result('FORGOTTEN_JOINT_SCORE_HIP')(outcome)

        expect(score).to.eql(BEST_FJS_SCORE)
      })
    })

    describe('when called with the median response', function () {
      it('should return the median FJS score', function () {
        const outcome = fjs_calculation(median_response)
        const score = view_result('FORGOTTEN_JOINT_SCORE_HIP')(outcome)

        expect(score).to.eql(MEDIAN_FJS_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      it('should return the worst FJS score', function () {
        const outcome = fjs_calculation(worst_response)
        const score = view_result('FORGOTTEN_JOINT_SCORE_HIP')(outcome)

        expect(score).to.eql(WORST_FJS_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected FJS score', function () {
        const outcome = fjs_calculation(random_response)
        const score = view_result('FORGOTTEN_JOINT_SCORE_HIP')(outcome)

        const EXPECTED_SCORE = 65

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
