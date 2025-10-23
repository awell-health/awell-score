import { Score } from '../../../../classes'
import { ScoreLibrary } from '../../../library'
import { pro2_cd_v2, getAlert } from './pro2_cd_v2'
import { ZodError } from 'zod'

const pro2_calculation = new Score(pro2_cd_v2)

describe('PRO2 | CD | Version 2', function () {
  it('PRO2 CD V2 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('PRO2_CD_V2')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'STOOL_FREQUENCY',
        'ABDOMINAL_PAIN',
        'PRO2_BASELINE_SCORE',
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
    const outcome = pro2_calculation.calculate({
      payload: {
        STOOL_FREQUENCY: 1,
        ABDOMINAL_PAIN: 1,
        PRO2_BASELINE_SCORE: 10,
      },
    })

    it('should return 2 calculation results (score and alert)', function () {
      expect(Object.keys(outcome)).toHaveLength(2)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['PRO2_CD_SCORE', 'PRO2_CD_ALERT']

      const configured_calculation_id = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(configured_calculation_id)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = pro2_calculation.calculate({
        payload: {
          STOOL_FREQUENCY: 0,
          ABDOMINAL_PAIN: 1,
          PRO2_BASELINE_SCORE: 10,
        },
      })

      it('should return the minimum score', function () {
        expect(outcome.PRO2_CD_SCORE).toEqual(7)
      })

      it('should return false for the alert', function () {
        expect(outcome.PRO2_CD_ALERT).toEqual(false)
      })
    })
  })

  describe('when a maximum response is passed', function () {
    const outcome = pro2_calculation.calculate({
      payload: {
        STOOL_FREQUENCY: 20,
        ABDOMINAL_PAIN: 3,
        PRO2_BASELINE_SCORE: 10,
      },
    })

    it('should return the maximum score', function () {
      expect(outcome.PRO2_CD_SCORE).toEqual(55)
    })

    it('should return true for the alert', function () {
      expect(outcome.PRO2_CD_ALERT).toEqual(true)
    })
  })

  describe('when a random response is passed', function () {
    const outcome = pro2_calculation.calculate({
      payload: {
        STOOL_FREQUENCY: 3,
        ABDOMINAL_PAIN: 2,
        PRO2_BASELINE_SCORE: 10,
      },
    })

    it('should return the expected score', function () {
      expect(outcome.PRO2_CD_SCORE).toEqual(16)
    })

    it('should return true for the alert', function () {
      expect(outcome.PRO2_CD_ALERT).toEqual(true)
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

  describe('alert is calculated correctly', function () {
    it('should return false when no baseline score is provided', function () {
      const alert = getAlert(20, undefined)
      expect(alert).toEqual(false)
    })

    it('should return false when total score <= 14 and increase is less than 5', function () {
      const scores = Array.from({ length: 15 }, (_, index) => index)
      scores.forEach(score => {
        const alert = getAlert(score, score)
        expect(alert).toEqual(false)
      })
    })

    it('should return false when total score <= 14 and increase is more than 5', function () {
      const scores = Array.from({ length: 15 }, (_, index) => index)
      scores.forEach(score => {
        const alert = getAlert(score, score - 6)
        expect(alert).toEqual(false)
      })
    })

    it('should return false when total score > 14 and increase is less than 5', function () {
      const alert = getAlert(15, 13)
      expect(alert).toEqual(false)
    })

    it('should return false when total score > 14 and increase is less than 5', function () {
      const alert = getAlert(15, 20)
      expect(alert).toEqual(false)
    })

    it('should return true when total score > 14 and increase is exactly 5', function () {
      const alert = getAlert(15, 10)
      expect(alert).toEqual(true)
    })

    it('should return true when total score > 14 and increase is more than 5', function () {
      const alert = getAlert(16, 10)
      expect(alert).toEqual(true)
    })
  })
})
