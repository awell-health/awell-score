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
import { CalculationOutputType } from '../../src/types/calculations.types'

const SUBSCALE_BEST_SCORE = 0
const SUBSCALE_MEDIAN_SCORE = 25
const SUBSCALE_WORST_SCORE = 50

const TOTAL_BEST_SCORE = 0
const TOTAL_MEDIAN_SCORE = 50
const TOTAL_WORST_SCORE = 100

const prtee_calculation = execute_test_calculation(prtee)

describe('prtee', function () {
  it('prtee calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('prtee')
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
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(PRTEE_SUBSCALES)

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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PAIN')(PRTEE_SUBSCALES),
      )
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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('FUNCTION')(PRTEE_SUBSCALES),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = prtee_calculation(best_response)

    it('should return a score the 2 subscales and a total score', function () {
      expect(outcome).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['PAIN', 'FUNCTION', 'TOTAL']

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when at least one input per subscale is answered', function () {
    describe('when an empty response is passed', function () {
      it('should return "Missing" as the score for every subscale (and the total score)', function () {
        const outcome = prtee_calculation({})

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(undefined)
        })
      })
    })

    describe('when an incomplete response is passed', function () {
      it('should return "Missing" as the score for every subscale (and the total score)', function () {
        const outcome = prtee_calculation({
          PAIN_Q01: 5,
          FUNCTION_Q04: 7,
        })

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(undefined)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when best possible response is passed', function () {
      const outcome = prtee_calculation(best_response)

      it('should return the best score for every subscale', function () {
        const subscale_outcomes = R.filter(
          subscale => subscale.subresult_id !== 'TOTAL',
          outcome,
        )

        subscale_outcomes.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(SUBSCALE_BEST_SCORE)
        })
      })

      it('should return the best total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(
            (subscale: CalculationOutputType) =>
              subscale.subresult_id === 'TOTAL',
          ),
        )(outcome)

        expect(total_score).toEqual(TOTAL_BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = prtee_calculation(median_response)

      it('should return the median score for every subscale', function () {
        const subscale_outcomes = R.filter(
          subscale => subscale.subresult_id !== 'TOTAL',
          outcome,
        )

        subscale_outcomes.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(SUBSCALE_MEDIAN_SCORE)
        })
      })

      it('should return the median total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(
            (subscale: CalculationOutputType) =>
              subscale.subresult_id === 'TOTAL',
          ),
        )(outcome)

        expect(total_score).toEqual(TOTAL_MEDIAN_SCORE)
      })
    })

    describe('when worst possible response is passed', function () {
      const outcome = prtee_calculation(worst_response)

      it('should return the worst score for every subscale', function () {
        const subscale_outcomes = R.filter(
          subscale => subscale.subresult_id !== 'TOTAL',
          outcome,
        )

        subscale_outcomes.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(SUBSCALE_WORST_SCORE)
        })
      })

      it('should return the worst total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(
            (subscale: CalculationOutputType) =>
              subscale.subresult_id === 'TOTAL',
          ),
        )(outcome)

        expect(total_score).toEqual(TOTAL_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = prtee_calculation(random_response)

      it('should return the expected score for "Pain" subscale', function () {
        const score = view_result('PAIN')(outcome)
        const EXPECTED_SCORE = 18

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Function" subscale', function () {
        const score = view_result('FUNCTION')(outcome)
        const EXPECTED_SCORE = 21.5

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('TOTAL')(outcome)
        const EXPECTED_SCORE = 39.5

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          prtee_calculation({
            PAIN_Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          prtee_calculation({
            PAIN_Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          prtee_calculation({
            PAIN_Q01: 11,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
