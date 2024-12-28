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
} from './__testdata__/start_back_test_responses'
import { START_BACK_INPUTS } from './definition/start_back_inputs'
import { start_back_screening_tool } from './start_back_screening_tool'

const START_BACK_TOTAL_MIN_SCORE = 0
const START_BACK_TOTAL_MEDIAN_SCORE = 4
const START_BACK_TOTAL_MAX_SCORE = 9

const START_BACK_SUBSCALE_MIN_SCORE = 0
const START_BACK_SUBSCALE_MEDIAN_SCORE = 0
const START_BACK_SUBSCALE_MAX_SCORE = 5

const LOW_RISK = 1
const MEDIUM_RISK = 2
const HIGH_RISK = 3

const start_back_calculation = execute_test_calculation(
  start_back_screening_tool
)

describe('start_back_screening_tool', function () {
  it('start_back_screening_tool calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('start_back_screening_tool')
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
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(START_BACK_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = start_back_calculation(min_response)

    it('should return 3 scores', function () {
      expect(outcome).to.have.length(3)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'START_BACK_TOTAL',
        'START_BACK_SUBSCALE',
        'START_BACK_RISK_CLASSIFICATION',
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
      const outcome = start_back_calculation(min_response)

      it('should return the minimum total score', function () {
        const TOTAL_SCORE = view_result('START_BACK_TOTAL')(outcome)
        expect(TOTAL_SCORE).to.eql(START_BACK_TOTAL_MIN_SCORE)
      })

      it('should return the minimum subscale score', function () {
        const SUBSCALE_SCORE = view_result('START_BACK_SUBSCALE')(outcome)
        expect(SUBSCALE_SCORE).to.eql(START_BACK_SUBSCALE_MIN_SCORE)
      })

      it('should return low risk as the START_BACK_RISK_CLASSIFICATION', function () {
        const RISK_SCORE = view_result('START_BACK_RISK_CLASSIFICATION')(
          outcome
        )
        expect(RISK_SCORE).to.eql(LOW_RISK)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = start_back_calculation(median_response)

      it('should return the median total score', function () {
        const TOTAL_SCORE = view_result('START_BACK_TOTAL')(outcome)
        expect(TOTAL_SCORE).to.eql(START_BACK_TOTAL_MEDIAN_SCORE)
      })

      it('should return the median subscale score', function () {
        const SUBSCALE_SCORE = view_result('START_BACK_SUBSCALE')(outcome)
        expect(SUBSCALE_SCORE).to.eql(START_BACK_SUBSCALE_MEDIAN_SCORE)
      })

      it('should return medium risk as the START_BACK_RISK_CLASSIFICATION', function () {
        const RISK_SCORE = view_result('START_BACK_RISK_CLASSIFICATION')(
          outcome
        )
        expect(RISK_SCORE).to.eql(MEDIUM_RISK)
      })
    })

    describe('when a maximum response is passed', function () {
      const outcome = start_back_calculation(max_response)

      it('should return the maximum total score', function () {
        const TOTAL_SCORE = view_result('START_BACK_TOTAL')(outcome)
        expect(TOTAL_SCORE).to.eql(START_BACK_TOTAL_MAX_SCORE)
      })

      it('should return the maximum subscale score', function () {
        const SUBSCALE_SCORE = view_result('START_BACK_SUBSCALE')(outcome)
        expect(SUBSCALE_SCORE).to.eql(START_BACK_SUBSCALE_MAX_SCORE)
      })

      it('should return high risk as the START_BACK_RISK_CLASSIFICATION', function () {
        const RISK_SCORE = view_result('START_BACK_RISK_CLASSIFICATION')(
          outcome
        )
        expect(RISK_SCORE).to.eql(HIGH_RISK)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = start_back_calculation(random_response)

      it('should return the expected total score', function () {
        const TOTAL_SCORE = view_result('START_BACK_TOTAL')(outcome)
        const EXPECTED_TOTAL_SCORE = 4
        expect(TOTAL_SCORE).to.eql(EXPECTED_TOTAL_SCORE)
      })

      it('should return the expected subscale score', function () {
        const SUBSCALE_SCORE = view_result('START_BACK_SUBSCALE')(outcome)
        const EXPECTED_SUBSCALE_SCORE = 2
        expect(SUBSCALE_SCORE).to.eql(EXPECTED_SUBSCALE_SCORE)
      })

      it('should return expected START_BACK_RISK_CLASSIFICATION', function () {
        const RISK_SCORE = view_result('START_BACK_RISK_CLASSIFICATION')(
          outcome
        )
        const EXPECTED_RISK_CLASSIFICATION = MEDIUM_RISK
        expect(RISK_SCORE).to.eql(EXPECTED_RISK_CLASSIFICATION)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = start_back_calculation({})

      it('should return MISSING_MESSAGE as the total score', function () {
        const TOTAL_SCORE = view_result('START_BACK_TOTAL')(outcome)
        expect(TOTAL_SCORE).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the subscale score', function () {
        const SUBSCALE_SCORE = view_result('START_BACK_SUBSCALE')(outcome)
        expect(SUBSCALE_SCORE).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the START_BACK_RISK_CLASSIFICATION', function () {
        const RISK_SCORE = view_result('START_BACK_RISK_CLASSIFICATION')(
          outcome
        )
        expect(RISK_SCORE).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          start_back_calculation({
            Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          start_back_calculation({
            Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          start_back_calculation({
            Q01: 2,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
