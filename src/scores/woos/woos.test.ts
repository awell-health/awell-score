import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/woos_test_responses'
import { WOOS_SUBSCALES } from './definition'
import { woos } from './woos'

const woos_calculation = new Score(woos)

describe('woos', function () {
  it('woos calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('woos')
  })

  describe('basic assumptions', function () {
    const outcome = woos_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'WOOS_PHYSICAL_SYMPTOMS',
        'WOOS_SPORTS_LEISURE_WORK',
        'WOOS_LIFESTYLE',
        'WOOS_EMOTIONS',
        'WOOS_TOTAL_SCORE',
        'WOOS_PERCENTAGE',
      ]

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'WOOS_1',
          'WOOS_2',
          'WOOS_3',
          'WOOS_4',
          'WOOS_5',
          'WOOS_6',
          'WOOS_7',
          'WOOS_8',
          'WOOS_9',
          'WOOS_10',
          'WOOS_11',
          'WOOS_12',
          'WOOS_13',
          'WOOS_14',
          'WOOS_15',
          'WOOS_16',
          'WOOS_17',
          'WOOS_18',
          'WOOS_19',
        ]

        const configured_input_ids = Object.keys(woos_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('WOOS subscales', function () {
      describe('Physical Symptoms subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'WOOS_1',
            'WOOS_2',
            'WOOS_3',
            'WOOS_4',
            'WOOS_5',
            'WOOS_6',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(
            WOOS_SUBSCALES.PHYSICAL_SYMPTOMS,
          )
        })
      })

      describe('Sports/Leisure/Work subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'WOOS_7',
            'WOOS_8',
            'WOOS_9',
            'WOOS_10',
            'WOOS_11',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(
            WOOS_SUBSCALES.SPORTS_LEISURE_WORK,
          )
        })
      })

      describe('Lifestyle subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'WOOS_12',
            'WOOS_13',
            'WOOS_14',
            'WOOS_15',
            'WOOS_16',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(WOOS_SUBSCALES.LIFESTYLE)
        })
      })

      describe('Emotions subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['WOOS_17', 'WOOS_18', 'WOOS_19']

          expect(EXPECTED_INPUT_IDS).toEqual(WOOS_SUBSCALES.EMOTIONS)
        })
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          woos_calculation.calculate({
            payload: {
              ...best_response,
              WOOS_1: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          woos_calculation.calculate({
            payload: {
              ...best_response,
              WOOS_1: 101,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          woos_calculation.calculate({
            payload: {
              ...best_response,
              WOOS_1: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = woos_calculation.calculate({ payload: {} })

      describe('Physical Symptoms', function () {
        it('should return null score', function () {
          expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(null)
        })
      })

      describe('Sports/Leisure/Work', function () {
        it('should return null score', function () {
          expect(outcome.WOOS_SPORTS_LEISURE_WORK).toEqual(null)
        })
      })

      describe('Lifestyle', function () {
        it('should return null score', function () {
          expect(outcome.WOOS_LIFESTYLE).toEqual(null)
        })
      })

      describe('Emotions', function () {
        it('should return null score', function () {
          expect(outcome.WOOS_EMOTIONS).toEqual(null)
        })
      })

      describe('Total score', function () {
        it('should return null score', function () {
          expect(outcome.WOOS_TOTAL_SCORE).toEqual(null)
        })
      })

      describe('Percentage', function () {
        it('should return null score', function () {
          expect(outcome.WOOS_PERCENTAGE).toEqual(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = woos_calculation.calculate({ payload: worst_response })

      it('should return the worst total score', function () {
        expect(outcome.WOOS_TOTAL_SCORE).toEqual(1900)
      })

      it('should return the worst physical symptoms score', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(600)
      })

      it('should return the worst sports/leisure/work score', function () {
        expect(outcome.WOOS_SPORTS_LEISURE_WORK).toEqual(500)
      })

      it('should return the worst lifestyle score', function () {
        expect(outcome.WOOS_LIFESTYLE).toEqual(500)
      })

      it('should return the worst emotions score', function () {
        expect(outcome.WOOS_EMOTIONS).toEqual(300)
      })

      it('should return 0 percentage', function () {
        expect(outcome.WOOS_PERCENTAGE).toEqual(0)
      })
    })

    describe('when called with the best response', function () {
      const outcome = woos_calculation.calculate({ payload: best_response })

      it('should return the best total score', function () {
        expect(outcome.WOOS_TOTAL_SCORE).toEqual(0)
      })

      it('should return the best physical symptoms score', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(0)
      })

      it('should return the best sports/leisure/work score', function () {
        expect(outcome.WOOS_SPORTS_LEISURE_WORK).toEqual(0)
      })

      it('should return the best lifestyle score', function () {
        expect(outcome.WOOS_LIFESTYLE).toEqual(0)
      })

      it('should return the best emotions score', function () {
        expect(outcome.WOOS_EMOTIONS).toEqual(0)
      })

      it('should return 100 percentage', function () {
        expect(outcome.WOOS_PERCENTAGE).toEqual(100)
      })
    })

    describe('when called with a median response', function () {
      const outcome = woos_calculation.calculate({ payload: median_response })

      it('should return the median total score', function () {
        expect(outcome.WOOS_TOTAL_SCORE).toEqual(950)
      })

      it('should return the median physical symptoms score', function () {
        expect(outcome.WOOS_PHYSICAL_SYMPTOMS).toEqual(300)
      })

      it('should return the median sports/leisure/work score', function () {
        expect(outcome.WOOS_SPORTS_LEISURE_WORK).toEqual(250)
      })

      it('should return the median lifestyle score', function () {
        expect(outcome.WOOS_LIFESTYLE).toEqual(250)
      })

      it('should return the median emotions score', function () {
        expect(outcome.WOOS_EMOTIONS).toEqual(150)
      })

      it('should return 50 percentage', function () {
        expect(outcome.WOOS_PERCENTAGE).toEqual(50)
      })
    })

    describe('when called with the random response', function () {
      const outcome = woos_calculation.calculate({ payload: random_response })

      it('should return the expected total score', function () {
        expect(outcome.WOOS_TOTAL_SCORE).toEqual(1625)
      })

      it('should return the expected percentage', function () {
        expect(outcome.WOOS_PERCENTAGE).toEqual(14.47)
      })
    })
  })
})
