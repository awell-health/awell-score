/* eslint-disable no-magic-numbers */
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
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sf12_test_responses'
import { SF12_SUBSCALES } from './definition/sf12_subscales'
import { sf12 } from './sf12'

const WORST_SCORE = 0
const BEST_SCORE = 100

const sf12_calculation = execute_test_calculation(sf12)

describe('sf12', function () {
  it('sf12 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('sf12')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'SF12_Q01',
        'SF12_Q02',
        'SF12_Q03',
        'SF12_Q04',
        'SF12_Q05',
        'SF12_Q06',
        'SF12_Q07',
        'SF12_Q08',
        'SF12_Q09',
        'SF12_Q10',
        'SF12_Q11',
        'SF12_Q12',
      ]

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(SF12_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input idss configured for the "General health" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q01']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('GENERAL_HEALTH')(SF12_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Physical functioning	', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q02', 'SF12_Q03']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PHYSICAL_FUNCTIONING')(
          SF12_SUBSCALES
        )
      )
    })

    it('should have the expected input idss configured for the "Role physical" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q04', 'SF12_Q05']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('ROLE_PHYSICAL')(SF12_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Role emotional" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q06', 'SF12_Q07']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('ROLE_EMOTIONAL')(SF12_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Bodily pain" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q08']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('BODILY_PAIN')(SF12_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Mental health" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q09', 'SF12_Q10']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('MENTAL_HEALTH')(SF12_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Vitality" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q11']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('VITALITY')(SF12_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Social functioning" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF12_Q12']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SOCIAL_FUNCTIONING')(
          SF12_SUBSCALES
        )
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sf12_calculation(best_response)

    it('should return a score for all 8 subscales', function () {
      expect(outcome).to.have.length(8)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'GENERAL_HEALTH',
        'PHYSICAL_FUNCTIONING',
        'ROLE_PHYSICAL',
        'ROLE_EMOTIONAL',
        'BODILY_PAIN',
        'MENTAL_HEALTH',
        'VITALITY',
        'SOCIAL_FUNCTIONING',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).to.eql(
        extracted_calculation_ids_from_outcome
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return "Missing" as the score for every subscale', function () {
        const outcome = sf12_calculation({})

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).to.eql(undefined)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst possible response (i.e. worst health state) is passed', function () {
      it('should return the worst score for every subscale', function () {
        const outcome = sf12_calculation(worst_response)

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).to.eql(WORST_SCORE)
        })
      })
    })

    describe('when a median response is passed', function () {
      const outcome = sf12_calculation(median_response)
      const DEFAULT_MEDIAN_SCORE = 50

      it('should return the expected score for "General health" subscale', function () {
        const score = view_result('GENERAL_HEALTH')(outcome)
        const EXPECTED_SCORE = 60 // Median score cannot be 50 but is 60

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Physical functioning" subscale', function () {
        const score = view_result('PHYSICAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role physical" subscale', function () {
        const score = view_result('ROLE_PHYSICAL')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role emotional" subscale', function () {
        const score = view_result('ROLE_EMOTIONAL')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Bodily pain" subscale', function () {
        const score = view_result('BODILY_PAIN')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Mental health" subscale', function () {
        const score = view_result('MENTAL_HEALTH')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Vitality" subscale', function () {
        const score = view_result('VITALITY')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Social functioning" subscale', function () {
        const score = view_result('SOCIAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })

    describe('when best possible response (i.e. best health state) is passed', function () {
      it('should return the best score for every subscale', function () {
        const outcome = sf12_calculation(best_response)

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).to.eql(BEST_SCORE)
        })
      })
    })

    describe('when a random response is passed', function () {
      const outcome = sf12_calculation(random_response)

      it('should return the expected score for "General health" subscale', function () {
        const score = view_result('GENERAL_HEALTH')(outcome)
        const EXPECTED_SCORE = 60

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Physical functioning" subscale', function () {
        const score = view_result('PHYSICAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = 25

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role physical" subscale', function () {
        const score = view_result('ROLE_PHYSICAL')(outcome)
        const EXPECTED_SCORE = 37.5

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role emotional" subscale', function () {
        const score = view_result('ROLE_EMOTIONAL')(outcome)
        const EXPECTED_SCORE = 62.5

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Bodily pain" subscale', function () {
        const score = view_result('BODILY_PAIN')(outcome)
        const EXPECTED_SCORE = 75

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Mental health" subscale', function () {
        const score = view_result('MENTAL_HEALTH')(outcome)
        const EXPECTED_SCORE = 62.5

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Vitality" subscale', function () {
        const score = view_result('VITALITY')(outcome)
        const EXPECTED_SCORE = 0

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Social functioning" subscale', function () {
        const score = view_result('SOCIAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = 50

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q01: 6,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
