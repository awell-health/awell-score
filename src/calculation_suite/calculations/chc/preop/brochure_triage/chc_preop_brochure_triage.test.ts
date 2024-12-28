import { expect } from 'chai'

import { InvalidInputsError } from '../../../../errors'
import { execute_test_calculation } from '../../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../../lib/view_result'
import { CALCULATIONS } from '../../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../../shared_functions'
import { chc_preop_brochure_triage } from './chc_preop_brochre_triage'
import { INPUTS } from './definition'

const calculation = execute_test_calculation(chc_preop_brochure_triage)

describe('chc_preop_brochure_triage', function () {
  it('chc_preop_brochure_triage calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('chc_preop_brochure_triage')
  })

  describe('basic assumptions', function () {
    const outcome = calculation({ INTERVENTION_CODE: '1' })

    it('should have the expected calculation result id', function () {
      const EXPECTED_CALCULATION_ID = ['CHC_PREOP_TRIAGE_OUTCOME']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['INTERVENTION_CODE']

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          calculation({
            INTERVENTION_CODE: 123,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = calculation({})

      it('should return 0', function () {
        const score = view_result('INTERVENTION_CODE')(outcome)

        expect(score).to.eql(0)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with an intervention code that is in the list of intervention codes', function () {
      it('should return 1', function () {
        const outcome = calculation({ INTERVENTION_CODE: '11146' })
        const score = view_result('INTERVENTION_CODE')(outcome)

        expect(score).to.eql(1)
      })
    })

    describe('when called with an intervention code that is NOT in the list of intervention codes', function () {
      it('should return 0', function () {
        const outcome = calculation({ INTERVENTION_CODE: '99999' })
        const score = view_result('INTERVENTION_CODE')(outcome)

        expect(score).to.eql(0)
      })
    })
  })
})
