/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import {
  inputsInSubscaleLens,
  subscaleIdLens,
} from '../../lib/calculation_variants/api/subscale/lenses'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/scl90r_test_responses'
import { SCL90R_SUBSCALES } from './definition/scl90r_subscales'
import { scl90r } from './scl90r'
import { CalculationOutputType } from '../../../types/calculations.types'

const SCL90R_BEST_SCORE = 0
const SCL90R_MEDIAN_SCORE = 180
const SCL90R_WORST_SCORE = 360

const scl90r_calculation = execute_test_calculation(scl90r)

describe('scl90r', function () {
  it('scl90r calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('scl90r')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'Q01',
        'Q02',
        'Q03',
        'Q04',
        'Q05',
        'Q06',
        'Q07',
        'Q08',
        'Q09',
        'Q10',
        'Q11',
        'Q12',
        'Q13',
        'Q14',
        'Q15',
        'Q16',
        'Q17',
        'Q18',
        'Q19',
        'Q20',
        'Q21',
        'Q22',
        'Q23',
        'Q24',
        'Q25',
        'Q26',
        'Q27',
        'Q28',
        'Q29',
        'Q30',
        'Q31',
        'Q32',
        'Q33',
        'Q34',
        'Q35',
        'Q36',
        'Q37',
        'Q38',
        'Q39',
        'Q40',
        'Q41',
        'Q42',
        'Q43',
        'Q44',
        'Q45',
        'Q46',
        'Q47',
        'Q48',
        'Q49',
        'Q50',
        'Q51',
        'Q52',
        'Q53',
        'Q54',
        'Q55',
        'Q56',
        'Q57',
        'Q58',
        'Q59',
        'Q60',
        'Q61',
        'Q62',
        'Q63',
        'Q64',
        'Q65',
        'Q66',
        'Q67',
        'Q68',
        'Q69',
        'Q70',
        'Q71',
        'Q72',
        'Q73',
        'Q74',
        'Q75',
        'Q76',
        'Q77',
        'Q78',
        'Q79',
        'Q80',
        'Q81',
        'Q82',
        'Q83',
        'Q84',
        'Q85',
        'Q86',
        'Q87',
        'Q88',
        'Q89',
        'Q90',
      ]

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(SCL90R_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Somatization" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q01',
        'Q04',
        'Q12',
        'Q27',
        'Q40',
        'Q42',
        'Q48',
        'Q49',
        'Q52',
        'Q53',
        'Q56',
        'Q58',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('SOMATIZATION')(SCL90R_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Obsessive compulsive" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'Q03',
        'Q09',
        'Q10',
        'Q28',
        'Q38',
        'Q45',
        'Q46',
        'Q51',
        'Q55',
        'Q65',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('OBSESSIVE_COMPULSIVE')(
          SCL90R_SUBSCALES,
        ),
      )
    })

    it('should have the expected input idss configured for the "Interpersonal sensitivity" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q06',
        'Q21',
        'Q34',
        'Q36',
        'Q37',
        'Q41',
        'Q61',
        'Q69',
        'Q73',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('INTERPERSONAL_SENSITIVITY')(
          SCL90R_SUBSCALES,
        ),
      )
    })

    it('should have the expected input idss configured for the "Depression" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q05',
        'Q14',
        'Q15',
        'Q20',
        'Q22',
        'Q26',
        'Q29',
        'Q30',
        'Q31',
        'Q32',
        'Q54',
        'Q71',
        'Q79',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('DEPRESSION')(SCL90R_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Anxiety" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q02',
        'Q17',
        'Q23',
        'Q33',
        'Q39',
        'Q57',
        'Q72',
        'Q78',
        'Q80',
        'Q86',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('ANXIETY')(SCL90R_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Hostility" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q11', 'Q24', 'Q63', 'Q67', 'Q74', 'Q81']

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('HOSTILITY')(SCL90R_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Phobic anxiety" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q13',
        'Q25',
        'Q47',
        'Q50',
        'Q70',
        'Q75',
        'Q82',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PHOBIC_ANXIETY')(SCL90R_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Paranoid ideation" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q08', 'Q18', 'Q43', 'Q68', 'Q76', 'Q83']

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PARANOID_IDEATION')(
          SCL90R_SUBSCALES,
        ),
      )
    })

    it('should have the expected input idss configured for the "Psychoticism" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q07',
        'Q16',
        'Q35',
        'Q62',
        'Q77',
        'Q84',
        'Q85',
        'Q87',
        'Q88',
        'Q90',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PSYCHOTICISM')(SCL90R_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Additional items" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q19',
        'Q44',
        'Q59',
        'Q60',
        'Q64',
        'Q66',
        'Q89',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('ADDITIONAL_ITEMS')(
          SCL90R_SUBSCALES,
        ),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = scl90r_calculation(best_response)

    it('should return a score for all 10 subscales and a total score', function () {
      expect(outcome).toHaveLength(11)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'SOMATIZATION',
        'OBSESSIVE_COMPULSIVE',
        'INTERPERSONAL_SENSITIVITY',
        'DEPRESSION',
        'ANXIETY',
        'HOSTILITY',
        'PHOBIC_ANXIETY',
        'PARANOID_IDEATION',
        'PSYCHOTICISM',
        'ADDITIONAL_ITEMS',
        'TOTAL',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when at least one input per subscale is answered', function () {
    describe('when an empty response is passed', function () {
      it('should return "Missing" as the score for every subscale', function () {
        const outcome = scl90r_calculation({})

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(undefined)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when best possible response is passed', function () {
      it('should return the best score for every subscale', function () {
        const subscale_outcomes = R.compose(
          //@ts-expect-error to do
          R.filter(s => s.subresult_id !== 'TOTAL'),
          scl90r_calculation,
        )(best_response)

        // lower score = better
        const BEST_SCORE_PER_SUBSCALE = 0

        subscale_outcomes.forEach(subscale => {
          const score = subscale.result
          expect(score).toEqual(BEST_SCORE_PER_SUBSCALE)
        })
      })

      it('should return the best total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(s => s.subresult_id === 'TOTAL'),
          scl90r_calculation,
        )(best_response)

        expect(total_score).toEqual(SCL90R_BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score for every subscale', function () {
        const outcome = R.compose(
          //@ts-expect-error to do
          R.filter(s => s.subresult_id !== 'TOTAL'),
          scl90r_calculation,
        )(median_response)

        const MEDIAN_SCORE_PER_QUESTION = 2

        outcome.forEach(subscale => {
          const id = subscale.subresult_id
          const score = subscale.result

          const MEDIAN_SCORE_FOR_SUBSCALE = R.compose(
            (amount_of_inputs: number) =>
              amount_of_inputs * MEDIAN_SCORE_PER_QUESTION,
            R.length,
            R.view(inputsInSubscaleLens),
            R.find(s => R.view(subscaleIdLens, s) === id),
          )(SCL90R_SUBSCALES)

          expect(score).toEqual(MEDIAN_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the median total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(s => s.subresult_id === 'TOTAL'),
          scl90r_calculation,
        )(median_response)

        expect(total_score).toEqual(SCL90R_MEDIAN_SCORE)
      })
    })

    describe('when worst possible response is passed', function () {
      it('should return the worst score for every subscale', function () {
        const outcome = R.compose(
          //@ts-expect-error to do
          R.filter(s => s.subresult_id !== 'TOTAL'),
          scl90r_calculation,
        )(worst_response)

        // Higher score = worse
        const MAX_SCORE_PER_QUESTION = 4

        outcome.forEach(subscale => {
          const id = subscale.subresult_id
          const score = subscale.result

          const MAX_SCORE_FOR_SUBSCALE = R.compose(
            //@ts-expect-error to do
            amount_of_inputs => amount_of_inputs * MAX_SCORE_PER_QUESTION,
            R.length,
            R.view(inputsInSubscaleLens),
            R.find(s => R.view(subscaleIdLens, s) === id),
          )(SCL90R_SUBSCALES)

          expect(score).toEqual(MAX_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the worst total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(s => s.subresult_id === 'TOTAL'),
          scl90r_calculation,
        )(worst_response)

        expect(total_score).toEqual(SCL90R_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = scl90r_calculation(random_response)

      it('should return the expected score for "Somatization" subscale', function () {
        const score = view_result('SOMATIZATION')(outcome)
        const EXPECTED_SCORE = 27

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Obsessive compulsive" subscale', function () {
        const score = view_result('OBSESSIVE_COMPULSIVE')(outcome)
        const EXPECTED_SCORE = 24

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Interpersonal Sensitivity" subscale', function () {
        const score = view_result('INTERPERSONAL_SENSITIVITY')(outcome)
        const EXPECTED_SCORE = 21

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Depression" subscale', function () {
        const score = view_result('DEPRESSION')(outcome)
        const EXPECTED_SCORE = 32

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Anxiety" subscale', function () {
        const score = view_result('ANXIETY')(outcome)
        const EXPECTED_SCORE = 27

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Hostility" subscale', function () {
        const score = view_result('HOSTILITY')(outcome)
        const EXPECTED_SCORE = 15

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Phobic anxiety" subscale', function () {
        const score = view_result('PHOBIC_ANXIETY')(outcome)
        const EXPECTED_SCORE = 13

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Paranoid ideation" subscale', function () {
        const score = view_result('PARANOID_IDEATION')(outcome)
        const EXPECTED_SCORE = 17

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Psychoticism" subscale', function () {
        const score = view_result('PSYCHOTICISM')(outcome)
        const EXPECTED_SCORE = 25

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Additional items" subscale', function () {
        const score = view_result('ADDITIONAL_ITEMS')(outcome)
        const EXPECTED_SCORE = 19

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('TOTAL')(outcome)
        const EXPECTED_SCORE = 220

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          scl90r_calculation({
            Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          scl90r_calculation({
            Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should return throw an error', function () {
        expect(() =>
          scl90r_calculation({
            Q01: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
