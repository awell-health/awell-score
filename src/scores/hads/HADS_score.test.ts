import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/hads_form_responses'
import { HADS_SUBSCALES } from './definition'
import { hads } from './HADS_score'

const HADS_SUBSCALE_MIN_SCORE = 0
const HADS_SUBSCALE_MEDIAN_SCORE = 10
const HADS_SUBSCALE_MAX_SCORE = 21

const hads_calculation = new Score(hads)

describe('hads', function () {
  it('hads calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('hads')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'HADS_01',
        'HADS_02',
        'HADS_03',
        'HADS_04',
        'HADS_05',
        'HADS_06',
        'HADS_07',
        'HADS_08',
        'HADS_09',
        'HADS_10',
        'HADS_11',
        'HADS_12',
        'HADS_13',
        'HADS_14',
      ].sort()

      const configured_input_ids = Object.keys(
        hads_calculation.inputSchema,
      ).sort()

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Fear" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'HADS_01',
        'HADS_03',
        'HADS_05',
        'HADS_07',
        'HADS_09',
        'HADS_11',
        'HADS_13',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(HADS_SUBSCALES.FEAR)
    })

    it('should have the expected input idss configured for the "Depression" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'HADS_02',
        'HADS_04',
        'HADS_06',
        'HADS_08',
        'HADS_10',
        'HADS_12',
        'HADS_14',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(HADS_SUBSCALES.DEPRESSION)
    })
  })

  describe('basic assumptions', function () {
    const outcome = hads_calculation.calculate({ payload: min_response })

    const EXPECTED_CALCULATION_IDS = ['FEAR', 'DEPRESSION']

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should contain all the expected calculation ids', function () {
      const EXTRACTED_CALCULATION_IDS_FROM_RESULTS = Object.keys(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULTS).toEqual(
        EXPECTED_CALCULATION_IDS,
      )
    })
  })

  describe('when called with a response where there are answers out of the expected [0-3] range', function () {
    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          hads_calculation.calculate({
            payload: {
              ...min_response,
              HADS_01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          hads_calculation.calculate({
            payload: {
              ...min_response,
              HADS_01: 4,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('when called with an empty response', function () {
    const outcome = hads_calculation.calculate({
      payload: {},
      opts: {
        nullOnMissingInputs: true,
      },
    })

    it('should return null for "Fear" subscale', function () {
      expect(outcome.FEAR).toEqual(null)
    })

    it('should return null for "Depression" subscale', function () {
      expect(outcome.DEPRESSION).toEqual(null)
    })
  })

  describe('when called with a minimum response', function () {
    const outcome = hads_calculation.calculate({ payload: min_response })

    it('should return the minimum score for "Fear" subscale', function () {
      expect(outcome.FEAR).toEqual(HADS_SUBSCALE_MIN_SCORE)
    })

    it('should return the minimum score for "Depression" subscale', function () {
      expect(outcome.DEPRESSION).toEqual(HADS_SUBSCALE_MIN_SCORE)
    })
  })

  describe('when called with a median response', function () {
    const outcome = hads_calculation.calculate({ payload: median_response })

    it('should return the median score for "Fear" subscale', function () {
      expect(outcome.FEAR).toEqual(HADS_SUBSCALE_MEDIAN_SCORE)
    })

    it('should return the median score for "Depression" subscale', function () {
      expect(outcome.DEPRESSION).toEqual(HADS_SUBSCALE_MEDIAN_SCORE)
    })
  })

  describe('when called with a maximum response', function () {
    const outcome = hads_calculation.calculate({ payload: max_response })

    it('should return the maximum score for "Fear" subscale', function () {
      expect(outcome.FEAR).toEqual(HADS_SUBSCALE_MAX_SCORE)
    })

    it('should return the maximum score for "Depression" subscale', function () {
      expect(outcome.DEPRESSION).toEqual(HADS_SUBSCALE_MAX_SCORE)
    })
  })

  describe('when called with a random response', function () {
    const outcome = hads_calculation.calculate({
      payload: random_response,
    })

    it('should return the expected score for the "Fear subscale"', function () {
      const EXPECTED_FEAR_SUBSCALE_SCORE = 11
      expect(outcome.FEAR).toEqual(EXPECTED_FEAR_SUBSCALE_SCORE)
    })

    it('should return the expected score for the "Depression subscale"', function () {
      const EXPECTED_DEPRESSION_SUBSCALE_SCORE = 7
      expect(outcome.DEPRESSION).toEqual(EXPECTED_DEPRESSION_SUBSCALE_SCORE)
    })
  })
})
