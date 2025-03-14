import { ScoreLibrary } from '../library'
import { bmi } from './bmi'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_calculation = new Score(bmi)

describe('bmi', function () {
  it('bmi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi')
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['weight', 'height']
        const configured_input_ids = Object.keys(
          bmi_calculation.inputSchemaAsObject.shape,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when called with invalid data', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          bmi_calculation.calculate({
            payload: {
              weight: 'hello',
            },
          }),
        ).toThrow(ZodError)
      })

      it('should throw a ZodError when height is missing', function () {
        expect(() =>
          bmi_calculation.calculate({
            payload: {
              weight: 70,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with valid data', function () {
      it('should return the correct BMI', function () {
        const outcome = bmi_calculation.calculate({
          payload: {
            weight: 70,
            height: 170,
          },
        })
        expect(outcome.bmi).toEqual(24.22)
      })
    })
  })
})
