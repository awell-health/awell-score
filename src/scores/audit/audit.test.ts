import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  maximum_response,
  median_response,
  minimum_response,
  random_response,
} from './__testdata__/audit_responses'
import { audit } from './audit'
import { AUDIT_SUBSCALES } from './definition'

const AUDIT_MIN_SCORE = 0
const AUDIT_MEDIAN_SCORE = 20
const AUDIT_MAX_SCORE = 40

const audit_calculation = new Score(audit)

describe('audit', function () {
  it('audit calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('audit')
  })

  describe('basic assumptions', function () {
    const outcome = audit_calculation.calculate({ payload: minimum_response })

    it('should return 4 calculation results', function () {
      const AMOUNT_OF_RESULTS_IN_AUDIT_SCORE = 4

      expect(Object.keys(outcome).length).toEqual(
        AMOUNT_OF_RESULTS_IN_AUDIT_SCORE,
      )
    })

    it('should contain all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'TOTAL',
        'CONSUMPTION',
        'DEPENDENCE',
        'ALCOHOL_RELATED_PROBLEMS',
      ]

      const EXTRACTED_CALCULATION_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).toEqual(
        EXPECTED_CALCULATION_IDS,
      )
    })
  })

  describe('validation', function () {
    describe('when called with a response where there are answers out of the expected [0-4] range', function () {
      describe('when an answer is above the expected [0,4] range', function () {
        it('should throw an ZodError', function () {
          try {
            audit_calculation.calculate({
              payload: {
                AUDIT_Q01: 10,
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Invalid input',
                  path: ['AUDIT_Q01'],
                }),
              ]),
            )
          }
        })
      })
      describe('when an answer is not a number', function () {
        it('should throw an ZodError', function () {
          try {
            audit_calculation.calculate({
              payload: {
                AUDIT_Q01: 'I am not a number',
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Invalid input',
                  path: ['AUDIT_Q01'],
                }),
              ]),
            )
          }
        })
      })
      describe('when an answer is below the expected [0,4] range', function () {
        it('should throw an ZodError', function () {
          try {
            audit_calculation.calculate({
              payload: {
                AUDIT_Q01: -1,
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Invalid input',
                  path: ['AUDIT_Q01'],
                }),
              ]),
            )
          }
        })
      })
    })

    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AUDIT_Q01',
          'AUDIT_Q02',
          'AUDIT_Q03',
          'AUDIT_Q04',
          'AUDIT_Q05',
          'AUDIT_Q06',
          'AUDIT_Q07',
          'AUDIT_Q08',
          'AUDIT_Q09',
          'AUDIT_Q10',
        ]

        const configured_input_ids = Object.keys(audit_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the Consumption scale', function () {
        const EXPECTED_INPUT_IDS = ['AUDIT_Q01', 'AUDIT_Q02', 'AUDIT_Q03']

        expect(EXPECTED_INPUT_IDS).toEqual(AUDIT_SUBSCALES.CONSUMPTION)
      })

      it('should have the expected input ids configured for the Dependence scale', function () {
        const EXPECTED_INPUT_IDS = ['AUDIT_Q04', 'AUDIT_Q05', 'AUDIT_Q06']

        expect(EXPECTED_INPUT_IDS).toEqual(AUDIT_SUBSCALES.DEPENDENCE)
      })

      it('should have the expected input ids configured for the Alcohol Related Problem scale', function () {
        const EXPECTED_INPUT_IDS = [
          'AUDIT_Q07',
          'AUDIT_Q08',
          'AUDIT_Q09',
          'AUDIT_Q10',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(
          AUDIT_SUBSCALES.ALCOHOL_RELATED_PROBLEMS,
        )
      })
    })

    describe('when called with an empty response', function () {
      const outcome = audit_calculation.calculate({ payload: {} })
      it('should return the 0 as score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(0)
      })

      it('should return the 0 as score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(0)
      })

      it('should return the 0 as score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(0)
      })

      it('should return the 0 as score for Total', function () {
        expect(outcome.TOTAL).toEqual(0)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with a minimum response', function () {
      const outcome = audit_calculation.calculate({ payload: minimum_response })

      it('should return the minimum score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(0)
      })

      it('should return the minimum score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(0)
      })

      it('should return the minimum score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(0)
      })

      it('should return the minimum score for Total', function () {
        expect(outcome.TOTAL).toEqual(AUDIT_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = audit_calculation.calculate({ payload: median_response })
      it('should return the median score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(6)
      })

      it('should return the median score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(6)
      })

      it('should return the median score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(8)
      })

      it('should return the median score for Total', function () {
        expect(outcome.TOTAL).toEqual(AUDIT_MEDIAN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      const outcome = audit_calculation.calculate({ payload: maximum_response })

      it('should return the max score for Consumption scale', function () {
        expect(outcome.CONSUMPTION).toEqual(12)
      })

      it('should return the max score for Dependence scale', function () {
        expect(outcome.DEPENDENCE).toEqual(12)
      })

      it('should return the max score for Alcohol Related Problem scale', function () {
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(16)
      })

      it('should return the max score for Total', function () {
        expect(outcome.TOTAL).toEqual(AUDIT_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = audit_calculation.calculate({ payload: random_response })

      it('should return the expected score Consumption score', function () {
        const EXPECTED_CONSUMPTION_SCORE = 7
        expect(outcome.CONSUMPTION).toEqual(EXPECTED_CONSUMPTION_SCORE)
      })

      it('should return the expected Dependence score', function () {
        const EXPECTED_DEPENDENCE_SCORE = 7
        expect(outcome.DEPENDENCE).toEqual(EXPECTED_DEPENDENCE_SCORE)
      })

      it('should return the expected Alcohol related problems score', function () {
        const EXPECTED_ALCOHOL_RELATED_PROBLEMS_SCORE = 10
        expect(outcome.ALCOHOL_RELATED_PROBLEMS).toEqual(
          EXPECTED_ALCOHOL_RELATED_PROBLEMS_SCORE,
        )
      })

      it('should return the expected Total score', function () {
        const EXPECTED_TOTAL_SCORE = 24
        expect(outcome.TOTAL).toEqual(EXPECTED_TOTAL_SCORE)
      })
    })
  })
})
