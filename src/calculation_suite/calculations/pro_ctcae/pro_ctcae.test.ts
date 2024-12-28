import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { form_response_of_full_proctcae_item_bank } from './__testdata__/proctcae_test_responses'
import { pro_ctcae } from './pro_ctcae'

const pro_ctcae_calculation = execute_test_calculation(pro_ctcae)

describe('pro_ctcae', function () {
  it('pro_ctcae calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('pro_ctcae')
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pro_ctcae_calculation(
      form_response_of_full_proctcae_item_bank
    )

    it('should return a score all 81 symptom scales', function () {
      const EXPECTED_AMOUNT_OF_SCORES = 81
      expect(outcome).to.have.length(EXPECTED_AMOUNT_OF_SCORES)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'dry_mouth',
        'difficulty_swallowing',
        'mouth_throat_sores',
        'cheilosis_cheilitis',
        'voice_quality_changes',
        'hoarseness',
        'taste_changes',
        'decreased_appetite',
        'nausea',
        'vomiting',
        'heartburn',
        'gas',
        'bloating',
        'hiccups',
        'constipation',
        'diarrhea',
        'abdominal_pain',
        'fecal_incontinence',
        'shortness_of_breath',
        'cough',
        'wheezing',
        'swelling',
        'heart_palpitations',
        'rash',
        'skin_dryness',
        'acne',
        'hair_loss',
        'itching',
        'hives',
        'hand_foot_syndrome',
        'nail_loss',
        'nail_ridging',
        'nail_discoloration',
        'sensitivity_to_sunlight',
        'bed_pressure_sores',
        'radiation_skin_reaction',
        'skin_darkening',
        'stretch_marks',
        'numbness_tingling',
        'dizziness',
        'blurred_vision',
        'flashing_lights',
        'visual_floaters',
        'watery_eyes',
        'ringing_in_ears',
        'concentration',
        'memory',
        'general_pain',
        'headache',
        'muscle_pain',
        'joint_pain',
        'insomnia',
        'fatigue',
        'anxious',
        'discouraged',
        'sad',
        'irregular_periods_vaginal_bleeding',
        'missed_expected_menstruation_period',
        'vaginal_discharge',
        'vaginal_dryness',
        'painful_urination',
        'urinary_urgency',
        'urinary_frequency',
        'change_in_usual_urine_color',
        'urinary_incontinence',
        'achieve_and_maintain_erection',
        'ejaculation',
        'decreased_libido',
        'delayed_orgasm',
        'unable_to_have_orgasm',
        'pain_w_sexual_intercourse',
        'breast_swelling_and_tenderness',
        'bruising',
        'chills',
        'increased_sweating',
        'decreased_sweating',
        'hot_flashes',
        'nosebleed',
        'pain_and_swelling',
        'body_odor',
        'other_symptoms',
      ].sort()

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome).sort()

      expect(EXPECTED_CALCULATION_IDS).to.eql(
        extracted_calculation_ids_from_outcome
      )
    })
  })

  describe('when response object is valid', function () {
    it('should return array of calculations', function () {
      const outcome = pro_ctcae_calculation(
        form_response_of_full_proctcae_item_bank
      )

      expect(outcome).to.be.an('array')
    })
  })

  describe('when 13 scale answers are passed but are all answered with "0"', function () {
    const SCALES_WITH_RESULT = [
      'nausea',
      'vomiting',
      'diarrhea',
      'shortness_of_breath',
      'cough',
      'rash',
      'mouth_throat_sores',
      'constipation',
      'general_pain',
      'fatigue',
      'sad',
      'anxious',
      'discouraged',
    ]

    const outcome = pro_ctcae_calculation({
      proctcae_9_nausea_frequency: 0,
      proctcae_10_vomiting_frequency: 0,
      proctcae_16_diarrhea_frequency: 0,
      proctcae_19_shortness_of_breath_severity: 0,
      proctcae_20_cough_severity: 0,
      proctcae_24_rash_boolean: 0,
      proctcae_3_mouth_throat_sores_severity: 0,
      proctcae_15_constipation_severity: 0,
      proctcae_48_general_pain_frequency: 0,
      proctcae_53_fatigue_severity: 0,
      proctcae_56_sad_frequency: 0,
      proctcae_54_anxious_frequency: 0,
      proctcae_55_discouraged_frequency: 0,
    })

    it('should return a result for those 13 scales', function () {
      const scales_with_results = outcome.filter(result =>
        SCALES_WITH_RESULT.includes(result.subresult_id)
      )

      scales_with_results.forEach(scale => {
        expect(scale.result).to.eql(0)
      })
    })

    it('should return missing status for all other scales', function () {
      const scales_without_results = outcome.filter(
        result => !SCALES_WITH_RESULT.includes(result.subresult_id)
      )

      scales_without_results.forEach(scale => {
        expect(scale.status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('when frequency is 0 and severity and/or impact are not 0', function () {
    it('should return 0 as the composite score (as it overwrites severity and impact to 0)', function () {
      const outcome = pro_ctcae_calculation({
        proctcae_50_muscle_pain_frequency: 0,
        proctcae_50_muscle_pain_severity: 2,
        proctcae_50_muscle_pain_impact: 1,
      })

      const result = view_result('muscle_pain')(outcome)

      expect(result).to.eql(0)
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pro_ctcae_calculation({
            proctcae_1_dry_mouth_severity: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pro_ctcae_calculation({
            proctcae_1_dry_mouth_severity: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pro_ctcae_calculation({
            proctcae_1_dry_mouth_severity: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
