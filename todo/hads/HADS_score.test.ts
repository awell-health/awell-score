import { expect } from 'chai'
import R from 'ramda'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../src/calculation_suite/calculations/shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/hads_form_responses'
import { HADS_subscales } from './definition/HADS_subscales'
import { hads } from './HADS_score'

const HADS_SUBSCALE_MIN_SCORE = 0
const HADS_SUBSCALE_MEDIAN_SCORE = 10
const HADS_SUBSCALE_MAX_SCORE = 21

const hads_calculation = execute_test_calculation(hads)

describe('hads', function () {
  it('hads calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('hads')
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

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(HADS_subscales)

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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('FEAR')(HADS_subscales),
      )
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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('DEPRESSION')(HADS_subscales),
      )
    })
  })

  describe('basic assumptions', function () {
    const outcome = hads_calculation(min_response)

    const EXPECTED_CALCULATION_IDS = ['FEAR', 'DEPRESSION']

    it('should return 2 calculation results', function () {
      expect(outcome).toHaveLength(2)
    })

    it('should contain all the expected calculation ids', function () {
      const EXTRACTED_CALCULATION_IDS_FROM_RESULTS =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULTS).toEqual(
        EXPECTED_CALCULATION_IDS,
      )
    })
  })

  describe('when called with a response where there are answers out of the expected [0-3] range', function () {
    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          hads_calculation({
            HADS_01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          hads_calculation({
            HADS_01: 4,
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('when called with an empty response', function () {
    const outcome = hads_calculation({})

    it('should return MISSING MESSAGE for "Fear" subscale', function () {
      const score = view_result('FEAR')(outcome)
      expect(score).toEqual(undefined)
    })

    it('should return MISSING MESSAGE for "Depression" subscale', function () {
      const score = view_result('DEPRESSION')(outcome)
      expect(score).toEqual(undefined)
    })
  })

  describe('when called with a minimum response', function () {
    const outcome = hads_calculation(min_response)

    it('should return the minimum score for "Fear" subscale', function () {
      const score = view_result('FEAR')(outcome)
      expect(score).toEqual(HADS_SUBSCALE_MIN_SCORE)
    })

    it('should return the minimum score for "Depression" subscale', function () {
      const score = view_result('DEPRESSION')(outcome)
      expect(score).toEqual(HADS_SUBSCALE_MIN_SCORE)
    })
  })

  describe('when called with a median response', function () {
    const outcome = hads_calculation(median_response)

    it('should return the median score for "Fear" subscale', function () {
      const score = view_result('FEAR')(outcome)
      expect(score).toEqual(HADS_SUBSCALE_MEDIAN_SCORE)
    })

    it('should return the median score for "Depression" subscale', function () {
      const score = view_result('DEPRESSION')(outcome)
      expect(score).toEqual(HADS_SUBSCALE_MEDIAN_SCORE)
    })
  })

  describe('when called with a maximum response', function () {
    const outcome = hads_calculation(max_response)

    it('should return the maximum score for "Fear" subscale', function () {
      const score = view_result('FEAR')(outcome)
      expect(score).toEqual(HADS_SUBSCALE_MAX_SCORE)
    })

    it('should return the maximum score for "Depression" subscale', function () {
      const score = view_result('DEPRESSION')(outcome)
      expect(score).toEqual(HADS_SUBSCALE_MAX_SCORE)
    })
  })

  describe('when called with a random response', function () {
    it('should return the expected score for the "Fear subscale"', function () {
      const raw_score = R.compose(
        view_result('FEAR'),
        hads_calculation,
      )(random_response)

      const EXPECTED_FEAR_SUBSCALE_SCORE = 11

      expect(raw_score).toEqual(EXPECTED_FEAR_SUBSCALE_SCORE)
    })

    it('should return the expected score for the "Depression subscale"', function () {
      const raw_score = R.compose(
        view_result('DEPRESSION'),
        hads_calculation,
      )(random_response)

      const EXPECTED_DEPRESSION_SUBSCALE_SCORE = 7

      expect(raw_score).toEqual(EXPECTED_DEPRESSION_SUBSCALE_SCORE)
    })
  })
})
