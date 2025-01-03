import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { packyears } from './packyears'

const packyears_calculation = new Score(packyears)

describe('packyears', function () {
  it('packyears calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('packyears')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'cigarettes_per_day',
        'number_years_smoking',
      ]

      const configured_calculation_input_ids = Object.keys(
        packyears.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = packyears_calculation.calculate({
      payload: {
        cigarettes_per_day: 1,
        number_years_smoking: 1,
      },
    })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['PACKYEARS'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when amount of packs per day and number of years smoking is passed', function () {
      it('should correctly multiply both variables to get Packyears', function () {
        const outcome = packyears_calculation.calculate({
          payload: {
            cigarettes_per_day: 15,
            number_years_smoking: 10,
          },
        })

        expect(outcome.PACKYEARS).toEqual(7.5)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return throw a ZodError', function () {
        expect(() =>
          packyears_calculation.calculate({
            payload: {},
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          packyears_calculation.calculate({
            payload: {
              cigarettes_per_day: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected [0, 4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          packyears_calculation.calculate({
            payload: {
              cigarettes_per_day: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected [0, 4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          packyears_calculation.calculate({
            payload: {
              cigarettes_per_day: 200,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
