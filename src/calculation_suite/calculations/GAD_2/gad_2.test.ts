// @flow
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/gad_2_test_responses'
import { GAD2_INPUTS } from './definition'
import { gad_2 } from './gad_2'

const BEST_SCORE = 0
const WORST_SCORE = 6

const gad_2_calculation = execute_test_calculation(gad_2)

describe('gad_2', function () {
  it('gad_2 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('gad_2')
  })

  describe('basic assumptions', function () {
    const outcome = gad_2_calculation(best_response)

    it('should return 2 calculation results', function () {
      expect(outcome).to.have.length(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['GAD2_SCORE', 'GAD2_INTERPRETATION']

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['GAD2_Q01', 'GAD2_Q02']

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(GAD2_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          gad_2_calculation({
            GAD2_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = gad_2_calculation({})

      it('should return undefined result and a missing status for the score', function () {
        const score = view_result('GAD2_SCORE')(outcome)
        const status = view_status('GAD2_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for the interpretation', function () {
        const score = view_result('GAD2_INTERPRETATION')(outcome)
        const status = view_status('GAD2_INTERPRETATION')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = gad_2_calculation(best_response)

      it('should return the best score', function () {
        const score = view_result('GAD2_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })

      it('should return the "No anxiety" interpretation', function () {
        const score = view_result('GAD2_INTERPRETATION')(outcome)

        expect(score).to.eql('No anxiety')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = gad_2_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('GAD2_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })

      it('should return the "severe anxiety" interpretation', function () {
        const score = view_result('GAD2_INTERPRETATION')(outcome)

        expect(score).to.eql('Severe anxiety')
      })
    })

    describe('when called with a random response', function () {
      const outcome = gad_2_calculation(random_response)

      it('should return the expected score', function () {
        const score = view_result('GAD2_SCORE')(outcome)
        const EXPECTED_SCORE = 3

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the "Mild anxiety" interpretation', function () {
        const score = view_result('GAD2_INTERPRETATION')(outcome)

        expect(score).to.eql('Moderate anxiety')
      })
    })
  })
})
