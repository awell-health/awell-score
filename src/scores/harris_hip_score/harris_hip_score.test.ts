import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/harris_hip_score_test_responses'
import { harris_hip_score } from './harris_hip_score'

const HARRIS_HIP_SCORE_BEST_SCORE = 100
const HARRIS_HIP_SCORE_WORST_SCORE = 0

const harris_hip_score_calculation = new Score(harris_hip_score)

describe('harris_hip_score', function () {
  it('harris_hip_score calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('harris_hip_score')
  })

  describe('basic assumptions', function () {
    const outcome = harris_hip_score_calculation.calculate({
      payload: best_response,
    })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome)).toHaveLength(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'HARRIS_HIP_SCORE',
        'RANGE_OF_MOTION_SCORE',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PAIN',
          'LIMP',
          'SUPPORT',
          'DISTANCE_WALKED',
          'SITTING',
          'ENTER_PUBLIC_TRANSPORTATION',
          'STAIRS',
          'PUT_ON_SOCKS_AND_SHOES',
          'ABSENCE_OF_DEFORMITY',
          'RANGE_OF_MOTION_FLEXION',
          'RANGE_OF_MOTION_ABDUCTION',
          'RANGE_OF_MOTION_ADDUCTION',
          'RANGE_OF_MOTION_EXTERNAL_ROTATION',
          'RANGE_OF_MOTION_INTERNAL_ROTATION',
        ]

        const configured_input_ids = Object.keys(
          harris_hip_score_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        try {
          harris_hip_score_calculation.calculate({
            payload: {
              PAIN: -1,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['PAIN'],
              }),
            ]),
          )
        }
      })
    })

    describe('when called with a response where there are answers out of the expected [0, 4] range', function () {
      it('should throw an ZodError', function () {
        try {
          harris_hip_score_calculation.calculate({
            payload: {
              PAIN: 100,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['PAIN'],
              }),
            ]),
          )
        }
      })
    })
    describe('when called with a response where there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        try {
          harris_hip_score_calculation.calculate({
            payload: {
              PAIN: "I'm not a number",
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['PAIN'],
              }),
            ]),
          )
        }
      })
    })
    describe('when called with an empty response', function () {
      it('should return null as the score', function () {
        const outcome = harris_hip_score_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        expect(outcome.HARRIS_HIP_SCORE).toEqual(null)
        expect(outcome.RANGE_OF_MOTION_SCORE).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = harris_hip_score_calculation.calculate({
        payload: best_response,
      })

      it('should return the best range of motion score (5)', function () {
        expect(outcome.RANGE_OF_MOTION_SCORE).toEqual(5)
      })

      it('should return the best harris hip score', function () {
        expect(outcome.HARRIS_HIP_SCORE).toEqual(HARRIS_HIP_SCORE_BEST_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = harris_hip_score_calculation.calculate({
        payload: worst_response,
      })

      it('should return the worst range of motion score (0)', function () {
        expect(outcome.RANGE_OF_MOTION_SCORE).toEqual(0)
      })

      it('should return the worst harris hip score', function () {
        expect(outcome.HARRIS_HIP_SCORE).toEqual(HARRIS_HIP_SCORE_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = harris_hip_score_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected range of motion score (0)', function () {
        expect(outcome.RANGE_OF_MOTION_SCORE).toEqual(3)
      })

      it('should return the expected harris hip score', function () {
        expect(outcome.HARRIS_HIP_SCORE).toEqual(44)
      })
    })
  })
})
