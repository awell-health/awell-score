import { ZodError } from 'zod'
import { Score } from '../../../classes'
import { ScoreLibrary } from '../../library'
import {
  best_response,
  missing_data_response,
  random_response,
  worst_response,
} from './__testdata__/short_fes_i_test_responses'
import { short_fes_i } from './short_fes_i'

const BEST_SCORE = 7
const WORST_SCORE = 28

const short_fes_i_calculation = new Score(short_fes_i)

describe('short_fes_i', function () {
  // it('short_fes_i calculation function should be available as a calculation', function () {
  //   expect(ScoreLibrary).toHaveProperty('short_fes_i')
  // })

  // describe('basic assumptions', function () {
  //   const outcome = short_fes_i_calculation.calculate({
  //     payload: best_response,
  //   })

  //   it('should have the expected calculation result ids', function () {
  //     const EXPECTED_CALCULATION_ID = ['SHORT_FES_I_TOTAL_SCORE']

  //     const configured_calculation_id = Object.keys(outcome)

  //     expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
  //   })
  // })

  describe('validation', function () {
    // describe('the score includes the correct input fields', function () {
    //   it('should have all the expected input ids configured', function () {
    //     const EXPECTED_INPUT_IDS = [
    //       'Q01',
    //       'Q02',
    //       'Q03',
    //       'Q04',
    //       'Q05',
    //       'Q06',
    //       'Q07',
    //     ]

    //     const configured_input_ids = Object.keys(
    //       short_fes_i_calculation.inputSchema,
    //     )

    //     expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    //   })
    // })

    // describe('when an answer is not not one of the allowed answers', function () {
    //   it('should throw an ZodError', function () {
    //     expect(() =>
    //       short_fes_i_calculation.calculate({
    //         payload: {
    //           Q01: 0,
    //         },
    //       }),
    //     ).toThrow(ZodError)
    //   })
    // })

    describe('when called with an empty response', function () {
      const outcome = short_fes_i_calculation.calculate({
        payload: {},
      })

      it('should return null result', function () {
        expect(outcome.SHORT_FES_I_TOTAL_SCORE).toEqual(null)
      })
    })
  })

  // describe('score calculation', function () {
  //   describe('when called with the best response', function () {
  //     const outcome = short_fes_i_calculation.calculate({
  //       payload: best_response,
  //     })

  //     it('should return the best score', function () {
  //       expect(outcome.SHORT_FES_I_TOTAL_SCORE).toEqual(BEST_SCORE)
  //     })
  //   })

  //   describe('when called with missing data', function () {
  //     const outcome = short_fes_i_calculation.calculate({
  //       payload: missing_data_response,
  //     })

  //     it('should return the expected score that accounts for missing data', function () {
  //       const EXPECTED_SCORE = 20
  //       expect(outcome.SHORT_FES_I_TOTAL_SCORE).toEqual(EXPECTED_SCORE)
  //     })
  //   })

  //   describe('when called with the worst response', function () {
  //     const outcome = short_fes_i_calculation.calculate({
  //       payload: worst_response,
  //     })

  //     it('should return the worst score', function () {
  //       expect(outcome.SHORT_FES_I_TOTAL_SCORE).toEqual(WORST_SCORE)
  //     })
  //   })

  //   describe('when called with a random response', function () {
  //     const outcome = short_fes_i_calculation.calculate({
  //       payload: random_response,
  //     })

  //     it('should return the expected score', function () {
  //       const EXPECTED_SCORE = 15
  //       expect(outcome.SHORT_FES_I_TOTAL_SCORE).toEqual(EXPECTED_SCORE)
  //     })
  //   })
  // })
})
