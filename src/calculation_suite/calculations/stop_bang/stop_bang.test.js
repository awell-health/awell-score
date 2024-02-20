// @flow
import { expect } from 'chai'
import { compose } from 'ramda'

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
  max_response,
  median_response,
  min_response,
  random_response
} from './__testdata__'
import { STOP_BANG_INPUTS } from './definition/stop_bang_inputs'
// eslint-disable-next-line sort-imports
import { stop_bang, STOP_BANG_ID } from './stop_bang'

const STOP_BANG_MIN_SCORE = 0
const STOP_BANG_MEDIAN_SCORE = 4
const STOP_BANG_RANDOM_SCORE = 4
const STOP_BANG_MAX_SCORE = 8

const stop_bang_calculation = execute_test_calculation(stop_bang)

describe('stop_bang', function () {
  it('stop_bang calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('stop_bang')
  })

  describe('basic assumption', function () {
    describe('the score includes the correct input fields', function () {
      it('should use the correct input fields', function () {
        const EXPECTED_CALCULATION_INPUT_IDS = [
          'STOP_BANG_Q01',
          'STOP_BANG_Q02',
          'STOP_BANG_Q03',
          'STOP_BANG_Q04',
          'STOP_BANG_Q05',
          'STOP_BANG_Q06',
          'STOP_BANG_Q07',
          'STOP_BANG_Q08'
        ]

        const CONFIGURED_CALCULATION_INPUT_IDS =
          get_input_ids_from_calculation_blueprint(STOP_BANG_INPUTS)

        expect(CONFIGURED_CALCULATION_INPUT_IDS).to.have.members(
          EXPECTED_CALCULATION_INPUT_IDS
        )
      })
    })
  })

  describe('each calculated score incudes the correct output result and correct score title', function () {
    const outcome = stop_bang_calculation(min_response)

    it('should calculate 2 calculation results', function () {
      expect(outcome).to.have.length(2)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_ID = ['STOP_BANG', 'STOP_BANG_INTERPRETATION']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('score calculations', function () {
    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when a minimum response is passed', function () {
        it('should return the minimum score', function () {
          const score = compose(
            view_result(STOP_BANG_ID),
            stop_bang_calculation
          )(min_response)

          expect(score).to.eql(STOP_BANG_MIN_SCORE)
        })
        it('should return "Low" as the interpretation for the total score', function () {
          const score = compose(
            view_result('STOP_BANG_INTERPRETATION'),
            stop_bang_calculation
          )(min_response)

          expect(score).to.eql('Low')
        })
      })
      describe('when a median response is passed', function () {
        it('should return the median score', function () {
          const score = compose(
            view_result(STOP_BANG_ID),
            stop_bang_calculation
          )(median_response)
          expect(score).to.eql(STOP_BANG_MEDIAN_SCORE)
        })
        it('should return "Intermediate" as the interpretation for the total score', function () {
          const score = compose(
            view_result('STOP_BANG_INTERPRETATION'),
            stop_bang_calculation
          )(median_response)
          expect(score).to.eql('Intermediate')
        })
      })
      describe('when a maximum response is passed', function () {
        it('should return the maximum score', function () {
          const score = compose(
            view_result(STOP_BANG_ID),
            stop_bang_calculation
          )(max_response)
          expect(score).to.eql(STOP_BANG_MAX_SCORE)
        })
        it('should return "High" as the interpretation for the total score', function () {
          const score = compose(
            view_result('STOP_BANG_INTERPRETATION'),
            stop_bang_calculation
          )(max_response)
          expect(score).to.eql('High')
        })
      })
      describe('when a random response is passed', function () {
        it('should return the correct score', function () {
          const score = compose(
            view_result(STOP_BANG_ID),
            stop_bang_calculation
          )(random_response)
          expect(score).to.eql(STOP_BANG_RANDOM_SCORE)
        })
        it('should return "Intermediate" as the interpretation for the total score', function () {
          const score = compose(
            view_result('STOP_BANG_INTERPRETATION'),
            stop_bang_calculation
          )(random_response)
          expect(score).to.eql('Intermediate')
        })
      })
    })

    describe('validations', function () {
      describe('a score is only calculated when all mandatory fields are entered', function () {
        describe('when an empty response is passed', function () {
          it('should return undefined result & missing status', function () {
            const outcome = stop_bang_calculation({})
            const result = view_result(STOP_BANG_ID)(outcome)
            const status = view_status(STOP_BANG_ID)(outcome)

            expect(result).to.eql(undefined)
            expect(status).to.eql(MISSING_STATUS)
          })
        })
        describe('when an answer is below 0', function () {
          it('should throw an InvalidInputsError', function () {
            expect(() =>
              stop_bang_calculation({
                STOP_BANG_Q01: -1
              })
            ).to.throw(InvalidInputsError)
            expect(() =>
              stop_bang_calculation({
                STOP_BANG_Q06: -1
              })
            ).to.throw(InvalidInputsError)
            expect(() =>
              stop_bang_calculation({
                STOP_BANG_Q08: 0
              })
            ).to.throw(InvalidInputsError)
          })
        })
        describe('when an answer is above maximum allowed value', function () {
          it('should throw an InvalidInputsError', function () {
            expect(() =>
              stop_bang_calculation({
                STOP_BANG_Q01: 2
              })
            ).to.throw(InvalidInputsError)
            expect(() =>
              stop_bang_calculation({
                STOP_BANG_Q08: 3
              })
            ).to.throw(InvalidInputsError)
          })
        })
      })
    })
  })
})
