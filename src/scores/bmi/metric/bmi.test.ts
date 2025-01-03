import { bmi } from './bmi'
import { Score } from '../../../classes'
import { ZodError } from 'zod'
import { ScoreLibrary } from '../../library'

const valid_input = {
  weight: 80,
  height: 200,
}

describe('bmi', function () {
  const calculation = new Score(bmi)

  it('bmi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = ['weight', 'height']

      const configured_calculation_input_ids = Object.keys(
        calculation.inputSchemaAsObject.shape,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = calculation.calculate({
      payload: valid_input,
    })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['BMI']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    describe('should return expected result with random response', function () {
      it('should return correct result if weight and height are valid', function () {
        const outcome = calculation.calculate({
          payload: valid_input,
        })

        const EXPECTED_BMI = 20

        expect(outcome.BMI).toEqual(EXPECTED_BMI)
      })
    })
  })

  describe('values entered by the user shall be checked to verify they are inside specified ranges', function () {
    describe('correctly handling with missing or negative data', function () {
      it('should throw an error when weight and height are not defined', function () {
        expect(() =>
          calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })

      it('should throw an error when "height" or "weight" is 0', function () {
        expect(() =>
          calculation.calculate({
            payload: {
              weight: 0,
              height: 0,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an error when "weight" is not in the expected range', function () {
        expect(() =>
          calculation.calculate({
            payload: {
              weight: -10,
              height: 80,
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw an error when "height" is not in the expected range', function () {
        expect(() =>
          calculation.calculate({
            payload: {
              weight: 90,
              height: 310,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
