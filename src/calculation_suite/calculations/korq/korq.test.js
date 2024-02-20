// @flow
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response
} from './__testdata__/korq_test_responses'
import { KORQ_INPUTS } from './definition'
import { KORQ_SUBSCALES } from './definition/korq_subscales'
import { korq } from './korq'

const korq_calculation = execute_test_calculation(korq)

const scores = {
  best: 116,
  worst: 29,
  median: 58,
  random: 54
}

describe('KORQ', function () {
  it('KORQ calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('korq')
  })

  describe('basic assumptions', function () {
    const outcome = korq_calculation(best_response)

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'KORQ_TOTAL_SCORE',
        'KORQ_SYMPTOMS',
        'KORQ_ACTIVITY_LIMITATIONS'
      ]

      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).to.eql(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_KORQ',
          'Q02_KORQ',
          'Q03_KORQ',
          'Q04_KORQ',
          'Q05_KORQ',
          'Q06_KORQ',
          'Q07_KORQ',
          'Q08_KORQ',
          'Q09_KORQ',
          'Q10_KORQ',
          'Q11_KORQ',
          'Q12_KORQ',
          'Q13_KORQ',
          'Q14_KORQ',
          'Q15_KORQ',
          'Q16_KORQ',
          'Q17_KORQ',
          'Q18_KORQ',
          'Q19_KORQ',
          'Q20_KORQ',
          'Q21_KORQ',
          'Q22_KORQ',
          'Q23_KORQ',
          'Q24_KORQ',
          'Q25_KORQ',
          'Q26_KORQ',
          'Q27_KORQ',
          'Q28_KORQ',
          'Q29_KORQ'
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(KORQ_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
      it('should have the expected input ids configured for the "KORQ_ACTIVITY_LIMITATIONS" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01_KORQ',
          'Q02_KORQ',
          'Q03_KORQ',
          'Q04_KORQ',
          'Q05_KORQ',
          'Q06_KORQ',
          'Q07_KORQ',
          'Q08_KORQ',
          'Q09_KORQ',
          'Q10_KORQ',
          'Q11_KORQ',
          'Q12_KORQ',
          'Q13_KORQ',
          'Q14_KORQ',
          'Q15_KORQ',
          'Q16_KORQ',
          'Q17_KORQ',
          'Q18_KORQ'
        ].sort()

        expect(EXPECTED_INPUT_IDS).to.eql(
          KORQ_SUBSCALES.KORQ_ACTIVITY_LIMITATIONS
        )
      })
      it('should have the expected input ids configured for the "KORQ_SYMPTOMS" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'Q19_KORQ',
          'Q20_KORQ',
          'Q21_KORQ',
          'Q22_KORQ',
          'Q23_KORQ',
          'Q24_KORQ',
          'Q25_KORQ',
          'Q26_KORQ',
          'Q27_KORQ',
          'Q28_KORQ',
          'Q29_KORQ'
        ].sort()

        expect(EXPECTED_INPUT_IDS).to.eql(KORQ_SUBSCALES.KORQ_SYMPTOMS)
      })
    })
  })

  describe('when an answer is below the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        korq_calculation({
          Q01_KORQ: -1
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('when an answer is above the expected range', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        korq_calculation({
          Q01_KORQ: 6
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('when there are non-numerical answers', function () {
    it('should throw an InvalidInputsError', function () {
      expect(() =>
        korq_calculation({
          Q01_KORQ: "I'm not a number"
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('when called with an empty response', function () {
    const outcome = korq_calculation({})

    it('should return missing status for the score', function () {
      expect(outcome[0].status).to.eql(MISSING_STATUS)
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = korq_calculation(worst_response)

      it('should return the worst score', function () {
        const score = view_result('KORQ_TOTAL_SCORE')(outcome)

        expect(score).to.eql(scores.worst)
      })
    })

    describe('when called with the best response', function () {
      const outcome = korq_calculation(best_response)
      it('should return the best score', function () {
        const score = view_result('KORQ_TOTAL_SCORE')(outcome)

        expect(score).to.eql(scores.best)
      })
    })

    describe('when called with a median response', function () {
      const outcome = korq_calculation(median_response)

      it('should return the median score', function () {
        const score = view_result('KORQ_TOTAL_SCORE')(outcome)

        expect(score).to.eql(scores.median)
      })
    })

    describe('when called with the random response', function () {
      const outcome = korq_calculation(random_response)

      it('should return the exepected score', function () {
        const score = view_result('KORQ_TOTAL_SCORE')(outcome)

        expect(score).to.eql(scores.random)
      })
    })
  })
})
