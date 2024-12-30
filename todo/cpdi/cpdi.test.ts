import { expect } from 'chai'
import { compose } from 'ramda'

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
} from './__testdata__/cpdi_test_responses'
// eslint-disable-next-line sort-imports
import { cpdi, CPDICalculationName } from './cpdi'
import { CPDI_INPUTS } from './definition/cpdi_inputs'

const CPDI_MIN_SCORE = 0
const CPDI_MEDIAN_SCORE = 50
const CPDI_MAX_SCORE = 100

const cpid_calculation = execute_test_calculation(cpdi)

describe('cpdi', function () {
  it('cpdi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('cpdi')
  })

  describe('basic assumptions', function () {
    const outcome = cpid_calculation(min_response)

    it('should return 1 calculation result', function () {
      expect(outcome).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['CPDI']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'CPDI_Q1',
          'CPDI_Q2',
          'CPDI_Q3',
          'CPDI_Q4',
          'CPDI_Q5',
          'CPDI_Q6',
          'CPDI_Q7',
          'CPDI_Q8',
          'CPDI_Q9',
          'CPDI_Q10',
          'CPDI_Q11',
          'CPDI_Q12',
          'CPDI_Q13',
          'CPDI_Q14',
          'CPDI_Q15',
          'CPDI_Q16',
          'CPDI_Q17',
          'CPDI_Q18',
          'CPDI_Q19',
          'CPDI_Q20',
          'CPDI_Q21',
          'CPDI_Q22',
          'CPDI_Q23',
          'CPDI_Q24',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(CPDI_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cpid_calculation({
            CPDI_Q1: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with a response where there are answers out of the expected [0, 4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cpid_calculation({
            CPDI_Q1: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          cpid_calculation({
            CPDI_Q1: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when called with an empty response', function () {
      it('should return undefined result as score', function () {
        const score = compose(
          view_result(CPDICalculationName),
          cpid_calculation,
        )({})

        expect(score).toEqual(undefined)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = compose(
          view_result(CPDICalculationName),
          cpid_calculation,
        )(min_response)

        expect(score).toEqual(CPDI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = compose(
          view_result(CPDICalculationName),
          cpid_calculation,
        )(median_response)

        expect(score).toEqual(CPDI_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = compose(
          view_result(CPDICalculationName),
          cpid_calculation,
        )(max_response)

        expect(score).toEqual(CPDI_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = compose(
          view_result(CPDICalculationName),
          cpid_calculation,
        )(random_response)

        const EXPECTED_SCORE = 48

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
