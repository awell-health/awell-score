/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../src/calculation_suite/errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../../src/calculation_suite/calculations/calculation_library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/epic_26_form_responses'
import { EPIC_26_HRQOL_DOMAINS } from './definition/epic_26_domains'
import { epic_26 } from './epic_26'

// Higher scores are representing better HRQOL.
const WORST_DOMAIN_SCORE = 0
const BEST_DOMAIN_SCORE = 100

const epic_26_calculation = execute_test_calculation(epic_26)

describe('epic_26', function () {
  it('epic_26 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('epic_26')
  })

  describe('the score includes the correct input fields', function () {
    //@ts-expect-error to do
    const get_item_numbers_per_domain = domain =>
      //@ts-expect-error to do
      domain.input_ids_in_subscale.map(input => input.epic_item_number)

    //@ts-expect-error to do
    const get_item_numbers_for_specific_domain = domain_id =>
      R.compose(
        //@ts-expect-error to do
        a => a.sort(),
        R.flatten,
        get_item_numbers_per_domain,
        R.find(R.propEq('id', domain_id)),
      )(EPIC_26_HRQOL_DOMAINS)

    it('should have all the expected item numbers configured', function () {
      const EXPECTED_ITEM_NUMBERS = [
        23, 26, 27, 28, 29, 30, 31, 33,
        // 34, --> Item number 34 is not used in any domain for score calculation
        49,
        50, 52, 53, 54, 55, 57, 58, 59, 60, 64, 68, 74, 75, 77, 78, 79,
      ]

      const configured_items_numbers = R.compose(
        //@ts-expect-error to do
        a => a.sort(),
        R.flatten,
        R.map(get_item_numbers_per_domain),
      )(EPIC_26_HRQOL_DOMAINS)

      expect(EXPECTED_ITEM_NUMBERS).toEqual(configured_items_numbers)
    })

    it('should have the expected item numbers configured for the UI domain', function () {
      const EXPECTED_ITEM_NUMBERS = [23, 26, 27, 28]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(
        get_item_numbers_for_specific_domain('UI'),
      )
    })

    it('should have the expected item numbers configured for the UIO domain', function () {
      const EXPECTED_ITEM_NUMBERS = [29, 30, 31, 33]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(
        get_item_numbers_for_specific_domain('UIO'),
      )
    })

    it('should have the expected item numbers configured for the BOW domain', function () {
      const EXPECTED_ITEM_NUMBERS = [49, 50, 52, 53, 54, 55]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(
        get_item_numbers_for_specific_domain('BOW'),
      )
    })

    it('should have the expected item numbers configured for the SEX domain', function () {
      const EXPECTED_ITEM_NUMBERS = [57, 58, 59, 60, 64, 68]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(
        get_item_numbers_for_specific_domain('SEX'),
      )
    })

    it('should have the expected item numbers configured for the HOR domain', function () {
      const EXPECTED_ITEM_NUMBERS = [74, 75, 77, 78, 79]

      expect(EXPECTED_ITEM_NUMBERS).toEqual(
        get_item_numbers_for_specific_domain('HOR'),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = epic_26_calculation(random_response)

    it('should return a score for all 5 domains', function () {
      expect(outcome).toHaveLength(5)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['UI', 'UIO', 'BOW', 'SEX', 'HOR']

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return MISSING_MESSAGE as the score for every domain', function () {
        const outcome = epic_26_calculation({})

        outcome.forEach(domain => {
          const score = domain.result
          expect(score).toEqual(undefined)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst possible response (i.e. worst HRQOL) is passed', function () {
      it('should return the best score for every domain', function () {
        const outcome = epic_26_calculation(worst_response)

        outcome.forEach(domain => {
          const score = domain.result
          expect(score).toEqual(WORST_DOMAIN_SCORE)
        })
      })
    })

    describe('when a median response is passed', function () {
      const outcome = epic_26_calculation(median_response)
      const DEFAULT_MEDIAN_SCORE = 50

      it('should return the expected median score for "UI: Urinary Incontinence" domain', function () {
        const score = view_result('UI')(outcome)
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "UIO: Urinary Irritative/Obstructive" domain', function () {
        const score = view_result('UIO')(outcome)
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "BOW: Bowel" domain', function () {
        const score = view_result('BOW')(outcome)
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "SEX: Sexual" domain', function () {
        const score = view_result('SEX')(outcome)
        const EXPECTED_MEDIAN_SCORE = 52.833333333333336 // Median score of 50 is not possible for SEX domain

        expect(score).toEqual(EXPECTED_MEDIAN_SCORE)
      })

      it('should return the expected median score for "HOR: Hormonal" domain', function () {
        const score = view_result('HOR')(outcome)
        const EXPECTED_MEDIAN_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).toEqual(EXPECTED_MEDIAN_SCORE)
      })
    })

    describe('when best possible response (i.e. best HRQOL) is passed', function () {
      it('should return the best score for every domain', function () {
        const outcome = epic_26_calculation(best_response)

        outcome.forEach(domain => {
          const score = domain.result
          expect(score).toEqual(BEST_DOMAIN_SCORE)
        })
      })
    })

    describe('when a random response is passed', function () {
      const outcome = epic_26_calculation(random_response)

      it('should return the expected score for "UI: Urinary Incontinence" domain', function () {
        const score = view_result('UI')(outcome)
        const EXPECTED_SCORE = 41.5

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "UIO: Urinary Irritative/Obstructive" domain', function () {
        const score = view_result('UIO')(outcome)
        const EXPECTED_SCORE = 37.5

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "BOW: Bowel" domain', function () {
        const score = view_result('BOW')(outcome)
        const EXPECTED_SCORE = 50

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "SEX: Sexual" domain', function () {
        const score = view_result('SEX')(outcome)
        const EXPECTED_SCORE = 44.5

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "HOR: Hormonal" domain', function () {
        const score = view_result('HOR')(outcome)
        const EXPECTED_SCORE = 10

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          epic_26_calculation({
            EPIC26_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          epic_26_calculation({
            EPIC26_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          epic_26_calculation({
            EPIC26_Q01: 6,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
