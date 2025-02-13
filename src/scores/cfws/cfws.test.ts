import {
  best_response,
  median_response,
  worst_response,
} from './__testdata__/cfws_form_responses'
import { cfws } from './cfws'
import { CFWS_SCORE_CATEGORY } from './definition'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { ZodError } from 'zod'

const CFWS_WORST_SCORE = 15
const CFWS_MEDIAN_SCORE = 45
const CFWS_BEST_SCORE = 75

const cfws_calculation = new Score(cfws)

describe('cfws', function () {
  it('cfws calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('cfws')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
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
        'Q13',
        'Q14',
        'Q15',
      ]

      const configured_calculation_input_ids = Object.keys(cfws.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = cfws_calculation.calculate({ payload: best_response })

    it('should calculate two scores', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the correct calculation ids', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual([
        'CFWS_SCORE',
        'CFWS_INTERPRETATION',
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with the best response', function () {
      const outcome = cfws_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.CFWS_SCORE).toEqual(CFWS_BEST_SCORE)
      })

      it('should return average interpretation', function () {
        expect(outcome.CFWS_INTERPRETATION).toEqual(CFWS_SCORE_CATEGORY.AVERAGE)
      })
    })

    describe('when called with the median response', function () {
      const outcome = cfws_calculation.calculate({ payload: median_response })

      it('should return the median score', function () {
        expect(outcome.CFWS_SCORE).toEqual(CFWS_MEDIAN_SCORE)
      })

      it('should return little lower interpretation', function () {
        expect(outcome.CFWS_INTERPRETATION).toEqual(
          CFWS_SCORE_CATEGORY.LITTLE_LOWER,
        )
      })
    })

    describe('when called with the worst response', function () {
      const outcome = cfws_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.CFWS_SCORE).toEqual(CFWS_WORST_SCORE)
      })

      it('should return lot lower interpretation', function () {
        expect(outcome.CFWS_INTERPRETATION).toEqual(
          CFWS_SCORE_CATEGORY.LOT_LOWER,
        )
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = cfws_calculation.calculate({ payload: {} })

      it('should return null for the score', function () {
        expect(outcome.CFWS_SCORE).toEqual(null)
      })

      it('should return null for the interpretation', function () {
        expect(outcome.CFWS_INTERPRETATION).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          cfws_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          cfws_calculation.calculate({
            payload: {
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          cfws_calculation.calculate({
            payload: {
              Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
