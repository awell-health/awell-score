import { ScoreLibrary } from '../library'
import { bmi_test } from './bmi_test'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_calculation = new Score(bmi_test)

describe('bmi_test', function () {
  it('bmi_test calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi_test')
  })

  describe('specific_steps_bmi_test_calc', function () {
    describe('basic assumptions', function () {
      const outcome = bmi_calculation.calculate({
        payload: {
          weight: 70,
          height: 175,
        },
      })

      it('should return one calculation result', function () {
        const AMOUNT_OF_RESULTS = 1
        expect(Object.keys(outcome)).toHaveLength(AMOUNT_OF_RESULTS)
      })

      it('should the calculation names', function () {
        const EXPECTED_CALCULATION_IDS = ['bmi']

        const EXTRACTED_CALCULATION_IDS_FROM_RESULT = Object.keys(outcome)

        expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).toEqual(
          EXPECTED_CALCULATION_IDS,
        )
      })
    })

    describe('validations', function () {
      describe('the score includes the correct input fields', function () {
        it('should have all the expected input ids configured', function () {
          const EXPECTED_INPUT_IDS = ['weight', 'height']
          const configured_calculation_input_ids = Object.keys(
            bmi_calculation.inputSchemaAsObject.shape,
          )

          expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
        })
      })

      describe('when called with a response with answers out of the expected range', function () {
        describe('when an answer is not a number', function () {
          it('should throw an error', function () {
            expect(() =>
              bmi_calculation.calculate({
                payload: {
                  weight: 'hello',
                  height: 175,
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

    describe('score calculation', function () {
      describe('when called with valid data', function () {
        const outcome = bmi_calculation.calculate({
          payload: {
            weight: 70,
            height: 175,
          },
        })

        it('should return the correct BMI', function () {
          const EXPECTED_RESULT = 22.86
          expect(outcome.bmi).toEqual(EXPECTED_RESULT)
        })
      })
    })
  })
})
