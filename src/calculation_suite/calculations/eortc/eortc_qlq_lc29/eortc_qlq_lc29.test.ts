import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../shared_functions'
import {
  BEST_SCORE_SYMPTOM_SCALES,
  WORST_SCORE_SYMPTOM_SCALES,
} from '../common/eortc_parameters'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/eortc_qlq_lc29_responses'
import { EORTC_QLQ_LC29_SCALES } from './definition/eortc_qlq_lc29_scales'
import { eortc_qlq_lc29 } from './eortc_qlq_lc29'

const eortc_qlq_lc29_calculation = execute_test_calculation(eortc_qlq_lc29)

describe('eortc_qlq_lc29', function () {
  it('eortc_qlq_lc29 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('eortc_qlq_lc29')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EORTC_QLQ_LC29_Q31',
        'EORTC_QLQ_LC29_Q52',
        'EORTC_QLQ_LC29_Q33',
        'EORTC_QLQ_LC29_Q34',
        'EORTC_QLQ_LC29_Q35',
        'EORTC_QLQ_LC29_Q36',
        'EORTC_QLQ_LC29_Q37',
        'EORTC_QLQ_LC29_Q38',
        'EORTC_QLQ_LC29_Q39',
        'EORTC_QLQ_LC29_Q43',
        'EORTC_QLQ_LC29_Q44',
        'EORTC_QLQ_LC29_Q45',
        'EORTC_QLQ_LC29_Q46',
        'EORTC_QLQ_LC29_Q47',
        'EORTC_QLQ_LC29_Q48',
        'EORTC_QLQ_LC29_Q50',
        'EORTC_QLQ_LC29_Q53',
        'EORTC_QLQ_LC29_Q49',
        'EORTC_QLQ_LC29_Q51',
        'EORTC_QLQ_LC29_Q55',
        'EORTC_QLQ_LC29_Q56',
        'EORTC_QLQ_LC29_Q57',
        'EORTC_QLQ_LC29_Q58',
        'EORTC_QLQ_LC29_Q59',
        'EORTC_QLQ_LC29_Q32',
        'EORTC_QLQ_LC29_Q40',
        'EORTC_QLQ_LC29_Q41',
        'EORTC_QLQ_LC29_Q42',
        'EORTC_QLQ_LC29_Q54',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(EORTC_QLQ_LC29_SCALES)

      expect(EXPECTED_ITEM_NUMBERS).to.eql(configured_input_ids)
    })

    it('should have the expected item numbers configured for the "Coughing" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_LC29_Q31', 'EORTC_QLQ_LC29_Q52']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('COU')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Shortness of breath" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTC_QLQ_LC29_Q33',
        'EORTC_QLQ_LC29_Q34',
        'EORTC_QLQ_LC29_Q35',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('DY')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Side effects of treatment" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTC_QLQ_LC29_Q36',
        'EORTC_QLQ_LC29_Q37',
        'EORTC_QLQ_LC29_Q38',
        'EORTC_QLQ_LC29_Q39',
        'EORTC_QLQ_LC29_Q43',
        'EORTC_QLQ_LC29_Q44',
        'EORTC_QLQ_LC29_Q45',
        'EORTC_QLQ_LC29_Q46',
        'EORTC_QLQ_LC29_Q47',
        'EORTC_QLQ_LC29_Q48',
        'EORTC_QLQ_LC29_Q50',
        'EORTC_QLQ_LC29_Q53',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SE')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Fear of progression" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_LC29_Q49', 'EORTC_QLQ_LC29_Q51']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('FP')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Surgery-related problems" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTC_QLQ_LC29_Q55',
        'EORTC_QLQ_LC29_Q56',
        'EORTC_QLQ_LC29_Q57',
        'EORTC_QLQ_LC29_Q58',
        'EORTC_QLQ_LC29_Q59',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SU')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Coughing blood / haemoptysis" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_LC29_Q32']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('HA')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Pain in chest" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_LC29_Q40']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PC')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Pain in arm or shoulder" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_LC29_Q41']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PA')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Pain in other parts of body" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_LC29_Q42']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PO')(EORTC_QLQ_LC29_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Weight loss" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTC_QLQ_LC29_Q54']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('WL')(EORTC_QLQ_LC29_SCALES)
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = eortc_qlq_lc29_calculation(worst_response)

    it('should calculate a score for all 10 scales', function () {
      const AMOUNT_OF_SCALES = 10

      expect(outcome).to.have.length(AMOUNT_OF_SCALES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_CALCULATION_NAMES = [
        'COU',
        'DY',
        'SE',
        'FP',
        'SU',
        'HA',
        'PC',
        'PA',
        'PO',
        'WL',
      ]

      const EXTRACTED_CALCULATION_NAMES_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_NAMES_FROM_RESULT).to.eql(
        EXPECTED_CALCULATION_NAMES
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return the "MISSING_MESSAGE" for all scales', function () {
        const all_scales = eortc_qlq_lc29_calculation({})

        all_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(undefined)
        })
      })
    })

    describe('when patient indicated to never had lung cancer related surgery before', function () {
      it('should return the "NOT_APPLICABLE_MESSAGE" for the Surgery-related problems (SU) scale', function () {
        const outcome = eortc_qlq_lc29_calculation({
          LUNGCANCER_SURGERY_BOOL: false,
        })
        const result = view_result('SU')(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    describe('when all inputs are answered with the worst response', function () {
      it('should return the worst score (i.e. 100) on every scale', function () {
        const scale_scores = eortc_qlq_lc29_calculation(worst_response)

        scale_scores.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })
      })
    })

    describe('when all inputs are answered with the best response', function () {
      it('should return the best score (i.e. 0) on every scale', function () {
        const scale_scores = eortc_qlq_lc29_calculation(best_response)

        scale_scores.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })
      })
    })

    describe('when we have a random response', function () {
      it('should return a numeric score between [0-100] for every scale', function () {
        const scale_scores = eortc_qlq_lc29_calculation(random_response)

        scale_scores.forEach(scale => {
          const result = scale.result
          expect(result)
            .to.be.a('number')
            .that.is.at.least(BEST_SCORE_SYMPTOM_SCALES) // best score = 0
            .that.is.at.most(WORST_SCORE_SYMPTOM_SCALES) // worst score = 100
        })
      })
    })
  })

  describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_lc29_calculation({
            EORTC_QLQ_LC29_Q31: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [1,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_lc29_calculation({
            EORTC_QLQ_LC29_Q31: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [1,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_lc29_calculation({
            EORTC_QLQ_LC29_Q31: 999,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
