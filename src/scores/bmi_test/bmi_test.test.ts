import { ScoreLibrary } from '../library'
import { bmi_test } from './bmi_test'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_calculation = new Score(bmi_test)

describe('bmi_test', function () {
  it('bmi_test calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi_test')
  })

  describe('basic assumptions', function () {
    const outcome = bmi_calculation.calculate({
      payload: {
        weight: 70,
        height: 170,
      },
    })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['BMI']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })

    it('should calculate BMI correctly', function () {
      const EXPECTED_BMI = 24.22
      expect(outcome.BMI).toEqual(EXPECTED_BMI)
    })
  })

  describe('validation', function () {
    it('should throw error if weight is negative', function () {
      expect(() =>
        bmi_calculation.calculate({
          payload: {
            weight: -70,
            height: 170,
          },
        }),
      ).toThrow(ZodError)
    })

    it('should throw error if height is zero', function () {
      expect(() =>
        bmi_calculation.calculate({
          payload: {
            weight: 70,
            height: 0,
          },
        }),
      ).toThrow(ZodError)
    })
  })
})
