import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/core_om_responses'
import { core_om } from './core_om'
import { CORE_OM_INPUTS } from './definition'

const core_om_calculation = execute_test_calculation(core_om)

describe('core_om', function () {
  it('core_om calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('core_om')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'CORE_OM_Q01',
        'CORE_OM_Q02',
        'CORE_OM_Q03',
        'CORE_OM_Q04',
        'CORE_OM_Q05',
        'CORE_OM_Q06',
        'CORE_OM_Q07',
        'CORE_OM_Q08',
        'CORE_OM_Q09',
        'CORE_OM_Q10',
        'CORE_OM_Q11',
        'CORE_OM_Q12',
        'CORE_OM_Q13',
        'CORE_OM_Q14',
        'CORE_OM_Q15',
        'CORE_OM_Q16',
        'CORE_OM_Q17',
        'CORE_OM_Q18',
        'CORE_OM_Q19',
        'CORE_OM_Q20',
        'CORE_OM_Q21',
        'CORE_OM_Q22',
        'CORE_OM_Q23',
        'CORE_OM_Q24',
        'CORE_OM_Q25',
        'CORE_OM_Q26',
        'CORE_OM_Q27',
        'CORE_OM_Q28',
        'CORE_OM_Q29',
        'CORE_OM_Q30',
        'CORE_OM_Q31',
        'CORE_OM_Q32',
        'CORE_OM_Q33',
        'CORE_OM_Q34',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(CORE_OM_INPUTS)

      expect(configured_calculation_input_ids).to.have.members(
        EXPECTED_CALCULATION_INPUT_IDS
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = core_om_calculation(best_response)

    it('should calculate 4 scoreS', function () {
      expect(outcome).to.have.length(10)
    })

    it('should have the correct calculation ids', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql([
        'SUBJECTIVE_WELL_BEING_DEFICITS_RAW',
        'SUBJECTIVE_WELL_BEING_DEFICITS_MEAN',
        'PROBLEMS_SYMPTOMS_RAW',
        'PROBLEMS_SYMPTOMS_MEAN',
        'LIFE_FUNCTIONING_DIFFICULTIES_RAW',
        'LIFE_FUNCTIONING_DIFFICULTIES_MEAN',
        'RISK_HARM_RAW',
        'RISK_HARM_MEAN',
        'TOTAL_RAW',
        'TOTAL_MEAN',
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when the best response is passed', function () {
      const outcome = core_om_calculation(best_response)
      const BEST_SCORE = 0

      it('should return the best raw score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_RAW')(
          outcome
        )

        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best mean score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_MEAN')(
          outcome
        )

        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best raw for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_RAW')(outcome)
        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best mean score for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_MEAN')(outcome)
        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best raw score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_RAW')(outcome)
        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best mean score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_MEAN')(
          outcome
        )
        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best raw score for Risk/harm', function () {
        const result = view_result('RISK_HARM_RAW')(outcome)
        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best mean score for Risk/harm', function () {
        const result = view_result('RISK_HARM_MEAN')(outcome)
        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best raw score for Total', function () {
        const result = view_result('TOTAL_RAW')(outcome)
        expect(result).to.eql(BEST_SCORE)
      })

      it('should return the best mean score for Total', function () {
        const result = view_result('TOTAL_MEAN')(outcome)
        expect(result).to.eql(BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = core_om_calculation(median_response)
      const MEDIAN_MEAN_SCORE = 2

      it('should return the median raw score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_RAW')(
          outcome
        )
        const MEDIAN_RAW_SCORE = 8

        expect(result).to.eql(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_MEAN')(
          outcome
        )

        expect(result).to.eql(MEDIAN_MEAN_SCORE)
      })

      it('should return the median raw for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_RAW')(outcome)
        const MEDIAN_RAW_SCORE = 24

        expect(result).to.eql(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_MEAN')(outcome)
        expect(result).to.eql(MEDIAN_MEAN_SCORE)
      })

      it('should return the median raw score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_RAW')(outcome)
        const MEDIAN_RAW_SCORE = 24

        expect(result).to.eql(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_MEAN')(
          outcome
        )
        expect(result).to.eql(MEDIAN_MEAN_SCORE)
      })

      it('should return the median raw score for Risk/harm', function () {
        const result = view_result('RISK_HARM_RAW')(outcome)
        const MEDIAN_RAW_SCORE = 12

        expect(result).to.eql(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Risk/harm', function () {
        const result = view_result('RISK_HARM_MEAN')(outcome)
        expect(result).to.eql(MEDIAN_MEAN_SCORE)
      })

      it('should return the median raw score for Total', function () {
        const result = view_result('TOTAL_RAW')(outcome)
        const MEDIAN_RAW_SCORE = 68

        expect(result).to.eql(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Total', function () {
        const result = view_result('TOTAL_MEAN')(outcome)
        expect(result).to.eql(MEDIAN_MEAN_SCORE)
      })
    })

    describe('when the worst response is passed', function () {
      const outcome = core_om_calculation(worst_response)
      const WORST_MEAN_SCORE = 4

      it('should return the worst raw score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_RAW')(
          outcome
        )
        const WORST_RAW_SCORE = 16

        expect(result).to.eql(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_MEAN')(
          outcome
        )

        expect(result).to.eql(WORST_MEAN_SCORE)
      })

      it('should return the worst raw score for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_RAW')(outcome)
        const WORST_RAW_SCORE = 48

        expect(result).to.eql(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_MEAN')(outcome)
        expect(result).to.eql(WORST_MEAN_SCORE)
      })

      it('should return the worst raw score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_RAW')(outcome)
        const WORST_RAW_SCORE = 48

        expect(result).to.eql(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_MEAN')(
          outcome
        )
        expect(result).to.eql(WORST_MEAN_SCORE)
      })

      it('should return the worst raw score for Risk/harm', function () {
        const result = view_result('RISK_HARM_RAW')(outcome)
        const WORST_RAW_SCORE = 24

        expect(result).to.eql(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Risk/harm', function () {
        const result = view_result('RISK_HARM_MEAN')(outcome)
        expect(result).to.eql(WORST_MEAN_SCORE)
      })

      it('should return the worst raw score for Total', function () {
        const result = view_result('TOTAL_RAW')(outcome)
        const WORST_RAW_SCORE = 136

        expect(result).to.eql(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Total', function () {
        const result = view_result('TOTAL_MEAN')(outcome)
        expect(result).to.eql(WORST_MEAN_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = core_om_calculation(random_response)

      it('should return the expected raw score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_RAW')(
          outcome
        )
        const EXPECTED_RAW_SCORE = 2

        expect(result).to.eql(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Subjective well-being deficits', function () {
        const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_MEAN')(
          outcome
        )
        const EXPECTED_MEAN_SCORE = 0.5
        expect(result).to.eql(EXPECTED_MEAN_SCORE)
      })

      it('should return the expected raw for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_RAW')(outcome)
        const EXPECTED_RAW_SCORE = 3

        expect(result).to.eql(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Problems/symptoms', function () {
        const result = view_result('PROBLEMS_SYMPTOMS_MEAN')(outcome)
        const EXPECTED_MEAN_SCORE = 0.25

        expect(result).to.eql(EXPECTED_MEAN_SCORE)
      })

      it('should return the expected raw score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_RAW')(outcome)
        const EXPECTED_RAW_SCORE = 22

        expect(result).to.eql(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Life functioning difficulties', function () {
        const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_MEAN')(
          outcome
        )
        const EXPECTED_MEAN_SCORE = 1.83

        expect(result).to.eql(EXPECTED_MEAN_SCORE)
      })

      it('should return the expected raw score for Risk/harm', function () {
        const result = view_result('RISK_HARM_RAW')(outcome)
        const EXPECTED_RAW_SCORE = 1

        expect(result).to.eql(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Risk/harm', function () {
        const result = view_result('RISK_HARM_MEAN')(outcome)
        const EXPECTED_MEAN_SCORE = 0.17

        expect(result).to.eql(EXPECTED_MEAN_SCORE)
      })

      it('should return the expected raw score for Total', function () {
        const result = view_result('TOTAL_RAW')(outcome)
        const EXPECTED_RAW_SCORE = 28

        expect(result).to.eql(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Total', function () {
        const result = view_result('TOTAL_MEAN')(outcome)
        const EXPECTED_MEAN_SCORE = 0.82

        expect(result).to.eql(EXPECTED_MEAN_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = core_om_calculation({})

      describe('For the Subjective well-being deficits raw score', function () {
        it('should return undefined result ', function () {
          const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_RAW')(
            outcome
          )
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('SUBJECTIVE_WELL_BEING_DEFICITS_RAW')(
            outcome
          )
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Subjective well-being deficits mean score', function () {
        it('should return undefined result ', function () {
          const result = view_result('SUBJECTIVE_WELL_BEING_DEFICITS_MEAN')(
            outcome
          )
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('SUBJECTIVE_WELL_BEING_DEFICITS_MEAN')(
            outcome
          )
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Problems/symptoms raw score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('PROBLEMS_SYMPTOMS_RAW')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('PROBLEMS_SYMPTOMS_RAW')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Problems/symptoms mean score', function () {
        it('should return undefined result ', function () {
          const result = view_result('PROBLEMS_SYMPTOMS_MEAN')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('PROBLEMS_SYMPTOMS_MEAN')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Life functioning difficulties raw score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_RAW')(
            outcome
          )
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('LIFE_FUNCTIONING_DIFFICULTIES_RAW')(
            outcome
          )
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Life functioning difficulties mean score', function () {
        it('should return undefined result ', function () {
          const result = view_result('LIFE_FUNCTIONING_DIFFICULTIES_MEAN')(
            outcome
          )
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('LIFE_FUNCTIONING_DIFFICULTIES_MEAN')(
            outcome
          )
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Risk/harm raw score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('RISK_HARM_RAW')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('RISK_HARM_RAW')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Risk/harm mean score', function () {
        it('should return undefined result ', function () {
          const result = view_result('RISK_HARM_MEAN')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('RISK_HARM_MEAN')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Total raw score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('TOTAL_RAW')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('TOTAL_RAW')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('For the Total mean score', function () {
        it('should return undefined result ', function () {
          const result = view_result('TOTAL_MEAN')(outcome)
          expect(result).to.eql(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('TOTAL_MEAN')(outcome)
          expect(status).to.eql(MISSING_STATUS)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          core_om_calculation({
            CORE_OM_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          core_om_calculation({
            CORE_OM_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          core_om_calculation({
            CORE_OM_Q01: 6,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
