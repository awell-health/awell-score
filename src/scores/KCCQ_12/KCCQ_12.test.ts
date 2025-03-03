import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
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

const kccq12_calculation = new Score(KCCQ_12)

describe('KCCQ_12', function () {
  it('KCCQ_12 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('KCCQ_12')
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
      ]

      const configured_input_ids = Object.keys(kccq12_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "KCCQ12-PL" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'KCCQ12_Q1_A',
        'KCCQ12_Q1_B',
        'KCCQ12_Q1_C',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(KCCQ_12_DOMAINS['KCCQ12-PL'].inputIds)
    })

    it('should have the expected input idss configured for the "KCCQ12-SF" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'KCCQ12_Q2',
        'KCCQ12_Q3',
        'KCCQ12_Q4',
        'KCCQ12_Q5',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(KCCQ_12_DOMAINS['KCCQ12-SF'].inputIds)
    })

    it('should have the expected input idss configured for the "KCCQ12-QL" subscale', function () {
      const EXPECTED_INPUT_IDS = ['KCCQ12_Q6', 'KCCQ12_Q7'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(KCCQ_12_DOMAINS['KCCQ12-QL'].inputIds)
    })

    it('should have the expected input idss configured for the "KCCQ12-SL" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'KCCQ12_Q8_A',
        'KCCQ12_Q8_B',
        'KCCQ12_Q8_C',
      ].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(KCCQ_12_DOMAINS['KCCQ12-SL'].inputIds)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = kccq12_calculation.calculate({ payload: best_response })

    it('should calculate a score for all subscales (n=4) and a total score', function () {
      const AMOUNT_OF_SCORES = 5
      expect(Object.keys(outcome)).toHaveLength(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'KCCQ12',
        'KCCQ12-PL',
        'KCCQ12-SF',
        'KCCQ12-QL',
        'KCCQ12-SL',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when best response is passed', function () {
      const outcome = kccq12_calculation.calculate({ payload: best_response })

      it('should return the best score on the "KCCQ12-PL" subscale', function () {
        expect(outcome['KCCQ12-PL']).toEqual(KCQQ_12_BEST_SCORE)
      })

      it('should return the best score on the "KCCQ12-SF" subscale', function () {
        expect(outcome['KCCQ12-SF']).toEqual(KCQQ_12_BEST_SCORE)
      })

      it('should return the best score on the "KCCQ12-QL" subscale', function () {
        expect(outcome['KCCQ12-QL']).toEqual(KCQQ_12_BEST_SCORE)
      })

      it('should return the best score on the "KCCQ12-SL subscale', function () {
        expect(outcome['KCCQ12-SL']).toEqual(KCQQ_12_BEST_SCORE)
      })

      it('should return the best total score', function () {
        expect(outcome['KCCQ12']).toEqual(KCQQ_12_BEST_SCORE)
      })
    })

    describe('when median response is passed', function () {
      const outcome = kccq12_calculation.calculate({ payload: median_response })

      it('should return the median score on the "KCCQ12-PL" subscale', function () {
        expect(outcome['KCCQ12-PL']).toEqual(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score on the "KCCQ12-SF" subscale', function () {
        expect(outcome['KCCQ12-SF']).toEqual(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score on the "KCCQ12-QL" subscale', function () {
        expect(outcome['KCCQ12-QL']).toEqual(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score on the "KCCQ12-SL subscale', function () {
        expect(outcome['KCCQ12-SL']).toEqual(KCQQ_12_MEDIAN_SCORE)
      })

      it('should return the median score', function () {
        expect(outcome['KCCQ12']).toEqual(KCQQ_12_MEDIAN_SCORE)
      })
    })

    describe('when worst response is passed', function () {
      const outcome = kccq12_calculation.calculate({ payload: worst_response })

      it('should return the worst score on the "KCCQ12-PL" subscale', function () {
        expect(outcome['KCCQ12-PL']).toEqual(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst score on the "KCCQ12-SF" subscale', function () {
        expect(outcome['KCCQ12-SF']).toEqual(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst score on the "KCCQ12-QL" subscale', function () {
        expect(outcome['KCCQ12-QL']).toEqual(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst score on the "KCCQ12-SL subscale', function () {
        expect(outcome['KCCQ12-SL']).toEqual(KCQQ_12_WORST_SCORE)
      })

      it('should return the worst total score', function () {
        expect(outcome['KCCQ12']).toEqual(KCQQ_12_WORST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = kccq12_calculation.calculate({ payload: random_response })

      it('should return the expected score on the "KCCQ12-PL" subscale', function () {
        expect(outcome['KCCQ12-PL']).toEqual(25)
      })

      it('should return the expected score on the "KCCQ12-SF" subscale', function () {
        expect(outcome['KCCQ12-SF']).toEqual(31.25)
      })

      it('should return the expected score on the "KCCQ12-QL" subscale', function () {
        expect(outcome['KCCQ12-QL']).toEqual(12.5)
      })

      it('should return the expected score on the "KCCQ12-SL subscale', function () {
        expect(outcome['KCCQ12-SL']).toEqual(66.67)
      })

      it('should return the expected total score', function () {
        expect(outcome['KCCQ12']).toEqual(33.86)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = kccq12_calculation.calculate({ payload: {} })

      it('should return null as the score on the "KCCQ12-PL" subscale', function () {
        expect(outcome['KCCQ12-PL']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-SF" subscale', function () {
        expect(outcome['KCCQ12-SF']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-QL" subscale', function () {
        expect(outcome['KCCQ12-QL']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-SL subscale', function () {
        expect(outcome['KCCQ12-SL']).toEqual(null)
      })

      it('should return null as the total score', function () {
        expect(outcome['KCCQ12']).toEqual(null)
      })
    })

    describe('when a response is passed with answers that are considered as missing values', function () {
      const outcome = kccq12_calculation.calculate({
        payload: response_with_missing_values_or_unanswered_questions,
      })

      it('should return null as the score on the "KCCQ12-PL" subscale', function () {
        expect(outcome['KCCQ12-PL']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-SF" subscale', function () {
        expect(outcome['KCCQ12-SF']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-QL" subscale', function () {
        expect(outcome['KCCQ12-QL']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-SL subscale', function () {
        expect(outcome['KCCQ12-SL']).toEqual(null)
      })

      it('should return MISSING_MESSAGE as the total score', function () {
        expect(outcome['KCCQ12']).toEqual(null)
      })
    })

    describe('when a response is passed where only one domain (KCCQ12-PL) is scored with the best response', function () {
      const outcome = kccq12_calculation.calculate({
        payload: {
          KCCQ12_Q1_A: 5, // 6 is considered as a missing value
          KCCQ12_Q1_B: 5, // 6 is considered as a missing value
          KCCQ12_Q1_C: 5, // 6 is considered as a missing value
        },
      })

      it('should return the best score on the "KCCQ12-PL" subscale', function () {
        expect(outcome['KCCQ12-PL']).toEqual(KCQQ_12_BEST_SCORE)
      })

      it('should return null as the score on the "KCCQ12-SF" subscale', function () {
        expect(outcome['KCCQ12-SF']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-QL" subscale', function () {
        expect(outcome['KCCQ12-QL']).toEqual(null)
      })

      it('should return null as the score on the "KCCQ12-SL subscale', function () {
        expect(outcome['KCCQ12-SL']).toEqual(null)
      })

      it('should return the best total score since it will calculate total score based on the single domain score', function () {
        expect(outcome['KCCQ12']).toEqual(KCQQ_12_BEST_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kccq12_calculation.calculate({
            payload: {
              ...best_response,
              KCCQ12_Q1_A: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected [1,6] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kccq12_calculation.calculate({
            payload: {
              ...best_response,
              KCCQ12_Q1_A: 0,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected [1,6] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kccq12_calculation.calculate({
            payload: {
              ...best_response,
              KCCQ12_Q1_A: 7,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
