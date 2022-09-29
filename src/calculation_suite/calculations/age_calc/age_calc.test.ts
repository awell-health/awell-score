import { expect } from 'chai'
import moment from 'moment'
import R from 'ramda'

import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import { age_calc } from './age_calc'
import { AGE_CALC_INPUTS } from './definition/age_calc_inputs'

const calculate_age = execute_test_calculation(age_calc)

describe('age_calc', function () {
  it('age_calc calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('age_calc')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = ['date_of_birth']

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(AGE_CALC_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = calculate_age({ date_of_birth: '1993-11-30' })

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['AGE']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    it('should return correct result age', function () {
      const dob = '1993-11-30'

      const result = R.compose(
        view_result('AGE'),
        calculate_age
      )({ date_of_birth: '1993-11-30' })

      const EXPECTED_AGE = moment().diff(dob, 'years')

      expect(result).to.eql(EXPECTED_AGE)
    })
  })
})
