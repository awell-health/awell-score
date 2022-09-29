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
  worst_response,
} from './__testdata__/phq_9_test_responses'
import { PHQ9_INPUTS } from './definition'
import { phq_9 } from './phq_9'

const BEST_SCORE = 0
const WORST_SCORE = 27

const phq_9_calculation = execute_test_calculation(phq_9)

describe('phq_9', function () {
  it('phq_9 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('phq_9')
  })

  describe('basic assumptions', function () {
    const outcome = phq_9_calculation(best_response)

    it('should return 2 calculation results', function () {
      expect(outcome).to.have.length(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PHQ9_SCORE', 'PHQ9_INTERPRETATION']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PHQ9_Q01',
          'PHQ9_Q02',
          'PHQ9_Q03',
          'PHQ9_Q04',
          'PHQ9_Q05',
          'PHQ9_Q06',
          'PHQ9_Q07',
          'PHQ9_Q08',
          'PHQ9_Q09',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PHQ9_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          phq_9_calculation({
            PHQ9_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = phq_9_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('PHQ9_SCORE')(outcome)
        const status = view_status('PHQ9_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('PHQ9_INTERPRETATION')(outcome)
        const status = view_status('PHQ9_INTERPRETATION')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_9_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('PHQ9_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the "None/minimal depression" interpretation', function () {
        const score = view_result('PHQ9_INTERPRETATION')(outcome)

        expect(score).to.eql('None/minimal depression')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_9_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('PHQ9_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })

      it('should return the "no depression" interpretation', function () {
        const score = view_result('PHQ9_INTERPRETATION')(outcome)

        expect(score).to.eql('Severe depression')
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_9_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('PHQ9_SCORE')(outcome)
        const EXPECTED_SCORE = 10

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the "Moderate depression" interpretation', function () {
        const score = view_result('PHQ9_INTERPRETATION')(outcome)

        expect(score).to.eql('Moderate depression')
      })
    })
  })
})
