import { expect } from 'chai'
import R from 'ramda'

import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { CALCULATIONS } from '../../calculation_library'
import { filter_eortc_results_by_specific_scale_type } from '../common/eortc_helper_functions'
import {
  BEST_SCORE_FUNCTIONAL_SCALES,
  BEST_SCORE_SYMPTOM_SCALES,
  WORST_SCORE_FUNCTIONAL_SCALES,
  WORST_SCORE_SYMPTOM_SCALES,
} from '../common/eortc_parameters'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/eortc_qlq_br_43_responses'
import { form_response_for_BS_not_applicable } from './__testdata__/form_response_for_BS_not_applicable'
import { form_response_for_HU_not_applicable } from './__testdata__/form_response_for_HU_not_applicable'
import { form_response_for_SE_not_applicable } from './__testdata__/form_response_for_SE_not_applicable'
import { EORTC_QLQ_BR45_SCALES } from './definition/eortc_qlq_br45_scales'
import { eortc_qlq_br45 } from './eortc_qlq_br45'
import { CalculationOutputType } from '../../../../types/calculations.types'

const eortc_qlq_br45_calculation = execute_test_calculation(eortc_qlq_br45)

describe('eortc_qlq_br45', function () {
  it('eortc_qlq_br45 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('eortc_qlq_br45')
  })

  describe('Basic underlying assumptions', function () {
    const outcome = eortc_qlq_br45_calculation(worst_response)
    it('should calculate a score for all scales', function () {
      const AMOUNT_OF_SCALES = 12

      expect(outcome).to.have.length(AMOUNT_OF_SCALES)
    })
    it('should return a result for all the expected calculation names', function () {
      const EXPECTED_CALCULATION_NAMES = [
        'BI',
        'FU',
        'SX',
        'SE',
        'BS',
        'SYS',
        'HU',
        'ARM',
        'BR',
        'ET',
        'SM',
        'ES',
      ]

      const EXTRACTED_CALCULATION_NAMES_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).to.eql(
        EXPECTED_CALCULATION_NAMES
      )
    })
  })

  describe('When the response is empty', function () {
    it('should return the "MISSING_MESSAGE" for all scales', function () {
      const all_scales = eortc_qlq_br45_calculation({})

      all_scales.forEach(scale => {
        const result = scale.result
        expect(result).to.eql(undefined)
      })
    })
  })

  describe('When all inputs are answered with the worst response', function () {
    const outcome = eortc_qlq_br45_calculation(worst_response)

    it('should return the worst score (i.e. 100) on every symptom scale', function () {
      /**
       * All symptom scales are scored as follows
       * 0 = Best and 100 = Worst
       */
      const symptom_scales = filter_eortc_results_by_specific_scale_type({
        calculation_output: outcome,
        eortc_scales: EORTC_QLQ_BR45_SCALES,
        scale_type: 'symptoms',
      })

      symptom_scales.forEach(scale => {
        const result = scale.result
        expect(result).to.eql(WORST_SCORE_SYMPTOM_SCALES)
      })
    })
    it('should return the worst score (i.e. 0) on every functinal scale except the sexual enjoyment (SE) scale since that scale is not applicable', function () {
      /**
       * All functional scales are scored as follows
       * 0 = Worst and 100 = Best
       */
      const functional_scales_without_SE_scale = R.compose(
        //@ts-expect-error to do
        R.filter(scale => scale.subresult_id !== 'SE'),
        filter_eortc_results_by_specific_scale_type
      )({
        calculation_output: outcome,
        eortc_scales: EORTC_QLQ_BR45_SCALES,
        scale_type: 'functional',
      })

      functional_scales_without_SE_scale.forEach(scale => {
        const result = scale.result
        expect(result).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
      })
    })

    it('should return the NOT_APPLICABLE_MESSAGE for the sexual enjoyment (SE) scale', function () {
      const SE_score = view_result('SE')(outcome)

      expect(SE_score).to.eql(undefined)
    })
  })

  describe('When all inputs are answered with the best response', function () {
    const outcome = eortc_qlq_br45_calculation(best_response)

    it('should return the best score (i.e. 0) on every symptom scale except the Upset by hair loss (HU) scale since that scale is not applicable', function () {
      const symptom_scales_without_HU_scale = R.compose(
        //@ts-expect-error to do
        R.filter(scale => scale.subresult_id !== 'HU'),
        filter_eortc_results_by_specific_scale_type
      )({
        calculation_output: outcome,
        eortc_scales: EORTC_QLQ_BR45_SCALES,
        scale_type: 'symptoms',
      })

      symptom_scales_without_HU_scale.forEach(scale => {
        const result = scale.result
        expect(result).to.eql(BEST_SCORE_SYMPTOM_SCALES)
      })
    })

    it('should return the NOT_APPLICABLE_MESSAGE for the Upset by hair loss (HU) scale', function () {
      const HU_score = view_result('HU')(outcome)

      expect(HU_score).to.eql(undefined)
    })

    it('should return the best score (i.e. 100) on every functional scale', function () {
      const functional_scales = filter_eortc_results_by_specific_scale_type({
        calculation_output: outcome,
        eortc_scales: EORTC_QLQ_BR45_SCALES,
        scale_type: 'functional',
      })

      functional_scales.forEach(scale => {
        const result = scale.result
        expect(result).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
      })
    })
  })

  describe('When we have a random response', function () {
    const outcome = eortc_qlq_br45_calculation(random_response)
    it('should return a numeric score between [0-100] for every symptom scale', function () {
      const symptom_scales = filter_eortc_results_by_specific_scale_type({
        calculation_output: outcome,
        eortc_scales: EORTC_QLQ_BR45_SCALES,
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
        eortc_scales: EORTC_QLQ_BR45_SCALES,
        scale_type: 'functional',
      })

      functional_scales.forEach(scale => {
        const result = scale.result

        expect(result)
          .to.be.a('number')
          .that.is.a('number')
          .that.is.at.least(WORST_SCORE_FUNCTIONAL_SCALES) // worst score = 0
          .that.is.at.most(BEST_SCORE_FUNCTIONAL_SCALES) //  best score = 100
      })
    })
  })

  describe('Legacy tests that should always pass', function () {
    describe('when form response should make sexual enjoyment not applicable', function () {
      it('should return "NOT_APPLICABLE_MESSAGE" as the score', function () {
        const outcome = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(subscale => subscale.subresult_id === 'SE'),
          eortc_qlq_br45_calculation
        )(form_response_for_SE_not_applicable)

        expect(outcome).to.eql(undefined)
      })
    })

    describe('when form response should make upset by hairloss not applicable', function () {
      it('should return "NOT_APPLICABLE_MESSAGE" as the score', function () {
        const outcome = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(subscale => subscale.subresult_id === 'HU'),
          eortc_qlq_br45_calculation
        )(form_response_for_HU_not_applicable)

        expect(outcome).to.eql(undefined)
      })
    })

    describe('when form response should set breast satisfaction to missing', function () {
      it('should return "NOT_APPLICABLE_MESSAGE" as the score', function () {
        const outcome = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(subscale => subscale.subresult_id === 'BS'),
          eortc_qlq_br45_calculation
        )(form_response_for_BS_not_applicable)

        expect(outcome).to.eql(undefined)
      })
    })
  })
})
