import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_from_calculation_blueprint,
  view_status,
} from '../../shared_functions'
import { bmi } from './bmi'
import { BMI_INPUTS } from './definition/bmi_inputs'

const valid_input = {
  weight_pounds: 176.37,
  height_feet: 6,
  height_inches: 6.74,
}

const calculate_bmi = execute_test_calculation(bmi)

describe('bmi_imperial', function () {
  it('bmi_imperial calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('bmi_imperial')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'weight_pounds',
        'height_inches',
        'height_feet',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(BMI_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = calculate_bmi(valid_input)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['BMI']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    describe('should return expected result with random response', function () {
      it('should return correct result if weight and height are valid', function () {
        const result = R.compose(view_result('BMI'), calculate_bmi)(valid_input)

        const EXPECTED_BMI = 20

        expect(result).to.eql(EXPECTED_BMI)
      })
    })
  })

  describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
    describe('correctly handling with missing or negative data', function () {
      it('should return undefined result & missing status if weight and height are not defined', function () {
        const outcome = calculate_bmi({})
        const result = view_result('BMI')(outcome)
        const status = view_status('BMI')(outcome)

        expect(result).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should throw an InvalidInputsError when "weight" is not in the expected range', function () {
        expect(() =>
          R.compose(
            view_result('BMI'),
            calculate_bmi
          )({
            weight_pounds: -10,
            height_feet: 6,
          })
        ).to.throw(InvalidInputsError)
      })

      it('should throw an InvalidInputsError when "height" is not in the expected range', function () {
        expect(() =>
          R.compose(
            view_result('BMI'),
            calculate_bmi
          )({ weight_pounds: 90, height_feet: 100 })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
