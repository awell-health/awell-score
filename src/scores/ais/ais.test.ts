import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  worst_response,
  moderate_response,
  random_response,
  low_acceptance_response,
  high_acceptance_response,
} from './__testdata__/ais_test_responses'
import { ais } from './ais'

const BEST_SCORE = 40
const WORST_SCORE = 8
const MODERATE_SCORE = 25

const ais_calculation = new Score(ais)

describe('ais', function () {
  it('ais calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('ais')
  })

  describe('basic assumptions', function () {
    const outcome = ais_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['AIS_SCORE', 'AIS_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AIS_Q01',
          'AIS_Q02',
          'AIS_Q03',
          'AIS_Q04',
          'AIS_Q05',
          'AIS_Q06',
          'AIS_Q07',
          'AIS_Q08',
        ]

        const configured_input_id = Object.keys(ais_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_id)
      })
    })

    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ais_calculation.calculate({
            payload: {
              AIS_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          ais_calculation.calculate({ payload: {} }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      it('should return the best score', function () {
        const outcome = ais_calculation.calculate({ payload: best_response })

        expect(outcome.AIS_SCORE).toEqual(BEST_SCORE)
      })

      it('should return "High acceptance" as the interpretation', function () {
        const outcome = ais_calculation.calculate({ payload: best_response })

        expect(outcome.AIS_INTERPRETATION).toEqual('High acceptance')
      })
    })

    describe('when called with the worst response', function () {
      it('should return the worst score', function () {
        const outcome = ais_calculation.calculate({ payload: worst_response })

        expect(outcome.AIS_SCORE).toEqual(WORST_SCORE)
      })

      it('should return "Low acceptance" as the interpretation', function () {
        const outcome = ais_calculation.calculate({ payload: worst_response })

        expect(outcome.AIS_INTERPRETATION).toEqual('Low acceptance')
      })
    })

    describe('when called with a moderate response', function () {
      it('should return the expected score', function () {
        const outcome = ais_calculation.calculate({ payload: moderate_response })

        expect(outcome.AIS_SCORE).toEqual(MODERATE_SCORE)
      })

      it('should return "Moderate acceptance" as the interpretation', function () {
        const outcome = ais_calculation.calculate({ payload: moderate_response })

        expect(outcome.AIS_INTERPRETATION).toEqual('Moderate acceptance')
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = ais_calculation.calculate({ payload: random_response })
        const EXPECTED_SCORE = 24 // Sum of random_response values

        expect(outcome.AIS_SCORE).toEqual(EXPECTED_SCORE)
      })
    })

    describe('when called with low acceptance response', function () {
      it('should return "Low acceptance" as the interpretation', function () {
        const outcome = ais_calculation.calculate({ payload: low_acceptance_response })

        expect(outcome.AIS_INTERPRETATION).toEqual('Low acceptance')
      })
    })

    describe('when called with high acceptance response', function () {
      it('should return "High acceptance" as the interpretation', function () {
        const outcome = ais_calculation.calculate({ payload: high_acceptance_response })

        expect(outcome.AIS_INTERPRETATION).toEqual('High acceptance')
      })
    })
  })

  describe('boundary score testing', function () {
    it('should return "Low acceptance" for score 19', function () {
      const boundary_response = {
        AIS_Q01: 3, AIS_Q02: 3, AIS_Q03: 3, AIS_Q04: 3,
        AIS_Q05: 2, AIS_Q06: 2, AIS_Q07: 2, AIS_Q08: 1, // Total: 19
      }
      const outcome = ais_calculation.calculate({ payload: boundary_response })
      
      expect(outcome.AIS_SCORE).toEqual(19)
      expect(outcome.AIS_INTERPRETATION).toEqual('Low acceptance')
    })

    it('should return "Moderate acceptance" for score 20', function () {
      const boundary_response = {
        AIS_Q01: 3, AIS_Q02: 3, AIS_Q03: 3, AIS_Q04: 3,
        AIS_Q05: 2, AIS_Q06: 2, AIS_Q07: 2, AIS_Q08: 2, // Total: 20
      }
      const outcome = ais_calculation.calculate({ payload: boundary_response })
      
      expect(outcome.AIS_SCORE).toEqual(20)
      expect(outcome.AIS_INTERPRETATION).toEqual('Moderate acceptance')
    })

    it('should return "Moderate acceptance" for score 30', function () {
      const boundary_response = {
        AIS_Q01: 4, AIS_Q02: 4, AIS_Q03: 4, AIS_Q04: 4,
        AIS_Q05: 3, AIS_Q06: 3, AIS_Q07: 4, AIS_Q08: 4, // Total: 30
      }
      const outcome = ais_calculation.calculate({ payload: boundary_response })
      
      expect(outcome.AIS_SCORE).toEqual(30)
      expect(outcome.AIS_INTERPRETATION).toEqual('Moderate acceptance')
    })

    it('should return "High acceptance" for score 31', function () {
      const boundary_response = {
        AIS_Q01: 4, AIS_Q02: 4, AIS_Q03: 4, AIS_Q04: 4,
        AIS_Q05: 4, AIS_Q06: 3, AIS_Q07: 4, AIS_Q08: 4, // Total: 31
      }
      const outcome = ais_calculation.calculate({ payload: boundary_response })
      
      expect(outcome.AIS_SCORE).toEqual(31)
      expect(outcome.AIS_INTERPRETATION).toEqual('High acceptance')
    })
  })

  describe('partial responses', function () {
    it('should throw a ZodError when questions are missing', function () {
      const partial_response = {
        AIS_Q01: 5,
        AIS_Q02: 4,
        // Missing other questions - should throw ZodError
      }
      
      expect(() =>
        ais_calculation.calculate({ payload: partial_response }),
      ).toThrow(ZodError)
    })
  })
})
