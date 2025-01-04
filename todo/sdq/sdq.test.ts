import { expect } from 'chai'
import R from 'ramda'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../src/calculation_suite/calculations/shared_functions'
import { SDQ_INTERPRETATION_SCALE_IDS } from './__testdata__/sdq_interpretation_scale_ids'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sdq_test_responses'
import { SDQ_SUBSCALES } from './definition/sdq_subscales'
import { sdq } from './sdq'

const IMPACT_SCALE_IDS = [
  'IMPACT_PARENT_REPORTED',
  'IMPACT_TEACHER_REPORTED',
  'IMPACT_SELF_REPORTED',
]

const sdq_calculation = execute_test_calculation(sdq)

describe('sdq', function () {
  it('sdq calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('sdq')
  })

  describe('specific_steps_sdq_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'EMOTIONAL_PROBLEMS_Q01',
          'EMOTIONAL_PROBLEMS_Q02',
          'EMOTIONAL_PROBLEMS_Q03',
          'EMOTIONAL_PROBLEMS_Q04',
          'EMOTIONAL_PROBLEMS_Q05',
          'CONDUCT_PROBLEMS_Q01',
          'CONDUCT_PROBLEMS_Q02',
          'CONDUCT_PROBLEMS_Q03',
          'CONDUCT_PROBLEMS_Q04',
          'CONDUCT_PROBLEMS_Q05',
          'HYPERACTIVITY_Q01',
          'HYPERACTIVITY_Q02',
          'HYPERACTIVITY_Q03',
          'HYPERACTIVITY_Q04',
          'HYPERACTIVITY_Q05',
          'PEER_PROBLEMS_Q01',
          'PEER_PROBLEMS_Q02',
          'PEER_PROBLEMS_Q03',
          'PEER_PROBLEMS_Q04',
          'PEER_PROBLEMS_Q05',
          'PROSOCIAL_Q01',
          'PROSOCIAL_Q02',
          'PROSOCIAL_Q03',
          'PROSOCIAL_Q04',
          'PROSOCIAL_Q05',
          'IMPACT_PARENT_Q01',
          'IMPACT_PARENT_Q02',
          'IMPACT_PARENT_Q03',
          'IMPACT_PARENT_Q04',
          'IMPACT_PARENT_Q05',
          'IMPACT_TEACHER_Q01',
          'IMPACT_TEACHER_Q02',
          'IMPACT_TEACHER_Q03',
          'IMPACT_SELF_REPORT_Q01',
          'IMPACT_SELF_REPORT_Q02',
          'IMPACT_SELF_REPORT_Q03',
          'IMPACT_SELF_REPORT_Q04',
          'IMPACT_SELF_REPORT_Q05',
        ].sort()

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale),
        )(SDQ_SUBSCALES)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the "Emotional problems" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'EMOTIONAL_PROBLEMS_Q01',
          'EMOTIONAL_PROBLEMS_Q02',
          'EMOTIONAL_PROBLEMS_Q03',
          'EMOTIONAL_PROBLEMS_Q04',
          'EMOTIONAL_PROBLEMS_Q05',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('EMOTIONAL_PROBLEMS')(
            SDQ_SUBSCALES,
          ),
        )
      })

      it('should have the expected input ids configured for the "Conduct problems" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'CONDUCT_PROBLEMS_Q01',
          'CONDUCT_PROBLEMS_Q02',
          'CONDUCT_PROBLEMS_Q03',
          'CONDUCT_PROBLEMS_Q04',
          'CONDUCT_PROBLEMS_Q05',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('CONDUCT_PROBLEMS')(
            SDQ_SUBSCALES,
          ),
        )
      })

      it('should have the expected input ids configured for the "Hyperactivity" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'HYPERACTIVITY_Q01',
          'HYPERACTIVITY_Q02',
          'HYPERACTIVITY_Q03',
          'HYPERACTIVITY_Q04',
          'HYPERACTIVITY_Q05',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('HYPERACTIVITY')(SDQ_SUBSCALES),
        )
      })

      it('should have the expected input ids configured for the "Peer problems" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'PEER_PROBLEMS_Q01',
          'PEER_PROBLEMS_Q02',
          'PEER_PROBLEMS_Q03',
          'PEER_PROBLEMS_Q04',
          'PEER_PROBLEMS_Q05',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('PEER_PROBLEMS')(SDQ_SUBSCALES),
        )
      })

      it('should have the expected input ids configured for the "Prosocial" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'PROSOCIAL_Q01',
          'PROSOCIAL_Q02',
          'PROSOCIAL_Q03',
          'PROSOCIAL_Q04',
          'PROSOCIAL_Q05',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('PROSOCIAL')(SDQ_SUBSCALES),
        )
      })

      it('should have the expected input ids configured for the "Impact (parent reported)" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'IMPACT_PARENT_Q01',
          'IMPACT_PARENT_Q02',
          'IMPACT_PARENT_Q03',
          'IMPACT_PARENT_Q04',
          'IMPACT_PARENT_Q05',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('IMPACT_PARENT_REPORTED')(
            SDQ_SUBSCALES,
          ),
        )
      })

      it('should have the expected input ids configured for the "Impact (teacher reported)" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'IMPACT_TEACHER_Q01',
          'IMPACT_TEACHER_Q02',
          'IMPACT_TEACHER_Q03',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('IMPACT_TEACHER_REPORTED')(
            SDQ_SUBSCALES,
          ),
        )
      })

      it('should have the expected input ids configured for the "Impact (self reported)" subscale', function () {
        const EXPECTED_INPUTS_IDS = [
          'IMPACT_SELF_REPORT_Q01',
          'IMPACT_SELF_REPORT_Q02',
          'IMPACT_SELF_REPORT_Q03',
          'IMPACT_SELF_REPORT_Q04',
          'IMPACT_SELF_REPORT_Q05',
        ].sort()

        expect(EXPECTED_INPUTS_IDS).toEqual(
          get_input_ids_for_specific_subscale('IMPACT_SELF_REPORTED')(
            SDQ_SUBSCALES,
          ),
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = sdq_calculation(best_response)

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = [
          /** Raw subscale scores */
          'EMOTIONAL_PROBLEMS',
          'CONDUCT_PROBLEMS',
          'HYPERACTIVITY',
          'PEER_PROBLEMS',
          'PROSOCIAL',
          'TOTAL',
          'INTERNALISING',
          'EXTERNALISING',
          ...IMPACT_SCALE_IDS,
          ...SDQ_INTERPRETATION_SCALE_IDS,
        ].sort()

        const extracted_calculation_ids_from_outcome =
          get_result_ids_from_calculation_output(outcome).sort()

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = sdq_calculation({})

        it('should return undefined as the result for "Emotional problems" subscale', function () {
          const score = view_result('EMOTIONAL_PROBLEMS')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Conduct problems" subscale', function () {
          const score = view_result('CONDUCT_PROBLEMS')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Hyperactivity" subscale', function () {
          const score = view_result('HYPERACTIVITY')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Peer problems" subscale', function () {
          const score = view_result('PEER_PROBLEMS')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Prosocial" subscale', function () {
          const score = view_result('PROSOCIAL')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Internalising" subscale', function () {
          const score = view_result('INTERNALISING')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Externalising" subscale', function () {
          const score = view_result('EXTERNALISING')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined for the impact subscales', function () {
          const scores = R.compose(
            R.map(({ result }) => result),
            R.filter(({ subresult_id }) =>
              IMPACT_SCALE_IDS.includes(subresult_id),
            ),
          )(outcome)

          //@ts-expect-error to do
          expect(scores).to.satisfy(arr => arr.every(el => el === undefined))
        })

        it('should return undefined for all interpretation subscales', function () {
          const scores = R.compose(
            R.map(({ score }) => score),
            R.filter(({ subresult_id }) =>
              SDQ_INTERPRETATION_SCALE_IDS.includes(subresult_id),
            ),
          )(outcome)

          //@ts-expect-error to do
          expect(scores).to.satisfy(arr => arr.every(el => el === undefined))
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = sdq_calculation(worst_response)

        it('should return the worst score for "Emotional problems" subscale', function () {
          const score = view_result('EMOTIONAL_PROBLEMS')(outcome)
          const WORST_SCORE = 10

          expect(score).toEqual(WORST_SCORE)
        })

        it('should returnthe worst score for "Conduct problems" subscale', function () {
          const score = view_result('CONDUCT_PROBLEMS')(outcome)
          const WORST_SCORE = 10

          expect(score).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Hyperactivity" subscale', function () {
          const score = view_result('HYPERACTIVITY')(outcome)
          const WORST_SCORE = 10

          expect(score).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Peer problems" subscale', function () {
          const score = view_result('PEER_PROBLEMS')(outcome)
          const WORST_SCORE = 10

          expect(score).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Prosocial" subscale', function () {
          const score = view_result('PROSOCIAL')(outcome)
          const WORST_SCORE = 10

          expect(score).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Internalising" subscale', function () {
          const score = view_result('INTERNALISING')(outcome)
          const WORST_SCORE = 20

          expect(score).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Externalising" subscale', function () {
          const score = view_result('EXTERNALISING')(outcome)
          const WORST_SCORE = 20

          expect(score).toEqual(WORST_SCORE)
        })

        it('should return the worst total score', function () {
          const score = view_result('TOTAL')(outcome)
          const WORST_SCORE = 40

          expect(score).toEqual(WORST_SCORE)
        })

        it('should return the worst score for the impact subscales', function () {
          const impact_score_parent_reported = view_result(
            'IMPACT_PARENT_REPORTED',
          )(outcome)
          const impact_score_teacher_reported = view_result(
            'IMPACT_TEACHER_REPORTED',
          )(outcome)
          const impact_score_self_reported = view_result(
            'IMPACT_SELF_REPORTED',
          )(outcome)

          const WORST_SCORE_IMPACT_PARENT_REPORTED = 10
          const WORST_SCORE_IMPACT_TEACHER_REPORTED = 6
          const WORST_SCORE_IMPACT_SELF_REPORTED = 10

          expect(impact_score_parent_reported).toEqual(
            WORST_SCORE_IMPACT_PARENT_REPORTED,
          )
          expect(impact_score_teacher_reported).toEqual(
            WORST_SCORE_IMPACT_TEACHER_REPORTED,
          )
          expect(impact_score_self_reported).toEqual(
            WORST_SCORE_IMPACT_SELF_REPORTED,
          )
        })
      })

      describe('when a median response is passed', function () {
        const outcome = sdq_calculation(median_response)

        it('should return the median score for "Emotional problems" subscale', function () {
          const score = view_result('EMOTIONAL_PROBLEMS')(outcome)
          const MEDIAN_SCORE = 5

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should returnthe median score for "Conduct problems" subscale', function () {
          const score = view_result('CONDUCT_PROBLEMS')(outcome)
          const MEDIAN_SCORE = 5

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Hyperactivity" subscale', function () {
          const score = view_result('HYPERACTIVITY')(outcome)
          const MEDIAN_SCORE = 5

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Peer problems" subscale', function () {
          const score = view_result('PEER_PROBLEMS')(outcome)
          const MEDIAN_SCORE = 5

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Prosocial" subscale', function () {
          const score = view_result('PROSOCIAL')(outcome)
          const MEDIAN_SCORE = 5

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Internalising" subscale', function () {
          const score = view_result('INTERNALISING')(outcome)
          const MEDIAN_SCORE = 10

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Externalising" subscale', function () {
          const score = view_result('EXTERNALISING')(outcome)
          const MEDIAN_SCORE = 10

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should return the worst total score', function () {
          const score = view_result('TOTAL')(outcome)
          const MEDIAN_SCORE = 20

          expect(score).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for the impact subscales', function () {
          const impact_score_parent_reported = view_result(
            'IMPACT_PARENT_REPORTED',
          )(outcome)
          const impact_score_teacher_reported = view_result(
            'IMPACT_TEACHER_REPORTED',
          )(outcome)
          const impact_score_self_reported = view_result(
            'IMPACT_SELF_REPORTED',
          )(outcome)

          const MEDIAN_SCORE_IMPACT_PARENT_REPORTED = 5
          const MEDIAN_SCORE_IMPACT_TEACHER_REPORTED = 3
          const MEDIAN_SCORE_IMPACT_SELF_REPORTED = 5

          expect(impact_score_parent_reported).toEqual(
            MEDIAN_SCORE_IMPACT_PARENT_REPORTED,
          )
          expect(impact_score_teacher_reported).toEqual(
            MEDIAN_SCORE_IMPACT_TEACHER_REPORTED,
          )
          expect(impact_score_self_reported).toEqual(
            MEDIAN_SCORE_IMPACT_SELF_REPORTED,
          )
        })
      })

      describe('when best response is passed', function () {
        const outcome = sdq_calculation(best_response)

        const BEST_SCORE = 0 // Best score is 0 for all subscales

        it('should return the best score for "Emotional problems" subscale', function () {
          const score = view_result('EMOTIONAL_PROBLEMS')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should returnthe best score for "Conduct problems" subscale', function () {
          const score = view_result('CONDUCT_PROBLEMS')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Hyperactivity" subscale', function () {
          const score = view_result('HYPERACTIVITY')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Peer problems" subscale', function () {
          const score = view_result('PEER_PROBLEMS')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Prosocial" subscale', function () {
          const score = view_result('PROSOCIAL')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Internalising" subscale', function () {
          const score = view_result('INTERNALISING')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Externalising" subscale', function () {
          const score = view_result('EXTERNALISING')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should return the worst total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).toEqual(BEST_SCORE)
        })

        it('should return the best score for the impact subscales', function () {
          const scores = R.compose(
            R.map(({ result }) => result),
            R.filter(({ subresult_id }) =>
              IMPACT_SCALE_IDS.includes(subresult_id),
            ),
          )(outcome)

          //@ts-expect-error to do
          expect(scores).to.satisfy(arr => arr.every(el => el === BEST_SCORE))
        })
      })

      describe('when a random response is passed', function () {
        const outcome = sdq_calculation(random_response)

        it('should return the expected score for "Emotional problems" subscale', function () {
          const score = view_result('EMOTIONAL_PROBLEMS')(outcome)
          const EXPECTED_SCORE = 4

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should returnthe expected score for "Conduct problems" subscale', function () {
          const score = view_result('CONDUCT_PROBLEMS')(outcome)
          const EXPECTED_SCORE = 8

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "Hyperactivity" subscale', function () {
          const score = view_result('HYPERACTIVITY')(outcome)
          const EXPECTED_SCORE = 4

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "Peer problems" subscale', function () {
          const score = view_result('PEER_PROBLEMS')(outcome)
          const EXPECTED_SCORE = 6

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "Prosocial" subscale', function () {
          const score = view_result('PROSOCIAL')(outcome)
          const EXPECTED_SCORE = 4

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "Internalising" subscale', function () {
          const score = view_result('INTERNALISING')(outcome)
          const EXPECTED_SCORE = 10

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "Externalising" subscale', function () {
          const score = view_result('EXTERNALISING')(outcome)
          const EXPECTED_SCORE = 12

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the worst total score', function () {
          const score = view_result('TOTAL')(outcome)
          const EXPECTED_SCORE = 22

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for the impact subscales', function () {
          const impact_score_parent_reported = view_result(
            'IMPACT_PARENT_REPORTED',
          )(outcome)
          const impact_score_teacher_reported = view_result(
            'IMPACT_TEACHER_REPORTED',
          )(outcome)
          const impact_score_self_reported = view_result(
            'IMPACT_SELF_REPORTED',
          )(outcome)

          const EXPECTED_SCORE_IMPACT_PARENT_REPORTED = 2
          const EXPECTED_SCORE_IMPACT_TEACHER_REPORTED = 3
          const EXPECTED_SCORE_IMPACT_SELF_REPORTED = 4

          expect(impact_score_parent_reported).toEqual(
            EXPECTED_SCORE_IMPACT_PARENT_REPORTED,
          )
          expect(impact_score_teacher_reported).toEqual(
            EXPECTED_SCORE_IMPACT_TEACHER_REPORTED,
          )
          expect(impact_score_self_reported).toEqual(
            EXPECTED_SCORE_IMPACT_SELF_REPORTED,
          )
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            sdq_calculation({
              EMOTIONAL_PROBLEMS_Q01: "I'm not a number",
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            sdq_calculation({
              EMOTIONAL_PROBLEMS_Q01: -1,
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            sdq_calculation({
              EMOTIONAL_PROBLEMS_Q01: 5,
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
