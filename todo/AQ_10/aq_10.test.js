// @flow
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  random_response,
  worst_response
} from './__testdata__/aq_10_test_responses'
import { aq_10 } from './aq_10'
import { AQ10_INPUTS } from './definition'

const BEST_SCORE = 0
const WORST_SCORE = 10

const aq_10_calculation = execute_test_calculation(aq_10)

describe('aq_10', function () {
  it('aq_10 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('aq_10')
  })

  describe('basic assumptions', function () {
    const outcome = aq_10_calculation(best_response)
    const EXPECTED_NUMBER = 2
    it('should return 2 calculation results', function () {
      expect(outcome).to.have.length(EXPECTED_NUMBER)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['AQ10_SCORE', 'AQ10_INTERPRETATION']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.have.members(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AQ10_Q01',
          'AQ10_Q02',
          'AQ10_Q03',
          'AQ10_Q04',
          'AQ10_Q05',
          'AQ10_Q06',
          'AQ10_Q07',
          'AQ10_Q08',
          'AQ10_Q09',
          'AQ10_Q10'
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(AQ10_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          aq_10_calculation({
            AQ10_Q01: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = aq_10_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('AQ10_SCORE')(outcome)
        const status = view_status('AQ10_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('AQ10_INTERPRETATION')(outcome)
        const status = view_status('AQ10_INTERPRETATION')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = aq_10_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('AQ10_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = aq_10_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('AQ10_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = aq_10_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('AQ10_SCORE')(outcome)
        const EXPECTED_SCORE = 6

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
