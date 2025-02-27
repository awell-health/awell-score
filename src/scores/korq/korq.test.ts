import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/korq_test_responses'
import { KORQ_SUBSCALES } from './definition/korq_subscales'
import { korq } from './korq'

const korq_calculation = new Score(korq)

const scores = {
  best: 116,
  worst: 29,
  median: 58,
  random: 54,
}

describe('KORQ', function () {
  it('KORQ calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('korq')
  })

  describe('basic assumptions', function () {
    const outcome = korq_calculation.calculate({
      payload: best_response,
    })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'KORQ_TOTAL_SCORE',
        'KORQ_SYMPTOMS',
        'KORQ_ACTIVITY_LIMITATIONS',
      ]

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_KORQ',
          'Q02_KORQ',
          'Q03_KORQ',
          'Q04_KORQ',
          'Q05_KORQ',
          'Q06_KORQ',
          'Q07_KORQ',
          'Q08_KORQ',
          'Q09_KORQ',
          'Q10_KORQ',
          'Q11_KORQ',
          'Q12_KORQ',
          'Q13_KORQ',
          'Q14_KORQ',
          'Q15_KORQ',
          'Q16_KORQ',
          'Q17_KORQ',
          'Q18_KORQ',
          'Q19_KORQ',
          'Q20_KORQ',
          'Q21_KORQ',
          'Q22_KORQ',
          'Q23_KORQ',
          'Q24_KORQ',
          'Q25_KORQ',
          'Q26_KORQ',
          'Q27_KORQ',
          'Q28_KORQ',
          'Q29_KORQ',
        ]

        const configured_input_ids = Object.keys(korq_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
      it('should have the expected input ids configured for the "KORQ_ACTIVITY_LIMITATIONS" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_KORQ',
          'Q02_KORQ',
          'Q03_KORQ',
          'Q04_KORQ',
          'Q05_KORQ',
          'Q06_KORQ',
          'Q07_KORQ',
          'Q08_KORQ',
          'Q09_KORQ',
          'Q10_KORQ',
          'Q11_KORQ',
          'Q12_KORQ',
          'Q13_KORQ',
          'Q14_KORQ',
          'Q15_KORQ',
          'Q16_KORQ',
          'Q17_KORQ',
          'Q18_KORQ',
        ].sort()

        expect(EXPECTED_INPUT_IDS).toEqual(
          KORQ_SUBSCALES.KORQ_ACTIVITY_LIMITATIONS,
        )
      })
      it('should have the expected input ids configured for the "KORQ_SYMPTOMS" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'Q19_KORQ',
          'Q20_KORQ',
          'Q21_KORQ',
          'Q22_KORQ',
          'Q23_KORQ',
          'Q24_KORQ',
          'Q25_KORQ',
          'Q26_KORQ',
          'Q27_KORQ',
          'Q28_KORQ',
          'Q29_KORQ',
        ].sort()

        expect(EXPECTED_INPUT_IDS).toEqual(KORQ_SUBSCALES.KORQ_SYMPTOMS)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        korq_calculation.calculate({
          payload: {
            ...best_response,
            Q01_KORQ: -1,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        korq_calculation.calculate({
          payload: {
            ...best_response,
            Q01_KORQ: 6,
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an ZodError', function () {
      expect(() =>
        korq_calculation.calculate({
          payload: {
            ...best_response,
            Q01_KORQ: "I'm not a number",
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('when called with an empty response', function () {
    it('should return a ZodError', function () {
      expect(() => korq_calculation.calculate({ payload: {} })).toThrow(
        ZodError,
      )
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = korq_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst score', function () {
        expect(outcome.KORQ_TOTAL_SCORE).toEqual(scores.worst)
      })
    })

    describe('when called with the best response', function () {
      const outcome = korq_calculation.calculate({
        payload: best_response,
      })

      it('should return the best score', function () {
        expect(outcome.KORQ_TOTAL_SCORE).toEqual(scores.best)
      })
    })

    describe('when called with a median response', function () {
      const outcome = korq_calculation.calculate({
        payload: median_response,
      })

      it('should return the median score', function () {
        expect(outcome.KORQ_TOTAL_SCORE).toEqual(scores.median)
      })
    })

    describe('when called with the random response', function () {
      const outcome = korq_calculation.calculate({
        payload: random_response,
      })

      it('should return the exepected score', function () {
        expect(outcome.KORQ_TOTAL_SCORE).toEqual(scores.random)
      })
    })
  })
})
