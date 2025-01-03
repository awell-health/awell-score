import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__'
import { STOP_BANG_INPUTS } from './definition/stop_bang_inputs'
import { stop_bang } from './stop_bang'

const STOP_BANG_MIN_SCORE = 0
const STOP_BANG_MEDIAN_SCORE = 4
const STOP_BANG_RANDOM_SCORE = 4
const STOP_BANG_MAX_SCORE = 8

const stop_bang_calculation = new Score(stop_bang)

describe('stop_bang', function () {
  it('stop_bang calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('stop_bang')
  })

  describe('basic assumption', function () {
    describe('the score includes the correct input fields', function () {
      it('should use the correct input fields', function () {
        const EXPECTED_CALCULATION_INPUT_IDS = [
          'STOP_BANG_Q01',
          'STOP_BANG_Q02',
          'STOP_BANG_Q03',
          'STOP_BANG_Q04',
          'STOP_BANG_Q05',
          'STOP_BANG_Q06',
          'STOP_BANG_Q07',
          'STOP_BANG_Q08',
        ]

        const CONFIGURED_CALCULATION_INPUT_IDS = Object.keys(
          stop_bang.inputSchema,
        )

        expect(CONFIGURED_CALCULATION_INPUT_IDS).toEqual(
          EXPECTED_CALCULATION_INPUT_IDS,
        )
      })
    })
  })

  describe('each calculated score incudes the correct output result and correct score title', function () {
    const outcome = stop_bang_calculation.calculate({ payload: min_response })

    it('should calculate 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the correct calculation ids', function () {
      const EXPECTED_CALCULATION_ID = ['STOP_BANG', 'STOP_BANG_INTERPRETATION']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('score calculations', function () {
    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when a minimum response is passed', function () {
        it('should return the minimum score', function () {
          const score = stop_bang_calculation.calculate({
            payload: min_response,
          }).STOP_BANG

          expect(score).toEqual(STOP_BANG_MIN_SCORE)
        })
        it('should return "Low" as the interpretation for the total score', function () {
          const score = stop_bang_calculation.calculate({
            payload: min_response,
          }).STOP_BANG_INTERPRETATION

          expect(score).toEqual('Low')
        })
      })
      describe('when a median response is passed', function () {
        it('should return the median score', function () {
          const score = stop_bang_calculation.calculate({
            payload: median_response,
          }).STOP_BANG

          expect(score).toEqual(STOP_BANG_MEDIAN_SCORE)
        })
        it('should return "Intermediate" as the interpretation for the total score', function () {
          const score = stop_bang_calculation.calculate({
            payload: median_response,
          }).STOP_BANG_INTERPRETATION

          expect(score).toEqual('Intermediate')
        })
      })
      describe('when a maximum response is passed', function () {
        it('should return the maximum score', function () {
          const score = stop_bang_calculation.calculate({
            payload: max_response,
          }).STOP_BANG

          expect(score).toEqual(STOP_BANG_MAX_SCORE)
        })
        it('should return "High" as the interpretation for the total score', function () {
          const score = stop_bang_calculation.calculate({
            payload: max_response,
          }).STOP_BANG_INTERPRETATION

          expect(score).toEqual('High')
        })
      })
      describe('when a random response is passed', function () {
        it('should return the correct score', function () {
          const score = stop_bang_calculation.calculate({
            payload: random_response,
          }).STOP_BANG

          expect(score).toEqual(STOP_BANG_RANDOM_SCORE)
        })
        it('should return "Intermediate" as the interpretation for the total score', function () {
          const score = stop_bang_calculation.calculate({
            payload: random_response,
          }).STOP_BANG_INTERPRETATION

          expect(score).toEqual('Intermediate')
        })
      })
    })

    describe('validations', function () {
      describe('a score is only calculated when all mandatory fields are entered', function () {
        describe('when an empty response is passed', function () {
          it('should throw a ZodError', function () {
            expect(() =>
              stop_bang_calculation.calculate({ payload: {} }),
            ).toThrow(ZodError)
          })
        })

        describe('when an answer is below 0', function () {
          it('should throw an InvalidInputsError', function () {
            expect(() =>
              stop_bang_calculation.calculate({
                payload: {
                  STOP_BANG_Q01: -1,
                },
              }),
            ).toThrow(ZodError)
            expect(() =>
              stop_bang_calculation.calculate({
                payload: {
                  STOP_BANG_Q06: -1,
                },
              }),
            ).toThrow(ZodError)
            expect(() =>
              stop_bang_calculation.calculate({
                payload: {
                  STOP_BANG_Q08: 0,
                },
              }),
            ).toThrow(ZodError)
          })
        })
        describe('when an answer is above maximum allowed value', function () {
          it('should throw an InvalidInputsError', function () {
            expect(() =>
              stop_bang_calculation.calculate({
                payload: {
                  STOP_BANG_Q01: 2,
                },
              }),
            ).toThrow(ZodError)
            expect(() =>
              stop_bang_calculation.calculate({
                payload: {
                  STOP_BANG_Q08: 3,
                },
              }),
            ).toThrow(ZodError)
          })
        })
      })
    })
  })
})
