import { expect } from 'chai'

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
} from './__testdata__/ikdc_test_responses'
import { IKDC_INPUTS } from './definition/ikdc_inputs'
import { ikdc } from './ikdc'

const IKDC_WORST_SCORE = 0
const IKDC_MEDIAN_SCORE = 49.43 // 50 is mathematically impossible
const IKDC_BEST_SCORE = 100

const ikdc_calculation = execute_test_calculation(ikdc)

describe('ikdc', function () {
  it('ikdc calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('ikdc')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'IKDC_Q01',
        'IKDC_Q02',
        'IKDC_Q03',
        'IKDC_Q04',
        'IKDC_Q05',
        'IKDC_Q06',
        'IKDC_Q07',
        'IKDC_Q08',
        'IKDC_Q09A',
        'IKDC_Q09B',
        'IKDC_Q09C',
        'IKDC_Q09D',
        'IKDC_Q09E',
        'IKDC_Q09F',
        'IKDC_Q09G',
        'IKDC_Q09H',
        'IKDC_Q09I',
        'IKDC_Q10_CURRENT_KNEE_FUNCTION',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(IKDC_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ikdc_calculation(best_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['IKDC_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when the best response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = ikdc_calculation(best_response)
        const result = view_result()(outcome)

        expect(result).toEqual(IKDC_BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = ikdc_calculation(median_response)
        const result = view_result()(outcome)

        expect(result).toEqual(IKDC_MEDIAN_SCORE)
      })
    })

    describe('when the worst response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = ikdc_calculation(worst_response)
        const result = view_result()(outcome)

        expect(result).toEqual(IKDC_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const EXPECTED_SCORE = 34.48

        const outcome = ikdc_calculation(random_response)
        const result = view_result()(outcome)

        expect(result).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = ikdc_calculation({})
        const result = view_result()(outcome)

        expect(result).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ikdc_calculation({
            IKDC_Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ikdc_calculation({
            IKDC_Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ikdc_calculation({
            IKDC_Q01: 5,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
