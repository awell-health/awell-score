// @flow
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_from_calculation_blueprint,
  view_status
} from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response
} from './__testdata__/iief5_test_responses'
import { IIEF5_INPUTS } from './definition'
import { iief5 } from './iief5'

const iief5_calculation = execute_test_calculation(iief5)

const BEST_SCORE = 25
const MEDIAN_SCORE = 15
const WORST_SCORE = 1

describe('iief5', function () {
  it('iief5 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('iief5')
  })

  describe('basic assumptions', function () {
    const outcome = iief5_calculation(best_response)

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'IIEF5_TOTAL_SCORE',
        'IIEF5_INTERPRETATION'
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'IIEF5_Q01',
          'IIEF5_Q02',
          'IIEF5_Q03',
          'IIEF5_Q04',
          'IIEF5_Q05'
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(IIEF5_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          iief5_calculation({
            IIEF5_Q01: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = iief5_calculation({})

      it('should return undefined result and a missing status for the total socre', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)
        const status = view_status('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)
        const status = view_status('IIEF5_INTERPRETATION')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = iief5_calculation(best_response)

      it('should return the best total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return "No erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).to.eql('No erectile dysfunction')
      })
    })

    describe('when called with the median response', function () {
      const outcome = iief5_calculation(median_response)

      it('should return the median total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).to.eql(MEDIAN_SCORE)
      })

      it('should return "Mild to moderate erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).to.eql('Mild to moderate erectile dysfunction')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = iief5_calculation(worst_response)

      it('should return the WORST total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })

      it('should return "Severe erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).to.eql('Severe erectile dysfunction')
      })
    })

    describe('when called with a random response', function () {
      const outcome = iief5_calculation(random_response)

      it('should return the expected total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 8

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return "Moderate erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).to.eql('Moderate erectile dysfunction')
      })
    })

    describe('when called with an incomplete response', function () {
      const outcome = iief5_calculation({
        IIEF5_Q01: 2,
        IIEF5_Q02: 1,
        IIEF5_Q03: 0
      })

      it('should return the expected total score', function () {
        const score = view_result('IIEF5_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 3

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return "Severe erectile dysfunction" as the interpretation of the total score', function () {
        const score = view_result('IIEF5_INTERPRETATION')(outcome)

        expect(score).to.eql('Severe erectile dysfunction')
      })
    })
  })
})
