import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sst_test_responses'
import { SST_INPUTS } from './definition/sst_inputs'
import { simple_shoulder_test } from './simple_shoulder_test'

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

const sst_calculation = new Score(simple_shoulder_test)

describe('simple_shoulder_test', function () {
  it('simple_shoulder_test calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('simple_shoulder_test')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'Q01',
        'Q02',
        'Q03',
        'Q04',
        'Q05',
        'Q06',
        'Q07',
        'Q08',
        'Q09',
        'Q10',
        'Q11',
        'Q12',
      ]

      const configured_calculation_input_ids = Object.keys(
        sst_calculation.inputSchemaAsObject.shape,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sst_calculation.calculate({ payload: best_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['SST'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst score', function () {
        const outcome = sst_calculation.calculate({ payload: worst_response })
        expect(outcome.SST).toEqual(WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = sst_calculation.calculate({
          payload: median_response,
        })

        expect(outcome.SST).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best score', function () {
        const outcome = sst_calculation.calculate({
          payload: best_response,
        })

        expect(outcome.SST).toEqual(BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = sst_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 58.33

        expect(outcome.SST).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = sst_calculation.calculate({ payload: {} })

      it('should return null as the result', function () {
        expect(outcome.SST).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          sst_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an error', function () {
        expect(() =>
          sst_calculation.calculate({
            payload: {
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sst_calculation.calculate({
            payload: {
              Q01: 3,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
