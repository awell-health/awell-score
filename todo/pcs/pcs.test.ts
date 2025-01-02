import { expect } from 'chai'
import R from 'ramda'

import { Score } from '../../classes'
import { subscaleIdLens } from '../../lib/calculation_variants/api/subscale/lenses'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../src/calculation_suite/calculations/shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/pcs_form_responses'
import { PCS_SCALES } from './definition/pcs_scales'
import { pcs } from './pcs'

const PCS_MIN_SCORE = 0
const PCS_MEDIAN_SCORE = 26
const PCS_MAX_SCORE = 52

const pcs_calculation = execute_test_calculation(pcs)

describe('pcs', function () {
  it('pcs calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('pcs')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'question_1',
        'question_2',
        'question_3',
        'question_4',
        'question_5',
        'question_6',
        'question_7',
        'question_8',
        'question_9',
        'question_10',
        'question_11',
        'question_12',
        'question_13',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(PCS_SCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Rumination" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'question_8',
        'question_9',
        'question_10',
        'question_11',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('RUMINATION')(PCS_SCALES).sort(),
      )
    })

    it('should have the expected input idss configured for the "Magnification" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'question_6',
        'question_7',
        'question_13',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('MAGNIFICATION')(PCS_SCALES).sort(),
      )
    })

    it('should have the expected input idss configured for the "Helplessness" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'question_1',
        'question_2',
        'question_3',
        'question_4',
        'question_5',
        'question_12',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('HELPLESSNESS')(PCS_SCALES).sort(),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pcs_calculation(min_response)

    it('should calculate a score for all scales (n=3) and a total score', function () {
      const AMOUNT_OF_SCORES = 4
      expect(outcome).toHaveLength(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'RUMINATION',
        'MAGNIFICATION',
        'HELPLESSNESS',
        'TOTAL',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).to.have.members(
        EXPECTED_SCALE_IDS,
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when all inputs are answered with the min response', function () {
      it('should return the min score on every scale', function () {
        const scale_scores = pcs_calculation(min_response)

        scale_scores.forEach(scale => {
          const id = scale.subresult_id

          const min_score = R.compose(
            R.defaultTo(PCS_MIN_SCORE),
            //@ts-expect-error to do
            s => s?.min_score,
            R.find(s => R.view(subscaleIdLens, s) === id),
          )(PCS_SCALES)

          const result = scale.result

          expect(result).toEqual(min_score)
        })
      })
    })

    describe('when all inputs are answered with the median response', function () {
      it('should return the median score on every scale', function () {
        const scale_scores = pcs_calculation(median_response)

        scale_scores.forEach(scale => {
          const id = scale.subresult_id

          const median_score = R.compose(
            R.defaultTo(PCS_MEDIAN_SCORE),
            //@ts-expect-error to do
            s => s?.median_score,
            R.find(s => R.view(subscaleIdLens, s) === id),
          )(PCS_SCALES)

          const result = scale.result

          expect(result).toEqual(median_score)
        })
      })
    })

    describe('when all inputs are answered with the max response', function () {
      it('should return the max score on every scale', function () {
        const scale_scores = pcs_calculation(max_response)

        scale_scores.forEach(scale => {
          const id = scale.subresult_id

          const max_score = R.compose(
            R.defaultTo(PCS_MAX_SCORE),
            //@ts-expect-error to do
            s => s?.max_score,
            R.find(s => R.view(subscaleIdLens, s) === id),
          )(PCS_SCALES)

          const result = scale.result

          expect(result).toEqual(max_score)
        })
      })
    })

    describe('when a random response is passed', function () {
      const scale_scores = pcs_calculation(random_response)

      it('should return the correct score on the "Rumination" scale', function () {
        const rumination_score = view_result('RUMINATION')(scale_scores)
        const EXPECTED_RUMINATION_SCORE = 10

        expect(rumination_score).toEqual(EXPECTED_RUMINATION_SCORE)
      })

      it('should return the correct score on the "Magnification" scale', function () {
        const magnification_score = view_result('MAGNIFICATION')(scale_scores)
        const EXPECTED_MAGNIFICATION_SCORE = 5

        expect(magnification_score).toEqual(EXPECTED_MAGNIFICATION_SCORE)
      })

      it('should return the correct score on the "Helplessness" scale', function () {
        const helplessness_score = view_result('HELPLESSNESS')(scale_scores)
        const EXPECTED_HELPLESSNESS_SCORE = 6

        expect(helplessness_score).toEqual(EXPECTED_HELPLESSNESS_SCORE)
      })

      it('should return the correct total score', function () {
        const total_score = view_result('TOTAL')(scale_scores)
        const EXPECTED_TOTAL_SCORE = 21

        expect(total_score).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const scale_scores = pcs_calculation({})

      it('should return undefined as the score on the "Rumination" scale', function () {
        const rumination_score = view_result('RUMINATION')(scale_scores)
        expect(rumination_score).toEqual(undefined)
      })

      it('should return undefined as the score on the "Magnification" scale', function () {
        const magnification_score = view_result('MAGNIFICATION')(scale_scores)
        expect(magnification_score).toEqual(undefined)
      })

      it('should return undefined as the score on the "Helplessness" scale', function () {
        const helplessness_score = view_result('HELPLESSNESS')(scale_scores)
        expect(helplessness_score).toEqual(undefined)
      })

      it('should return undefined as the total score', function () {
        const total_score = view_result('TOTAL')(scale_scores)
        expect(total_score).toEqual(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pcs_calculation({
            question_1: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pcs_calculation({
            question_1: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pcs_calculation({
            question_1: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
