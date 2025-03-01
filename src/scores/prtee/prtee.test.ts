import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/prtee_test_responses'
import { PRTEE_SUBSCALES } from './definition/prtee_subscales'
import { prtee } from './prtee'

const SUBSCALE_BEST_SCORE = 0
const SUBSCALE_MEDIAN_SCORE = 25
const SUBSCALE_WORST_SCORE = 50

const TOTAL_BEST_SCORE = 0
const TOTAL_MEDIAN_SCORE = 50
const TOTAL_WORST_SCORE = 100

const prtee_calculation = new Score(prtee)

describe('prtee', function () {
  it('prtee calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('prtee')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'PAIN_Q01',
        'PAIN_Q02',
        'PAIN_Q03',
        'PAIN_Q04',
        'PAIN_Q05',
        'FUNCTION_Q01',
        'FUNCTION_Q02',
        'FUNCTION_Q03',
        'FUNCTION_Q04',
        'FUNCTION_Q05',
        'FUNCTION_Q06',
        'FUNCTION_Q07',
        'FUNCTION_Q08',
        'FUNCTION_Q09',
        'FUNCTION_Q10',
      ]

      const configured_input_ids = Object.keys(prtee_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Pain" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PAIN_Q01',
        'PAIN_Q02',
        'PAIN_Q03',
        'PAIN_Q04',
        'PAIN_Q05',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(PRTEE_SUBSCALES.PAIN)
    })

    it('should have the expected input idss configured for the "Function" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'FUNCTION_Q01',
        'FUNCTION_Q02',
        'FUNCTION_Q03',
        'FUNCTION_Q04',
        'FUNCTION_Q05',
        'FUNCTION_Q06',
        'FUNCTION_Q07',
        'FUNCTION_Q08',
        'FUNCTION_Q09',
        'FUNCTION_Q10',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(PRTEE_SUBSCALES.FUNCTION)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = prtee_calculation.calculate({ payload: best_response })

    it('should return a score the 2 subscales and a total score', function () {
      expect(Object.keys(outcome)).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['TOTAL', 'PAIN', 'FUNCTION']

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when at least one input per subscale is answered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the score for every subscale (and the total score)', function () {
        const outcome = prtee_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(null)
        })
      })
    })

    describe('when an incomplete response is passed', function () {
      it('should return null as the score for every subscale (and the total score)', function () {
        const outcome = prtee_calculation.calculate({
          payload: {
            PAIN_Q01: 5,
            FUNCTION_Q04: 7,
          },
          opts: {
            nullOnMissingInputs: true,
          },
        })

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(null)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when best possible response is passed', function () {
      const outcome = prtee_calculation.calculate({ payload: best_response })

      it('should return the best score for "Pain" subscale', function () {
        expect(outcome.PAIN).toEqual(SUBSCALE_BEST_SCORE)
      })

      it('should return the best score for "Function" subscale', function () {
        expect(outcome.FUNCTION).toEqual(SUBSCALE_BEST_SCORE)
      })

      it('should return the best total score', function () {
        expect(outcome.TOTAL).toEqual(TOTAL_BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = prtee_calculation.calculate({ payload: median_response })

      it('should return the median score for "Pain" subscale', function () {
        expect(outcome.PAIN).toEqual(SUBSCALE_MEDIAN_SCORE)
      })

      it('should return the median score for "Function" subscale', function () {
        expect(outcome.FUNCTION).toEqual(SUBSCALE_MEDIAN_SCORE)
      })

      it('should return the median total score', function () {
        expect(outcome.TOTAL).toEqual(TOTAL_MEDIAN_SCORE)
      })
    })

    describe('when worst possible response is passed', function () {
      const outcome = prtee_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score for "Pain" subscale', function () {
        expect(outcome.PAIN).toEqual(SUBSCALE_WORST_SCORE)
      })

      it('should return the worst score for "Function" subscale', function () {
        expect(outcome.FUNCTION).toEqual(SUBSCALE_WORST_SCORE)
      })

      it('should return the worst total score', function () {
        expect(outcome.TOTAL).toEqual(TOTAL_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = prtee_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score for "Pain" subscale', function () {
        const EXPECTED_SCORE = 18
        expect(outcome.PAIN).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Function" subscale', function () {
        const EXPECTED_SCORE = 21.5
        expect(outcome.FUNCTION).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const EXPECTED_SCORE = 39.5
        expect(outcome.TOTAL).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          prtee_calculation.calculate({
            payload: {
              ...best_response,
              PAIN_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          prtee_calculation.calculate({
            payload: {
              ...best_response,
              PAIN_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          prtee_calculation.calculate({
            payload: {
              ...best_response,
              PAIN_Q01: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
