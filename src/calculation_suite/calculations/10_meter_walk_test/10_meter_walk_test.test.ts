import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_from_calculation_blueprint,
  view_status,
} from '../shared_functions'
import { ten_meter_walk_test } from './10_meter_walk_test'
import { TEN_METER_WALK_TEST_INPUTS } from './definition/10_meter_walk_test_inputs'

const tmwt_calculation = execute_test_calculation(ten_meter_walk_test)

describe('ten_meter_walk_test', function () {
  it('ten_meter_walk_test calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('ten_meter_walk_test')
  })

  describe('specific_steps_ten_meter_walk_test_calc', function () {
    describe('basic assumptions', function () {
      const outcome = tmwt_calculation({
        TRIAL_1: 10,
      })

      it('should return 3 calculation results', function () {
        const AMOUNT_OF_RESULTS = 3
        expect(outcome).to.have.length(AMOUNT_OF_RESULTS)
      })

      it('should the calculation names', function () {
        const EXPECTED_CALCULATION_IDS = [
          'TMWT_MEAN_IN_SECONDS',
          'TMWT_MEAN_IN_METERS_PER_SECOND',
          'TMWT_MEAN_IN_KILOMETERS_PER_HOUR',
        ]

        const EXTRACTED_CALCULATION_IDS_FROM_RESULT =
          get_result_ids_from_calculation_output(outcome)

        expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).to.eql(
          EXPECTED_CALCULATION_IDS
        )
      })
    })

    describe('validations', function () {
      describe('the score includes the correct input fields', function () {
        it('should have all the expected input ids configured', function () {
          const EXPECTED_INPUT_IDS = ['TRIAL_1', 'TRIAL_2', 'TRIAL_3']
          const configured_calculation_input_ids =
            get_input_ids_from_calculation_blueprint(TEN_METER_WALK_TEST_INPUTS)

          expect(EXPECTED_INPUT_IDS).to.eql(configured_calculation_input_ids)
        })
      })

      describe('when called with a response with answers out of the expected [0,4] range', function () {
        describe('when an answer is not a number', function () {
          it('should throw an error', function () {
            expect(() =>
              tmwt_calculation({
                TRIAL_1: 'hello',
              })
            ).to.throw(InvalidInputsError)
          })
        })

        describe('when the response is empty', function () {
          const outcome = tmwt_calculation({})

          it('should return undefined result & missing status as the mean in seconds', function () {
            const result = view_result('TMWT_MEAN_IN_SECONDS')(outcome)
            const status = view_status('TMWT_MEAN_IN_SECONDS')(outcome)

            expect(result).to.eql(undefined)
            expect(status).to.eql(MISSING_STATUS)
          })

          it('should return undefined result & missing status as the mean in meters per second', function () {
            const result = view_result('TMWT_MEAN_IN_METERS_PER_SECOND')(
              outcome
            )
            const status = view_status('TMWT_MEAN_IN_METERS_PER_SECOND')(
              outcome
            )

            expect(result).to.eql(undefined)
            expect(status).to.eql(MISSING_STATUS)
          })

          it('should return undefined result & missing status for as the mean in kilometers per hour', function () {
            const result = view_result('TMWT_MEAN_IN_KILOMETERS_PER_HOUR')(
              outcome
            )
            const status = view_status('TMWT_MEAN_IN_KILOMETERS_PER_HOUR')(
              outcome
            )

            expect(result).to.eql(undefined)
            expect(status).to.eql(MISSING_STATUS)
          })
        })
      })
    })

    describe('score calculation', function () {
      describe('when called with a single trial', function () {
        const outcome = tmwt_calculation({
          TRIAL_1: 7, // Took the patient 7 seconds to walk 10 meters
        })

        it('should return the correct result for the mean in seconds', function () {
          const score = view_result('TMWT_MEAN_IN_SECONDS')(outcome)
          const EXPECTED_RESULT = 7
          expect(score).to.eql(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in meters per second', function () {
          const score = view_result('TMWT_MEAN_IN_METERS_PER_SECOND')(outcome)
          const EXPECTED_RESULT = 1.43
          expect(score).to.eql(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in kilometers per hour', function () {
          const score = view_result('TMWT_MEAN_IN_KILOMETERS_PER_HOUR')(outcome)
          const EXPECTED_RESULT = 5.14
          expect(score).to.eql(EXPECTED_RESULT)
        })
      })

      describe('when called with multiple trials', function () {
        const outcome = tmwt_calculation({
          TRIAL_1: 7, // Took the patient 7 seconds to walk 10 meters in trial 1
          TRIAL_2: 8, // Took the patient 8 seconds to walk 10 meters in trial 2
          TRIAL_3: 6, // Took the patient 6 seconds to walk 10 meters in trial 3
        })

        it('should return the correct result for the mean in seconds', function () {
          const score = view_result('TMWT_MEAN_IN_SECONDS')(outcome)
          const EXPECTED_RESULT = 7
          expect(score).to.eql(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in meters per second', function () {
          const score = view_result('TMWT_MEAN_IN_METERS_PER_SECOND')(outcome)
          const EXPECTED_RESULT = 1.43
          expect(score).to.eql(EXPECTED_RESULT)
        })

        it('should return the correct result for the mean in kilometers per hour', function () {
          const score = view_result('TMWT_MEAN_IN_KILOMETERS_PER_HOUR')(outcome)
          const EXPECTED_RESULT = 5.14
          expect(score).to.eql(EXPECTED_RESULT)
        })
      })
    })
  })
})
