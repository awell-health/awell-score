// @flow
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  max_response,
  median_response,
  min_response
} from './__testdata__/womac_form_responses'
import { womac } from './womac'
import { WOMAC_INPUTS } from './definition/womac_inputs'

const WOMAC_MIN_SCORE = 0
const WOMAC_MEDIAN_SCORE = 48
const WOMAC_MAX_SCORE = 96

const womac_calculation = execute_test_calculation(womac)

describe('womac', function () {
  it('womac calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('womac')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'PAIN_WALKING',
        'PAIN_STAIR_CLIMBING',
        'PAIN_NOCTURNAL',
        'PAIN_REST',
        'PAIN_WEIGHT_BEARING',
        'STIFFNESS_MORNING',
        'STIFFNESS_LATER',
        'PHYSICAL_FUNCTION_DESCENDING_STAIRS',
        'PHYSICAL_FUNCTION_ASCENDING_STAIRS',
        'PHYSICAL_FUNCTION_RISING_FROM_SITTING',
        'PHYSICAL_FUNCTION_STANDING',
        'PHYSICAL_FUNCTION_BENDING',
        'PHYSICAL_FUNCTION_WALKING_FLAT_SURFACE',
        'PHYSICAL_FUNCTION_GETTING_IN_OUT_CAR',
        'PHYSICAL_FUNCTION_SHOPPING',
        'PHYSICAL_FUNCTION_PUTTING_ON_SOCKS',
        'PHYSICAL_FUNCTION_LYING_BED',
        'PHYSICAL_FUNCTION_TAKING_OFF_SOCKS',
        'PHYSICAL_FUNCTION_RISING_BED',
        'PHYSICAL_FUNCTION_GETTING_IN_OUT_BATH',
        'PHYSICAL_FUNCTION_SITTING',
        'PHYSICAL_FUNCTION_GETTING_ON_OFF_TOILET',
        'PHYSICAL_FUNCTION_HEAVY_DOMESTIC_DUTIES',
        'PHYSICAL_FUNCTION_LIGHT_DOMESTIC_DUTIES'
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(WOMAC_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = womac_calculation(min_response)

    it('should calculate a total score and 3 section scores', function () {
      expect(outcome).to.have.length(4)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.have.members([
        'WOMAC_TOTAL_SCORE',
        'WOMAC_PAIN_SCORE',
        'WOMAC_STIFFNESS_SCORE',
        'WOMAC_DIFFICULTY_SCORE'
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      const res = womac_calculation(min_response)

      it('should return the minimum total score', function () {
        const score = view_result('WOMAC_TOTAL_SCORE')(res)
        expect(score).to.eql(WOMAC_MIN_SCORE)
      })
      it('should return the minimum pain score', function () {
        const score = view_result('WOMAC_PAIN_SCORE')(res)
        expect(score).to.eql(0)
      })
      it('should return the minimum stiffness score', function () {
        const score = view_result('WOMAC_STIFFNESS_SCORE')(res)
        expect(score).to.eql(0)
      })
      it('should return the minimum difficulty score', function () {
        const score = view_result('WOMAC_DIFFICULTY_SCORE')(res)
        expect(score).to.eql(0)
      })
    })

    describe('when called with a median response', function () {
      const res = womac_calculation(median_response)

      it('should return the median total score', function () {
        const score = view_result('WOMAC_TOTAL_SCORE')(res)
        expect(score).to.eql(WOMAC_MEDIAN_SCORE)
      })
      it('should return the median pain score', function () {
        const score = view_result('WOMAC_PAIN_SCORE')(res)
        expect(score).to.eql(10)
      })
      it('should return the median stiffness score', function () {
        const score = view_result('WOMAC_STIFFNESS_SCORE')(res)
        expect(score).to.eql(4)
      })
      it('should return the median difficulty score', function () {
        const score = view_result('WOMAC_DIFFICULTY_SCORE')(res)
        expect(score).to.eql(34)
      })
    })

    describe('when called with a maximum response', function () {
      const res = womac_calculation(max_response)

      it('should return the maximum total score', function () {
        const score = view_result('WOMAC_TOTAL_SCORE')(res)
        expect(score).to.eql(WOMAC_MAX_SCORE)
      })
      it('should return the maximum pain score', function () {
        const score = view_result('WOMAC_PAIN_SCORE')(res)
        expect(score).to.eql(20)
      })
      it('should return the maximum stiffness score', function () {
        const score = view_result('WOMAC_STIFFNESS_SCORE')(res)
        expect(score).to.eql(8)
      })
      it('should return the maximum difficulty score', function () {
        const score = view_result('WOMAC_DIFFICULTY_SCORE')(res)
        expect(score).to.eql(68)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the total score', function () {
        const outcome = womac_calculation({})
        const result = view_result('WOMAC_TOTAL_SCORE')(outcome)

        expect(result).to.eql(undefined)
      })
      it('should return undefined as the pain score', function () {
        const outcome = womac_calculation({})
        const result = view_result('WOMAC_PAIN_SCORE')(outcome)

        expect(result).to.eql(undefined)
      })
      it('should return undefined as the stiffness score', function () {
        const outcome = womac_calculation({})
        const result = view_result('WOMAC_STIFNESS_SCORE')(outcome)

        expect(result).to.eql(undefined)
      })
      it('should return undefined as the difficulty score', function () {
        const outcome = womac_calculation({})
        const result = view_result('WOMAC_DIFFICULTY_SCORE')(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          womac_calculation({
            PAIN_WALKING: "I'm not a number"
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          womac_calculation({
            PAIN_WALKING: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          womac_calculation({
            PAIN_WALKING: 11
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
