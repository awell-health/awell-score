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
} from './__testdata__/paid_20_test_responses'
import { PAID20_INPUTS, PAID20_INTERPRATION } from './definition'
import { paid_20 } from './paid_20'

const BEST_SCORE = 0
const WORST_SCORE = 100
const RANDOM_SCORE = 36.25

const paid_20_calculation = execute_test_calculation(paid_20)

describe('paid_20', function () {
  it('paid_20 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('paid_20')
  })

  describe('basic assumptions', function () {
    const outcome = paid_20_calculation(best_response)

    it('should return 2 calculation results', function () {
      expect(outcome).to.have.length(3)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PAID20_SCORE',
        'PAID20_QUESTIONS_WITH_SCORE_3_OR_4',
        'PAID20_INTERPRETATION'
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PAID20_Q01',
          'PAID20_Q02',
          'PAID20_Q03',
          'PAID20_Q04',
          'PAID20_Q05',
          'PAID20_Q06',
          'PAID20_Q07',
          'PAID20_Q08',
          'PAID20_Q09',
          'PAID20_Q10',
          'PAID20_Q11',
          'PAID20_Q12',
          'PAID20_Q13',
          'PAID20_Q14',
          'PAID20_Q15',
          'PAID20_Q16',
          'PAID20_Q17',
          'PAID20_Q18',
          'PAID20_Q19',
          'PAID20_Q20'
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PAID20_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          paid_20_calculation({
            PAID20_Q01: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = paid_20_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('PAID20_SCORE')(outcome)
        const status = view_status('PAID20_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('PAID20_INTERPRETATION')(outcome)
        const status = view_status('PAID20_INTERPRETATION')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the second score type', function () {
        const score = view_result('PAID20_QUESTIONS_WITH_SCORE_3_OR_4')(outcome)
        const status = view_status('PAID20_QUESTIONS_WITH_SCORE_3_OR_4')(
          outcome
        )

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = paid_20_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('PAID20_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the "Not severe diabetes distress" interpretation', function () {
        const score = view_result('PAID20_INTERPRETATION')(outcome)

        expect(score).to.eql(PAID20_INTERPRATION.NOT_SEVERE)
      })

      it('should return the empty string interpretation', function () {
        const score = view_result('PAID20_QUESTIONS_WITH_SCORE_3_OR_4')(outcome)

        expect(score).to.eql('')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = paid_20_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('PAID20_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })

      it('should return the "Severe diabetes distress" interpretation', function () {
        const score = view_result('PAID20_INTERPRETATION')(outcome)

        expect(score).to.eql(PAID20_INTERPRATION.SEVERE)
      })

      it('should return the "Questions with score 3 or 4" interpretation', function () {
        const score = view_result('PAID20_QUESTIONS_WITH_SCORE_3_OR_4')(outcome)
        const result =
          'PAID20_Q01:4,PAID20_Q02:4,PAID20_Q03:4,PAID20_Q04:4,PAID20_Q05:4,PAID20_Q06:4,PAID20_Q07:4,PAID20_Q08:4,PAID20_Q09:4,PAID20_Q10:4,PAID20_Q11:4,PAID20_Q12:4,PAID20_Q13:4,PAID20_Q14:4,PAID20_Q15:4,PAID20_Q16:4,PAID20_Q17:4,PAID20_Q18:4,PAID20_Q19:4,PAID20_Q20:4'
        expect(score).to.eql(result)
      })
    })

    describe('when called with a random response', function () {
      const outcome = paid_20_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('PAID20_SCORE')(outcome)

        expect(score).to.eql(RANDOM_SCORE)
      })

      it('should return the "Not severe diabetes distress" interpretation', function () {
        const score = view_result('PAID20_INTERPRETATION')(outcome)

        expect(score).to.eql(PAID20_INTERPRATION.NOT_SEVERE)
      })

      it('should return the "Questions with score 3 or 4" interpretation', function () {
        const score = view_result('PAID20_QUESTIONS_WITH_SCORE_3_OR_4')(outcome)
        const result = 'PAID20_Q01:3,PAID20_Q09:4,PAID20_Q13:4,PAID20_Q17:3'
        expect(score).to.eql(result)
      })
    })
  })
})
