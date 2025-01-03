import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/hoos_ps_form_responses'
import { hoos_ps } from './hoos_ps'

const HOOS_WORST_SCORE = 0
const HOOS_MEDIAN_SCORE = 62.3
const HOOS_BEST_SCORE = 100

const hoos_ps_calculation = new Score(hoos_ps)

describe('hoos_ps', function () {
  it('hoos_ps calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('hoos_ps')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        '1_stairs',
        '2_bath_shower',
        '3_sit',
        '4_running',
        '5_turn_on_leg',
      ]

      const configured_calculation_input_ids = Object.keys(hoos_ps.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = hoos_ps_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual(['HOOS_PS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum (best) response', function () {
      it('should return the best score', function () {
        const score = hoos_ps_calculation.calculate({ payload: min_response })
        expect(score.HOOS_PS).toEqual(HOOS_BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = hoos_ps_calculation.calculate({
          payload: median_response,
        })

        expect(score.HOOS_PS).toEqual(HOOS_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum (worst) response', function () {
      it('should return the worst score', function () {
        const score = hoos_ps_calculation.calculate({
          payload: max_response,
        })

        expect(score.HOOS_PS).toEqual(HOOS_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = hoos_ps_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 58.3

        expect(score.HOOS_PS).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => hoos_ps_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hoos_ps_calculation.calculate({
            payload: {
              '1_stairs': "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hoos_ps_calculation.calculate({
            payload: {
              '1_stairs': -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hoos_ps_calculation.calculate({
            payload: {
              '1_stairs': 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
