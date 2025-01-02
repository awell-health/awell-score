/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { Score } from '../../classes'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { ScoreLibrary } from '../library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../src/calculation_suite/calculations/shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/pci_test_responses'
import { PCI_SUBSCALES } from './definition/pci_subscales'
import { pci } from './pci'

const pci_calculation = execute_test_calculation(pci)

describe('pci', function () {
  it('pci calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('pci')
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

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(PCI_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Pain transforming" subscale', function () {
      const EXPECTED_INPUT_IDS = ['PCI_Q15', 'PCI_Q16', 'PCI_Q18', 'PCI_Q30']

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('PAIN_TRANSFORM')(PCI_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "DISTRACTION" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PCI_Q09',
        'PCI_Q19',
        'PCI_Q20',
        'PCI_Q21',
        'PCI_Q22',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('DISTRACTION')(PCI_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "Reducing demands subscale', function () {
      const EXPECTED_INPUT_IDS = ['PCI_Q02', 'PCI_Q03', 'PCI_Q04']

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('REDUCING_DEMANDS')(PCI_SUBSCALES),
      )
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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('RETREATING')(PCI_SUBSCALES),
      )
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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('WORRYING')(PCI_SUBSCALES),
      )
    })

    it('should have the expected input idss configured for the "RESTING" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'PCI_Q01',
        'PCI_Q05',
        'PCI_Q06',
        'PCI_Q07',
        'PCI_Q08',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('RESTING')(PCI_SUBSCALES),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = pci_calculation(min_response)

    it('should return a score for all subscales (n=6) and the results of the coping strategy (n=4)', function () {
      expect(outcome).toHaveLength(10)
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

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = pci_calculation({})

      it('should return undefined as the result for "Pain transformation" subscale', function () {
        const score = view_result('PAIN_TRANSFORM')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "DISTRACTION subscale', function () {
        const score = view_result('DISTRACTION')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "Reducing demands" subscale', function () {
        const score = view_result('REDUCING_DEMANDS')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "RETREATING" subscale', function () {
        const score = view_result('RETREATING')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "WORRYING" subscale', function () {
        const score = view_result('WORRYING')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "RESTING" subscale', function () {
        const score = view_result('RESTING')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "Active coping" subscale', function () {
        const score = view_result('ACTIVE_COPING')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "Active coping (percentage)" subscale', function () {
        const score = view_result('ACTIVE_COPING_PERCENTAGE')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "Passive coping" subscale', function () {
        const score = view_result('PASSIVE_COPING')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "Passive coping (percentage)" subscale', function () {
        const score = view_result('PASSIVE_COPING_PERCENTAGE')(outcome)
        expect(score).toEqual(undefined)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when minimum response is passed', function () {
      const outcome = pci_calculation(min_response)

      it('should return the minimum score for the "Pain transformation" subscale', function () {
        const score = view_result('PAIN_TRANSFORM')(outcome)
        const PAIN_TRANSFORM_MIN_SCORE = 4

        expect(score).toEqual(PAIN_TRANSFORM_MIN_SCORE)
      })

      it('should return the minimum score for the "DISTRACTION subscale', function () {
        const score = view_result('DISTRACTION')(outcome)
        const DISTRACTION_MIN_SCORE = 5

        expect(score).toEqual(DISTRACTION_MIN_SCORE)
      })

      it('should return the minimum score for the "Reducing demands" subscale', function () {
        const score = view_result('REDUCING_DEMANDS')(outcome)
        const REDUCING_DEMANDS_MIN_SCORE = 3

        expect(score).toEqual(REDUCING_DEMANDS_MIN_SCORE)
      })

      it('should return the minimum score for the "RETREATING" subscale', function () {
        const score = view_result('RETREATING')(outcome)
        const RETREATING_MIN_SCORE = 7

        expect(score).toEqual(RETREATING_MIN_SCORE)
      })

      it('should return the minimum score for the "WORRYING" subscale', function () {
        const score = view_result('WORRYING')(outcome)
        const WORRYING_MIN_SCORE = 9

        expect(score).toEqual(WORRYING_MIN_SCORE)
      })

      it('should return the minimum score for the "RESTING" subscale', function () {
        const score = view_result('RESTING')(outcome)
        const RESTING_MIN_SCORE = 5

        expect(score).toEqual(RESTING_MIN_SCORE)
      })

      it('should return the minimum score for the "Active coping" subscale', function () {
        const score = view_result('ACTIVE_COPING')(outcome)
        const ACTIVE_COPING_MIN_SCORE = 12

        expect(score).toEqual(ACTIVE_COPING_MIN_SCORE)
      })

      it('should return the minimum score for the "Active coping (percentage)" subscale', function () {
        const score = view_result('ACTIVE_COPING_PERCENTAGE')(outcome)
        const ACTIVE_COPING_PERCENTAGE_MIN_SCORE = 0

        expect(score).toEqual(ACTIVE_COPING_PERCENTAGE_MIN_SCORE)
      })

      it('should return the minimum score for the "Passive coping" subscale', function () {
        const score = view_result('PASSIVE_COPING')(outcome)
        const PASSIVE_COPING_MIN_SCORE = 21

        expect(score).toEqual(PASSIVE_COPING_MIN_SCORE)
      })

      it('should return the minimum score for the "Passive coping (percentage)" subscale', function () {
        const score = view_result('PASSIVE_COPING_PERCENTAGE')(outcome)
        const PASSIVE_COPING_PERCENTAGE_MIN_SCORE = 0

        expect(score).toEqual(PASSIVE_COPING_PERCENTAGE_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = pci_calculation(median_response)

      it('should return the median score for the "Pain transformation" subscale', function () {
        const score = view_result('PAIN_TRANSFORM')(outcome)
        const PAIN_TRANSFORM_MEDIAN_SCORE = 8

        expect(score).toEqual(PAIN_TRANSFORM_MEDIAN_SCORE)
      })

      it('should return the median score for the "DISTRACTION subscale', function () {
        const score = view_result('DISTRACTION')(outcome)
        const DISTRACTION_MEDIAN_SCORE = 10

        expect(score).toEqual(DISTRACTION_MEDIAN_SCORE)
      })

      it('should return the median score for the "Reducing demands" subscale', function () {
        const score = view_result('REDUCING_DEMANDS')(outcome)
        const REDUCING_DEMANDS_MEDIAN_SCORE = 6

        expect(score).toEqual(REDUCING_DEMANDS_MEDIAN_SCORE)
      })

      it('should return the median score for the "RETREATING" subscale', function () {
        const score = view_result('RETREATING')(outcome)
        const RETREATING_MEDIAN_SCORE = 14

        expect(score).toEqual(RETREATING_MEDIAN_SCORE)
      })

      it('should return the median score for the "WORRYING" subscale', function () {
        const score = view_result('WORRYING')(outcome)
        const WORRYING_MEDIAN_SCORE = 18

        expect(score).toEqual(WORRYING_MEDIAN_SCORE)
      })

      it('should return the median score for the "RESTING" subscale', function () {
        const score = view_result('RESTING')(outcome)
        const RESTING_MEDIAN_SCORE = 10

        expect(score).toEqual(RESTING_MEDIAN_SCORE)
      })

      it('should return the median score for the "Active coping" subscale', function () {
        const score = view_result('ACTIVE_COPING')(outcome)
        const ACTIVE_COPING_MEDIAN_SCORE = 24

        expect(score).toEqual(ACTIVE_COPING_MEDIAN_SCORE)
      })

      it('should return the median score for the "Active coping (percentage)" subscale', function () {
        const score = view_result('ACTIVE_COPING_PERCENTAGE')(outcome)
        const ACTIVE_COPING_PERCENTAGE_MEDIAN_SCORE = 33.33 // Not 50% since scales don't start at 0

        expect(score).toEqual(ACTIVE_COPING_PERCENTAGE_MEDIAN_SCORE)
      })

      it('should return the median score for the "Passive coping" subscale', function () {
        const score = view_result('PASSIVE_COPING')(outcome)
        const PASSIVE_COPING_MEDIAN_SCORE = 42

        expect(score).toEqual(PASSIVE_COPING_MEDIAN_SCORE)
      })

      it('should return the median score for the "Passive coping (percentage)" subscale', function () {
        const score = view_result('PASSIVE_COPING_PERCENTAGE')(outcome)
        const PASSIVE_COPING_PERCENTAGE_MEDIAN_SCORE = 33.33 // Not 50% since scales don't start at 0

        expect(score).toEqual(PASSIVE_COPING_PERCENTAGE_MEDIAN_SCORE)
      })
    })

    describe('when maximum response is passed', function () {
      const outcome = pci_calculation(max_response)

      it('should return the maximum score for the "Pain transformation" subscale', function () {
        const score = view_result('PAIN_TRANSFORM')(outcome)
        const PAIN_TRANSFORM_MAX_SCORE = 16

        expect(score).toEqual(PAIN_TRANSFORM_MAX_SCORE)
      })

      it('should return the maximum score for the "DISTRACTION subscale', function () {
        const score = view_result('DISTRACTION')(outcome)
        const DISTRACTION_MAX_SCORE = 20

        expect(score).toEqual(DISTRACTION_MAX_SCORE)
      })

      it('should return the maximum score for the "Reducing demands" subscale', function () {
        const score = view_result('REDUCING_DEMANDS')(outcome)
        const REDUCING_DEMANDS_MAX_SCORE = 12

        expect(score).toEqual(REDUCING_DEMANDS_MAX_SCORE)
      })

      it('should return the maximum score for the "RETREATING" subscale', function () {
        const score = view_result('RETREATING')(outcome)
        const RETREATING_MAX_SCORE = 28

        expect(score).toEqual(RETREATING_MAX_SCORE)
      })

      it('should return the maximum score for the "WORRYING" subscale', function () {
        const score = view_result('WORRYING')(outcome)
        const WORRYING_MAX_SCORE = 36

        expect(score).toEqual(WORRYING_MAX_SCORE)
      })

      it('should return the maximum score for the "RESTING" subscale', function () {
        const score = view_result('RESTING')(outcome)
        const RESTING_MAX_SCORE = 20

        expect(score).toEqual(RESTING_MAX_SCORE)
      })

      it('should return the maximum score for the "Active coping" subscale', function () {
        const score = view_result('ACTIVE_COPING')(outcome)
        const ACTIVE_COPING_MAX_SCORE = 48

        expect(score).toEqual(ACTIVE_COPING_MAX_SCORE)
      })

      it('should return the maximum score for the "Active coping (percentage)" subscale', function () {
        const score = view_result('ACTIVE_COPING_PERCENTAGE')(outcome)
        const ACTIVE_COPING_PERCENTAGE_MAX_SCORE = 100

        expect(score).toEqual(ACTIVE_COPING_PERCENTAGE_MAX_SCORE)
      })

      it('should return the maximum score for the "Passive coping" subscale', function () {
        const score = view_result('PASSIVE_COPING')(outcome)
        const PASSIVE_COPING_MAX_SCORE = 84

        expect(score).toEqual(PASSIVE_COPING_MAX_SCORE)
      })

      it('should return the maximum score for the "Passive coping (percentage)" subscale', function () {
        const score = view_result('PASSIVE_COPING_PERCENTAGE')(outcome)
        const PASSIVE_COPING_PERCENTAGE_MAX_SCORE = 100

        expect(score).toEqual(PASSIVE_COPING_PERCENTAGE_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = pci_calculation(random_response)

      it('should return the expected score for the "Pain transformation" subscale', function () {
        const score = view_result('PAIN_TRANSFORM')(outcome)
        const EXPECTED_SCORE = 10

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "DISTRACTION subscale', function () {
        const score = view_result('DISTRACTION')(outcome)
        const EXPECTED_SCORE = 12

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Reducing demands" subscale', function () {
        const score = view_result('REDUCING_DEMANDS')(outcome)
        const EXPECTED_SCORE = 9

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "RETREATING" subscale', function () {
        const score = view_result('RETREATING')(outcome)
        const EXPECTED_SCORE = 18

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "WORRYING" subscale', function () {
        const score = view_result('WORRYING')(outcome)
        const EXPECTED_SCORE = 23

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "RESTING" subscale', function () {
        const score = view_result('RESTING')(outcome)
        const EXPECTED_SCORE = 11

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Active coping" subscale', function () {
        const score = view_result('ACTIVE_COPING')(outcome)
        const EXPECTED_SCORE = 31

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Active coping (percentage)" subscale', function () {
        const score = view_result('ACTIVE_COPING_PERCENTAGE')(outcome)
        const EXPECTED_SCORE = 52.78

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Passive coping" subscale', function () {
        const score = view_result('PASSIVE_COPING')(outcome)
        const EXPECTED_SCORE = 52

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Passive coping (percentage)" subscale', function () {
        const score = view_result('PASSIVE_COPING_PERCENTAGE')(outcome)
        const EXPECTED_SCORE = 49.21

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pci_calculation({
            PCI_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pci_calculation({
            PCI_Q01: 0,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          pci_calculation({
            PCI_Q01: 5,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
