import { ScoreLibrary } from '../library'
import { age_calc } from './age_calc'
import { Score } from '../../classes'
import MockDate from 'mockdate'
import { ZodError } from 'zod'

const calculate_age = new Score(age_calc)

describe('age_calc', function () {
  it('age_calc calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('age_calc')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = ['date_of_birth']

      const configured_calculation_input_ids = Object.keys(
        calculate_age.inputSchemaAsObject.shape,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = calculate_age.calculate({
      payload: { date_of_birth: '1993-11-30' },
    })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should have the expected calculation id', function () {
      const EXPECTED_CALCULATION_ID = ['AGE']
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return a ZodError', function () {
        const outcome = calculate_age.calculate({
          payload: {},
          opts: {
            nullOnMissingInputs: true,
          },
        })

        expect(outcome).toEqual({
          AGE: null,
        })
      })
    })

    describe('when an invalid date is passed', function () {
      it('should return a ZodError', function () {
        try {
          calculate_age.calculate({
            payload: { date_of_birth: 'invalid' },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                code: 'invalid_date',
                message: 'Invalid date',
                path: ['date_of_birth'],
              }),
            ]),
          )
        }
      })
    })
  })

  describe('each calculated score shall include the correct formula and output the correct result', function () {
    describe('when input date is just a date string', () => {
      it('should return correct result age', function () {
        const dob = '1993-11-30'
        MockDate.set('2025-01-01T00:00:00Z')

        const EXPECTED_AGE = 31

        const result = calculate_age.calculate({
          payload: { date_of_birth: dob },
        })

        expect(result.AGE).toEqual(EXPECTED_AGE)
      })
    })

    describe('when input date is just a datetime string', () => {
      it('should return correct result age', function () {
        const dob = '1993-11-30T00:00:00.000Z'
        MockDate.set('2025-01-01T00:00:00Z')

        const EXPECTED_AGE = 31

        const result = calculate_age.calculate({
          payload: { date_of_birth: dob },
        })

        expect(result.AGE).toEqual(EXPECTED_AGE)
      })
    })
  })
})
