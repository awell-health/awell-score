import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../../helper_functions/view_result'
import { view_status } from '../../../helper_functions/view_status'
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
    expect(CALCULATIONS).to.have.property('hrqol_4')
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
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = hrqol_4_calculation(best_response)

    it('should have the correct calculation ids', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql([
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
          expect(result).to.eql(1)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome
          )
          expect(result).to.eql(0)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).to.eql(0)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome
          )
          expect(result).to.eql(0)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(0)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the best score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(30)
        })
      })
    })

    describe('when a median response is passed', function () {
      const outcome = hrqol_4_calculation(median_response)

      describe('For the general health status score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).to.eql(3)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome
          )
          expect(result).to.eql(7)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).to.eql(8)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome
          )
          expect(result).to.eql(15)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the median score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(15)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the median score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(15)
        })
      })
    })

    describe('when the worst response is passed', function () {
      const outcome = hrqol_4_calculation(worst_response)
      describe('For the general health status score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).to.eql(5)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome
          )
          expect(result).to.eql(30)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).to.eql(30)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome
          )
          expect(result).to.eql(30)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the best score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(30)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the best score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(0)
        })
      })
    })

    describe('when a random response is passed', function () {
      const outcome = hrqol_4_calculation(random_response)

      describe('For the general health status score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(result).to.eql(2)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome
          )
          expect(result).to.eql(5)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).to.eql(11)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome
          )
          expect(result).to.eql(9)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the expected score ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(16)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the expected score result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(14)
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
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_GENERAL_HEALTH_STATUS')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome
          )
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS')(
            outcome
          )
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_MENTALLY_UNHEALTHY_DAYS')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome
          )
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_ACTIVITY_LIMITATION_DAYS')(
            outcome
          )
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_UNHEALTHY_DAYS_INDEX')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return undefined result ', function () {
          const result = view_result('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('HRQOL_4_HEALTHY_DAYS_INDEX')(outcome)
          expect(status).to.eql(MISSING_STATUS)
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
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hrqol_4_calculation({
            HRQOL_4_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          hrqol_4_calculation({
            HRQOL_4_Q02: 31,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
