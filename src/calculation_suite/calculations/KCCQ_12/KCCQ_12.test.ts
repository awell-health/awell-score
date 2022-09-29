import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  response_with_missing_values_or_unanswered_questions,
  worst_response,
} from './__testdata__/KCCQ_12_responses'
import { KCCQ_12_DOMAINS } from './definition'
import { KCCQ_12 } from './KCCQ_12'

const KCQQ_12_WORST_SCORE = 0
const KCQQ_12_MEDIAN_SCORE = 50
const KCQQ_12_BEST_SCORE = 100

const kccq12_calculation = execute_test_calculation(KCCQ_12)

describe('KCCQ_12', function () {
  it('KCCQ_12 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('KCCQ_12')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'KCCQ12_Q1_A',
        'KCCQ12_Q1_B',
        'KCCQ12_Q1_C',
        'KCCQ12_Q2',
        'KCCQ12_Q3',
        'KCCQ12_Q4',
        'KCCQ12_Q5',
        'KCCQ12_Q6',
        'KCCQ12_Q7',
        'KCCQ12_Q8_A',
        'KCCQ12_Q8_B',
        'KCCQ12_Q8_C',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(KCCQ_12_DOMAINS)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input idss configured for the "KCCQ12-PL" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'KCCQ12_Q1_A',
        'KCCQ12_Q1_B',
        'KCCQ12_Q1_C',
      ].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('KCCQ12-PL')(KCCQ_12_DOMAINS)
      )
    })

    it('should have the expected input idss configured for the "KCCQ12-SF" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'KCCQ12_Q2',
        'KCCQ12_Q3',
        'KCCQ12_Q4',
        'KCCQ12_Q5',
      ].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('KCCQ12-SF')(KCCQ_12_DOMAINS)
      )
    })

    it('should have the expected input idss configured for the "KCCQ12-QL" subscale', function () {
      const EXPECTED_INPUT_IDS = ['KCCQ12_Q6', 'KCCQ12_Q7'].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('KCCQ12-QL')(KCCQ_12_DOMAINS)
      )
    })

    it('should have the expected input idss configured for the "KCCQ12-SL" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'KCCQ12_Q8_A',
        'KCCQ12_Q8_B',
        'KCCQ12_Q8_C',
      ].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('KCCQ12-SL')(KCCQ_12_DOMAINS)
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = kccq12_calculation(best_response)

    it('should calculate a score for all subscales (n=4) and a total score', function () {
      const AMOUNT_OF_SCORES = 5
      expect(outcome).to.have.length(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'KCCQ12-PL',
        'KCCQ12-SF',
        'KCCQ12-QL',
        'KCCQ12-SL',
        'KCCQ12',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).to.have.members(
        EXPECTED_SCALE_IDS
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when best response is passed', function () {
      const outcome = kccq12_calculation(best_response)

      it('should return the best score on the "KCCQ12-PL" subscale', function () {
        const score = view_result('KCCQ12-PL')(outcome)

        expect(score).to.eql(KCQQ_12_BEST_SCORE)
      })

      it('should return the best score on the "KCCQ12-SF" subscale', function () {
        const score = view_result('KCCQ12-SF')(outcome)

        expect(score).to.eql(KCQQ_12_BEST_SCORE)
      })

      it('should return the best score on the "KCCQ12-QL" subscale', function () {
        const score = view_result('KCCQ12-QL')(outcome)

        expect(score).to.eql(KCQQ_12_BEST_SCORE)
      })

      it('should return the best score on the "KCCQ12-SL subscale', function () {
        const score = view_result('KCCQ12-SL')(outcome)

        expect(score).to.eql(KCQQ_12_BEST_SCORE)
      })

      it('should return the best total score', function () {
        const score = view_result('KCCQ12')(outcome)

        expect(score).to.eql(KCQQ_12_BEST_SCORE)
      })
    })

    describe('when median response is passed', function () {
      const outcome = kccq12_calculation(median_response)

      it('should return the median score on the "KCCQ12-PL" subscale', function () {
        const score = view_result('KCCQ12-PL')(outcome)

        expect(score).to.eql(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score on the "KCCQ12-SF" subscale', function () {
        const score = view_result('KCCQ12-SF')(outcome)

        expect(score).to.eql(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score on the "KCCQ12-QL" subscale', function () {
        const score = view_result('KCCQ12-QL')(outcome)

        expect(score).to.eql(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score on the "KCCQ12-SL subscale', function () {
        const score = view_result('KCCQ12-SL')(outcome)

        expect(score).to.eql(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score', function () {
        const score = view_result('KCCQ12')(outcome)

        expect(score).to.eql(KCQQ_12_MEDIAN_SCORE)
      })
    })

    describe('when worst response is passed', function () {
      const outcome = kccq12_calculation(worst_response)

      it('should return the worst score on the "KCCQ12-PL" subscale', function () {
        const score = view_result('KCCQ12-PL')(outcome)

        expect(score).to.eql(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst score on the "KCCQ12-SF" subscale', function () {
        const score = view_result('KCCQ12-SF')(outcome)

        expect(score).to.eql(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst score on the "KCCQ12-QL" subscale', function () {
        const score = view_result('KCCQ12-QL')(outcome)

        expect(score).to.eql(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst score on the "KCCQ12-SL subscale', function () {
        const score = view_result('KCCQ12-SL')(outcome)

        expect(score).to.eql(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst total score', function () {
        const score = view_result('KCCQ12')(outcome)

        expect(score).to.eql(KCQQ_12_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = kccq12_calculation(random_response)

      it('should return the expected score on the "KCCQ12-PL" subscale', function () {
        const score = view_result('KCCQ12-PL')(outcome)
        const EXPECTED_SCORE = 25

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score on the "KCCQ12-SF" subscale', function () {
        const score = view_result('KCCQ12-SF')(outcome)
        const EXPECTED_SCORE = 31.25

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score on the "KCCQ12-QL" subscale', function () {
        const score = view_result('KCCQ12-QL')(outcome)
        const EXPECTED_SCORE = 12.5

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score on the "KCCQ12-SL subscale', function () {
        const score = view_result('KCCQ12-SL')(outcome)
        const EXPECTED_SCORE = 66.67

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('KCCQ12')(outcome)
        const EXPECTED_SCORE = 33.86

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = kccq12_calculation({})

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-PL" subscale', function () {
        const score = view_result('KCCQ12-PL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-SF" subscale', function () {
        const score = view_result('KCCQ12-SF')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-QL" subscale', function () {
        const score = view_result('KCCQ12-QL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-SL subscale', function () {
        const score = view_result('KCCQ12-SL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the total score', function () {
        const score = view_result('KCCQ12')(outcome)

        expect(score).to.eql(undefined)
      })
    })

    describe('when a response is passed with answers that are considered as missing values', function () {
      const outcome = kccq12_calculation(
        response_with_missing_values_or_unanswered_questions
      )

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-PL" subscale', function () {
        const score = view_result('KCCQ12-PL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-SF" subscale', function () {
        const score = view_result('KCCQ12-SF')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-QL" subscale', function () {
        const score = view_result('KCCQ12-QL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-SL subscale', function () {
        const score = view_result('KCCQ12-SL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the total score', function () {
        const score = view_result('KCCQ12')(outcome)

        expect(score).to.eql(undefined)
      })
    })

    describe('when a response is passed where only one domain (KCCQ12-PL) is scored with the best response', function () {
      const outcome = kccq12_calculation({
        KCCQ12_Q1_A: 5, // 6 is considered as a missing value
        KCCQ12_Q1_B: 5, // 6 is considered as a missing value
        KCCQ12_Q1_C: 5, // 6 is considered as a missing value
      })

      it('should return the best score on the "KCCQ12-PL" subscale', function () {
        const score = view_result('KCCQ12-PL')(outcome)

        expect(score).to.eql(KCQQ_12_BEST_SCORE)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-SF" subscale', function () {
        const score = view_result('KCCQ12-SF')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-QL" subscale', function () {
        const score = view_result('KCCQ12-QL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the score on the "KCCQ12-SL subscale', function () {
        const score = view_result('KCCQ12-SL')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return the best total score since it will calculate total score based on the single domain score', function () {
        const score = view_result('KCCQ12')(outcome)

        expect(score).to.eql(KCQQ_12_BEST_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          kccq12_calculation({
            KCCQ12_Q1_A: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [1,6] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          kccq12_calculation({
            KCCQ12_Q1_A: 0,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [1,6] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          kccq12_calculation({
            KCCQ12_Q1_A: 7,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
