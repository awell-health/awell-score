import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
} from './__testdata__/womac_form_responses'
import { womac } from './womac'

const WOMAC_MIN_SCORE = 0
const WOMAC_MEDIAN_SCORE = 48
const WOMAC_MAX_SCORE = 96

const womac_calculation = new Score(womac)

describe('womac', function () {
  it('womac calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('womac')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'PAIN_WALKING',
        'PAIN_STAIR_CLIMBING',
        'PAIN_NOCTURNAL',
        'PAIN_REST',
        'PAIN_WEIGHT_BEARING',
        'STIFFNESS_MORNING',
        'STIFFNESS_LATER',
        'PHYSICAL_FUNCTION_DESCENDING_STAIRS',
        'PHYSICAL_FUNCTION_ASCENDING_STAIRS',
        'PHYSICAL_FUNCTION_RISING_FROM_SITTING',
        'PHYSICAL_FUNCTION_STANDING',
        'PHYSICAL_FUNCTION_BENDING',
        'PHYSICAL_FUNCTION_WALKING_FLAT_SURFACE',
        'PHYSICAL_FUNCTION_GETTING_IN_OUT_CAR',
        'PHYSICAL_FUNCTION_SHOPPING',
        'PHYSICAL_FUNCTION_PUTTING_ON_SOCKS',
        'PHYSICAL_FUNCTION_LYING_BED',
        'PHYSICAL_FUNCTION_TAKING_OFF_SOCKS',
        'PHYSICAL_FUNCTION_RISING_BED',
        'PHYSICAL_FUNCTION_GETTING_IN_OUT_BATH',
        'PHYSICAL_FUNCTION_SITTING',
        'PHYSICAL_FUNCTION_GETTING_ON_OFF_TOILET',
        'PHYSICAL_FUNCTION_HEAVY_DOMESTIC_DUTIES',
        'PHYSICAL_FUNCTION_LIGHT_DOMESTIC_DUTIES',
      ]

      const configured_calculation_input_ids = Object.keys(womac.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = womac_calculation.calculate({ payload: min_response })

    it('should calculate a total score and 3 section scores', function () {
      expect(Object.keys(outcome).length).toEqual(4)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual([
        'WOMAC_TOTAL_SCORE',
        'WOMAC_PAIN_SCORE',
        'WOMAC_STIFFNESS_SCORE',
        'WOMAC_DIFFICULTY_SCORE',
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      const outcome = womac_calculation.calculate({ payload: min_response })

      it('should return the minimum total score', function () {
        expect(outcome.WOMAC_TOTAL_SCORE).toEqual(WOMAC_MIN_SCORE)
      })
      it('should return the minimum pain score', function () {
        expect(outcome.WOMAC_PAIN_SCORE).toEqual(0)
      })
      it('should return the minimum stiffness score', function () {
        expect(outcome.WOMAC_STIFFNESS_SCORE).toEqual(0)
      })
      it('should return the minimum difficulty score', function () {
        expect(outcome.WOMAC_DIFFICULTY_SCORE).toEqual(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = womac_calculation.calculate({ payload: median_response })

      it('should return the median total score', function () {
        expect(outcome.WOMAC_TOTAL_SCORE).toEqual(WOMAC_MEDIAN_SCORE)
      })
      it('should return the median pain score', function () {
        expect(outcome.WOMAC_PAIN_SCORE).toEqual(10)
      })
      it('should return the median stiffness score', function () {
        expect(outcome.WOMAC_STIFFNESS_SCORE).toEqual(4)
      })
      it('should return the median difficulty score', function () {
        expect(outcome.WOMAC_DIFFICULTY_SCORE).toEqual(34)
      })
    })

    describe('when called with a maximum response', function () {
      const outcome = womac_calculation.calculate({ payload: max_response })

      it('should return the maximum total score', function () {
        expect(outcome.WOMAC_TOTAL_SCORE).toEqual(WOMAC_MAX_SCORE)
      })
      it('should return the maximum pain score', function () {
        expect(outcome.WOMAC_PAIN_SCORE).toEqual(20)
      })
      it('should return the maximum stiffness score', function () {
        expect(outcome.WOMAC_STIFFNESS_SCORE).toEqual(8)
      })
      it('should return the maximum difficulty score', function () {
        expect(outcome.WOMAC_DIFFICULTY_SCORE).toEqual(68)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = womac_calculation.calculate({ payload: {} })

      it('should return null as the total score', function () {
        expect(outcome.WOMAC_TOTAL_SCORE).toEqual(null)
      })
      it('should return null as the pain score', function () {
        expect(outcome.WOMAC_PAIN_SCORE).toEqual(null)
      })
      it('should return null as the stiffness score', function () {
        expect(outcome.WOMAC_STIFFNESS_SCORE).toEqual(null)
      })
      it('should return null as the difficulty score', function () {
        expect(outcome.WOMAC_DIFFICULTY_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          womac_calculation.calculate({
            payload: {
              PAIN_WALKING: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          womac_calculation.calculate({
            payload: {
              PAIN_WALKING: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          womac_calculation.calculate({
            payload: {
              PAIN_WALKING: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
