import { z, ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  worst_response,
} from './__testdata__/compass_31_test_responses'
import { compass_31 } from './compass_31'
import { COMPASS_31_DOMAINS } from './definition/compass_31_domains'
import { pickBy } from 'lodash'

const compass_calculation = new Score(compass_31)

describe('compass_31', function () {
  it('compass_31 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('compass_31')
  })

  describe('basic assumptions', function () {
    const outcome = compass_calculation.calculate({ payload: worst_response })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'COMPASS_31_TOTAL_SCORE',
        'COMPASS_31_ORTHOSTATIC_INTOLERANCE',
        'COMPASS_31_VASOMOTOR',
        'COMPASS_31_SECRETOMOTOR',
        'COMPASS_31_GASTROINTESTINAL',
        'COMPASS_31_BLADDER',
        'COMPASS_31_PUPILLOMOTOR',
      ]

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
          'Q22',
          'Q23',
          'Q24',
          'Q25',
          'Q26',
          'Q27',
          'Q28',
          'Q29',
          'Q30',
          'Q31',
        ]

        const configured_input_ids = Object.keys(
          compass_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('Some questions are optional', () => {
      it('should be true', function () {
        const optionalQuestions = pickBy(
          compass_calculation.inputSchema,
          val => val.type instanceof z.ZodOptional,
        )

        const expectedOptionalQuestions = [
          'Q02',
          'Q03',
          'Q04',
          'Q06',
          'Q07',
          'Q17',
          'Q18',
          'Q19',
          'Q21',
          'Q22',
          'Q23',
          'Q28',
          'Q30',
        ]

        expect(expectedOptionalQuestions).toEqual(
          Object.keys(optionalQuestions),
        )
      })
    })

    describe('Orthostatic intolerance domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04']

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.ORTHOSTATIC_INTOLERANCE.items,
        )
      })
    })

    describe('Vasomotor domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q05', 'Q06', 'Q07']

        expect(EXPECTED_INPUT_IDS).toEqual(COMPASS_31_DOMAINS.VASOMOTOR.items)
      })
    })

    describe('Secretomotor domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q08', 'Q09', 'Q10', 'Q11']

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.SECRETOMOTOR.items,
        )
      })
    })

    describe('Gastrointestinal domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
          'Q22',
          'Q23',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.GASTROINTESTINAL.items,
        )
      })
    })

    describe('Bladder domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q24', 'Q25', 'Q26']

        expect(EXPECTED_INPUT_IDS).toEqual(COMPASS_31_DOMAINS.BLADDER.items)
      })
    })

    describe('Pupillomotor domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q27', 'Q28', 'Q29', 'Q30', 'Q31']

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.PUPILLOMOTOR.items,
        )
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        try {
          compass_calculation.calculate({
            payload: {
              Q01: -1,
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        try {
          compass_calculation.calculate({
            payload: {
              Q01: 8,
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        try {
          compass_calculation.calculate({
            payload: {
              Q01: 'not a number',
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['Q01'],
              }),
            ]),
          )
        }
      })
    })

    describe('when called with an empty response', function () {
      const outcome = compass_calculation.calculate({
        payload: {},
        opts: {
          returnMissingOnZodError: true,
        },
      })

      describe('Orthostatic intolerance domain', function () {
        it('should return a null score', function () {
          expect(outcome.COMPASS_31_ORTHOSTATIC_INTOLERANCE).toEqual(null)
        })
      })
      describe('Vasomotor domain', function () {
        it('should return a null score', function () {
          expect(outcome.COMPASS_31_VASOMOTOR).toEqual(null)
        })
      })
      describe('Secretomotor domain', function () {
        it('should return a null score', function () {
          expect(outcome.COMPASS_31_SECRETOMOTOR).toEqual(null)
        })
      })
      describe('Gastrointestinal domain', function () {
        it('should return a null score', function () {
          expect(outcome.COMPASS_31_GASTROINTESTINAL).toEqual(null)
        })
      })
      describe('Bladder domain', function () {
        it('should return a null score', function () {
          expect(outcome.COMPASS_31_BLADDER).toEqual(null)
        })
      })
      describe('Pupillomotor domain', function () {
        it('should return a null score', function () {
          expect(outcome.COMPASS_31_PUPILLOMOTOR).toEqual(null)
        })
      })
      describe('Total score', function () {
        it('should return a null score', function () {
          expect(outcome.COMPASS_31_TOTAL_SCORE).toEqual(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = compass_calculation.calculate({
        payload: worst_response,
      })

      describe('Orthostatic intolerance domain', function () {
        it('should return the worst score', function () {
          expect(outcome.COMPASS_31_ORTHOSTATIC_INTOLERANCE).toEqual(40)
        })
      })
      describe('Vasomotor domain', function () {
        it('should return the worst score', function () {
          expect(outcome.COMPASS_31_VASOMOTOR).toEqual(5)
        })
      })
      describe('Secretomotor domain', function () {
        it('should return the worst score', function () {
          expect(outcome.COMPASS_31_SECRETOMOTOR).toEqual(15)
        })
      })
      describe('Gastrointestinal domain', function () {
        it('should return the worst score', function () {
          expect(outcome.COMPASS_31_GASTROINTESTINAL).toEqual(25)
        })
      })
      describe('Bladder domain', function () {
        it('should return the worst score', function () {
          expect(outcome.COMPASS_31_BLADDER).toEqual(10)
        })
      })
      describe('Pupillomotor domain', function () {
        it('should return the worst score', function () {
          expect(outcome.COMPASS_31_PUPILLOMOTOR).toEqual(5)
        })
      })
      describe('Total score', function () {
        it('should return the worst score', function () {
          expect(outcome.COMPASS_31_TOTAL_SCORE).toEqual(100)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = compass_calculation.calculate({
        payload: best_response,
      })

      describe('Orthostatic intolerance domain', function () {
        it('should return the best score', function () {
          expect(outcome.COMPASS_31_ORTHOSTATIC_INTOLERANCE).toEqual(0)
        })
      })
      describe('Vasomotor domain', function () {
        it('should return the best score', function () {
          expect(outcome.COMPASS_31_VASOMOTOR).toEqual(0)
        })
      })
      describe('Secretomotor domain', function () {
        it('should return the best score', function () {
          expect(outcome.COMPASS_31_SECRETOMOTOR).toEqual(0)
        })
      })
      describe('Gastrointestinal domain', function () {
        it('should return the best score', function () {
          expect(outcome.COMPASS_31_GASTROINTESTINAL).toEqual(0)
        })
      })
      describe('Bladder domain', function () {
        it('should return the best score', function () {
          expect(outcome.COMPASS_31_BLADDER).toEqual(0)
        })
      })
      describe('Pupillomotor domain', function () {
        it('should return the best score', function () {
          expect(outcome.COMPASS_31_PUPILLOMOTOR).toEqual(0)
        })
      })
      describe('Total score', function () {
        it('should return the best score', function () {
          expect(outcome.COMPASS_31_TOTAL_SCORE).toEqual(0)
        })
      })
    })
  })
})
