import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/paid_20_test_responses'
import { PAID20_INPUTS, PAID20_INTERPRATION } from './definition'
import { paid_20 } from './paid_20'
import { ScoreLibrary } from '../library'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const BEST_SCORE = 0
const WORST_SCORE = 100
const RANDOM_SCORE = 36.25

const paid_20_calculation = new Score(paid_20)

describe('paid_20', function () {
  it('paid_20 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('paid_20')
  })

  describe('basic assumptions', function () {
    const outcome = paid_20_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(3)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PAID20_SCORE',
        'PAID20_QUESTIONS_WITH_SCORE_3_OR_4',
        'PAID20_INTERPRETATION',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PAID20_Q01',
          'PAID20_Q02',
          'PAID20_Q03',
          'PAID20_Q04',
          'PAID20_Q05',
          'PAID20_Q06',
          'PAID20_Q07',
          'PAID20_Q08',
          'PAID20_Q09',
          'PAID20_Q10',
          'PAID20_Q11',
          'PAID20_Q12',
          'PAID20_Q13',
          'PAID20_Q14',
          'PAID20_Q15',
          'PAID20_Q16',
          'PAID20_Q17',
          'PAID20_Q18',
          'PAID20_Q19',
          'PAID20_Q20',
        ]

        const configured_input_ids = Object.keys(
          paid_20_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          paid_20_calculation.calculate({
            payload: {
              PAID20_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = paid_20_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null for the score', function () {
        expect(outcome.PAID20_SCORE).toEqual(null)
      })

      it('should return null for the interpretation', function () {
        expect(outcome.PAID20_INTERPRETATION).toEqual(null)
      })

      it('should return null for the questions with score 3 or 4', function () {
        expect(outcome.PAID20_QUESTIONS_WITH_SCORE_3_OR_4).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = paid_20_calculation.calculate({
        payload: best_response,
      })

      it('should return the best score', function () {
        expect(outcome.PAID20_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the "Not severe diabetes distress" interpretation', function () {
        expect(outcome.PAID20_INTERPRETATION).toEqual(
          PAID20_INTERPRATION.NOT_SEVERE,
        )
      })

      it('should return the empty string interpretation', function () {
        expect(outcome.PAID20_QUESTIONS_WITH_SCORE_3_OR_4).toEqual('')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = paid_20_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score', function () {
        expect(outcome.PAID20_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the "Severe diabetes distress" interpretation', function () {
        expect(outcome.PAID20_INTERPRETATION).toEqual(
          PAID20_INTERPRATION.SEVERE,
        )
      })

      it('should return the "Questions with score 3 or 4" interpretation', function () {
        expect(outcome.PAID20_QUESTIONS_WITH_SCORE_3_OR_4).toEqual(
          'PAID20_Q01:4,PAID20_Q02:4,PAID20_Q03:4,PAID20_Q04:4,PAID20_Q05:4,PAID20_Q06:4,PAID20_Q07:4,PAID20_Q08:4,PAID20_Q09:4,PAID20_Q10:4,PAID20_Q11:4,PAID20_Q12:4,PAID20_Q13:4,PAID20_Q14:4,PAID20_Q15:4,PAID20_Q16:4,PAID20_Q17:4,PAID20_Q18:4,PAID20_Q19:4,PAID20_Q20:4',
        )
      })
    })

    describe('when called with a random response', function () {
      const outcome = paid_20_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score', function () {
        expect(outcome.PAID20_SCORE).toEqual(RANDOM_SCORE)
      })

      it('should return the "Not severe diabetes distress" interpretation', function () {
        expect(outcome.PAID20_INTERPRETATION).toEqual(
          PAID20_INTERPRATION.NOT_SEVERE,
        )
      })

      it('should return the "Questions with score 3 or 4" interpretation', function () {
        expect(outcome.PAID20_QUESTIONS_WITH_SCORE_3_OR_4).toEqual(
          'PAID20_Q01:3,PAID20_Q09:4,PAID20_Q13:4,PAID20_Q17:3',
        )
      })
    })
  })
})
