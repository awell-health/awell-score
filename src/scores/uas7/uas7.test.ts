import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/uas7_test_responses'
import {
  UAS7_INTERPRETATION_CODE,
  UAS7_INTERPRETATION_LABEL,
  UAS7_SCORE_BANDS,
} from './definition'
import { uas7 } from './uas7'
import { ScoreLibrary } from '../library'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const BEST_TOTAL = 0
const WORST_TOTAL = 42
const RANDOM_TOTAL = 20

const uas7_calculation = new Score(uas7)

describe('uas7', function () {
  it('uas7 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('uas7')
  })

  describe('basic assumptions', function () {
    const outcome = uas7_calculation.calculate({ payload: best_response })

    it('should return 10 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(10)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'UAS7_DAY_1',
        'UAS7_DAY_2',
        'UAS7_DAY_3',
        'UAS7_DAY_4',
        'UAS7_DAY_5',
        'UAS7_DAY_6',
        'UAS7_DAY_7',
        'UAS7_TOTAL',
        'UAS7_INTERPRETATION',
        'UAS7_INTERPRETATION_LABEL',
      ]

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'DAY_1_WHEALS',
          'DAY_1_ITCH',
          'DAY_2_WHEALS',
          'DAY_2_ITCH',
          'DAY_3_WHEALS',
          'DAY_3_ITCH',
          'DAY_4_WHEALS',
          'DAY_4_ITCH',
          'DAY_5_WHEALS',
          'DAY_5_ITCH',
          'DAY_6_WHEALS',
          'DAY_6_ITCH',
          'DAY_7_WHEALS',
          'DAY_7_ITCH',
        ]

        const configured_input_ids = Object.keys(
          uas7_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not one of the allowed answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          uas7_calculation.calculate({
            payload: {
              DAY_1_WHEALS: -1,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw a ZodError for values above 3', function () {
        expect(() =>
          uas7_calculation.calculate({
            payload: {
              DAY_1_ITCH: 4,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = uas7_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null for all daily scores', function () {
        expect(outcome.UAS7_DAY_1).toEqual(null)
        expect(outcome.UAS7_DAY_2).toEqual(null)
        expect(outcome.UAS7_DAY_3).toEqual(null)
        expect(outcome.UAS7_DAY_4).toEqual(null)
        expect(outcome.UAS7_DAY_5).toEqual(null)
        expect(outcome.UAS7_DAY_6).toEqual(null)
        expect(outcome.UAS7_DAY_7).toEqual(null)
      })

      it('should return null for the total', function () {
        expect(outcome.UAS7_TOTAL).toEqual(null)
      })

      it('should return null for the interpretation', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(null)
      })

      it('should return null for the interpretation label', function () {
        expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response (all zeros)', function () {
      const outcome = uas7_calculation.calculate({
        payload: best_response,
      })

      it('should return 0 for each daily score', function () {
        expect(outcome.UAS7_DAY_1).toEqual(0)
        expect(outcome.UAS7_DAY_2).toEqual(0)
        expect(outcome.UAS7_DAY_3).toEqual(0)
        expect(outcome.UAS7_DAY_4).toEqual(0)
        expect(outcome.UAS7_DAY_5).toEqual(0)
        expect(outcome.UAS7_DAY_6).toEqual(0)
        expect(outcome.UAS7_DAY_7).toEqual(0)
      })

      it('should return the best total score', function () {
        expect(outcome.UAS7_TOTAL).toEqual(BEST_TOTAL)
      })

      it('should return the "Urticaria-free" interpretation', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(
          UAS7_INTERPRETATION_CODE.URTICARIA_FREE.en,
        )
      })

      it('should return the urticaria-free interpretation label', function () {
        expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(
          UAS7_INTERPRETATION_LABEL.URTICARIA_FREE.en,
        )
      })
    })

    describe('when called with the worst response (all threes)', function () {
      const outcome = uas7_calculation.calculate({
        payload: worst_response,
      })

      it('should return 6 for each daily score', function () {
        expect(outcome.UAS7_DAY_1).toEqual(6)
        expect(outcome.UAS7_DAY_2).toEqual(6)
        expect(outcome.UAS7_DAY_3).toEqual(6)
        expect(outcome.UAS7_DAY_4).toEqual(6)
        expect(outcome.UAS7_DAY_5).toEqual(6)
        expect(outcome.UAS7_DAY_6).toEqual(6)
        expect(outcome.UAS7_DAY_7).toEqual(6)
      })

      it('should return the worst total score', function () {
        expect(outcome.UAS7_TOTAL).toEqual(WORST_TOTAL)
      })

      it('should return the "Severe" interpretation', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(
          UAS7_INTERPRETATION_CODE.SEVERE.en,
        )
      })

      it('should return the severe interpretation label', function () {
        expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(
          UAS7_INTERPRETATION_LABEL.SEVERE.en,
        )
      })
    })

    describe('when called with a random response', function () {
      const outcome = uas7_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected daily scores', function () {
        expect(outcome.UAS7_DAY_1).toEqual(5)
        expect(outcome.UAS7_DAY_2).toEqual(2)
        expect(outcome.UAS7_DAY_3).toEqual(2)
        expect(outcome.UAS7_DAY_4).toEqual(6)
        expect(outcome.UAS7_DAY_5).toEqual(1)
        expect(outcome.UAS7_DAY_6).toEqual(3)
        expect(outcome.UAS7_DAY_7).toEqual(1)
      })

      it('should return the expected total', function () {
        expect(outcome.UAS7_TOTAL).toEqual(RANDOM_TOTAL)
      })

      it('should return the "Moderate" interpretation (16-27)', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(
          UAS7_INTERPRETATION_CODE.MODERATE.en,
        )
      })

      it('should return the moderate interpretation label', function () {
        expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(
          UAS7_INTERPRETATION_LABEL.MODERATE.en,
        )
      })
    })
  })

  describe('interpretation bands', function () {
    it('should return well-controlled for a score of 5', function () {
      const payload: Record<string, number> = {}
      for (let d = 1; d <= 7; d++) {
        payload[`DAY_${d}_WHEALS`] = 0
        payload[`DAY_${d}_ITCH`] = 0
      }
      payload.DAY_1_WHEALS = 2
      payload.DAY_1_ITCH = 3

      const outcome = uas7_calculation.calculate({ payload })
      expect(outcome.UAS7_TOTAL).toEqual(5)
      expect(outcome.UAS7_INTERPRETATION).toEqual(
        UAS7_INTERPRETATION_CODE.WELL_CONTROLLED.en,
      )
      expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(
        UAS7_INTERPRETATION_LABEL.WELL_CONTROLLED.en,
      )
    })

    it('should return mild for a score of 10', function () {
      const payload: Record<string, number> = {}
      for (let d = 1; d <= 7; d++) {
        payload[`DAY_${d}_WHEALS`] = 1
        payload[`DAY_${d}_ITCH`] = 0
      }
      payload.DAY_1_WHEALS = 2
      payload.DAY_1_ITCH = 2

      const outcome = uas7_calculation.calculate({ payload })
      expect(outcome.UAS7_TOTAL).toEqual(10)
      expect(outcome.UAS7_INTERPRETATION).toEqual(
        UAS7_INTERPRETATION_CODE.MILD.en,
      )
      expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(
        UAS7_INTERPRETATION_LABEL.MILD.en,
      )
    })
  })

  describe('language-aware calculation', function () {
    it('should fall back to English when requested language is not available', function () {
      const outcome = uas7_calculation.calculate({
        payload: best_response,
        language: 'fr',
      })
      expect(outcome.UAS7_INTERPRETATION).toEqual(
        UAS7_INTERPRETATION_CODE.URTICARIA_FREE.en,
      )
      expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(
        UAS7_INTERPRETATION_LABEL.URTICARIA_FREE.en,
      )
    })
  })
})
