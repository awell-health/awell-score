import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/pci_test_responses'
import { PCI_SUBSCALES } from './definition/pci_subscales'
import { pci } from './pci'

const pci_calculation = new Score(pci)

describe('pci', function () {
  it('pci calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('pci')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'PCI_Q01',
        'PCI_Q02',
        'PCI_Q03',
        'PCI_Q04',
        'PCI_Q05',
        'PCI_Q06',
        'PCI_Q07',
        'PCI_Q08',
        'PCI_Q09',
        'PCI_Q10',
        'PCI_Q11',
        'PCI_Q12',
        'PCI_Q13',
        'PCI_Q14',
        'PCI_Q15',
        'PCI_Q16',
        'PCI_Q17',
        'PCI_Q18',
        'PCI_Q19',
        'PCI_Q20',
        'PCI_Q21',
        'PCI_Q22',
        'PCI_Q23',
        'PCI_Q24',
        'PCI_Q25',
        'PCI_Q26',
        'PCI_Q27',
        'PCI_Q28',
        'PCI_Q29',
        'PCI_Q30',
        'PCI_Q31',
        'PCI_Q32',
        'PCI_Q33',
      ]

      const configured_input_ids = Object.keys(pci_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Pain transforming" subscale', function () {
      const EXPECTED_INPUT_IDS = ['PCI_Q15', 'PCI_Q16', 'PCI_Q18', 'PCI_Q30']

      expect(EXPECTED_INPUT_IDS).toEqual(PCI_SUBSCALES.PAIN_TRANSFORM)
    })

    it('should have the expected input idss configured for the "DISTRACTION" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PCI_Q09',
        'PCI_Q19',
        'PCI_Q20',
        'PCI_Q21',
        'PCI_Q22',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(PCI_SUBSCALES.DISTRACTION)
    })

    it('should have the expected input idss configured for the "Reducing demands subscale', function () {
      const EXPECTED_INPUT_IDS = ['PCI_Q02', 'PCI_Q03', 'PCI_Q04']

      expect(EXPECTED_INPUT_IDS).toEqual(PCI_SUBSCALES.REDUCING_DEMANDS)
    })

    it('should have the expected input idss configured for the "RETREATING" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PCI_Q10',
        'PCI_Q11',
        'PCI_Q12',
        'PCI_Q13',
        'PCI_Q14',
        'PCI_Q32',
        'PCI_Q33',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(PCI_SUBSCALES.RETREATING)
    })

    it('should have the expected input idss configured for the "WORRYING" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PCI_Q17',
        'PCI_Q23',
        'PCI_Q24',
        'PCI_Q25',
        'PCI_Q26',
        'PCI_Q27',
        'PCI_Q28',
        'PCI_Q29',
        'PCI_Q31',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(PCI_SUBSCALES.WORRYING)
    })

    it('should have the expected input idss configured for the "RESTING" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PCI_Q01',
        'PCI_Q05',
        'PCI_Q06',
        'PCI_Q07',
        'PCI_Q08',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(PCI_SUBSCALES.RESTING)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pci_calculation.calculate({ payload: min_response })

    it('should return a score for all subscales (n=6) and the results of the coping strategy (n=4)', function () {
      expect(Object.keys(outcome)).toHaveLength(10)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PAIN_TRANSFORM',
        'DISTRACTION',
        'REDUCING_DEMANDS',
        'RETREATING',
        'WORRYING',
        'RESTING',
        'ACTIVE_COPING',
        'ACTIVE_COPING_PERCENTAGE',
        'PASSIVE_COPING',
        'PASSIVE_COPING_PERCENTAGE',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = pci_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null as the result for "Pain transformation" subscale', function () {
        expect(outcome.PAIN_TRANSFORM).toEqual(null)
      })

      it('should return null as the result for "DISTRACTION subscale', function () {
        expect(outcome.DISTRACTION).toEqual(null)
      })

      it('should return null as the result for "Reducing demands" subscale', function () {
        expect(outcome.REDUCING_DEMANDS).toEqual(null)
      })

      it('should return null as the result for "RETREATING" subscale', function () {
        expect(outcome.RETREATING).toEqual(null)
      })

      it('should return null as the result for "WORRYING" subscale', function () {
        expect(outcome.WORRYING).toEqual(null)
      })

      it('should return null as the result for "RESTING" subscale', function () {
        expect(outcome.RESTING).toEqual(null)
      })

      it('should return null as the result for "Active coping" subscale', function () {
        expect(outcome.ACTIVE_COPING).toEqual(null)
      })

      it('should return null as the result for "Active coping (percentage)" subscale', function () {
        expect(outcome.ACTIVE_COPING_PERCENTAGE).toEqual(null)
      })

      it('should return null as the result for "Passive coping" subscale', function () {
        expect(outcome.PASSIVE_COPING).toEqual(null)
      })

      it('should return undefined as the result for "Passive coping (percentage)" subscale', function () {
        expect(outcome.PASSIVE_COPING_PERCENTAGE).toEqual(null)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when minimum response is passed', function () {
      const outcome = pci_calculation.calculate({ payload: min_response })

      it('should return the minimum score for the "Pain transformation" subscale', function () {
        expect(outcome.PAIN_TRANSFORM).toEqual(4)
      })

      it('should return the minimum score for the "DISTRACTION subscale', function () {
        expect(outcome.DISTRACTION).toEqual(5)
      })

      it('should return the minimum score for the "Reducing demands" subscale', function () {
        expect(outcome.REDUCING_DEMANDS).toEqual(3)
      })

      it('should return the minimum score for the "RETREATING" subscale', function () {
        expect(outcome.RETREATING).toEqual(7)
      })

      it('should return the minimum score for the "WORRYING" subscale', function () {
        expect(outcome.WORRYING).toEqual(9)
      })

      it('should return the minimum score for the "RESTING" subscale', function () {
        expect(outcome.RESTING).toEqual(5)
      })

      it('should return the minimum score for the "Active coping" subscale', function () {
        expect(outcome.ACTIVE_COPING).toEqual(12)
      })

      it('should return the minimum score for the "Active coping (percentage)" subscale', function () {
        expect(outcome.ACTIVE_COPING_PERCENTAGE).toEqual(0)
      })

      it('should return the minimum score for the "Passive coping" subscale', function () {
        expect(outcome.PASSIVE_COPING).toEqual(21)
      })

      it('should return the minimum score for the "Passive coping (percentage)" subscale', function () {
        expect(outcome.PASSIVE_COPING_PERCENTAGE).toEqual(0)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = pci_calculation.calculate({ payload: median_response })

      it('should return the median score for the "Pain transformation" subscale', function () {
        expect(outcome.PAIN_TRANSFORM).toEqual(8)
      })

      it('should return the median score for the "DISTRACTION subscale', function () {
        expect(outcome.DISTRACTION).toEqual(10)
      })

      it('should return the median score for the "Reducing demands" subscale', function () {
        expect(outcome.REDUCING_DEMANDS).toEqual(6)
      })

      it('should return the median score for the "RETREATING" subscale', function () {
        expect(outcome.RETREATING).toEqual(14)
      })

      it('should return the median score for the "WORRYING" subscale', function () {
        expect(outcome.WORRYING).toEqual(18)
      })

      it('should return the median score for the "RESTING" subscale', function () {
        expect(outcome.RESTING).toEqual(10)
      })

      it('should return the median score for the "Active coping" subscale', function () {
        expect(outcome.ACTIVE_COPING).toEqual(24)
      })

      it('should return the median score for the "Active coping (percentage)" subscale', function () {
        expect(outcome.ACTIVE_COPING_PERCENTAGE).toEqual(33.33) // Not 50% since scales don't start at 0
      })

      it('should return the median score for the "Passive coping" subscale', function () {
        expect(outcome.PASSIVE_COPING).toEqual(42)
      })

      it('should return the median score for the "Passive coping (percentage)" subscale', function () {
        expect(outcome.PASSIVE_COPING_PERCENTAGE).toEqual(33.33) // Not 50% since scales don't start at 0
      })
    })

    describe('when maximum response is passed', function () {
      const outcome = pci_calculation.calculate({ payload: max_response })

      it('should return the maximum score for the "Pain transformation" subscale', function () {
        expect(outcome.PAIN_TRANSFORM).toEqual(16)
      })

      it('should return the maximum score for the "DISTRACTION subscale', function () {
        expect(outcome.DISTRACTION).toEqual(20)
      })

      it('should return the maximum score for the "Reducing demands" subscale', function () {
        expect(outcome.REDUCING_DEMANDS).toEqual(12)
      })

      it('should return the maximum score for the "RETREATING" subscale', function () {
        expect(outcome.RETREATING).toEqual(28)
      })

      it('should return the maximum score for the "WORRYING" subscale', function () {
        expect(outcome.WORRYING).toEqual(36)
      })

      it('should return the maximum score for the "RESTING" subscale', function () {
        expect(outcome.RESTING).toEqual(20)
      })

      it('should return the maximum score for the "Active coping" subscale', function () {
        expect(outcome.ACTIVE_COPING).toEqual(48)
      })

      it('should return the maximum score for the "Active coping (percentage)" subscale', function () {
        expect(outcome.ACTIVE_COPING_PERCENTAGE).toEqual(100)
      })

      it('should return the maximum score for the "Passive coping" subscale', function () {
        expect(outcome.PASSIVE_COPING).toEqual(84)
      })

      it('should return the maximum score for the "Passive coping (percentage)" subscale', function () {
        expect(outcome.PASSIVE_COPING_PERCENTAGE).toEqual(100)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = pci_calculation.calculate({ payload: random_response })

      it('should return the expected score for the "Pain transformation" subscale', function () {
        expect(outcome.PAIN_TRANSFORM).toEqual(10)
      })

      it('should return the expected score for the "DISTRACTION subscale', function () {
        expect(outcome.DISTRACTION).toEqual(12)
      })

      it('should return the expected score for the "Reducing demands" subscale', function () {
        expect(outcome.REDUCING_DEMANDS).toEqual(9)
      })

      it('should return the expected score for the "RETREATING" subscale', function () {
        expect(outcome.RETREATING).toEqual(18)
      })

      it('should return the expected score for the "WORRYING" subscale', function () {
        expect(outcome.WORRYING).toEqual(23)
      })

      it('should return the expected score for the "RESTING" subscale', function () {
        expect(outcome.RESTING).toEqual(11)
      })

      it('should return the expected score for the "Active coping" subscale', function () {
        expect(outcome.ACTIVE_COPING).toEqual(31)
      })

      it('should return the expected score for the "Active coping (percentage)" subscale', function () {
        expect(outcome.ACTIVE_COPING_PERCENTAGE).toEqual(52.78)
      })

      it('should return the expected score for the "Passive coping" subscale', function () {
        expect(outcome.PASSIVE_COPING).toEqual(52)
      })

      it('should return the expected score for the "Passive coping (percentage)" subscale', function () {
        expect(outcome.PASSIVE_COPING_PERCENTAGE).toEqual(49.21)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pci_calculation.calculate({
            payload: {
              ...min_response,
              PCI_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pci_calculation.calculate({
            payload: {
              ...min_response,
              PCI_Q01: 0,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          pci_calculation.calculate({
            payload: {
              ...min_response,
              PCI_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
