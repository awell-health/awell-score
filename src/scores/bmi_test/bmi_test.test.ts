import { Score } from '../../classes'
import { bmi_test } from './bmi_test'
import { ZodError } from 'zod'

const bmiTestCalculation = new Score(bmi_test)

describe('bmi_test', function () {
  it('should calculate BMI correctly given valid inputs', function () {
    const result = bmiTestCalculation.calculate({
      payload: {
        weight: 70,
        height: 170
      },
    })
    expect(result.bmi).toEqual(24.22) // BMI = 70/(1.7*1.7) = 24.22
  })

  it('should throw an error for invalid inputs', function () {
    expect(() => bmiTestCalculation.calculate({ payload: { weight: -10, height: 170 } })).toThrow(ZodError)
  })
})
