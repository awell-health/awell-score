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
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/ccq_test_responses'
import { ccq } from './ccq'
import { CCQ_SCALES } from './definition/ccq_scales'

const ccq_calclation = execute_test_calculation(ccq)

const BEST_SCORE = 0
const MEDIAN_SCORE = 3
const WORST_SCORE = 6

describe('ccq', function () {
  it('ccq calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('ccq')
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
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(CCQ_SCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Symptoms" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q05', 'Q06'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('SYMPTOMS')(CCQ_SCALES),
      )
    })

    it('should have the expected input idss configured for the "Functional state" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q07', 'Q08', 'Q09', 'Q10'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('FUNCTIONAL_STATE')(CCQ_SCALES),
      )
    })

    it('should have the expected input idss configured for the "Mental state" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q03', 'Q04'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('MENTAL_STATE')(CCQ_SCALES),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ccq_calclation(worst_response)

    it('should calculate a score for all subscales (n=3) and a total score', function () {
      const AMOUNT_OF_SCORES = 4
      expect(outcome).toHaveLength(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'SYMPTOMS',
        'FUNCTIONAL_STATE',
        'MENTAL_STATE',
        'TOTAL_SCORE',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).to.have.members(
        EXPECTED_SCALE_IDS,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      const outcome = ccq_calclation(worst_response)

      it('should return the worst score on the "Symptoms" subscale', function () {
        const score = view_result('SYMPTOMS')(outcome)
        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the worst score on the "Functional state" subscale', function () {
        const score = view_result('FUNCTIONAL_STATE')(outcome)
        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the worst score on the "Mental state" subscale', function () {
        const score = view_result('MENTAL_STATE')(outcome)
        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the worst total score', function () {
        const score = view_result('TOTAL_SCORE')(outcome)
        expect(score).toEqual(WORST_SCORE)
      })
    })

    describe('when median response is passed', function () {
      const outcome = ccq_calclation(median_response)

      it('should return the median score on the "Symptoms" subscale', function () {
        const score = view_result('SYMPTOMS')(outcome)
        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score on the "Functional state" subscale', function () {
        const score = view_result('FUNCTIONAL_STATE')(outcome)
        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score on the "Mental state" subscale', function () {
        const score = view_result('MENTAL_STATE')(outcome)
        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median total score', function () {
        const score = view_result('TOTAL_SCORE')(outcome)
        expect(score).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      const outcome = ccq_calclation(best_response)

      it('should return the maximum score on the "Symptoms" subscale', function () {
        const score = view_result('SYMPTOMS')(outcome)
        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the maximum score on the "Functional state" subscale', function () {
        const score = view_result('FUNCTIONAL_STATE')(outcome)
        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the maximum score on the "Mental state" subscale', function () {
        const score = view_result('MENTAL_STATE')(outcome)
        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the best total score', function () {
        const score = view_result('TOTAL_SCORE')(outcome)
        expect(score).toEqual(BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = ccq_calclation(random_response)

      it('should return the expected score on the "Symptoms" subscale', function () {
        const score = view_result('SYMPTOMS')(outcome)
        const EXPECTED_SCORE = 2

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score on the "Functional state" subscale', function () {
        const score = view_result('FUNCTIONAL_STATE')(outcome)
        const EXPECTED_SCORE = 2.75

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score on the "Mental state" subscale', function () {
        const score = view_result('MENTAL_STATE')(outcome)
        const EXPECTED_SCORE = 4.5

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 2.8

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = ccq_calclation({})

      it('should return MISSING_MESSAGE as the score on the "Symptoms" subscale', function () {
        const score = view_result('SYMPTOMS')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return MISSING_MESSAGE as the on the "Functional state" subscale', function () {
        const score = view_result('FUNCTIONAL_STATE')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return MISSING_MESSAGE as the on the "Mental state" subscale', function () {
        const score = view_result('MENTAL_STATE')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return MISSING_MESSAGE as the total score', function () {
        const score = view_result('TOTAL_SCORE')(outcome)
        expect(score).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ccq_calclation({
            Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ccq_calclation({
            Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ccq_calclation({
            Q01: 7,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
