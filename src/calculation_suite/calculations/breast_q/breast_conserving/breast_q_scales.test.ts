import { expect } from 'chai'

import { get_input_ids_for_specific_subscale } from '../../shared_functions'
import { BREAST_Q_SUBSCALES } from './definition/breast_q_scales'

describe('breast_q_scales', function () {
  describe('the score includes the correct input fields for each scale', function () {
    it('should have the expected input ids for the "Psychosocial well-being (pre-and post-operative)" subscale', function () {
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
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP'
        )(BREAST_Q_SUBSCALES)
      )
    })

    it('should have the expected input ids for the "Sexual well-being (pre-and post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SEXUAL_WELLBEING_PREOP_POSTOP_A',
        'SEXUAL_WELLBEING_PREOP_POSTOP_B',
        'SEXUAL_WELLBEING_PREOP_POSTOP_C',
        'SEXUAL_WELLBEING_PREOP_POSTOP_D',
        'SEXUAL_WELLBEING_PREOP_POSTOP_E',
        'SEXUAL_WELLBEING_PREOP_POSTOP_F',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SEXUAL_WELLBEING_PREOP_POSTOP')(
          BREAST_Q_SUBSCALES
        )
      )
    })

    it('should have the expected input ids for the "Satisfaction with breasts (pre-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SATISFACTION_WITH_BREAST_PREOP_A',
        'SATISFACTION_WITH_BREAST_PREOP_B',
        'SATISFACTION_WITH_BREAST_PREOP_C',
        'SATISFACTION_WITH_BREAST_PREOP_D',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SATISFACTION_WITH_BREAST_PREOP')(
          BREAST_Q_SUBSCALES
        )
      )
    })

    it('should have the expected input ids for the "Satisfaction with breasts (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
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
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SATISFACTION_WITH_BREAST_POST_OP')(
          BREAST_Q_SUBSCALES
        )
      )
    })

    it('should have the expected input ids for the "Physical well-being: chest (pre-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
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
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PHYSICAL_WELLBEING_CHEST_PREOP')(
          BREAST_Q_SUBSCALES
        )
      )
    })

    it('should have the expected input ids for the "Physical well-being: chest (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PHYSICAL_WELLBEING_CHEST_POSTOP_A',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_B',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_C',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_D',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_E',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_F',
        'PHYSICAL_WELLBEING_CHEST_POSTOP_G',
        /**
         * Items ‘h’ and ‘i’ are stand-alone items that are not included in the scale score.
         */
        // 'PHYSICAL_WELLBEING_CHEST_POSTOP_H'
        // 'PHYSICAL_WELLBEING_CHEST_POSTOP_I',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PHYSICAL_WELLBEING_CHEST_POSTOP')(
          BREAST_Q_SUBSCALES
        )
      )
    })

    it('should have the expected input ids for the "Adverse effects of radiation (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_A',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_B',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_C',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_D',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_E',
        'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_F',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'ADVERSE_EFFECTS_OF_RADIATION_POSTOP'
        )(BREAST_Q_SUBSCALES)
      )
    })

    it('should have the expected input ids for the "Satisfaction with information from breast surgeon (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
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
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP'
        )(BREAST_Q_SUBSCALES)
      )
    })

    it('should have the expected input ids for the "Satisfaction with informatoin from radiation oncologist (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
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
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP'
        )(BREAST_Q_SUBSCALES)
      )
    })

    it('should have the expected input ids for the "Satisfaction with surgeon (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
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
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SATISFACTION_WITH_SURGEON_POSTOP')(
          BREAST_Q_SUBSCALES
        )
      )
    })

    it('should have the expected input ids for the "Satisfaction with medical team (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_A',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_B',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_C',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_D',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_E',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_F',
        'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_G',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP'
        )(BREAST_Q_SUBSCALES)
      )
    })

    it('should have the expected input ids for the "Satisfaction with office staff (post-operative)" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_A',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_B',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_C',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_D',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_E',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_F',
        'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_G',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'SATISFACTION_WITH_OFFICE_STAFF_POSTOP'
        )(BREAST_Q_SUBSCALES)
      )
    })
  })
})
