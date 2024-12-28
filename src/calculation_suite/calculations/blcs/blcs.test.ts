import { expect } from 'chai'

import { CALCULATIONS } from '../calculation_library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/blcs_test_responses'
import { blcs } from './blcs'
import { Calculation } from '../../../api/shared/classes/Calculation'
import { ZodError } from 'zod'

const blcs_calculation = new Calculation(blcs)

describe('blcs', function () {
  it('blcs calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('blcs')
  })

  describe('basic assumptions', function () {
    const outcome = blcs_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = ['BLCS_TOTAL_SCORE']

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).to.eql(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04']

        const configured_input_ids = Object.keys(
          blcs_calculation.inputSchema.shape
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q01: -1,
          },
        })
      ).to.throw(ZodError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q01: 5,
          },
        })
      ).to.throw(ZodError)
    })
  })

  describe('when an answer is above the expected range for Q04', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q04: 11,
          },
        })
      ).to.throw(ZodError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        blcs_calculation.calculate({
          payload: {
            Q01: "I'm not a number",
          },
        })
      ).to.throw(ZodError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = blcs_calculation.calculate({ payload: {} })

    it('should return null for the score', function () {
      expect(outcome.BLCS_TOTAL_SCORE).to.eql(null)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = blcs_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).to.eql(22)
      })
    })

    describe('when called with the best response', function () {
      const outcome = blcs_calculation.calculate({ payload: best_response })
      it('should return the best score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).to.eql(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = blcs_calculation.calculate({ payload: median_response })

      it('should return the median score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).to.eql(11)
      })
    })

    describe('when called with the random response', function () {
      const outcome = blcs_calculation.calculate({ payload: random_response })

      it('should return the exepected score', function () {
        expect(outcome.BLCS_TOTAL_SCORE).to.eql(10)
      })
    })
  })
})
