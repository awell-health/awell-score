import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/forgotten_joint_score_12_hip_test_responses'
import { forgotten_joint_score_hip } from './forgotten_joint_score_hip_12'

const BEST_FJS_SCORE = 100
const MEDIAN_FJS_SCORE = 50
const WORST_FJS_SCORE = 0

const fjs_calculation = new Score(forgotten_joint_score_hip)

describe('forgotten_joint_score_hip', function () {
  it('forgotten_joint_score_hip calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('forgotten_joint_score_hip')
  })

  describe('basic assumptions', function () {
    const outcome = fjs_calculation.calculate({ payload: best_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation result id', function () {
      const EXPECTED_CALCULATION_ID = ['FORGOTTEN_JOINT_SCORE_HIP']

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
        ]

        const configured_input_ids = Object.keys(fjs_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is below the expected [1,5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          fjs_calculation.calculate({
            payload: {
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with a response where there are answers out of the expected [1, 5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          fjs_calculation.calculate({
            payload: {
              Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          fjs_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should return null result', function () {
        const outcome = fjs_calculation.calculate({ payload: {} })
        expect(outcome.FORGOTTEN_JOINT_SCORE_HIP).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      it('should return the best FJS score', function () {
        const outcome = fjs_calculation.calculate({ payload: best_response })
        expect(outcome.FORGOTTEN_JOINT_SCORE_HIP).toEqual(BEST_FJS_SCORE)
      })
    })

    describe('when called with the median response', function () {
      it('should return the median FJS score', function () {
        const outcome = fjs_calculation.calculate({ payload: median_response })
        expect(outcome.FORGOTTEN_JOINT_SCORE_HIP).toEqual(MEDIAN_FJS_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      it('should return the worst FJS score', function () {
        const outcome = fjs_calculation.calculate({ payload: worst_response })
        expect(outcome.FORGOTTEN_JOINT_SCORE_HIP).toEqual(WORST_FJS_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected FJS score', function () {
        const outcome = fjs_calculation.calculate({ payload: random_response })
        const EXPECTED_SCORE = 65
        expect(outcome.FORGOTTEN_JOINT_SCORE_HIP).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with an incomplete response', function () {
      it('should return the expected FJS score', function () {
        const outcome = fjs_calculation.calculate({
          // Mean = 2.625 * 12 = 31.5
          payload: {
            Q01: 1,
            Q02: 2,
            Q03: 3,
            Q04: 4,
            Q05: 5,
            Q06: 1,
            Q07: 2,
            Q08: 3,
            Q09: undefined,
            Q10: undefined,
            Q11: undefined,
            Q12: undefined,
          },
        })
        const EXPECTED_SCORE = 59
        expect(outcome.FORGOTTEN_JOINT_SCORE_HIP).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
