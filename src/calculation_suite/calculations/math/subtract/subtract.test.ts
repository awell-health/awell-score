import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { view_status } from '../../../helper_functions/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import { SUBTRACT_INPUTS } from './definition'
import { math_subtract } from './subtract'

const subtract_calculation = execute_test_calculation(math_subtract)

describe('math_subtract', function () {
  it('math_subtract calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('math_subtract')
  })

  describe('basic assumptions', function () {
    const outcome = subtract_calculation({
      MINUEND: 5,
      SUBTRAHEND: 10,
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['DIFFERENCE', 'ABSOLUTE_DIFFERENCE']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['MINUEND', 'SUBTRAHEND']

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(SUBTRACT_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          subtract_calculation({
            MINUEND: 'a string',
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = subtract_calculation({})

      it('should return undefined result and a missing status for the difference', function () {
        const score = view_result('DIFFERENCE')(outcome)
        const status = view_status('DIFFERENCE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the absolute difference', function () {
        const score = view_result('ABSOLUTE_DIFFERENCE')(outcome)
        const status = view_status('ABSOLUTE_DIFFERENCE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    const outcome = subtract_calculation({
      MINUEND: 5,
      SUBTRAHEND: 10,
    })

    it('should correctly calculate the difference', function () {
      const score = view_result('DIFFERENCE')(outcome)

      expect(score).to.eql(-5)
    })

    it('should correctly calculate the absolute difference', function () {
      const score = view_result('ABSOLUTE_DIFFERENCE')(outcome)

      expect(score).to.eql(5)
    })
  })
})
