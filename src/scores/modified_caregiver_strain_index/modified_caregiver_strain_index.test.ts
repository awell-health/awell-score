import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/modified_caregiver_strain_index_test_responses'
import { modified_caregiver_strain_index } from './modified_caregiver_strain_index'

const CSI_MIN_SCORE = 0
const CSI_MEDIAN_SCORE = 13
const CSI_MAX_SCORE = 26

const modified_caregiver_strain_index_calculation = new Score(
  modified_caregiver_strain_index,
)

describe('modified_caregiver_strain_index', function () {
  it('modified_caregiver_strain_index calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('modified_caregiver_strain_index')
  })

  describe('basic assumption', function () {
    describe('the score includes the correct input fields', function () {
      it('should use the correct input fields', function () {
        const EXPECTED_CALCULATION_INPUT_IDS = [
          'CSI_Q01',
          'CSI_Q02',
          'CSI_Q03',
          'CSI_Q04',
          'CSI_Q05',
          'CSI_Q06',
          'CSI_Q07',
          'CSI_Q08',
          'CSI_Q09',
          'CSI_Q10',
          'CSI_Q11',
          'CSI_Q12',
          'CSI_Q13',
        ]

        const CONFIGURED_CALCULATION_INPUT_IDS = Object.keys(
          modified_caregiver_strain_index.inputSchema,
        )

        expect(EXPECTED_CALCULATION_INPUT_IDS).toEqual(
          CONFIGURED_CALCULATION_INPUT_IDS,
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = modified_caregiver_strain_index_calculation.calculate({
        payload: min_response,
      })

      it('should calculate a single score', function () {
        expect(Object.keys(outcome).length).toEqual(1)
      })

      it('should have the correct calculation id', function () {
        const EXPECTED_CALCULATION_ID = ['MODIFIED_CAREGIVER_STRAIN_INDEX']
        const configured_calculation_id = Object.keys(outcome)

        expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
      })
    })
  })

  describe('score calculations', function () {
    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when a minimum response is passed', function () {
        it('should return the minimum score', function () {
          const score = modified_caregiver_strain_index_calculation.calculate({
            payload: min_response,
          })

          expect(score.MODIFIED_CAREGIVER_STRAIN_INDEX).toEqual(CSI_MIN_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        it('should return the median score', function () {
          const score = modified_caregiver_strain_index_calculation.calculate({
            payload: median_response,
          })

          expect(score.MODIFIED_CAREGIVER_STRAIN_INDEX).toEqual(
            CSI_MEDIAN_SCORE,
          )
        })
      })

      describe('when a maximum response is passed', function () {
        it('should return the maximum score', function () {
          const score = modified_caregiver_strain_index_calculation.calculate({
            payload: max_response,
          })

          expect(score.MODIFIED_CAREGIVER_STRAIN_INDEX).toEqual(CSI_MAX_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        it('should return the expected score', function () {
          const score = modified_caregiver_strain_index_calculation.calculate({
            payload: random_response,
          })

          const EXPECTED_SCORE = 7
          expect(score.MODIFIED_CAREGIVER_STRAIN_INDEX).toEqual(EXPECTED_SCORE)
        })
      })
    })
  })

  describe('validations', function () {
    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        it('should throw a ZodError', function () {
          expect(() =>
            modified_caregiver_strain_index_calculation.calculate({
              payload: {},
            }),
          ).toThrow(ZodError)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('when an answer is not a number', function () {
        it('should throw an error', function () {
          expect(() =>
            modified_caregiver_strain_index_calculation.calculate({
              payload: {
                CSI_Q01: "I'm not a number",
              },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when an answer is below 0 (i.e. not 0 = no or 1 = yes)', function () {
        it('should throw an error', function () {
          expect(() =>
            modified_caregiver_strain_index_calculation.calculate({
              payload: {
                CSI_Q01: -1,
              },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('when an answer is above 1 (i.e. not 0 = no or 1 = yes)', function () {
        it('should return throw an error', function () {
          expect(() =>
            modified_caregiver_strain_index_calculation.calculate({
              payload: {
                CSI_Q01: 3,
              },
            }),
          ).toThrow(ZodError)
        })
      })
    })
  })
})
