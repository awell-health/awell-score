import { expect } from 'chai'

import { InvalidInputsError } from '../../src/calculation_suite/errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { view_status } from '../../lib/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../../src/calculation_suite/calculations/calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/phq_8_test_responses'
import { PHQ8_INPUTS } from './definition'
import { phq_8 } from './phq_8'

const BEST_SCORE = 0
const WORST_SCORE = 24

const phq_8_calculation = execute_test_calculation(phq_8)

describe('phq_8', function () {
  it('phq_8 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('phq_8')
  })

  describe('basic assumptions', function () {
    const outcome = phq_8_calculation(best_response)

    it('should return 2 calculation results', function () {
      expect(outcome).toHaveLength(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['PHQ8_SCORE', 'PHQ8_INTERPRETATION']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PHQ8_Q01',
          'PHQ8_Q02',
          'PHQ8_Q03',
          'PHQ8_Q04',
          'PHQ8_Q05',
          'PHQ8_Q06',
          'PHQ8_Q07',
          'PHQ8_Q08',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PHQ8_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          phq_8_calculation({
            PHQ8_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = phq_8_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('PHQ8_SCORE')(outcome)
        const status = view_status('PHQ8_SCORE')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('PHQ8_INTERPRETATION')(outcome)
        const status = view_status('PHQ8_INTERPRETATION')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = phq_8_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('PHQ8_SCORE')(outcome)

        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the "None/minimal depression" interpretation', function () {
        const score = view_result('PHQ8_INTERPRETATION')(outcome)

        expect(score).toEqual('None/minimal depression')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = phq_8_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('PHQ8_SCORE')(outcome)

        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the "Severe depression" interpretation', function () {
        const score = view_result('PHQ8_INTERPRETATION')(outcome)

        expect(score).toEqual('Severe depression')
      })
    })

    describe('when called with a random response', function () {
      const outcome = phq_8_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('PHQ8_SCORE')(outcome)
        const EXPECTED_SCORE = 7

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the "Mild depression" interpretation', function () {
        const score = view_result('PHQ8_INTERPRETATION')(outcome)

        expect(score).toEqual('Mild depression')
      })
    })
  })
})