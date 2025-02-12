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
  best_response,
  median_response,
  worst_response
} from './__testdata__/cfws_form_responses'
import { cfws } from './cfws'
import { CFWS_INPUTS, CFWS_SCORE_CATEGORY } from './definition'

const CFWS_WORST_SCORE = 15
const CFWS_MEDIAN_SCORE = 45
const CFWS_BEST_SCORE = 75

const cfws_calculation = execute_test_calculation(cfws)

describe('cfws', function () {
  it('cfws calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('cfws')
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
        'Q15'
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(CFWS_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = cfws_calculation(best_response)

    it('should calculate two scores', function () {
      expect(outcome).to.have.length(2)
    })

    it('should have the correct calculation ids', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.have.members([
        'CFWS_SCORE',
        'CFWS_INTERPRETATION'
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with the best response', function () {
      it('should return the best score', function () {
        const score = R.compose(
          view_result('CFWS_SCORE'),
          cfws_calculation
        )(best_response)

        expect(score).to.eql(CFWS_BEST_SCORE)
      })

      it('should return average interpretation', function () {
        const score = R.compose(
          view_result('CFWS_INTERPRETATION'),
          cfws_calculation
        )(best_response)

        expect(score).to.eql(CFWS_SCORE_CATEGORY.AVERAGE)
      })
    })

    describe('when called with the median response', function () {
      it('should return the median score', function () {
        const score = R.compose(
          view_result('CFWS_SCORE'),
          cfws_calculation
        )(median_response)

        expect(score).to.eql(CFWS_MEDIAN_SCORE)
      })

      it('should return little lower interpretation', function () {
        const score = R.compose(
          view_result('CFWS_INTERPRETATION'),
          cfws_calculation
        )(median_response)

        expect(score).to.eql(CFWS_SCORE_CATEGORY.LITTLE_LOWER)
      })
    })

    describe('when called with the worst response', function () {
      it('should return the worst score', function () {
        const score = R.compose(
          view_result('CFWS_SCORE'),
          cfws_calculation
        )(worst_response)

        expect(score).to.eql(CFWS_WORST_SCORE)
      })

      it('should return lot lower interpretation', function () {
        const score = R.compose(
          view_result('CFWS_INTERPRETATION'),
          cfws_calculation
        )(worst_response)

        expect(score).to.eql(CFWS_SCORE_CATEGORY.LOT_LOWER)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined for the score', function () {
        const outcome = cfws_calculation({})
        const result = view_result('CFWS_SCORE')(outcome)

        expect(result).to.eql(undefined)
      })

      it('should return undefined for the interpretation', function () {
        const outcome = cfws_calculation({})
        const result = view_result('CFWS_INTERPRETATION')(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cfws_calculation({
            Q01: "I'm not a number"
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cfws_calculation({
            Q01: -1
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cfws_calculation({
            Q01: 6
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
