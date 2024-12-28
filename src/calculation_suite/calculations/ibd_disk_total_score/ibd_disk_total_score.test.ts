import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/IBD_disk_responses'
import { IBD_DISK_INPUTS } from './definition/ibd_disk_inputs'
import { ibd_disk_total_score } from './ibd_disk_total_score'

const IBD_DISK_MIN_SCORE = 0
const IBD_DISK_MEDIAN_SCORE = 50
const IBD_DISK_MAX_SCORE = 100

const ibd_disk_calculation = execute_test_calculation(ibd_disk_total_score)

describe('ibd_disk_total_score', function () {
  it('ibd_disk_total_score calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('ibd_disk_total_score')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'abdominal_pain',
        'regulating_defecation',
        'interpersonal_interactions',
        'education_and_work',
        'sleep',
        'energy',
        'emotions',
        'body_image',
        'sexual_function',
        'arthralgia',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(IBD_DISK_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ibd_disk_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['IBD_DISK_TOTAL'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = ibd_disk_calculation(min_response)
        const result = view_result()(outcome)

        expect(result).to.eql(IBD_DISK_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = ibd_disk_calculation(median_response)
        const result = view_result()(outcome)

        expect(result).to.eql(IBD_DISK_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = ibd_disk_calculation(max_response)
        const result = view_result()(outcome)

        expect(result).to.eql(IBD_DISK_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const EXPECTED_SCORE = 44

        const outcome = ibd_disk_calculation(random_response)
        const result = view_result()(outcome)

        expect(result).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = ibd_disk_calculation({})
        const result = view_result()(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ibd_disk_calculation({
            abdominal_pain: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [0, 5] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ibd_disk_calculation({
            abdominal_pain: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [0, 5] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ibd_disk_calculation({
            abdominal_pain: 11,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
