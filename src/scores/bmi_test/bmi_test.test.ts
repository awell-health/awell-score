import { Score } from '../../classes'
import { bmi_test } from './bmi_test'
import { ZodError } from 'zod'

const bmi_test_calculation = new Score(bmi_test)

describe('bmi_test', function () {
  it('bmi_test calculation function should be available as a calculation', function () {
    expect(bmi_test_calculation.name).toBe('BMI Test')
  })

  describe('score calculation', function () {
    describe('when called with valid inputs', function () {
      const outcome = bmi_test_calculation.calculate({
        payload: {
          weight: 70,
          height: 175,
        },
      })

      it('should return the correct result for BMI', function () {
        const EXPECTED_RESULT = 22.86
        expect(outcome.bmi).toEqual(EXPECTED_RESULT)
      })
    })

    describe('validations', function () {
      describe('when inputs are invalid', function () {
        it('should throw an error', function () {
          expect(() => 
            bmi_test_calculation.calculate({
              payload: {
                weight: -70,
                height: 'invalid',
              },
            })
          ).toThrow(ZodError)
        })
      })
    })
  })
})
