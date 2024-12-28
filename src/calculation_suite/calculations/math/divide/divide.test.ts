import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { view_status } from '../../../lib/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import { DIVIDE_INPUTS } from './definition'
import { math_divide } from './divide'

const divide_calculation = execute_test_calculation(math_divide)

describe('math_divide', function () {
  it('math_divide calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('math_divide')
  })

  describe('basic assumptions', function () {
    const outcome = divide_calculation({
      DIVIDEND: 10,
      DIVISOR: 5,
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['QUOTIENT']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['DIVIDEND', 'DIVISOR']

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(DIVIDE_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          divide_calculation({
            DIVIDEND: 'a string',
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = divide_calculation({})

      it('should return undefined result and a missing status for the difference', function () {
        const score = view_result('QUOTIENT')(outcome)
        const status = view_status('QUOTIENT')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    const outcome = divide_calculation({
      DIVIDEND: 10,
      DIVISOR: 5,
    })

    it('should correctly calculate the quotient', function () {
      const score = view_result('DIFFERENCE')(outcome)

      expect(score).to.eql(2)
    })
  })
})
