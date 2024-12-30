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
} from './__testdata__/phq_4_test_responses'
import { PHQ4_INPUTS } from './definition'
import { phq_4 } from './phq_4'

const phq_4_calculation = execute_test_calculation(phq_4)

describe('phq_4', function () {
  it('phq_4 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('phq_4')
  })

  describe('basic assumptions', function () {
    const outcome = phq_4_calculation(best_response)

    it('should return 6 calculation results', function () {
      expect(outcome).toHaveLength(6)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PHQ4_ANXIETY_SCORE',
        'PHQ4_ANXIETY_POSITIVE_SCREENING',
        'PHQ4_DEPRESSION_SCORE',
        'PHQ4_DEPRESSION_POSITIVE_SCREENING',
        'PHQ4_TOTAL_SCORE',
        'PHQ4_TOTAL_SCORE_INTERPRETATION',
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PHQ4_Q01',
          'PHQ4_Q02',
          'PHQ4_Q03',
          'PHQ4_Q04',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PHQ4_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          phq_4_calculation({
            PHQ4_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = phq_4_calculation({})

      it('should return the best anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).toEqual(0)
      })

      it('should return "false" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(false)
      })

      it('should return the best depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).toEqual(0)
      })

      it('should return "false" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(false)
      })

      it('should return the best total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).toEqual(0)
      })

      it('should return "Normal" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).toEqual('Normal')
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_4_calculation(best_response)

      it('should return the best anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).toEqual(0)
      })

      it('should return "false" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(false)
      })

      it('should return the best depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).toEqual(0)
      })

      it('should return "false" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(false)
      })

      it('should return the best total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).toEqual(0)
      })

      it('should return "Normal" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).toEqual('Normal')
      })
    })

    describe('when called with the median response', function () {
      const outcome = phq_4_calculation(median_response)

      it('should return "3" for the anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).toEqual(3)
      })

      it('should return "true" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(true)
      })

      it('should return "3" for the depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).toEqual(3)
      })

      it('should return "true" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(true)
      })

      it('should return "6" on the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).toEqual(6)
      })

      it('should return "Moderate" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).toEqual('Moderate')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_4_calculation(worst_response)

      it('should return the worst anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).toEqual(6)
      })

      it('should return "true" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(true)
      })

      it('should return the worst depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).toEqual(6)
      })

      it('should return "true" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(true)
      })

      it('should return the worst total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).toEqual(12)
      })

      it('should return "Severe" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).toEqual('Severe')
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_4_calculation(random_response)

      it('should return "1" on the anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_SCORE')(outcome)

        expect(score).toEqual(1)
      })

      it('should return "false" on positive anxiety score', function () {
        const score = view_result('PHQ4_ANXIETY_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(false)
      })

      it('should return "4" on the depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_SCORE')(outcome)

        expect(score).toEqual(4)
      })

      it('should return "true" on positive depression score', function () {
        const score = view_result('PHQ4_DEPRESSION_POSITIVE_SCREENING')(outcome)

        expect(score).toEqual(true)
      })

      it('should return the best total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE')(outcome)

        expect(score).toEqual(5)
      })

      it('should return "Mild" as the interpretation for the total score', function () {
        const score = view_result('PHQ4_TOTAL_SCORE_INTERPRETATION')(outcome)

        expect(score).toEqual('Mild')
      })
    })
  })
})
