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
} from './__testdata__/dast_10_test_responses'
import { dast_10 } from './dast_10'
import { DAST10_INPUTS } from './definition'

const BEST_SCORE = 0
const MEDIAN_SCORE = 5
const WORST_SCORE = 10

const dast10_calculation = execute_test_calculation(dast_10)

describe('dast_10', function () {
  it('dast_10 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('dast_10')
  })

  describe('basic assumptions', function () {
    const outcome = dast10_calculation(best_response)

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'DAST10_SCORE',
        'DAST10_DEGREE_OF_PROBLEMS',
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
          'DAST10_Q01',
          'DAST10_Q02',
          'DAST10_Q03',
          'DAST10_Q04',
          'DAST10_Q05',
          'DAST10_Q06',
          'DAST10_Q07',
          'DAST10_Q08',
          'DAST10_Q09',
          'DAST10_Q10',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(DAST10_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dast10_calculation({
            DAST10_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = dast10_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('DAST10_SCORE')(outcome)
        const status = view_status('DAST10_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('DAST10_DEGREE_OF_PROBLEMS')(outcome)
        const status = view_status('DAST10_DEGREE_OF_PROBLEMS')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = dast10_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('DAST10_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the "No problems reported" interpretation', function () {
        const score = view_result('DAST10_DEGREE_OF_PROBLEMS')(outcome)

        expect(score).to.eql('No problems reported')
      })
    })

    describe('when called with the median response', function () {
      const outcome = dast10_calculation(median_response)

      it('should return the median score', function () {
        const score = view_result('DAST10_SCORE')(outcome)

        expect(score).to.eql(MEDIAN_SCORE)
      })

      it('should return the "Moderate level" interpretation', function () {
        const score = view_result('DAST10_DEGREE_OF_PROBLEMS')(outcome)

        expect(score).to.eql('Moderate level')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = dast10_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('DAST10_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })

      it('should return the "Severe level" interpretation', function () {
        const score = view_result('DAST10_DEGREE_OF_PROBLEMS')(outcome)

        expect(score).to.eql('Severe level')
      })
    })

    describe('when called with a random response', function () {
      const outcome = dast10_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('DAST10_SCORE')(outcome)
        const EXPECTED_SCORE = 4

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the "Moderate level" interpretation', function () {
        const score = view_result('DAST10_DEGREE_OF_PROBLEMS')(outcome)

        expect(score).to.eql('Moderate level')
      })
    })
  })
})
