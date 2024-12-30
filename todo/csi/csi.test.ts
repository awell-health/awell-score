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
} from './__testdata__/csi_responses'
// eslint-disable-next-line sort-imports
import { csi, CSICalculationID } from './csi'
import { CSI_INPUTS } from './definition/csi_inputs'

const MINIMUM_RESULT = 0
const MEDIAN_RESULT = 50
const MAX_RESULT = 100

const csi_calculation = execute_test_calculation(csi)

describe('csi', function () {
  it('csi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('csi')
  })

  describe('basic Assumption', function () {
    const outcome = csi_calculation(random_response)

    it('should return 1 calculation result', function () {
      const AMOUNT_OF_RESULTS = 1
      expect(outcome).toHaveLength(AMOUNT_OF_RESULTS)
    })

    it('should return a result with correct calculation name', function () {
      const EXPECTED_CALCULATION_ID = ['csi']
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validations', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
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
          'Q18',
          'Q19',
          'Q20',
          'Q21',
          'Q22',
          'Q23',
          'Q24',
          'Q25',
        ]
        const configured_calculation_input_ids =
          get_input_ids_from_calculation_blueprint(CSI_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
      })
    })

    describe('when called with a response with answers out of the expected [0,4] range', function () {
      describe('when an answer is not a number', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            csi_calculation({
              Q01: "I'm not a number",
            }),
          ).toThrow(InvalidInputsError)
        })
      })
      describe('when an answer is below the expected [0,4] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            csi_calculation({
              Q01: -1,
            }),
          ).toThrow(InvalidInputsError)
        })
      })

      describe('when an answer is above the expected [0,4] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            csi_calculation({
              Q01: 5,
            }),
          ).toThrow(InvalidInputsError)
        })
      })

      describe('When the response is empty', function () {
        it('should return MISSING MESSAGE score', function () {
          const score = R.compose(
            view_result(CSICalculationID),
            csi_calculation,
          )({})
          expect(score).toEqual(undefined)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with random response', function () {
      it('should return the expected result', function () {
        const outcome = csi_calculation(random_response)
        const score = R.compose(view_result(CSICalculationID))(outcome)
        const EXPECTED_SCORE = 49

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with minimum response', function () {
      it('should return the minimum result', function () {
        const outcome = csi_calculation(min_response)
        const score = R.compose(view_result(CSICalculationID))(outcome)

        const EXPECTED_SCORE = MINIMUM_RESULT

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with median response', function () {
      it('should return the median result', function () {
        const outcome = csi_calculation(median_response)
        const score = R.compose(view_result(CSICalculationID))(outcome)

        const EXPECTED_SCORE = MEDIAN_RESULT

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with maximum response', function () {
      it('should return the maximum result', function () {
        const outcome = csi_calculation(max_response)
        const score = R.compose(view_result(CSICalculationID))(outcome)

        const EXPECTED_SCORE = MAX_RESULT

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
