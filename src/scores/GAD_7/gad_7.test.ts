import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/gad_7_test_responses'
import { gad_7 } from './gad_7'

const BEST_SCORE = 0
const WORST_SCORE = 21

const gad_7_calculation = new Score(gad_7)

describe('gad_7', function () {
  it('gad_7 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('gad_7')
  })

  describe('basic assumptions', function () {
    const outcome = gad_7_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome)).toHaveLength(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['GAD7_SCORE', 'GAD7_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'GAD7_Q01',
          'GAD7_Q02',
          'GAD7_Q03',
          'GAD7_Q04',
          'GAD7_Q05',
          'GAD7_Q06',
          'GAD7_Q07',
        ]

        const configured_input_ids = Object.keys(
          gad_7_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          gad_7_calculation.calculate({
            payload: {
              GAD7_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => gad_7_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = gad_7_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.GAD7_SCORE).toEqual(BEST_SCORE)
      })

      it('should return the "No anxiety" interpretation', function () {
        expect(outcome.GAD7_INTERPRETATION).toEqual('No anxiety')
      })
    })

    describe('when called with the worst response', function () {
      const outcome = gad_7_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.GAD7_SCORE).toEqual(WORST_SCORE)
      })

      it('should return the "severe anxiety" interpretation', function () {
        expect(outcome.GAD7_INTERPRETATION).toEqual('Severe anxiety')
      })
    })

    describe('when called with a random response', function () {
      const outcome = gad_7_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected score', function () {
        expect(outcome.GAD7_SCORE).toEqual(7)
      })

      it('should return the "Mild anxiety" interpretation', function () {
        expect(outcome.GAD7_INTERPRETATION).toEqual('Mild anxiety')
      })
    })
  })
})
