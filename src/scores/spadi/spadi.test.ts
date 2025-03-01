import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  complete_random_response,
  incomplete_random_response,
  max_response,
  median_response,
  min_response,
} from './__testdata__/spadi_test_responses'
import { SPADI_SUBSCALES } from './definition/spadi_subscales'
import { spadi } from './spadi'

const SPADI_MIN_SCORE = 0
const SPADI_MEDIAN_SCORE = 50
const SPADI_MAX_SCORE = 100

const spadi_calculation = new Score(spadi)

describe('spadi', function () {
  it('spadi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('spadi')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
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
        'Q13',
      ]

      const configured_input_ids = Object.keys(spadi_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input ids configured for the Pain subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04', 'Q05']

      expect(EXPECTED_INPUT_IDS).toEqual(SPADI_SUBSCALES.PAIN)
    })

    it('should have the expected input ids configured for the Disability subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q06',
        'Q07',
        'Q08',
        'Q09',
        'Q10',
        'Q11',
        'Q12',
        'Q13',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(SPADI_SUBSCALES.DISABILITY)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = spadi_calculation.calculate({
      payload: complete_random_response,
    })

    it('should return a score for the 2 subscales and 1 total score', function () {
      expect(Object.keys(outcome)).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['TOTAL', 'PAIN', 'DISABILITY']

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the score for every subscale and the total score', function () {
        const outcome = spadi_calculation.calculate({ payload: {} })

        Object.values(outcome).forEach(res => {
          expect(res).toEqual(null)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when minimum response is passed', function () {
      it('should return the min score for every subscale and the total score', function () {
        const outcome = spadi_calculation.calculate({ payload: min_response })
        console.log(outcome)
        Object.values(outcome).forEach(res => {
          expect(res).toEqual(SPADI_MIN_SCORE)
        })
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score for every subscale and the total score', function () {
        const outcome = spadi_calculation.calculate({
          payload: median_response,
        })

        Object.values(outcome).forEach(res => {
          expect(res).toEqual(SPADI_MEDIAN_SCORE)
        })
      })
    })

    describe('when a max response is passed', function () {
      it('should return the max score for every subscale and the total score', function () {
        const outcome = spadi_calculation.calculate({
          payload: max_response,
        })

        Object.values(outcome).forEach(res => {
          expect(res).toEqual(SPADI_MAX_SCORE)
        })
      })
    })

    describe('when a complete random response is passed', function () {
      const outcome = spadi_calculation.calculate({
        payload: complete_random_response,
      })

      it('should return the expected score for the Pain subscale', function () {
        const EXPECTED_SCORE = 26
        expect(outcome.PAIN).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the Disability subscale', function () {
        const EXPECTED_SCORE = 36.25
        expect(outcome.DISABILITY).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const EXPECTED_SCORE = 31.125
        expect(outcome.TOTAL).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when an incomplete random response is passed', function () {
      const outcome = spadi_calculation.calculate({
        payload: incomplete_random_response,
      })

      it('should return the expected score for the Pain subscale', function () {
        const EXPECTED_SCORE = 36.67
        expect(outcome.PAIN).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the Disability subscale', function () {
        const EXPECTED_SCORE = 38
        expect(outcome.DISABILITY).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const EXPECTED_SCORE = 37.335
        expect(outcome.TOTAL).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          spadi_calculation.calculate({
            payload: {
              ...complete_random_response,
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          spadi_calculation.calculate({
            payload: {
              ...complete_random_response,
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          spadi_calculation.calculate({
            payload: {
              ...complete_random_response,
              Q01: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
