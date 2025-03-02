import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/pcs_form_responses'
import { PCS_SCALES } from './definition/pcs_scales'
import { pcs } from './pcs'

const PCS_MIN_SCORE = 0
const PCS_MEDIAN_SCORE = 26
const PCS_MAX_SCORE = 52

const pcs_calculation = new Score(pcs)

describe('pcs', function () {
  it('pcs calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('pcs')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'question_1',
        'question_2',
        'question_3',
        'question_4',
        'question_5',
        'question_6',
        'question_7',
        'question_8',
        'question_9',
        'question_10',
        'question_11',
        'question_12',
        'question_13',
      ]

      const configured_input_ids = Object.keys(pcs_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Rumination" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'question_8',
        'question_9',
        'question_10',
        'question_11',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(PCS_SCALES.RUMINATION)
    })

    it('should have the expected input idss configured for the "Magnification" subscale', function () {
      const EXPECTED_INPUT_IDS = ['question_6', 'question_7', 'question_13']

      expect(EXPECTED_INPUT_IDS).toEqual(PCS_SCALES.MAGNIFICATION)
    })

    it('should have the expected input idss configured for the "Helplessness" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'question_1',
        'question_2',
        'question_3',
        'question_4',
        'question_5',
        'question_12',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(PCS_SCALES.HELPLESSNESS)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pcs_calculation.calculate({ payload: min_response })

    it('should calculate a score for all scales (n=3) and a total score', function () {
      const AMOUNT_OF_SCORES = 4
      expect(Object.keys(outcome)).toHaveLength(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'TOTAL',
        'RUMINATION',
        'MAGNIFICATION',
        'HELPLESSNESS',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when all inputs are answered with the min response', function () {
      const outcome = pcs_calculation.calculate({ payload: min_response })

      it('should return the minimum total score', function () {
        expect(outcome.TOTAL).toEqual(PCS_MIN_SCORE)
      })

      it('should return the minimum score on the "Rumination" scale', function () {
        expect(outcome.RUMINATION).toEqual(0)
      })

      it('should return the minimum score on the "Magnification" scale', function () {
        expect(outcome.MAGNIFICATION).toEqual(0)
      })

      it('should return the minimum score on the "Helplessness" scale', function () {
        expect(outcome.HELPLESSNESS).toEqual(0)
      })
    })

    describe('when all inputs are answered with the median response', function () {
      const outcome = pcs_calculation.calculate({ payload: median_response })

      it('should return the median total score', function () {
        expect(outcome.TOTAL).toEqual(PCS_MEDIAN_SCORE)
      })

      it('should return the median score on the "Rumination" scale', function () {
        expect(outcome.RUMINATION).toEqual(8)
      })

      it('should return the median score on the "Magnification" scale', function () {
        expect(outcome.MAGNIFICATION).toEqual(6)
      })

      it('should return the median score on the "Helplessness" scale', function () {
        expect(outcome.HELPLESSNESS).toEqual(12)
      })
    })

    describe('when all inputs are answered with the max response', function () {
      const outcome = pcs_calculation.calculate({ payload: max_response })

      it('should return the maximum total score', function () {
        expect(outcome.TOTAL).toEqual(PCS_MAX_SCORE)
      })

      it('should return the maximum score on the "Rumination" scale', function () {
        expect(outcome.RUMINATION).toEqual(16)
      })

      it('should return the maximum score on the "Magnification" scale', function () {
        expect(outcome.MAGNIFICATION).toEqual(12)
      })

      it('should return the maximum score on the "Helplessness" scale', function () {
        expect(outcome.HELPLESSNESS).toEqual(24)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = pcs_calculation.calculate({ payload: random_response })

      it('should return the correct score on the "Rumination" scale', function () {
        const EXPECTED_RUMINATION_SCORE = 10
        expect(outcome.RUMINATION).toEqual(EXPECTED_RUMINATION_SCORE)
      })

      it('should return the correct score on the "Magnification" scale', function () {
        const EXPECTED_MAGNIFICATION_SCORE = 5
        expect(outcome.MAGNIFICATION).toEqual(EXPECTED_MAGNIFICATION_SCORE)
      })

      it('should return the correct score on the "Helplessness" scale', function () {
        const EXPECTED_HELPLESSNESS_SCORE = 6
        expect(outcome.HELPLESSNESS).toEqual(EXPECTED_HELPLESSNESS_SCORE)
      })

      it('should return the correct total score', function () {
        const EXPECTED_TOTAL_SCORE = 21
        expect(outcome.TOTAL).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = pcs_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null as the score on the "Rumination" scale', function () {
        expect(outcome.RUMINATION).toEqual(null)
      })

      it('should return null as the score on the "Magnification" scale', function () {
        expect(outcome.MAGNIFICATION).toEqual(null)
      })

      it('should return null as the score on the "Helplessness" scale', function () {
        expect(outcome.HELPLESSNESS).toEqual(null)
      })

      it('should return undefined as the total score', function () {
        expect(outcome.TOTAL).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pcs_calculation.calculate({
            payload: {
              ...min_response,
              question_1: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pcs_calculation.calculate({
            payload: {
              ...min_response,
              question_1: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pcs_calculation.calculate({
            payload: {
              ...min_response,
              question_1: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
