import {
  best_response,
  random_response,
  worst_response,
  six_day_response,
  five_day_response,
  four_day_response,
  three_day_response,
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

    it('should return 12 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(12)
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
        'UAS7_MISSING_DAYS_NUMBER',
        'UAS7_MISSING_DAYS',
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

      it('should report all 7 days as missing', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(7)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('1, 2, 3, 4, 5, 6, 7')
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

      it('should report no missing days', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(0)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('')
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

      it('should report no missing days', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(0)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('')
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

      it('should report no missing days', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(0)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('')
      })
    })
  })

  describe('partial data (4/7 rule with mean imputation)', function () {
    describe('when called with 6 of 7 days (day 3 missing)', function () {
      const outcome = uas7_calculation.calculate({
        payload: six_day_response,
      })

      it('should return daily scores for present days and null for the missing day', function () {
        expect(outcome.UAS7_DAY_1).toEqual(5)
        expect(outcome.UAS7_DAY_2).toEqual(2)
        expect(outcome.UAS7_DAY_3).toEqual(null)
        expect(outcome.UAS7_DAY_4).toEqual(6)
        expect(outcome.UAS7_DAY_5).toEqual(1)
        expect(outcome.UAS7_DAY_6).toEqual(3)
        expect(outcome.UAS7_DAY_7).toEqual(1)
      })

      it('should return a mean-imputed total of 21', function () {
        expect(outcome.UAS7_TOTAL).toEqual(21)
      })

      it('should return the "Moderate" interpretation', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(
          UAS7_INTERPRETATION_CODE.MODERATE.en,
        )
      })

      it('should report 1 missing day', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(1)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('3')
      })
    })

    describe('when called with 5 of 7 days (days 2 and 5 missing)', function () {
      const outcome = uas7_calculation.calculate({
        payload: five_day_response,
      })

      it('should return daily scores for present days and null for missing days', function () {
        expect(outcome.UAS7_DAY_1).toEqual(5)
        expect(outcome.UAS7_DAY_2).toEqual(null)
        expect(outcome.UAS7_DAY_3).toEqual(2)
        expect(outcome.UAS7_DAY_4).toEqual(6)
        expect(outcome.UAS7_DAY_5).toEqual(null)
        expect(outcome.UAS7_DAY_6).toEqual(3)
        expect(outcome.UAS7_DAY_7).toEqual(1)
      })

      it('should return a mean-imputed total of 24', function () {
        expect(outcome.UAS7_TOTAL).toEqual(24)
      })

      it('should return the "Moderate" interpretation', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(
          UAS7_INTERPRETATION_CODE.MODERATE.en,
        )
      })

      it('should report 2 missing days', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(2)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('2, 5')
      })
    })

    describe('when called with 4 of 7 days (days 2, 4, 7 missing)', function () {
      const outcome = uas7_calculation.calculate({
        payload: four_day_response,
      })

      it('should return daily scores for present days and null for missing days', function () {
        expect(outcome.UAS7_DAY_1).toEqual(5)
        expect(outcome.UAS7_DAY_2).toEqual(null)
        expect(outcome.UAS7_DAY_3).toEqual(2)
        expect(outcome.UAS7_DAY_4).toEqual(null)
        expect(outcome.UAS7_DAY_5).toEqual(1)
        expect(outcome.UAS7_DAY_6).toEqual(3)
        expect(outcome.UAS7_DAY_7).toEqual(null)
      })

      it('should return a mean-imputed total of 19', function () {
        expect(outcome.UAS7_TOTAL).toEqual(19)
      })

      it('should return the "Moderate" interpretation', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(
          UAS7_INTERPRETATION_CODE.MODERATE.en,
        )
      })

      it('should report 3 missing days', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(3)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('2, 4, 7')
      })
    })

    describe('when called with 3 of 7 days (below 4/7 threshold)', function () {
      const outcome = uas7_calculation.calculate({
        payload: three_day_response,
      })

      it('should return daily scores for present days and null for missing days', function () {
        expect(outcome.UAS7_DAY_1).toEqual(5)
        expect(outcome.UAS7_DAY_2).toEqual(null)
        expect(outcome.UAS7_DAY_3).toEqual(2)
        expect(outcome.UAS7_DAY_4).toEqual(null)
        expect(outcome.UAS7_DAY_5).toEqual(null)
        expect(outcome.UAS7_DAY_6).toEqual(3)
        expect(outcome.UAS7_DAY_7).toEqual(null)
      })

      it('should return null for the total', function () {
        expect(outcome.UAS7_TOTAL).toEqual(null)
      })

      it('should return null for the interpretation', function () {
        expect(outcome.UAS7_INTERPRETATION).toEqual(null)
        expect(outcome.UAS7_INTERPRETATION_LABEL).toEqual(null)
      })

      it('should report 4 missing days', function () {
        expect(outcome.UAS7_MISSING_DAYS_NUMBER).toEqual(4)
        expect(outcome.UAS7_MISSING_DAYS).toEqual('2, 4, 5, 7')
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
