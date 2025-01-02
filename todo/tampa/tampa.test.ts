import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../src/calculation_suite/errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../../src/calculation_suite/calculations/calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/tampa_test_responses'
import { TAMPA_INPUTS } from './definition/tampa_inputs'
// eslint-disable-next-line sort-imports
import { tampa, TAMPA_CALCULATION_ID } from './tampa'

const TAMPA_MIN_SCORE = 17
const TAMPA_MAX_SCORE = 68

const tampa_calculation = execute_test_calculation(tampa)

describe('tampa', function () {
  it('tampa calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('tampa')
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
        'Q13',
        'Q14',
        'Q15',
        'Q16',
        'Q17',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(TAMPA_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = tampa_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(['TAMPA'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const score = R.compose(
          view_result(TAMPA_CALCULATION_ID),
          tampa_calculation,
        )(min_response)

        expect(score).toEqual(TAMPA_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result(TAMPA_CALCULATION_ID),
          tampa_calculation,
        )(median_response)

        const EXPECTED_MEDIAN_SCORE = 43

        expect(score).toEqual(EXPECTED_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const score = R.compose(
          view_result(TAMPA_CALCULATION_ID),
          tampa_calculation,
        )(max_response)

        expect(score).toEqual(TAMPA_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const score = R.compose(
          view_result(TAMPA_CALCULATION_ID),
          tampa_calculation,
        )(random_response)

        const EXPECTED_SCORE = 43

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const score = R.compose(
          view_result(TAMPA_CALCULATION_ID),
          tampa_calculation,
        )({})

        expect(score).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          tampa_calculation({
            Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          tampa_calculation({
            Q01: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
