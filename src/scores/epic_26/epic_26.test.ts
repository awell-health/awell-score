import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/epic_26_form_responses'
import { Epic26Domains } from './definition/epic_26_domains'
import { epic_26 } from './epic_26'

// Higher scores are representing better HRQOL.
const WORST_DOMAIN_SCORE = 0
const BEST_DOMAIN_SCORE = 100

const epic_26_calculation = new Score(epic_26)

describe('epic_26', function () {
  it('epic_26 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('epic_26')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected item numbers configured', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EPIC26_Q01',
        'EPIC26_Q02',
        'EPIC26_Q03',
        'EPIC26_Q04a',
        'EPIC26_Q04b',
        'EPIC26_Q04c',
        'EPIC26_Q04d',
        'EPIC26_Q04e',
        // 34, --> Item number 34 is not used in any domain for score calculation
        'EPIC26_Q06a',
        'EPIC26_Q06b',
        'EPIC26_Q06c',
        'EPIC26_Q06d',
        'EPIC26_Q06e',
        'EPIC26_Q07',
        'EPIC26_Q08a',
        'EPIC26_Q08b',
        'EPIC26_Q09',
        'EPIC26_Q10',
        'EPIC26_Q11',
        'EPIC26_Q12',
        'EPIC26_Q13a',
        'EPIC26_Q13b',
        'EPIC26_Q13c',
        'EPIC26_Q13d',
        'EPIC26_Q13e',
      ]

      const configured_items_numbers = Object.keys(
        epic_26_calculation.inputSchema,
      )

      expect(EXPECTED_ITEM_NUMBERS).toEqual(configured_items_numbers)
    })

    it('should have the expected item numbers configured for the UI domain', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EPIC26_Q01',
        'EPIC26_Q02',
        'EPIC26_Q03',
        'EPIC26_Q04a',
      ]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(Epic26Domains.UI.inputs)
    })

    it('should have the expected item numbers configured for the UIO domain', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EPIC26_Q04b',
        'EPIC26_Q04c',
        'EPIC26_Q04d',
        'EPIC26_Q04e',
      ]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(Epic26Domains.UIO.inputs)
    })

    it('should have the expected item numbers configured for the BOW domain', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EPIC26_Q06a',
        'EPIC26_Q06b',
        'EPIC26_Q06c',
        'EPIC26_Q06d',
        'EPIC26_Q06e',
        'EPIC26_Q07',
      ]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(Epic26Domains.BOW.inputs)
    })

    it('should have the expected item numbers configured for the SEX domain', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EPIC26_Q08a',
        'EPIC26_Q08b',
        'EPIC26_Q09',
        'EPIC26_Q10',
        'EPIC26_Q11',
        'EPIC26_Q12',
      ]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(Epic26Domains.SEX.inputs)
    })

    it('should have the expected item numbers configured for the HOR domain', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EPIC26_Q13a',
        'EPIC26_Q13b',
        'EPIC26_Q13c',
        'EPIC26_Q13d',
        'EPIC26_Q13e',
      ]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(Epic26Domains.HOR.inputs)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = epic_26_calculation.calculate({ payload: random_response })

    it('should return a score for all 5 domains', function () {
      expect(Object.keys(outcome)).toHaveLength(5)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['UI', 'UIO', 'BOW', 'SEX', 'HOR']

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the score for every domain', function () {
        const outcome = epic_26_calculation.calculate({ payload: {} })

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(null)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst possible response (i.e. worst HRQOL) is passed', function () {
      it('should return the worst score for every domain', function () {
        const outcome = epic_26_calculation.calculate({
          payload: worst_response,
        })

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(WORST_DOMAIN_SCORE)
        })
      })
    })

    describe('when a median response is passed', function () {
      const outcome = epic_26_calculation.calculate({
        payload: median_response,
      })
      const DEFAULT_MEDIAN_SCORE = 50

      it('should return the expected median score for "UI: Urinary Incontinence" domain', function () {
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE
        expect(outcome.UI).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "UIO: Urinary Irritative/Obstructive" domain', function () {
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE
        expect(outcome.UIO).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "BOW: Bowel" domain', function () {
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE
        expect(outcome.BOW).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "SEX: Sexual" domain', function () {
        const EXPECTED_MEDIAN_SCORE = 52.833333333333336 // Median score of 50 is not possible for SEX domain
        expect(outcome.SEX).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "HOR: Hormonal" domain', function () {
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE
        expect(outcome.HOR).toEqual(EXPECTED_MEDIAN_SCORE)
      })
    })

    describe('when best possible response (i.e. best HRQOL) is passed', function () {
      it('should return the best score for every domain', function () {
        const outcome = epic_26_calculation.calculate({
          payload: best_response,
        })

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(BEST_DOMAIN_SCORE)
        })
      })
    })

    describe('when a random response is passed', function () {
      const outcome = epic_26_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score for "UI: Urinary Incontinence" domain', function () {
        const EXPECTED_SCORE = 41.5
        expect(outcome.UI).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "UIO: Urinary Irritative/Obstructive" domain', function () {
        const EXPECTED_SCORE = 37.5
        expect(outcome.UIO).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "BOW: Bowel" domain', function () {
        const EXPECTED_SCORE = 50
        expect(outcome.BOW).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "SEX: Sexual" domain', function () {
        const EXPECTED_SCORE = 44.5
        expect(outcome.SEX).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "HOR: Hormonal" domain', function () {
        const EXPECTED_SCORE = 10
        expect(outcome.HOR).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          epic_26_calculation.calculate({
            payload: {
              ...random_response,
              EPIC26_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          epic_26_calculation.calculate({
            payload: {
              ...random_response,
              EPIC26_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          epic_26_calculation.calculate({
            payload: {
              ...random_response,
              EPIC26_Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
