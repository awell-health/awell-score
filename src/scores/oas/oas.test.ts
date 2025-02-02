import { ZodError } from 'zod'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/oas_test_responses'
import { INVERSE_ITEMS, OAS_INPUTS, OAS_SUBSCALE_ITEMS } from './definition'
import { oas } from './oas'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'

const oas_calculation = new Score(oas)

describe('oas', function () {
  it('oas calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('oas')
  })

  describe('basic assumptions', function () {
    const outcome = oas_calculation.calculate({ payload: best_response })

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

      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
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

        const configured_input_ids = Object.keys(OAS_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
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

        expect(EXPECTED_INPUT_IDS_WITH_INVERSE_SCORING).toEqual(INVERSE_ITEMS)
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

        expect(EXPECTED_INPUT_IDS).toEqual(OAS_SUBSCALE_ITEMS.DAILY_ACTIVITIES)
      })
    })

    describe('Knowledge and skills subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q21', 'OAS_Q22']

        expect(EXPECTED_INPUT_IDS).toEqual(
          OAS_SUBSCALE_ITEMS.KNOWLEDGE_AND_SKILLS,
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

        expect(EXPECTED_INPUT_IDS).toEqual(OAS_SUBSCALE_ITEMS.SELF_ESTEEM)
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

        expect(EXPECTED_INPUT_IDS).toEqual(
          OAS_SUBSCALE_ITEMS.PSYCHOLOGICAL_EXISTENTIAL,
        )
      })
    })

    describe('Health subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q23', 'OAS_Q24', 'OAS_Q34']

        expect(EXPECTED_INPUT_IDS).toEqual(OAS_SUBSCALE_ITEMS.HEALTH)
      })
    })

    describe('Health professionals subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q18', 'OAS_Q19', 'OAS_Q20']

        expect(EXPECTED_INPUT_IDS).toEqual(
          OAS_SUBSCALE_ITEMS.HEALTH_PROFESSIONALS,
        )
      })
    })

    describe('Sexuality subscale', function () {
      it('should have the correct input fields', function () {
        const EXPECTED_INPUT_IDS = ['OAS_Q08', 'OAS_Q27', 'OAS_Q30']

        expect(EXPECTED_INPUT_IDS).toEqual(OAS_SUBSCALE_ITEMS.SEXUALITY)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          oas_calculation.calculate({
            payload: {
              OAS_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = oas_calculation.calculate({ payload: {} })

      it('should return null result for daily activities sum score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_SUM_SCORE).toEqual(null)
      })

      it('should return null result for daily activities mean score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for knowledge and skills sum score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE).toEqual(null)
      })

      it('should return null result for knowledge and skills mean score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for self-esteem sum score', function () {
        expect(outcome.OAS_SELF_ESTEEM_SUM_SCORE).toEqual(null)
      })

      it('should return null result for self-esteem mean score', function () {
        expect(outcome.OAS_SELF_ESTEEM_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for psychological/existential sum score', function () {})

      it('should return null result for psychological/existential mean score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for health sum score', function () {
        expect(outcome.OAS_HEALTH_SUM_SCORE).toEqual(null)
      })

      it('should return null result for health mean score', function () {
        expect(outcome.OAS_HEALTH_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for health professionals sum score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_SUM_SCORE).toEqual(null)
      })

      it('should return null result for health professionals mean score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for sexuality sum score', function () {
        expect(outcome.OAS_SEXUALITY_SUM_SCORE).toEqual(null)
      })

      it('should return null result for sexuality mean score', function () {
        expect(outcome.OAS_SEXUALITY_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for total sum score', function () {
        expect(outcome.OAS_TOTAL_SUM_SCORE).toEqual(null)
      })

      it('should return null result for total mean score', function () {
        expect(outcome.OAS_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for psychological/existential sum score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE).toEqual(null)
      })

      it('should return null result for psychological/existential mean score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for health sum score', function () {
        expect(outcome.OAS_HEALTH_SUM_SCORE).toEqual(null)
      })

      it('should return null result for health mean score', function () {
        expect(outcome.OAS_HEALTH_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for health professionals sum score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_SUM_SCORE).toEqual(null)
      })

      it('should return null result for health professionals mean score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for sexuality sum score', function () {
        expect(outcome.OAS_SEXUALITY_SUM_SCORE).toEqual(null)
      })

      it('should return null result for sexuality mean score', function () {
        expect(outcome.OAS_SEXUALITY_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for total sum score', function () {
        expect(outcome.OAS_TOTAL_SUM_SCORE).toEqual(null)
      })

      it('should return null result for total mean score', function () {
        expect(outcome.OAS_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for sexuality mean score', function () {
        expect(outcome.OAS_SEXUALITY_MEAN_SCORE).toEqual(null)
      })

      it('should return null result for total sum score', function () {
        expect(outcome.OAS_TOTAL_SUM_SCORE).toEqual(null)
      })

      it('should return null result for total mean score', function () {
        expect(outcome.OAS_MEAN_SCORE).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = oas_calculation.calculate({ payload: best_response })

      it('should return the best score for daily activities sum score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_SUM_SCORE).toEqual(8)
      })

      it('should return the best score for daily activities mean score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_MEAN_SCORE).toEqual(1)
      })

      it('should return the best score for knowledge and skills sum score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE).toEqual(2)
      })

      it('should return the best score for knowledge and skills mean score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE).toEqual(1)
      })

      it('should return the best score for self-esteem sum score', function () {
        expect(outcome.OAS_SELF_ESTEEM_SUM_SCORE).toEqual(9)
      })

      it('should return the best score for self-esteem mean score', function () {
        expect(outcome.OAS_SELF_ESTEEM_MEAN_SCORE).toEqual(1)
      })

      it('should return the best score for psychological/existential sum score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE).toEqual(6)
      })

      it('should return the best score for psychological/existential mean score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE).toEqual(1)
      })

      it('should return the best score for health sum score', function () {
        expect(outcome.OAS_HEALTH_SUM_SCORE).toEqual(3)
      })

      it('should return the best score for health mean score', function () {
        expect(outcome.OAS_HEALTH_MEAN_SCORE).toEqual(1)
      })

      it('should return the best score for health professionals sum score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_SUM_SCORE).toEqual(3)
      })

      it('should return the best score for health professionals mean score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_MEAN_SCORE).toEqual(1)
      })

      it('should return the best score for sexuality sum score', function () {
        expect(outcome.OAS_SEXUALITY_SUM_SCORE).toEqual(3)
      })

      it('should return the best score for sexuality mean score', function () {
        expect(outcome.OAS_SEXUALITY_MEAN_SCORE).toEqual(1)
      })

      it('should return the best score for total sum score', function () {
        expect(outcome.OAS_TOTAL_SUM_SCORE).toEqual(34)
      })

      it('should return the best score for total mean score', function () {
        expect(outcome.OAS_MEAN_SCORE).toEqual(1)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = oas_calculation.calculate({ payload: worst_response })

      it('should return the worst score for daily activities sum score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_SUM_SCORE).toEqual(48)
      })

      it('should return the worst score for daily activities mean score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_MEAN_SCORE).toEqual(6)
      })

      it('should return the worst score for knowledge and skills sum score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE).toEqual(12)
      })

      it('should return the worst score for knowledge and skills mean score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE).toEqual(6)
      })

      it('should return the worst score for self-esteem sum score', function () {
        expect(outcome.OAS_SELF_ESTEEM_SUM_SCORE).toEqual(54)
      })

      it('should return the worst score for self-esteem mean score', function () {
        expect(outcome.OAS_SELF_ESTEEM_MEAN_SCORE).toEqual(6)
      })

      it('should return the worst score for psychological/existential sum score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE).toEqual(36)
      })

      it('should return the worst score for psychological/existential mean score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE).toEqual(6)
      })

      it('should return the worst score for health sum score', function () {
        expect(outcome.OAS_HEALTH_SUM_SCORE).toEqual(18)
      })

      it('should return the worst score for health mean score', function () {
        expect(outcome.OAS_HEALTH_MEAN_SCORE).toEqual(6)
      })

      it('should return the worst score for health professionals sum score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_SUM_SCORE).toEqual(18)
      })

      it('should return the worst score for health professionals mean score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_MEAN_SCORE).toEqual(6)
      })

      it('should return the worst score for sexuality sum score', function () {
        expect(outcome.OAS_SEXUALITY_SUM_SCORE).toEqual(18)
      })

      it('should return the worst score for sexuality mean score', function () {
        expect(outcome.OAS_SEXUALITY_MEAN_SCORE).toEqual(6)
      })

      it('should return the worst score for total sum score', function () {
        expect(outcome.OAS_TOTAL_SUM_SCORE).toEqual(204)
      })

      it('should return the worst score for total mean score', function () {
        expect(outcome.OAS_MEAN_SCORE).toEqual(6)
      })
    })

    describe('when called with a random response', function () {
      const outcome = oas_calculation.calculate({ payload: random_response })

      it('should return the expected score for daily activities sum score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_SUM_SCORE).toEqual(22)
      })

      it('should return the expected score for daily activities mean score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_MEAN_SCORE).toEqual(2.75)
      })

      it('should return the expected score for knowledge and skills sum score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE).toEqual(3)
      })

      it('should return the expected score for knowledge and skills mean score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE).toEqual(1.5)
      })

      it('should return the expected score for self-esteem sum score', function () {
        expect(outcome.OAS_SELF_ESTEEM_SUM_SCORE).toEqual(38)
      })

      it('should return the expected score for self-esteem mean score', function () {
        expect(outcome.OAS_SELF_ESTEEM_MEAN_SCORE).toEqual(4.22)
      })

      it('should return the expected score for psychological/existential sum score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE).toEqual(24)
      })

      it('should return the expected score for psychological/existential mean score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE).toEqual(4)
      })

      it('should return the expected score for health sum score', function () {
        expect(outcome.OAS_HEALTH_SUM_SCORE).toEqual(12)
      })

      it('should return the expected score for health mean score', function () {
        expect(outcome.OAS_HEALTH_MEAN_SCORE).toEqual(4)
      })

      it('should return the expected score for health professionals sum score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_SUM_SCORE).toEqual(12)
      })

      it('should return the expected score for health professionals mean score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_MEAN_SCORE).toEqual(4)
      })

      it('should return the expected score for sexuality sum score', function () {
        expect(outcome.OAS_SEXUALITY_SUM_SCORE).toEqual(16)
      })

      it('should return the expected score for sexuality mean score', function () {
        expect(outcome.OAS_SEXUALITY_MEAN_SCORE).toEqual(5.33)
      })

      it('should return the expected score for total sum score', function () {
        expect(outcome.OAS_TOTAL_SUM_SCORE).toEqual(127)
      })

      it('should return the expected score for total mean score', function () {
        expect(outcome.OAS_MEAN_SCORE).toEqual(3.74)
      })
    })

    describe('when called with a short form response (Better Health)', function () {
      const outcome = oas_calculation.calculate({
        payload: {
          OAS_Q01: 1,
          OAS_Q03: 1, // inverse = 6
          OAS_Q18: 1,
          OAS_Q21: 1,
          OAS_Q32: 1,
        },
      })

      it('should return the expected score for daily activities sum score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_SUM_SCORE).toEqual(8)
      })

      it('should return the expected score for daily activities mean score', function () {
        expect(outcome.OAS_DAILY_ACTIVITIES_MEAN_SCORE).toEqual(2.67)
      })

      it('should return the expected score for knowledge and skills sum score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE).toEqual(1)
      })

      it('should return the expected score for knowledge and skills mean score', function () {
        expect(outcome.OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE).toEqual(1)
      })

      it('should return the expected score for self-esteem sum score', function () {
        expect(outcome.OAS_SELF_ESTEEM_SUM_SCORE).toEqual(null)
      })

      it('should return the expected score for self-esteem mean score', function () {
        expect(outcome.OAS_SELF_ESTEEM_MEAN_SCORE).toEqual(null)
      })

      it('should return the expected score for psychological/existential sum score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE).toEqual(null)
      })

      it('should return the expected score for psychological/existential mean score', function () {
        expect(outcome.OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE).toEqual(null)
      })

      it('should return the expected score for health sum score', function () {
        expect(outcome.OAS_HEALTH_SUM_SCORE).toEqual(null)
      })

      it('should return the expected score for health mean score', function () {
        expect(outcome.OAS_HEALTH_MEAN_SCORE).toEqual(null)
      })

      it('should return the expected score for health professionals sum score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_SUM_SCORE).toEqual(1)
      })

      it('should return the expected score for health professionals mean score', function () {
        expect(outcome.OAS_HEALTH_PROFESSIONALS_MEAN_SCORE).toEqual(1)
      })

      it('should return the expected score for sexuality sum score', function () {
        expect(outcome.OAS_SEXUALITY_SUM_SCORE).toEqual(null)
      })

      it('should return the expected score for sexuality mean score', function () {
        expect(outcome.OAS_SEXUALITY_MEAN_SCORE).toEqual(null)
      })

      it('should return the expected score for total sum score', function () {
        expect(outcome.OAS_TOTAL_SUM_SCORE).toEqual(10)
      })

      it('should return the expected score for total mean score', function () {
        expect(outcome.OAS_MEAN_SCORE).toEqual(2)
      })
    })
  })
})
