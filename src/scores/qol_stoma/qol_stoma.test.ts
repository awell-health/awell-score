import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/qol_stoma_responses'
import { QOL_STOMA_INPUTS } from './definition/qol_stoma_inputs'
import { qol_stoma } from './qol_stoma'

const QOL_STOMA_MIN_SCORE = 20
const QOL_STOMA_MEDIAN_SCORE = 50
const QOL_STOMA_MAX_SCORE = 80

const qol_stoma_calculation = new Score(qol_stoma)

describe('qol_stoma', function () {
  it('qol_stoma calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('qol_stoma')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'QOL_STOMA_Q01',
        'QOL_STOMA_Q02',
        'QOL_STOMA_Q03',
        'QOL_STOMA_Q04',
        'QOL_STOMA_Q05',
        'QOL_STOMA_Q06',
        'QOL_STOMA_Q07',
        'QOL_STOMA_Q08',
        'QOL_STOMA_Q09',
        'QOL_STOMA_Q10',
        'QOL_STOMA_Q11',
        'QOL_STOMA_Q12',
        'QOL_STOMA_Q13',
        'QOL_STOMA_Q14',
        'QOL_STOMA_Q15',
        'QOL_STOMA_Q16',
        'QOL_STOMA_Q17',
        'QOL_STOMA_Q18',
        'QOL_STOMA_Q19',
        'QOL_STOMA_Q20',
      ]

      const configured_calculation_input_ids = Object.keys(
        qol_stoma_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = qol_stoma_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['QOL_STOMA'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = qol_stoma_calculation.calculate({
          payload: min_response,
        })

        expect(outcome.QOL_STOMA).toEqual(QOL_STOMA_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = qol_stoma_calculation.calculate({
          payload: median_response,
        })

        expect(outcome.QOL_STOMA).toEqual(QOL_STOMA_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = qol_stoma_calculation.calculate({
          payload: max_response,
        })

        expect(outcome.QOL_STOMA).toEqual(QOL_STOMA_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const outcome = qol_stoma_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 48

        expect(outcome.QOL_STOMA).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = qol_stoma_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        expect(outcome.QOL_STOMA).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          qol_stoma_calculation.calculate({
            payload: {
              ...min_response,
              QOL_STOMA_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          qol_stoma_calculation.calculate({
            payload: {
              ...min_response,
              QOL_STOMA_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          qol_stoma_calculation.calculate({
            payload: {
              ...min_response,
              QOL_STOMA_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
