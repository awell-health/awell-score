import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  worst_response,
  random_response,
} from './__testdata__/koos_form_responses'
import { koos } from './koos'

const KOOS_WORST_SCORE = 0
const KOOS_MEDIAN_SCORE = 50
const KOOS_BEST_SCORE = 100

const koos_calculation = new Score(koos)

describe('koos', function () {
  it('koos calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('koos')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'P1_PAIN_FREQUENCY',
        'P2_PAIN_TWISTING',
        'P3_STRETCHING',
        'P4_BENDING',
        'P5_WALKING',
        'P6_STAIRS',
        'P7_NIGHT',
        'P8_SITTING_LYING',
        'P9_STANDING',
        'SY1_MORNING_STIFFNESS',
        'SY2_STIFFNESS_LATER_IN_DAY',
        'SY3_SWELLING',
        'SY4_GRINDING',
        'SY5_CATCHING',
        'SY6_STRETCHING',
        'SY7_BENDING',
        'A1_DESCENDING_STAIRS',
        'A2_ASCENDING_STAIRS',
        'A3_RISING_FROM_CHAIR',
        'A4_STANDING',
        'A5_BENDING',
        'A6_WALKING',
        'A7_GET_IN_OUT_OF_CAR',
        'A8_SHOPPING',
        'A9_SOCKS_PUTTING_ON',
        'A10_GETTING_OUT_OF_BED',
        'A11_SOCKS_TAKING_OFF',
        'A12_LYING_IN_BED',
        'A13_BATHING',
        'A14_SITTING',
        'A15_TOILET',
        'A16_DOMESTIC_ACTIVITIES',
        'A17_LIGHT_DOMESTIC_ACTIVITIES',
        'SP1_SQUATTING',
        'SP2_RUNNING',
        'SP3_JUMPING',
        'SP4_TWISTING',
        'SP5_KNEELING',
        'Q1_AWARENESS_OF_PROBLEMS',
        'Q2_LIFESTYLE_MODIFICATIONS',
        'Q3_CONFIDENCE',
        'Q4_GENERAL_DIFFICULTY',
      ]

      const configured_calculation_input_ids = Object.keys(koos.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = koos_calculation.calculate({ payload: best_response })

    it('should calculate a 5 score', function () {
      expect(Object.keys(outcome).length).toEqual(5)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual([
        'PAIN',
        'SYMPTOMS',
        'ADL_FUNCTION',
        'SPORT_AND_RECREATION_FUNCTION',
        'QUALITY_OF_LIFE',
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with the best response', function () {
      it('should return the best score', function () {
        const score = koos_calculation.calculate({
          payload: best_response,
        })

        expect(score.PAIN).toEqual(KOOS_BEST_SCORE)
        expect(score.SYMPTOMS).toEqual(KOOS_BEST_SCORE)
        expect(score.ADL_FUNCTION).toEqual(KOOS_BEST_SCORE)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(KOOS_BEST_SCORE)
        expect(score.QUALITY_OF_LIFE).toEqual(KOOS_BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = koos_calculation.calculate({
          payload: median_response,
        })

        expect(score.PAIN).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.SYMPTOMS).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.ADL_FUNCTION).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.QUALITY_OF_LIFE).toEqual(KOOS_MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      it('should return the worst score', function () {
        const score = koos_calculation.calculate({
          payload: worst_response,
        })

        expect(score.PAIN).toEqual(KOOS_WORST_SCORE)
        expect(score.SYMPTOMS).toEqual(KOOS_WORST_SCORE)
        expect(score.ADL_FUNCTION).toEqual(KOOS_WORST_SCORE)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(KOOS_WORST_SCORE)
        expect(score.QUALITY_OF_LIFE).toEqual(KOOS_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = koos_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE_PAIN = 41.7
        const EXPECTED_SCORE_SYMPTOMS = 42.9
        const EXPECTED_SCORE_ADL_FUNCTION = 42.6
        const EXPECTED_SCORE_SPORT_AND_RECREATION_FUNCTION = 20
        const EXPECTED_SCORE_QUALITY_OF_LIFE = 37.5

        expect(score.PAIN).toEqual(EXPECTED_SCORE_PAIN)
        expect(score.SYMPTOMS).toEqual(EXPECTED_SCORE_SYMPTOMS)
        expect(score.ADL_FUNCTION).toEqual(EXPECTED_SCORE_ADL_FUNCTION)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(
          EXPECTED_SCORE_SPORT_AND_RECREATION_FUNCTION,
        )
        expect(score.QUALITY_OF_LIFE).toEqual(EXPECTED_SCORE_QUALITY_OF_LIFE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null for all subscale scores', function () {
        const outcome = koos_calculation.calculate({ payload: {} })

        expect(outcome.PAIN).toBeNull()
        expect(outcome.SYMPTOMS).toBeNull()
        expect(outcome.ADL_FUNCTION).toBeNull()
        expect(outcome.SPORT_AND_RECREATION_FUNCTION).toBeNull()
        expect(outcome.QUALITY_OF_LIFE).toBeNull()
      })
    })
    describe('when a response is passed with less than 50% of the items answered for some subscales', function () {
      it('should return null for the subscale scores with less than 50% of the items answered', function () {
        const outcome = koos_calculation.calculate({
          payload: {
            ...best_response,
            P1_PAIN_FREQUENCY: undefined,
            P2_PAIN_TWISTING: undefined,
            P3_STRETCHING: undefined,
            P4_BENDING: undefined,
            P5_WALKING: undefined,
          },
        })

        expect(outcome.PAIN).toBeNull()
        expect(outcome.SYMPTOMS).not.toBeNull()
        expect(outcome.ADL_FUNCTION).not.toBeNull()
        expect(outcome.SPORT_AND_RECREATION_FUNCTION).not.toBeNull()
        expect(outcome.QUALITY_OF_LIFE).not.toBeNull()
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_calculation.calculate({
            payload: {
              P1_PAIN_FREQUENCY: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_calculation.calculate({
            payload: {
              P1_PAIN_FREQUENCY: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_calculation.calculate({
            payload: {
              P1_PAIN_FREQUENCY: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
