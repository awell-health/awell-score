import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/start_back_test_responses'
import { start_back_screening_tool } from './start_back_screening_tool'
import { RiskClassification } from './helpers/classifyRisk/classifyRisk'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { ZodError } from 'zod'

const START_BACK_TOTAL_MIN_SCORE = 0
const START_BACK_TOTAL_MEDIAN_SCORE = 4
const START_BACK_TOTAL_MAX_SCORE = 9

const START_BACK_SUBSCALE_MIN_SCORE = 0
const START_BACK_SUBSCALE_MEDIAN_SCORE = 0
const START_BACK_SUBSCALE_MAX_SCORE = 5

const start_back_calculation = new Score(start_back_screening_tool)

describe('start_back_screening_tool', function () {
  it('start_back_screening_tool calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('start_back_screening_tool')
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
      ]

      const configured_calculation_input_ids = Object.keys(
        start_back_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = start_back_calculation.calculate({ payload: min_response })

    it('should return 3 scores', function () {
      expect(Object.keys(outcome).length).toEqual(3)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'START_BACK_TOTAL',
        'START_BACK_SUBSCALE',
        'START_BACK_RISK_CLASSIFICATION',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = start_back_calculation.calculate({
        payload: min_response,
      })

      it('should return the minimum total score', function () {
        expect(outcome.START_BACK_TOTAL).toEqual(START_BACK_TOTAL_MIN_SCORE)
      })

      it('should return the minimum subscale score', function () {
        expect(outcome.START_BACK_SUBSCALE).toEqual(
          START_BACK_SUBSCALE_MIN_SCORE,
        )
      })

      it('should return low risk as the START_BACK_RISK_CLASSIFICATION', function () {
        expect(outcome.START_BACK_RISK_CLASSIFICATION).toEqual(
          RiskClassification.LOW_RISK,
        )
      })
    })

    describe('when a median response is passed', function () {
      const outcome = start_back_calculation.calculate({
        payload: median_response,
      })

      it('should return the median total score', function () {
        expect(outcome.START_BACK_TOTAL).toEqual(START_BACK_TOTAL_MEDIAN_SCORE)
      })

      it('should return the median subscale score', function () {
        expect(outcome.START_BACK_SUBSCALE).toEqual(
          START_BACK_SUBSCALE_MEDIAN_SCORE,
        )
      })

      it('should return medium risk as the START_BACK_RISK_CLASSIFICATION', function () {
        expect(outcome.START_BACK_RISK_CLASSIFICATION).toEqual(
          RiskClassification.MEDIUM_RISK,
        )
      })
    })

    describe('when a maximum response is passed', function () {
      const outcome = start_back_calculation.calculate({
        payload: max_response,
      })

      it('should return the maximum total score', function () {
        expect(outcome.START_BACK_TOTAL).toEqual(START_BACK_TOTAL_MAX_SCORE)
      })

      it('should return the maximum subscale score', function () {
        expect(outcome.START_BACK_SUBSCALE).toEqual(
          START_BACK_SUBSCALE_MAX_SCORE,
        )
      })

      it('should return high risk as the START_BACK_RISK_CLASSIFICATION', function () {
        expect(outcome.START_BACK_RISK_CLASSIFICATION).toEqual(
          RiskClassification.HIGH_RISK,
        )
      })
    })

    describe('when a random response is passed', function () {
      const outcome = start_back_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected total score', function () {
        expect(outcome.START_BACK_TOTAL).toEqual(4)
      })

      it('should return the expected subscale score', function () {
        expect(outcome.START_BACK_SUBSCALE).toEqual(2)
      })

      it('should return expected START_BACK_RISK_CLASSIFICATION', function () {
        expect(outcome.START_BACK_RISK_CLASSIFICATION).toEqual(
          RiskClassification.MEDIUM_RISK,
        )
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          start_back_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          start_back_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          start_back_calculation.calculate({
            payload: {
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          start_back_calculation.calculate({
            payload: {
              Q01: 2,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
