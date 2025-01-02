import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/beck_form_responses'
import { beck } from './beck'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const BECK_MIN_SCORE = 0
const BECK_MEDIAN_SCORE = 32
const BECK_MAX_SCORE = 63

const beck_calculation = new Score(beck)

describe('beck', function () {
  it('beck calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('beck')
  })

  describe('basic assumptions', function () {
    const outcome = beck_calculation.calculate({ payload: min_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['beck']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
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
        ]

        const configured_calculation_input_ids = Object.keys(
          beck_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
      })
    })

    describe('when called with a response with answers out of the expected [0,3] range', function () {
      describe('when an answer is not a number', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            beck_calculation.calculate({
              payload: {
                Q01: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is below the expected [0,3] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            beck_calculation.calculate({
              payload: {
                Q01: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when an answer is above the expected [0,3] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            beck_calculation.calculate({
              payload: {
                Q01: 5,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })

    describe('when called with an empty', function () {
      it('should throw an error', function () {
        expect(() => beck_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calcualtion', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const score = beck_calculation.calculate({ payload: min_response })
        expect(score.beck).toEqual(BECK_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = beck_calculation.calculate({
          payload: median_response,
        })

        expect(score.beck).toEqual(BECK_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const score = beck_calculation.calculate({
          payload: max_response,
        })
        expect(score.beck).toEqual(BECK_MAX_SCORE)
      })
    })
    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = beck_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 40

        expect(score.beck).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
