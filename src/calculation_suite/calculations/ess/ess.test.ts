import { expect } from 'chai'
import { compose } from 'ramda'

import { InvalidInputsError } from '../../errors'
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
} from './__testdata__/ess_test_responses'
import { ESS_INPUTS } from './definition/ess_inputs'
// eslint-disable-next-line sort-imports
import { ess, ESSCalculationName } from './ess'

const ESS_MIN_SCORE = 0
const ESS_MID_SCORE = 12
const ESS_MAX_SCORE = 24

const ess_calculation = execute_test_calculation(ess)

describe('ess', function () {
  it('ess calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('ess')
  })

  describe('basic assumptions', function () {
    const outcome = ess_calculation(min_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['ess']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ESS_Q1',
          'ESS_Q2',
          'ESS_Q3',
          'ESS_Q4',
          'ESS_Q5',
          'ESS_Q6',
          'ESS_Q7',
          'ESS_Q8',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(ESS_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ess_calculation({
            ESS_Q1: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with a response where there are answers out of the expected [0, 4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ess_calculation({
            ESS_Q1: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ess_calculation({
            ESS_Q1: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when called with an empty response', function () {
      it('should return undefined result as score', function () {
        const score = compose(
          view_result(ESSCalculationName),
          ess_calculation
        )({})

        expect(score).to.eql(undefined)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = compose(
          view_result(ESSCalculationName),
          ess_calculation
        )(min_response)

        expect(score).to.eql(ESS_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = compose(
          view_result(ESSCalculationName),
          ess_calculation
        )(median_response)

        expect(score).to.eql(ESS_MID_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = compose(
          view_result(ESSCalculationName),
          ess_calculation
        )(max_response)

        expect(score).to.eql(ESS_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = compose(
          view_result(ESSCalculationName),
          ess_calculation
        )(random_response)

        const EXPECTED_SCORE = 13

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
