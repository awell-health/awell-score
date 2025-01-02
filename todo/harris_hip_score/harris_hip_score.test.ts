import { expect } from 'chai'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { view_status } from '../../lib/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/harris_hip_score_test_responses'
import { HARRIS_HIP_SCORE_INPUTS } from './definition'
import { harris_hip_score } from './harris_hip_score'

const HARRIS_HIP_SCORE_BEST_SCORE = 100
const HARRIS_HIP_SCORE_WORST_SCORE = 0

const harris_hip_score_calculation = execute_test_calculation(harris_hip_score)

describe('harris_hip_score', function () {
  it('harris_hip_score calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('harris_hip_score')
  })

  describe('basic assumptions', function () {
    const outcome = harris_hip_score_calculation(best_response)

    it('should return 2 calculation results', function () {
      expect(outcome).toHaveLength(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'RANGE_OF_MOTION_SCORE',
        'HARRIS_HIP_SCORE',
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PAIN',
          'LIMP',
          'SUPPORT',
          'DISTANCE_WALKED',
          'SITTING',
          'ENTER_PUBLIC_TRANSPORTATION',
          'STAIRS',
          'PUT_ON_SOCKS_AND_SHOES',
          'ABSENCE_OF_DEFORMITY',
          'RANGE_OF_MOTION_FLEXION',
          'RANGE_OF_MOTION_ABDUCTION',
          'RANGE_OF_MOTION_ADDUCTION',
          'RANGE_OF_MOTION_EXTERNAL_ROTATION',
          'RANGE_OF_MOTION_INTERNAL_ROTATION',
        ]

        const configured_input_ids = get_input_ids_from_calculation_blueprint(
          HARRIS_HIP_SCORE_INPUTS,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          harris_hip_score_calculation({
            PAIN: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with a response where there are answers out of the expected [0, 4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          harris_hip_score_calculation({
            PAIN: 100,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          harris_hip_score_calculation({
            PAIN: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when called with an empty response', function () {
      const outcome = harris_hip_score_calculation({})

      it('should return undefined result as the score and a missing status', function () {
        const range_of_motion_score = view_result('RANGE_OF_MOTION_SCORE')(
          outcome,
        )
        const harris_hip_score_result = view_result('HARRIS_HIP_SCORE')(outcome)
        const range_of_motion_status = view_status('RANGE_OF_MOTION_SCORE')(
          outcome,
        )
        const harris_hip_score_status = view_status('HARRIS_HIP_SCORE')(outcome)

        expect(range_of_motion_score).toEqual(undefined)
        expect(harris_hip_score_result).toEqual(undefined)
        expect(range_of_motion_status).toEqual(MISSING_STATUS)
        expect(harris_hip_score_status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = harris_hip_score_calculation(best_response)

      it('should return the best range of motion score (5)', function () {
        const range_of_motion_score = view_result('RANGE_OF_MOTION_SCORE')(
          outcome,
        )

        expect(range_of_motion_score).toEqual(5)
      })

      it('should return the best harris hip score', function () {
        const harris_hip_score_result = view_result('HARRIS_HIP_SCORE')(outcome)

        expect(harris_hip_score_result).toEqual(HARRIS_HIP_SCORE_BEST_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = harris_hip_score_calculation(worst_response)

      it('should return the worst range of motion score (0)', function () {
        const range_of_motion_score = view_result('RANGE_OF_MOTION_SCORE')(
          outcome,
        )

        expect(range_of_motion_score).toEqual(0)
      })

      it('should return the worst harris hip score', function () {
        const harris_hip_score_result = view_result('HARRIS_HIP_SCORE')(outcome)

        expect(harris_hip_score_result).toEqual(HARRIS_HIP_SCORE_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = harris_hip_score_calculation(random_response)

      it('should return the expected range of motion score (0)', function () {
        const range_of_motion_score = view_result('RANGE_OF_MOTION_SCORE')(
          outcome,
        )

        const EXPECTED_SCORE = 3

        expect(range_of_motion_score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected harris hip score', function () {
        const harris_hip_score_result = view_result('HARRIS_HIP_SCORE')(outcome)

        const EXPECTED_SCORE = 44

        expect(harris_hip_score_result).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
