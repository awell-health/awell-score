import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/woos_test_responses'
import { woos } from './woos'
import { ScoreLibrary } from '../library'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const EXPECTED_INPUT_IDS = [
  'WOOS_Q01',
  'WOOS_Q02',
  'WOOS_Q03',
  'WOOS_Q04',
  'WOOS_Q05',
  'WOOS_Q06',
  'WOOS_Q07',
  'WOOS_Q08',
  'WOOS_Q09',
  'WOOS_Q10',
  'WOOS_Q11',
  'WOOS_Q12',
  'WOOS_Q13',
  'WOOS_Q14',
  'WOOS_Q15',
  'WOOS_Q16',
  'WOOS_Q17',
  'WOOS_Q18',
  'WOOS_Q19',
]

const EXPECTED_OUTPUT_IDS = [
  'WOOS_PHYSICAL_SYMPTOMS',
  'WOOS_SPORTS_RECREATION_WORK',
  'WOOS_LIFESTYLE',
  'WOOS_EMOTIONS',
  'WOOS_TOTAL',
  'WOOS_PERCENTAGE',
]

const woos_calculation = new Score(woos)

describe('woos', function () {
  it('should be available as a calculation in the library', function () {
    expect(ScoreLibrary).toHaveProperty('woos')
  })

  describe('basic assumptions', function () {
    const outcome = woos_calculation.calculate({ payload: best_response })

    it('should return 6 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(6)
    })

    it('should have the expected calculation result ids', function () {
      expect(Object.keys(outcome)).toEqual(EXPECTED_OUTPUT_IDS)
    })
  })

  describe('validation', function () {
    it('should have all the expected input ids configured', function () {
      const configured_input_ids = Object.keys(woos_calculation.inputSchema)
      expect(configured_input_ids).toEqual(EXPECTED_INPUT_IDS)
    })

    it('should throw a ZodError for values below 0', function () {
      expect(() =>
        woos_calculation.calculate({
          payload: { WOOS_Q01: -1 },
        }),
      ).toThrow(ZodError)
    })

    it('should throw a ZodError for values above 100', function () {
      expect(() =>
        woos_calculation.calculate({
          payload: { WOOS_Q01: 101 },
        }),
      ).toThrow(ZodError)
    })

    describe('when called with an empty response', function () {
      const outcome = woos_calculation.calculate({
        payload: {},
        opts: { nullOnMissingInputs: true },
      })

      it('should return null for all section scores', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(null)
        expect(outcome.WOOS_SPORTS_RECREATION_WORK).toEqual(null)
        expect(outcome.WOOS_LIFESTYLE).toEqual(null)
        expect(outcome.WOOS_EMOTIONS).toEqual(null)
      })

      it('should return null for the total', function () {
        expect(outcome.WOOS_TOTAL).toEqual(null)
      })

      it('should return null for the percentage', function () {
        expect(outcome.WOOS_PERCENTAGE).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response (all zeros)', function () {
      const outcome = woos_calculation.calculate({
        payload: best_response,
      })

      it('should return 0 for all section scores', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(0)
        expect(outcome.WOOS_SPORTS_RECREATION_WORK).toEqual(0)
        expect(outcome.WOOS_LIFESTYLE).toEqual(0)
        expect(outcome.WOOS_EMOTIONS).toEqual(0)
      })

      it('should return 0 for the total', function () {
        expect(outcome.WOOS_TOTAL).toEqual(0)
      })

      it('should return 100 for the percentage of normal', function () {
        expect(outcome.WOOS_PERCENTAGE).toEqual(100)
      })
    })

    describe('when called with the worst response (all 100s)', function () {
      const outcome = woos_calculation.calculate({
        payload: worst_response,
      })

      it('should return max for all section scores', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(600)
        expect(outcome.WOOS_SPORTS_RECREATION_WORK).toEqual(500)
        expect(outcome.WOOS_LIFESTYLE).toEqual(500)
        expect(outcome.WOOS_EMOTIONS).toEqual(300)
      })

      it('should return 1900 for the total', function () {
        expect(outcome.WOOS_TOTAL).toEqual(1900)
      })

      it('should return 0 for the percentage of normal', function () {
        expect(outcome.WOOS_PERCENTAGE).toEqual(0)
      })
    })

    describe('when called with a random response', function () {
      const outcome = woos_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected section scores', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(210)
        expect(outcome.WOOS_SPORTS_RECREATION_WORK).toEqual(175)
        expect(outcome.WOOS_LIFESTYLE).toEqual(255)
        expect(outcome.WOOS_EMOTIONS).toEqual(225)
      })

      it('should return the expected total', function () {
        expect(outcome.WOOS_TOTAL).toEqual(865)
      })

      it('should return the expected percentage of normal', function () {
        // (1900 - 865) / 19 = 54.47368421...
        expect(outcome.WOOS_PERCENTAGE).toBeCloseTo(54.47, 1)
      })
    })

    describe('when a partial section is provided', function () {
      const outcome = woos_calculation.calculate({
        payload: {
          WOOS_Q01: 50,
          WOOS_Q02: 50,
        },
        opts: { nullOnMissingInputs: true },
      })

      it('should return null for sections with missing inputs', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(null)
        expect(outcome.WOOS_SPORTS_RECREATION_WORK).toEqual(null)
        expect(outcome.WOOS_LIFESTYLE).toEqual(null)
        expect(outcome.WOOS_EMOTIONS).toEqual(null)
      })

      it('should return null for the total and percentage', function () {
        expect(outcome.WOOS_TOTAL).toEqual(null)
        expect(outcome.WOOS_PERCENTAGE).toEqual(null)
      })
    })
  })
})
