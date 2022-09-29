import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/dn4_test_responses'
import { DN4_INPUTS } from './definition'
import { dn4 } from './dn4'

const BEST_DN4_SCORE = 0
const MEDIAN_DN4_SCORE = 5
const WORST_DN4_SCORE = 10

const dn4_calculation = execute_test_calculation(dn4)

describe('dn4', function () {
  it('dn4 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('dn4')
  })

  describe('basic assumptions', function () {
    const outcome = dn4_calculation(best_response)

    it('should return 3 calculation results', function () {
      expect(outcome).to.have.length(3)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PATIENT_INTERVIEW_SCORE',
        'PATIENT_EXAMINIATION_SCORE',
        'PATIENT_TOTAL_SCORE',
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'BURNING',
          'PAINFUL_COLD',
          'ELECTRIC_SHOCKS',
          'TINGLING',
          'PINS_AND_NEEDLES',
          'NUMBNESS',
          'ITCHING',
          'HYPOESTHESIA_TO_TOUCH',
          'HYPOESTHESIA_TO_PINPRICK',
          'BRUSHING',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(DN4_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not a boolean', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dn4_calculation({
            BURNING: 1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = dn4_calculation({})

      it('should return undefined result and a missing status for the "Patient interview" score', function () {
        const score = view_result('PATIENT_INTERVIEW_SCORE')(outcome)
        const status = view_status('PATIENT_INTERVIEW_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the "Patient examination" score', function () {
        const score = view_result('PATIENT_EXAMINIATION_SCORE')(outcome)
        const status = view_status('PATIENT_EXAMINIATION_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the total score', function () {
        const score = view_result('PATIENT_TOTAL_SCORE')(outcome)
        const status = view_status('PATIENT_TOTAL_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = dn4_calculation(best_response)

      it('should return the best "Patient interview" score', function () {
        const score = view_result('PATIENT_INTERVIEW_SCORE')(outcome)
        const BEST_SCORE = 0

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the best "Patient examiniation" score', function () {
        const score = view_result('PATIENT_EXAMINIATION_SCORE')(outcome)
        const BEST_SCORE = 0

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the best total score', function () {
        const score = view_result('PATIENT_TOTAL_SCORE')(outcome)

        expect(score).to.eql(BEST_DN4_SCORE)
      })
    })

    describe('when called with the median response', function () {
      const outcome = dn4_calculation(median_response)

      it('should return the expected "Patient interview" score', function () {
        const score = view_result('PATIENT_INTERVIEW_SCORE')(outcome)
        const EXPECTED_SCORE = 5

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected "Patient examiniation" score', function () {
        const score = view_result('PATIENT_EXAMINIATION_SCORE')(outcome)
        const EXPECTED_SCORE = 0

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the median total score', function () {
        const score = view_result('PATIENT_TOTAL_SCORE')(outcome)

        expect(score).to.eql(MEDIAN_DN4_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = dn4_calculation(worst_response)

      it('should return the worst "Patient interview" score', function () {
        const score = view_result('PATIENT_INTERVIEW_SCORE')(outcome)
        const BEST_SCORE = 7

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the worst "Patient examiniation" score', function () {
        const score = view_result('PATIENT_EXAMINIATION_SCORE')(outcome)
        const BEST_SCORE = 3

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the worst total score', function () {
        const score = view_result('PATIENT_TOTAL_SCORE')(outcome)

        expect(score).to.eql(WORST_DN4_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = dn4_calculation(random_response)

      it('should return the expected "Patient interview" score', function () {
        const score = view_result('PATIENT_INTERVIEW_SCORE')(outcome)
        const EXPECTED_SCORE = 2

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected "Patient examiniation" score', function () {
        const score = view_result('PATIENT_EXAMINIATION_SCORE')(outcome)
        const EXPECTED_SCORE = 2

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score', function () {
        const score = view_result('PATIENT_TOTAL_SCORE')(outcome)

        const EXPECTED_SCORE = 4

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
