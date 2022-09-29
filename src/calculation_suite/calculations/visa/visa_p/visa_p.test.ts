import { expect } from 'chai'
import { compose } from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/visa_p_test_responses'
import { VISA_P_INPUTS } from './definition/visa_p_inputs'
import { visa_p } from './visa_p'

const VISA_P_MIN_SCORE = 0
const VISA_P_MEDIAN_SCORE = 50
const VISA_P_MAX_SCORE = 100

const visa_p_calculation = execute_test_calculation(visa_p)

describe('visa_p', function () {
  it('visa_p calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('visa_p')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'VISA_P_Q01',
        'VISA_P_Q02',
        'VISA_P_Q03',
        'VISA_P_Q04',
        'VISA_P_Q05',
        'VISA_P_Q06',
        'VISA_P_Q07',
        'VISA_P_Q08',
        'VISA_P_Q08_A',
        'VISA_P_Q08_B',
        'VISA_P_Q08_C',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(VISA_P_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = visa_p_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['VISA_P'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const score = compose(
          view_result('VISA-P'),
          visa_p_calculation
        )(min_response)

        expect(score).to.eql(VISA_P_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const score = compose(
          view_result('VISA-P'),
          visa_p_calculation
        )(median_response)

        expect(score).to.eql(VISA_P_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const score = compose(
          view_result('VISA-P'),
          visa_p_calculation
        )(max_response)

        expect(score).to.eql(VISA_P_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const score = compose(
          view_result('VISA-P'),
          visa_p_calculation
        )(random_response)

        const EXPECTED_SCORE = 47

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const score = compose(view_result('VISA-P'), visa_p_calculation)({})

        expect(score).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          visa_p_calculation({
            VISA_P_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          visa_p_calculation({
            VISA_P_Q01: 11,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
