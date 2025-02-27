import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/scl90_test_response'
import { SCL90_SUBSCALES } from './definition/scl90_subscales'
import { scl90 } from './scl90'
import { CalculationOutputType } from '../../../types/calculations.types'

const SCL90R_BEST_SCORE = 90
const SCL90R_MEDIAN_SCORE = 270
const SCL90R_WORST_SCORE = 450

const scl90_calculation = execute_test_calculation(scl90)

describe('scl90', function () {
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
      )(SCL90_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Agoraphobia" subscale', function () {
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
        get_input_ids_for_specific_subscale('AGO')(SCL90_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Anxiety" subscale	', function () {
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
        get_input_ids_for_specific_subscale('ANG')(SCL90_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Depression" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q03',
        'Q05',
        'Q14',
        'Q15',
        'Q19',
        'Q20',
        'Q22',
        'Q26',
        'Q29',
        'Q30',
        'Q31',
        'Q32',
        'Q51',
        'Q54',
        'Q59',
        'Q79',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('DEP')(SCL90_SUBSCALES),
      )
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
        get_input_ids_for_specific_subscale('SOM')(SCL90_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Cognitive-Performance Deficits" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q09',
        'Q10',
        'Q28',
        'Q38',
        'Q45',
        'Q46',
        'Q55',
        'Q65',
        'Q71',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('IN')(SCL90_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Interpersonal Sensitivity" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q06',
        'Q07',
        'Q08',
        'Q18',
        'Q21',
        'Q34',
        'Q35',
        'Q36',
        'Q41',
        'Q43',
        'Q61',
        'Q68',
        'Q73',
        'Q76',
        'Q83',
        'Q88',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('SEN')(SCL90_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Hostility" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q11', 'Q24', 'Q63', 'Q67', 'Q74', 'Q81']

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('HOS')(SCL90_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Sleep difficulties" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q44', 'Q64', 'Q66']

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('SLA')(SCL90_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Additional items" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'Q16',
        'Q37',
        'Q60',
        'Q62',
        'Q69',
        'Q77',
        'Q84',
        'Q85',
        'Q87',
        'Q89',
        'Q90',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('ADD')(SCL90_SUBSCALES),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = scl90_calculation(best_response)

    it('should return a score for all 9 subscales and a total score', function () {
      expect(outcome).toHaveLength(10)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'AGO',
        'ANG',
        'DEP',
        'SOM',
        'IN',
        'SEN',
        'HOS',
        'SLA',
        'ADD',
        'PSNEUR',
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
        const outcome = scl90_calculation({})

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
          R.filter(subscale => subscale.subresult_id !== 'PSNEUR'),
          scl90_calculation,
        )(best_response)

        subscale_outcomes.forEach(subscale => {
          const score = subscale.result
          const id = subscale.subresult_id

          const BEST_SCORE_FOR_SUBSCALE = R.compose(
            R.length,
            R.view(inputsInSubscaleLens),
            R.find(R.propEq('id', id)),
          )(SCL90_SUBSCALES)

          expect(score).toEqual(BEST_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the best total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(subscale => subscale.subresult_id === 'PSNEUR'),
          scl90_calculation,
        )(best_response)

        expect(total_score).toEqual(SCL90R_BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score for every subscale', function () {
        const outcome = R.compose(
          //@ts-expect-error to do
          R.filter(subscale => subscale.subresult_id !== 'PSNEUR'),
          scl90_calculation,
        )(median_response)

        const MEDIAN_SCORE_PER_QUESTION = 3

        outcome.forEach(subscale => {
          const score = subscale.result
          const id = subscale.subresult_id

          const MEDIAN_SCORE_FOR_SUBSCALE = R.compose(
            //@ts-expect-error to do
            amount_of_inputs => amount_of_inputs * MEDIAN_SCORE_PER_QUESTION,
            R.length,
            R.view(inputsInSubscaleLens),
            R.find(R.propEq('id', id)),
          )(SCL90_SUBSCALES)

          expect(score).toEqual(MEDIAN_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the median total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(subscale => subscale.subresult_id === 'PSNEUR'),
          scl90_calculation,
        )(median_response)

        expect(total_score).toEqual(SCL90R_MEDIAN_SCORE)
      })
    })

    describe('when worst possible response is passed', function () {
      it('should return the worst score for every subscale', function () {
        const outcome = R.compose(
          //@ts-expect-error to do
          R.filter(subscale => subscale.subresult_id !== 'PSNEUR'),
          scl90_calculation,
        )(worst_response)

        // Higher score = worse
        const WORST_SCORE_PER_QUESTION = 5

        outcome.forEach(subscale => {
          const score = subscale.result
          const id = subscale.subresult_id

          const WORST_SCORE_FOR_SUBSCALE = R.compose(
            //@ts-expect-error to do
            amount_of_inputs => amount_of_inputs * WORST_SCORE_PER_QUESTION,
            R.length,
            R.view(inputsInSubscaleLens),
            R.find(R.propEq('id', id)),
          )(SCL90_SUBSCALES)

          expect(score).toEqual(WORST_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the worst total score', function () {
        const total_score = R.compose(
          (subscale: CalculationOutputType | undefined) => subscale?.result,
          R.find(subscale => subscale.subresult_id === 'PSNEUR'),
          scl90_calculation,
        )(worst_response)

        expect(total_score).toEqual(SCL90R_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = scl90_calculation(random_response)

      it('should return the expected score for "Agoraphobia" subscale', function () {
        const score = view_result('AGO')(outcome)
        const EXPECTED_SCORE = 21

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Anxiety" subscale', function () {
        const score = view_result('ANG')(outcome)
        const EXPECTED_SCORE = 29

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Depression" subscale', function () {
        const score = view_result('DEP')(outcome)
        const EXPECTED_SCORE = 51

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Somatization" subscale', function () {
        const score = view_result('SOM')(outcome)
        const EXPECTED_SCORE = 33

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Cognitive-Performance Deficits" subscale', function () {
        const score = view_result('IN')(outcome)
        const EXPECTED_SCORE = 28

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Interpersonal Sensitivity" subscale', function () {
        const score = view_result('SEN')(outcome)
        const EXPECTED_SCORE = 48

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Hostility" subscale', function () {
        const score = view_result('HOS')(outcome)
        const EXPECTED_SCORE = 20

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Sleep difficulties" subscale', function () {
        const score = view_result('SLA')(outcome)
        const EXPECTED_SCORE = 8

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Additional items" subscale', function () {
        const score = view_result('ADD')(outcome)
        const EXPECTED_SCORE = 34

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('PSNEUR')(outcome)
        const EXPECTED_SCORE = 272

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          scl90_calculation({
            Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an error', function () {
        expect(() =>
          scl90_calculation({
            Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should return throw an error', function () {
        expect(() =>
          scl90_calculation({
            Q01: 6,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
