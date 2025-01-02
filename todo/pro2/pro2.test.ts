import { expect } from 'chai'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  max_response,
  min_response,
  random_response,
} from './__testdata__/pro2_responses'
import { PRO2_INPUTS } from './definition/pro2_inputs'
import { PRO2 } from './pro2'

const NON_REMISSION = false
const REMISSION = true

const pro2_calculation = execute_test_calculation(PRO2)

describe('PRO2', function () {
  it('PRO2 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('PRO2')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'STOOL_FREQUENCY',
        'ABDOMINAL_PAIN',
        'GENERAL_WELL_BEING',
        'JOINT_PROBLEMS',
        'SKIN_PROBLEMS',
        'EYE_PROBLEMS',
        'MOUTH_SORES',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(PRO2_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pro2_calculation(min_response)

    it('should return 3 calculation results (subscore, total score and remission score)', function () {
      expect(outcome).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE',
        'TOTAL_SCORE',
        'REMISSION',
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(configured_calculation_id)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = pro2_calculation(min_response)

      it('should return the minimum subscore', function () {
        const score = view_result(
          'STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE',
        )(outcome)
        const MIN_SCORE = 0

        expect(score).eql(MIN_SCORE)
      })

      it('should return the minimum total score', function () {
        const score = view_result('TOTAL_SCORE')(outcome)
        const MIN_SCORE = 0

        expect(score).eql(MIN_SCORE)
      })

      it('should return remission (1)', function () {
        const score = view_result('REMISSION')(outcome)

        expect(score).eql(REMISSION)
      })
    })
  })

  describe('when a maximum response is passed', function () {
    const outcome = pro2_calculation(max_response)

    it('should return the maximum subscore', function () {
      const score = view_result('STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE')(
        outcome,
      )
      const MAX_SUB_SCORE = 55

      expect(score).eql(MAX_SUB_SCORE)
    })

    it('should return the maximum total score', function () {
      const score = view_result('TOTAL_SCORE')(outcome)
      const MAX_TOTAL_SCORE = 87

      expect(score).eql(MAX_TOTAL_SCORE)
    })

    it('should return non-remission (0)', function () {
      const score = view_result('REMISSION')(outcome)

      expect(score).eql(NON_REMISSION)
    })
  })

  describe('when a random response is passed', function () {
    const outcome = pro2_calculation(random_response)

    it('should return the expected subscore', function () {
      const score = view_result('STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE')(
        outcome,
      )
      const EXPECTED_SUB_SCORE = 8

      expect(score).eql(EXPECTED_SUB_SCORE)
    })

    it('should return the maximum total score', function () {
      const score = view_result('TOTAL_SCORE')(outcome)
      const EXPECTED_TOTAL_SCORE = 11

      expect(score).eql(EXPECTED_TOTAL_SCORE)
    })

    it('should return non-remission (0)', function () {
      const score = view_result('REMISSION')(outcome)

      expect(score).eql(NON_REMISSION)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = pro2_calculation({})

      it('should return undefined as the subscore', function () {
        const score = view_result(
          'STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE',
        )(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the total score', function () {
        const score = view_result('TOTAL_SCORE')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined for remission', function () {
        const score = view_result('REMISSION')(outcome)
        expect(score).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          pro2_calculation({
            STOOL_FREQUENCY: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an error', function () {
        expect(() =>
          pro2_calculation({
            STOOL_FREQUENCY: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should return throw an error', function () {
        expect(() =>
          pro2_calculation({
            STOOL_FREQUENCY: 21,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
