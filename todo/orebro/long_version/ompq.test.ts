import { expect } from 'chai'
import R from 'ramda'

import { ZodError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ompq_test_responses'
import { OMPQ_INPUTS } from './definition/ompq_inputs'
import { ompq } from './ompq'

const OMPQ_MAX_SCORE = 210 // 21 inputs with a maximum score of 10
const OMPQ_MEDIAN_SCORE = 105
const OMPQ_MIN_SCORE = 4

const ompq_calculation = execute_test_calculation(ompq)

describe('ompq', function () {
  it('ompq calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('ompq')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'OMPQ_Q05',
        'OMPQ_Q06',
        'OMPQ_Q07',
        'OMPQ_Q08',
        'OMPQ_Q09',
        'OMPQ_Q10',
        'OMPQ_Q11',
        'OMPQ_Q12',
        'OMPQ_Q13',
        'OMPQ_Q14',
        'OMPQ_Q15',
        'OMPQ_Q16',
        'OMPQ_Q17',
        'OMPQ_Q18',
        'OMPQ_Q19',
        'OMPQ_Q20',
        'OMPQ_Q21',
        'OMPQ_Q22',
        'OMPQ_Q23',
        'OMPQ_Q24',
        'OMPQ_Q25',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(OMPQ_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ompq_calculation(min_response)

    it('should return 1 calculation result', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_NAMES = ['OMPQ']

      const EXTRACTED_CALCULATION_NAMES_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).toEqual(
        EXPECTED_CALCULATION_NAMES,
      )
    })
  })

  describe('validation', function () {
    describe('when question 5 is not passed as an array', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation({
            OMPQ_Q05: 'neck',
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when question 6 has an invalid minimum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation({
            OMPQ_Q06: 0,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when question 7 has an invalid minimum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation({
            OMPQ_Q07: 0,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when any other input has an invalid minimum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation({
            OMPQ_Q10: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when any other input has an invalid maximum score', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ompq_calculation({
            OMPQ_Q10: 11,
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('when called with an empty response', function () {
    it('should return undefined as the result', function () {
      const score = R.compose(view_result('OMPQ'), ompq_calculation)({})

      expect(score).toEqual(undefined)
    })
  })

  describe('when called with a minimum response', function () {
    it('should return the minimum score', function () {
      const score = R.compose(
        view_result('OMPQ'),
        ompq_calculation,
      )(min_response)

      expect(score).toEqual(OMPQ_MIN_SCORE)
    })
  })

  describe('when called with a median response', function () {
    it('should return the median score', function () {
      const score = R.compose(
        view_result('OMPQ'),
        ompq_calculation,
      )(median_response)

      expect(score).toEqual(OMPQ_MEDIAN_SCORE)
    })
  })

  describe('when called with a maximum response', function () {
    it('should return the maximum score', function () {
      const score = R.compose(
        view_result('OMPQ'),
        ompq_calculation,
      )(max_response)

      expect(score).toEqual(OMPQ_MAX_SCORE)
    })
  })

  describe('when called with a random response', function () {
    it('should return the expected score', function () {
      const score = R.compose(
        view_result('OMPQ'),
        ompq_calculation,
      )(random_response)

      const EXPECTED_SCORE = 70

      expect(score).toEqual(EXPECTED_SCORE)
    })
  })
})
