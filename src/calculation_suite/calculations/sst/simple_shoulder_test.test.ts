import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sst_test_responses'
import { SST_INPUTS } from './definition/sst_inputs'
import { simple_shoulder_test } from './simple_shoulder_test'

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

const sst_calculation = execute_test_calculation(simple_shoulder_test)

describe('simple_shoulder_test', function () {
  it('simple_shoulder_test calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('simple_shoulder_test')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
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
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(SST_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sst_calculation(best_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['SST'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst score', function () {
        const outcome = R.compose(
          view_result(),
          sst_calculation
        )(worst_response)

        expect(outcome).to.eql(WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = R.compose(
          view_result(),
          sst_calculation
        )(median_response)

        expect(outcome).to.eql(MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best score', function () {
        const outcome = R.compose(view_result(), sst_calculation)(best_response)

        expect(outcome).to.eql(BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = R.compose(
          view_result(),
          sst_calculation
        )(random_response)

        const EXPECTED_SCORE = 58.33

        expect(outcome).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = sst_calculation({})

      it('should return undefined as the result and a missing status', function () {
        const result = view_result()(outcome)
        const status = view_status()(outcome)

        expect(result).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          sst_calculation({
            Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an error', function () {
        expect(() =>
          sst_calculation({
            Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sst_calculation({
            Q01: 3,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
