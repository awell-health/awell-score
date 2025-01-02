import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { view_status } from '../../../lib/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import { MULTIPLY_INPUTS } from './definition'
import { math_multiply } from './multiply'

const multiply_calculation = execute_test_calculation(math_multiply)

describe('math_multiply', function () {
  it('math_multiply calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('math_multiply')
  })

  describe('basic assumptions', function () {
    const outcome = multiply_calculation({
      FACTOR_1: 5,
      FACTOR_2: 10,
      FACTOR_3: 9,
      FACTOR_4: 4,
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PRODUCT']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'FACTOR_1',
          'FACTOR_2',
          'FACTOR_3',
          'FACTOR_4',
          'FACTOR_5',
          'FACTOR_6',
          'FACTOR_7',
          'FACTOR_8',
          'FACTOR_9',
          'FACTOR_10',
          'FACTOR_11',
          'FACTOR_12',
          'FACTOR_13',
          'FACTOR_14',
          'FACTOR_15',
          'FACTOR_16',
          'FACTOR_17',
          'FACTOR_18',
          'FACTOR_19',
          'FACTOR_20',
          'FACTOR_21',
          'FACTOR_22',
          'FACTOR_23',
          'FACTOR_24',
          'FACTOR_25',
          'FACTOR_26',
          'FACTOR_27',
          'FACTOR_28',
          'FACTOR_29',
          'FACTOR_30',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(MULTIPLY_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          multiply_calculation({
            FACTOR_1: 'a string',
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = multiply_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('PRODUCT')(outcome)
        const status = view_status('PRODUCT')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    it('should correctly calculate the product', function () {
      const outcome = multiply_calculation({
        FACTOR_1: 5,
        FACTOR_2: 10,
        FACTOR_3: 9,
        FACTOR_4: 4,
      })

      const score = view_result('PRODUCT')(outcome)

      expect(score).toEqual(1800)
    })

    it('should correctly calculate the product if there is only one factor', function () {
      const outcome = multiply_calculation({
        FACTOR_1: 5,
      })

      const score = view_result('PRODUCT')(outcome)

      expect(score).toEqual(5)
    })
  })
})
