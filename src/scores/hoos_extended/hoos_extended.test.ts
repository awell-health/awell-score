import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/hoos_test_respones'
import { HOOS_SUBSCALES } from './definition/hoos_scales'
import { hoos_extended } from './hoos_extended'

const BEST_SCORE = 100
const MEDIAN_SCORE = 50
const WORST_SCORE = 0

const hoos_calculation = new Score(hoos_extended)

describe('hoos_extended', function () {
  it('hoos_extended calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('hoos_extended')
  })

  describe('specific_steps_hoos_extended_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          's1',
          's2',
          's3',
          's4',
          's5',
          'p1',
          'p2',
          'p3',
          'p4',
          'p5',
          'p6',
          'p7',
          'p8',
          'p9',
          'p10',
          'a1',
          'a2',
          'a3',
          'a4',
          'a5',
          'a6',
          'a7',
          'a8',
          'a9',
          'a10',
          'a11',
          'a12',
          'a13',
          'a14',
          'a15',
          'a16',
          'a17',
          'sp1',
          'sp2',
          'sp3',
          'sp4',
          'q1',
          'q2',
          'q3',
          'q4',
        ].sort()

        const configured_input_ids = Object.keys(
          hoos_calculation.inputSchema,
        ).sort()

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the "Symptoms" subscale', function () {
        const EXPECTED_INPUT_IDS = ['s1', 's2', 's3', 's4', 's5']

        expect(EXPECTED_INPUT_IDS).toEqual(HOOS_SUBSCALES.S)
      })

      it('should have the expected input ids configured for the "Pain" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'p1',
          'p2',
          'p3',
          'p4',
          'p5',
          'p6',
          'p7',
          'p8',
          'p9',
          'p10',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(HOOS_SUBSCALES.P)
      })

      it('should have the expected input ids configured for the "ADL" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'a1',
          'a2',
          'a3',
          'a4',
          'a5',
          'a6',
          'a7',
          'a8',
          'a9',
          'a10',
          'a11',
          'a12',
          'a13',
          'a14',
          'a15',
          'a16',
          'a17',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(HOOS_SUBSCALES.ADL)
      })

      it('should have the expected input ids configured for the "Function in sport and recreation" subscale', function () {
        const EXPECTED_INPUT_IDS = ['sp1', 'sp2', 'sp3', 'sp4'].sort()

        expect(EXPECTED_INPUT_IDS).toEqual(HOOS_SUBSCALES.SP)
      })

      it('should have the expected input ids configured for the "Hip related quality of life" subscale', function () {
        const EXPECTED_INPUT_IDS = ['q1', 'q2', 'q3', 'q4'].sort()

        expect(EXPECTED_INPUT_IDS).toEqual(HOOS_SUBSCALES.QOL)
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = hoos_calculation.calculate({ payload: worst_response })

      it('should return a score for all subscales (n=5) and a total score', function () {
        expect(Object.keys(outcome).length).toEqual(6)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = ['TOTAL', 'S', 'P', 'ADL', 'SP', 'QOL']

        const extracted_calculation_ids_from_outcome = Object.keys(outcome)

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = hoos_calculation.calculate({ payload: {} })

        it('should return null as the result for "Symptoms" subscale', function () {
          expect(outcome.S).toEqual(null)
        })

        it('should return null as the result for "Pain" subscale', function () {
          expect(outcome.P).toEqual(null)
        })

        it('should return null as the result for "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(null)
        })

        it('should return null as the result for "Function in sport and recreation" subscale', function () {
          expect(outcome.SP).toEqual(null)
        })

        it('should return null as the result for "Hip related quality of life" subscale', function () {
          expect(outcome.QOL).toEqual(null)
        })

        it('should return undefined as the total score', function () {
          expect(outcome.TOTAL).toEqual(null)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = hoos_calculation.calculate({ payload: worst_response })

        it('should return the worst score for "Symptoms" subscale', function () {
          expect(outcome.S).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Pain" subscale', function () {
          expect(outcome.P).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Function in sport and recreation" subscale', function () {
          expect(outcome.SP).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Hip related quality of life" subscale', function () {
          expect(outcome.QOL).toEqual(WORST_SCORE)
        })

        it('should return the worst the total score', function () {
          expect(outcome.TOTAL).toEqual(WORST_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = hoos_calculation.calculate({ payload: median_response })

        it('should return the median score for "Symptoms" subscale', function () {
          expect(outcome.S).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Pain" subscale', function () {
          expect(outcome.P).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Function in sport and recreation" subscale', function () {
          expect(outcome.SP).toEqual(MEDIAN_SCORE)
        })

        it('should return the median score for "Hip related quality of life" subscale', function () {
          expect(outcome.QOL).toEqual(MEDIAN_SCORE)
        })

        it('should return the median the total score', function () {
          expect(outcome.TOTAL).toEqual(MEDIAN_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = hoos_calculation.calculate({ payload: best_response })

        it('should return the best score for "Symptoms" subscale', function () {
          expect(outcome.S).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Pain" subscale', function () {
          expect(outcome.P).toEqual(BEST_SCORE)
        })

        it('should return the best score for "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Function in sport and recreation" subscale', function () {
          expect(outcome.SP).toEqual(BEST_SCORE)
        })

        it('should return the best score for "Hip related quality of life" subscale', function () {
          expect(outcome.QOL).toEqual(BEST_SCORE)
        })

        it('should return the best the total score', function () {
          expect(outcome.TOTAL).toEqual(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = hoos_calculation.calculate({ payload: random_response })

        it('should return the expected score for "Symptoms" subscale', function () {
          expect(outcome.S).toEqual(55)
        })

        it('should return the expected score for "Pain" subscale', function () {
          expect(outcome.P).toEqual(67.5)
        })

        it('should return the expected score for "ADL" subscale', function () {
          expect(outcome.ADL).toEqual(63.24)
        })

        it('should return the expected score for "Function in sport and recreation" subscale', function () {
          expect(outcome.SP).toEqual(68.75)
        })

        it('should return the expected score for "Hip related quality of life" subscale', function () {
          expect(outcome.QOL).toEqual(75)
        })

        it('should return the expected the total score', function () {
          expect(outcome.TOTAL).toEqual(65)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            hoos_calculation.calculate({
              payload: {
                ...worst_response,
                a1: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is below the expected range)', function () {
        it('should throw an error', function () {
          expect(() =>
            hoos_calculation.calculate({
              payload: {
                ...worst_response,
                a1: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })
      describe('when an answer is not allowed (e.g. is above the expected range)', function () {
        it('should return throw an error', function () {
          expect(() =>
            hoos_calculation.calculate({
              payload: {
                ...worst_response,
                a1: 5,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
