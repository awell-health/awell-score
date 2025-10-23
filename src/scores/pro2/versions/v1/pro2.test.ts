import { Score } from '../../../../classes'
import { ScoreLibrary } from '../../../library'
import {
  max_response,
  min_response,
  random_response,
} from './__testdata__/pro2_responses'
import { pro2 } from './pro2'
import { ZodError } from 'zod'

const NON_REMISSION = false
const REMISSION = true

const pro2_calculation = new Score(pro2)

describe('PRO2', function () {
  it('PRO2 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('PRO2')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'STOOL_FREQUENCY',
        'ABDOMINAL_PAIN',
        'GENERAL_WELL_BEING',
        'JOINT_PROBLEMS',
        'SKIN_PROBLEMS',
        'EYE_PROBLEMS',
        'MOUTH_SORES',
      ]

      const configured_calculation_input_ids = Object.keys(
        pro2_calculation.inputSchemaAsObject.shape,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pro2_calculation.calculate({ payload: min_response })

    it('should return 3 calculation results (subscore, total score and remission score)', function () {
      expect(Object.keys(outcome)).toHaveLength(3)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'TOTAL_SCORE',
        'STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE',
        'REMISSION',
      ]

      const configured_calculation_id = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(configured_calculation_id)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = pro2_calculation.calculate({ payload: min_response })

      it('should return the minimum subscore', function () {
        expect(outcome.STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE).toEqual(0)
      })

      it('should return the minimum total score', function () {
        expect(outcome.TOTAL_SCORE).toEqual(0)
      })

      it('should return remission (1)', function () {
        expect(outcome.REMISSION).toEqual(REMISSION)
      })
    })
  })

  describe('when a maximum response is passed', function () {
    const outcome = pro2_calculation.calculate({ payload: max_response })

    it('should return the maximum subscore', function () {
      expect(outcome.STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE).toEqual(55)
    })

    it('should return the maximum total score', function () {
      expect(outcome.TOTAL_SCORE).toEqual(87)
    })

    it('should return non-remission (0)', function () {
      expect(outcome.REMISSION).toEqual(NON_REMISSION)
    })
  })

  describe('when a random response is passed', function () {
    const outcome = pro2_calculation.calculate({ payload: random_response })

    it('should return the expected subscore', function () {
      expect(outcome.STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE).toEqual(8)
    })

    it('should return the maximum total score', function () {
      expect(outcome.TOTAL_SCORE).toEqual(11)
    })

    it('should return non-remission (0)', function () {
      expect(outcome.REMISSION).toEqual(NON_REMISSION)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should throw a ZodError', function () {
        expect(() => pro2_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          pro2_calculation.calculate({
            payload: {
              STOOL_FREQUENCY: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an error', function () {
        expect(() =>
          pro2_calculation.calculate({
            payload: {
              STOOL_FREQUENCY: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should return throw an error', function () {
        expect(() =>
          pro2_calculation.calculate({
            payload: {
              STOOL_FREQUENCY: 21,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
