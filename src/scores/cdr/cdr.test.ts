import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  scenario_1,
  scenario_10,
  scenario_11,
  scenario_12,
  scenario_13,
  scenario_14,
  scenario_2,
  scenario_3,
  scenario_4,
  scenario_5,
  scenario_6,
  scenario_8,
  scenario_9,
} from './__testdata__/cdr_form_responses'
import { cdr } from './cdr'

const cdr_calculation = new Score(cdr)

describe('cdr', function () {
  it('cdr calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('cdr')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'MEMORY',
        'ORIENTATION',
        'JUDGEMENT_AND_PROBLEM_SOLVING',
        'COMMUNITY_AFFAIRS',
        'HOME_AND_HOBBIES',
        'PERSONAL_CARE',
      ]

      const configured_calculation_input_ids = Object.keys(
        cdr_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = cdr_calculation.calculate({ payload: scenario_1 })

    it('should calculate a single score', function () {
      expect(outcome).toHaveProperty('CDR_SCORE')
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)
      expect(configured_calculation_id).toEqual(['CDR_SCORE'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('scenario 1', function () {
      it('should return 0', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_1 })
        expect(outcome.CDR_SCORE).toEqual(0)
      })
    })

    describe('scenario 2', function () {
      it('should return 0.5', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_2 })
        expect(outcome.CDR_SCORE).toEqual(0.5)
      })
    })

    describe('scenario 3', function () {
      it('should return 0.5', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_3 })
        expect(outcome.CDR_SCORE).toEqual(0.5)
      })
    })

    describe('scenario 4', function () {
      it('should return 1', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_4 })
        expect(outcome.CDR_SCORE).toEqual(1)
      })
    })

    describe('scenario 5', function () {
      it('should return 2', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_5 })
        expect(outcome.CDR_SCORE).toEqual(2)
      })
    })

    describe('scenario 6', function () {
      it('should return 2', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_6 })
        expect(outcome.CDR_SCORE).toEqual(2)
      })
    })

    describe('scenario 8', function () {
      it('should return 1', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_8 })
        expect(outcome.CDR_SCORE).toEqual(1)
      })
    })

    describe('scenario 9', function () {
      it('should return 0.5', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_9 })
        expect(outcome.CDR_SCORE).toEqual(0.5)
      })
    })

    describe('scenario 10', function () {
      it('should return 1', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_10 })
        expect(outcome.CDR_SCORE).toEqual(1)
      })
    })

    describe('scenario 11', function () {
      it('should return 1', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_11 })
        expect(outcome.CDR_SCORE).toEqual(1)
      })
    })

    describe('scenario 12', function () {
      it('should return 0.5', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_12 })
        expect(outcome.CDR_SCORE).toEqual(0.5)
      })
    })

    describe('scenario 13', function () {
      it('should return 2', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_13 })
        expect(outcome.CDR_SCORE).toEqual(2)
      })
    })

    describe('scenario 14', function () {
      it('should return 0.5', function () {
        const outcome = cdr_calculation.calculate({ payload: scenario_14 })
        expect(outcome.CDR_SCORE).toEqual(0.5)
      })
    })

    describe('other scenarios', function () {
      it('random 01 - should work', function () {
        const outcome = cdr_calculation.calculate({
          payload: {
            MEMORY: 1,
            ORIENTATION: 2,
            JUDGEMENT_AND_PROBLEM_SOLVING: 2,
            COMMUNITY_AFFAIRS: 3,
            HOME_AND_HOBBIES: 1,
            PERSONAL_CARE: 1,
          },
        })

        expect(outcome.CDR_SCORE).toEqual(2)
      })

      it('random 02 - should work', function () {
        const outcome = cdr_calculation.calculate({
          payload: {
            MEMORY: 1,
            ORIENTATION: 0.5,
            JUDGEMENT_AND_PROBLEM_SOLVING: 0.5,
            COMMUNITY_AFFAIRS: 2,
            HOME_AND_HOBBIES: 3,
            PERSONAL_CARE: 3,
          },
        })

        expect(outcome.CDR_SCORE).toEqual(1)
      })

      it('random 03 - should work', function () {
        const outcome = cdr_calculation.calculate({
          payload: {
            MEMORY: 1,
            ORIENTATION: 1,
            JUDGEMENT_AND_PROBLEM_SOLVING: 0.5,
            COMMUNITY_AFFAIRS: 2,
            HOME_AND_HOBBIES: 3,
            PERSONAL_CARE: 3,
          },
        })

        expect(outcome.CDR_SCORE).toEqual(3)
      })

      it('random 04 - should work', function () {
        const outcome = cdr_calculation.calculate({
          payload: {
            MEMORY: 1,
            ORIENTATION: 1,
            JUDGEMENT_AND_PROBLEM_SOLVING: 1,
            COMMUNITY_AFFAIRS: 2,
            HOME_AND_HOBBIES: 2,
            PERSONAL_CARE: 3,
          },
        })

        expect(outcome.CDR_SCORE).toEqual(2)
      })

      it('random 05 - should work', function () {
        const outcome = cdr_calculation.calculate({
          payload: {
            MEMORY: 1,
            ORIENTATION: 1,
            JUDGEMENT_AND_PROBLEM_SOLVING: 1,
            COMMUNITY_AFFAIRS: 1,
            HOME_AND_HOBBIES: 2,
            PERSONAL_CARE: 3,
          },
        })

        expect(outcome.CDR_SCORE).toEqual(1)
      })

      it('random 06 - should work', function () {
        const outcome = cdr_calculation.calculate({
          payload: {
            MEMORY: 1,
            ORIENTATION: 1,
            JUDGEMENT_AND_PROBLEM_SOLVING: 1,
            COMMUNITY_AFFAIRS: 2,
            HOME_AND_HOBBIES: 0.5,
            PERSONAL_CARE: 2,
          },
        })

        expect(outcome.CDR_SCORE).toEqual(1)
      })

      it('random 07 - should work', function () {
        const outcome = cdr_calculation.calculate({
          payload: {
            MEMORY: 1,
            ORIENTATION: 1,
            JUDGEMENT_AND_PROBLEM_SOLVING: 1,
            COMMUNITY_AFFAIRS: 2,
            HOME_AND_HOBBIES: 2,
            PERSONAL_CARE: 2,
          },
        })

        expect(outcome.CDR_SCORE).toEqual(2)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = cdr_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })
        expect(outcome.CDR_SCORE).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        try {
          cdr_calculation.calculate({
            payload: {
              MEMORY: "I'm not a number",
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['MEMORY'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          cdr_calculation.calculate({
            payload: {
              MEMORY: -1,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['MEMORY'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw a ZodError', function () {
        try {
          cdr_calculation.calculate({
            payload: {
              MEMORY: 4,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['MEMORY'],
              }),
            ]),
          )
        }
      })
    })
  })
})
