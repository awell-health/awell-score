import { ScoreLibrary } from '../library'
import { bmi } from './bmi'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_calculation = new Score(bmi)

describe('bmi', function () {
  it('bmi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi')
  })

  describe('basic assumptions', function () {
    const outcome = bmi_calculation.calculate({
      payload: {
        weight: 70,
        height: 170,
      },
    })

    it('should return a BMI result', function () {
      const EXPECTED_BMI = 24.22
      expect(outcome).toEqual({ bmi: EXPECTED_BMI })
    })
  })

  describe('validations', function () {
    describe('when called with an invalid payload', function () {
      it('should throw an error', function () {
        expect(() =>
          bmi_calculation.calculate({
            payload: {
              weight: 'invalid',
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when the response is empty', function () {
      it('should throw an error', function () {
        expect(() =>
          bmi_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
