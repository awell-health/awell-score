import { expect } from 'chai'
import { compose } from 'ramda'

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
} from './__testdata__/modified_caregiver_strain_index_test_responses'
import { MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS } from './definition/modified_caregiver_strain_index_inputs'
import {
  modified_caregiver_strain_index,
  // eslint-disable-next-line sort-imports
  MODIFIED_CAREGIVER_STRAIN_INDEX_ID,
} from './modified_caregiver_strain_index'

const CSI_MIN_SCORE = 0
const CSI_MEDIAN_SCORE = 13
const CSI_MAX_SCORE = 26

const modified_caregiver_strain_index_calculation = execute_test_calculation(
  modified_caregiver_strain_index,
)

describe('modified_caregiver_strain_index', function () {
  it('modified_caregiver_strain_index calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('modified_caregiver_strain_index')
  })

  describe('basic assumption', function () {
    describe('the score includes the correct input fields', function () {
      it('should use the correct input fields', function () {
        const EXPECTED_CALCULATION_INPUT_IDS = [
          'CSI_Q01',
          'CSI_Q02',
          'CSI_Q03',
          'CSI_Q04',
          'CSI_Q05',
          'CSI_Q06',
          'CSI_Q07',
          'CSI_Q08',
          'CSI_Q09',
          'CSI_Q10',
          'CSI_Q11',
          'CSI_Q12',
          'CSI_Q13',
        ]

        const CONFIGURED_CALCULATION_INPUT_IDS =
          get_input_ids_from_calculation_blueprint(
            MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS,
          )

        expect(EXPECTED_CALCULATION_INPUT_IDS).to.have.members(
          CONFIGURED_CALCULATION_INPUT_IDS,
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = modified_caregiver_strain_index_calculation(min_response)

      it('should calculate a single score', function () {
        expect(outcome).toHaveLength(1)
      })

      it('should have the correct calculation id', function () {
        const EXPECTED_CALCULATION_ID = ['MODIFIED_CAREGIVER_STRAIN_INDEX']
        const configured_calculation_id =
          get_result_ids_from_calculation_output(outcome)

        expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
      })
    })
  })

  describe('score calculations', function () {
    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when a minimum response is passed', function () {
        it('should return the minimum score', function () {
          const score = compose(
            view_result(MODIFIED_CAREGIVER_STRAIN_INDEX_ID),
            modified_caregiver_strain_index_calculation,
          )(min_response)

          expect(score).toEqual(CSI_MIN_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        it('should return the median score', function () {
          const score = compose(
            view_result(MODIFIED_CAREGIVER_STRAIN_INDEX_ID),
            modified_caregiver_strain_index_calculation,
          )(median_response)

          expect(score).toEqual(CSI_MEDIAN_SCORE)
        })
      })

      describe('when a maximum response is passed', function () {
        it('should return the maximum score', function () {
          const score = compose(
            view_result(MODIFIED_CAREGIVER_STRAIN_INDEX_ID),
            modified_caregiver_strain_index_calculation,
          )(max_response)

          expect(score).toEqual(CSI_MAX_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        it('should return the expected score', function () {
          const score = compose(
            view_result(MODIFIED_CAREGIVER_STRAIN_INDEX_ID),
            modified_caregiver_strain_index_calculation,
          )(random_response)

          const EXPECTED_SCORE = 7
          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
    })
  })

  describe('validations', function () {
    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        it('should return undefined result & missing status', function () {
          const score = compose(
            view_result(MODIFIED_CAREGIVER_STRAIN_INDEX_ID),
            modified_caregiver_strain_index_calculation,
          )({})

          expect(score).toEqual(undefined)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            modified_caregiver_strain_index_calculation({
              CSI_Q01: "I'm not a number",
            }),
          ).toThrow(InvalidInputsError)
        })
      })

      describe('when an answer is below 0 (i.e. not 0 = no or 1 = yes)', function () {
        it('should throw an error', function () {
          expect(() =>
            modified_caregiver_strain_index_calculation({
              CSI_Q01: -1,
            }),
          ).toThrow(InvalidInputsError)
        })
      })

      describe('when an answer is above 1 (i.e. not 0 = no or 1 = yes)', function () {
        it('should return throw an error', function () {
          expect(() =>
            modified_caregiver_strain_index_calculation({
              CSI_Q01: 3,
            }),
          ).toThrow(InvalidInputsError)
        })
      })
    })
  })
})
