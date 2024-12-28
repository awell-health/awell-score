import { expect } from 'chai'
import R from 'ramda'

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
} from './__testdata__/posas_observer_responses'
import { POSAS_OBSERVER_INPUTS } from './definition/posas_observer_inputs'
import { posas_observer } from './posas_observer'

const POSAS_OBSERVER_MIN_SCORE = 6
const POSAS_OBSERVER_MEDIAN_SCORE = 30
const POSAS_OBSERVER_MAX_SCORE = 60

const posas_obsever_calculation = execute_test_calculation(posas_observer)

describe('posas_observer', function () {
  it('posas_observer calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('posas_observer')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'VASCULARISATION',
        'PIGMENTATION',
        'THICKNESS',
        'RELIEF',
        'PLIABILITY',
        'SURFACE_AREA',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(POSAS_OBSERVER_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = posas_obsever_calculation(min_response)

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['POSAS_OBSERVER'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = R.compose(
          view_result(),
          posas_obsever_calculation
        )(min_response)

        expect(outcome).to.eql(POSAS_OBSERVER_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = R.compose(
          view_result(),
          posas_obsever_calculation
        )(median_response)

        expect(outcome).to.eql(POSAS_OBSERVER_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = R.compose(
          view_result(),
          posas_obsever_calculation
        )(max_response)

        expect(outcome).to.eql(POSAS_OBSERVER_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = R.compose(
          view_result(),
          posas_obsever_calculation
        )(random_response)

        const EXPECTED_SCORE = 27

        expect(outcome).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = R.compose(view_result(), posas_obsever_calculation)({})

        expect(outcome).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          posas_obsever_calculation({
            VASCULARISATION: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          posas_obsever_calculation({
            VASCULARISATION: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          posas_obsever_calculation({
            VASCULARISATION: 11,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
