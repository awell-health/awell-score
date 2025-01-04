import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/koos_ps_form_responses'
import { koos_ps } from './koos_ps'

const KOOS_WORST_SCORE = 0
const KOOS_MEDIAN_SCORE = 59.7
const KOOS_BEST_SCORE = 100

const koos_ps_calculation = new Score(koos_ps)

describe('koos_ps', function () {
  it('koos_ps calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('koos_ps')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        '1_rise_from_bed',
        '2_socks',
        '3_rise_from_chair',
        '4_pickup_from_floor',
        '5_turn_on_knee',
        '6_kneel',
        '7_staying_squat',
      ]

      const configured_calculation_input_ids = Object.keys(koos_ps.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = koos_ps_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['KOOS_PS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum (best) response', function () {
      it('should return the best score', function () {
        const score = koos_ps_calculation.calculate({
          payload: min_response,
        })

        expect(score.KOOS_PS).toEqual(KOOS_BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = koos_ps_calculation.calculate({
          payload: median_response,
        })

        expect(score.KOOS_PS).toEqual(KOOS_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum (worst) response', function () {
      it('should return the worst score', function () {
        const score = koos_ps_calculation.calculate({
          payload: max_response,
        })

        expect(score.KOOS_PS).toEqual(KOOS_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = koos_ps_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 64.7

        expect(score.KOOS_PS).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => koos_ps_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_ps_calculation.calculate({
            payload: {
              '1_rise_from_bed': "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_ps_calculation.calculate({
            payload: {
              '1_rise_from_bed': -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_ps_calculation.calculate({
            payload: {
              '1_rise_from_bed': 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
