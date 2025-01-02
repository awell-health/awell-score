import { expect } from 'chai'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  highest_physical_activity_response,
  lowest_physical_activity_response,
  median_physical_activity_response,
  random_physical_activity_response,
} from './__testdata__/paq_c_test_responses'
import { PAQ_Q_INPUTS } from './definition/paq_c_inputs'
import { paq_c } from './paq_c'

const BEST_PHYSCIAL_ACTIVITY_SCORE = 5
const MEDIAN_PHYSCIAL_ACTIVITY_SCORE = 3
const WORST_PHYSCIAL_ACTIVITY_SCORE = 1

const paq_c_calculation = execute_test_calculation(paq_c)

describe('paq_c', function () {
  it('paq_c calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('paq_c')
  })

  describe('specific_steps_paq_c_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ITEM_1_ACTIVITY_01',
          'ITEM_1_ACTIVITY_02',
          'ITEM_1_ACTIVITY_03',
          'ITEM_1_ACTIVITY_04',
          'ITEM_1_ACTIVITY_05',
          'ITEM_1_ACTIVITY_06',
          'ITEM_1_ACTIVITY_07',
          'ITEM_1_ACTIVITY_08',
          'ITEM_1_ACTIVITY_09',
          'ITEM_1_ACTIVITY_10',
          'ITEM_1_ACTIVITY_11',
          'ITEM_1_ACTIVITY_12',
          'ITEM_1_ACTIVITY_13',
          'ITEM_1_ACTIVITY_14',
          'ITEM_1_ACTIVITY_15',
          'ITEM_1_ACTIVITY_16',
          'ITEM_1_ACTIVITY_17',
          'ITEM_1_ACTIVITY_18',
          'ITEM_1_ACTIVITY_19',
          'ITEM_1_ACTIVITY_20',
          'ITEM_1_ACTIVITY_21',
          'ITEM_1_ACTIVITY_22',
          'ITEM_1_ACTIVITY_23',
          'ITEM_1_ACTIVITY_24',
          'ITEM_1_ACTIVITY_25',
          'ITEM_2',
          'ITEM_3',
          'ITEM_4',
          'ITEM_5',
          'ITEM_6',
          'ITEM_7',
          'ITEM_8',
          'ITEM_9_MONDAY',
          'ITEM_9_TUESDAY',
          'ITEM_9_WEDNESDAY',
          'ITEM_9_THURSDAY',
          'ITEM_9_FRIDAY',
          'ITEM_9_SATURDAY',
          'ITEM_9_SUNDAY',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PAQ_Q_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = paq_c_calculation(lowest_physical_activity_response)

      it('should return an activity for three items and a summary score', function () {
        expect(outcome).toHaveLength(4)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = [
          'ITEM_1_SPARE_TIME_ACTIVITY_SCORE',
          'ITEMS_2_TO_8_ACTIVITY_SCORE',
          'ITEM_9_ACTIVITY_SCORE',
          'ACTIVITY_SUMMARY_SCORE',
        ]

        const extracted_calculation_ids_from_outcome =
          get_result_ids_from_calculation_output(outcome)

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = paq_c_calculation({})

        it('should return undefined as the result for "Spare time activity score (item 1)"', function () {
          const score = view_result('ITEM_1_SPARE_TIME_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Activity score items 2 to 8"', function () {
          const score = view_result('ITEMS_2_TO_8_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "Activity score item 9"', function () {
          const score = view_result('ITEM_9_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(undefined)
        })

        it('should return undefined as the result for "PAQ-C activity summary score"', function () {
          const score = view_result('ACTIVITY_SUMMARY_SCORE')(outcome)
          expect(score).toEqual(undefined)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when response with lowest physical activity is passed', function () {
        const outcome = paq_c_calculation(lowest_physical_activity_response)

        it('should return the worst score for "Spare time activity score (item 1)"', function () {
          const score = view_result('ITEM_1_SPARE_TIME_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(WORST_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the worst score for "Activity score items 2 to 8"', function () {
          const score = view_result('ITEMS_2_TO_8_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(WORST_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the worst score for "Activity score item 9"', function () {
          const score = view_result('ITEM_9_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(WORST_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the worst score for "PAQ-C activity summary score"', function () {
          const score = view_result('ACTIVITY_SUMMARY_SCORE')(outcome)
          expect(score).toEqual(WORST_PHYSCIAL_ACTIVITY_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = paq_c_calculation(median_physical_activity_response)

        it('should return the median score for "Spare time activity score (item 1)"', function () {
          const score = view_result('ITEM_1_SPARE_TIME_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(MEDIAN_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the median score for "Activity score items 2 to 8"', function () {
          const score = view_result('ITEMS_2_TO_8_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(MEDIAN_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the median score for "Activity score item 9"', function () {
          const score = view_result('ITEM_9_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(MEDIAN_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the median score for "PAQ-C activity summary score"', function () {
          const score = view_result('ACTIVITY_SUMMARY_SCORE')(outcome)
          expect(score).toEqual(MEDIAN_PHYSCIAL_ACTIVITY_SCORE)
        })
      })

      describe('when response with highest physical activity is passed', function () {
        const outcome = paq_c_calculation(highest_physical_activity_response)

        it('should return the best score for "Spare time activity score (item 1)"', function () {
          const score = view_result('ITEM_1_SPARE_TIME_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(BEST_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the best score for "Activity score items 2 to 8"', function () {
          const score = view_result('ITEMS_2_TO_8_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(BEST_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the best score for "Activity score item 9"', function () {
          const score = view_result('ITEM_9_ACTIVITY_SCORE')(outcome)
          expect(score).toEqual(BEST_PHYSCIAL_ACTIVITY_SCORE)
        })

        it('should return the best score for "PAQ-C activity summary score"', function () {
          const score = view_result('ACTIVITY_SUMMARY_SCORE')(outcome)
          expect(score).toEqual(BEST_PHYSCIAL_ACTIVITY_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = paq_c_calculation(random_physical_activity_response)

        it('should return the expected score for "Spare time activity score (item 1)"', function () {
          const score = view_result('ITEM_1_SPARE_TIME_ACTIVITY_SCORE')(outcome)
          const EXPECTED_SCORE = 2.12

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "Activity score items 2 to 8"', function () {
          const score = view_result('ITEMS_2_TO_8_ACTIVITY_SCORE')(outcome)
          const EXPECTED_SCORE = 1.86

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "Activity score item 9"', function () {
          const score = view_result('ITEM_9_ACTIVITY_SCORE')(outcome)
          const EXPECTED_SCORE = 2.57

          expect(score).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for "PAQ-C activity summary score"', function () {
          const score = view_result('ACTIVITY_SUMMARY_SCORE')(outcome)
          const EXPECTED_SCORE = 2.18

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            paq_c_calculation({
              ITEM_1_ACTIVITY_01: "I'm not a number",
            }),
          ).toThrow(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            paq_c_calculation({
              ITEM_1_ACTIVITY_01: -1,
            }),
          ).toThrow(InvalidInputsError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            paq_c_calculation({
              ITEM_1_ACTIVITY_01: 6,
            }),
          ).toThrow(InvalidInputsError)
        })
      })
    })
  })
})
