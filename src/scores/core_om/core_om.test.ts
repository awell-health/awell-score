import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/core_om_responses'
import { core_om } from './core_om'

const core_om_calculation = new Score(core_om)

describe('core_om', function () {
  it('core_om calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('core_om')
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

      const configured_calculation_input_ids = Object.keys(
        core_om_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = core_om_calculation.calculate({ payload: best_response })

    it('should calculate 4 scoreS', function () {
      expect(Object.keys(outcome).length).toEqual(10)
    })

    it('should have the correct calculation ids', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual([
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
      const outcome = core_om_calculation.calculate({ payload: best_response })
      const BEST_SCORE = 0

      it('should return the best raw score for Subjective well-being deficits', function () {
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_RAW).toEqual(BEST_SCORE)
      })

      it('should return the best mean score for Subjective well-being deficits', function () {
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_MEAN).toEqual(BEST_SCORE)
      })

      it('should return the best raw for Problems/symptoms', function () {
        expect(outcome.PROBLEMS_SYMPTOMS_RAW).toEqual(BEST_SCORE)
      })

      it('should return the best mean score for Problems/symptoms', function () {
        expect(outcome.PROBLEMS_SYMPTOMS_MEAN).toEqual(BEST_SCORE)
      })

      it('should return the best raw score for Life functioning difficulties', function () {
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_RAW).toEqual(BEST_SCORE)
      })

      it('should return the best mean score for Life functioning difficulties', function () {
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_MEAN).toEqual(BEST_SCORE)
      })

      it('should return the best raw score for Risk/harm', function () {
        expect(outcome.RISK_HARM_RAW).toEqual(BEST_SCORE)
      })

      it('should return the best mean score for Risk/harm', function () {
        expect(outcome.RISK_HARM_MEAN).toEqual(BEST_SCORE)
      })

      it('should return the best raw score for Total', function () {
        expect(outcome.TOTAL_RAW).toEqual(BEST_SCORE)
      })

      it('should return the best mean score for Total', function () {
        expect(outcome.TOTAL_MEAN).toEqual(BEST_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = core_om_calculation.calculate({
        payload: median_response,
      })
      const MEDIAN_MEAN_SCORE = 2

      it('should return the median raw score for Subjective well-being deficits', function () {
        const MEDIAN_RAW_SCORE = 8
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_RAW).toEqual(
          MEDIAN_RAW_SCORE,
        )
      })

      it('should return the median mean score for Subjective well-being deficits', function () {
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_MEAN).toEqual(
          MEDIAN_MEAN_SCORE,
        )
      })

      it('should return the median raw for Problems/symptoms', function () {
        const MEDIAN_RAW_SCORE = 24
        expect(outcome.PROBLEMS_SYMPTOMS_RAW).toEqual(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Problems/symptoms', function () {
        expect(outcome.PROBLEMS_SYMPTOMS_MEAN).toEqual(MEDIAN_MEAN_SCORE)
      })

      it('should return the median raw score for Life functioning difficulties', function () {
        const MEDIAN_RAW_SCORE = 24
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_RAW).toEqual(
          MEDIAN_RAW_SCORE,
        )
      })

      it('should return the median mean score for Life functioning difficulties', function () {
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_MEAN).toEqual(
          MEDIAN_MEAN_SCORE,
        )
      })

      it('should return the median raw score for Risk/harm', function () {
        const MEDIAN_RAW_SCORE = 12
        expect(outcome.RISK_HARM_RAW).toEqual(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Risk/harm', function () {
        expect(outcome.RISK_HARM_MEAN).toEqual(MEDIAN_MEAN_SCORE)
      })

      it('should return the median raw score for Total', function () {
        const MEDIAN_RAW_SCORE = 68
        expect(outcome.TOTAL_RAW).toEqual(MEDIAN_RAW_SCORE)
      })

      it('should return the median mean score for Total', function () {
        expect(outcome.TOTAL_MEAN).toEqual(MEDIAN_MEAN_SCORE)
      })
    })

    describe('when the worst response is passed', function () {
      const outcome = core_om_calculation.calculate({ payload: worst_response })
      const WORST_MEAN_SCORE = 4

      it('should return the worst raw score for Subjective well-being deficits', function () {
        const WORST_RAW_SCORE = 16
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_RAW).toEqual(
          WORST_RAW_SCORE,
        )
      })

      it('should return the worst mean score for Subjective well-being deficits', function () {
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_MEAN).toEqual(
          WORST_MEAN_SCORE,
        )
      })

      it('should return the worst raw score for Problems/symptoms', function () {
        const WORST_RAW_SCORE = 48
        expect(outcome.PROBLEMS_SYMPTOMS_RAW).toEqual(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Problems/symptoms', function () {
        expect(outcome.PROBLEMS_SYMPTOMS_MEAN).toEqual(WORST_MEAN_SCORE)
      })

      it('should return the worst raw score for Life functioning difficulties', function () {
        const WORST_RAW_SCORE = 48
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_RAW).toEqual(
          WORST_RAW_SCORE,
        )
      })

      it('should return the worst mean score for Life functioning difficulties', function () {
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_MEAN).toEqual(
          WORST_MEAN_SCORE,
        )
      })

      it('should return the worst raw score for Risk/harm', function () {
        const WORST_RAW_SCORE = 24
        expect(outcome.RISK_HARM_RAW).toEqual(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Risk/harm', function () {
        expect(outcome.RISK_HARM_MEAN).toEqual(WORST_MEAN_SCORE)
      })

      it('should return the worst raw score for Total', function () {
        const WORST_RAW_SCORE = 136
        expect(outcome.TOTAL_RAW).toEqual(WORST_RAW_SCORE)
      })

      it('should return the worst mean score for Total', function () {
        expect(outcome.TOTAL_MEAN).toEqual(WORST_MEAN_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = core_om_calculation.calculate({
        payload: random_response,
      })

      it('should return the expected raw score for Subjective well-being deficits', function () {
        const EXPECTED_RAW_SCORE = 2
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_RAW).toEqual(
          EXPECTED_RAW_SCORE,
        )
      })

      it('should return the expected mean score for Subjective well-being deficits', function () {
        const EXPECTED_MEAN_SCORE = 0.5
        expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_MEAN).toEqual(
          EXPECTED_MEAN_SCORE,
        )
      })

      it('should return the expected raw for Problems/symptoms', function () {
        const EXPECTED_RAW_SCORE = 3
        expect(outcome.PROBLEMS_SYMPTOMS_RAW).toEqual(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Problems/symptoms', function () {
        const EXPECTED_MEAN_SCORE = 0.25
        expect(outcome.PROBLEMS_SYMPTOMS_MEAN).toEqual(EXPECTED_MEAN_SCORE)
      })

      it('should return the expected raw score for Life functioning difficulties', function () {
        const EXPECTED_RAW_SCORE = 22
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_RAW).toEqual(
          EXPECTED_RAW_SCORE,
        )
      })

      it('should return the expected mean score for Life functioning difficulties', function () {
        const EXPECTED_MEAN_SCORE = 1.83
        expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_MEAN).toEqual(
          EXPECTED_MEAN_SCORE,
        )
      })

      it('should return the expected raw score for Risk/harm', function () {
        const EXPECTED_RAW_SCORE = 1
        expect(outcome.RISK_HARM_RAW).toEqual(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Risk/harm', function () {
        const EXPECTED_MEAN_SCORE = 0.17
        expect(outcome.RISK_HARM_MEAN).toEqual(EXPECTED_MEAN_SCORE)
      })

      it('should return the expected raw score for Total', function () {
        const EXPECTED_RAW_SCORE = 28
        expect(outcome.TOTAL_RAW).toEqual(EXPECTED_RAW_SCORE)
      })

      it('should return the expected mean score for Total', function () {
        const EXPECTED_MEAN_SCORE = 0.82
        expect(outcome.TOTAL_MEAN).toEqual(EXPECTED_MEAN_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = core_om_calculation.calculate({ payload: {} })

      describe('For the Subjective well-being deficits raw score', function () {
        it('should return null result ', function () {
          expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_RAW).toEqual(null)
        })
      })

      describe('For the Subjective well-being deficits mean score', function () {
        it('should return null result ', function () {
          expect(outcome.SUBJECTIVE_WELL_BEING_DEFICITS_MEAN).toEqual(null)
        })
      })

      describe('For the Problems/symptoms raw score"', function () {
        it('should return null result ', function () {
          expect(outcome.PROBLEMS_SYMPTOMS_RAW).toEqual(null)
        })
      })

      describe('For the Problems/symptoms mean score', function () {
        it('should return null result ', function () {
          expect(outcome.PROBLEMS_SYMPTOMS_MEAN).toEqual(null)
        })
      })

      describe('For the Life functioning difficulties raw score"', function () {
        it('should return null result ', function () {
          expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_RAW).toEqual(null)
        })
      })

      describe('For the Life functioning difficulties mean score', function () {
        it('should return null result ', function () {
          expect(outcome.LIFE_FUNCTIONING_DIFFICULTIES_MEAN).toEqual(null)
        })
      })

      describe('For the Risk/harm raw score"', function () {
        it('should return null result ', function () {
          expect(outcome.RISK_HARM_RAW).toEqual(null)
        })
      })

      describe('For the Risk/harm mean score', function () {
        it('should return null result ', function () {
          expect(outcome.RISK_HARM_MEAN).toEqual(null)
        })
      })

      describe('For the Total raw score"', function () {
        it('should return null result ', function () {
          expect(outcome.TOTAL_RAW).toEqual(null)
        })
      })

      describe('For the Total mean score', function () {
        it('should return null result ', function () {
          expect(outcome.TOTAL_MEAN).toEqual(null)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          core_om_calculation.calculate({
            payload: {
              CORE_OM_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          core_om_calculation.calculate({
            payload: {
              CORE_OM_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          core_om_calculation.calculate({
            payload: {
              CORE_OM_Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
