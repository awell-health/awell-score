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
} from './__testdata__/hos_test_responses'
import { HOS_SUBSCALES } from './definition/hos_subscales'
import { hos } from './hos'

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

const hos_calculation = execute_test_calculation(hos)

describe('hos', function () {
  it('hos calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('hos')
  })

  describe('specific_steps_hos_calc', function () {
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
          'SQ01',
          'SQ02',
          'SQ03',
          'SQ04',
          'SQ05',
          'SQ06',
          'SQ07',
          'SQ08',
          'SQ09',
        ].sort()

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale)
        )(HOS_SUBSCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input ids configured for the "ADL" subscale', function () {
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
        ].sort()

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('ADL')(HOS_SUBSCALES)
        )
      })

      it('should have the expected input ids configured for the "Sports" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'SQ01',
          'SQ02',
          'SQ03',
          'SQ04',
          'SQ05',
          'SQ06',
          'SQ07',
          'SQ08',
          'SQ09',
        ].sort()

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('SPORTS')(HOS_SUBSCALES)
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = hos_calculation(worst_response)

      it('should return a score for all subscales (n=3) and a total score', function () {
        expect(outcome).to.have.length(3)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = ['ADL', 'SPORTS', 'TOTAL']

        const extracted_calculation_ids_from_outcome =
          get_result_ids_from_calculation_output(outcome)

        expect(EXPECTED_CALCULATION_IDS).to.eql(
          extracted_calculation_ids_from_outcome
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = hos_calculation({})

        it('should return undefined as the result for "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(undefined)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = hos_calculation(worst_response)

        it('should return the worst score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for the "Sports" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return worst total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = hos_calculation(median_response)

        it('should return the median score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(MEDIAN_SCORE)
        })

        it('should return the median score for the "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(MEDIAN_SCORE)
        })

        it('should return median total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(MEDIAN_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = hos_calculation(best_response)

        it('should return the best score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(BEST_SCORE)
        })

        it('should return the best score for the "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          expect(score).to.eql(BEST_SCORE)
        })

        it('should return best total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = hos_calculation(random_response)

        it('should return the expected score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          const EXPECTED_SCORE = 66.67

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for the "SPORTS" subscale', function () {
          const score = view_result('SPORTS')(outcome)
          const EXPECTED_SCORE = 55

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return best total score', function () {
          const score = view_result('TOTAL')(outcome)
          const EXPECTED_SCORE = 63.75

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            hos_calculation({
              Q01: "I'm not a number",
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            hos_calculation({
              Q01: -1,
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            hos_calculation({
              Q01: 5,
            })
          ).to.throw(InvalidInputsError)
        })
      })
    })
  })
})
