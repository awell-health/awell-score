import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/CHA2DS2_VASc_Score_test_responses'
import { CHA2DS2_VASc_Score } from './CHA2DS2_VASc_Score'

const BEST_SCORE = 0
const WORST_SCORE = 9

const calculation = new Score(CHA2DS2_VASc_Score)

describe('CHA2DS2_VASc_Score', function () {
  it('CHA2DS2_VASc_Score calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('CHA2DS2_VASc_Score')
  })

  describe('basic assumptions', function () {
    const outcome = calculation.calculate({ payload: best_response })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['CHA2DS2_VASC_SCORE']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          '1_AGE',
          '2_SEX',
          '3_CHF_HISTORY',
          '4_HYPERTENSION_HISTORY',
          '5_STROKE_TIA_THROMBOEMBOLISM_HISTORY',
          '6_VASCULAR_DISEASE_HISTORY',
          '7_DIABETES_HISTORY',
        ]

        const configured_input_ids = Object.keys(calculation.inputSchema)
        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          calculation.calculate({
            payload: {
              '7_DIABETES_HISTORY': 3,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.CHA2DS2_VASC_SCORE).toEqual(BEST_SCORE)
      })
    })
    describe('when called with the worst response', function () {
      const outcome = calculation.calculate({ payload: worst_response })

      it('should return the worst "Patient interview" score', function () {
        expect(outcome.CHA2DS2_VASC_SCORE).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = calculation.calculate({ payload: random_response })

      it('should return the expected score', function () {
        const EXPECTED_SCORE = 6
        expect(outcome.CHA2DS2_VASC_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })
})
