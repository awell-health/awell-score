import { expect } from 'chai'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { ScoreLibrary } from '../library'
import {
  get_input_ids_from_calculation_blueprint,
  view_status,
} from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/iief5_test_responses'
import { IIEF5_INPUTS } from './definition'
import { iief5 } from './iief5'

const iief5_calculation = execute_test_calculation(iief5)

const BEST_SCORE = 25
const MEDIAN_SCORE = 15
const WORST_SCORE = 1

describe('iief5', function () {
  it('iief5 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('iief5')
  })

  describe('basic assumptions', function () {
    const outcome = iief5_calculation(best_response)

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'IIEF5_TOTAL_SCORE',
        'IIEF5_INTERPRETATION',
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
          'IIEF5_Q01',
          'IIEF5_Q02',
          'IIEF5_Q03',
          'IIEF5_Q04',
          'IIEF5_Q05',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(IIEF5_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          iief5_calculation({
            IIEF5_Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = iief5_calculation({})

      it('should return undefined result and a missing status for the total socre', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)
        const status = view_status('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)
        const status = view_status('IIEF5_INTERPRETATION')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = iief5_calculation(best_response)

      it('should return the best total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).toEqual(BEST_SCORE)
      })

      it('should return "No erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).toEqual('No erectile dysfunction')
      })
    })

    describe('when called with the median response', function () {
      const outcome = iief5_calculation(median_response)

      it('should return the median total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return "Mild to moderate erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).toEqual('Mild to moderate erectile dysfunction')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = iief5_calculation(worst_response)

      it('should return the WORST total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).toEqual(WORST_SCORE)
      })

      it('should return "Severe erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).toEqual('Severe erectile dysfunction')
      })
    })

    describe('when called with a random response', function () {
      const outcome = iief5_calculation(random_response)

      it('should return the expected total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 8

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return "Moderate erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).toEqual('Moderate erectile dysfunction')
      })
    })

    describe('when called with an incomplete response', function () {
      const outcome = iief5_calculation({
        IIEF5_Q01: 2,
        IIEF5_Q02: 1,
        IIEF5_Q03: 0,
      })

      it('should return the expected total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 3

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return "Severe erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).toEqual('Severe erectile dysfunction')
      })
    })
  })
})
