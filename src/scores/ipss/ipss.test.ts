import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ipss_test_responses'
import { IPSS_INPUTS } from './definition/ipss_inputs'
import { ipss } from './ipss'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { ZodError } from 'zod'

const IPSS_MIN_SCORE = 0
const IPSS_12_MEDIAN_SCORE = 17
const IPSS_12_MAX_SCORE = 35

const ipss_calculation = new Score(ipss)

describe('ipss', function () {
  it('ipss calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ipss')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'IPSS_Q01',
        'IPSS_Q02',
        'IPSS_Q03',
        'IPSS_Q04',
        'IPSS_Q05',
        'IPSS_Q06',
        'IPSS_Q07',
      ]

      const configured_calculation_input_ids = Object.keys(
        ipss_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ipss_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['IPSS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when a minimum response is passed', function () {
      it('should return the minimum score', function () {
        const outcome = ipss_calculation.calculate({ payload: min_response })
        expect(outcome.IPSS).toEqual(IPSS_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score', function () {
        const outcome = ipss_calculation.calculate({ payload: median_response })
        expect(outcome.IPSS).toEqual(IPSS_12_MEDIAN_SCORE)
      })
    })

    describe('when a maximum response is passed', function () {
      it('should return the maximum score', function () {
        const outcome = ipss_calculation.calculate({ payload: max_response })
        expect(outcome.IPSS).toEqual(IPSS_12_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      it('should return the expected score', function () {
        const EXPECTED_SCORE = 18
        const outcome = ipss_calculation.calculate({ payload: random_response })
        expect(outcome.IPSS).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = ipss_calculation.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        expect(outcome.IPSS).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ipss_calculation.calculate({
            payload: {
              IPSS_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected [0, 5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ipss_calculation.calculate({
            payload: {
              IPSS_Q01: -1,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected [0, 5] range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          ipss_calculation.calculate({
            payload: {
              IPSS_Q01: 6,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
