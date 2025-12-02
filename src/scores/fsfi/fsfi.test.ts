import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { fsfi_test_responses } from './__testdata__/fsfi_test_responses'
import { FSFI_DOMAINS } from './definition/fsfi_domains'
import { fsfi } from './fsfi'

const fsfi_calculation = new Score(fsfi)

describe('FSFI', () => {
  it('fsfi calculation function should be available as a calculation', () => {
    expect(ScoreLibrary).toHaveProperty('fsfi')
  })

  describe('the score includes the correct input fields', () => {
    it('should have all the expected input ids configured', () => {
      const EXPECTED_INPUT_IDS = [
        'FSFI_Q01', 'FSFI_Q02', 'FSFI_Q03', 'FSFI_Q04', 'FSFI_Q05',
        'FSFI_Q06', 'FSFI_Q07', 'FSFI_Q08', 'FSFI_Q09', 'FSFI_Q10',
        'FSFI_Q11', 'FSFI_Q12', 'FSFI_Q13', 'FSFI_Q14', 'FSFI_Q15',
        'FSFI_Q16', 'FSFI_Q17', 'FSFI_Q18', 'FSFI_Q19',
      ]

      const configured_input_ids = Object.keys(fsfi_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Desire" domain', () => {
      const EXPECTED_INPUTS_IDS = ['FSFI_Q01', 'FSFI_Q02']
      expect(EXPECTED_INPUTS_IDS).toEqual(FSFI_DOMAINS.DESIRE.items)
    })

    it('should have the expected input ids configured for the "Arousal" domain', () => {
      const EXPECTED_INPUTS_IDS = ['FSFI_Q03', 'FSFI_Q04', 'FSFI_Q05', 'FSFI_Q06']
      expect(EXPECTED_INPUTS_IDS).toEqual(FSFI_DOMAINS.AROUSAL.items)
    })

    it('should have the expected input ids configured for the "Lubrication" domain', () => {
      const EXPECTED_INPUTS_IDS = ['FSFI_Q07', 'FSFI_Q08', 'FSFI_Q09', 'FSFI_Q10']
      expect(EXPECTED_INPUTS_IDS).toEqual(FSFI_DOMAINS.LUBRICATION.items)
    })

    it('should have the expected input ids configured for the "Orgasm" domain', () => {
      const EXPECTED_INPUTS_IDS = ['FSFI_Q11', 'FSFI_Q12', 'FSFI_Q13']
      expect(EXPECTED_INPUTS_IDS).toEqual(FSFI_DOMAINS.ORGASM.items)
    })

    it('should have the expected input ids configured for the "Satisfaction" domain', () => {
      const EXPECTED_INPUTS_IDS = ['FSFI_Q14', 'FSFI_Q15', 'FSFI_Q16']
      expect(EXPECTED_INPUTS_IDS).toEqual(FSFI_DOMAINS.SATISFACTION.items)
    })

    it('should have the expected input ids configured for the "Pain" domain', () => {
      const EXPECTED_INPUTS_IDS = ['FSFI_Q17', 'FSFI_Q18', 'FSFI_Q19']
      expect(EXPECTED_INPUTS_IDS).toEqual(FSFI_DOMAINS.PAIN.items)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', () => {
    const outcome = fsfi_calculation.calculate({ payload: fsfi_test_responses.best_functioning })

    it('should have all the correct calculation ids', () => {
      const EXPECTED_CALCULATION_IDS = [
        'FSFI_DESIRE_SCORE',
        'FSFI_AROUSAL_SCORE',
        'FSFI_LUBRICATION_SCORE',
        'FSFI_ORGASM_SCORE',
        'FSFI_SATISFACTION_SCORE',
        'FSFI_PAIN_SCORE',
        'FSFI_TOTAL_SCORE',
        'FSFI_INTERPRETATION',
      ].sort()

      const extracted_calculation_ids_from_outcome = Object.keys(outcome).sort()

      expect(EXPECTED_CALCULATION_IDS).toEqual(extracted_calculation_ids_from_outcome)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', () => {
    describe('when an empty response is passed', () => {
      const outcome = fsfi_calculation.calculate({ payload: {} })

      it('should return null as the result for "Desire" domain', () => {
        expect(outcome.FSFI_DESIRE_SCORE).toEqual(null)
      })
      it('should return null as the result for "Arousal" domain', () => {
        expect(outcome.FSFI_AROUSAL_SCORE).toEqual(null)
      })
      it('should return null as the result for "Lubrication" domain', () => {
        expect(outcome.FSFI_LUBRICATION_SCORE).toEqual(null)
      })
      it('should return null as the result for "Orgasm" domain', () => {
        expect(outcome.FSFI_ORGASM_SCORE).toEqual(null)
      })
      it('should return null as the result for "Satisfaction" domain', () => {
        expect(outcome.FSFI_SATISFACTION_SCORE).toEqual(null)
      })
      it('should return null as the result for "Pain" domain', () => {
        expect(outcome.FSFI_PAIN_SCORE).toEqual(null)
      })
      it('should return null as the total score', () => {
        expect(outcome.FSFI_TOTAL_SCORE).toEqual(null)
      })
      it('should return insufficient data message for interpretation', () => {
        expect(outcome.FSFI_INTERPRETATION).toEqual('Insufficient data for interpretation')
      })
    })

    describe('when only partial data is provided (missing one question in a domain)', () => {
      const outcome = fsfi_calculation.calculate({
        payload: {
          FSFI_Q01: 5,
          // Q02 missing - Desire domain incomplete
          FSFI_Q03: 5,
          FSFI_Q04: 5,
          FSFI_Q05: 5,
          FSFI_Q06: 5,
          FSFI_Q07: 5,
          FSFI_Q08: 5,
          FSFI_Q09: 5,
          FSFI_Q10: 5,
          FSFI_Q11: 5,
          FSFI_Q12: 5,
          FSFI_Q13: 5,
          FSFI_Q14: 5,
          FSFI_Q15: 5,
          FSFI_Q16: 5,
          FSFI_Q17: 5,
          FSFI_Q18: 5,
          FSFI_Q19: 5,
        },
      })

      it('should return null for the incomplete domain', () => {
        expect(outcome.FSFI_DESIRE_SCORE).toEqual(null)
      })

      it('should calculate complete domains correctly', () => {
        // Arousal: (5+5+5+5) * 0.3 = 6.0
        expect(outcome.FSFI_AROUSAL_SCORE).toEqual(6.0)
        // Lubrication: (5+5+5+5) * 0.3 = 6.0
        expect(outcome.FSFI_LUBRICATION_SCORE).toEqual(6.0)
      })

      it('should return null for total score when any domain is missing', () => {
        expect(outcome.FSFI_TOTAL_SCORE).toEqual(null)
      })

      it('should return insufficient data message for interpretation', () => {
        expect(outcome.FSFI_INTERPRETATION).toEqual('Insufficient data for interpretation')
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', () => {
    describe('when maximum scores response is passed (represents best functioning)', () => {
      const outcome = fsfi_calculation.calculate({ payload: fsfi_test_responses.best_functioning })

      it('should calculate correct domain scores for maximum input', () => {
        // Desire: (5 + 5) * 0.6 = 6.0
        expect(outcome.FSFI_DESIRE_SCORE).toBe(6.0)
        
        // Arousal: (5 + 5 + 5 + 5) * 0.3 = 6.0
        expect(outcome.FSFI_AROUSAL_SCORE).toBe(6.0)
        
        // Lubrication: (5 + 5 + 5 + 5) * 0.3 = 6.0
        expect(outcome.FSFI_LUBRICATION_SCORE).toBe(6.0)
        
        // Orgasm: (5 + 5 + 5) * 0.4 = 6.0
        expect(outcome.FSFI_ORGASM_SCORE).toBe(6.0)
        
        // Satisfaction: (5 + 5 + 5) * 0.4 = 6.0
        expect(outcome.FSFI_SATISFACTION_SCORE).toBe(6.0)
        
        // Pain: (5 + 5 + 5) * 0.4 = 6.0
        expect(outcome.FSFI_PAIN_SCORE).toBe(6.0)
      })

      it('should calculate correct total score for maximum input', () => {
        // Total: 6.0 + 6.0 + 6.0 + 6.0 + 6.0 + 6.0 = 36.0
        expect(outcome.FSFI_TOTAL_SCORE).toBe(36.0)
      })

      it('should provide correct interpretation for maximum score', () => {
        expect(outcome.FSFI_INTERPRETATION).toBe('No clinically significant sexual dysfunction')
      })
    })

    describe('when minimum scores response is passed (represents worst functioning)', () => {
      const outcome = fsfi_calculation.calculate({ payload: fsfi_test_responses.worst_functioning })

      it('should calculate correct domain scores for minimum input', () => {
        // Desire: (1 + 1) * 0.6 = 1.2
        expect(outcome.FSFI_DESIRE_SCORE).toBe(1.2)
        
        // Arousal: (1 + 1 + 1 + 1) * 0.3 = 1.2
        expect(outcome.FSFI_AROUSAL_SCORE).toBe(1.2)
        
        // Lubrication: (1 + 1 + 1 + 1) * 0.3 = 1.2
        expect(outcome.FSFI_LUBRICATION_SCORE).toBe(1.2)
        
        // Orgasm: (1 + 1 + 1) * 0.4 = 1.2
        expect(outcome.FSFI_ORGASM_SCORE).toBe(1.2)
        
        // Satisfaction: (1 + 1 + 1) * 0.4 = 1.2
        expect(outcome.FSFI_SATISFACTION_SCORE).toBe(1.2)
        
        // Pain: (1 + 1 + 1) * 0.4 = 1.2
        expect(outcome.FSFI_PAIN_SCORE).toBe(1.2)
      })

      it('should calculate correct total score for minimum input', () => {
        // Total: 1.2 + 1.2 + 1.2 + 1.2 + 1.2 + 1.2 = 7.2
        expect(outcome.FSFI_TOTAL_SCORE).toBe(7.2)
      })

      it('should provide correct interpretation for minimum score', () => {
        expect(outcome.FSFI_INTERPRETATION).toBe('Clinically significant sexual dysfunction indicated')
      })
    })

    describe('when no sexual activity response is passed (represents no sexual activity)', () => {
      const outcome = fsfi_calculation.calculate({ payload: fsfi_test_responses.no_sexual_activity })

      it('should calculate desire domain correctly (no 0 option)', () => {
        // Desire: (3 + 3) * 0.6 = 3.6
        expect(outcome.FSFI_DESIRE_SCORE).toBe(3.6)
      })

      it('should return 0 for domains with all "no sexual activity" responses', () => {
        expect(outcome.FSFI_AROUSAL_SCORE).toBe(0)
        expect(outcome.FSFI_LUBRICATION_SCORE).toBe(0)
        expect(outcome.FSFI_ORGASM_SCORE).toBe(0)
        expect(outcome.FSFI_PAIN_SCORE).toBe(0)
      })

      it('should calculate satisfaction domain correctly (mixed 0 and values)', () => {
        // Satisfaction: (0 + 3 + 3) * 0.4 = 2.4
        expect(outcome.FSFI_SATISFACTION_SCORE).toBe(2.4)
      })

      it('should calculate correct total score', () => {
        // Total: 3.6 + 0 + 0 + 0 + 2.4 + 0 = 6.0
        expect(outcome.FSFI_TOTAL_SCORE).toBe(6.0)
      })

      it('should indicate clinical dysfunction', () => {
        expect(outcome.FSFI_INTERPRETATION).toBe('Clinically significant sexual dysfunction indicated')
      })
    })

    describe('when mixed scores response is passed', () => {
      const outcome = fsfi_calculation.calculate({ payload: fsfi_test_responses.mixed_scores })

      it('should calculate domain scores correctly', () => {
        // Desire: (3 + 3) * 0.6 = 3.6
        expect(outcome.FSFI_DESIRE_SCORE).toBe(3.6)
        
        // Arousal: (4 + 3 + 3 + 3) * 0.3 = 3.9
        expect(outcome.FSFI_AROUSAL_SCORE).toBe(3.9)
        
        // Lubrication: (3 + 3 + 3 + 3) * 0.3 = 3.6
        expect(outcome.FSFI_LUBRICATION_SCORE).toBe(3.6)
        
        // Orgasm: (2 + 2 + 2) * 0.4 = 2.4
        expect(outcome.FSFI_ORGASM_SCORE).toBe(2.4)
        
        // Satisfaction: (3 + 3 + 2) * 0.4 = 3.2
        expect(outcome.FSFI_SATISFACTION_SCORE).toBe(3.2)
        
        // Pain: (3 + 3 + 3) * 0.4 = 3.6
        expect(outcome.FSFI_PAIN_SCORE).toBe(3.6)
      })

      it('should calculate correct total score', () => {
        // Total: 3.6 + 3.9 + 3.6 + 2.4 + 3.2 + 3.6 = 20.3
        expect(outcome.FSFI_TOTAL_SCORE).toBe(20.3)
      })

      it('should indicate clinical dysfunction (below cutoff)', () => {
        expect(outcome.FSFI_INTERPRETATION).toBe('Clinically significant sexual dysfunction indicated')
      })
    })

    describe('when high functioning response is passed', () => {
      const outcome = fsfi_calculation.calculate({ payload: fsfi_test_responses.high_functioning })

      it('should calculate domain scores correctly', () => {
        // Desire: (4 + 4) * 0.6 = 4.8
        expect(outcome.FSFI_DESIRE_SCORE).toBe(4.8)
        
        // Arousal: (4 + 4 + 4 + 4) * 0.3 = 4.8
        expect(outcome.FSFI_AROUSAL_SCORE).toBe(4.8)
        
        // Lubrication: (4 + 4 + 4 + 4) * 0.3 = 4.8
        expect(outcome.FSFI_LUBRICATION_SCORE).toBe(4.8)
        
        // Orgasm: (4 + 4 + 4) * 0.4 = 4.8
        expect(outcome.FSFI_ORGASM_SCORE).toBe(4.8)
        
        // Satisfaction: (4 + 4 + 4) * 0.4 = 4.8
        expect(outcome.FSFI_SATISFACTION_SCORE).toBe(4.8)
        
        // Pain: (4 + 4 + 4) * 0.4 = 4.8
        expect(outcome.FSFI_PAIN_SCORE).toBe(4.8)
      })

      it('should calculate correct total score', () => {
        // Total: 4.8 + 4.8 + 4.8 + 4.8 + 4.8 + 4.8 = 28.8
        expect(outcome.FSFI_TOTAL_SCORE).toBe(28.8)
      })

      it('should indicate no clinical dysfunction (above cutoff)', () => {
        expect(outcome.FSFI_INTERPRETATION).toBe('No clinically significant sexual dysfunction')
      })
    })

    describe('when partial no activity response is passed', () => {
      const outcome = fsfi_calculation.calculate({ payload: fsfi_test_responses.partial_no_activity })

      it('should calculate active domains correctly', () => {
        // Desire: (2 + 2) * 0.6 = 2.4
        expect(outcome.FSFI_DESIRE_SCORE).toBe(2.4)
        
        // Arousal: (3 + 3 + 2 + 2) * 0.3 = 3.0
        expect(outcome.FSFI_AROUSAL_SCORE).toBe(3.0)
        
        // Orgasm: (2 + 3 + 2) * 0.4 = 2.8
        expect(outcome.FSFI_ORGASM_SCORE).toBe(2.8)
        
        // Satisfaction: (3 + 2 + 2) * 0.4 = 2.8
        expect(outcome.FSFI_SATISFACTION_SCORE).toBe(2.8)
      })

      it('should return 0 for domains with all 0 responses', () => {
        expect(outcome.FSFI_LUBRICATION_SCORE).toBe(0)
        expect(outcome.FSFI_PAIN_SCORE).toBe(0)
      })

      it('should calculate correct total score', () => {
        // Total: 2.4 + 3.0 + 0 + 2.8 + 2.8 + 0 = 11.0
        expect(outcome.FSFI_TOTAL_SCORE).toBe(11.0)
      })

      it('should indicate clinical dysfunction', () => {
        expect(outcome.FSFI_INTERPRETATION).toBe('Clinically significant sexual dysfunction indicated')
      })
    })
  })

  describe('edge cases and clinical cutoff boundaries', () => {
    it('should handle clinical cutoff boundary (exactly 26)', () => {
      const mockData = {
        FSFI_Q01: 4, FSFI_Q02: 3, // Desire: (4+3) × 0.6 = 4.2
        FSFI_Q03: 4, FSFI_Q04: 4, FSFI_Q05: 4, FSFI_Q06: 3, // Arousal: 15 × 0.3 = 4.5
        FSFI_Q07: 4, FSFI_Q08: 4, FSFI_Q09: 4, FSFI_Q10: 3, // Lubrication: 15 × 0.3 = 4.5
        FSFI_Q11: 4, FSFI_Q12: 4, FSFI_Q13: 4, // Orgasm: 12 × 0.4 = 4.8
        FSFI_Q14: 4, FSFI_Q15: 4, FSFI_Q16: 3, // Satisfaction: 11 × 0.4 = 4.4
        FSFI_Q17: 3, FSFI_Q18: 3, FSFI_Q19: 3, // Pain: 9 × 0.4 = 3.6
      }
      
      const result = fsfi_calculation.calculate({ payload: mockData })
      
      // Total: 4.2 + 4.5 + 4.5 + 4.8 + 4.4 + 3.6 = 26.0
      expect(result.FSFI_TOTAL_SCORE).toBeCloseTo(26.0, 1)
      expect(result.FSFI_INTERPRETATION).toBe('Clinically significant sexual dysfunction indicated')
    })

    it('should handle values just above cutoff (26.1)', () => {
      const mockData = {
        FSFI_Q01: 4, FSFI_Q02: 4, // Desire: (4+4) × 0.6 = 4.8
        FSFI_Q03: 4, FSFI_Q04: 4, FSFI_Q05: 4, FSFI_Q06: 4, // Arousal: 16 × 0.3 = 4.8
        FSFI_Q07: 4, FSFI_Q08: 4, FSFI_Q09: 4, FSFI_Q10: 3, // Lubrication: 15 × 0.3 = 4.5
        FSFI_Q11: 4, FSFI_Q12: 4, FSFI_Q13: 4, // Orgasm: 12 × 0.4 = 4.8
        FSFI_Q14: 4, FSFI_Q15: 4, FSFI_Q16: 4, // Satisfaction: 12 × 0.4 = 4.8
        FSFI_Q17: 3, FSFI_Q18: 3, FSFI_Q19: 3, // Pain: 9 × 0.4 = 3.6
      }
      
      const result = fsfi_calculation.calculate({ payload: mockData })
      
      // Total: 4.8 + 4.8 + 4.5 + 4.8 + 4.8 + 3.6 = 27.3
      expect(result.FSFI_TOTAL_SCORE).toBe(27.3)
      expect(result.FSFI_INTERPRETATION).toBe('No clinically significant sexual dysfunction')
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', () => {
    describe('when an answer is not a number', () => {
      it('should throw an error', () => {
        expect(() =>
          fsfi_calculation.calculate({
            payload: {
              ...fsfi_test_responses.best_functioning,
              FSFI_Q01: "I'm not a number" as any,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is not allowed (e.g. is below the expected range)', () => {
      it('should throw an error', () => {
        expect(() =>
          fsfi_calculation.calculate({
            payload: {
              ...fsfi_test_responses.best_functioning,
              FSFI_Q01: -1 as any,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is not allowed (e.g. is above the expected range)', () => {
      it('should throw an error', () => {
        expect(() =>
          fsfi_calculation.calculate({
            payload: {
              ...fsfi_test_responses.best_functioning,
              FSFI_Q01: 6 as any,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })

  describe('score ranges validation', () => {
    it('should respect domain score ranges', () => {
      const maxResult = fsfi_calculation.calculate({
        payload: fsfi_test_responses.best_functioning,
      })
      
      // All domain scores should be 6.0 for best functioning
      expect(maxResult.FSFI_DESIRE_SCORE).toBe(6.0)
      expect(maxResult.FSFI_AROUSAL_SCORE).toBe(6.0)
      expect(maxResult.FSFI_LUBRICATION_SCORE).toBe(6.0)
      expect(maxResult.FSFI_ORGASM_SCORE).toBe(6.0)
      expect(maxResult.FSFI_SATISFACTION_SCORE).toBe(6.0)
      expect(maxResult.FSFI_PAIN_SCORE).toBe(6.0)
      
      // Total score should be 36.0 (maximum per documentation)
      expect(maxResult.FSFI_TOTAL_SCORE).toBe(36.0)
    })

    it('should respect minimum score ranges', () => {
      const minResult = fsfi_calculation.calculate({
        payload: fsfi_test_responses.worst_functioning,
      })
      
      // All domain scores should be at their minimum
      expect(minResult.FSFI_DESIRE_SCORE).toBe(1.2)
      expect(minResult.FSFI_AROUSAL_SCORE).toBe(1.2)
      expect(minResult.FSFI_LUBRICATION_SCORE).toBe(1.2)
      expect(minResult.FSFI_ORGASM_SCORE).toBe(1.2)
      expect(minResult.FSFI_SATISFACTION_SCORE).toBe(1.2)
      expect(minResult.FSFI_PAIN_SCORE).toBe(1.2)
      
      // Total score should be 7.2 (near minimum per documentation)
      expect(minResult.FSFI_TOTAL_SCORE).toBe(7.2)
    })
  })
})
