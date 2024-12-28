import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_from_calculation_blueprint,
  view_status,
} from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/yp_core_test_responses'
import { YP_CORE_INPUTS } from './definition'
import { yp_core } from './yp_core'

const yp_core_calculation = execute_test_calculation(yp_core)

const BEST_SCORE = 0
const MEDIAN_SCORE = 20
const WORST_SCORE = 40

describe('yp_core', function () {
  it('yp_core calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('yp_core')
  })

  describe('basic assumptions', function () {
    const outcome = yp_core_calculation(best_response)

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'YP_CORE_TOTAL_SCORE',
        'YP_CORE_INTERPRETATION',
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
          'YP_CORE_Q01',
          'YP_CORE_Q02',
          'YP_CORE_Q03',
          'YP_CORE_Q04',
          'YP_CORE_Q05',
          'YP_CORE_Q06',
          'YP_CORE_Q07',
          'YP_CORE_Q08',
          'YP_CORE_Q09',
          'YP_CORE_Q10',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(YP_CORE_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          yp_core_calculation({
            YP_CORE_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = yp_core_calculation({})

      it('should return undefined result and a missing status for the total socre', function () {
        const score = view_result('YP_CORE_TOTAL_SCORE')(outcome)
        const status = view_status('YP_CORE_TOTAL_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('YP_CORE_INTERPRETATION')(outcome)
        const status = view_status('YP_CORE_INTERPRETATION')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = yp_core_calculation(best_response)

      it('should return the best total score', function () {
        const score = view_result('YP_CORE_TOTAL_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return "Healthy" as the interpretation of the total score', function () {
        const score = view_result('YP_CORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Healthy')
      })
    })

    describe('when called with the median response', function () {
      const outcome = yp_core_calculation(median_response)

      it('should return the median total score', function () {
        const score = view_result('YP_CORE_TOTAL_SCORE')(outcome)

        expect(score).to.eql(MEDIAN_SCORE)
      })

      it('should return "Moderate-to-severe" as the interpretation of the total score', function () {
        const score = view_result('YP_CORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Moderate-to-severe')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = yp_core_calculation(worst_response)

      it('should return the WORST total score', function () {
        const score = view_result('YP_CORE_TOTAL_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })

      it('should return "Severe" as the interpretation of the total score', function () {
        const score = view_result('YP_CORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Severe')
      })
    })

    describe('when called with a random response', function () {
      const outcome = yp_core_calculation(random_response)

      it('should return the expected total score', function () {
        const score = view_result('YP_CORE_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 15

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return "Moderate" as the interpretation of the total score', function () {
        const score = view_result('YP_CORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Moderate')
      })
    })

    describe('when called with an incomplete response', function () {
      const outcome = yp_core_calculation({
        YP_CORE_Q01: 2,
        YP_CORE_Q02: 1,
        YP_CORE_Q03: 0,
      })

      it('should return the expected total score', function () {
        const score = view_result('YP_CORE_TOTAL_SCORE')(outcome)
        const EXPECTED_SCORE = 10

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return "Moderate" as the interpretation of the total score', function () {
        const score = view_result('YP_CORE_INTERPRETATION')(outcome)

        expect(score).to.eql('Low')
      })
    })
  })
})
