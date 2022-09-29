import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { MISSING_STATUS, NOT_APPLICABLE_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
  view_status,
} from '../../shared_functions'
import {
  BEST_SCORE_FUNCTIONAL_SCALES,
  BEST_SCORE_SYMPTOM_SCALES,
  WORST_SCORE_FUNCTIONAL_SCALES,
  WORST_SCORE_SYMPTOM_SCALES,
} from '../common/eortc_parameters'
import {
  best_response_no_stoma_men,
  worst_response_no_stoma_men,
} from './__testdata__/eortc_qlq_cr29_test_responses_no_stoma_men'
import {
  best_response_no_stoma_women,
  worst_response_no_stoma_women,
} from './__testdata__/eortc_qlq_cr29_test_responses_no_stoma_women'
import {
  best_response_stoma_men,
  worst_response_stoma_men,
} from './__testdata__/eortc_qlq_cr29_test_responses_stoma_men'
import {
  best_response_stoma_women,
  worst_response_stoma_women,
} from './__testdata__/eortc_qlq_cr29_test_responses_stoma_women'
import { EORTC_QLQ_CR29_SCALES } from './definition/eortc_qlq_cr29_scales'
import { eortc_qlq_cr29 } from './eortc_qlq_cr29'

const eortc_qlq_cr29_calculation = execute_test_calculation(eortc_qlq_cr29)

describe('eortc_qlq_cr29', function () {
  it('eortc_qlq_cr29 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('eortc_qlq_cr29')
  })

  describe('specific_steps_eortc_qlq_cr29_calc', function () {
    describe('basic underlying assumptions', function () {
      const outcome = eortc_qlq_cr29_calculation(best_response_no_stoma_men)

      it('should calculate a score for all scales', function () {
        const AMOUNT_OF_SCALES = 28

        expect(outcome).to.have.length(AMOUNT_OF_SCALES)
      })

      it('should return a result for all the expected calculation names', function () {
        const EXPECTED_CALCULATION_NAMES = [
          'BI',
          'ANX',
          'WEI',
          'SEXM',
          'SEXW',
          'UF',
          'BMS',
          'SF_STOMA',
          'SF_NO_STOMA',
          'UI',
          'DY',
          'AP',
          'BP',
          'BF',
          'DM',
          'HL',
          'TA',
          'FL_STOMA',
          'FL_NO_STOMA',
          'FI_STOMA',
          'FI_NO_STOMA',
          'SS_STOMA',
          'SS_NO_STOMA',
          'EMB_STOMA',
          'EMB_NO_STOMA',
          'STO',
          'IMP',
          'DYS',
        ]

        const EXTRACTED_CALCULATION_NAMES_FROM_RESULT =
          get_result_ids_from_calculation_output(outcome)

        expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).to.eql(
          EXPECTED_CALCULATION_NAMES
        )
      })
    })

    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'EORTCQLQCR29_Q31',
          'EORTCQLQCR29_Q32',
          'EORTCQLQCR29_Q33',
          'EORTCQLQCR29_Q34',
          'EORTCQLQCR29_Q35',
          'EORTCQLQCR29_Q36',
          'EORTCQLQCR29_Q37',
          'EORTCQLQCR29_Q38',
          'EORTCQLQCR29_Q39',
          'EORTCQLQCR29_Q40',
          'EORTCQLQCR29_Q41',
          'EORTCQLQCR29_Q42',
          'EORTCQLQCR29_Q43',
          'EORTCQLQCR29_Q44',
          'EORTCQLQCR29_Q45',
          'EORTCQLQCR29_Q46',
          'EORTCQLQCR29_Q47',
          // 'EORTCQLQCR29_Q48', --- Not used in score calculation
          'EORTCQLQCR29_Q49_NO_STOMA',
          'EORTCQLQCR29_Q49_STOMA',
          'EORTCQLQCR29_Q50_NO_STOMA',
          'EORTCQLQCR29_Q50_STOMA',
          'EORTCQLQCR29_Q51_NO_STOMA',
          'EORTCQLQCR29_Q51_STOMA',
          'EORTCQLQCR29_Q52_NO_STOMA',
          'EORTCQLQCR29_Q52_STOMA',
          'EORTCQLQCR29_Q53_NO_STOMA',
          'EORTCQLQCR29_Q53_STOMA',
          'EORTCQLQCR29_Q54_NO_STOMA',
          'EORTCQLQCR29_Q54_STOMA',
          'EORTCQLQCR29_Q55_STOMA',
          'EORTCQLQCR29_Q56',
          'EORTCQLQCR29_Q57',
          'EORTCQLQCR29_Q58',
          'EORTCQLQCR29_Q59',
        ]

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale)
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Body image" scale', function () {
        const EXPECTED_INPUT_IDS = [
          'EORTCQLQCR29_Q45',
          'EORTCQLQCR29_Q46',
          'EORTCQLQCR29_Q47',
        ]

        const configured_input_ids = get_input_ids_for_specific_subscale('BI')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Anxiety" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q43']

        const configured_input_ids = get_input_ids_for_specific_subscale('ANX')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Weight" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q44']

        const configured_input_ids = get_input_ids_for_specific_subscale('WEI')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Sexual interest (men)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q56']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'SEXM'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Sexual interest (women)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q58']
        const configured_input_ids = get_input_ids_for_specific_subscale(
          'SEXW'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Urinary frequence" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q31', 'EORTCQLQCR29_Q32']

        const configured_input_ids = get_input_ids_for_specific_subscale('UF')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Blood and mucus in stool" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q38', 'EORTCQLQCR29_Q39']

        const configured_input_ids = get_input_ids_for_specific_subscale('BMS')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Stool frequency (stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = [
          'EORTCQLQCR29_Q52_STOMA',
          'EORTCQLQCR29_Q53_STOMA',
        ]
        const configured_input_ids = get_input_ids_for_specific_subscale(
          'SF_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Stool frequency (no stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = [
          'EORTCQLQCR29_Q52_NO_STOMA',
          'EORTCQLQCR29_Q53_NO_STOMA',
        ]
        const configured_input_ids = get_input_ids_for_specific_subscale(
          'SF_NO_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Urinary incontinence" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q33']

        const configured_input_ids = get_input_ids_for_specific_subscale('UI')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Dysuria" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q34']

        const configured_input_ids = get_input_ids_for_specific_subscale('DY')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Abdominal pain" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q35']

        const configured_input_ids = get_input_ids_for_specific_subscale('AP')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Buttock pain" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q36']

        const configured_input_ids = get_input_ids_for_specific_subscale('BP')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Bloating" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q37']

        const configured_input_ids = get_input_ids_for_specific_subscale('BF')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Dry mouth" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q40']

        const configured_input_ids = get_input_ids_for_specific_subscale('DM')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Hair loss" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q41']

        const configured_input_ids = get_input_ids_for_specific_subscale('HL')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Taste" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q42']

        const configured_input_ids = get_input_ids_for_specific_subscale('TA')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Flatulence (stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q49_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'FL_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Flatulence (no stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q49_NO_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'FL_NO_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Faecal incontinence (stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q50_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'FI_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Faecal incontinence (no stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q50_NO_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'FI_NO_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Sore skin (stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q51_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'SS_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Sore skin (no stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q51_NO_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'SS_NO_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Embarrassment (stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q54_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'EMB_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Embarrassment (no stoma)" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q54_NO_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale(
          'EMB_NO_STOMA'
        )(EORTC_QLQ_CR29_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Stoma care problems" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q55_STOMA']

        const configured_input_ids = get_input_ids_for_specific_subscale('STO')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Impotence" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q57']

        const configured_input_ids = get_input_ids_for_specific_subscale('IMP')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input id configured for the "Dyspareunia" scale', function () {
        const EXPECTED_INPUT_IDS = ['EORTCQLQCR29_Q59']

        const configured_input_ids = get_input_ids_for_specific_subscale('DYS')(
          EORTC_QLQ_CR29_SCALES
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when the response is empty', function () {
      it('should return the "MISSING_MESSAGE" for all scales', function () {
        const all_scales = eortc_qlq_cr29_calculation({})

        all_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(undefined)
        })
      })
    })

    describe('when patient has a stoma and is a male', function () {
      describe('when best response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(best_response_stoma_men)

        it('should return the best score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Sexual interest (men)" scale', function () {
          const score = view_result('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Sexual interest (women)" scale', function () {
          const status = view_status('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the best score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Stool frequency (stoma)" scale', function () {
          const score = view_result('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Stool frequency (no stoma)" scale', function () {
          const status = view_status('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Flatulence (stoma)" scale', function () {
          const score = view_result('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (no stoma)" scale', function () {
          const status = view_status('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Faecal incontinence (stoma)" scale', function () {
          const score = view_result('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (no stoma)" scale', function () {
          const status = view_status('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Sore skin (stoma)" scale', function () {
          const score = view_result('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (no stoma)" scale', function () {
          const status = view_status('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Embarrassment (stoma)" scale', function () {
          const score = view_result('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (no stoma)" scale', function () {
          const status = view_status('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Stoma care problems" scale', function () {
          const score = view_result('STO')(outcome)

          // STO is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Impotence" scale', function () {
          const score = view_result('IMP')(outcome)

          // IMP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Dyspareunia" scale', function () {
          const status = view_status('DYS')(outcome)

          // DYS is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('when worst response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(worst_response_stoma_men)

        it('should return the worst score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Sexual interest (men)" scale', function () {
          const score = view_result('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Sexual interest (women)" scale', function () {
          const status = view_status('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the worst score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Stool frequency (stoma)" scale', function () {
          const score = view_result('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Stool frequency (no stoma)" scale', function () {
          const status = view_status('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Flatulence (stoma)" scale', function () {
          const score = view_result('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (no stoma)" scale', function () {
          const status = view_status('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Faecal incontinence (stoma)" scale', function () {
          const score = view_result('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (no stoma)" scale', function () {
          const status = view_status('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Sore skin (stoma)" scale', function () {
          const score = view_result('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (no stoma)" scale', function () {
          const status = view_status('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Embarrassment (stoma)" scale', function () {
          const score = view_result('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (no stoma)" scale', function () {
          const status = view_status('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Stoma care problems" scale', function () {
          const score = view_result('STO')(outcome)

          // STO is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Impotence" scale', function () {
          const score = view_result('IMP')(outcome)

          // IMP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Dyspareunia" scale', function () {
          const status = view_status('DYS')(outcome)

          // DYS is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })
      })
    })

    describe('when patient has a stoma and is a female', function () {
      describe('when best response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(best_response_stoma_women)

        it('should return the best score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return missing for the "Sexual interest (men)" scale', function () {
          const status = view_status('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the best score for the "Sexual interest (women)" scale', function () {
          const score = view_result('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Stool frequency (stoma)" scale', function () {
          const score = view_result('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Stool frequency (no stoma)" scale', function () {
          const status = view_status('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Flatulence (stoma)" scale', function () {
          const score = view_result('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (no stoma)" scale', function () {
          const status = view_status('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Faecal incontinence (stoma)" scale', function () {
          const score = view_result('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (no stoma)" scale', function () {
          const status = view_status('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Sore skin (stoma)" scale', function () {
          const score = view_result('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (no stoma)" scale', function () {
          const status = view_status('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Embarrassment (stoma)" scale', function () {
          const score = view_result('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (no stoma)" scale', function () {
          const status = view_status('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Stoma care problems" scale', function () {
          const score = view_result('STO')(outcome)

          // STO is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Impotence" scale', function () {
          const status = view_status('IMP')(outcome)

          // IMP is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the best score for the "Dyspareunia" scale', function () {
          const score = view_result('DYS')(outcome)

          // DYS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })
      })

      describe('when worst response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(worst_response_stoma_women)

        it('should return the worst score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return missing for the "Sexual interest (men)" scale', function () {
          const status = view_status('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the worst score for the "Sexual interest (women)" scale', function () {
          const result = view_result('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(result).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Stool frequency (stoma)" scale', function () {
          const score = view_result('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Stool frequency (no stoma)" scale', function () {
          const status = view_status('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Flatulence (stoma)" scale', function () {
          const score = view_result('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (no stoma)" scale', function () {
          const status = view_status('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Faecal incontinence (stoma)" scale', function () {
          const score = view_result('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (no stoma)" scale', function () {
          const status = view_status('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Sore skin (stoma)" scale', function () {
          const score = view_result('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (no stoma)" scale', function () {
          const status = view_status('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Embarrassment (stoma)" scale', function () {
          const score = view_result('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (no stoma)" scale', function () {
          const status = view_status('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Stoma care problems" scale', function () {
          const score = view_result('STO')(outcome)

          // STO is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Impotence" scale', function () {
          const status = view_status('IMP')(outcome)

          // IMP is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the worst score for the "Dyspareunia" scale', function () {
          const score = view_result('DYS')(outcome)

          // DYS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })
      })
    })

    describe('when patient has no stoma and is a male', function () {
      describe('when best response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(best_response_no_stoma_men)

        it('should return the best score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Sexual interest (men)" scale', function () {
          const score = view_result('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Sexual interest (women)" scale', function () {
          const status = view_status('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the best score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Stool frequency (stoma)" scale', function () {
          const status = view_status('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Stool frequency (no stoma)" scale', function () {
          const score = view_result('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (stoma)" scale', function () {
          const status = view_status('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Flatulence (no stoma)" scale', function () {
          const score = view_result('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (stoma)" scale', function () {
          const status = view_status('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Faecal incontinence (no stoma)" scale', function () {
          const score = view_result('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (stoma)" scale', function () {
          const status = view_status('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Sore skin (no stoma)" scale', function () {
          const score = view_result('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (stoma)" scale', function () {
          const status = view_status('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Embarrassment (no stoma)" scale', function () {
          const score = view_result('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicbale for the "Stoma care problems" scale', function () {
          const status = view_status('STO')(outcome)

          // STO is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Impotence" scale', function () {
          const score = view_result('IMP')(outcome)

          // IMP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Dyspareunia" scale', function () {
          const status = view_status('DYS')(outcome)

          // DYS is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('when worst response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(worst_response_no_stoma_men)

        it('should return the worst score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Sexual interest (men)" scale', function () {
          const score = view_result('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Sexual interest (women)" scale', function () {
          const status = view_status('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the worst score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Stool frequency (stoma)" scale', function () {
          const status = view_status('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Stool frequency (no stoma)" scale', function () {
          const score = view_result('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (stoma)" scale', function () {
          const status = view_status('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Flatulence (no stoma)" scale', function () {
          const score = view_result('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (stoma)" scale', function () {
          const status = view_status('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Faecal incontinence (no stoma)" scale', function () {
          const score = view_result('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (stoma)" scale', function () {
          const status = view_status('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Sore skin (no stoma)" scale', function () {
          const score = view_result('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (stoma)" scale', function () {
          const status = view_status('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Embarrassment (no stoma)" scale', function () {
          const score = view_result('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicbale for the "Stoma care problems" scale', function () {
          const status = view_status('STO')(outcome)

          // STO is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Impotence" scale', function () {
          const score = view_result('IMP')(outcome)

          // IMP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Dyspareunia" scale', function () {
          const status = view_status('DYS')(outcome)

          // DYS is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })
      })
    })

    describe('when patient has no stoma and is a female', function () {
      describe('when best response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(best_response_no_stoma_women)

        it('should return the best score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the best score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(BEST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return not applicable for the "Sexual interest (men)" scale', function () {
          const status = view_status('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the best score for the "Sexual interest (women)" scale', function () {
          const score = view_result('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Stool frequency (stoma)" scale', function () {
          const status = view_status('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Stool frequency (no stoma)" scale', function () {
          const score = view_result('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the best score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (stoma)" scale', function () {
          const status = view_status('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Flatulence (no stoma)" scale', function () {
          const score = view_result('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (stoma)" scale', function () {
          const status = view_status('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Faecal incontinence (no stoma)" scale', function () {
          const score = view_result('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (stoma)" scale', function () {
          const status = view_status('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Sore skin (no stoma)" scale', function () {
          const score = view_result('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (stoma)" scale', function () {
          const status = view_status('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the best score for the "Embarrassment (no stoma)" scale', function () {
          const score = view_result('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicbale for the "Stoma care problems" scale', function () {
          const status = view_status('STO')(outcome)

          // STO is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return missing for the "Impotence" scale', function () {
          const status = view_status('IMP')(outcome)

          // IMP is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the best score for the "Dyspareunia" scale', function () {
          const score = view_result('DYS')(outcome)

          // DYS is a symptom scale
          expect(score).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })
      })

      describe('when worst response is passed', function () {
        const outcome = eortc_qlq_cr29_calculation(
          worst_response_no_stoma_women
        )

        it('should return the worst score for the "Body image" scale', function () {
          const score = view_result('BI')(outcome)

          // BI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Anxiety" scale', function () {
          const score = view_result('ANX')(outcome)

          // ANX is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return the worst score for the "Weight" scale', function () {
          const score = view_result('WEI')(outcome)

          // WEI is a functional scale
          expect(score).to.eql(WORST_SCORE_FUNCTIONAL_SCALES)
        })

        it('should return missing for the "Sexual interest (men)" scale', function () {
          const status = view_status('SEXM')(outcome)

          // SEXM is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the worst score for the "Sexual interest (women)" scale', function () {
          const score = view_result('SEXW')(outcome)

          // SEXW is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Urinary frequence" scale', function () {
          const score = view_result('UF')(outcome)

          // UF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Blood and mucus in stool" scale', function () {
          const score = view_result('BMS')(outcome)

          // BMS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return missing for the "Stool frequency (stoma)" scale', function () {
          const status = view_status('SF_STOMA')(outcome)

          // SF is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Stool frequency (no stoma)" scale', function () {
          const score = view_result('SF_NO_STOMA')(outcome)

          // SF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Urinary incontinence" scale', function () {
          const score = view_result('UI')(outcome)

          // UI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dysuria" scale', function () {
          const score = view_result('DY')(outcome)

          // DY is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Abdominal pain" scale', function () {
          const score = view_result('AP')(outcome)

          // AP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Buttock pain" scale', function () {
          const score = view_result('BP')(outcome)

          // BP is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Bloating" scale', function () {
          const score = view_result('BF')(outcome)

          // BF is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Dry mouth" scale', function () {
          const score = view_result('DM')(outcome)

          // DM is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Hair loss" scale', function () {
          const score = view_result('HL')(outcome)

          // HL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return the worst score for the "Taste" scale', function () {
          const score = view_result('TA')(outcome)

          // TA is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Flatulence (stoma)" scale', function () {
          const status = view_status('FL_STOMA')(outcome)

          // FL is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Flatulence (no stoma)" scale', function () {
          const score = view_result('FL_NO_STOMA')(outcome)

          // FL is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Faecal incontinence (stoma)" scale', function () {
          const status = view_status('FI_STOMA')(outcome)

          // FI is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Faecal incontinence (no stoma)" scale', function () {
          const score = view_result('FI_NO_STOMA')(outcome)

          // FI is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Sore skin (stoma)" scale', function () {
          const status = view_status('SS_STOMA')(outcome)

          // SS is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Sore skin (no stoma)" scale', function () {
          const score = view_result('SS_NO_STOMA')(outcome)

          // SS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicable for the "Embarrassment (stoma)" scale', function () {
          const status = view_status('EMB_STOMA')(outcome)

          // EMB is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return the worst score for the "Embarrassment (no stoma)" scale', function () {
          const score = view_result('EMB_NO_STOMA')(outcome)

          // EMB is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })

        it('should return not applicbale for the "Stoma care problems" scale', function () {
          const status = view_status('STO')(outcome)

          // STO is a symptom scale
          expect(status).to.eql(NOT_APPLICABLE_STATUS)
        })

        it('should return missing for the "Impotence" scale', function () {
          const status = view_status('IMP')(outcome)

          // IMP is a symptom scale
          expect(status).to.eql(MISSING_STATUS)
        })

        it('should return the worst score for the "Dyspareunia" scale', function () {
          const score = view_result('DYS')(outcome)

          // DYS is a symptom scale
          expect(score).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })
      })
    })

    describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            eortc_qlq_cr29_calculation({
              EORTCQLQCR29_Q31: "I'm not a number",
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is below the expected [1,4] range', function () {
        it('should throw an error', function () {
          expect(() =>
            eortc_qlq_cr29_calculation({
              EORTCQLQCR29_Q31: -1,
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is above the expected [1,4] range', function () {
        it('should return throw an error', function () {
          expect(() =>
            eortc_qlq_cr29_calculation({
              EORTCQLQCR29_Q31: 999,
            })
          ).to.throw(InvalidInputsError)
        })
      })
    })
  })
})
