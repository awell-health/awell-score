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
  view_status,
} from '../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/beck_form_responses'
// eslint-disable-next-line sort-imports
import { beck, BeckCalculationID } from './beck'
import { BECK_INPUTS } from './definition/beck_inputs'

const BECK_MIN_SCORE = 0
const BECK_MEDIAN_SCORE = 32
const BECK_MAX_SCORE = 63

const beck_calculation = execute_test_calculation(beck)

describe('beck', function () {
  it('beck calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('beck')
  })

  describe('basic assumptions', function () {
    const outcome = beck_calculation(min_response)

    it('should return 1 calculation result', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['beck']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
        ]

        const configured_calculation_input_ids =
          get_input_ids_from_calculation_blueprint(BECK_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_calculation_input_ids)
      })
    })

    describe('when called with a response with answers out of the expected [0,3] range', function () {
      describe('when an answer is not a number', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            beck_calculation({
              Q01: "I'm not a number",
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is below the expected [0,3] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            beck_calculation({
              Q01: -1,
            })
          ).to.throw(InvalidInputsError)
        })
      })

      describe('when an answer is above the expected [0,3] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            beck_calculation({
              Q01: 5,
            })
          ).to.throw(InvalidInputsError)
        })
      })
    })

    describe('when called with an empty', function () {
      it('should return undefined result & missing status', function () {
        const outcome = beck_calculation({})
        const result = view_result(BeckCalculationID)(outcome)
        const status = view_status(BeckCalculationID)(outcome)

        expect(result).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calcualtion', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = compose(
          view_result(BeckCalculationID),
          beck_calculation
        )(min_response)

        expect(score).to.eql(BECK_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = compose(
          view_result(BeckCalculationID),
          beck_calculation
        )(median_response)

        expect(score).to.eql(BECK_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = compose(
          view_result(BeckCalculationID),
          beck_calculation
        )(max_response)

        expect(score).to.eql(BECK_MAX_SCORE)
      })
    })
    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = compose(
          view_result(BeckCalculationID),
          beck_calculation
        )(random_response)

        const EXPECTED_SCORE = 40

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })
})
