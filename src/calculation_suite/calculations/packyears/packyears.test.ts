import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import { PACKYEARS_INPUTS } from './definition/packyears_inputs'
import { packyears } from './packyears'

const packyears_calculation = execute_test_calculation(packyears)

describe('packyears', function () {
  it('packyears calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('packyears')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'cigarettes_per_day',
        'number_years_smoking',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(PACKYEARS_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = packyears_calculation({
      cigarettes_per_day: 1,
      number_years_smoking: 1,
    })

    it('should calculate a single score', function () {
      expect(outcome).to.have.length(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(['PACKYEARS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when amount of packs per day and number of years smoking is passed', function () {
      it('should correctly multiply both variables to get Packyears', function () {
        const outcome = R.compose(
          view_result(),
          packyears_calculation
        )({
          cigarettes_per_day: 15,
          number_years_smoking: 10,
        })

        expect(outcome).to.eql(7.5)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return undefined as the result', function () {
        const outcome = R.compose(view_result(), packyears_calculation)({})

        expect(outcome).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          packyears_calculation({
            cigarettes_per_day: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [0, 4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          packyears_calculation({
            cigarettes_per_day: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [0, 4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          packyears_calculation({
            cigarettes_per_day: 200,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
