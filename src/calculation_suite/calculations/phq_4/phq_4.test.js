// @flow
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response
} from './__testdata__/phq_4_test_responses'
import { PHQ4_INPUTS } from './definition'
import { phq_4 } from './phq_4'

const phq_4_calculation = execute_test_calculation(phq_4)

describe('phq_4', function () {
  it('phq_4 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('phq_4')
  })

  describe('basic assumptions', function () {
    const outcome = phq_4_calculation(best_response)

    it('should return 6 calculation results', function () {
      expect(outcome).to.have.length(6)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PHQ4_ANXIETY_SCORE',
        'PHQ4_ANXIETY_POSITIVE_SCREENING',
        'PHQ4_DEPRESSION_SCORE',
        'PHQ4_DEPRESSION_POSITIVE_SCREENING',
        'PHQ4_TOTAL_SCORE',
        'PHQ4_TOTAL_SCORE_INTERPRETATION'
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
          'PHQ4_Q01',
          'PHQ4_Q02',
          'PHQ4_Q03',
          'PHQ4_Q04'
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PHQ4_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          phq_4_calculation({
            PHQ4_Q01: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = phq_4_calculation({})

      it('should return the best anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).to.eql(0)
      })

      it('should return "false" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(false)
      })

      it('should return the best depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).to.eql(0)
      })

      it('should return "false" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(false)
      })

      it('should return the best total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).to.eql(0)
      })

      it('should return "Normal" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Normal')
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_4_calculation(best_response)

      it('should return the best anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).to.eql(0)
      })

      it('should return "false" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(false)
      })

      it('should return the best depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).to.eql(0)
      })

      it('should return "false" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(false)
      })

      it('should return the best total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).to.eql(0)
      })

      it('should return "Normal" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Normal')
      })
    })

    describe('when called with the median response', function () {
      const outcome = phq_4_calculation(median_response)

      it('should return "3" for the anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).to.eql(3)
      })

      it('should return "true" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(true)
      })

      it('should return "3" for the depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).to.eql(3)
      })

      it('should return "true" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(true)
      })

      it('should return "6" on the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).to.eql(6)
      })

      it('should return "Moderate" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Moderate')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_4_calculation(worst_response)

      it('should return the worst anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).to.eql(6)
      })

      it('should return "true" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(true)
      })

      it('should return the worst depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).to.eql(6)
      })

      it('should return "true" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(true)
      })

      it('should return the worst total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).to.eql(12)
      })

      it('should return "Severe" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Severe')
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_4_calculation(random_response)

      it('should return "1" on the anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).to.eql(1)
      })

      it('should return "false" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(false)
      })

      it('should return "4" on the depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).to.eql(4)
      })

      it('should return "true" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).to.eql(true)
      })

      it('should return the best total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).to.eql(5)
      })

      it('should return "Mild" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Mild')
      })
    })
  })
})
