/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../shared_functions'
import { filter_eortc_results_by_specific_scale_type } from '../common/eortc_helper_functions'
import {
  BEST_SCORE_FUNCTIONAL_SCALES,
  BEST_SCORE_SYMPTOM_SCALES,
  WORST_SCORE_FUNCTIONAL_SCALES,
  WORST_SCORE_SYMPTOM_SCALES,
} from '../common/eortc_parameters'
import {
  best_female_response_without_male_related_questions,
  best_response,
  random_response,
  worst_response,
} from './__testdata__/eortc_qlq_pr25_responses'
import { EORTC_QLQ_PR25_SCALES } from './definition/pr25_scales'
import { eortc_qlq_pr25 } from './eortc_qlq_pr25'

const eortc_qlq_pr25_calculation = execute_test_calculation(eortc_qlq_pr25)

describe('eortc_qlq_pr25', function () {
  it('eortc_qlq_pr25 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('eortc_qlq_pr25')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected item numbers configured', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EORTC_QLQ_PR25_Q31',
        'EORTC_QLQ_PR25_Q32',
        'EORTC_QLQ_PR25_Q33',
        'EORTC_QLQ_PR25_Q34',
        'EORTC_QLQ_PR25_Q35',
        'EORTC_QLQ_PR25_Q36',
        'EORTC_QLQ_PR25_Q37',
        'EORTC_QLQ_PR25_Q39',
        'EORTC_QLQ_PR25_Q38',
        'EORTC_QLQ_PR25_Q40',
        'EORTC_QLQ_PR25_Q41',
        'EORTC_QLQ_PR25_Q42',
        'EORTC_QLQ_PR25_Q43',
        'EORTC_QLQ_PR25_Q44',
        'EORTC_QLQ_PR25_Q45',
        'EORTC_QLQ_PR25_Q46',
        'EORTC_QLQ_PR25_Q47',
        'EORTC_QLQ_PR25_Q48',
        'EORTC_QLQ_PR25_Q49',
        'EORTC_QLQ_PR25_Q50',
        'EORTC_QLQ_PR25_Q51',
        'EORTC_QLQ_PR25_Q52',
        'EORTC_QLQ_PR25_Q53',
        'EORTC_QLQ_PR25_Q54',
        'EORTC_QLQ_PR25_Q55',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(EORTC_QLQ_PR25_SCALES)

      expect(EXPECTED_ITEM_NUMBERS).to.eql(configured_input_ids)
    })

    it('should have the expected item numbers configured for the "Urinary symptoms" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTC_QLQ_PR25_Q31',
        'EORTC_QLQ_PR25_Q32',
        'EORTC_QLQ_PR25_Q33',
        'EORTC_QLQ_PR25_Q34',
        'EORTC_QLQ_PR25_Q35',
        'EORTC_QLQ_PR25_Q36',
        'EORTC_QLQ_PR25_Q37',
        'EORTC_QLQ_PR25_Q39',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('URI')(EORTC_QLQ_PR25_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Incontinence aid" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_PR25_Q38']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('AID')(EORTC_QLQ_PR25_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Bowel symptoms" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTC_QLQ_PR25_Q40',
        'EORTC_QLQ_PR25_Q41',
        'EORTC_QLQ_PR25_Q42',
        'EORTC_QLQ_PR25_Q43',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('BOW')(EORTC_QLQ_PR25_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Hormonal treatment-related symptoms" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTC_QLQ_PR25_Q44',
        'EORTC_QLQ_PR25_Q45',
        'EORTC_QLQ_PR25_Q46',
        'EORTC_QLQ_PR25_Q47',
        'EORTC_QLQ_PR25_Q48',
        'EORTC_QLQ_PR25_Q49',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('HTR')(EORTC_QLQ_PR25_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Sexual activity" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_PR25_Q50', 'EORTC_QLQ_PR25_Q51']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SAC')(EORTC_QLQ_PR25_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Sexual functioning" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTC_QLQ_PR25_Q52',
        'EORTC_QLQ_PR25_Q53',
        'EORTC_QLQ_PR25_Q54',
        'EORTC_QLQ_PR25_Q55',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SFU')(EORTC_QLQ_PR25_SCALES)
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = eortc_qlq_pr25_calculation(worst_response)

    it('should calculate a score for all 6 scales', function () {
      const AMOUNT_OF_SCALES = 6

      expect(outcome).to.have.length(AMOUNT_OF_SCALES)
    })

    it('should return a result for all the expected calculation names', function () {
      const EXPECTED_CALCULATION_NAMES = [
        'URI',
        'AID',
        'BOW',
        'HTR',
        'SAC',
        'SFU',
      ]

      const EXTRACTED_CALCULATION_NAMES_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).to.eql(
        EXPECTED_CALCULATION_NAMES
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('When the response is empty', function () {
      it('should return the "MISSING_MESSAGE" for all scales', function () {
        const all_scales = eortc_qlq_pr25_calculation({})

        all_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(undefined)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('When all inputs are answered with the worst response', function () {
      const outcome = eortc_qlq_pr25_calculation(worst_response)
      it('should return the worst score (i.e. 100) on every symptom scale', function () {
        /**
         * All symptom scales are scored as follows
         * 0 = Best and 100 = Worst
         */
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_PR25_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })
      })

      it('should return a score of 0 on the Sexual activity (SAC) scale', function () {
        /**
         * The SAC scale is a functional scale and is reverse scored
         * 0 = Worst and 100 = Best
         */
        const result = view_result('SAC')(outcome)

        expect(result).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
      })

      it('should return the NOT_APPLICABLE_MESSAGE for the Sexual functioning (SFU) scale', function () {
        const result = view_result('SFU')(outcome)

        expect(result).to.eql(undefined)
      })
    })

    describe('When all inputs are answered with the best response', function () {
      const outcome = eortc_qlq_pr25_calculation(best_response)

      it('should return the best score (i.e. 0) on every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_PR25_SCALES,
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
          eortc_scales: EORTC_QLQ_PR25_SCALES,
          scale_type: 'functional',
        })

        functional_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })
      })
    })

    describe('When we have a random response', function () {
      const outcome = eortc_qlq_pr25_calculation(random_response)
      it('should return a numeric score between [0-100] for every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_PR25_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result)
            .to.be.a('number')
            .that.is.above(BEST_SCORE_SYMPTOM_SCALES) // worst score = 0
            .that.is.below(WORST_SCORE_SYMPTOM_SCALES) // best score = 100
        })
      })

      it('should return a numeric score between [0-100] for every functional scale', function () {
        const functional_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_PR25_SCALES,
          scale_type: 'functional',
        })

        functional_scales.forEach(scale => {
          const result = scale.result
          expect(result)
            .to.be.a('number')
            .that.is.above(WORST_SCORE_FUNCTIONAL_SCALES) // Functional scales are scored in reverse, so worst score = 0
            .that.is.below(BEST_SCORE_FUNCTIONAL_SCALES) //  best score = 100
        })
      })
    })

    describe('When we have a response where all male related inputs are not answered and all other inputs are answered with the best response', function () {
      const outcome = eortc_qlq_pr25_calculation(
        best_female_response_without_male_related_questions
      )

      it('should return the best score (i.e. 0) on every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_PR25_SCALES,
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
          eortc_scales: EORTC_QLQ_PR25_SCALES,
          scale_type: 'functional',
        })

        functional_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })
      })
    })
  })

  describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_pr25_calculation({
            EORTC_QLQ_PR25_Q31: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_pr25_calculation({
            EORTC_QLQ_PR25_Q31: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_pr25_calculation({
            EORTC_QLQ_PR25_Q31: 999,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
