import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/IBD_disk_responses'
import { ibd_disk_total_score } from './ibd_disk_total_score'

const IBD_DISK_MIN_SCORE = 0
const IBD_DISK_MEDIAN_SCORE = 50
const IBD_DISK_MAX_SCORE = 100

const ibd_disk_calculation = new Score(ibd_disk_total_score)

describe('ibd_disk_total_score', function () {
  it('ibd_disk_total_score calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ibd_disk_total_score')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'abdominal_pain',
        'regulating_defecation',
        'interpersonal_interactions',
        'education_and_work',
        'sleep',
        'energy',
        'emotions',
        'body_image',
        'sexual_function',
        'arthralgia',
      ]

      const configured_calculation_input_ids = Object.keys(
        ibd_disk_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ibd_disk_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['IBD_DISK_TOTAL'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = ibd_disk_calculation.calculate({
          payload: min_response,
        })
        expect(outcome.IBD_DISK_TOTAL).toEqual(IBD_DISK_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = ibd_disk_calculation.calculate({
          payload: median_response,
        })
        expect(outcome.IBD_DISK_TOTAL).toEqual(IBD_DISK_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = ibd_disk_calculation.calculate({
          payload: max_response,
        })
        expect(outcome.IBD_DISK_TOTAL).toEqual(IBD_DISK_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const EXPECTED_SCORE = 44

        const outcome = ibd_disk_calculation.calculate({
          payload: random_response,
        })
        expect(outcome.IBD_DISK_TOTAL).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => ibd_disk_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ibd_disk_calculation.calculate({
            payload: {
              abdominal_pain: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected [0, 5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ibd_disk_calculation.calculate({
            payload: {
              abdominal_pain: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected [0, 5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ibd_disk_calculation.calculate({
            payload: {
              abdominal_pain: 11,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
