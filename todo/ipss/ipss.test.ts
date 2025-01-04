import { expect } from 'chai'

import { ZodError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ipss_test_responses'
import { IPSS_INPUTS } from './definition/ipss_inputs'
import { ipss } from './ipss'

const IPSS_MIN_SCORE = 0
const IPSS_12_MEDIAN_SCORE = 17
const IPSS_12_MAX_SCORE = 35

const ipss_calculation = execute_test_calculation(ipss)

describe('ipss', function () {
  it('ipss calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('ipss')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'IPSS_Q01',
        'IPSS_Q02',
        'IPSS_Q03',
        'IPSS_Q04',
        'IPSS_Q05',
        'IPSS_Q06',
        'IPSS_Q07',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(IPSS_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ipss_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['IPSS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = ipss_calculation(min_response)
        const result = view_result()(outcome)

        expect(result).toEqual(IPSS_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = ipss_calculation(median_response)
        const result = view_result()(outcome)

        expect(result).toEqual(IPSS_12_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = ipss_calculation(max_response)
        const result = view_result()(outcome)

        expect(result).toEqual(IPSS_12_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const EXPECTED_SCORE = 18

        const outcome = ipss_calculation(random_response)
        const result = view_result()(outcome)

        expect(result).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = ipss_calculation({})
        const result = view_result()(outcome)

        expect(result).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ipss_calculation({
            IPSS_Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected [0, 5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ipss_calculation({
            IPSS_Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected [0, 5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ipss_calculation({
            IPSS_Q01: 6,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
