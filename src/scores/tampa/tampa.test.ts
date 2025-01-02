import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/tampa_test_responses'
import { TAMPA_INPUTS } from './definition/tampa_inputs'
import { tampa } from './tampa'

const TAMPA_MIN_SCORE = 17
const TAMPA_MAX_SCORE = 68

const tampa_calculation = new Score(tampa)

describe('tampa', function () {
  it('tampa calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('tampa')
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
        'Q16',
        'Q17',
      ]

      const configured_calculation_input_ids = Object.keys(
        tampa_calculation.inputSchemaAsObject.shape,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = tampa_calculation.calculate({ payload: min_response })

    it('should calculate two results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the correct calculation ids', function () {
      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual(['TAMPA', 'INTERPRETATION'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const score = tampa_calculation.calculate({ payload: min_response })

        expect(score.TAMPA).toEqual(TAMPA_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const score = tampa_calculation.calculate({
          payload: median_response,
        })

        const EXPECTED_MEDIAN_SCORE = 43

        expect(score.TAMPA).toEqual(EXPECTED_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const score = tampa_calculation.calculate({
          payload: max_response,
        })

        expect(score.TAMPA).toEqual(TAMPA_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const score = tampa_calculation.calculate({
          payload: random_response,
        })

        const EXPECTED_SCORE = 43

        expect(score.TAMPA).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => tampa_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          tampa_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          tampa_calculation.calculate({
            payload: {
              Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
