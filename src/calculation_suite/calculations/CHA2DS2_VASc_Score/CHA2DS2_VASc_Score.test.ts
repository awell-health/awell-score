import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { view_status } from '../../lib/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/CHA2DS2_VASc_Score_test_responses'
import { CHA2DS2_VASc_Score } from './CHA2DS2_VASc_Score'
import { CHA2DS2_VASC_SCORE_INPUTS } from './definition'

const BEST_SCORE = 0
const WORST_SCORE = 9

const calculation = execute_test_calculation(CHA2DS2_VASc_Score)

describe('CHA2DS2_VASc_Score', function () {
  it('CHA2DS2_VASc_Score calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('CHA2DS2_VASc_Score')
  })

  describe('basic assumptions', function () {
    const outcome = calculation(best_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['CHA2DS2_VASC_SCORE']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          '1_AGE',
          '2_SEX',
          '3_CHF_HISTORY',
          '4_HYPERTENSION_HISTORY',
          '5_STROKE_TIA_THROMBOEMBOLISM_HISTORY',
          '6_VASCULAR_DISEASE_HISTORY',
          '7_DIABETES_HISTORY',
        ]

        const configured_input_ids = get_input_ids_from_calculation_blueprint(
          CHA2DS2_VASC_SCORE_INPUTS
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          calculation({
            '7_DIABETES_HISTORY': 3,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = calculation({})

      it('should return undefined result and a missing status for the "Patient interview" score', function () {
        const score = view_result('CHA2DS2_VASC_SCORE')(outcome)
        const status = view_status('CHA2DS2_VASC_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('CHA2DS2_VASC_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })
    })
    describe('when called with the worst response', function () {
      const outcome = calculation(worst_response)

      it('should return the worst "Patient interview" score', function () {
        const score = view_result('CHA2DS2_VASC_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('CHA2DS2_VASC_SCORE')(outcome)
        const EXPECTED_SCORE = 6

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
