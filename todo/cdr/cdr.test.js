// @flow
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  scenario_1,
  scenario_10,
  scenario_11,
  scenario_12,
  scenario_13,
  scenario_14,
  scenario_2,
  scenario_3,
  scenario_4,
  scenario_5,
  scenario_6,
  scenario_8,
  scenario_9
} from './__testdata__/cdr_form_responses'
import { cdr } from './cdr'
import { CDR_INPUTS } from './definition/cdr_inputs'

const cdr_calculation = execute_test_calculation(cdr)

describe('cdr', function () {
  it('cdr calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('cdr')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'MEMORY',
        'ORIENTATION',
        'JUDGEMENT_AND_PROBLEM_SOLVING',
        'COMMUNITY_AFFAIRS',
        'HOME_AND_HOBBIES',
        'PERSONAL_CARE'
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(CDR_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = cdr_calculation(scenario_1)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.have.members(['CDR_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('scenario 1', function () {
      it('should return 0', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_1)

        expect(score).to.eql(0)
      })
    })

    describe('scenario 2', function () {
      it('should return 0.5', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_2)

        expect(score).to.eql(0.5)
      })
    })

    describe('scenario 3', function () {
      it('should return 0.5', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_3)

        expect(score).to.eql(0.5)
      })
    })

    describe('scenario 4', function () {
      it('should return 1', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_4)

        expect(score).to.eql(1)
      })
    })

    describe('scenario 5', function () {
      it('should return 2', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_5)

        expect(score).to.eql(2)
      })
    })

    describe('scenario 6', function () {
      it('should return 2', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_6)

        expect(score).to.eql(2)
      })
    })

    describe('scenario 8', function () {
      it('should return 1', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_8)

        expect(score).to.eql(1)
      })
    })

    describe('scenario 9', function () {
      it('should return 0.5', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_9)

        expect(score).to.eql(0.5)
      })
    })

    describe('scenario 10', function () {
      it('should return 1', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_10)

        expect(score).to.eql(1)
      })
    })

    describe('scenario 11', function () {
      it('should return 1', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_11)

        expect(score).to.eql(1)
      })
    })

    describe('scenario 12', function () {
      it('should return 0.5', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_12)

        expect(score).to.eql(0.5)
      })
    })

    describe('scenario 13', function () {
      it('should return 2', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_13)

        expect(score).to.eql(2)
      })
    })

    describe('scenario 14', function () {
      it('should return 0.5', function () {
        const score = R.compose(view_result(), cdr_calculation)(scenario_14)

        expect(score).to.eql(0.5)
      })
    })

    describe('other scenarios', function () {
      it('random 01 - should work', function () {
        const score = R.compose(
          view_result(),
          cdr_calculation
        )({
          MEMORY: 1,
          ORIENTATION: 2,
          JUDGEMENT_AND_PROBLEM_SOLVING: 2,
          COMMUNITY_AFFAIRS: 3,
          HOME_AND_HOBBIES: 1,
          PERSONAL_CARE: 1
        })

        expect(score).to.eql(2)
      })

      it('random 02 - should work', function () {
        const score = R.compose(
          view_result(),
          cdr_calculation
        )({
          MEMORY: 1,
          ORIENTATION: 0.5,
          JUDGEMENT_AND_PROBLEM_SOLVING: 0.5,
          COMMUNITY_AFFAIRS: 2,
          HOME_AND_HOBBIES: 3,
          PERSONAL_CARE: 3
        })

        expect(score).to.eql(1)
      })

      it('random 03 - should work', function () {
        const score = R.compose(
          view_result(),
          cdr_calculation
        )({
          MEMORY: 1,
          ORIENTATION: 1,
          JUDGEMENT_AND_PROBLEM_SOLVING: 0.5,
          COMMUNITY_AFFAIRS: 2,
          HOME_AND_HOBBIES: 3,
          PERSONAL_CARE: 3
        })

        expect(score).to.eql(3)
      })

      it('random 04 - should work', function () {
        const score = R.compose(
          view_result(),
          cdr_calculation
        )({
          MEMORY: 1,
          ORIENTATION: 1,
          JUDGEMENT_AND_PROBLEM_SOLVING: 1,
          COMMUNITY_AFFAIRS: 2,
          HOME_AND_HOBBIES: 2,
          PERSONAL_CARE: 3
        })

        expect(score).to.eql(2)
      })

      it('random 05 - should work', function () {
        const score = R.compose(
          view_result(),
          cdr_calculation
        )({
          MEMORY: 1,
          ORIENTATION: 1,
          JUDGEMENT_AND_PROBLEM_SOLVING: 1,
          COMMUNITY_AFFAIRS: 1,
          HOME_AND_HOBBIES: 2,
          PERSONAL_CARE: 3
        })

        expect(score).to.eql(1)
      })

      it('random 06 - should work', function () {
        const score = R.compose(
          view_result(),
          cdr_calculation
        )({
          MEMORY: 1,
          ORIENTATION: 1,
          JUDGEMENT_AND_PROBLEM_SOLVING: 1,
          COMMUNITY_AFFAIRS: 2,
          HOME_AND_HOBBIES: 0.5,
          PERSONAL_CARE: 2
        })

        expect(score).to.eql(1)
      })

      it('random 07 - should work', function () {
        const score = R.compose(
          view_result(),
          cdr_calculation
        )({
          MEMORY: 1,
          ORIENTATION: 1,
          JUDGEMENT_AND_PROBLEM_SOLVING: 1,
          COMMUNITY_AFFAIRS: 2,
          HOME_AND_HOBBIES: 2,
          PERSONAL_CARE: 2
        })

        expect(score).to.eql(2)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = cdr_calculation({})
        const result = view_result()(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cdr_calculation({
            MEMORY: "I'm not a number"
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cdr_calculation({
            MEMORY: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cdr_calculation({
            MEMORY: 4
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
