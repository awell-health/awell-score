import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { view_status } from '../../../helper_functions/view_status'
import { CALCULATED_STATUS, MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/cms_test_responses'
import { constant_murley_score } from './constant_murley_score'
import { CMS_SUBSCALES } from './definition/constant_murley_scales'

const BEST_SCORES = {
  PAIN_SUBSCALE: 15,
  ADL_SUBSCALE: 20,
  MOBILITY_SUBSCALE: 40,
  STRENGTH_SUBSCALE: 25,
  TOTAL: 100,
}

const MEDIAN_SCORES = {
  PAIN_SUBSCALE: 7,
  ADL_SUBSCALE: 10,
  MOBILITY_SUBSCALE: 20,
  STRENGTH_SUBSCALE: 13,
  TOTAL: 50,
}

const WORST_SCORES = {
  PAIN_SUBSCALE: 0,
  ADL_SUBSCALE: 0,
  MOBILITY_SUBSCALE: 0,
  STRENGTH_SUBSCALE: 0,
  TOTAL: 0,
}

const cms_calculation = execute_test_calculation(constant_murley_score)

describe('constant_murley_score_orthotoolkit', function () {
  it('constant_murley_score_orthotoolkit calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('constant_murley_score_orthotoolkit')
  })

  describe('specific_steps_cms_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_PAIN_SCORE',
          'Q02_SLEEP_SCORE',
          'Q03_WORK_ADL_SCORE',
          'Q04_SPORTS_HOBBY_SCORE',
          'Q05_ADL_FUNCTIONING_SCORE',
          'Q06_FLEXION_ROM',
          'Q07_ABDUCTION_ROM',
          'Q08_ENDOROTATION_ROM',
          'Q09_EXOROTATION_ROM',
          'Q10_ATTEMPT_1',
          'Q11_ATTEMPT_2',
          'Q12_ATTEMPT_3',
        ].sort()

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale)
        )(CMS_SUBSCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input ids configured for the "Pain" subscale', function () {
        const EXPECTED_INPUT_IDS = ['Q01_PAIN_SCORE']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('PAIN')(CMS_SUBSCALES)
        )
      })

      it('should have the expected input ids configured for the "ADL" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'Q02_SLEEP_SCORE',
          'Q03_WORK_ADL_SCORE',
          'Q04_SPORTS_HOBBY_SCORE',
          'Q05_ADL_FUNCTIONING_SCORE',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('ADL')(CMS_SUBSCALES).sort()
        )
      })

      it('should have the expected input ids configured for the "Mobility" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'Q06_FLEXION_ROM',
          'Q07_ABDUCTION_ROM',
          'Q08_ENDOROTATION_ROM',
          'Q09_EXOROTATION_ROM',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('MOBILITY')(CMS_SUBSCALES)
        )
      })

      it('should have the expected input ids configured for the "Strength" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'Q10_ATTEMPT_1',
          'Q11_ATTEMPT_2',
          'Q12_ATTEMPT_3',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('STRENGTH')(CMS_SUBSCALES)
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = cms_calculation(worst_response)

      it('should return 5 calculations results', function () {
        expect(outcome).to.have.length(5)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = [
          'PAIN',
          'ADL',
          'MOBILITY',
          'STRENGTH',
          'TS',
        ]

        const extracted_calculation_ids_from_outcome =
          get_result_ids_from_calculation_output(outcome)

        expect(EXPECTED_CALCULATION_IDS).to.eql(
          extracted_calculation_ids_from_outcome
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = cms_calculation({})

        it('should return undefined result and missing status for "Pain" subscale', function () {
          const score = view_result('PAIN')(outcome)
          const status = view_status('PAIN')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return undefined result and missing status for "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          const status = view_status('ADL')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return a score of 1 and calculated status for "Mobility" subscale', function () {
          const score = view_result('MOBILITY')(outcome)
          const status = view_status('MOBILITY')(outcome)

          expect(score).to.eql(0)
          expect(status).to.eql(CALCULATED_STATUS)
        })

        it('should return undefiend result and missing status for "Strength" subscale', function () {
          const score = view_result('STRENGTH')(outcome)
          const status = view_status('STRENGTH')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return a total score of 1 and calculated status for the total score', function () {
          const score = view_result('TS')(outcome)
          const status = view_status('TS')(outcome)

          expect(score).to.eql(0)
          expect(status).to.eql(CALCULATED_STATUS)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = cms_calculation(worst_response)

        it('should return the worst score for the "Pain" subscale', function () {
          const score = view_result('PAIN')(outcome)
          expect(score).to.eql(WORST_SCORES.PAIN_SUBSCALE)
        })

        it('should return the worst score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(WORST_SCORES.ADL_SUBSCALE)
        })

        it('should return the worst score for the "Mobility" subscale', function () {
          const score = view_result('MOBILITY')(outcome)
          expect(score).to.eql(WORST_SCORES.MOBILITY_SUBSCALE)
        })

        it('should return the worst score for the "Strength" subscale', function () {
          const score = view_result('STRENGTH')(outcome)
          expect(score).to.eql(WORST_SCORES.STRENGTH_SUBSCALE)
        })

        it('should return the worst total score', function () {
          const score = view_result('TS')(outcome)
          expect(score).to.eql(WORST_SCORES.TOTAL)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = cms_calculation(median_response)

        it('should return the median score for the "Pain" subscale', function () {
          const score = view_result('PAIN')(outcome)
          expect(score).to.eql(MEDIAN_SCORES.PAIN_SUBSCALE)
        })

        it('should return the median score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(MEDIAN_SCORES.ADL_SUBSCALE)
        })

        it('should return the median score for the "Mobility" subscale', function () {
          const score = view_result('MOBILITY')(outcome)
          expect(score).to.eql(MEDIAN_SCORES.MOBILITY_SUBSCALE)
        })

        it('should return the median score for the "Strength" subscale', function () {
          const score = view_result('STRENGTH')(outcome)
          expect(score).to.eql(MEDIAN_SCORES.STRENGTH_SUBSCALE)
        })

        it('should return the median total score', function () {
          const score = view_result('TS')(outcome)
          expect(score).to.eql(MEDIAN_SCORES.TOTAL)
        })
      })

      describe('when best response is passed', function () {
        const outcome = cms_calculation(best_response)

        it('should return the best score for the "Pain" subscale', function () {
          const score = view_result('PAIN')(outcome)
          expect(score).to.eql(BEST_SCORES.PAIN_SUBSCALE)
        })

        it('should return the best score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          expect(score).to.eql(BEST_SCORES.ADL_SUBSCALE)
        })

        it('should return the best score for the "Mobility" subscale', function () {
          const score = view_result('MOBILITY')(outcome)
          expect(score).to.eql(BEST_SCORES.MOBILITY_SUBSCALE)
        })

        it('should return the best score for the "Strength" subscale', function () {
          const score = view_result('STRENGTH')(outcome)
          expect(score).to.eql(BEST_SCORES.STRENGTH_SUBSCALE)
        })

        it('should return the best total score', function () {
          const score = view_result('TS')(outcome)
          expect(score).to.eql(BEST_SCORES.TOTAL)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = cms_calculation(random_response)

        it('should return the expected score for the "Pain" subscale', function () {
          const score = view_result('PAIN')(outcome)
          const EXPECTED_SCORE = 11

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for the "ADL" subscale', function () {
          const score = view_result('ADL')(outcome)
          const EXPECTED_SCORE = 8

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for the "Mobility" subscale', function () {
          const score = view_result('MOBILITY')(outcome)
          const EXPECTED_SCORE = 12

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for the "Strength" subscale', function () {
          const score = view_result('STRENGTH')(outcome)
          const EXPECTED_SCORE = 25

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected total score', function () {
          const score = view_result('TS')(outcome)
          const EXPECTED_SCORE = 56

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            cms_calculation({
              Q01_PAIN_SCORE: "I'm not a number",
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            cms_calculation({
              Q01_PAIN_SCORE: -1,
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            cms_calculation({
              Q01_PAIN_SCORE: 16,
            })
          ).to.throw(InvalidInputsError)
        })
      })
    })
  })
})
