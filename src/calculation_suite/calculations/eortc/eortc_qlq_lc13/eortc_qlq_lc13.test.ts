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
import { filter_eortc_results_by_specific_scale_type } from '../common/eortc_helper_functions'
import {
  BEST_SCORE_SYMPTOM_SCALES,
  WORST_SCORE_SYMPTOM_SCALES,
} from '../common/eortc_parameters'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/eortc_qlq_lc13_responses'
import { EORTC_QLQ_LC13_SCALES } from './definition/eortc_qlq_lc13_scales'
import { eortc_qlq_lc13 } from './eortc_qlq_lc13'

const eortc_qlq_lc13_calculation = execute_test_calculation(eortc_qlq_lc13)

describe('eortc_qlq_lc13', function () {
  it('eortc_qlq_lc13 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('eortc_qlq_lc13')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_ITEM_NUMBERS = [
        'EORTCQLQLC13_Q01',
        'EORTCQLQLC13_Q02',
        'EORTCQLQLC13_Q03',
        'EORTCQLQLC13_Q04',
        'EORTCQLQLC13_Q05',
        'EORTCQLQLC13_Q06',
        'EORTCQLQLC13_Q07',
        'EORTCQLQLC13_Q08',
        'EORTCQLQLC13_Q09',
        'EORTCQLQLC13_Q10',
        'EORTCQLQLC13_Q11',
        'EORTCQLQLC13_Q12',
        // 'EORTCQLQLC13_Q13'- Not used for scoring
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(EORTC_QLQ_LC13_SCALES)

      expect(EXPECTED_ITEM_NUMBERS).to.eql(configured_input_ids)
    })

    it('should have the expected item numbers configured for the "Dyspnoae" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'EORTCQLQLC13_Q03',
        'EORTCQLQLC13_Q04',
        'EORTCQLQLC13_Q05',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCDY')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Coughing" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q01']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCCO')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Haemoptysis" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q02']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCHA')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Sore mouth" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q06']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCSM')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Dysphagia" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q07']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCDS')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Peripheral neuropathy" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q08']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCPN')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Alopecia" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q09']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCHR')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Pain in chest" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q10']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCPC')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Pain in arm or shoulder" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q11']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCPA')(EORTC_QLQ_LC13_SCALES)
      )
    })

    it('should have the expected input ids configured for the "Pain in other parts" subscale', function () {
      const EXPECTED_INPUT_IDS = ['EORTCQLQLC13_Q12']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('LCPO')(EORTC_QLQ_LC13_SCALES)
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = eortc_qlq_lc13_calculation(worst_response)

    it('should calculate a score for all 10 scales', function () {
      const AMOUNT_OF_SCALES = 10

      expect(outcome).to.have.length(AMOUNT_OF_SCALES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_CALCULATION_NAMES = [
        'LCDY',
        'LCCO',
        'LCHA',
        'LCSM',
        'LCDS',
        'LCPN',
        'LCHR',
        'LCPC',
        'LCPA',
        'LCPO',
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
        const all_scales = eortc_qlq_lc13_calculation({})

        all_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(undefined)
        })
      })
    })

    describe('When not all 3 items of the dyspnoea scale are answered', function () {
      const outcome = eortc_qlq_lc13_calculation({
        EORTCQLQLC13_Q03: 4,
        EORTCQLQLC13_Q04: 4,
        // EORTCQLQLC13_Q05: 4 --> Leave one item unanswered
      })

      it('should return the "CANNOT_COMPUTE_MESSAGE" for the dyspnoae scale', function () {
        const result = view_result('LCDY')(outcome)

        expect(result).to.eql(undefined)
      })
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    describe('When all inputs are answered with the worst response', function () {
      const outcome = eortc_qlq_lc13_calculation(worst_response)
      it('should return the worst score (i.e. 100) on every symptom scale', function () {
        /**
         * All symptom scales are scored as follows
         * 0 = Best and 100 = Worst
         */
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_LC13_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(WORST_SCORE_SYMPTOM_SCALES)
        })
      })
    })

    describe('When all inputs are answered with the best response', function () {
      const outcome = eortc_qlq_lc13_calculation(best_response)
      it('should return the best score (i.e. 0) on every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_LC13_SCALES,
          scale_type: 'symptoms',
        })

        symptom_scales.forEach(scale => {
          const result = scale.result
          expect(result).to.eql(BEST_SCORE_SYMPTOM_SCALES)
        })
      })
    })

    describe('When we have a random response', function () {
      const outcome = eortc_qlq_lc13_calculation(random_response)
      it('should return a numeric score between [0-100] for every symptom scale', function () {
        const symptom_scales = filter_eortc_results_by_specific_scale_type({
          calculation_output: outcome,
          eortc_scales: EORTC_QLQ_LC13_SCALES,
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
    })
  })

  describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_lc13_calculation({
            EORTCQLQLC13_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [1,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_lc13_calculation({
            EORTCQLQLC13_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [1,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          eortc_qlq_lc13_calculation({
            EORTCQLQLC13_Q01: 999,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
