import { expect } from 'chai'

import { ZodError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { view_status } from '../../../lib/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import { SUM_INPUTS } from './definition'
import { math_sum } from './sum'

const sum_calculation = execute_test_calculation(math_sum)

describe('math_sum', function () {
  it('math_sum calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('math_sum')
  })

  describe('basic assumptions', function () {
    const outcome = sum_calculation({
      ADDEND_1: 5,
      ADDEND_2: 10,
      ADDEND_3: 9,
      ADDEND_4: 4,
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['SUM']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ADDEND_1',
          'ADDEND_2',
          'ADDEND_3',
          'ADDEND_4',
          'ADDEND_5',
          'ADDEND_6',
          'ADDEND_7',
          'ADDEND_8',
          'ADDEND_9',
          'ADDEND_10',
          'ADDEND_11',
          'ADDEND_12',
          'ADDEND_13',
          'ADDEND_14',
          'ADDEND_15',
          'ADDEND_16',
          'ADDEND_17',
          'ADDEND_18',
          'ADDEND_19',
          'ADDEND_20',
          'ADDEND_21',
          'ADDEND_22',
          'ADDEND_23',
          'ADDEND_24',
          'ADDEND_25',
          'ADDEND_26',
          'ADDEND_27',
          'ADDEND_28',
          'ADDEND_29',
          'ADDEND_30',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(SUM_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          sum_calculation({
            ADDEND_1: 'a string',
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = sum_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('SUM')(outcome)
        const status = view_status('SUM')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    const outcome = sum_calculation({
      ADDEND_1: 5,
      ADDEND_2: 10,
      ADDEND_3: 9,
      ADDEND_4: 4,
    })

    it('should correctly sum numbers', function () {
      const score = view_result('SUM')(outcome)

      expect(score).toEqual(28)
    })
  })
})
