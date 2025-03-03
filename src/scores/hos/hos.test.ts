import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/hos_test_responses'
import { HOS_SUBSCALES } from './definition/hos_subscales'
import { hos } from './hos'

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

const hos_calculation = new Score(hos)

describe('hos', function () {
  it('hos calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('hos')
  })

  describe('specific_steps_hos_calc', function () {
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
          'SQ01',
          'SQ02',
          'SQ03',
          'SQ04',
          'SQ05',
          'SQ06',
          'SQ07',
          'SQ08',
          'SQ09',
        ].sort()

        const configured_input_ids = Object.keys(hos_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the "ADL" subscale', function () {
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
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(HOS_SUBSCALES.ADL)
      })

      it('should have the expected input ids configured for the "Sports" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'SQ01',
          'SQ02',
          'SQ03',
          'SQ04',
          'SQ05',
          'SQ06',
          'SQ07',
          'SQ08',
          'SQ09',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(HOS_SUBSCALES.SPORTS)
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = hos_calculation.calculate({ payload: worst_response })

      it('should return a score for all subscales (n=3) and a total score', function () {
        expect(Object.keys(outcome)).toHaveLength(3)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = ['TOTAL', 'ADL', 'SPORTS']

        const extracted_calculation_ids_from_outcome = Object.keys(outcome)

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = hos_calculation.calculate({ payload: {} })

        it('should return null as the result for "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(null)
        })

        it('should return null as the result for "SPORTS" subscale', function () {
          expect(outcome.SPORTS).toEqual(null)
        })

        it('should return null as the total score', function () {
          expect(outcome.TOTAL).toEqual(null)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = hos_calculation.calculate({ payload: worst_response })

        it('should return the worst score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(WORST_SCORE)
        })

        it('should return the worst score for the "Sports" subscale', function () {
          expect(outcome.SPORTS).toEqual(WORST_SCORE)
        })

        it('should return worst total score', function () {
          expect(outcome.TOTAL).toEqual(WORST_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = hos_calculation.calculate({ payload: median_response })

        it('should return the median score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for the "SPORTS" subscale', function () {
          expect(outcome.SPORTS).toEqual(MEDIAN_SCORE)
        })

        it('should return median total score', function () {
          expect(outcome.TOTAL).toEqual(MEDIAN_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = hos_calculation.calculate({ payload: best_response })

        it('should return the best score for the "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(BEST_SCORE)
        })

        it('should return the best score for the "SPORTS" subscale', function () {
          expect(outcome.SPORTS).toEqual(BEST_SCORE)
        })

        it('should return best total score', function () {
          expect(outcome.TOTAL).toEqual(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = hos_calculation.calculate({ payload: random_response })

        it('should return the expected score for the "ADL" subscale', function () {
          const EXPECTED_SCORE = 66.67
          expect(outcome.ADL).toEqual(EXPECTED_SCORE)
        })

        it('should return the expected score for the "SPORTS" subscale', function () {
          const EXPECTED_SCORE = 55
          expect(outcome.SPORTS).toEqual(EXPECTED_SCORE)
        })

        it('should return expected total score', function () {
          const EXPECTED_SCORE = 63.75
          expect(outcome.TOTAL).toEqual(EXPECTED_SCORE)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            hos_calculation.calculate({
              payload: {
                ...worst_response,
                Q01: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            hos_calculation.calculate({
              payload: {
                ...worst_response,
                Q01: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            hos_calculation.calculate({
              payload: {
                ...worst_response,
                Q01: 5,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
