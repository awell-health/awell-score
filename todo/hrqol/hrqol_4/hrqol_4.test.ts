import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { view_status } from '../../../lib/view_status'
import { MISSING_STATUS } from '../../../PARAMETERS'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/hrqol_4_responses'
import { HRQOL_4_INPUTS } from './definition'
import { hrqol_4 } from './hrqol_4'

const hrqol_4_calculation = execute_test_calculation(hrqol_4)

describe('hrqol_4', function () {
  it('hrqol_4 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('hrqol_4')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'HRQOL_4_Q01',
        'HRQOL_4_Q02',
        'HRQOL_4_Q03',
        'HRQOL_4_Q04',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(HRQOL_4_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = hrqol_4_calculation(best_response)

    it('should have the correct calculation ids', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual([
        'HRQOL_4_GENERAL_HEALTH_STATUS',
        'HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS',
        'HRQOL_4_MENTALLY_UNHEALTHY_DAYS',
        'HRQOL_4_ACTIVITY_LIMITATION_DAYS',
        'HRQOL_4_UNHEALTHY_DAYS_INDEX',
        'HRQOL_4_HEALTHY_DAYS_INDEX',
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when the best response is passed', function () {
      const outcome = hrqol_4_calculation(best_response)

      describe('For the general health status score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).toEqual(1)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome,
          )
          expect(result).toEqual(0)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).toEqual(0)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome,
          )
          expect(result).toEqual(0)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(0)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the best score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(30)
        })
      })
    })

    describe('when a median response is passed', function () {
      const outcome = hrqol_4_calculation(median_response)

      describe('For the general health status score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).toEqual(3)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome,
          )
          expect(result).toEqual(7)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).toEqual(8)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome,
          )
          expect(result).toEqual(15)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(15)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the median score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(15)
        })
      })
    })

    describe('when the worst response is passed', function () {
      const outcome = hrqol_4_calculation(worst_response)
      describe('For the general health status score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).toEqual(5)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome,
          )
          expect(result).toEqual(30)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).toEqual(30)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome,
          )
          expect(result).toEqual(30)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(30)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the best score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(0)
        })
      })
    })

    describe('when a random response is passed', function () {
      const outcome = hrqol_4_calculation(random_response)

      describe('For the general health status score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).toEqual(2)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome,
          )
          expect(result).toEqual(5)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).toEqual(11)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome,
          )
          expect(result).toEqual(9)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(16)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the expected score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(14)
        })
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = hrqol_4_calculation({})

      describe('For the general health status score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome,
          )
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome,
          )
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome,
          )
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome,
          )
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(status).toEqual(MISSING_STATUS)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hrqol_4_calculation({
            HRQOL_4_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hrqol_4_calculation({
            HRQOL_4_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hrqol_4_calculation({
            HRQOL_4_Q02: 31,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
