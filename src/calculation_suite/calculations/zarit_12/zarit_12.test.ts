import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/zarit_12_test_responses'
import { ZARRIT_INPUTS } from './definition/zarit_12_inputs'
import { zarit_12 } from './zarit_12'

const ZARIT_12_MIN_SCORE = 0
const ZARIT_12_MEDIAN_SCORE = 24
const ZARIT_12_MAX_SCORE = 48

const zarit_12_calculation = execute_test_calculation(zarit_12)

describe('zarit_12', function () {
  it('zarit_12 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('zarit_12')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'ZARIT_12_Q01',
        'ZARIT_12_Q02',
        'ZARIT_12_Q03',
        'ZARIT_12_Q04',
        'ZARIT_12_Q05',
        'ZARIT_12_Q06',
        'ZARIT_12_Q07',
        'ZARIT_12_Q08',
        'ZARIT_12_Q09',
        'ZARIT_12_Q10',
        'ZARIT_12_Q11',
        'ZARIT_12_Q12',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(ZARRIT_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = zarit_12_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['ZARIT_12'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = R.compose(
          view_result(),
          zarit_12_calculation
        )(min_response)

        expect(outcome).to.eql(ZARIT_12_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = R.compose(
          view_result(),
          zarit_12_calculation
        )(median_response)

        expect(outcome).to.eql(ZARIT_12_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = R.compose(
          view_result(),
          zarit_12_calculation
        )(max_response)

        expect(outcome).to.eql(ZARIT_12_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = R.compose(
          view_result(),
          zarit_12_calculation
        )(random_response)

        const EXPECTED_SCORE = 20

        expect(outcome).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = R.compose(view_result(), zarit_12_calculation)({})

        expect(outcome).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          zarit_12_calculation({
            ZARIT_12_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          zarit_12_calculation({
            ZARIT_12_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          zarit_12_calculation({
            ZARIT_12_Q01: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
