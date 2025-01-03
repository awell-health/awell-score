import { expect } from 'chai'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/mlks_test_responses'
import { MLKS_INPUTS } from './definition'
import { mlks } from './mlks'

const mlks_calculation = execute_test_calculation(mlks)

const scores = {
  best: 100,
  worst: 0,
  median: 48,
  random: 61,
}

describe('MLKS', function () {
  it('MLKS calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('mlks')
  })

  describe('basic assumptions', function () {
    const outcome = mlks_calculation(best_response)

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['MLKS_TOTAL_SCORE']

      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_LIMP',
          'Q02_CANE_OR_CRUTCHES',
          'Q03_LOCKING_KNEE',
          'Q04_GIVING_WAY_SENSATION_KNEE',
          'Q05_PAIN',
          'Q06_SWELLING',
          'Q07_CLIMBING_STAIRS',
          'Q08_SQUATTING',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(MLKS_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        mlks_calculation({
          Q01_LIMP: -1,
        }),
      ).toThrow(InvalidInputsError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        mlks_calculation({
          Q01_LIMP: 30,
        }),
      ).toThrow(InvalidInputsError)
    })
  })

  describe('when an answer is above the expected range for Q01_LIMP', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        mlks_calculation({
          Q04_GIVING_WAY_SENSATION_KNEE: 7,
        }),
      ).toThrow(InvalidInputsError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        mlks_calculation({
          Q01_LIMP: "I'm not a number",
        }),
      ).toThrow(InvalidInputsError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = mlks_calculation({})

    it('should return missing status for the score', function () {
      expect(outcome[0].status).toEqual(MISSING_STATUS)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = mlks_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('MLKS_TOTAL_SCORE')(outcome)

        expect(score).toEqual(scores.worst)
      })
    })

    describe('when called with the best response', function () {
      const outcome = mlks_calculation(best_response)
      it('should return the best score', function () {
        const score = view_result('MLKS_TOTAL_SCORE')(outcome)

        expect(score).toEqual(scores.best)
      })
    })

    describe('when called with a median response', function () {
      const outcome = mlks_calculation(median_response)

      it('should return the median score', function () {
        const score = view_result('MLKS_TOTAL_SCORE')(outcome)

        expect(score).toEqual(scores.median)
      })
    })

    describe('when called with the random response', function () {
      const outcome = mlks_calculation(random_response)

      it('should return the exepected score', function () {
        const score = view_result('MLKS_TOTAL_SCORE')(outcome)

        expect(score).toEqual(scores.random)
      })
    })
  })
})
