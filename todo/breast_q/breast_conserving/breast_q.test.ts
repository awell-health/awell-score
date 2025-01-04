import { expect } from 'chai'
import R from 'ramda'

import { ZodError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { view_status } from '../../../lib/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_in_subscale } from '../../shared_functions'
import {
  best_response,
  median_response,
  worst_response,
} from './__testdata__/breast_q_test_responses'
import { breast_q } from './breast_q'
import { BREAST_Q_SUBSCALES } from './definition'

const breast_q_calculation = execute_test_calculation(breast_q)

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

describe('breast_q_conserving_therapy_pre_and_postoperative', function () {
  it('breast_q_conserving_therapy_pre_and_postoperative calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty(
      'breast_q_conserving_therapy_pre_and_postoperative',
    )
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_A',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_B',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_C',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_D',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_E',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_F',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_G',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_H',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_I',
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_J',
        'SEXUAL_WELLBEING_PREOP_POSTOP_A',
        'SEXUAL_WELLBEING_PREOP_POSTOP_B',
        'SEXUAL_WELLBEING_PREOP_POSTOP_C',
        'SEXUAL_WELLBEING_PREOP_POSTOP_D',
        'SEXUAL_WELLBEING_PREOP_POSTOP_E',
        'SEXUAL_WELLBEING_PREOP_POSTOP_F',
        'SATISFACTION_WITH_BREAST_PREOP_A',
        'SATISFACTION_WITH_BREAST_PREOP_B',
        'SATISFACTION_WITH_BREAST_PREOP_C',
        'SATISFACTION_WITH_BREAST_PREOP_D',
        'SATISFACTION_WITH_BREAST_POSTOP_A',
        'SATISFACTION_WITH_BREAST_POSTOP_B',
        'SATISFACTION_WITH_BREAST_POSTOP_C',
        'SATISFACTION_WITH_BREAST_POSTOP_D',
        'SATISFACTION_WITH_BREAST_POSTOP_E',
        'SATISFACTION_WITH_BREAST_POSTOP_F',
        'SATISFACTION_WITH_BREAST_POSTOP_G',
        'SATISFACTION_WITH_BREAST_POSTOP_H',
        'SATISFACTION_WITH_BREAST_POSTOP_I',
        'SATISFACTION_WITH_BREAST_POSTOP_J',
        'SATISFACTION_WITH_BREAST_POSTOP_K',
        'PHYSICAL_WELLBEING_CHEST_PREOP_A',
        'PHYSICAL_WELLBEING_CHEST_PREOP_B',
        'PHYSICAL_WELLBEING_CHEST_PREOP_C',
        'PHYSICAL_WELLBEING_CHEST_PREOP_D',
        'PHYSICAL_WELLBEING_CHEST_PREOP_E',
        'PHYSICAL_WELLBEING_CHEST_PREOP_F',
        'PHYSICAL_WELLBEING_CHEST_PREOP_G',
        'PHYSICAL_WELLBEING_CHEST_PREOP_H',
        'PHYSICAL_WELLBEING_CHEST_PREOP_I',
        'PHYSICAL_WELLBEING_CHEST_PREOP_J',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_A',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_B',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_C',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_D',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_E',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_F',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_G',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_A',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_B',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_C',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_D',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_E',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_F',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_A',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_B',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_C',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_D',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_E',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_F',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_G',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_H',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_I',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_J',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_K',
        'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_L',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_A',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_B',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_C',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_D',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_E',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_F',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_G',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_H',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_I',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_J',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_K',
        'SATISFACTION_WITH_SURGEON_POSTOP_A',
        'SATISFACTION_WITH_SURGEON_POSTOP_B',
        'SATISFACTION_WITH_SURGEON_POSTOP_C',
        'SATISFACTION_WITH_SURGEON_POSTOP_D',
        'SATISFACTION_WITH_SURGEON_POSTOP_E',
        'SATISFACTION_WITH_SURGEON_POSTOP_F',
        'SATISFACTION_WITH_SURGEON_POSTOP_G',
        'SATISFACTION_WITH_SURGEON_POSTOP_H',
        'SATISFACTION_WITH_SURGEON_POSTOP_I',
        'SATISFACTION_WITH_SURGEON_POSTOP_J',
        'SATISFACTION_WITH_SURGEON_POSTOP_K',
        'SATISFACTION_WITH_SURGEON_POSTOP_L',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_A',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_B',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_C',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_D',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_E',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_F',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_G',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_A',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_B',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_C',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_D',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_E',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_F',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_G',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(BREAST_Q_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = breast_q_calculation(best_response)

    it('should return 12 calculation results', function () {
      expect(outcome).toHaveLength(Of(12)
    })

    it('should return results with expected scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP',
        'SEXUAL_WELLBEING_PREOP_POSTOP',
        'SATISFACTION_WITH_BREAST_PREOP',
        'SATISFACTION_WITH_BREAST_POST_OP',
        'PHYSICAL_WELLBEING_CHEST_PREOP',
        'PHYSICAL_WELLBEING_CHEST_POSTOP',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP',
        'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP',
        'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP',
        'SATISFACTION_WITH_SURGEON_POSTOP',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = breast_q_calculation({})

      it('should return undefined score and missing status for the "Psychosocial well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result(
          'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP',
        )(outcome)
        const status = view_status('PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Sexual well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result('SEXUAL_WELLBEING_PREOP_POSTOP')(
          outcome,
        )
        const status = view_status('SEXUAL_WELLBEING_PREOP_POSTOP')(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Satisfaction with breasts (pre-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_PREOP')(
          outcome,
        )
        const status = view_status('SATISFACTION_WITH_BREAST_PREOP')(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Satisfaction with breasts (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_POST_OP')(
          outcome,
        )
        const status = view_status('SATISFACTION_WITH_BREAST_POST_OP')(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Physical well-being: chest (pre-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_PREOP')(
          outcome,
        )
        const status = view_status('PHYSICAL_WELLBEING_CHEST_PREOP')(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Physical well-being: chest (post-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_POSTOP')(
          outcome,
        )
        const status = view_status('PHYSICAL_WELLBEING_CHEST_POSTOP')(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Adverse effects of radiation (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'ADVERSE_EFFECTS_OF_RADIATION_POSTOP',
        )(outcome)
        const status = view_status('ADVERSE_EFFECTS_OF_RADIATION_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Satisfaction with information from breast surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP',
        )(outcome)
        const status = view_status(
          'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Satisfaction with informatoin from radiation oncologist (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP',
        )(outcome)
        const status = view_status(
          'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP',
        )(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Satisfaction with surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_SURGEON_POSTOP')(
          outcome,
        )
        const status = view_status('SATISFACTION_WITH_SURGEON_POSTOP')(outcome)

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Satisfaction with medical team (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP',
        )(outcome)
        const status = view_status('SATISFACTION_WITH_MEDICAL_TEAM_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })

      it('should return undefined score and missing status for the "Satisfaction with office staff (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_OFFICE_STAFF_POSTOP',
        )(outcome)
        const status = view_status('SATISFACTION_WITH_OFFICE_STAFF_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(undefined)
        expect(status).toEqual(MISSING_STATUS)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with the best response', function () {
      const outcome = breast_q_calculation(best_response)

      it('should return the best score for the "Psychosocial well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result(
          'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Sexual well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result('SEXUAL_WELLBEING_PREOP_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Satisfaction with breasts (pre-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_PREOP')(
          outcome,
        )

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Satisfaction with breasts (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_POST_OP')(
          outcome,
        )

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Physical well-being: chest (pre-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_PREOP')(
          outcome,
        )

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Physical well-being: chest (post-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Adverse effects of radiation (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'ADVERSE_EFFECTS_OF_RADIATION_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Satisfaction with information from breast surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Satisfaction with informatoin from radiation oncologist (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP',
        )(outcome)

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Satisfaction with surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_SURGEON_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Satisfaction with medical team (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(BEST_SCORE)
      })

      it('should return the best score for the "Satisfaction with office staff (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_OFFICE_STAFF_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(BEST_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = breast_q_calculation(median_response)

      it('should return the median score for the "Psychosocial well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result(
          'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Sexual well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result('SEXUAL_WELLBEING_PREOP_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Satisfaction with breasts (pre-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_PREOP')(
          outcome,
        )
        const CUSTOM_MEDIAN_SCORE = 48

        expect(subscale_score).toEqual(CUSTOM_MEDIAN_SCORE)
      })

      it('should return the median score for the "Satisfaction with breasts (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_POST_OP')(
          outcome,
        )

        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Physical well-being: chest (pre-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_PREOP')(
          outcome,
        )

        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Physical well-being: chest (post-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_POSTOP')(
          outcome,
        )
        const CUSTOM_MEDIAN_SCORE = 52

        expect(subscale_score).toEqual(CUSTOM_MEDIAN_SCORE)
      })

      it('should return the median score for the "Adverse effects of radiation (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'ADVERSE_EFFECTS_OF_RADIATION_POSTOP',
        )(outcome)
        const CUSTOM_MEDIAN_SCORE = 51

        expect(subscale_score).toEqual(CUSTOM_MEDIAN_SCORE)
      })

      it('should return the median score for the "Satisfaction with information from breast surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Satisfaction with informatoin from radiation oncologist (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP',
        )(outcome)

        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Satisfaction with surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_SURGEON_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score for the "Satisfaction with medical team (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP',
        )(outcome)
        const CUSTOM_MEDIAN_SCORE = 49

        expect(subscale_score).toEqual(CUSTOM_MEDIAN_SCORE)
      })

      it('should return the median score for the "Satisfaction with office staff (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_OFFICE_STAFF_POSTOP',
        )(outcome)
        const CUSTOM_MEDIAN_SCORE = 49

        expect(subscale_score).toEqual(CUSTOM_MEDIAN_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = breast_q_calculation(worst_response)

      it('should return the worst score for the "Psychosocial well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result(
          'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Sexual well-being (pre-and post-operative)" subscale', function () {
        const subscale_score = view_result('SEXUAL_WELLBEING_PREOP_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Satisfaction with breasts (pre-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_PREOP')(
          outcome,
        )

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Satisfaction with breasts (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_BREAST_POST_OP')(
          outcome,
        )

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Physical well-being: chest (pre-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_PREOP')(
          outcome,
        )

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Physical well-being: chest (post-operative)" subscale', function () {
        const subscale_score = view_result('PHYSICAL_WELLBEING_CHEST_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Adverse effects of radiation (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'ADVERSE_EFFECTS_OF_RADIATION_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Satisfaction with information from breast surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Satisfaction with informatoin from radiation oncologist (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP',
        )(outcome)

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Satisfaction with surgeon (post-operative)" subscale', function () {
        const subscale_score = view_result('SATISFACTION_WITH_SURGEON_POSTOP')(
          outcome,
        )

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Satisfaction with medical team (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(WORST_SCORE)
      })

      it('should return the worst score for the "Satisfaction with office staff (post-operative)" subscale', function () {
        const subscale_score = view_result(
          'SATISFACTION_WITH_OFFICE_STAFF_POSTOP',
        )(outcome)

        expect(subscale_score).toEqual(WORST_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          breast_q_calculation({
            PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_A: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          breast_q_calculation({
            PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_A: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          breast_q_calculation({
            PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_A: 6,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
