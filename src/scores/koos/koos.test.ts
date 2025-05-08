import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/koos_form_responses'
import { koos } from './koos'

const KOOS_WORST_SCORE = 0
const KOOS_MEDIAN_SCORE = 50
const KOOS_BEST_SCORE = 100

const koos_calculation = new Score(koos)

describe('koos', function () {
  it('koos calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('koos')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'P1',
        'P2',
        'P3',
        'P4',
        'P5',
        'P6',
        'P7',
        'P8',
        'P9',
        'Sy1',
        'Sy2',
        'Sy3',
        'Sy4',
        'Sy5',
        'Sy6',
        'Sy7',
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'A7',
        'A8',
        'A9',
        'A10',
        'A11',
        'A12',
        'A13',
        'A14',
        'A15',
        'A16',
        'A17',
        'Sp1',
        'Sp2',
        'Sp3',
        'Sp4',
        'Sp5',
        'Q1',
        'Q2',
        'Q3',
        'Q4',
      ]

      const configured_calculation_input_ids = Object.keys(koos.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = koos_calculation.calculate({ payload: min_response })

    it('should calculate a 5 score', function () {
      expect(Object.keys(outcome).length).toEqual(5)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual(['PAIN', 'SYMPTOMS', 'ADL_FUNCTION', 'SPORT_AND_RECREATION_FUNCTION', 'QUALITY_OF_LIFE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum (best) response', function () {
      it('should return the best score', function () {
        const score = koos_calculation.calculate({
          payload: min_response,
        })

        expect(score.PAIN).toEqual(KOOS_BEST_SCORE)
        expect(score.SYMPTOMS).toEqual(KOOS_BEST_SCORE)
        expect(score.ADL_FUNCTION).toEqual(KOOS_BEST_SCORE)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(KOOS_BEST_SCORE)
        expect(score.QUALITY_OF_LIFE).toEqual(KOOS_BEST_SCORE)
      })

    })

    describe('when called with a median response', function () {
      it('should return the median score', function () {
        const score = koos_calculation.calculate({
          payload: median_response,
        })

        expect(score.PAIN).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.SYMPTOMS).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.ADL_FUNCTION).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(KOOS_MEDIAN_SCORE)
        expect(score.QUALITY_OF_LIFE).toEqual(KOOS_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum (worst) response', function () {
      it('should return the worst score', function () {
        const score = koos_calculation.calculate({
          payload: max_response,
        })

        expect(score.PAIN).toEqual(KOOS_WORST_SCORE)
        expect(score.SYMPTOMS).toEqual(KOOS_WORST_SCORE)
        expect(score.ADL_FUNCTION).toEqual(KOOS_WORST_SCORE)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(KOOS_WORST_SCORE)
        expect(score.QUALITY_OF_LIFE).toEqual(KOOS_WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const score = koos_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE_PAIN = 58.3
        const EXPECTED_SCORE_SYMPTOMS = 57.1
        const EXPECTED_SCORE_ADL_FUNCTION = 57.4
        const EXPECTED_SCORE_SPORT_AND_RECREATION_FUNCTION = 80
        const EXPECTED_SCORE_QUALITY_OF_LIFE = 62.5

        expect(score.PAIN).toEqual(EXPECTED_SCORE_PAIN)
        expect(score.SYMPTOMS).toEqual(EXPECTED_SCORE_SYMPTOMS)
        expect(score.ADL_FUNCTION).toEqual(EXPECTED_SCORE_ADL_FUNCTION)
        expect(score.SPORT_AND_RECREATION_FUNCTION).toEqual(EXPECTED_SCORE_SPORT_AND_RECREATION_FUNCTION)
        expect(score.QUALITY_OF_LIFE).toEqual(EXPECTED_SCORE_QUALITY_OF_LIFE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => koos_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_calculation.calculate({
            payload: {
              'P1': "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_calculation.calculate({
            payload: {
              'P1': -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          koos_calculation.calculate({
            payload: {
              'P1': 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
