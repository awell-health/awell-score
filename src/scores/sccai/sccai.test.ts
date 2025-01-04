import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/SCCAI_responses'
import { sccai } from './sccai'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { ZodError } from 'zod'

const SCCAI_BEST_SCORE = 0
const SCCAI_MEDIAN_SCORE = 9
const SCCAI_WORST_SCORE = 19

const sccai_calculation = new Score(sccai)

describe('sccai', function () {
  it('sccai calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('sccai')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'number_of_stools_during_day',
        'nbr_stools_during_night',
        'urgency_of_going_to_toilet',
        'blood_in_stool',
        'general_wellness',
        'joint_pain',
        'eye_problems',
        'deep_skin_problems',
        'surface_skin_problems',
      ]

      const configured_calculation_input_ids = Object.keys(
        sccai_calculation.inputSchemaAsObject.shape,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sccai_calculation.calculate({ payload: best_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['SCCAI'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      it('should return the worst score', function () {
        const outcome = sccai_calculation.calculate({ payload: worst_response })
        expect(outcome.SCCAI).toEqual(SCCAI_WORST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = sccai_calculation.calculate({
          payload: median_response,
        })

        expect(outcome.SCCAI).toEqual(SCCAI_MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      it('should return the best score', function () {
        const outcome = sccai_calculation.calculate({
          payload: best_response,
        })

        expect(outcome.SCCAI).toEqual(SCCAI_BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = sccai_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 10

        expect(outcome.SCCAI).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed (i.e. not all inputs of SCCAI are answered)', function () {
      it('should throw a ZodError', function () {
        expect(() => sccai_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          sccai_calculation.calculate({
            payload: {
              number_of_stools_during_day: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          sccai_calculation.calculate({
            payload: {
              number_of_stools_during_day: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          sccai_calculation.calculate({
            payload: {
              number_of_stools_during_day: 4,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
