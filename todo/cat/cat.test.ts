import { expect } from 'chai'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { view_status } from '../../lib/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/cat_test_responses'
import { cat } from './cat'
import { CAT_INPUTS } from './definition'

const BEST_SCORE = 0
const MEDIAN_SCORE = 20
const WORST_SCORE = 40

const cat_calculation = execute_test_calculation(cat)

describe('cat', function () {
  it('cat calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('cat')
  })

  describe('basic assumptions', function () {
    const outcome = cat_calculation(best_response)

    it('should return 2 calculation results', function () {
      expect(outcome).toHaveLength(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['CAT_POINTS', 'CAT_HEALTH_IMPACT']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          '1_COUGH',
          '2_PHLEGM',
          '3_CHEST_TIGHTNESS',
          '4_BREATHLESSNESS',
          '5_ACTIVITIES',
          '6_CONFIDENCE',
          '7_SLEEP',
          '8_ENERGY',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(CAT_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cat_calculation({
            '1_COUGH': -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = cat_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('CAT_POINTS')(outcome)
        const status = view_status('CAT_POINTS')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the health impact', function () {
        const score = view_result('CAT_HEALTH_IMPACT')(outcome)
        const status = view_status('CAT_HEALTH_IMPACT')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = cat_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('CAT_POINTS')(outcome)

        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the best health impact', function () {
        const score = view_result('CAT_HEALTH_IMPACT')(outcome)

        expect(score).toEqual('LOW')
      })
    })

    describe('when called with the median response', function () {
      const outcome = cat_calculation(median_response)

      it('should return the worst score', function () {
        const score = view_result('CAT_POINTS')(outcome)

        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median health impact', function () {
        const score = view_result('CAT_HEALTH_IMPACT')(outcome)

        expect(score).toEqual('MEDIUM')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = cat_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('CAT_POINTS')(outcome)

        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the worst health impact', function () {
        const score = view_result('CAT_HEALTH_IMPACT')(outcome)

        expect(score).toEqual('VERY HIGH')
      })
    })

    describe('when called with a random response', function () {
      const outcome = cat_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('CAT_POINTS')(outcome)
        const EXPECTED_SCORE = 16

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected health impact', function () {
        const score = view_result('CAT_HEALTH_IMPACT')(outcome)
        const EXPECTED_HEALTH_IMPACT = 'MEDIUM'

        expect(score).toEqual(EXPECTED_HEALTH_IMPACT)
      })
    })
  })
})
