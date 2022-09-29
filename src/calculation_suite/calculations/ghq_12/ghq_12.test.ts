import { expect } from 'chai'
import R from 'ramda'

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
  median_response,
  random_response,
  worst_response,
} from './__testdata__/ghq_12_test_responses'
import { GHQ_12_INPUTS } from './definition/ghq_12_inputs'
import { ghq_12 } from './ghq_12'

const GHQ_12_BEST_SCORE = 0
const GHQ_12_MEDIAN_SCORE = 6
const GHQ_12_WORST_SCORE = 12

const ghq_12_calculation = execute_test_calculation(ghq_12)

describe('ghq_12', function () {
  it('ghq_12 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('ghq_12')
  })

  describe('basic assumptions', function () {
    const outcome = ghq_12_calculation(best_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['GHQ_12_SCORING']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'GHQ_12_Q01',
          'GHQ_12_Q02',
          'GHQ_12_Q03',
          'GHQ_12_Q04',
          'GHQ_12_Q05',
          'GHQ_12_Q06',
          'GHQ_12_Q07',
          'GHQ_12_Q08',
          'GHQ_12_Q09',
          'GHQ_12_Q10',
          'GHQ_12_Q11',
          'GHQ_12_Q12',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(GHQ_12_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ghq_12_calculation({
            GHQ_12_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ghq_12_calculation({
            GHQ_12_Q01: 4,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ghq_12_calculation({
            GHQ_12_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      it('should return undefined result as the score', function () {
        const score = R.compose(
          view_result('GHQ_12_SCORING'),
          ghq_12_calculation
        )({})

        expect(score).to.eql(undefined)
      })

      it('should return MISSING as the status', function () {
        const score = R.compose(
          view_status('GHQ_12_SCORING'),
          ghq_12_calculation
        )({})

        expect(score).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      it('should return the worst score', function () {
        const score = R.compose(
          view_result('GHQ_12_SCORING'),
          ghq_12_calculation
        )(worst_response)

        expect(score).to.eql(GHQ_12_WORST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result('GHQ_12_SCORING'),
          ghq_12_calculation
        )(median_response)

        expect(score).to.eql(GHQ_12_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = R.compose(
          view_result('GHQ_12_SCORING'),
          ghq_12_calculation
        )(best_response)

        expect(score).to.eql(GHQ_12_BEST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result('GHQ_12_SCORING'),
          ghq_12_calculation
        )(random_response)

        const EXPECTED_SCORE = 9

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
