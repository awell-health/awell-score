import { expect } from 'chai'

import { InvalidInputsError } from '../../../../errors'
import { execute_test_calculation } from '../../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../../lib/view_result'
import { CALCULATIONS } from '../../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../../shared_functions'
import {
  negative_response,
  positive_response,
} from './__testdata__/triage_test_responses'
import { TRIAGE_INPUTS, TRIAGE_WEIGHTS } from './definition'
import { femmes_enceintes_triage } from './triage'

const MIN_SCORE = 0
const MAX_SCORE = 67.7

const calculation = execute_test_calculation(femmes_enceintes_triage)

describe('femmes_enceintes_triage', function () {
  it('femmes_enceintes_triage calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('femmes_enceintes_triage')
  })

  describe('basic assumptions', function () {
    const outcome = calculation(positive_response)

    it('should have the expected calculation result id', function () {
      const EXPECTED_CALCULATION_ID = ['FEMMES_ENCEINTES_TRIAGE']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })

    it('should have all the correct weights assigned to each question id', function () {
      const EXPECTED_WEIGHTS = {
        Q1: 1,
        Q2: 1,
        Q3: 0.34,
        Q4: 0.34,
        Q5: 0.34,
        Q6: 0.34,
        Q7: 0.34,
        Q8: 1,
        Q9: 1,
        Q10: 1,
        Q11: 1,
        Q12: 1,
        Q13: 1,
        Q14: 1,
        Q15: 1,
        Q16: 1,
        Q17: 1,
        Q18: 1,
        Q19: 1,
        Q20: 1,
        Q21: 51,
      }

      expect(EXPECTED_WEIGHTS).to.eql(TRIAGE_WEIGHTS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q1',
          'Q2',
          'Q3',
          'Q4',
          'Q5',
          'Q6',
          'Q7',
          'Q8',
          'Q9',
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
          'Q21',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(TRIAGE_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          calculation({
            Q1: 123,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = calculation({})

      it('should return 0', function () {
        const score = view_result('FEMMES_ENCEINTES_TRIAGE')(outcome)

        expect(score).to.eql(0)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a negative response', function () {
      it('should return the minimum score', function () {
        const outcome = calculation(negative_response)
        const score = view_result('FEMMES_ENCEINTES_TRIAGE')(outcome)

        expect(score).to.eql(MIN_SCORE)
      })
    })

    describe('when called with a positive response', function () {
      it('should return the maximum score', function () {
        const outcome = calculation(positive_response)
        const score = view_result('FEMMES_ENCEINTES_TRIAGE')(outcome)

        expect(score).to.eql(MAX_SCORE)
      })
    })

    describe('when called with a response where Q3 to Q7 are answered with "Yes" (1)', function () {
      it('should return the expected score', function () {
        const outcome = calculation({
          Q3: 1,
          Q4: 1,
          Q5: 1,
          Q6: 1,
          Q7: 1,
        })
        const score = view_result('FEMMES_ENCEINTES_TRIAGE')(outcome)

        const EXPECTED_SCORE = 1.7 // 5 * 0.34 = 1.7

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })

    describe('when called with a response where Q21 is answered "Yes" (1)', function () {
      it('should return the expected score', function () {
        const outcome = calculation({
          Q21: 1,
        })
        const score = view_result('FEMMES_ENCEINTES_TRIAGE')(outcome)

        const EXPECTED_SCORE = 51 // Question 21 has a weight of 51

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
