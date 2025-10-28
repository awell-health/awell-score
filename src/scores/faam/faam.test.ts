import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/faam_test_responses'
import { FAAM_SUBSCALES } from './definition/faam_subscales'
import { faam } from './faam'

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

const faam_calculation = new Score(faam)

describe('faam', function () {
  it('faam calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('faam')
  })

  describe('specific_steps_faam_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ADL_Q01',
          'ADL_Q02',
          'ADL_Q03',
          'ADL_Q04',
          'ADL_Q05',
          'ADL_Q06',
          'ADL_Q07',
          'ADL_Q08',
          'ADL_Q09',
          'ADL_Q10',
          'ADL_Q11',
          'ADL_Q12',
          'ADL_Q13',
          'ADL_Q14',
          'ADL_Q15',
          'ADL_Q16',
          'ADL_Q17',
          'ADL_Q18',
          'ADL_Q19',
          'ADL_Q20',
          'ADL_Q21',
          'ADL_RATING',
          'SPORTS_Q01',
          'SPORTS_Q02',
          'SPORTS_Q03',
          'SPORTS_Q04',
          'SPORTS_Q05',
          'SPORTS_Q06',
          'SPORTS_Q07',
          'SPORTS_RATING',
          'OVERALL_RATING',
        ]

        const configured_input_ids = Object.keys(faam_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the "ADL" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'ADL_Q01',
          'ADL_Q02',
          'ADL_Q03',
          'ADL_Q04',
          'ADL_Q05',
          'ADL_Q06',
          'ADL_Q07',
          'ADL_Q08',
          'ADL_Q09',
          'ADL_Q10',
          'ADL_Q11',
          'ADL_Q12',
          'ADL_Q13',
          'ADL_Q14',
          'ADL_Q15',
          'ADL_Q16',
          'ADL_Q17',
          'ADL_Q18',
          'ADL_Q19',
          'ADL_Q20',
          'ADL_Q21',
        ].sort()

        expect(EXPECTED_INPUT_IDS).toEqual(FAAM_SUBSCALES.ADL.inputs)
      })

      it('should have the expected input ids configured for the "Sports" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'SPORTS_Q01',
          'SPORTS_Q02',
          'SPORTS_Q03',
          'SPORTS_Q04',
          'SPORTS_Q05',
          'SPORTS_Q06',
          'SPORTS_Q07',
        ].sort()

        expect(EXPECTED_INPUT_IDS).toEqual(FAAM_SUBSCALES.SPORTS.inputs)
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = faam_calculation.calculate({ payload: worst_response })

      it('should return a score for all subscales (n=2)', function () {
        expect(Object.keys(outcome)).toHaveLength(2)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = ['ADL', 'SPORTS']

        const extracted_calculation_ids_from_outcome = Object.keys(outcome)

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = faam_calculation.calculate({ payload: {} })

        it('should return null as the result for "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(null)
        })

        it('should return null as the result for "SPORTS" subscale', function () {
          expect(outcome.SPORTS).toEqual(null)
        })
      })

      describe('when a response is passed with less than the minimum number of answers for a subscale', function () {
        describe('when the "ADL" subscale is passed with less than the minimum number of answers', function () {
          it('should return null as the result for "ADL" subscale', function () {
            const outcome = faam_calculation.calculate({
              payload: {
                ...worst_response,
                // Two missing questions for the "ADL" subscale
                ADL_Q01: undefined,
                ADL_Q02: undefined,
              },
            })

            expect(outcome.ADL).toEqual(null)
            expect(outcome.SPORTS).toEqual(WORST_SCORE)
          })
        })

        describe('when the "SPORTS" subscale is passed with less than the minimum number of answers', function () {
          it('should return null as the result for "SPORTS" subscale', function () {
            const outcome = faam_calculation.calculate({
              payload: {
                ...worst_response,
                // Two missing questions for the "SPORTS" subscale
                SPORTS_Q01: undefined,
                SPORTS_Q02: undefined,
              },
            })

            expect(outcome.ADL).toEqual(WORST_SCORE)
            expect(outcome.SPORTS).toEqual(null)
          })
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = faam_calculation.calculate({ payload: worst_response })

        it('should return the worst score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(WORST_SCORE)
        })

        it('should return the worst score for the "Sports" subscale', function () {
          expect(outcome.SPORTS).toEqual(WORST_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = faam_calculation.calculate({ payload: median_response })

        it('should return the median score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for the "SPORTS" subscale', function () {
          expect(outcome.SPORTS).toEqual(MEDIAN_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = faam_calculation.calculate({ payload: best_response })

        it('should return the best score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(BEST_SCORE)
        })

        it('should return the best score for the "SPORTS" subscale', function () {
          expect(outcome.SPORTS).toEqual(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = faam_calculation.calculate({ payload: random_response })

        it('should return the expected score for the "ADL" subscale', function () {
          const EXPECTED_SCORE = 58.82
          expect(outcome.ADL).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for the "SPORTS" subscale', function () {
          const EXPECTED_SCORE = 60.71
          expect(outcome.SPORTS).toEqual(EXPECTED_SCORE)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            faam_calculation.calculate({
              payload: {
                ...worst_response,
                ADL_Q01: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            faam_calculation.calculate({
              payload: {
                ...worst_response,
                ADL_Q01: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            faam_calculation.calculate({
              payload: {
                ...worst_response,
                ADL_Q01: 5,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
