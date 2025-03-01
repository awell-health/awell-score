import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/scl90r_test_responses'
import {
  SCL90R_SUBSCALES,
  type SubscaleType,
} from './definition/scl90r_subscales'
import { scl90r } from './scl90r'

const SCL90R_BEST_SCORE = 0
const SCL90R_MEDIAN_SCORE = 180
const SCL90R_WORST_SCORE = 360

const scl90r_calculation = new Score(scl90r)

describe('scl90r', function () {
  it('scl90r calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('scl90r')
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

      const configured_input_ids = Object.keys(scl90r_calculation.inputSchema)

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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.SOMATIZATION)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.OBSESSIVE_COMPULSIVE)
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
        SCL90R_SUBSCALES.INTERPERSONAL_SENSITIVITY,
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.DEPRESSION)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.ANXIETY)
    })

    it('should have the expected input idss configured for the "Hostility" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q11', 'Q24', 'Q63', 'Q67', 'Q74', 'Q81']

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.HOSTILITY)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.PHOBIC_ANXIETY)
    })

    it('should have the expected input idss configured for the "Paranoid ideation" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q08', 'Q18', 'Q43', 'Q68', 'Q76', 'Q83']

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.PARANOID_IDEATION)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.PSYCHOTICISM)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90R_SUBSCALES.ADDITIONAL_ITEMS)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = scl90r_calculation.calculate({ payload: best_response })

    it('should return a score for all 10 subscales and a total score', function () {
      expect(Object.keys(outcome)).toHaveLength(11)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'TOTAL',
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
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when at least one input per subscale is answered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the score for every subscale', function () {
        const outcome = scl90r_calculation.calculate({ payload: {} })

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(null)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when best possible response is passed', function () {
      const outcome = scl90r_calculation.calculate({ payload: best_response })

      it('should return the best score for every subscale', function () {
        // lower score = better
        const BEST_SCORE_PER_SUBSCALE = 0

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(BEST_SCORE_PER_SUBSCALE)
        })
      })

      it('should return the best total score', function () {
        expect(outcome.TOTAL).toEqual(SCL90R_BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = scl90r_calculation.calculate({
        payload: median_response,
      })

      it('should return the median score for every subscale', function () {
        const MEDIAN_SCORE_PER_QUESTION = 2

        Object.entries(outcome).forEach(([key, score]) => {
          if (key !== 'TOTAL') {
            const MEDIAN_SCORE_FOR_SUBSCALE =
              SCL90R_SUBSCALES[key as SubscaleType].length *
              MEDIAN_SCORE_PER_QUESTION
            expect(score).toEqual(MEDIAN_SCORE_FOR_SUBSCALE)
          }
        })
      })

      it('should return the median total score', function () {
        expect(outcome.TOTAL).toEqual(SCL90R_MEDIAN_SCORE)
      })
    })

    describe('when worst possible response is passed', function () {
      const outcome = scl90r_calculation.calculate({ payload: worst_response })

      it('should return the worst score for every subscale', function () {
        // Higher score = worse
        const MAX_SCORE_PER_QUESTION = 4

        Object.entries(outcome).forEach(([key, score]) => {
          if (key !== 'TOTAL') {
            const MAX_SCORE_FOR_SUBSCALE =
              SCL90R_SUBSCALES[key as SubscaleType].length *
              MAX_SCORE_PER_QUESTION
            expect(score).toEqual(MAX_SCORE_FOR_SUBSCALE)
          }
        })
      })

      it('should return the worst total score', function () {
        expect(outcome.TOTAL).toEqual(SCL90R_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = scl90r_calculation.calculate({ payload: random_response })

      it('should return the expected score for "Somatization" subscale', function () {
        const EXPECTED_SCORE = 27
        expect(outcome.SOMATIZATION).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Obsessive compulsive" subscale', function () {
        const EXPECTED_SCORE = 24
        expect(outcome.OBSESSIVE_COMPULSIVE).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Interpersonal Sensitivity" subscale', function () {
        const EXPECTED_SCORE = 21
        expect(outcome.INTERPERSONAL_SENSITIVITY).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Depression" subscale', function () {
        const EXPECTED_SCORE = 32
        expect(outcome.DEPRESSION).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Anxiety" subscale', function () {
        const EXPECTED_SCORE = 27
        expect(outcome.ANXIETY).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Hostility" subscale', function () {
        const EXPECTED_SCORE = 15
        expect(outcome.HOSTILITY).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Phobic anxiety" subscale', function () {
        const EXPECTED_SCORE = 13
        expect(outcome.PHOBIC_ANXIETY).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Paranoid ideation" subscale', function () {
        const EXPECTED_SCORE = 17
        expect(outcome.PARANOID_IDEATION).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Psychoticism" subscale', function () {
        const EXPECTED_SCORE = 25
        expect(outcome.PSYCHOTICISM).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Additional items" subscale', function () {
        const EXPECTED_SCORE = 19
        expect(outcome.ADDITIONAL_ITEMS).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const EXPECTED_SCORE = 220
        expect(outcome.TOTAL).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          scl90r_calculation.calculate({
            payload: {
              ...best_response,
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          scl90r_calculation.calculate({
            payload: {
              ...best_response,
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should return throw an error', function () {
        expect(() =>
          scl90r_calculation.calculate({
            payload: {
              ...best_response,
              Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
