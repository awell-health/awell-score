import { ScoreLibrary } from '../calculation_library'
import { ten_meter_walk_test } from './10_meter_walk_test'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const tmwt_calculation = new Score(ten_meter_walk_test)

describe('ten_meter_walk_test', function () {
  it('ten_meter_walk_test calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ten_meter_walk_test')
  })

  describe('specific_steps_ten_meter_walk_test_calc', function () {
    describe('basic assumptions', function () {
      const outcome = tmwt_calculation.calculate({
        payload: {
          TRIAL_1: 10,
        },
      })

      it('should return 3 calculation results', function () {
        const AMOUNT_OF_RESULTS = 3
        expect(Object.keys(outcome)).toHaveLength(AMOUNT_OF_RESULTS)
      })

      it('should the calculation names', function () {
        const EXPECTED_CALCULATION_IDS = [
          'TMWT_MEAN_IN_SECONDS',
          'TMWT_MEAN_IN_METERS_PER_SECOND',
          'TMWT_MEAN_IN_KILOMETERS_PER_HOUR',
        ]

        const EXTRACTED_CALCULATION_IDS_FROM_RESULT = Object.keys(outcome)

        expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).toEqual(
          EXPECTED_CALCULATION_IDS,
        )
      })
    })

    describe('validations', function () {
      describe('the score includes the correct input fields', function () {
        it('should have all the expected input ids configured', function () {
          const EXPECTED_INPUT_IDS = ['TRIAL_1', 'TRIAL_2', 'TRIAL_3']
          const configured_calculation_input_ids = Object.keys(
            tmwt_calculation.inputSchemaAsObject.shape,
          )

          expect(EXPECTED_INPUT_IDS).toEqual(configured_calculation_input_ids)
        })
      })

      describe('when called with a response with answers out of the expected [0,4] range', function () {
        describe('when an answer is not a number', function () {
          it('should throw an error', function () {
            expect(() =>
              tmwt_calculation.calculate({
                payload: {
                  TRIAL_1: 'hello',
                },
              }),
            ).toThrow(ZodError)
          })
        })

        describe('when the response is empty', function () {
          it('should throw an error', function () {
            expect(() =>
              tmwt_calculation.calculate({
                payload: {},
              }),
            ).toThrow(ZodError)
          })
        })
      })
    })

    describe('score calculation', function () {
      describe('when called with a single trial', function () {
        const outcome = tmwt_calculation.calculate({
          payload: {
            TRIAL_1: 7, // Took the patient 7 seconds to walk 10 meters
          },
        })

        it('should return the correct result for the mean in seconds', function () {
          const EXPECTED_RESULT = 7
          expect(outcome.TMWT_MEAN_IN_SECONDS).toEqual(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in meters per second', function () {
          const EXPECTED_RESULT = 1.43
          expect(outcome.TMWT_MEAN_IN_METERS_PER_SECOND).toEqual(
            EXPECTED_RESULT,
          )
        })

        it('should return the correct result for the mean in kilometers per hour', function () {
          const EXPECTED_RESULT = 5.14
          expect(outcome.TMWT_MEAN_IN_KILOMETERS_PER_HOUR).toEqual(
            EXPECTED_RESULT,
          )
        })
      })

      describe('when called with multiple trials', function () {
        const outcome = tmwt_calculation.calculate({
          payload: {
            TRIAL_1: 7, // Took the patient 7 seconds to walk 10 meters in trial 1
            TRIAL_2: 8, // Took the patient 8 seconds to walk 10 meters in trial 2
            TRIAL_3: 6, // Took the patient 6 seconds to walk 10 meters in trial 3
          },
        })

        it('should return the correct result for the mean in seconds', function () {
          const EXPECTED_RESULT = 7
          expect(outcome.TMWT_MEAN_IN_SECONDS).toEqual(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in meters per second', function () {
          const EXPECTED_RESULT = 1.43
          expect(outcome.TMWT_MEAN_IN_METERS_PER_SECOND).toEqual(
            EXPECTED_RESULT,
          )
        })

        it('should return the correct result for the mean in kilometers per hour', function () {
          const EXPECTED_RESULT = 5.14
          expect(outcome.TMWT_MEAN_IN_KILOMETERS_PER_HOUR).toEqual(
            EXPECTED_RESULT,
          )
        })
      })
    })
  })
})
