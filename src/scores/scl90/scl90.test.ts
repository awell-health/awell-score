import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/scl90_test_response'
import { scl90 } from './scl90'
import { SCL90_SUBSCALES, type SubscaleType } from './definition'

const SCL90R_BEST_SCORE = 90
const SCL90R_MEDIAN_SCORE = 270
const SCL90R_WORST_SCORE = 450

const scl90_calculation = new Score(scl90)

describe('scl90', function () {
  it('scl90 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('scl90')
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

      const configured_input_ids = Object.keys(scl90_calculation.inputSchema)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.AGO)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.ANG)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.DEP)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.SOM)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.IN)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.SEN)
    })

    it('should have the expected input idss configured for the "Hostility" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q11', 'Q24', 'Q63', 'Q67', 'Q74', 'Q81']

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.HOS)
    })

    it('should have the expected input idss configured for the "Sleep difficulties" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q44', 'Q64', 'Q66']

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.SLA)
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

      expect(EXPECTED_INPUT_IDS).toEqual(SCL90_SUBSCALES.ADD)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = scl90_calculation.calculate({ payload: best_response })

    it('should return a score for all 9 subscales and a total score', function () {
      expect(Object.keys(outcome)).toHaveLength(10)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PSNEUR',
        'AGO',
        'ANG',
        'DEP',
        'SOM',
        'IN',
        'SEN',
        'HOS',
        'SLA',
        'ADD',
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
        const outcome = scl90_calculation.calculate({ payload: {} })

        Object.values(outcome).forEach(score => {
          expect(score).toEqual(null)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when best possible response is passed', function () {
      const outcome = scl90_calculation.calculate({
        payload: best_response,
      })

      it('should return the best score for every subscale', function () {
        Object.entries(outcome).forEach(([subscale, score]) => {
          if (subscale === 'PSNEUR') {
            expect(true).toBe(true)
            return
          }
          const subscaleItems = SCL90_SUBSCALES[subscale as SubscaleType]
          const BEST_SCORE_FOR_SUBSCALE = subscaleItems.length

          expect(score).toEqual(BEST_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the best total score', function () {
        expect(outcome.PSNEUR).toEqual(SCL90R_BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = scl90_calculation.calculate({
        payload: median_response,
      })

      it('should return the median score for every subscale', function () {
        Object.entries(outcome).forEach(([subscale, score]) => {
          if (subscale === 'PSNEUR') {
            expect(true).toBe(true)
            return
          }

          const subscaleItems = SCL90_SUBSCALES[subscale as SubscaleType]
          const MEDIAN_SCORE_PER_QUESTION = 3
          const MEDIAN_SCORE_FOR_SUBSCALE =
            subscaleItems.length * MEDIAN_SCORE_PER_QUESTION

          expect(score).toEqual(MEDIAN_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the median total score', function () {
        expect(outcome.PSNEUR).toEqual(SCL90R_MEDIAN_SCORE)
      })
    })

    describe('when worst possible response is passed', function () {
      const outcome = scl90_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score for every subscale', function () {
        Object.entries(outcome).forEach(([subscale, score]) => {
          if (subscale === 'PSNEUR') {
            expect(true).toBe(true)
            return
          }
          const subscaleItems = SCL90_SUBSCALES[subscale as SubscaleType]
          const WORST_SCORE_PER_QUESTION = 5
          const WORST_SCORE_FOR_SUBSCALE =
            subscaleItems.length * WORST_SCORE_PER_QUESTION

          expect(score).toEqual(WORST_SCORE_FOR_SUBSCALE)
        })
      })

      it('should return the worst total score', function () {
        expect(outcome.PSNEUR).toEqual(SCL90R_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = scl90_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score for "Agoraphobia" subscale', function () {
        const EXPECTED_SCORE = 21
        expect(outcome.AGO).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Anxiety" subscale', function () {
        const EXPECTED_SCORE = 29

        expect(outcome.ANG).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Depression" subscale', function () {
        const EXPECTED_SCORE = 51

        expect(outcome.DEP).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Somatization" subscale', function () {
        const EXPECTED_SCORE = 33

        expect(outcome.SOM).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Cognitive-Performance Deficits" subscale', function () {
        const EXPECTED_SCORE = 28

        expect(outcome.IN).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Interpersonal Sensitivity" subscale', function () {
        const EXPECTED_SCORE = 48

        expect(outcome.SEN).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Hostility" subscale', function () {
        const EXPECTED_SCORE = 20

        expect(outcome.HOS).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Sleep difficulties" subscale', function () {
        const EXPECTED_SCORE = 8

        expect(outcome.SLA).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for "Additional items" subscale', function () {
        const EXPECTED_SCORE = 34

        expect(outcome.ADD).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const EXPECTED_SCORE = 272

        expect(outcome.PSNEUR).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          scl90_calculation.calculate({
            payload: {
              ...best_response,
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an error', function () {
        expect(() =>
          scl90_calculation.calculate({
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
          scl90_calculation.calculate({
            payload: {
              ...best_response,
              Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
