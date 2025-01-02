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
import {
  response_with_q7_answered_no_and_indicated_a_little_on_sub_question,
  response_with_q7_answered_no_and_indicated_a_lot_on_sub_question,
  response_with_q7_answered_no_and_indicated_not_at_all_on_sub_question,
  response_with_q7_answered_not_relevant,
  response_with_q7_answered_yes,
} from './__testdata__/dlqi_input_7_possible_combinations_responses'
import {
  max_response,
  min_response,
  min_response_with_not_relevant_answers,
  random_response,
  response_with_more_than_one_missing_item,
  response_with_one_missing_item,
} from './__testdata__/dlqi_responses'
import { DLQI_subscales } from './definition/dlqi_subscales'
import { dlqi } from './dlqi'

const DLQI_MIN_SCORE = 0

const dlqi_calculation = execute_test_calculation(dlqi)

describe('dlqi', function () {
  it('dlqi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('dlqi')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'DLQI_Q01',
        'DLQI_Q02',
        'DLQI_Q03',
        'DLQI_Q04',
        'DLQI_Q05',
        'DLQI_Q06',
        'DLQI_Q07',
        'DLQI_Q07_SUB',
        'DLQI_Q08',
        'DLQI_Q09',
        'DLQI_Q10',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(DLQI_subscales)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Symptoms and feelings" subscale', function () {
      const EXPECTED_INPUT_IDS = ['DLQI_Q01', 'DLQI_Q02'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('SYMPTOMS_AND_FEELING')(
          DLQI_subscales,
        ),
      )
    })

    it('should have the expected input idss configured for the "Daily activities" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DLQI_Q03', 'DLQI_Q04'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('DAILY_ACTIVITIES')(DLQI_subscales),
      )
    })

    it('should have the expected input idss configured for the "Leisure" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DLQI_Q05', 'DLQI_Q06'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('LEISURE')(DLQI_subscales),
      )
    })

    it('should have the expected input idss configured for the "Work and school" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DLQI_Q07', 'DLQI_Q07_SUB'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('WORK_AND_SCHOOL')(DLQI_subscales),
      )
    })

    it('should have the expected input idss configured for the "Personal relationships" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DLQI_Q08', 'DLQI_Q09'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PERSONAL_RELATIONSHIPS')(
          DLQI_subscales,
        ),
      )
    })

    it('should have the expected input idss configured for the "Treatment" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DLQI_Q10'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('TREATMENT')(DLQI_subscales),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = dlqi_calculation(random_response)

    it('should return results with length of 7', function () {
      expect(outcome).toHaveLength(Of(7)
    })

    it('should return results with expected scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'SYMPTOMS_AND_FEELING',
        'DAILY_ACTIVITIES',
        'LEISURE',
        'WORK_AND_SCHOOL',
        'PERSONAL_RELATIONSHIPS',
        'TREATMENT',
        'TOTAL',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('a score is only calculated when at least one question per subscale is answered', function () {
    describe('response with more than one missing item', function () {
      const outcome = dlqi_calculation(response_with_more_than_one_missing_item)

      it('should return the expected score for the "Symptoms and feelings" subscale', function () {
        const subscale_score = view_result('SYMPTOMS_AND_FEELING')(outcome)
        const EXPECTED_SCORE = 6

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Daily activities" subscale', function () {
        const subscale_score = view_result('DAILY_ACTIVITIES')(outcome)
        const EXPECTED_SCORE = 6

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })

      it('should return MISSING_MESSAGE for the "Leisure" subscale', function () {
        const subscale_score = view_result('LEISURE')(outcome)
        expect(subscale_score).toEqual(undefined)
      })

      it('should return MISSING_MESSAGEfor the "Work and school" subscale', function () {
        const subscale_score = view_result('WORK_AND_SCHOOL')(outcome)
        expect(subscale_score).toEqual(undefined)
      })

      it('should return MISSING_MESSAGE for the "Personal relationships" subscale', function () {
        const subscale_score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        expect(subscale_score).toEqual(undefined)
      })

      it('should return MISSING_MESSAGE for the "Treatment" subscale', function () {
        const subscale_score = view_result('TREATMENT')(outcome)
        expect(subscale_score).toEqual(undefined)
      })

      it('should return MISSING_MESSAGE for the total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        expect(subscale_score).toEqual(undefined)
      })
    })

    describe('response with one missing item (question in "Treatment" subscale unanswered)', function () {
      const outcome = dlqi_calculation(response_with_one_missing_item)

      it('should return the expected score for the "Symptoms and feelings" subscale', function () {
        const subscale_score = view_result('SYMPTOMS_AND_FEELING')(outcome)
        const EXPECTED_SCORE = 6

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Daily activities" subscale', function () {
        const subscale_score = view_result('DAILY_ACTIVITIES')(outcome)
        const EXPECTED_SCORE = 6

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Leisure" subscale', function () {
        const subscale_score = view_result('LEISURE')(outcome)
        const EXPECTED_SCORE = 6

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Work and school" subscale', function () {
        const subscale_score = view_result('WORK_AND_SCHOOL')(outcome)
        const EXPECTED_SCORE = 3

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Personal relationships" subscale', function () {
        const subscale_score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        const EXPECTED_SCORE = 6

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })

      it('should return MISSING_MESSAGE for the "Treatment" subscale', function () {
        const subscale_score = view_result('TREATMENT')(outcome)
        expect(subscale_score).toEqual(undefined)
      })

      it('should return the expected total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        const EXPECTED_SCORE = 27

        expect(subscale_score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('validation for the work and school school subscale', function () {
    describe('when DLQI_Q07 is answered with "yes" (3) and there is also an answer passed for DLQI_Q07_SUB', function () {
      it('should throw an error', function () {
        expect(() =>
          dlqi_calculation({
            DLQI_Q07: 3,
            DLQI_Q07_SUB: 2,
          }),
        ).toThrow(
          'Invalid calculation input for DLQI: Question 7 (DLQI_Q07) was answered with "yes" (3) or "not relevant" (999) and in that case (DLQI_Q07_SUB) should not be answered.',
        )
      })
    })

    describe('when DLQI_Q07 is answered with "not relevant" (999) and there is also an answer passed for DLQI_Q07_SUB', function () {
      it('should throw an error', function () {
        expect(() =>
          dlqi_calculation({
            DLQI_Q07: 999,
            DLQI_Q07_SUB: 2,
          }),
        ).toThrow(
          'Invalid calculation input for DLQI: Question 7 (DLQI_Q07) was answered with "yes" (3) or "not relevant" (999) and in that case (DLQI_Q07_SUB) should not be answered.',
        )
      })
    })

    describe('when DLQI_Q07 is answered with "not relevant"', function () {
      it('should return the expected score for the "Work and school" subscale', function () {
        const work_and_school_score = R.compose(
          view_result('WORK_AND_SCHOOL'),
          dlqi_calculation,
        )(response_with_q7_answered_not_relevant)

        const EXPECTED_SCORE = 0

        expect(work_and_school_score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when DLQI_Q07 is answered with "yes"', function () {
      it('should return the expected score for the "Work and school" subscale', function () {
        const work_and_school_score = R.compose(
          view_result('WORK_AND_SCHOOL'),
          dlqi_calculation,
        )(response_with_q7_answered_yes)

        const EXPECTED_SCORE = 3

        expect(work_and_school_score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when DLQI_Q07 is answered with "no" and the sub question with "a lot"', function () {
      it('should return the expected score for the "Work and school" subscale', function () {
        const work_and_school_score = R.compose(
          view_result('WORK_AND_SCHOOL'),
          dlqi_calculation,
        )(response_with_q7_answered_no_and_indicated_a_lot_on_sub_question)

        const EXPECTED_SCORE = 2

        expect(work_and_school_score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when DLQI_Q07 is answered with "no" and the sub question with "a little"', function () {
      it('should return the expected score for the "Work and school" subscale', function () {
        const work_and_school_score = R.compose(
          view_result('WORK_AND_SCHOOL'),
          dlqi_calculation,
        )(response_with_q7_answered_no_and_indicated_a_little_on_sub_question)

        const EXPECTED_SCORE = 1

        expect(work_and_school_score).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when DLQI_Q07 is answered with "no" and the sub question with "not at all"', function () {
      it('should return the expected score for the "Work and school" subscale', function () {
        const work_and_school_score = R.compose(
          view_result('WORK_AND_SCHOOL'),
          dlqi_calculation,
        )(response_with_q7_answered_no_and_indicated_not_at_all_on_sub_question)

        const EXPECTED_SCORE = 0

        expect(work_and_school_score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with minimum response', function () {
      const outcome = dlqi_calculation(min_response)

      it('should return the minimum score for the "Symptoms and feelings" subscale', function () {
        const subscale_score = view_result('SYMPTOMS_AND_FEELING')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Daily activities" subscale', function () {
        const subscale_score = view_result('DAILY_ACTIVITIES')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Leisure" subscale', function () {
        const subscale_score = view_result('LEISURE')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score the "Work and school" subscale', function () {
        const subscale_score = view_result('WORK_AND_SCHOOL')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Personal relationships" subscale', function () {
        const subscale_score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Treatment" subscale', function () {
        const subscale_score = view_result('TREATMENT')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })
    })

    describe('when called with a minimum response (due to "not relevant" answers)', function () {
      const outcome = dlqi_calculation(min_response_with_not_relevant_answers)

      it('should return the minimum score for the "Symptoms and feelings" subscale', function () {
        const subscale_score = view_result('SYMPTOMS_AND_FEELING')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Daily activities" subscale', function () {
        const subscale_score = view_result('DAILY_ACTIVITIES')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Leisure" subscale', function () {
        const subscale_score = view_result('LEISURE')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score the "Work and school" subscale', function () {
        const subscale_score = view_result('WORK_AND_SCHOOL')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Personal relationships" subscale', function () {
        const subscale_score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum score for the "Treatment" subscale', function () {
        const subscale_score = view_result('TREATMENT')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })

      it('should return the minimum total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        expect(subscale_score).toEqual(DLQI_MIN_SCORE)
      })
    })

    describe('when called with maximum response', function () {
      const outcome = dlqi_calculation(max_response)

      it('should return the maximum score for the "Symptoms and feelings" subscale', function () {
        const subscale_score = view_result('SYMPTOMS_AND_FEELING')(outcome)
        const MAX_SCORE = 6

        expect(subscale_score).toEqual(MAX_SCORE)
      })

      it('should return the maximum score for the "Daily activities" subscale', function () {
        const subscale_score = view_result('DAILY_ACTIVITIES')(outcome)
        const MAX_SCORE = 6

        expect(subscale_score).toEqual(MAX_SCORE)
      })

      it('should return the maximum score for the "Leisure" subscale', function () {
        const subscale_score = view_result('LEISURE')(outcome)
        const MAX_SCORE = 6

        expect(subscale_score).toEqual(MAX_SCORE)
      })

      it('should return the maximum score the "Work and school" subscale', function () {
        const subscale_score = view_result('WORK_AND_SCHOOL')(outcome)
        const MAX_SCORE = 3

        expect(subscale_score).toEqual(MAX_SCORE)
      })

      it('should return the maximum score for the "Personal relationships" subscale', function () {
        const subscale_score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        const MAX_SCORE = 6

        expect(subscale_score).toEqual(MAX_SCORE)
      })

      it('should return the maximum score for the "Treatment" subscale', function () {
        const subscale_score = view_result('TREATMENT')(outcome)
        const MAX_SCORE = 3

        expect(subscale_score).toEqual(MAX_SCORE)
      })

      it('should return the maximum total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        const MAX_SCORE = 30

        expect(subscale_score).toEqual(MAX_SCORE)
      })
    })

    describe('when a random response is passed ', function () {
      const outcome = dlqi_calculation(random_response)

      it('should return the expected score for the "Symptoms and feelings" subscale', function () {
        const subscale_score = view_result('SYMPTOMS_AND_FEELING')(outcome)
        const EXPECTED_SYMPTOMS_AND_FEELING_SCORE = 5

        expect(subscale_score).toEqual(EXPECTED_SYMPTOMS_AND_FEELING_SCORE)
      })

      it('should return the expected score for the "Daily activities" subscale', function () {
        const subscale_score = view_result('DAILY_ACTIVITIES')(outcome)
        const EXPECTED_DAILY_ACTIVITIES_SCORE = 2

        expect(subscale_score).toEqual(EXPECTED_DAILY_ACTIVITIES_SCORE)
      })

      it('should return the expected score for the "Leisure" subscale', function () {
        const subscale_score = view_result('LEISURE')(outcome)
        const EXPECTED_LEISURE_SCORE = 6

        expect(subscale_score).toEqual(EXPECTED_LEISURE_SCORE)
      })

      it('should return the expected score the "Work and school" subscale', function () {
        const subscale_score = view_result('WORK_AND_SCHOOL')(outcome)
        const EXPECTED_WORK_AND_SCHOOL_SCORE = 1

        expect(subscale_score).toEqual(EXPECTED_WORK_AND_SCHOOL_SCORE)
      })

      it('should return the expected score for the "Personal relationships" subscale', function () {
        const subscale_score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        const EXPECTED_PERSONAL_RELATIONSHIPS_SCORE = 1

        expect(subscale_score).toEqual(EXPECTED_PERSONAL_RELATIONSHIPS_SCORE)
      })

      it('should return the expected score for the "Treatment" subscale', function () {
        const subscale_score = view_result('TREATMENT')(outcome)
        const EXPECTED_TREATMENT_SCORE = 2
        expect(subscale_score).toEqual(EXPECTED_TREATMENT_SCORE)
      })

      it('should return the expected total score', function () {
        const subscale_score = view_result('TOTAL')(outcome)
        const EXPECTED_TOTAL_SCORE = 17

        expect(subscale_score).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dlqi_calculation({
            DLQI_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dlqi_calculation({
            DLQI_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dlqi_calculation({
            DLQI_Q01: 11,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
