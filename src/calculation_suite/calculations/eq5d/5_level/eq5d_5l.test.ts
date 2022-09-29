import { expect } from 'chai'

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
} from './__testdata__/eq5d_5l_test_responses'
import { EQ5D_5L_INPUTS } from './definition/eq5d_5l_inputs'
import { eq5d_5l } from './eq5d_5l'

const EQ5D_5L_MIN_HEALTH_STATE = 11111
const EQ5D_5L_MEDIAN_HEALTH_STATE = 33333
const EQ5D_5L_MAX_HEALTH_STATE = 55555

const EQ5D_5L_MIN_VAS = 0
const EQ5D_5L_MEDIAN_VAS = 50
const EQ5D_5L_MAX_VAS = 100

const eq5d_5l_calculation = execute_test_calculation(eq5d_5l)

describe('eq5d_5l', function () {
  it('eq5d_5l calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('eq5d_5l')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'eq5d_5l_mobility',
        'eq5d_5l_selfcare',
        'eq5d_5l_usual',
        'eq5d_5l_pain',
        'eq5d_5l_anxiety',
        'eq5d_5l_vas',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(EQ5D_5L_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = eq5d_5l_calculation(min_response)

    it('should return 2 scores', function () {
      expect(outcome).to.have.length(3)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'EQ_HEALTH_STATE',
        'EQ_VAS',
        'UTILITY_VALUE_HEALTH_STATE_BELGIUM',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).to.eql(
        extracted_calculation_ids_from_outcome
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = eq5d_5l_calculation(min_response)

      it('should return the minimum score for EQ Health state', function () {
        const EQ5D_5L_HEALTH_STATE = view_result('EQ_HEALTH_STATE')(outcome)
        expect(EQ5D_5L_HEALTH_STATE).to.eql(EQ5D_5L_MIN_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        const EQ5D_5L_VAS = view_result('EQ_VAS')(outcome)
        expect(EQ5D_5L_VAS).to.eql(EQ5D_5L_MIN_VAS)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = eq5d_5l_calculation(median_response)

      it('should return the minimum score for EQ Health state', function () {
        const EQ5D_5L_HEALTH_STATE = view_result('EQ_HEALTH_STATE')(outcome)
        expect(EQ5D_5L_HEALTH_STATE).to.eql(EQ5D_5L_MEDIAN_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        const EQ5D_5L_VAS = view_result('EQ_VAS')(outcome)
        expect(EQ5D_5L_VAS).to.eql(EQ5D_5L_MEDIAN_VAS)
      })
    })

    describe('when a maximum response is passed', function () {
      const outcome = eq5d_5l_calculation(max_response)

      it('should return the minimum score for EQ Health state', function () {
        const EQ5D_5L_HEALTH_STATE = view_result('EQ_HEALTH_STATE')(outcome)
        expect(EQ5D_5L_HEALTH_STATE).to.eql(EQ5D_5L_MAX_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        const EQ5D_5L_VAS = view_result('EQ_VAS')(outcome)
        expect(EQ5D_5L_VAS).to.eql(EQ5D_5L_MAX_VAS)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = eq5d_5l_calculation(random_response)

      it('should return the minimum score for EQ Health state', function () {
        const EQ5D_5L_HEALTH_STATE = view_result('EQ_HEALTH_STATE')(outcome)
        const EXPECTED_HEALTH_STATE = 15421
        expect(EQ5D_5L_HEALTH_STATE).to.eql(EXPECTED_HEALTH_STATE)
      })

      it('should return the minimum score for EQ VAS', function () {
        const EQ5D_5L_VAS = view_result('EQ_VAS')(outcome)
        const EXPECTED_VAS_SCORE = 74
        expect(EQ5D_5L_VAS).to.eql(EXPECTED_VAS_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = eq5d_5l_calculation({})

      it('should return MISSING_MESSAGE for the EQ Health state', function () {
        const EQ5D_5L_HEALTH_STATE = view_result('EQ_HEALTH_STATE')(outcome)
        expect(EQ5D_5L_HEALTH_STATE).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE for the EQ VAS', function () {
        const EQ5D_5L_VAS = view_result('EQ_VAS')(outcome)
        expect(EQ5D_5L_VAS).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eq5d_5l_calculation({
            eq5d_5l_mobility: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eq5d_5l_calculation({
            eq5d_5l_mobility: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eq5d_5l_calculation({
            eq5d_5l_mobility: 6,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
