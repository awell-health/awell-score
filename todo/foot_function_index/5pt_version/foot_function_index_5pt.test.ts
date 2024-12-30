import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { view_status } from '../../../lib/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/foot_function_index_test_responses'
import { FFI_SUBSCALES } from './definition'
import { foot_function_index_5pt } from './foot_function_index_5pt'

const ffi_calculation = execute_test_calculation(foot_function_index_5pt)

const BEST_SCORE = 0
const MEDIAN_SCORE = 50
const WORST_SCORE = 100

describe('foot_function_index_5pt', function () {
  it('foot_function_index_5pt calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('foot_function_index_5pt')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'DISABILITY_Q01',
        'DISABILITY_Q02',
        'DISABILITY_Q03',
        'DISABILITY_Q04',
        'DISABILITY_Q05',
        'DISABILITY_Q06',
        'DISABILITY_Q07',
        'DISABILITY_Q08',
        'DISABILITY_Q09',
        'LIMITATION_Q01',
        'LIMITATION_Q02',
        'LIMITATION_Q03',
        'LIMITATION_Q04',
        'LIMITATION_Q05',
        'PAIN_Q01',
        'PAIN_Q02',
        'PAIN_Q03',
        'PAIN_Q04',
        'PAIN_Q05',
        'PAIN_Q06',
        'PAIN_Q07',
        'PAIN_Q08',
        'PAIN_Q09',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(FFI_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Disability" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'DISABILITY_Q01',
        'DISABILITY_Q02',
        'DISABILITY_Q03',
        'DISABILITY_Q04',
        'DISABILITY_Q05',
        'DISABILITY_Q06',
        'DISABILITY_Q07',
        'DISABILITY_Q08',
        'DISABILITY_Q09',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('DISABILITY')(FFI_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Pain" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'PAIN_Q01',
        'PAIN_Q02',
        'PAIN_Q03',
        'PAIN_Q04',
        'PAIN_Q05',
        'PAIN_Q06',
        'PAIN_Q07',
        'PAIN_Q08',
        'PAIN_Q09',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PAIN')(FFI_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Limitation" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'LIMITATION_Q01',
        'LIMITATION_Q02',
        'LIMITATION_Q03',
        'LIMITATION_Q04',
        'LIMITATION_Q05',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('LIMITATION')(FFI_SUBSCALES),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ffi_calculation(best_response)

    it('should return 4 calculation results', function () {
      expect(outcome).toHaveLength(Of(4)
    })

    it('should return results with expected scale ids', function () {
      const EXPECTED_SCALE_IDS = ['LIMITATION', 'PAIN', 'DISABILITY', 'TOTAL']

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = ffi_calculation({})

      it('should return undefined score and missing status the "Limitation" subscale', function () {
        const score = view_result('LIMITATION')(outcome)
        const status = view_status('LIMITATION')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Pain" subscale', function () {
        const score = view_result('PAIN')(outcome)
        const status = view_status('PAIN')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Disability" subscale', function () {
        const score = view_result('DISABILITY')(outcome)
        const status = view_status('DISABILITY')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for total score', function () {
        const score = view_result('TOTAL')(outcome)
        const status = view_status('TOTAL')(outcome)

        expect(score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with the best response', function () {
      const outcome = ffi_calculation(best_response)

      it('should return the best score for the "Limitation" subscale', function () {
        const subscale_score = view_result('LIMITATION')(outcome)
        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Pain" subscale', function () {
        const subscale_score = view_result('PAIN')(outcome)
        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Disability" subscale', function () {
        const subscale_score = view_result('DISABILITY')(outcome)
        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        expect(subscale_score).toEqual(BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = ffi_calculation(median_response)

      it('should return the median score for the "Limitation" subscale', function () {
        const subscale_score = view_result('LIMITATION')(outcome)
        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Pain" subscale', function () {
        const subscale_score = view_result('PAIN')(outcome)
        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Disability" subscale', function () {
        const subscale_score = view_result('DISABILITY')(outcome)
        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = ffi_calculation(worst_response)

      it('should return the worst score for the "Limitation" subscale', function () {
        const subscale_score = view_result('LIMITATION')(outcome)
        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Pain" subscale', function () {
        const subscale_score = view_result('PAIN')(outcome)
        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Disability" subscale', function () {
        const subscale_score = view_result('DISABILITY')(outcome)
        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        expect(subscale_score).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response ', function () {
      const outcome = ffi_calculation(random_response)

      it('should return the expected score for the "Limitation" subscale', function () {
        const subscale_score = view_result('LIMITATION')(outcome)
        const EXPECTED_LIMITATION_SCORE = 31.25

        expect(subscale_score).toEqual(EXPECTED_LIMITATION_SCORE)
      })

      it('should return the expected score for the "Pain" subscale', function () {
        const subscale_score = view_result('PAIN')(outcome)
        const EXPECTED_PAIN_SCORE = 68.75

        expect(subscale_score).toEqual(EXPECTED_PAIN_SCORE)
      })

      it('should return the expected score for the "Disability" subscale', function () {
        const subscale_score = view_result('DISABILITY')(outcome)
        const EXPECTED_DISABILITY_SCORE = 46.88

        expect(subscale_score).toEqual(EXPECTED_DISABILITY_SCORE)
      })

      it('should return the expected total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        const EXPECTED_TOTAL_SCORE = 48.96

        expect(subscale_score).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ffi_calculation({
            DISABILITY_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ffi_calculation({
            DISABILITY_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ffi_calculation({
            DISABILITY_Q01: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
