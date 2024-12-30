/* eslint-disable no-magic-numbers */
import { expect } from 'chai'

import { InvalidInputsError } from '../../../errors'
import { execute_test_calculation } from '../../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../../lib/get_result_ids_from_calculation_output'
import { CALCULATIONS } from '../../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sf12_test_responses'
import { SF12_INPUT, SF12_SUBSCALES } from './definition'
import { sf12 } from './sf12'

const SCORES = {
  WORST: {
    PHYSICAL_COMPONENT_SCORE: 23.99938,
    MENTAL_COMPONENT_SCORE: 19.06444,
  },
  MEDIAN: {
    PHYSICAL_COMPONENT_SCORE: 48.60638,
    MENTAL_COMPONENT_SCORE: 33.57777,
  },
  BEST: {
    PHYSICAL_COMPONENT_SCORE: 56.57706,
    MENTAL_COMPONENT_SCORE: 60.75781,
  },
  RANDOM: {
    PHYSICAL_COMPONENT_SCORE: 37.10464,
    MENTAL_COMPONENT_SCORE: 46.00098,
  },
}

const sf12_calculation = execute_test_calculation(sf12)

describe('sf12', function () {
  it('sf12 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('sf12')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'SF12_Q01',
        'SF12_Q02',
        'SF12_Q03',
        'SF12_Q04',
        'SF12_Q05',
        'SF12_Q06',
        'SF12_Q07',
        'SF12_Q08',
        'SF12_Q09',
        'SF12_Q10',
        'SF12_Q11',
        'SF12_Q12',
      ]

      const configured_input_ids =
        get_input_ids_from_calculation_blueprint(SF12_INPUT)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "PHYSICAL_HEALTH" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'SF12_Q01',
        'SF12_Q02',
        'SF12_Q03',
        'SF12_Q04',
        'SF12_Q05',
        'SF12_Q08',
      ]
      expect(EXPECTED_INPUT_IDS).toEqual(SF12_SUBSCALES.PHYSICAL_HEALTH)
    })

    it('should have the expected input idss configured for the "MENTAL_HEALTH" subscale	', function () {
      const EXPECTED_INPUT_IDS = [
        'SF12_Q06',
        'SF12_Q07',
        'SF12_Q09',
        'SF12_Q10',
        'SF12_Q11',
        'SF12_Q12',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(SF12_SUBSCALES.MENTAL_HEALTH)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sf12_calculation(best_response)

    it('should return a score for all 2 subscales', function () {
      expect(outcome).toHaveLength(2)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PHYSICAL_COMPONENT_SCORE',
        'MENTAL_COMPONENT_SCORE',
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
      it('should return "Missing" as the score for every subscale', function () {
        const outcome = sf12_calculation({})

        outcome.forEach(subscale => {
          const score = subscale?.result
          expect(score).toEqual(undefined)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges for question 1', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q01: 6,
          }),
        ).toThrow(InvalidInputsError)
      })
      it('should throw an InvalidInputsError for question 4', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q04: 3,
          }),
        ).toThrow(InvalidInputsError)
      })
      it('should throw an InvalidInputsError for question 9', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q09: 7,
          }),
        ).toThrow(InvalidInputsError)
      })
      it('should pass for question 9', function () {
        expect(() =>
          sf12_calculation({
            SF12_Q09: 6,
          }),
        ).not.toThrow(InvalidInputsError)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when the worst response is passed', function () {
      it('should return the worst score for every subscale', function () {
        const outcome = sf12_calculation(worst_response)

        outcome.forEach(subscale => {
          const score = subscale?.result
          //@ts-expect-error fix later
          expect(score).toEqual(SCORES.WORST[subscale.subresult_id])
        })
      })
    })

    describe('when the best response is passed', function () {
      it('should return the best score for every scare', function () {
        const outcome = sf12_calculation(best_response)

        outcome.forEach(subscale => {
          const score = subscale?.result
          //@ts-expect-error fix later
          expect(score).toEqual(SCORES.BEST[subscale.subresult_id])
        })
      })
    })

    describe('when a median response is passed', function () {
      it('should return the median score for every scare', function () {
        const outcome = sf12_calculation(median_response)

        outcome.forEach(subscale => {
          const score = subscale?.result
          //@ts-expect-error fix later
          expect(score).toEqual(SCORES.MEDIAN[subscale.subresult_id])
        })
      })
    })

    describe('when a random response is passed', function () {
      it('should return the random score for every scare', function () {
        const outcome = sf12_calculation(random_response)
        outcome.forEach(subscale => {
          const score = subscale?.result
          //@ts-expect-error fix later
          expect(score).toEqual(SCORES.RANDOM[subscale.subresult_id])
        })
      })
    })
  })
})
