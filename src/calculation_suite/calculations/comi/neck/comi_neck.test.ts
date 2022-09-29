import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_in_subscale } from '../../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/comi_neck_respones'
import { comi_neck } from './comi_neck'
import { COMI_NECK_DOMAINS } from './definition'

const COMI_MIN_SCORE = 0
const COMI_MEDIAN_SCORE = 5
const COMI_MAX_SCORE = 10

const comi_neck_calculation = execute_test_calculation(comi_neck)

describe('comi_neck', function () {
  it('comi_neck calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('comi_neck')
  })

  describe('basic assumptions', function () {
    const outcome = comi_neck_calculation(min_response)

    // A score for all domains (n=5) and a total score (n=1)
    const EXPECTED_CALCULATION_IDS = [
      'PAIN',
      'NECK_RELATED_FUNCTION',
      'SYMPTOM_SPECIFIC_WELLBEING',
      'GENERAL_QOL',
      'DISABILITY',
      'TOTAL',
    ]

    it('should return 6 calculation results', function () {
      expect(outcome).to.have.length(6) // 5 Domains and a total score
    })

    it('should contain all the expected calculation ids', function () {
      const EXTRACTED_CALCULATION_IDS_FROM_RESULTS =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULTS).to.eql(
        EXPECTED_CALCULATION_IDS
      )
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'item_1a',
          'item_1b',
          'item_2',
          'item_3',
          'item_4',
          'item_5',
          'item_6',
        ]

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale)
        )(COMI_NECK_DOMAINS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('when answer on item 1a is out of the expected range', function () {
      describe('when answer < 0', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() => comi_neck_calculation({ item_1a: -1 })).to.throw(
            InvalidInputsError
          )
        })
      })

      describe('when answer > 10', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() => comi_neck_calculation({ item_1a: 11 })).to.throw(
            InvalidInputsError
          )
        })
      })
    })

    describe('when answer on item 3 is not expected', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() => comi_neck_calculation({ item_3: 4 })).to.throw(
          InvalidInputsError
        )
      })
    })

    describe('when called with an empty response', function () {
      it('should return MISSING_MESSAGE as the score for every domain', function () {
        const outcome = comi_neck_calculation({})

        outcome.forEach(domain => {
          const result = domain.result
          expect(result).to.eql(undefined)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score for each domain', function () {
        const outcome = comi_neck_calculation(min_response)

        outcome.forEach(domain => {
          const result = domain.result
          expect(result).to.eql(COMI_MIN_SCORE)
        })
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score for each domain', function () {
        const outcome = comi_neck_calculation(median_response)

        outcome.forEach(domain => {
          const result = domain.result
          expect(result).to.eql(COMI_MEDIAN_SCORE)
        })
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score for each subscale', function () {
        const outcome = comi_neck_calculation(max_response)

        outcome.forEach(domain => {
          const result = domain.result
          expect(result).to.eql(COMI_MAX_SCORE)
        })
      })
    })

    describe('when called with a random response', function () {
      const results = comi_neck_calculation(random_response)

      it('should return the expected score for the "PAIN" domain"', function () {
        const pain_score = view_result('PAIN')(results)

        const EXPECTED_PAIN_SCORE = 7

        expect(pain_score).to.eql(EXPECTED_PAIN_SCORE)
      })
      it('should return the expected score for the "NECK_RELATED_FUNCTION" domain"', function () {
        const neck_related_function_score = view_result(
          'NECK_RELATED_FUNCTION'
        )(results)

        const EXPECTED_NECK_RELATED_FUNCTION_SCORE = 2.5

        expect(neck_related_function_score).to.eql(
          EXPECTED_NECK_RELATED_FUNCTION_SCORE
        )
      })
      it('should return the expected score for the "SYMPTOM_SPECIFIC_WELLBEING" domain"', function () {
        const symptom_specific_well_being_score = view_result(
          'SYMPTOM_SPECIFIC_WELLBEING'
        )(results)

        const EXPECTED_SYMPTOM_SPECIFIC_WELL_BEING_SCORE = 7.5

        expect(symptom_specific_well_being_score).to.eql(
          EXPECTED_SYMPTOM_SPECIFIC_WELL_BEING_SCORE
        )
      })
      it('should return the expected score for the "GENERAL_QOL" domain"', function () {
        const qol_score = view_result('GENERAL_QOL')(results)

        const EXPECTED_QOL_SCORE = 10

        expect(qol_score).to.eql(EXPECTED_QOL_SCORE)
      })
      it('should return the expected score for the "DISABILITY" domain"', function () {
        const disability_score = view_result('DISABILITY')(results)

        const EXPECTED_DISABILITY_SCORE = 2.5

        expect(disability_score).to.eql(EXPECTED_DISABILITY_SCORE)
      })
      it('should return the expected total score', function () {
        const total_score = view_result('TOTAL')(results)

        const EXPECTED_TOTAL_SCORE = 5.9

        expect(total_score).to.eql(EXPECTED_TOTAL_SCORE)
      })
    })
  })
})
