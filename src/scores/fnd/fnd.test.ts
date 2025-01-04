import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/fnd_test_responses'
import { fnd } from './fnd'

const fnd_calculation = new Score(fnd)

describe('fnd', function () {
  it('fnd calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('fnd')
  })

  describe('basic assumptions', function () {
    const outcome = fnd_calculation.calculate({ payload: best_response })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'FAGERSTROM_TOTAL_SCORE',
        'FAGERSTROM_DEPENDENCE_LEVEL',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'FAGERSTROM_Q01',
          'FAGERSTROM_Q02',
          'FAGERSTROM_Q03',
          'FAGERSTROM_Q04',
          'FAGERSTROM_Q05',
          'FAGERSTROM_Q06',
        ]

        const configured_input_ids = Object.keys(fnd_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          fnd_calculation.calculate({
            payload: {
              FAGERSTROM_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => fnd_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })

    describe('when called with the worst response', function () {
      const outcome = fnd_calculation.calculate({ payload: worst_response })

      describe('Fagerstrom Total Score', function () {
        it('should return the worst score', function () {
          const score = outcome.FAGERSTROM_TOTAL_SCORE
          expect(score).toEqual(10)
        })
      })
      describe('Fagerstrom Dependence Level', function () {
        it('should return the worst dependence level', function () {
          const score = outcome.FAGERSTROM_DEPENDENCE_LEVEL
          expect(score).toEqual('High dependence')
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = fnd_calculation.calculate({ payload: best_response })

      describe('Fagerstrom Total Score', function () {
        it('should return the best score', function () {
          const score = outcome.FAGERSTROM_TOTAL_SCORE
          expect(score).toEqual(0)
        })
      })
      describe('Fagerstrom Dependence Level', function () {
        it('should return the best dependence level', function () {
          const score = outcome.FAGERSTROM_DEPENDENCE_LEVEL

          expect(score).toEqual('Low depedence')
        })
      })
    })

    describe('when called with a random response', function () {
      const outcome = fnd_calculation.calculate({ payload: random_response })

      describe('Fagerstrom Total Score', function () {
        it('should return the expeced score', function () {
          const score = outcome.FAGERSTROM_TOTAL_SCORE
          const EXPECTED_SCORE = 5
          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Fagerstrom Dependence Level', function () {
        it('should return the expeced dependence level', function () {
          const score = outcome.FAGERSTROM_DEPENDENCE_LEVEL
          expect(score).toEqual('Moderate dependence')
        })
      })
    })
  })
})
