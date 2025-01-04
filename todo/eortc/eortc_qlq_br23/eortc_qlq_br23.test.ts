import { expect } from 'chai'
import R from 'ramda'

import { ZodError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_in_subscale } from '../../shared_functions'
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
} from './__testdata__/eortc_qlq_br23_responses'
import { EORTC_QLQ_BR23_SCALES } from './definition/eortc_qlq_br23_scales'
import { eortc_qlq_br23 } from './eortc_qlq_br23'

const eortc_qlq_br23_calculation = execute_test_calculation(eortc_qlq_br23)

describe('eortc_qlq_br23', function () {
  it('eortc_qlq_br23 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('eortc_qlq_br23')
  })

  describe('Basic underlying assumptions', function () {
    const outcome = eortc_qlq_br23_calculation(worst_response)

    it('should calculate a score for all scales', function () {
      const AMOUNT_OF_SCALES = 8

      expect(outcome).toHaveLength(AMOUNT_OF_SCALES)
    })
    it('should return a result for all the expected calculation names', function () {
      const EXPECTED_CALCULATION_NAMES = [
        'BRBI',
        'BRSEF',
        'BRSEE',
        'BRFU',
        'BRST',
        'BRBS',
        'BRAS',
        'BRHL',
      ]

      const EXTRACTED_CALCULATION_NAMES_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).toEqual(
        EXPECTED_CALCULATION_NAMES,
      )
    })
  })

  describe('validation', function () {
    describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            eortc_qlq_br23_calculation({
              EORTC_QLQ_BR23_Q01: "I'm not a number",
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when an answer is below the expected [1,4] range', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            eortc_qlq_br23_calculation({
              EORTC_QLQ_BR23_Q01: -1,
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when an answer is above the expected [1,4] range', function () {
        it('should throw an ZodError', function () {
          expect(() =>
            eortc_qlq_br23_calculation({
              EORTC_QLQ_BR23_Q01: 999,
            }),
          ).toThrow(ZodError)
        })
      })
    })

    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'EORTC_QLQ_BR23_Q01',
          'EORTC_QLQ_BR23_Q02',
          'EORTC_QLQ_BR23_Q03',
          'EORTC_QLQ_BR23_Q04',
          'EORTC_QLQ_BR23_Q05',
          'EORTC_QLQ_BR23_Q06',
          'EORTC_QLQ_BR23_Q07',
          'EORTC_QLQ_BR23_Q08',
          'EORTC_QLQ_BR23_Q09',
          'EORTC_QLQ_BR23_Q10',
          'EORTC_QLQ_BR23_Q11',
          'EORTC_QLQ_BR23_Q12',
          'EORTC_QLQ_BR23_Q13',
          'EORTC_QLQ_BR23_Q14',
          'EORTC_QLQ_BR23_Q15',
          'EORTC_QLQ_BR23_Q16',
          'EORTC_QLQ_BR23_Q17',
          'EORTC_QLQ_BR23_Q18',
          'EORTC_QLQ_BR23_Q19',
          'EORTC_QLQ_BR23_Q20',
          'EORTC_QLQ_BR23_Q21',
          'EORTC_QLQ_BR23_Q22',
          'EORTC_QLQ_BR23_Q23',
        ].sort()

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale),
        )(EORTC_QLQ_BR23_SCALES)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('When the response is empty', function () {
      it('should return the "MISSING_MESSAGE" for all scales', function () {
        const all_scales = eortc_qlq_br23_calculation({})

        all_scales.forEach(scale => {
          const result = scale.result
          expect(result).toEqual(undefined)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('When all inputs are answered with the worst response', function () {
      const outcome = eortc_qlq_br23_calculation(worst_response)

      it('should return the worst score (i.e. 100) on every symptom scale', function () {
        /**
         * All symptom scales are scored as follows
         * 0 = Best and 100 = Worst.
         */
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_BR23_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result).toEqual(WORST_SCORE_SYMPTOM_SCALES)
        })
      })

      it('should return the worst score (i.e. 0) on every functional scale except the sexual enjoyment (BRSEE) scale since that scale is not applicable', function () {
        /**
         * All functional scales are scored as follows
         * 0 = Worst and 100 = Best.
         */
        const functional_scales_without_BRSEE_scale = R.compose(
          //@ts-expect-error to do
          R.filter(scale => scale.subresult_id !== 'BRSEE'),
          filter_eortc_results_by_specific_scale_type,
        )({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_BR23_SCALES,
          scale_type: 'functional',
        })

        functional_scales_without_BRSEE_scale.forEach(scale => {
          const result = scale.result
          expect(result).toEqual(WORST_SCORE_FUNCTIONAL_SCALES)
        })
      })

      it('should return the NOT_APPLICABLE_MESSAGE for the sexual enjoyment (BRSEE) scale', function () {
        const BRSEE_score = view_result('BRSEE')(outcome)

        expect(BRSEE_score).toEqual(undefined)
      })
    })

    describe('When all inputs are answered with the best response', function () {
      const outcome = eortc_qlq_br23_calculation(best_response)
      it('should return the best score (i.e. 0) on every symptom scale except the Upset by hair loss (BRHL) scale since that scale is not applicable', function () {
        const symptom_scales_without_BRHL_scale = R.compose(
          //@ts-expect-error to do
          R.filter(scale => scale.subresult_id !== 'BRHL'),
          filter_eortc_results_by_specific_scale_type,
        )({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_BR23_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales_without_BRHL_scale.forEach(scale => {
          const result = scale.result
          expect(result).toEqual(BEST_SCORE_SYMPTOM_SCALES)
        })
      })

      it('should return the NOT_APPLICABLE_MESSAGE for the Upset by hair loss (BRHL) scale', function () {
        const BRHL_score = view_result('BRHL')(outcome)

        expect(BRHL_score).toEqual(undefined)
      })

      it('should return the best score (i.e. 100) on every functional scale', function () {
        const functional_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_BR23_SCALES,
          scale_type: 'functional',
        })

        functional_scales.forEach(scale => {
          const result = scale.result
          expect(result).toEqual(BEST_SCORE_FUNCTIONAL_SCALES)
        })
      })
    })

    describe('When we have a random response', function () {
      const outcome = eortc_qlq_br23_calculation(random_response)
      it('should return a numeric score between [0-100] for every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_BR23_SCALES,
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
          eortc_scales: EORTC_QLQ_BR23_SCALES,
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
  })
})
