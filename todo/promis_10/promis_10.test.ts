import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/promis_10_responses'
import { PROMIS_10_INPUTS } from './definition/promis_10_inputs'
import { promis_10 } from './promis_10'

const PROMIS_10_WORST_SCORE = 4
const PROMIS_10_MEDIAN_SCORE = 12
const PROMIS_10_BEST_SCORE = 20

const promis_10_calculation = execute_test_calculation(promis_10)

describe('promis_10', function () {
  it('promis_10 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('promis_10')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'PROMIS_10_Q01',
        'PROMIS_10_Q02',
        'PROMIS_10_Q03',
        'PROMIS_10_Q04',
        'PROMIS_10_Q05',
        'PROMIS_10_Q06',
        'PROMIS_10_Q07RC',
        'PROMIS_10_Q08R',
        'PROMIS_10_Q09R',
        'PROMIS_10_Q10R',
      ]

      const configured_calculation_input_ids =
        get_input_ids_from_calculation_blueprint(PROMIS_10_INPUTS)

      expect(configured_calculation_input_ids).to.deep.equal(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = promis_10_calculation(best_response)

    it('should calculate 4 scoreS', function () {
      expect(outcome).toHaveLength(4)
    })

    it('should have the correct calculation ids', function () {
      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual([
        'GLOBAL_PHYSICAL_HEALTH_RAW_SCORE',
        'GLOBAL_MENTAL_HEALTH_RAW_SCORE',
        'GLOBAL_PHYSICAL_HEALTH_T_SCORE',
        'GLOBAL_MENTAL_HEALTH_T_SCORE',
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when the best response is passed', function () {
      const outcome = promis_10_calculation(best_response)

      it('should return the best raw score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_RAW_SCORE')(outcome)

        expect(result).toEqual(PROMIS_10_BEST_SCORE)
      })

      it('should return the best raw score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_RAW_SCORE')(outcome)

        expect(result).toEqual(PROMIS_10_BEST_SCORE)
      })

      it('should return the best t-score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_T_SCORE')(outcome)
        const BEST_T_SCORE_PHYSICAL_HEALTH = 67.7

        expect(result).toEqual(BEST_T_SCORE_PHYSICAL_HEALTH)
      })

      it('should return the best t-score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_T_SCORE')(outcome)
        const BEST_T_SCORE_MENTAL_HEALTH = 67.6

        expect(result).toEqual(BEST_T_SCORE_MENTAL_HEALTH)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = promis_10_calculation(median_response)

      it('should return the median raw score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_RAW_SCORE')(outcome)

        expect(result).toEqual(PROMIS_10_MEDIAN_SCORE)
      })

      it('should return the median raw score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_RAW_SCORE')(outcome)

        expect(result).toEqual(PROMIS_10_MEDIAN_SCORE)
      })

      it('should return the median t-score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_T_SCORE')(outcome)
        const MEDIAN_T_SCORE_PHYSICAL_HEALTH = 39.8

        expect(result).toEqual(MEDIAN_T_SCORE_PHYSICAL_HEALTH)
      })

      it('should return the median t-score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_T_SCORE')(outcome)
        const MEDIAN_T_SCORE_MENTAL_HEALTH = 43.5

        expect(result).toEqual(MEDIAN_T_SCORE_MENTAL_HEALTH)
      })
    })

    describe('when the worst response is passed', function () {
      const outcome = promis_10_calculation(worst_response)

      it('should return the worst raw score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_RAW_SCORE')(outcome)

        expect(result).toEqual(PROMIS_10_WORST_SCORE)
      })

      it('should return the worst raw score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_RAW_SCORE')(outcome)

        expect(result).toEqual(PROMIS_10_WORST_SCORE)
      })

      it('should return the worst t-score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_T_SCORE')(outcome)
        const WORST_T_SCORE_PHYSICAL_HEALTH = 16.2

        expect(result).toEqual(WORST_T_SCORE_PHYSICAL_HEALTH)
      })

      it('should return the worst t-score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_T_SCORE')(outcome)
        const WORST_T_SCORE_MENTAL_HEALTH = 21.2

        expect(result).toEqual(WORST_T_SCORE_MENTAL_HEALTH)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = promis_10_calculation(random_response)

      it('should return the expected raw score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_RAW_SCORE')(outcome)
        const EXPECTED_SCORE = 9
        expect(result).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected raw score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_RAW_SCORE')(outcome)
        const EXPECTED_SCORE = 6
        expect(result).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected t-score for Global Physical Health', function () {
        const result = view_result('GLOBAL_PHYSICAL_HEALTH_T_SCORE')(outcome)
        const EXPECTED_SCORE = 32.4

        expect(result).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected t-score for Global Mental Health', function () {
        const result = view_result('GLOBAL_MENTAL_HEALTH_T_SCORE')(outcome)
        const EXPECTED_SCORE = 28.4

        expect(result).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = promis_10_calculation({})

      describe('For the "Global Physical Health raw score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('GLOBAL_PHYSICAL_HEALTH_RAW_SCORE')(
            outcome,
          )
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('GLOBAL_PHYSICAL_HEALTH_RAW_SCORE')(
            outcome,
          )
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the "Global Mental Health raw score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('GLOBAL_MENTAL_HEALTH_RAW_SCORE')(outcome)
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('GLOBAL_MENTAL_HEALTH_RAW_SCORE')(outcome)
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the "Global Physical Health T-score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('GLOBAL_PHYSICAL_HEALTH_T_SCORE')(outcome)
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('GLOBAL_PHYSICAL_HEALTH_T_SCORE')(outcome)
          expect(status).toEqual(MISSING_STATUS)
        })
      })

      describe('For the "Global Mental Health T-score"', function () {
        it('should return undefined result ', function () {
          const result = view_result('GLOBAL_MENTAL_HEALTH_T_SCORE')(outcome)
          expect(result).toEqual(undefined)
        })

        it('should return missing status ', function () {
          const status = view_status('GLOBAL_MENTAL_HEALTH_T_SCORE')(outcome)
          expect(status).toEqual(MISSING_STATUS)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          promis_10_calculation({
            PROMIS_10_Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          promis_10_calculation({
            PROMIS_10_Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          promis_10_calculation({
            PROMIS_10_Q01: 6,
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
