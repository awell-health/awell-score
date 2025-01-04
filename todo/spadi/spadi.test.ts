/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { ZodError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../shared_functions'
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

const spadi_calculation = execute_test_calculation(spadi)

describe('spadi', function () {
  it('spadi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('spadi')
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

      const configured_input_ids = R.compose(
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(SPADI_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input ids configured for the Pain subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04', 'Q05']

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PAIN')(SPADI_SUBSCALES),
      )
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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('DISABILITY')(SPADI_SUBSCALES),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = spadi_calculation(complete_random_response)

    it('should return a score for the 2 subscales and 1 total score', function () {
      expect(outcome).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['PAIN', 'DISABILITY', 'TOTAL']

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return MISSING_MESSAGE as the score for every subscale and the total score', function () {
        const outcome = spadi_calculation({})

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(undefined)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when minimum response is passed', function () {
      it('should return the min score for every subscale and the total score', function () {
        const outcome = spadi_calculation(min_response)

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(SPADI_MIN_SCORE)
        })
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score for every subscale and the total score', function () {
        const outcome = spadi_calculation(median_response)

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(SPADI_MEDIAN_SCORE)
        })
      })
    })

    describe('when a max response is passed', function () {
      it('should return the max score for every subscale and the total score', function () {
        const outcome = spadi_calculation(max_response)

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(SPADI_MAX_SCORE)
        })
      })
    })

    describe('when a complete random response is passed', function () {
      const outcome = spadi_calculation(complete_random_response)

      it('should return the expected score for the Pain subscale', function () {
        const score = view_result('PAIN')(outcome)
        const EXPECTED_SCORE = 26

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the Disability subscale', function () {
        const score = view_result('DISABILITY')(outcome)
        const EXPECTED_SCORE = 36.25

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('TOTAL')(outcome)

        const EXPECTED_SCORE = 31.125

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when an incomplete random response is passed', function () {
      const outcome = spadi_calculation(incomplete_random_response)

      it('should return the expected score for the Pain subscale', function () {
        const score = view_result('PAIN')(outcome)
        const EXPECTED_SCORE = 36.67

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the Disability subscale', function () {
        const score = view_result('DISABILITY')(outcome)
        const EXPECTED_SCORE = 38

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('TOTAL')(outcome)

        const EXPECTED_SCORE = 37.335

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          spadi_calculation({
            Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          spadi_calculation({
            Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          spadi_calculation({
            Q01: 11,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
