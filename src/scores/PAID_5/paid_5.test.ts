import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/paid_5_test_responses'
import {
  PAID5_INTERPRETATION_LABEL,
  PAID5_INTERPRETATION_CODE,
} from './definition'
import { paid_5 } from './paid_5'
import { ScoreLibrary } from '../library'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const BEST_SCORE = 0
const WORST_SCORE = 20
const RANDOM_SCORE = 8

const paid_5_calculation = new Score(paid_5)

describe('paid_5', function () {
  it('paid_5 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('paid_5')
  })

  describe('basic assumptions', function () {
    const outcome = paid_5_calculation.calculate({ payload: best_response })

    it('should return 3 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(3)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'PAID5_SCORE',
        'PAID5_INTERPRETATION',
        'PAID5_INTERPRETATION_LABEL',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PAID5_Q01',
          'PAID5_Q02',
          'PAID5_Q03',
          'PAID5_Q04',
          'PAID5_Q05',
        ]

        const configured_input_ids = Object.keys(
          paid_5_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not one of the allowed answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          paid_5_calculation.calculate({
            payload: {
              PAID5_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = paid_5_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null for the score', function () {
        expect(outcome.PAID5_SCORE).toEqual(null)
      })

      it('should return null for the interpretation', function () {
        expect(outcome.PAID5_INTERPRETATION).toEqual(null)
      })

      it('should return null for the interpretation label', function () {
        expect(outcome.PAID5_INTERPRETATION_LABEL).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = paid_5_calculation.calculate({
        payload: best_response,
      })

      it('should return the best score', function () {
        expect(outcome.PAID5_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the "NO_DISTRESS" interpretation', function () {
        expect(outcome.PAID5_INTERPRETATION).toEqual(
          PAID5_INTERPRETATION_CODE.NO_DISTRESS.en,
        )
      })

      it('should return the English interpretation label by default', function () {
        expect(outcome.PAID5_INTERPRETATION_LABEL).toEqual(
          PAID5_INTERPRETATION_LABEL.NO_DISTRESS.en,
        )
      })
    })

    describe('when called with the worst response', function () {
      const outcome = paid_5_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score', function () {
        expect(outcome.PAID5_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the "POSSIBLE_DISTRESS" interpretation', function () {
        expect(outcome.PAID5_INTERPRETATION).toEqual(
          PAID5_INTERPRETATION_CODE.POSSIBLE_DISTRESS.en,
        )
      })

      it('should return the English interpretation label by default', function () {
        expect(outcome.PAID5_INTERPRETATION_LABEL).toEqual(
          PAID5_INTERPRETATION_LABEL.POSSIBLE_DISTRESS.en,
        )
      })
    })

    describe('when called with a random response', function () {
      const outcome = paid_5_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score', function () {
        expect(outcome.PAID5_SCORE).toEqual(RANDOM_SCORE)
      })

      it('should return the "POSSIBLE_DISTRESS" interpretation (score >= 8)', function () {
        expect(outcome.PAID5_INTERPRETATION).toEqual(
          PAID5_INTERPRETATION_CODE.POSSIBLE_DISTRESS.en,
        )
      })

      it('should return the English interpretation label by default', function () {
        expect(outcome.PAID5_INTERPRETATION_LABEL).toEqual(
          PAID5_INTERPRETATION_LABEL.POSSIBLE_DISTRESS.en,
        )
      })
    })
  })

  describe('language-aware calculation', function () {
    it('should return Polish interpretation code when language is pl', function () {
      const outcome = paid_5_calculation.calculate({
        payload: best_response,
        language: 'pl',
      })
      expect(outcome.PAID5_INTERPRETATION).toEqual(
        PAID5_INTERPRETATION_CODE.NO_DISTRESS.pl,
      )
    })

    it('should return Polish interpretation label when language is pl', function () {
      const outcome = paid_5_calculation.calculate({
        payload: best_response,
        language: 'pl',
      })
      expect(outcome.PAID5_INTERPRETATION_LABEL).toEqual(
        PAID5_INTERPRETATION_LABEL.NO_DISTRESS.pl,
      )
    })

    it('should return Polish values for distress when language is pl', function () {
      const outcome = paid_5_calculation.calculate({
        payload: worst_response,
        language: 'pl',
      })
      expect(outcome.PAID5_INTERPRETATION).toEqual(
        PAID5_INTERPRETATION_CODE.POSSIBLE_DISTRESS.pl,
      )
      expect(outcome.PAID5_INTERPRETATION_LABEL).toEqual(
        PAID5_INTERPRETATION_LABEL.POSSIBLE_DISTRESS.pl,
      )
    })

    it('should fall back to English when requested language is not available', function () {
      const outcome = paid_5_calculation.calculate({
        payload: best_response,
        language: 'fr',
      })
      expect(outcome.PAID5_INTERPRETATION).toEqual(
        PAID5_INTERPRETATION_CODE.NO_DISTRESS.en,
      )
      expect(outcome.PAID5_INTERPRETATION_LABEL).toEqual(
        PAID5_INTERPRETATION_LABEL.NO_DISTRESS.en,
      )
    })
  })
})
