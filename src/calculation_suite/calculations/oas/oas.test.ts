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
  random_response,
  // random_response,
  worst_response,
} from './__testdata__/oas_test_responses'
import { OAS_INPUTS, OAS_SUBSCALE_ITEMS } from './definition'
import { oas } from './oas'

const oas_calculation = execute_test_calculation(oas)

describe('oas', function () {
  it('oas calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('oas')
  })

  describe('basic assumptions', function () {
    const outcome = oas_calculation(best_response)

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'OAS_DAILY_ACTIVITIES_SUM_SCORE',
        'OAS_DAILY_ACTIVITIES_MEAN_SCORE',
        'OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE',
        'OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE',
        'OAS_SELF_ESTEEM_SUM_SCORE',
        'OAS_SELF_ESTEEM_MEAN_SCORE',
        'OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE',
        'OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE',
        'OAS_HEALTH_SUM_SCORE',
        'OAS_HEALTH_MEAN_SCORE',
        'OAS_HEALTH_PROFESSIONALS_SUM_SCORE',
        'OAS_HEALTH_PROFESSIONALS_MEAN_SCORE',
        'OAS_SEXUALITY_SUM_SCORE',
        'OAS_SEXUALITY_MEAN_SCORE',
        'OAS_TOTAL_SUM_SCORE',
        'OAS_MEAN_SCORE',
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).to.eql(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'OAS_Q01',
          'OAS_Q02',
          'OAS_Q03',
          'OAS_Q04',
          'OAS_Q05',
          'OAS_Q06',
          'OAS_Q07',
          'OAS_Q08',
          'OAS_Q09',
          'OAS_Q10',
          'OAS_Q11',
          'OAS_Q12',
          'OAS_Q13',
          'OAS_Q14',
          'OAS_Q15',
          'OAS_Q16',
          'OAS_Q17',
          'OAS_Q18',
          'OAS_Q19',
          'OAS_Q20',
          'OAS_Q21',
          'OAS_Q22',
          'OAS_Q23',
          'OAS_Q24',
          'OAS_Q25',
          'OAS_Q26',
          'OAS_Q27',
          'OAS_Q28',
          'OAS_Q29',
          'OAS_Q30',
          'OAS_Q31',
          'OAS_Q32',
          'OAS_Q33',
          'OAS_Q34',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(OAS_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('some inputs are reversed scored', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS_WITH_INVERSE_SCORING = [
          'OAS_Q03',
          'OAS_Q06',
          'OAS_Q09',
          'OAS_Q10',
          'OAS_Q11',
          'OAS_Q13',
          'OAS_Q14',
          'OAS_Q16',
          'OAS_Q17',
          'OAS_Q19',
          'OAS_Q20',
          'OAS_Q23',
          'OAS_Q24',
          'OAS_Q25',
          'OAS_Q26',
          'OAS_Q27',
          'OAS_Q30',
          'OAS_Q31',
        ]

        const configured_input_ids = get_input_ids_from_calculation_blueprint(
          OAS_INPUTS.filter(input => input.inverse === true)
        )

        expect(EXPECTED_INPUT_IDS_WITH_INVERSE_SCORING).to.eql(
          configured_input_ids
        )
      })
    })

    describe('Daily activities subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = [
          'OAS_Q01',
          'OAS_Q02',
          'OAS_Q03',
          'OAS_Q04',
          'OAS_Q05',
          'OAS_Q06',
          'OAS_Q07',
          'OAS_Q32',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(OAS_SUBSCALE_ITEMS.DAILY_ACTIVITIES)
      })
    })

    describe('Knowledge and skills subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q21', 'OAS_Q22']

        expect(EXPECTED_INPUT_IDS).to.eql(
          OAS_SUBSCALE_ITEMS.KNOWLEDGE_AND_SKILLS
        )
      })
    })

    describe('Self esteem subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = [
          'OAS_Q09',
          'OAS_Q10',
          'OAS_Q12',
          'OAS_Q13',
          'OAS_Q14',
          'OAS_Q15',
          'OAS_Q26',
          'OAS_Q28',
          'OAS_Q31',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(OAS_SUBSCALE_ITEMS.SELF_ESTEEM)
      })
    })

    describe('Psychological/existential subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = [
          'OAS_Q11',
          'OAS_Q16',
          'OAS_Q17',
          'OAS_Q25',
          'OAS_Q29',
          'OAS_Q33',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(
          OAS_SUBSCALE_ITEMS.PSYCHOLOGICAL_EXISTENTIAL
        )
      })
    })

    describe('Health subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q23', 'OAS_Q24', 'OAS_Q34']

        expect(EXPECTED_INPUT_IDS).to.eql(OAS_SUBSCALE_ITEMS.HEALTH)
      })
    })

    describe('Health professionals subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q18', 'OAS_Q19', 'OAS_Q20']

        expect(EXPECTED_INPUT_IDS).to.eql(
          OAS_SUBSCALE_ITEMS.HEALTH_PROFESSIONALS
        )
      })
    })

    describe('Sexuality subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q08', 'OAS_Q27', 'OAS_Q30']

        expect(EXPECTED_INPUT_IDS).to.eql(OAS_SUBSCALE_ITEMS.SEXUALITY)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          oas_calculation({
            OAS_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = oas_calculation({})

      it('should return undefined result and a missing status for daily activities sum score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_SUM_SCORE')(outcome)
        const status = view_status('OAS_DAILY_ACTIVITIES_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for daily activities mean score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_MEAN_SCORE')(outcome)
        const status = view_status('OAS_DAILY_ACTIVITIES_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for knowledge and skills sum score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE')(outcome)
        const status = view_status('OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for knowledge and skills mean score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE')(
          outcome
        )
        const status = view_status('OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for self-esteem sum score', function () {
        const score = view_result('OAS_SELF_ESTEEM_SUM_SCORE')(outcome)
        const status = view_status('OAS_SELF_ESTEEM_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for self-esteem mean score', function () {
        const score = view_result('OAS_SELF_ESTEEM_MEAN_SCORE')(outcome)
        const status = view_status('OAS_SELF_ESTEEM_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for psychological/existential sum score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE')(
          outcome
        )
        const status = view_status('OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for psychological/existential mean score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE')(
          outcome
        )
        const status = view_status('OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for health sum score', function () {
        const score = view_result('OAS_HEALTH_SUM_SCORE')(outcome)
        const status = view_status('OAS_HEALTH_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for health mean score', function () {
        const score = view_result('OAS_HEALTH_MEAN_SCORE')(outcome)
        const status = view_status('OAS_HEALTH_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for health professionals sum score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_SUM_SCORE')(outcome)
        const status = view_status('OAS_HEALTH_PROFESSIONALS_SUM_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for health professionals mean score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_MEAN_SCORE')(
          outcome
        )
        const status = view_status('OAS_HEALTH_PROFESSIONALS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for sexuality sum score', function () {
        const score = view_result('OAS_SEXUALITY_SUM_SCORE')(outcome)
        const status = view_status('OAS_SEXUALITY_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for sexuality mean score', function () {
        const score = view_result('OAS_SEXUALITY_MEAN_SCORE')(outcome)
        const status = view_status('OAS_SEXUALITY_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for total sum score', function () {
        const score = view_result('OAS_TOTAL_SUM_SCORE')(outcome)
        const status = view_status('OAS_TOTAL_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })

      it('should return undefined result and a missing status for total mean score', function () {
        const score = view_result('OAS_MEAN_SCORE')(outcome)
        const status = view_status('OAS_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
        expect(status).to.eql(MISSING_STATUS)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = oas_calculation(best_response)

      it('should return the best score for daily activities sum score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_SUM_SCORE')(outcome)

        expect(score).to.eql(8)
      })

      it('should return the best score for daily activities mean score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_MEAN_SCORE')(outcome)

        expect(score).to.eql(1)
      })

      it('should return the best score for knowledge and skills sum score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE')(outcome)

        expect(score).to.eql(2)
      })

      it('should return the best score for knowledge and skills mean score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(1)
      })

      it('should return the best score for self-esteem sum score', function () {
        const score = view_result('OAS_SELF_ESTEEM_SUM_SCORE')(outcome)

        expect(score).to.eql(9)
      })

      it('should return the best score for self-esteem mean score', function () {
        const score = view_result('OAS_SELF_ESTEEM_MEAN_SCORE')(outcome)

        expect(score).to.eql(1)
      })

      it('should return the best score for psychological/existential sum score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE')(
          outcome
        )

        expect(score).to.eql(6)
      })

      it('should return the best score for psychological/existential mean score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(1)
      })

      it('should return the best score for health sum score', function () {
        const score = view_result('OAS_HEALTH_SUM_SCORE')(outcome)

        expect(score).to.eql(3)
      })

      it('should return the best score for health mean score', function () {
        const score = view_result('OAS_HEALTH_MEAN_SCORE')(outcome)

        expect(score).to.eql(1)
      })

      it('should return the best score for health professionals sum score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_SUM_SCORE')(outcome)

        expect(score).to.eql(3)
      })

      it('should return the best score for health professionals mean score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(1)
      })

      it('should return the best score for sexuality sum score', function () {
        const score = view_result('OAS_SEXUALITY_SUM_SCORE')(outcome)

        expect(score).to.eql(3)
      })

      it('should return the best score for sexuality mean score', function () {
        const score = view_result('OAS_SEXUALITY_MEAN_SCORE')(outcome)

        expect(score).to.eql(1)
      })

      it('should return the best score for total sum score', function () {
        const score = view_result('OAS_TOTAL_SUM_SCORE')(outcome)

        expect(score).to.eql(34)
      })

      it('should return the best score for total mean score', function () {
        const score = view_result('OAS_MEAN_SCORE')(outcome)

        expect(score).to.eql(1)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = oas_calculation(worst_response)

      it('should return the worst score for daily activities sum score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_SUM_SCORE')(outcome)

        expect(score).to.eql(48)
      })

      it('should return the worst score for daily activities mean score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_MEAN_SCORE')(outcome)

        expect(score).to.eql(6)
      })

      it('should return the worst score for knowledge and skills sum score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE')(outcome)

        expect(score).to.eql(12)
      })

      it('should return the worst score for knowledge and skills mean score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(6)
      })

      it('should return the worst score for self-esteem sum score', function () {
        const score = view_result('OAS_SELF_ESTEEM_SUM_SCORE')(outcome)

        expect(score).to.eql(54)
      })

      it('should return the worst score for self-esteem mean score', function () {
        const score = view_result('OAS_SELF_ESTEEM_MEAN_SCORE')(outcome)

        expect(score).to.eql(6)
      })

      it('should return the worst score for psychological/existential sum score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE')(
          outcome
        )

        expect(score).to.eql(36)
      })

      it('should return the worst score for psychological/existential mean score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(6)
      })

      it('should return the worst score for health sum score', function () {
        const score = view_result('OAS_HEALTH_SUM_SCORE')(outcome)

        expect(score).to.eql(18)
      })

      it('should return the worst score for health mean score', function () {
        const score = view_result('OAS_HEALTH_MEAN_SCORE')(outcome)

        expect(score).to.eql(6)
      })

      it('should return the worst score for health professionals sum score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_SUM_SCORE')(outcome)

        expect(score).to.eql(18)
      })

      it('should return the worst score for health professionals mean score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(6)
      })

      it('should return the worst score for sexuality sum score', function () {
        const score = view_result('OAS_SEXUALITY_SUM_SCORE')(outcome)

        expect(score).to.eql(18)
      })

      it('should return the worst score for sexuality mean score', function () {
        const score = view_result('OAS_SEXUALITY_MEAN_SCORE')(outcome)

        expect(score).to.eql(6)
      })

      it('should return the worst score for total sum score', function () {
        const score = view_result('OAS_TOTAL_SUM_SCORE')(outcome)

        expect(score).to.eql(204)
      })

      it('should return the worst score for total mean score', function () {
        const score = view_result('OAS_MEAN_SCORE')(outcome)

        expect(score).to.eql(6)
      })
    })

    describe('when called with a random response', function () {
      const outcome = oas_calculation(random_response)

      it('should return the expected score for daily activities sum score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_SUM_SCORE')(outcome)

        expect(score).to.eql(22)
      })

      it('should return the expected score for daily activities mean score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_MEAN_SCORE')(outcome)

        expect(score).to.eql(2.75)
      })

      it('should return the expected score for knowledge and skills sum score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE')(outcome)

        expect(score).to.eql(3)
      })

      it('should return the expected score for knowledge and skills mean score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(1.5)
      })

      it('should return the expected score for self-esteem sum score', function () {
        const score = view_result('OAS_SELF_ESTEEM_SUM_SCORE')(outcome)

        expect(score).to.eql(38)
      })

      it('should return the expected score for self-esteem mean score', function () {
        const score = view_result('OAS_SELF_ESTEEM_MEAN_SCORE')(outcome)

        expect(score).to.eql(4.22)
      })

      it('should return the expected score for psychological/existential sum score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE')(
          outcome
        )

        expect(score).to.eql(24)
      })

      it('should return the expected score for psychological/existential mean score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(4)
      })

      it('should return the expected score for health sum score', function () {
        const score = view_result('OAS_HEALTH_SUM_SCORE')(outcome)

        expect(score).to.eql(12)
      })

      it('should return undefined result and a missing status for health mean score', function () {
        const score = view_result('OAS_HEALTH_MEAN_SCORE')(outcome)

        expect(score).to.eql(4)
      })

      it('should return the expected score for health professionals sum score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_SUM_SCORE')(outcome)

        expect(score).to.eql(12)
      })

      it('should return the expected score for health professionals mean score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(4)
      })

      it('should return the expected score for sexuality sum score', function () {
        const score = view_result('OAS_SEXUALITY_SUM_SCORE')(outcome)

        expect(score).to.eql(16)
      })

      it('should return the expected score for sexuality mean score', function () {
        const score = view_result('OAS_SEXUALITY_MEAN_SCORE')(outcome)

        expect(score).to.eql(5.33)
      })

      it('should return the expected score for total sum score', function () {
        const score = view_result('OAS_TOTAL_SUM_SCORE')(outcome)

        expect(score).to.eql(127)
      })

      it('should return the expected score for total mean score', function () {
        const score = view_result('OAS_MEAN_SCORE')(outcome)

        expect(score).to.eql(3.74)
      })
    })

    describe('when called with a short form response (Better Health)', function () {
      const outcome = oas_calculation({
        OAS_Q01: 1,
        OAS_Q03: 1, // inverse = 6
        OAS_Q18: 1,
        OAS_Q21: 1,
        OAS_Q32: 1,
      })

      it('should return the expected score for daily activities sum score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_SUM_SCORE')(outcome)

        expect(score).to.eql(8)
      })

      it('should return the expected score for daily activities mean score', function () {
        const score = view_result('OAS_DAILY_ACTIVITIES_MEAN_SCORE')(outcome)

        expect(score).to.eql(2.67)
      })

      it('should return the expected score for knowledge and skills sum score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE')(outcome)

        expect(score).to.eql(1)
      })

      it('should return the expected score for knowledge and skills mean score', function () {
        const score = view_result('OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(1)
      })

      it('should return the expected score for self-esteem sum score', function () {
        const score = view_result('OAS_SELF_ESTEEM_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return the expected score for self-esteem mean score', function () {
        const score = view_result('OAS_SELF_ESTEEM_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return the expected score for psychological/existential sum score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
      })

      it('should return the expected score for psychological/existential mean score', function () {
        const score = view_result('OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(undefined)
      })

      it('should return the expected score for health sum score', function () {
        const score = view_result('OAS_HEALTH_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return undefined result and a missing status for health mean score', function () {
        const score = view_result('OAS_HEALTH_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return the expected score for health professionals sum score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_SUM_SCORE')(outcome)

        expect(score).to.eql(1)
      })

      it('should return the expected score for health professionals mean score', function () {
        const score = view_result('OAS_HEALTH_PROFESSIONALS_MEAN_SCORE')(
          outcome
        )

        expect(score).to.eql(1)
      })

      it('should return the expected score for sexuality sum score', function () {
        const score = view_result('OAS_SEXUALITY_SUM_SCORE')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return the expected score for sexuality mean score', function () {
        const score = view_result('OAS_SEXUALITY_MEAN_SCORE')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return the expected score for total sum score', function () {
        const score = view_result('OAS_TOTAL_SUM_SCORE')(outcome)

        expect(score).to.eql(10)
      })

      it('should return the expected score for total mean score', function () {
        const score = view_result('OAS_MEAN_SCORE')(outcome)

        expect(score).to.eql(2)
      })
    })
  })
})
