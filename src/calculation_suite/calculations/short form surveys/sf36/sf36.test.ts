/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../../lib/view_result'
import { CALCULATIONS } from '../../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sf36_test_responses'
import { SF36_SUBSCALES } from './definition/sf36_subscales'
import { sf36 } from './sf36'

// Note that all items are scored so that a high score defines a more favorable health state.
const WORST_SCORE = 0
const BEST_SCORE = 100

const sf36_calculation = execute_test_calculation(sf36)

describe('sf36', function () {
  it('sf36 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('sf36')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'SF36_Q01',
        // 'SF36_Q02', Question 2 is not used in any subscale for score calculation
        'SF36_Q03',
        'SF36_Q04',
        'SF36_Q05',
        'SF36_Q06',
        'SF36_Q07',
        'SF36_Q08',
        'SF36_Q09',
        'SF36_Q10',
        'SF36_Q11',
        'SF36_Q12',
        'SF36_Q13',
        'SF36_Q14',
        'SF36_Q15',
        'SF36_Q16',
        'SF36_Q17',
        'SF36_Q18',
        'SF36_Q19',
        'SF36_Q20',
        'SF36_Q21',
        'SF36_Q22',
        'SF36_Q23',
        'SF36_Q24',
        'SF36_Q25',
        'SF36_Q26',
        'SF36_Q27',
        'SF36_Q28',
        'SF36_Q29',
        'SF36_Q30',
        'SF36_Q31',
        'SF36_Q32',
        'SF36_Q33',
        'SF36_Q34',
        'SF36_Q35',
        'SF36_Q36',
      ]

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(SF36_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Physical functioning" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SF36_Q03',
        'SF36_Q04',
        'SF36_Q05',
        'SF36_Q06',
        'SF36_Q07',
        'SF36_Q08',
        'SF36_Q09',
        'SF36_Q10',
        'SF36_Q11',
        'SF36_Q12',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PHYSICAL_FUNCTIONING')(
          SF36_SUBSCALES
        )
      )
    })

    it('should have the expected input idss configured for the "Role limitations due to physical health" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'SF36_Q13',
        'SF36_Q14',
        'SF36_Q15',
        'SF36_Q16',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('ROLE_LIMITATIONS_PHYSICAL_HEALTH')(
          SF36_SUBSCALES
        )
      )
    })

    it('should have the expected input idss configured for the "Role limitations due to emotional problems" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF36_Q17', 'SF36_Q18', 'SF36_Q19']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale(
          'ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS'
        )(SF36_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Energy/fatigue" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'SF36_Q23',
        'SF36_Q27',
        'SF36_Q29',
        'SF36_Q31',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('ENERGY_FATIGUE')(SF36_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "Emotional well-being" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SF36_Q24',
        'SF36_Q25',
        'SF36_Q26',
        'SF36_Q28',
        'SF36_Q30',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('EMOTIONAL_WELLBEING')(
          SF36_SUBSCALES
        )
      )
    })

    it('should have the expected input idss configured for the "Social functioning" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF36_Q20', 'SF36_Q32']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('SOCIAL_FUNCTIONING')(
          SF36_SUBSCALES
        )
      )
    })

    it('should have the expected input idss configured for the "Pain" subscale', function () {
      const EXPECTED_INPUT_IDS = ['SF36_Q21', 'SF36_Q22']

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PAIN')(SF36_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "General health" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SF36_Q01',
        'SF36_Q33',
        'SF36_Q34',
        'SF36_Q35',
        'SF36_Q36',
      ]

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('GENERAL_HEALTH')(SF36_SUBSCALES)
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sf36_calculation(best_response)

    it('should return a score for all 8 subscales', function () {
      expect(outcome).to.have.length(8)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PHYSICAL_FUNCTIONING',
        'ROLE_LIMITATIONS_PHYSICAL_HEALTH',
        'ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS',
        'ENERGY_FATIGUE',
        'EMOTIONAL_WELLBEING',
        'SOCIAL_FUNCTIONING',
        'PAIN',
        'GENERAL_HEALTH',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).to.eql(
        extracted_calculation_ids_from_outcome
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return "Missing" as the score for every subscale', function () {
        const outcome = sf36_calculation({})

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).to.eql(undefined)
        })
      })
    })
    describe('when one input per subscale is answered with the best response', function () {
      it('should return the standardized score of that input as the score for every subscale', function () {
        const outcome = sf36_calculation({
          SF36_Q03: 3, // Physical functioning subscale
          SF36_Q13: 2, // Role limitations due to physical health	subscale
          SF36_Q17: 2, // Role limitations due to emotional problems subscale
          SF36_Q23: 1, // Energy/fatigue subscale
          SF36_Q24: 6, // Emotional well-being subscale
          SF36_Q20: 1, // Social functioning subscale
          SF36_Q21: 1, // Pain subscale
          SF36_Q01: 1, // General health	subscale
        })

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).to.eql(BEST_SCORE)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst possible response (i.e. worst health state) is passed', function () {
      it('should return the worst score for every subscale', function () {
        const outcome = sf36_calculation(worst_response)

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).to.eql(WORST_SCORE)
        })
      })
    })

    describe('when a median response is passed', function () {
      const outcome = sf36_calculation(median_response)
      const DEFAULT_MEDIAN_SCORE = 50

      it('should return the expected score for "Physical functioning" subscale', function () {
        const score = view_result('PHYSICAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role limitations due to physical health" subscale', function () {
        const score = view_result('ROLE_LIMITATIONS_PHYSICAL_HEALTH')(outcome)
        const EXPECTED_SCORE = 0

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role limitations due to emotional problems" subscale', function () {
        const score = view_result('ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS')(
          outcome
        )
        const EXPECTED_SCORE = 0

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Energy/fatigue" subscale', function () {
        const score = view_result('ENERGY_FATIGUE')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Emotional well-being" subscale', function () {
        const score = view_result('EMOTIONAL_WELLBEING')(outcome)
        const EXPECTED_SCORE = 48

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Social functioning" subscale', function () {
        const score = view_result('SOCIAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Pain" subscale', function () {
        const score = view_result('PAIN')(outcome)
        const EXPECTED_SCORE = 55

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "General health" subscale', function () {
        const score = view_result('GENERAL_HEALTH')(outcome)
        const EXPECTED_SCORE = DEFAULT_MEDIAN_SCORE

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })

    describe('when best possible response (i.e. best health state) is passed', function () {
      it('should return the best score for every subscale', function () {
        const outcome = sf36_calculation(best_response)

        outcome.forEach(subscale => {
          const score = subscale.result
          expect(score).to.eql(BEST_SCORE)
        })
      })
    })

    describe('when a random response is passed', function () {
      const outcome = sf36_calculation(random_response)

      it('should return the expected score for "Physical functioning" subscale', function () {
        const score = view_result('PHYSICAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = 40

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role limitations due to physical health	" subscale', function () {
        const score = view_result('ROLE_LIMITATIONS_PHYSICAL_HEALTH')(outcome)
        const EXPECTED_SCORE = 50

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Role limitations due to emotional problems" subscale', function () {
        const score = view_result('ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS')(
          outcome
        )
        const EXPECTED_SCORE = 33.33

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Energy/fatigue" subscale', function () {
        const score = view_result('ENERGY_FATIGUE')(outcome)
        const EXPECTED_SCORE = 65

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Emotional well-being" subscale', function () {
        const score = view_result('EMOTIONAL_WELLBEING')(outcome)
        const EXPECTED_SCORE = 44

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Social functioning" subscale', function () {
        const score = view_result('SOCIAL_FUNCTIONING')(outcome)
        const EXPECTED_SCORE = 50

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "Pain" subscale', function () {
        const score = view_result('PAIN')(outcome)
        const EXPECTED_SCORE = 65

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score for "General health" subscale', function () {
        const score = view_result('GENERAL_HEALTH')(outcome)
        const EXPECTED_SCORE = 45

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf36_calculation({
            SF36_Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf36_calculation({
            SF36_Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf36_calculation({
            SF36_Q01: 6,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
