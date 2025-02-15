import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/comi_neck_respones'
import { comi_neck } from './comi_neck'

const COMI_MIN_SCORE = 0
const COMI_MEDIAN_SCORE = 5
const COMI_MAX_SCORE = 10

const comi_neck_calculation = new Score(comi_neck)

describe('comi_neck', function () {
  it('comi_neck calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('comi_neck')
  })

  describe('basic assumptions', function () {
    const outcome = comi_neck_calculation.calculate({ payload: min_response })

    // A score for all domains (n=5) and a total score (n=1)
    const EXPECTED_CALCULATION_IDS = [
      'TOTAL',
      'PAIN',
      'NECK_RELATED_FUNCTION',
      'SYMPTOM_SPECIFIC_WELLBEING',
      'GENERAL_QOL',
      'DISABILITY',
    ]

    it('should return 6 calculation results', function () {
      expect(Object.keys(outcome)).toHaveLength(6) // 5 Domains and a total score
    })

    it('should contain all the expected calculation ids', function () {
      const EXTRACTED_CALCULATION_IDS_FROM_RESULTS = Object.keys(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULTS).toEqual(
        EXPECTED_CALCULATION_IDS,
      )
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'item_1a',
          'item_1b',
          'item_2',
          'item_3',
          'item_4',
          'item_5',
          'item_6',
        ]

        const configured_input_ids = Object.keys(
          comi_neck_calculation.inputSchema,
        )

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when answer on item 1a is out of the expected range', function () {
      describe('when answer < 0', function () {
        it('should throw an ZodError', function () {
          try {
            comi_neck_calculation.calculate({
              payload: {
                item_1a: -1,
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Number must be greater than or equal to 0',
                  path: ['item_1a'],
                }),
              ]),
            )
          }
        })

        describe('when answer > 10', function () {
          it('should throw an ZodError', function () {
            try {
              comi_neck_calculation.calculate({
                payload: {
                  item_1a: 11,
                },
              })
            } catch (error) {
              expect(error).toBeInstanceOf(ZodError)

              const err = error as ZodError
              expect(err.issues).toEqual(
                expect.arrayContaining([
                  expect.objectContaining({
                    message: 'Number must be less than or equal to 10',
                    path: ['item_1a'],
                  }),
                ]),
              )
            }
          })
        })
      })

      describe('when answer on item 3 is not expected', function () {
        it('should throw an ZodError', function () {
          try {
            comi_neck_calculation.calculate({
              payload: {
                item_3: 4,
              },
            })
          } catch (error) {
            expect(error).toBeInstanceOf(ZodError)

            const err = error as ZodError
            expect(err.issues).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  message: 'Invalid input',
                  path: ['item_3'],
                }),
              ]),
            )
          }
        })
      })

      describe('when called with an empty response', function () {
        it('should return null as the score for every domain', function () {
          const outcome = comi_neck_calculation.calculate({
            payload: {},
            opts: {
              returnMissingOnZodError: true,
            },
          })

          Object.values(outcome).forEach(score => {
            expect(score).toEqual(null)
          })
        })
      })
    })

    describe('score calculation', function () {
      describe('when called with a minimum response', function () {
        it('should return the minimum score for each domain', function () {
          const outcome = comi_neck_calculation.calculate({
            payload: min_response,
          })

          Object.values(outcome).forEach(score => {
            expect(score).toEqual(COMI_MIN_SCORE)
          })
        })
      })

      describe('when called with a median response', function () {
        it('should return the median score for each domain', function () {
          const outcome = comi_neck_calculation.calculate({
            payload: median_response,
          })

          Object.values(outcome).forEach(score => {
            expect(score).toEqual(COMI_MEDIAN_SCORE)
          })
        })
      })

      describe('when called with a maximum response', function () {
        it('should return the maximum score for each subscale', function () {
          const outcome = comi_neck_calculation.calculate({
            payload: max_response,
          })

          Object.values(outcome).forEach(score => {
            expect(score).toEqual(COMI_MAX_SCORE)
          })
        })
      })

      describe('when called with a random response', function () {
        const results = comi_neck_calculation.calculate({
          payload: random_response,
        })

        it('should return the expected score for the "PAIN" domain"', function () {
          const EXPECTED_PAIN_SCORE = 7
          expect(results.PAIN).toEqual(EXPECTED_PAIN_SCORE)
        })
        it('should return the expected score for the "NECK_RELATED_FUNCTION" domain"', function () {
          const EXPECTED_NECK_RELATED_FUNCTION_SCORE = 2.5
          expect(results.NECK_RELATED_FUNCTION).toEqual(
            EXPECTED_NECK_RELATED_FUNCTION_SCORE,
          )
        })
        it('should return the expected score for the "SYMPTOM_SPECIFIC_WELLBEING" domain"', function () {
          const EXPECTED_SYMPTOM_SPECIFIC_WELL_BEING_SCORE = 7.5
          expect(results.SYMPTOM_SPECIFIC_WELLBEING).toEqual(
            EXPECTED_SYMPTOM_SPECIFIC_WELL_BEING_SCORE,
          )
        })
        it('should return the expected score for the "GENERAL_QOL" domain"', function () {
          const EXPECTED_QOL_SCORE = 10
          expect(results.GENERAL_QOL).toEqual(EXPECTED_QOL_SCORE)
        })
        it('should return the expected score for the "DISABILITY" domain"', function () {
          const EXPECTED_DISABILITY_SCORE = 2.5
          expect(results.DISABILITY).toEqual(EXPECTED_DISABILITY_SCORE)
        })
        it('should return the expected total score', function () {
          const EXPECTED_TOTAL_SCORE = 5.9
          expect(results.TOTAL).toEqual(EXPECTED_TOTAL_SCORE)
        })
      })
    })
  })
})
