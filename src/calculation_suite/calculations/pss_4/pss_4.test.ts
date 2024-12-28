import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/pss_4_test_responses'
import { PSS4_INPUTS } from './definition'
import { pss_4 } from './pss_4'

const pss_4_calculation = execute_test_calculation(pss_4)

describe('pss_4', function () {
  it('pss_4 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('pss_4')
  })

  describe('basic assumptions', function () {
    const outcome = pss_4_calculation(best_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PSS4_SCORE']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PSS4_Q01',
          'PSS4_Q02',
          'PSS4_Q03',
          'PSS4_Q04',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PSS4_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pss_4_calculation({
            PSS4_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
        expect(() =>
          pss_4_calculation({
            PSS4_Q01: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = pss_4_calculation({})

      it('should return the best total score', function () {
        const score = view_result('PSS4_SCORE')(outcome)

        expect(score).to.eql(0)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = pss_4_calculation(best_response)

      it('should return the best total score', function () {
        const score = view_result('PSS4_SCORE')(outcome)

        expect(score).to.eql(0)
      })
    })

    describe('when called with the median response', function () {
      const outcome = pss_4_calculation(median_response)

      it('should return "6" on the total score', function () {
        const score = view_result('PSS4_SCORE')(outcome)

        expect(score).to.eql(8)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = pss_4_calculation(worst_response)

      it('should return the worst total score', function () {
        const score = view_result('PSS4_SCORE')(outcome)

        expect(score).to.eql(16)
      })
    })

    describe('when called with a random response', function () {
      const outcome = pss_4_calculation(random_response)

      it('should return the correct total score', function () {
        const score = view_result('PSS4_SCORE')(outcome)

        expect(score).to.eql(10)
      })
    })
  })
})
