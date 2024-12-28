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
  median_response,
  random_response,
  worst_response,
} from './__testdata__/cade_q_sv_test_responses'
import { cade_q_sv } from './cade_q_sv'
import { CADE_Q_INPUTS } from './definition'

const BEST_SCORE = 20
const MEDIAN_SCORE = 10
const WORST_SCORE = 0

const cade_q_calculation = execute_test_calculation(cade_q_sv)

describe('cade_q_sv', function () {
  it('cade_q_sv calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('cade_q_sv')
  })

  describe('basic assumptions', function () {
    const outcome = cade_q_calculation(best_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation result id', function () {
      const EXPECTED_CALCULATION_ID = ['CADE_Q_SV_SCORE']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
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
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(CADE_Q_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cade_q_calculation({
            Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with a response where there are above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cade_q_calculation({
            Q01: 3,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cade_q_calculation({
            Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      it('should return undefined result as the score and a missing status', function () {
        const outcome = cade_q_calculation({})

        const score = view_result('CADE_Q_SV_SCORE')(outcome)
        const status = view_status('CADE_Q_SV_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      it('should return the best score', function () {
        const outcome = cade_q_calculation(best_response)
        const score = view_result('CADE_Q_SV_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })
    })

    describe('when called with the median response', function () {
      it('should return the median score', function () {
        const outcome = cade_q_calculation(median_response)
        const score = view_result('CADE_Q_SV_SCORE')(outcome)

        expect(score).to.eql(MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      it('should return the worst score', function () {
        const outcome = cade_q_calculation(worst_response)
        const score = view_result('CADE_Q_SV_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = cade_q_calculation(random_response)
        const score = view_result('CADE_Q_SV_SCORE')(outcome)

        const EXPECTED_SCORE = 11

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
