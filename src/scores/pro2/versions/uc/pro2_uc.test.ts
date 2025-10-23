import { Score } from '../../../../classes'
import { ScoreLibrary } from '../../../library'
import { pro2_uc, getAlert } from './pro2_uc'
import { ZodError } from 'zod'

const pro2_calculation = new Score(pro2_uc)

describe('PRO2 | UC | Version 10-2025', function () {
  it('PRO2 UC calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('PRO2_UC')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'STOOL_FREQUENCY',
        'BLOOD_IN_STOOL',
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
        BLOOD_IN_STOOL: 1,
      },
    })

    it('should return 2 calculation results (score and alert)', function () {
      expect(Object.keys(outcome)).toHaveLength(2)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['PRO2_UC_SCORE', 'PRO2_UC_ALERT']

      const configured_calculation_id = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(configured_calculation_id)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      const outcome = pro2_calculation.calculate({
        payload: {
          STOOL_FREQUENCY: 0,
          BLOOD_IN_STOOL: 0,
        },
      })

      it('should return the minimum score', function () {
        expect(outcome.PRO2_UC_SCORE).toEqual(0)
      })

      it('should return false for the alert', function () {
        expect(outcome.PRO2_UC_ALERT).toEqual(false)
      })
    })
  })

  describe('when a maximum response is passed', function () {
    const outcome = pro2_calculation.calculate({
      payload: {
        STOOL_FREQUENCY: 3,
        BLOOD_IN_STOOL: 3,
      },
    })

    it('should return the maximum score', function () {
      expect(outcome.PRO2_UC_SCORE).toEqual(6)
    })

    it('should return true for the alert', function () {
      expect(outcome.PRO2_UC_ALERT).toEqual(true)
    })
  })

  describe('when a random response is passed', function () {
    const outcome = pro2_calculation.calculate({
      payload: {
        STOOL_FREQUENCY: 3,
        BLOOD_IN_STOOL: 2,
      },
    })

    it('should return the expected score', function () {
      expect(outcome.PRO2_UC_SCORE).toEqual(5)
    })

    it('should return true for the alert', function () {
      expect(outcome.PRO2_UC_ALERT).toEqual(true)
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
              STOOL_FREQUENCY: 4,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('alert is calculated correctly', function () {
    describe('when both conditions are false', function () {
      it('should return false when stool frequency is 1 and blood in stool is 0', function () {
        const stoolFrequency = 1
        const bloodInStool = 0

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(false)
      })
    })

    describe('when only stool frequency condition is true', function () {
      it('should return true when stool frequency is 2 and blood in stool is 0', function () {
        const stoolFrequency = 2
        const bloodInStool = 0

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 3 and blood in stool is 0', function () {
        const stoolFrequency = 3
        const bloodInStool = 0

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })
    })

    describe('when only blood in stool condition is true', function () {
      it('should return true when stool frequency is 1 and blood in stool is 1', function () {
        const stoolFrequency = 1
        const bloodInStool = 1

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 1 and blood in stool is 2', function () {
        const stoolFrequency = 1
        const bloodInStool = 2

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 1 and blood in stool is 3', function () {
        const stoolFrequency = 1
        const bloodInStool = 3

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })
    })

    describe('when both conditions are true', function () {
      it('should return true when stool frequency is 2 and blood in stool is 1', function () {
        const stoolFrequency = 2
        const bloodInStool = 1

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 2 and blood in stool is 2', function () {
        const stoolFrequency = 2
        const bloodInStool = 2

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 2 and blood in stool is 3', function () {
        const stoolFrequency = 2
        const bloodInStool = 3

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 3 and blood in stool is 1', function () {
        const stoolFrequency = 3
        const bloodInStool = 1

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 3 and blood in stool is 2', function () {
        const stoolFrequency = 3
        const bloodInStool = 2

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })

      it('should return true when stool frequency is 3 and blood in stool is 3', function () {
        const stoolFrequency = 3
        const bloodInStool = 3

        const alert = getAlert(stoolFrequency, bloodInStool)
        expect(alert).toEqual(true)
      })
    })
  })
})
