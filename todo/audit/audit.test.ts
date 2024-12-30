import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../src/calculation_suite/errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../../src/calculation_suite/calculations/calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../src/calculation_suite/calculations/shared_functions'
import {
  maximum_response,
  median_response,
  minimum_response,
  random_response,
} from './__testdata__/audit_responses'
import { audit } from './audit'
import { AUDIT_SUBSCALES } from './definition/audit_subscales'

const AUDIT_MIN_SCORE = 0
const AUDIT_MEDIAN_SCORE = 20
const AUDIT_MAX_SCORE = 40

const audit_calculation = execute_test_calculation(audit)

describe('audit', function () {
  it('audit calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('audit')
  })

  describe('basic assumptions', function () {
    const outcome = audit_calculation(minimum_response)

    it('should return 4 calculation results', function () {
      const AMOUNT_OF_RESULTS_IN_AUDIT_SCORE = 4

      expect(outcome).toHaveLength(AMOUNT_OF_RESULTS_IN_AUDIT_SCORE)
    })

    it('should contain all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'CONSUMPTION',
        'DEPENDENCE',
        'ALCOHOL_RELATED_PROBLEMS',
        'TOTAL',
      ]

      const EXTRACTED_CALCULATION_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).toEqual(
        EXPECTED_CALCULATION_IDS,
      )
    })
  })

  describe('validation', function () {
    describe('when called with a response where there are answers out of the expected [0-4] range', function () {
      describe('when an answer is above the expected [0,4] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() => audit_calculation({ AUDIT_Q01: 10 })).toThrow(
            InvalidInputsError,
          )
        })
      })
      describe('when an answer is not a number', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            audit_calculation({
              AUDIT_Q01: "I'm not a number",
            }),
          ).toThrow(InvalidInputsError)
        })
      })
      describe('when an answer is below the expected [0,4] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            audit_calculation({
              AUDIT_Q01: -1,
            }),
          ).toThrow(InvalidInputsError)
        })
      })
    })

    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AUDIT_Q01',
          'AUDIT_Q02',
          'AUDIT_Q03',
          'AUDIT_Q04',
          'AUDIT_Q05',
          'AUDIT_Q06',
          'AUDIT_Q07',
          'AUDIT_Q08',
          'AUDIT_Q09',
          'AUDIT_Q10',
        ]

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale),
        )(AUDIT_SUBSCALES)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the Consumption scale', function () {
        const EXPECTED_INPUT_IDS = ['AUDIT_Q01', 'AUDIT_Q02', 'AUDIT_Q03']

        expect(EXPECTED_INPUT_IDS).toEqual(
          get_input_ids_for_specific_subscale('CONSUMPTION')(AUDIT_SUBSCALES),
        )
      })

      it('should have the expected input ids configured for the Dependence scale', function () {
        const EXPECTED_INPUT_IDS = ['AUDIT_Q04', 'AUDIT_Q05', 'AUDIT_Q06']

        expect(EXPECTED_INPUT_IDS).toEqual(
          get_input_ids_for_specific_subscale('DEPENDENCE')(AUDIT_SUBSCALES),
        )
      })

      it('should have the expected input ids configured for the Alcohol Related Problem scale', function () {
        const EXPECTED_INPUT_IDS = [
          'AUDIT_Q07',
          'AUDIT_Q08',
          'AUDIT_Q09',
          'AUDIT_Q10',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(
          get_input_ids_for_specific_subscale('ALCOHOL_RELATED_PROBLEMS')(
            AUDIT_SUBSCALES,
          ),
        )
      })
    })

    describe('when called with an empty response', function () {
      const outcome = audit_calculation({})
      it('should return the 0 as score for Consumption scale', function () {
        const score = view_result('CONSUMPTION')(outcome)
        expect(score).toEqual(0)
      })

      it('should return the 0 as score for Dependence scale', function () {
        const score = view_result('DEPENDENCE')(outcome)
        expect(score).toEqual(0)
      })

      it('should return the 0 as score for Alcohol Related Problem scale', function () {
        const score = view_result('ALCOHOL_RELATED_PROBLEMS')(outcome)
        expect(score).toEqual(0)
      })

      it('should return the 0 as score for Total', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).toEqual(0)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      const outcome = audit_calculation(minimum_response)

      it('should return the minimum score for Consumption scale', function () {
        const score = view_result('CONSUMPTION')(outcome)
        const CONSUMPTION_MIN_SCORE = 0
        expect(score).toEqual(CONSUMPTION_MIN_SCORE)
      })

      it('should return the minimum score for Dependence scale', function () {
        const score = view_result('DEPENDENCE')(outcome)
        const DEPENDENCE_MIN_SCORE = 0
        expect(score).toEqual(DEPENDENCE_MIN_SCORE)
      })

      it('should return the minimum score for Alcohol Related Problem scale', function () {
        const score = view_result('ALCOHOL_RELATED_PROBLEMS')(outcome)
        const ALCOHOL_RELATED_PROBLEMS_MIN_SCORE = 0
        expect(score).toEqual(ALCOHOL_RELATED_PROBLEMS_MIN_SCORE)
      })

      it('should return the minimum score for Total', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).toEqual(AUDIT_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = audit_calculation(median_response)
      it('should return the median score for Consumption scale', function () {
        const score = view_result('CONSUMPTION')(outcome)
        const CONSUMPTION_MEDIAN_SCORE = 6
        expect(score).toEqual(CONSUMPTION_MEDIAN_SCORE)
      })

      it('should return the median score for Dependence scale', function () {
        const score = view_result('DEPENDENCE')(outcome)
        const DEPENDENCE_MEDIAN_SCORE = 6
        expect(score).toEqual(DEPENDENCE_MEDIAN_SCORE)
      })

      it('should return the median score for Alcohol Related Problem scale', function () {
        const score = view_result('ALCOHOL_RELATED_PROBLEMS')(outcome)
        const ALCOHOL_RELATED_PROBLEMS_MEDIAN_SCORE = 8
        expect(score).toEqual(ALCOHOL_RELATED_PROBLEMS_MEDIAN_SCORE)
      })

      it('should return the median score for Total', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).toEqual(AUDIT_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      const outcome = audit_calculation(maximum_response)

      it('should return the max score for Consumption scale', function () {
        const score = view_result('CONSUMPTION')(outcome)
        const CONSUMPTION_MAX_SCORE = 12
        expect(score).toEqual(CONSUMPTION_MAX_SCORE)
      })

      it('should return the max score for Dependence scale', function () {
        const score = view_result('DEPENDENCE')(outcome)
        const DEPENDENCE_MAX_SCORE = 12
        expect(score).toEqual(DEPENDENCE_MAX_SCORE)
      })

      it('should return the max score for Alcohol Related Problem scale', function () {
        const score = view_result('ALCOHOL_RELATED_PROBLEMS')(outcome)
        const ALCOHOL_RELATED_PROBLEMS_MAX_SCORE = 16
        expect(score).toEqual(ALCOHOL_RELATED_PROBLEMS_MAX_SCORE)
      })

      it('should return the max score for Total', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).toEqual(AUDIT_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score Consumption score', function () {
        const outcome = R.compose(
          view_result('CONSUMPTION'),
          audit_calculation,
        )(random_response)

        const EXPECTED_CONSUMPTION_SCORE = 7

        expect(outcome).toEqual(EXPECTED_CONSUMPTION_SCORE)
      })

      it('should return the expected Dependence score', function () {
        const outcome = R.compose(
          view_result('DEPENDENCE'),
          audit_calculation,
        )(random_response)

        const EXPECTED_DEPENDENCE_SCORE = 7

        expect(outcome).toEqual(EXPECTED_DEPENDENCE_SCORE)
      })

      it('should return the expected Alcohol related problems score', function () {
        const outcome = R.compose(
          view_result('ALCOHOL_RELATED_PROBLEMS'),
          audit_calculation,
        )(random_response)

        const EXPECTED_ALCOHOL_RELATED_PROBLEMS_SCORE = 10

        expect(outcome).toEqual(EXPECTED_ALCOHOL_RELATED_PROBLEMS_SCORE)
      })

      it('should return the expected Total score', function () {
        const outcome = R.compose(
          view_result('TOTAL'),
          audit_calculation,
        )(random_response)

        const EXPECTED_TOTAL_SCORE = 24

        expect(outcome).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })
})
