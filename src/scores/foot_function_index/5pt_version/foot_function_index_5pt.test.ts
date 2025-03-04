import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/foot_function_index_test_responses'
import { FFI_SUBSCALES } from './definition'
import { foot_function_index_5pt } from './foot_function_index_5pt'

const ffi_calculation = new Score(foot_function_index_5pt)

const BEST_SCORE = 0
const MEDIAN_SCORE = 50
const WORST_SCORE = 100

describe('foot_function_index_5pt', function () {
  it('foot_function_index_5pt calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('foot_function_index_5pt')
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

      const configured_input_ids = Object.keys(
        ffi_calculation.inputSchema,
      ).sort()

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

      expect(EXPECTED_INPUT_IDS).toEqual(FFI_SUBSCALES.DISABILITY)
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

      expect(EXPECTED_INPUT_IDS).toEqual(FFI_SUBSCALES.PAIN)
    })

    it('should have the expected input idss configured for the "Limitation" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'LIMITATION_Q01',
        'LIMITATION_Q02',
        'LIMITATION_Q03',
        'LIMITATION_Q04',
        'LIMITATION_Q05',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(FFI_SUBSCALES.LIMITATION)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ffi_calculation.calculate({ payload: best_response })

    it('should return 4 calculation results', function () {
      expect(Object.keys(outcome)).toHaveLength(4)
    })

    it('should return results with expected scale ids', function () {
      const EXPECTED_SCALE_IDS = ['TOTAL', 'LIMITATION', 'PAIN', 'DISABILITY']

      const EXTRACTED_SCALE_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = ffi_calculation.calculate({ payload: {} })

      it('should return null score for "Limitation" subscale', function () {
        expect(outcome.LIMITATION).toEqual(null)
      })

      it('should return null score for the "Pain" subscale', function () {
        expect(outcome.PAIN).toEqual(null)
      })

      it('should return null score for the "Disability" subscale', function () {
        expect(outcome.DISABILITY).toEqual(null)
      })

      it('should return null score for total score', function () {
        expect(outcome.TOTAL).toEqual(null)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with the best response', function () {
      const outcome = ffi_calculation.calculate({ payload: best_response })

      it('should return the best score for the "Limitation" subscale', function () {
        expect(outcome.LIMITATION).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Pain" subscale', function () {
        expect(outcome.PAIN).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Disability" subscale', function () {
        expect(outcome.DISABILITY).toEqual(BEST_SCORE)
      })

      it('should return the best total score', function () {
        expect(outcome.TOTAL).toEqual(BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = ffi_calculation.calculate({ payload: median_response })

      it('should return the median score for the "Limitation" subscale', function () {
        expect(outcome.LIMITATION).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Pain" subscale', function () {
        expect(outcome.PAIN).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Disability" subscale', function () {
        expect(outcome.DISABILITY).toEqual(MEDIAN_SCORE)
      })

      it('should return the median total score', function () {
        expect(outcome.TOTAL).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = ffi_calculation.calculate({ payload: worst_response })

      it('should return the worst score for the "Limitation" subscale', function () {
        expect(outcome.LIMITATION).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Pain" subscale', function () {
        expect(outcome.PAIN).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Disability" subscale', function () {
        expect(outcome.DISABILITY).toEqual(WORST_SCORE)
      })

      it('should return the worst total score', function () {
        expect(outcome.TOTAL).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response ', function () {
      const outcome = ffi_calculation.calculate({ payload: random_response })

      it('should return the expected score for the "Limitation" subscale', function () {
        const EXPECTED_LIMITATION_SCORE = 31.25
        expect(outcome.LIMITATION).toEqual(EXPECTED_LIMITATION_SCORE)
      })

      it('should return the expected score for the "Pain" subscale', function () {
        const EXPECTED_PAIN_SCORE = 68.75
        expect(outcome.PAIN).toEqual(EXPECTED_PAIN_SCORE)
      })

      it('should return the expected score for the "Disability" subscale', function () {
        const EXPECTED_DISABILITY_SCORE = 46.88
        expect(outcome.DISABILITY).toEqual(EXPECTED_DISABILITY_SCORE)
      })

      it('should return the expected total score', function () {
        const EXPECTED_TOTAL_SCORE = 48.96
        expect(outcome.TOTAL).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ffi_calculation.calculate({
            payload: {
              ...best_response,
              DISABILITY_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ffi_calculation.calculate({
            payload: {
              ...best_response,
              DISABILITY_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ffi_calculation.calculate({
            payload: {
              ...best_response,
              DISABILITY_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
