import { expect } from 'chai'
import R from 'ramda'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/psk_test_responses'
import { PSK_INPUTS } from './definition/psk_inputs'
// eslint-disable-next-line sort-imports
import { psk, PSK_SORE_CALCULATION_ID } from './psk'

const PSK_WORST_SCORE = 0
const PSK_MEDIAN_SCORE = 5
const PSK_BEST_SCORE = 10

const psk_calculation = execute_test_calculation(psk)

describe('psk', function () {
  it('psk calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('psk')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'SCORE_FOR_ACTIVITY_01',
        'SCORE_FOR_ACTIVITY_02',
        'SCORE_FOR_ACTIVITY_03',
        'SCORE_FOR_ACTIVITY_04',
        'SCORE_FOR_ACTIVITY_05',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(PSK_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = psk_calculation(best_response)

    it('should return 3 calculation results', function () {
      expect(outcome).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PSK_SUM_OF_ACTIVITY_SCORES',
        'PSK_NBR_OF_ACTIVITIES',
        'PSK_SCORE',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst score', function () {
        const score = R.compose(
          view_result(PSK_SORE_CALCULATION_ID),
          psk_calculation,
        )(worst_response)

        expect(score).toEqual(PSK_WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result(PSK_SORE_CALCULATION_ID),
          psk_calculation,
        )(median_response)

        expect(score).toEqual(PSK_MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best score', function () {
        const score = R.compose(
          view_result(PSK_SORE_CALCULATION_ID),
          psk_calculation,
        )(best_response)

        expect(score).toEqual(PSK_BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(PSK_SORE_CALCULATION_ID),
          psk_calculation,
        )(random_response)

        const EXPECTED_SCORE = 3

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const score = R.compose(
          view_result(PSK_SORE_CALCULATION_ID),
          psk_calculation,
        )({})

        expect(score).toEqual(undefined)
      })
    })

    describe('when only one activity score is passed', function () {
      it('should return the score of that activity as the final score', function () {
        const ACTIVITY_SCORE = 8
        const score = R.compose(
          view_result(PSK_SORE_CALCULATION_ID),
          psk_calculation,
        )({
          SCORE_FOR_ACTIVITY_01: ACTIVITY_SCORE,
        })

        expect(score).toEqual(ACTIVITY_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          psk_calculation({
            SCORE_FOR_ACTIVITY_01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          psk_calculation({
            SCORE_FOR_ACTIVITY_01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          psk_calculation({
            SCORE_FOR_ACTIVITY_01: 11,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
