import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/bai_test_responses'
import { bai } from './bai'

const BEST_SCORE = 0
const WORST_SCORE = 63

const bai_calculation = new Score(bai)

describe('bai', function () {
  it('bai calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bai')
  })

  describe('basic assumptions', function () {
    const outcome = bai_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['BAI_SCORE', 'BAI_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'BAI_Q01',
          'BAI_Q02',
          'BAI_Q03',
          'BAI_Q04',
          'BAI_Q05',
          'BAI_Q06',
          'BAI_Q07',
          'BAI_Q08',
          'BAI_Q09',
          'BAI_Q10',
          'BAI_Q11',
          'BAI_Q12',
          'BAI_Q13',
          'BAI_Q14',
          'BAI_Q15',
          'BAI_Q16',
          'BAI_Q17',
          'BAI_Q18',
          'BAI_Q19',
          'BAI_Q20',
          'BAI_Q21',
        ]

        const configured_input_ids = Object.keys(
          bai_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not one of the allowed answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          bai_calculation.calculate({
            payload: {
              BAI_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => bai_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = bai_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.BAI_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the "Low anxiety" interpretation', function () {
        expect(outcome.BAI_INTERPRETATION).toEqual('Low anxiety')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = bai_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.BAI_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the "Potentially concerning levels of anxiety" interpretation', function () {
        expect(outcome.BAI_INTERPRETATION).toEqual(
          'Potentially concerning levels of anxiety',
        )
      })
    })

    describe('when called with a random response', function () {
      const outcome = bai_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score', function () {
        expect(outcome.BAI_SCORE).toEqual(28)
      })

      it('should return the "Moderate anxiety" interpretation', function () {
        expect(outcome.BAI_INTERPRETATION).toEqual('Moderate anxiety')
      })
    })
  })
})

