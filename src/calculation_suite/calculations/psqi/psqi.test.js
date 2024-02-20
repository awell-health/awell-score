// @flow
/* eslint-disable no-magic-numbers */
import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response
} from './__testdata__/psqi_test_responses'
import { PSQI_INPUT } from './definition/psqi_input'
import { PSQI_SUBSCALES } from './definition/psqi_subscales'
import { psqi } from './psqi'

const WORST_SCORE = 21
const BEST_SCORE = 0

const psqi_calculation = execute_test_calculation(psqi)

describe('psqi', function () {
  it('psqi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('psqi')
  })

  describe('the score includes the correct input fields', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05a',
          'Q05b',
          'Q05c',
          'Q05d',
          'Q05e',
          'Q05f',
          'Q05g',
          'Q05h',
          'Q05i',
          'Q05j',
          'Q05jj',
          'Q06',
          'Q07',
          'Q08',
          'Q09'
        ]
        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PSQI_INPUT)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('basic assumptions', function () {
      const outcome = psqi_calculation(best_response)

      it('should have the expected result ids', function () {
        const EXPECTED_RESULT_IDS = [
          'PSQI_TOTAL_SCORE',
          'SUBJECTIVE_SLEEP_QUALITY',
          'SLEEP_LATENCY',
          'SLEEP_DURATION',
          'HABITUAL_SLEEP_EFFICIENCY',
          'SLEEP_DISTURBANCES',
          'USE_OF_SLEEPING_MEDICATION',
          'DAYTIME_DYSFUNCTION'
        ]

        const configured_calculation_ids =
          get_result_ids_from_calculation_output(outcome)

        expect(configured_calculation_ids).to.eql(EXPECTED_RESULT_IDS)
      })
      it('should have the expected input ids configured for the "SUBJECTIVE_SLEEP_QUALITY"	', function () {
        const EXPECTED_INPUT_IDS = ['Q09']

        expect(EXPECTED_INPUT_IDS).to.eql(
          PSQI_SUBSCALES.SUBJECTIVE_SLEEP_QUALITY
        )
      })

      it('should have the expected input ids configured for the "SLEEP_LATENCY"	', function () {
        const EXPECTED_INPUT_IDS = ['Q02', 'Q05a']

        expect(EXPECTED_INPUT_IDS).to.eql(PSQI_SUBSCALES.SLEEP_LATENCY)
      })

      it('should have the expected input ids configured for the "SLEEP_DURATION"	', function () {
        const EXPECTED_INPUT_IDS = ['Q04']

        expect(EXPECTED_INPUT_IDS).to.eql(PSQI_SUBSCALES.SLEEP_DURATION)
      })

      it('should have the expected input ids configured for the "HABITUAL_SLEEP_EFFICIENCY"	', function () {
        const EXPECTED_INPUT_IDS = ['Q04', 'Q03', 'Q01']

        expect(EXPECTED_INPUT_IDS).to.eql(
          PSQI_SUBSCALES.HABITUAL_SLEEP_EFFICIENCY
        )
      })

      it('should have the expected input ids configured for the "SLEEP_DISTURBANCES"	', function () {
        const EXPECTED_INPUT_IDS = [
          'Q05b',
          'Q05c',
          'Q05d',
          'Q05e',
          'Q05f',
          'Q05g',
          'Q05h',
          'Q05i',
          'Q05j'
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(PSQI_SUBSCALES.SLEEP_DISTURBANCES)
      })

      it('should have the expected input ids configured for the "USE_OF_SLEEPING_MEDICATION"	', function () {
        const EXPECTED_INPUT_IDS = ['Q06']

        expect(EXPECTED_INPUT_IDS).to.eql(
          PSQI_SUBSCALES.USE_OF_SLEEPING_MEDICATION
        )
      })

      it('should have the expected input ids configured for the "DAYTIME_DYSFUNCTION"	', function () {
        const EXPECTED_INPUT_IDS = ['Q07', 'Q08']

        expect(EXPECTED_INPUT_IDS).to.eql(PSQI_SUBSCALES.DAYTIME_DYSFUNCTION)
      })
    })
  })

  describe('Input validations', function () {
    it('when an answer is below the expected range for question with hours: should throw an InvalidInputsError', function () {
      expect(() =>
        psqi_calculation({
          Q01: -1
        })
      ).to.throw(InvalidInputsError)
    })

    it('when an answer is above the expected range for question with hours: should throw an InvalidInputsError', function () {
      expect(() =>
        psqi_calculation({
          Q01: 25
        })
      ).to.throw(InvalidInputsError)
    })

    it('when there are non-numerical answers: should throw an InvalidInputsError', function () {
      expect(() =>
        psqi_calculation({
          Q01: "I'm not a number"
        })
      ).to.throw(InvalidInputsError)
    })

    it('when an answer is below the expected range for question with standard input: should throw an InvalidInputsError', function () {
      expect(() =>
        psqi_calculation({
          Q06: -1
        })
      ).to.throw(InvalidInputsError)
    })

    it('when an answer is above the expected range for question with standard input: should throw an InvalidInputsError', function () {
      expect(() =>
        psqi_calculation({
          Q06: 5
        })
      ).to.throw(InvalidInputsError)
    })

    it('when there are non-numerical answers with standard input: should throw an InvalidInputsError', function () {
      expect(() =>
        psqi_calculation({
          Q06: "I'm not a number"
        })
      ).to.throw(InvalidInputsError)
    })
  })

  describe('Score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = psqi_calculation(worst_response)

      it('Total Score: should return the worst score', function () {
        const score = view_result('PSQI_TOTAL_SCORE')(outcome)

        expect(score).to.eql(WORST_SCORE)
      })

      it('Subjective Sleep Quality subscale: should return the worst score', function () {
        const score = view_result('SUBJECTIVE_SLEEP_QUALITY')(outcome)

        expect(score).to.eql(3)
      })

      it('Sleep Latency subscale: should return the worst score', function () {
        const score = view_result('SLEEP_LATENCY')(outcome)

        expect(score).to.eql(3)
      })

      it('Sleep Duration subscale: should return the worst score', function () {
        const score = view_result('SLEEP_DURATION')(outcome)

        expect(score).to.eql(3)
      })

      it('Habitual Sleep Efficiency subscale: hould return the worst score', function () {
        const score = view_result('HABITUAL_SLEEP_EFFICIENCY')(outcome)

        expect(score).to.eql(3)
      })

      it('Sleep Disturbances subscale: should return the worst score', function () {
        const score = view_result('SLEEP_DISTURBANCES')(outcome)

        expect(score).to.eql(3)
      })

      it('Use of Sleeping Medication subscale: should return the worst score', function () {
        const score = view_result('USE_OF_SLEEPING_MEDICATION')(outcome)

        expect(score).to.eql(3)
      })

      it('Daytime Disfunction subscale: should return the worst score', function () {
        const score = view_result('DAYTIME_DYSFUNCTION')(outcome)

        expect(score).to.eql(3)
      })
    })

    describe('when called with the best response', function () {
      const outcome = psqi_calculation(best_response)
      it('Total score: should return the best score', function () {
        const score = view_result('PSQI_TOTAL_SCORE')(outcome)

        expect(score).to.eql(BEST_SCORE)
      })

      it('Subjective Sleep Quality subscale: should return the best score', function () {
        const score = view_result('SUBJECTIVE_SLEEP_QUALITY')(outcome)

        expect(score).to.eql(0)
      })

      it('Sleep Latency subscale: should return the best score', function () {
        const score = view_result('SLEEP_LATENCY')(outcome)

        expect(score).to.eql(0)
      })

      it('Sleep Duration subscale: should return the best score', function () {
        const score = view_result('SLEEP_DURATION')(outcome)

        expect(score).to.eql(0)
      })

      it('Habitual Sleep Efficiency subscale: should return the best score', function () {
        const score = view_result('HABITUAL_SLEEP_EFFICIENCY')(outcome)

        expect(score).to.eql(0)
      })

      it('Sleep Disturbances subscale: should return the best score', function () {
        const score = view_result('SLEEP_DISTURBANCES')(outcome)

        expect(score).to.eql(0)
      })

      it('Use of Sleeping Medication subscale: should return the best score', function () {
        const score = view_result('USE_OF_SLEEPING_MEDICATION')(outcome)

        expect(score).to.eql(0)
      })

      it('Daytime Disfunction subscale: should return the best score', function () {
        const score = view_result('DAYTIME_DYSFUNCTION')(outcome)

        expect(score).to.eql(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = psqi_calculation(median_response)

      it('Total score: should return the median score', function () {
        const score = view_result('PSQI_TOTAL_SCORE')(outcome)

        expect(score).to.eql(10)
      })

      it('Subjective Sleep Quality subscale: should return the median score', function () {
        const score = view_result('SUBJECTIVE_SLEEP_QUALITY')(outcome)

        expect(score).to.eql(1)
      })

      it('Sleep Latency subscale: should return the median score', function () {
        const score = view_result('SLEEP_LATENCY')(outcome)

        expect(score).to.eql(2)
      })

      it('Sleep Duration subscale: should return the median score', function () {
        const score = view_result('SLEEP_DURATION')(outcome)

        expect(score).to.eql(1)
      })

      it('Habitual Sleep Efficiency subscale: should return the median score', function () {
        const score = view_result('HABITUAL_SLEEP_EFFICIENCY')(outcome)

        expect(score).to.eql(2)
      })

      it('Sleep Disturbances subscale: should return the median score', function () {
        const score = view_result('SLEEP_DISTURBANCES')(outcome)

        expect(score).to.eql(1)
      })

      it('Use of Sleeping Medication subscale: should return the median score', function () {
        const score = view_result('USE_OF_SLEEPING_MEDICATION')(outcome)

        expect(score).to.eql(1)
      })

      it('Daytime Disfunction subscale: should return the median score', function () {
        const score = view_result('DAYTIME_DYSFUNCTION')(outcome)

        expect(score).to.eql(2)
      })
    })

    describe('when called with the random response', function () {
      const outcome = psqi_calculation(random_response)

      it('Total score: should return the exepected score', function () {
        const score = view_result('PSQI_TOTAL_SCORE')(outcome)

        expect(score).to.eql(9)
      })

      it('Subjective Sleep Quality subscale: should return the random score', function () {
        const score = view_result('SUBJECTIVE_SLEEP_QUALITY')(outcome)

        expect(score).to.eql(1)
      })

      it('Sleep Latency subscale: should return the random score', function () {
        const score = view_result('SLEEP_LATENCY')(outcome)

        expect(score).to.eql(2)
      })

      it('Sleep Duration subscale: should return the random score', function () {
        const score = view_result('SLEEP_DURATION')(outcome)

        expect(score).to.eql(1)
      })

      it('Habitual Sleep Efficiency subscale: should return the random score', function () {
        const score = view_result('HABITUAL_SLEEP_EFFICIENCY')(outcome)

        expect(score).to.eql(0)
      })

      it('Sleep Disturbances subscale: should return the random score', function () {
        const score = view_result('SLEEP_DISTURBANCES')(outcome)

        expect(score).to.eql(1)
      })

      it('Use of Sleeping Medication subscale: should return the random score', function () {
        const score = view_result('USE_OF_SLEEPING_MEDICATION')(outcome)

        expect(score).to.eql(3)
      })
      it('Daytime Disfunction subscale: should return the random score', function () {
        const score = view_result('DAYTIME_DYSFUNCTION')(outcome)

        expect(score).to.eql(1)
      })
    })
  })

  describe('When called with an empty response', function () {
    const outcome = psqi_calculation({})
    it('Total score: should return missing for the result status and undefined score', function () {
      const status = view_status('PSQI_TOTAL_SCORE')(outcome)
      const score = view_result('PSQI_TOTAL_SCORE')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })

    it('should return missing for the result status and undefined score for SUBJECTIVE_SLEEP_QUALITY', function () {
      const score = view_result('SUBJECTIVE_SLEEP_QUALITY')(outcome)
      const status = view_status('SUBJECTIVE_SLEEP_QUALITY')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })
    it('should return missing for the result status and undefined score for SLEEP_LATENCY', function () {
      const score = view_result('SLEEP_LATENCY')(outcome)
      const status = view_status('SLEEP_LATENCY')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })
    it('should return missing for the result status and undefined score for SLEEP_DURATION', function () {
      const score = view_result('SLEEP_DURATION')(outcome)
      const status = view_status('SLEEP_DURATION')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })
    it('should return missing for the result status and undefined score for HABITUAL_SLEEP_EFFICIENCY', function () {
      const score = view_result('HABITUAL_SLEEP_EFFICIENCY')(outcome)
      const status = view_status('HABITUAL_SLEEP_EFFICIENCY')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })
    it('should return missing for the result status and undefined score for SLEEP_DISTURBANCES', function () {
      const score = view_result('SLEEP_DISTURBANCES')(outcome)
      const status = view_status('SLEEP_DISTURBANCES')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })
    it('should return missing for the result status and undefined score for USE_OF_SLEEPING_MEDICATION', function () {
      const score = view_result('USE_OF_SLEEPING_MEDICATION')(outcome)
      const status = view_status('USE_OF_SLEEPING_MEDICATION')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })
    it('should return missing for the result status and undefined score for DAYTIME_DYSFUNCTION', function () {
      const score = view_result('DAYTIME_DYSFUNCTION')(outcome)
      const status = view_status('DAYTIME_DYSFUNCTION')(outcome)

      expect(score).to.eql(undefined)
      expect(status).to.eql(MISSING_STATUS)
    })
  })
})
