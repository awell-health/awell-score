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
  median_response,
  random_response,
  worst_response,
} from './__testdata__/phq_2_test_responses'
import { PHQ2_INPUTS } from './definition'
import { phq_2 } from './phq_2'

const BEST_SCORE = 0
const MEDIAN_SCORE = 3
const WORST_SCORE = 6

const phq_2_calculation = execute_test_calculation(phq_2)

describe('phq_2', function () {
  it('phq_2 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('phq_2')
  })

  describe('basic assumptions', function () {
    const outcome = phq_2_calculation(best_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PHQ2_SCORE']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['PHQ2_Q01', 'PHQ2_Q02']

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PHQ2_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          phq_2_calculation({
            PHQ2_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = phq_2_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('PHQ2_SCORE')(outcome)
        const status = view_status('PHQ2_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_2_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('PHQ2_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })
    })

    describe('when called with the median response', function () {
      const outcome = phq_2_calculation(median_response)

      it('should return the worst score', function () {
        const score = view_result('PHQ2_SCORE')(outcome)

        expect(score).to.eql(MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_2_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('PHQ2_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_2_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('PHQ2_SCORE')(outcome)
        const EXPECTED_SCORE = 3

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
