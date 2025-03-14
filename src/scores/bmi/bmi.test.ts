import { ScoreLibrary } from '../library'
import { bmi } from './bmi'
import { Score } from '../../classes'
import { ZodError } from 'zod'

const bmi_calculation = new Score(bmi)

describe('bmi', function () {
  it('bmi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('bmi')
  })

  describe('basic assumptions', function () {
    const outcome = bmi_calculation.calculate({
      payload: {
        weight: 70,
        height: 175,
      },
    })

    it('should return 1 calculation result', function () {
      expect(Object.keys(outcome)).toHaveLength(1)
    })

    it('should the calculation names', function () {
      const EXPECTED_CALCULATION_IDS = [
        'bmi',
      ]

      const EXTRACTED_CALCULATION_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).toEqual(
        EXPECTED_CALCULATION_IDS,
      )
    })
    
    it('should return the correct BMI result', function () {
      expect(outcome.bmi).toEqual(22.86)
    })
  })

  describe('validations', function () {
    it('should throw an error for invalid input', function () {
      expect(() =>
        bmi_calculation.calculate({
          payload: {
            weight: -70,
            height: 170,
          },
        }),
      ).toThrow(ZodError)
    })
  })
})
