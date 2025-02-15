import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/ccq_test_responses'
import { ccq } from './ccq'
import { CCQ_SCALES } from './definition'

const ccq_calclation = new Score(ccq)

const BEST_SCORE = 0
const MEDIAN_SCORE = 3
const WORST_SCORE = 6

describe('ccq', function () {
  it('ccq calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ccq')
  })

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
      ].sort()

      const configured_input_ids = Object.keys(ccq_calclation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Symptoms" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q05', 'Q06'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(CCQ_SCALES.SYMPTOMS.items)
    })

    it('should have the expected input idss configured for the "Functional state" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q07', 'Q08', 'Q09', 'Q10'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(CCQ_SCALES.FUNCTIONAL_STATE.items)
    })

    it('should have the expected input idss configured for the "Mental state" subscale', function () {
      const EXPECTED_INPUT_IDS = ['Q03', 'Q04'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(CCQ_SCALES.MENTAL_STATE.items)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ccq_calclation.calculate({ payload: worst_response })

    it('should calculate a score for all subscales (n=3) and a total score', function () {
      const AMOUNT_OF_SCORES = 4
      expect(Object.keys(outcome).length).toEqual(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'TOTAL_SCORE',
        'SYMPTOMS',
        'FUNCTIONAL_STATE',
        'MENTAL_STATE',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      const outcome = ccq_calclation.calculate({ payload: worst_response })

      it('should return the worst score on the "Symptoms" subscale', function () {
        const score = outcome.SYMPTOMS
        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the worst score on the "Functional state" subscale', function () {
        const score = outcome.FUNCTIONAL_STATE
        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the worst score on the "Mental state" subscale', function () {
        const score = outcome.MENTAL_STATE
        expect(score).toEqual(WORST_SCORE)
      })

      it('should return the worst total score', function () {
        const score = outcome.TOTAL_SCORE
        expect(score).toEqual(WORST_SCORE)
      })
    })

    describe('when median response is passed', function () {
      const outcome = ccq_calclation.calculate({ payload: median_response })

      it('should return the median score on the "Symptoms" subscale', function () {
        const score = outcome.SYMPTOMS
        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score on the "Functional state" subscale', function () {
        const score = outcome.FUNCTIONAL_STATE
        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median score on the "Mental state" subscale', function () {
        const score = outcome.MENTAL_STATE
        expect(score).toEqual(MEDIAN_SCORE)
      })

      it('should return the median total score', function () {
        const score = outcome.TOTAL_SCORE
        expect(score).toEqual(MEDIAN_SCORE)
      })
    })

    describe('when best response is passed', function () {
      const outcome = ccq_calclation.calculate({ payload: best_response })

      it('should return the maximum score on the "Symptoms" subscale', function () {
        const score = outcome.SYMPTOMS
        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the maximum score on the "Functional state" subscale', function () {
        const score = outcome.FUNCTIONAL_STATE
        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the maximum score on the "Mental state" subscale', function () {
        const score = outcome.MENTAL_STATE
        expect(score).toEqual(BEST_SCORE)
      })

      it('should return the best total score', function () {
        const score = outcome.TOTAL_SCORE
        expect(score).toEqual(BEST_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = ccq_calclation.calculate({ payload: random_response })

      it('should return the expected score on the "Symptoms" subscale', function () {
        const score = outcome.SYMPTOMS
        const EXPECTED_SCORE = 2

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score on the "Functional state" subscale', function () {
        const score = outcome.FUNCTIONAL_STATE
        const EXPECTED_SCORE = 2.75

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score on the "Mental state" subscale', function () {
        const score = outcome.MENTAL_STATE
        const EXPECTED_SCORE = 4.5

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = outcome.TOTAL_SCORE
        const EXPECTED_SCORE = 2.8

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = ccq_calclation.calculate({ payload: {} })

      it('should return null as the score on the "Symptoms" subscale', function () {
        const score = outcome.SYMPTOMS
        expect(score).toEqual(null)
      })

      it('should return null as the score on the "Functional state" subscale', function () {
        const score = outcome.FUNCTIONAL_STATE
        expect(score).toEqual(null)
      })

      it('should return null as the score on the "Mental state" subscale', function () {
        const score = outcome.MENTAL_STATE
        expect(score).toEqual(null)
      })

      it('should return MISSING_MESSAGE as the total score', function () {
        const score = outcome.TOTAL_SCORE
        expect(score).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        try {
          ccq_calclation.calculate({
            payload: {
              Q01: "I'm not a number",
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
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        try {
          ccq_calclation.calculate({
            payload: {
              Q01: -1,
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
    describe('when an answer is above the expected [0,4] range', function () {
      it('should throw an ZodError', function () {
        try {
          ccq_calclation.calculate({
            payload: {
              Q01: 7,
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
  })
})
