import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import { DIFFERENCE_INPUTS } from './definition/difference_inputs'
import { difference_calc } from './difference_calc'

const difference_calculation = execute_test_calculation(difference_calc)

describe('difference_calc', function () {
  it('difference_calc calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('difference_calc')
  })

  describe('basic assumptions', function () {
    const outcome = difference_calculation({ VALUE_1: 0, VALUE_2: 0 })

    it('should return 2 calculation results', function () {
      expect(outcome).to.have.length(2)
    })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'ABSOLUTE_DIFFERENCE',
        'PERCENTAGE_INCREASE',
      ]
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['VALUE_1', 'VALUE_2']

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(DIFFERENCE_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          difference_calculation({
            VALUE_1: 'hello',
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = difference_calculation({})

      it('should return undefined result as the score', function () {
        const absolute_difference = view_result('ABSOLUTE_DIFFERENCE')(outcome)
        const increase = view_result('PERCENTAGE_INCREASE')(outcome)

        expect(absolute_difference).to.eql(undefined)
        expect(increase).to.eql(undefined)
      })

      it('should return MISSING as the status', function () {
        const absolute_difference = view_status('ABSOLUTE_DIFFERENCE')(outcome)
        const increase = view_status('PERCENTAGE_INCREASE')(outcome)

        expect(absolute_difference).to.eql(MISSING_STATUS)
        expect(increase).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when the values are 0', function () {
      it('should work', function () {
        const outcome = difference_calculation({ VALUE_1: 0, VALUE_2: 0 })
        const absolute_difference = view_result('ABSOLUTE_DIFFERENCE')(outcome)
        const increase = view_result('PERCENTAGE_INCREASE')(outcome)

        expect(absolute_difference).to.eql(0)
        expect(increase).to.eql(0)
      })
    })

    describe('when there the difference is 0', function () {
      it('should work', function () {
        const outcome = difference_calculation({ VALUE_1: 5, VALUE_2: 5 })
        const absolute_difference = view_result('ABSOLUTE_DIFFERENCE')(outcome)
        const increase = view_result('PERCENTAGE_INCREASE')(outcome)

        expect(absolute_difference).to.eql(0)
        expect(increase).to.eql(0)
      })
    })

    describe('when there is a positive difference', function () {
      it('should work', function () {
        const outcome = difference_calculation({ VALUE_1: 5, VALUE_2: 10 })
        const absolute_difference = view_result('ABSOLUTE_DIFFERENCE')(outcome)
        const increase = view_result('PERCENTAGE_INCREASE')(outcome)

        expect(absolute_difference).to.eql(5)
        expect(increase).to.eql(100)
      })
    })

    describe('when there is a negative difference', function () {
      it('should work', function () {
        const outcome = difference_calculation({ VALUE_1: 457, VALUE_2: 34 })
        const absolute_difference = view_result('ABSOLUTE_DIFFERENCE')(outcome)
        const increase = view_result('PERCENTAGE_INCREASE')(outcome)

        expect(absolute_difference).to.eql(-423)
        expect(increase).to.eql(-92.5601750547046)
      })
    })
  })
})
