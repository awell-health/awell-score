// @flow
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response
} from './__testdata__/bwcs_test_responses'
import { bwcs } from './bwcs'
import { BWCS_INPUTS } from './definition'

const bwcs_calculation = execute_test_calculation(bwcs)

describe('bwcs', function () {
  it('bwcs calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('bwcs')
  })

  describe('basic assumptions', function () {
    const outcome = bwcs_calculation(best_response)

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['BWCS_TOTAL_SCORE']

      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).to.eql(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04', 'Q05']

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(BWCS_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        bwcs_calculation({
          Q01: -1
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        bwcs_calculation({
          Q01: 5
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('when an answer is above the expected range for Q04', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        bwcs_calculation({
          Q04: 11
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        bwcs_calculation({
          Q01: "I'm not a number"
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = bwcs_calculation({})

    it('should return missing status for the score', function () {
      expect(outcome[0].status).to.eql(MISSING_STATUS)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = bwcs_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('BWCS_TOTAL_SCORE')(outcome)

        expect(score).to.eql(26)
      })
    })

    describe('when called with the best response', function () {
      const outcome = bwcs_calculation(best_response)
      it('should return the best score', function () {
        const score = view_result('BWCS_TOTAL_SCORE')(outcome)

        expect(score).to.eql(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = bwcs_calculation(median_response)

      it('should return the median score', function () {
        const score = view_result('BWCS_TOTAL_SCORE')(outcome)

        expect(score).to.eql(13)
      })
    })

    describe('when called with the random response', function () {
      const outcome = bwcs_calculation(random_response)

      it('should return the exepected score', function () {
        const score = view_result('BWCS_TOTAL_SCORE')(outcome)

        expect(score).to.eql(10)
      })
    })
  })
})
