/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/faam_test_responses'
import { FAAM_SUBSCALES } from './definition/faam_subscales'
import { faam } from './faam'

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

const faam_calculation = execute_test_calculation(faam)

describe('faam', function () {
  it('faam calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('faam')
  })

  describe('specific_steps_faam_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ADL_Q01',
          'ADL_Q02',
          'ADL_Q03',
          'ADL_Q04',
          'ADL_Q05',
          'ADL_Q06',
          'ADL_Q07',
          'ADL_Q08',
          'ADL_Q09',
          'ADL_Q10',
          'ADL_Q11',
          'ADL_Q12',
          'ADL_Q13',
          'ADL_Q14',
          'ADL_Q15',
          'ADL_Q16',
          'ADL_Q17',
          'ADL_Q18',
          'ADL_Q19',
          'ADL_Q20',
          'ADL_Q21',
          'SPORTS_Q01',
          'SPORTS_Q02',
          'SPORTS_Q03',
          'SPORTS_Q04',
          'SPORTS_Q05',
          'SPORTS_Q06',
          'SPORTS_Q07',
        ].sort()

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale)
        )(FAAM_SUBSCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input ids configured for the "ADL" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'ADL_Q01',
          'ADL_Q02',
          'ADL_Q03',
          'ADL_Q04',
          'ADL_Q05',
          'ADL_Q06',
          'ADL_Q07',
          'ADL_Q08',
          'ADL_Q09',
          'ADL_Q10',
          'ADL_Q11',
          'ADL_Q12',
          'ADL_Q13',
          'ADL_Q14',
          'ADL_Q15',
          'ADL_Q16',
          'ADL_Q17',
          'ADL_Q18',
          'ADL_Q19',
          'ADL_Q20',
          'ADL_Q21',
        ].sort()

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('ADL')(FAAM_SUBSCALES)
        )
      })

      it('should have the expected input ids configured for the "Sports" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'SPORTS_Q01',
          'SPORTS_Q02',
          'SPORTS_Q03',
          'SPORTS_Q04',
          'SPORTS_Q05',
          'SPORTS_Q06',
          'SPORTS_Q07',
        ].sort()

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('SPORTS')(FAAM_SUBSCALES)
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = faam_calculation(worst_response)

      it('should return a score for all subscales (n=2)', function () {
        expect(outcome).to.have.length(2)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = ['ADL', 'SPORTS']

        const extracted_calculation_ids_from_outcome =
          get_result_ids_from_calculation_output(outcome)

        expect(EXPECTED_CALCULATION_IDS).to.eql(
          extracted_calculation_ids_from_outcome
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = faam_calculation({})

        it('should return undefined as the result for "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(undefined)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = faam_calculation(worst_response)

        it('should return the worst score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for the "Sports" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = faam_calculation(median_response)

        it('should return the median score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(MEDIAN_SCORE)
        })

        it('should return the median score for the "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(MEDIAN_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = faam_calculation(best_response)

        it('should return the best score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(BEST_SCORE)
        })

        it('should return the best score for the "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = faam_calculation(random_response)

        it('should return the expected score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          const EXPECTED_SCORE = 58.82

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for the "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          const EXPECTED_SCORE = 60.71

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            faam_calculation({
              ADL_Q01: "I'm not a number",
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            faam_calculation({
              ADL_Q01: -1,
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            faam_calculation({
              ADL_Q01: 5,
            })
          ).to.throw(InvalidInputsError)
        })
      })
    })
  })
})
