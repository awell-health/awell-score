// @flow
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../../errors'
import { execute_test_calculation } from '../../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../../helper_functions/view_result'
import { CALCULATIONS } from '../../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response
} from './__testdata__/ompq_10_form_responses'
import { OMPQ_10_INPUTS } from './definition/ompq_10_inputs'
import { ompq_10 } from './ompq_10'

const OREBRO_MIN_SCORE = 1
const OREBRO_MEDIAN_SCORE = 50
const OREBRO_MAX_SCORE = 100

const ompq_10_calculation = execute_test_calculation(ompq_10)

describe('ompq_short_form (OMPQ 10)', function () {
  it('ompq_short_form calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('ompq_short_form')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'OREBRO_DURATION',
        'OREBRO_PAIN_EXPERIENCE',
        'OREBRO_FEELING_DEPRESSED',
        'OREBRO_ANXIOUS',
        'OREBRO_RISK_OF_PERSISTENT_PAIN',
        'OREBRO_RETURN_TO_WORK_EXPECTANCY',
        'OREBRO_PAIN_FEAR_AVOIDANCE',
        'OREBRO_NORMAL_WORK_WITH_PAIN',
        'OREBRO_LIGHT_WORK',
        'OREBRO_SLEEP_AT_NIGHT'
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(OMPQ_10_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ompq_10_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.have.members(['OREBRO'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = R.compose(
          view_result('orebro'),
          ompq_10_calculation
        )(min_response)

        expect(score).to.eql(OREBRO_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result('orebro'),
          ompq_10_calculation
        )(median_response)

        expect(score).to.eql(OREBRO_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = R.compose(
          view_result('orebro'),
          ompq_10_calculation
        )(max_response)

        expect(score).to.eql(OREBRO_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result('orebro'),
          ompq_10_calculation
        )(random_response)

        const EXPECTED_SCORE = 21

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = ompq_10_calculation({})
        const result = view_result()(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ompq_10_calculation({
            OREBRO_DURATION: "I'm not a number"
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ompq_10_calculation({
            OREBRO_DURATION: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ompq_10_calculation({
            OREBRO_DURATION: 11
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
