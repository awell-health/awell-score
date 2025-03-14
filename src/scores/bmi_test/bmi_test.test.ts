import { ScoreLibrary } from '../library'
import { bmi_test } from './bmi_test'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_calculation = new Score(bmi_test)

describe('bmi_test', function () {
  it('bmi_test calculation function should be available as a library calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi_test')
  })

  describe('bmi calculation', function () {
    describe('basic assumptions', function () {
      const outcome = bmi_calculation.calculate({
        payload: {
          weight: 70,
          height: 170,
        },
      })

      it('should return a single calculation result', function () {
        expect(Object.keys(outcome)).toHaveLength(1)
      })

      it('should have the correct calculation id', function () {
        const EXPECTED_CALCULATION_ID = ['BMI_RESULT']
        const CALCULATION_ID = Object.keys(outcome)
        expect(CALCULATION_ID).toEqual(EXPECTED_CALCULATION_ID)
      })

      it('should return the correct BMI result', function () {
        const EXPECTED_BMI = 24.22
        expect(outcome.BMI_RESULT).toEqual(EXPECTED_BMI)
      })
    })

    describe('validations', function () {
      describe('the score includes the correct input fields', function () {
        it('should have all the expected input ids configured', function () {
          const EXPECTED_INPUT_IDS = ['weight', 'height']
          const configured_input_ids = Object.keys(
            bmi_calculation.inputSchemaAsObject.shape,
          )

          expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
        })
      })

      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            bmi_calculation.calculate({
              payload: {
                weight: 'hello',
                height: 170,
              },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when the response is empty', function () {
        it('should throw an error', function () {
          expect(() =>
            bmi_calculation.calculate({ payload: {} }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
