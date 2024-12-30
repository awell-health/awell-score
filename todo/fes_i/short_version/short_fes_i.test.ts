import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { view_status } from '../../../lib/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import {
  best_response,
  missing_data_response,
  random_response,
  worst_response,
} from './__testdata__/short_fes_i_test_responses'
import { SHORT_FES_I_INPUTS } from './definition'
import { short_fes_i } from './short_fes_i'

const BEST_SCORE = 7
const WORST_SCORE = 28

const short_fes_i_calculation = execute_test_calculation(short_fes_i)

describe('short_fes_i', function () {
  it('short_fes_i calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('short_fes_i')
  })

  describe('basic assumptions', function () {
    const outcome = short_fes_i_calculation(best_response)

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['SHORT_FES_I_TOTAL_SCORE']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(SHORT_FES_I_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          short_fes_i_calculation({
            Q01: 0,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = short_fes_i_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('SHORT_FES_I_TOTAL_SCORE')(outcome)
        const status = view_status('SHORT_FES_I_TOTAL_SCORE')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = short_fes_i_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('SHORT_FES_I_TOTAL_SCORE')(outcome)

        expect(score).toEqual(BEST_SCORE)
      })
    })

    describe('when called with missing data', function () {
      const outcome = short_fes_i_calculation(missing_data_response)

      it('should return the expected score that accounts for missing data', function () {
        const score = view_result('SHORT_FES_I_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 20

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = short_fes_i_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('SHORT_FES_I_TOTAL_SCORE')(outcome)

        expect(score).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = short_fes_i_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('SHORT_FES_I_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 15

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
