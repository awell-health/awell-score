import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/panss_6_test_responses'
import { panss_6 } from './panss_6'

const panss_6_calculation = new Score(panss_6)

describe('panss_6', function () {
  it('panss_6 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('panss_6')
  })

  describe('basic assumptions', function () {
    const outcome = panss_6_calculation.calculate({ payload: best_response })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PANNS_6_POSITIVE_SCALE_SCORE',
        'PANNS_6_NEGATIVE_SCALE_SCORE',
        'PANNS_6_TOTAL_SCORE',
      ]
      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PANSS_6_Q01_DELUSIONS',
          'PANSS_6_Q02_CONCEPTUAL_DISORGANIZATIONS',
          'PANSS_6_Q03_HALLUCINATORY_BEHAVIOR',
          'PANSS_6_Q04_BLUNTED_AFFECT',
          'PANSS_6_Q05_PASSIVE_SOCIAL_WITHDRAWAL',
          'PANSS_6_Q06_LACK_OF_SPONTANEITY',
        ]

        const configured_input_ids = Object.keys(panss_6.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          panss_6_calculation.calculate({
            payload: {
              PANSS_6_Q01_DELUSIONS: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          panss_6_calculation.calculate({
            payload: {
              PANSS_6_Q01_DELUSIONS: 8,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          panss_6_calculation.calculate({
            payload: {
              PANSS_6_Q01_DELUSIONS: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      describe('Total score', function () {
        it('should throw a ZodError', function () {
          expect(() =>
            panss_6_calculation.calculate({
              payload: {},
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = panss_6_calculation.calculate({
        payload: worst_response,
      })

      describe('Total score', function () {
        it('should return the worst score', function () {
          const score = outcome.PANNS_6_TOTAL_SCORE
          expect(score).toEqual(42)
        })
      })
      describe('Positive scale score', function () {
        it('should return the worst score', function () {
          const score = outcome.PANNS_6_POSITIVE_SCALE_SCORE
          expect(score).toEqual(21)
        })
      })
      describe('Negative scale score', function () {
        it('should return the worst score', function () {
          const score = outcome.PANNS_6_NEGATIVE_SCALE_SCORE

          expect(score).toEqual(21)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = panss_6_calculation.calculate({
        payload: median_response,
      })

      describe('Total score', function () {
        it('should return the median score', function () {
          const score = outcome.PANNS_6_TOTAL_SCORE

          expect(score).toEqual(24)
        })
      })
      describe('Positive scale score', function () {
        it('should return the median score', function () {
          const score = outcome.PANNS_6_POSITIVE_SCALE_SCORE

          expect(score).toEqual(12)
        })
      })
      describe('Negative scale score', function () {
        it('should return the median score', function () {
          const score = outcome.PANNS_6_NEGATIVE_SCALE_SCORE

          expect(score).toEqual(12)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = panss_6_calculation.calculate({
        payload: best_response,
      })

      describe('Total score', function () {
        it('should return the best score', function () {
          const score = outcome.PANNS_6_TOTAL_SCORE

          expect(score).toEqual(6)
        })
      })
      describe('Positive scale score', function () {
        it('should return the best score', function () {
          const score = outcome.PANNS_6_POSITIVE_SCALE_SCORE

          expect(score).toEqual(3)
        })
      })
      describe('Negative scale score', function () {
        it('should return the best score', function () {
          const score = outcome.PANNS_6_NEGATIVE_SCALE_SCORE

          expect(score).toEqual(3)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = panss_6_calculation.calculate({
        payload: random_response,
      })

      describe('Total score', function () {
        it('should return the expected score', function () {
          const score = outcome.PANNS_6_TOTAL_SCORE
          const EXPECTED_SCORE = 21

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Positive scale score', function () {
        it('should return the expected score', function () {
          const score = outcome.PANNS_6_POSITIVE_SCALE_SCORE
          const EXPECTED_SCORE = 5

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Negative scale score', function () {
        it('should return the expected score', function () {
          const score = outcome.PANNS_6_NEGATIVE_SCALE_SCORE
          const EXPECTED_SCORE = 16

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
    })
  })
})
