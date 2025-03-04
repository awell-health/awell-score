import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ompq_10_form_responses'
import { ompq_10 } from './ompq_10'

const OREBRO_MIN_SCORE = 1
const OREBRO_MEDIAN_SCORE = 50
const OREBRO_MAX_SCORE = 100

const ompq_10_calculation = new Score(ompq_10)

describe('ompq_10', function () {
  it('ompq_10 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ompq_short_form')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'OREBRO_DURATION',
        'OREBRO_PAIN_EXPERIENCE',
        'OREBRO_FEELING_DEPRESSED',
        'OREBRO_ANXIOUS',
        'OREBRO_RISK_OF_PERSISTENT_PAIN',
        'OREBRO_RETURN_TO_WORK_EXPECTANCY',
        'OREBRO_PAIN_FEAR_AVOIDANCE',
        'OREBRO_NORMAL_WORK_WITH_PAIN',
        'OREBRO_LIGHT_WORK',
        'OREBRO_SLEEP_AT_NIGHT',
      ]

      const configured_calculation_input_ids = Object.keys(
        ompq_10_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ompq_10_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['OREBRO'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = ompq_10_calculation.calculate({ payload: min_response })
        expect(outcome.OREBRO).toEqual(OREBRO_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const outcome = ompq_10_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.OREBRO).toEqual(OREBRO_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = ompq_10_calculation.calculate({ payload: max_response })
        expect(outcome.OREBRO).toEqual(OREBRO_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = ompq_10_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 21
        expect(outcome.OREBRO).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = ompq_10_calculation.calculate({ payload: {} })
        expect(outcome.OREBRO).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          ompq_10_calculation.calculate({
            payload: {
              OREBRO_DURATION: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          ompq_10_calculation.calculate({
            payload: {
              OREBRO_DURATION: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ompq_10_calculation.calculate({
            payload: {
              OREBRO_DURATION: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
