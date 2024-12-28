import { expect } from 'chai'
import { round } from 'mathjs'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../shared_functions'
import {
  apply_functional_scale,
  filter_eortc_results_by_specific_scale_type,
} from '../common/eortc_helper_functions'
import {
  BEST_SCORE_FUNCTIONAL_SCALES,
  BEST_SCORE_GLOBAL_HEALTH_STATUS_SCALES,
  BEST_SCORE_SYMPTOM_SCALES,
  WORST_SCORE_FUNCTIONAL_SCALES,
  WORST_SCORE_GLOBAL_HEALTH_STATUS_SCALES,
  WORST_SCORE_SYMPTOM_SCALES,
} from '../common/eortc_parameters'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/eortc_qlq_c30_responses'
import { EORTC_QLQ_C30_SCALES } from './definition/eortc_qlq_c30_scales'
import { eortc_qlq_c30 } from './eortc_qlq_c30'

const eortc_qlq_c30_calculation = execute_test_calculation(eortc_qlq_c30)

describe('eortc_qlq_c30', function () {
  it('eortc_qlq_c30 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('eortc_qlq_c30')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTCQLQC30_Q01',
        'EORTCQLQC30_Q02',
        'EORTCQLQC30_Q03',
        'EORTCQLQC30_Q04',
        'EORTCQLQC30_Q05',
        'EORTCQLQC30_Q06',
        'EORTCQLQC30_Q07',
        'EORTCQLQC30_Q08',
        'EORTCQLQC30_Q09',
        'EORTCQLQC30_Q10',
        'EORTCQLQC30_Q11',
        'EORTCQLQC30_Q12',
        'EORTCQLQC30_Q13',
        'EORTCQLQC30_Q14',
        'EORTCQLQC30_Q15',
        'EORTCQLQC30_Q16',
        'EORTCQLQC30_Q17',
        'EORTCQLQC30_Q18',
        'EORTCQLQC30_Q19',
        'EORTCQLQC30_Q20',
        'EORTCQLQC30_Q21',
        'EORTCQLQC30_Q22',
        'EORTCQLQC30_Q23',
        'EORTCQLQC30_Q24',
        'EORTCQLQC30_Q25',
        'EORTCQLQC30_Q26',
        'EORTCQLQC30_Q27',
        'EORTCQLQC30_Q28',
        'EORTCQLQC30_Q29',
        'EORTCQLQC30_Q30',
      ]

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Global health status/QoL" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q29', 'EORTCQLQC30_Q30']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('QL2')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Physical functioning" scale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTCQLQC30_Q01',
        'EORTCQLQC30_Q02',
        'EORTCQLQC30_Q03',
        'EORTCQLQC30_Q04',
        'EORTCQLQC30_Q05',
      ]

      const configured_input_ids =
        get_input_ids_for_specific_subscale('PF2')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Role functioning" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q06', 'EORTCQLQC30_Q07']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('RF2')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Emotinal functioning" scale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTCQLQC30_Q21',
        'EORTCQLQC30_Q22',
        'EORTCQLQC30_Q23',
        'EORTCQLQC30_Q24',
      ]

      const configured_input_ids =
        get_input_ids_for_specific_subscale('EF')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Cognitive functioning" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q20', 'EORTCQLQC30_Q25']
      const configured_input_ids =
        get_input_ids_for_specific_subscale('CF')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Social functioning" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q26', 'EORTCQLQC30_Q27']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('SF')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Fatigue" scale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTCQLQC30_Q10',
        'EORTCQLQC30_Q12',
        'EORTCQLQC30_Q18',
      ]

      const configured_input_ids =
        get_input_ids_for_specific_subscale('FA')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Nausea and vomiting" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q14', 'EORTCQLQC30_Q15']
      const configured_input_ids =
        get_input_ids_for_specific_subscale('NV')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Pain" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q09', 'EORTCQLQC30_Q19']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('PA')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Dyspnoea" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q08']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('DY')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Insomnia" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q11']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('SL')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Appetite loss" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q13']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('AP')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Constipation" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q16']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('CO')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Diarrhoea" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q17']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('DI')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Financial difficulties" scale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQC30_Q28']

      const configured_input_ids =
        get_input_ids_for_specific_subscale('FI')(EORTC_QLQ_C30_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = eortc_qlq_c30_calculation(worst_response)
    it('should calculate a score for all scales', function () {
      const AMOUNT_OF_SCALES = 15
      expect(outcome).to.have.length(AMOUNT_OF_SCALES)
    })

    it('should return a result for all the expected calculation names', function () {
      const EXPECTED_CALCULATION_NAMES = [
        'QL2',
        'PF2',
        'RF2',
        'EF',
        'CF',
        'SF',
        'FA',
        'NV',
        'PA',
        'DY',
        'SL',
        'AP',
        'CO',
        'DI',
        'FI',
      ]

      const EXTRACTED_CALCULATION_NAMES_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).to.eql(
        EXPECTED_CALCULATION_NAMES
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when the response is empty', function () {
      it('should return the "MISSING_MESSAGE" for all scales', function () {
        const all_scales = eortc_qlq_c30_calculation({})

        all_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(undefined)
        })
      })
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    describe('When all inputs are answered with the worst response', function () {
      const outcome = eortc_qlq_c30_calculation(worst_response)
      it('should return the worst score (i.e. 100) on every symptom scale', function () {
        /**
         * All symptom scales are scored as follows
         * 0 = Best and 100 = Worst
         */
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_C30_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })
      })

      it('should return the worst score (i.e. 0) on every functional scale', function () {
        /**
         * All functional scales are scored as follows
         * 0 = Worst and 100 = Best
         */
        const functional_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_C30_SCALES,
          scale_type: 'functional',
        })

        functional_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })
      })

      it('should return the worst score (i.e. 0) every global health status scale', function () {
        const global_health_status_scales =
          filter_eortc_results_by_specific_scale_type({
            calculation_output: outcome,
            eortc_scales: EORTC_QLQ_C30_SCALES,
            scale_type: 'global_health_status',
          })

        global_health_status_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(WORST_SCORE_GLOBAL_HEALTH_STATUS_SCALES)
        })
      })
    })

    describe('When half of the items are answered in any scale', function () {
      describe('when 2 inputs are answered out of 4 in emotional functioning scale', function () {
        it('should ignore missing answers while calculating raw score', function () {
          /*
           * Emotional functioning scale input ids
           * EORTCQLQC30_Q21
           * EORTCQLQC30_Q22
           * EORTCQLQC30_Q23
           * EORTCQLQC30_Q24
           */
          const outcome = eortc_qlq_c30_calculation({
            EORTCQLQC30_Q21: 2,
            EORTCQLQC30_Q22: 1,
          })

          // Raw score = RS = sum of all items / amount of items
          const raw_score = 3 / 2 // amount of items is 2 as other two inputs have no values
          const range = 3
          const EXPECTED_SCORE = round(
            apply_functional_scale(raw_score, range),
            2
          )

          const emotion_functioning_scale = outcome.find(
            r => r.subresult_id === 'EF'
          )

          const result = emotion_functioning_scale?.result

          expect(result).to.eql(EXPECTED_SCORE)
        })
      })
    })

    describe('When all inputs are answered with the best response', function () {
      const outcome = eortc_qlq_c30_calculation(best_response)

      it('should return the best score (i.e. 0) on every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_C30_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })
      })

      it('should return the best score (i.e. 100) on every functional scale', function () {
        const functional_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_C30_SCALES,
          scale_type: 'functional',
        })

        functional_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })
      })

      it('should return the best score (i.e. 100) on every global health status scale', function () {
        const global_health_status_scales =
          filter_eortc_results_by_specific_scale_type({
            calculation_output: outcome,
            eortc_scales: EORTC_QLQ_C30_SCALES,
            scale_type: 'global_health_status',
          })

        global_health_status_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(BEST_SCORE_GLOBAL_HEALTH_STATUS_SCALES)
        })
      })
    })

    describe('When we have a random response', function () {
      const outcome = eortc_qlq_c30_calculation(random_response)

      it('should return a numeric score between [0-100] for every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_C30_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result)
            .to.be.a('number')
            .that.is.at.least(BEST_SCORE_SYMPTOM_SCALES) // best score = 0
            .that.is.at.most(WORST_SCORE_SYMPTOM_SCALES) // worst score = 100
        })
      })

      it('should return a numeric score between [0-100] for every functional scale', function () {
        const functional_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_C30_SCALES,
          scale_type: 'functional',
        })

        functional_scales.forEach(scale => {
          const result = scale.result
          expect(result)
            .to.be.a('number')
            .that.is.at.least(WORST_SCORE_FUNCTIONAL_SCALES) // worst score = 0
            .that.is.at.most(BEST_SCORE_FUNCTIONAL_SCALES) //  best score = 100
        })
      })

      it('should return a numeric score between [0-100] for every global scale', function () {
        const global_health_status_scales =
          filter_eortc_results_by_specific_scale_type({
            calculation_output: outcome,
            eortc_scales: EORTC_QLQ_C30_SCALES,
            scale_type: 'global_health_status',
          })

        global_health_status_scales.forEach(scale => {
          const result = scale.result
          expect(result)
            .to.be.a('number')
            .that.is.at.least(WORST_SCORE_FUNCTIONAL_SCALES) // worst score = 0
            .that.is.at.most(BEST_SCORE_FUNCTIONAL_SCALES) //  best score = 100
        })
      })
    })
  })

  describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_c30_calculation({
            EORTCQLQC30_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [1,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_c30_calculation({
            EORTCQLQC30_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [1,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_c30_calculation({
            EORTCQLQC30_Q01: 999,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
