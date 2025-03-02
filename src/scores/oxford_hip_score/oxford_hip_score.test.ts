import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/ohs_test_responses'
import { OHS_INPUTS } from './definition/oxford_hip_score_inputs'
import { oxford_hip_score } from './oxford_hip_score'

const OHS_WORST_SCORE = 0
const OHS_MEDIAN_SCORE = 24
const OHS_BEST_SCORE = 48

const oxford_hip_score_calculation = new Score(oxford_hip_score)

describe('oxford_hip_score', function () {
  it('oxford_hip_score calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('oxford_hip_score')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ohs_01',
        'ohs_02',
        'ohs_03',
        'ohs_04',
        'ohs_05',
        'ohs_06',
        'ohs_07',
        'ohs_08',
        'ohs_09',
        'ohs_10',
        'ohs_11',
        'ohs_12',
      ]

      const configured_calculation_input_ids = Object.keys(
        oxford_hip_score_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = oxford_hip_score_calculation.calculate({
      payload: best_response,
    })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['OXFORD_HIP_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst total score', function () {
        const outcome = oxford_hip_score_calculation.calculate({
          payload: worst_response,
        })
        expect(outcome.OXFORD_HIP_SCORE).toEqual(OHS_WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = oxford_hip_score_calculation.calculate({
          payload: median_response,
        })

        expect(outcome.OXFORD_HIP_SCORE).toEqual(OHS_MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best total score', function () {
        const outcome = oxford_hip_score_calculation.calculate({
          payload: best_response,
        })

        expect(outcome.OXFORD_HIP_SCORE).toEqual(OHS_BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const EXPECTED_SCORE = 22

        const outcome = oxford_hip_score_calculation.calculate({
          payload: random_response,
        })

        expect(outcome.OXFORD_HIP_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })
  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = oxford_hip_score_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        expect(outcome.OXFORD_HIP_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oxford_hip_score_calculation.calculate({
            payload: {
              ...random_response,
              ohs_01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oxford_hip_score_calculation.calculate({
            payload: {
              ...random_response,
              ohs_01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oxford_hip_score_calculation.calculate({
            payload: {
              ...random_response,
              ohs_01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
