import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../shared_functions'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/ias_test_responses'
import { IAS_SCALES } from './definition/ias_scales'
import { ias } from './ias'

const ias_calclation = execute_test_calculation(ias)

describe('ias', function () {
  it('ias calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('ias')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        // 'IAS_Q01', - Not used in score calculation
        'IAS_Q02',
        'IAS_Q03',
        'IAS_Q04',
        // 'IAS_Q05', - Not used in score calculation
        'IAS_Q06',
        // 'IAS_Q07', - Not used in score calculation
        // 'IAS_Q08', - Not used in score calculation
        // 'IAS_Q09', - Not used in score calculation
        // 'IAS_Q10', - Not used in score calculation
        // 'IAS_Q11', - Not used in score calculation
        // 'IAS_Q12', - Not used in score calculation
        'IAS_Q13',
        'IAS_Q14',
        'IAS_Q15',
        'IAS_Q16',
        'IAS_Q17',
        // 'IAS_Q18', - Not used in score calculation
        'IAS_Q19',
        // 'IAS_Q20', - Not used in score calculation
        'IAS_Q21',
        // 'IAS_Q22', - Not used in score calculation
        'IAS_Q23',
        'IAS_Q24',
        'IAS_Q25',
        // 'IAS_Q26', - Not used in score calculation
        'IAS_Q27',
        'IAS_Q28',
        'IAS_Q29',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(IAS_SCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Health anxiety" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'IAS_Q02',
        'IAS_Q03',
        'IAS_Q04',
        'IAS_Q06',
        'IAS_Q13',
        'IAS_Q14',
        'IAS_Q15',
        'IAS_Q16',
        'IAS_Q17',
        'IAS_Q19',
        'IAS_Q21',
      ].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('HEALTH_ANXIETY')(IAS_SCALES)
      )
    })

    it('should have the expected input idss configured for the "Ilness behaviour" subscale', function () {
      const EXPECTED_INPUT_IDS = [
        'IAS_Q23',
        'IAS_Q24',
        'IAS_Q25',
        'IAS_Q27',
        'IAS_Q28',
        'IAS_Q29',
      ].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('ILNESS_BEHAVIOUR')(IAS_SCALES)
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = ias_calclation(min_response)

    it('should calculate a score for both subscales (n=2)', function () {
      const AMOUNT_OF_SCORES = 2
      expect(outcome).to.have.length(AMOUNT_OF_SCORES)
    })

    it('should return the correct scale ids', function () {
      const EXPECTED_SCALE_IDS = ['HEALTH_ANXIETY', 'ILNESS_BEHAVIOUR']

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).to.have.members(
        EXPECTED_SCALE_IDS
      )
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when all inputs are answered with the min response', function () {
      const MIN_SCORE = 0
      const outcome = ias_calclation(min_response)

      it('should return the min score on the "Health anxiety" subscale', function () {
        const score = view_result('HEALTH_ANXIETY')(outcome)

        expect(score).to.eql(MIN_SCORE)
      })

      it('should return the min score on the "Ilness behaviour" subscale', function () {
        const score = view_result('ILNESS_BEHAVIOUR')(outcome)

        expect(score).to.eql(MIN_SCORE)
      })
    })

    describe('when all inputs are answered with the median response', function () {
      const outcome = ias_calclation(median_response)

      it('should return the median score on the "Health anxiety" subscale', function () {
        const score = view_result('HEALTH_ANXIETY')(outcome)
        const MEDIAN_SCORE = 22

        expect(score).to.eql(MEDIAN_SCORE)
      })

      it('should return the median score on the "Ilness behaviour" subscale', function () {
        const score = view_result('ILNESS_BEHAVIOUR')(outcome)
        const MEDIAN_SCORE = 12

        expect(score).to.eql(MEDIAN_SCORE)
      })
    })

    describe('when all inputs are answered with the max response', function () {
      const outcome = ias_calclation(max_response)

      it('should return the maximum score on the "Health anxiety" subscale', function () {
        const score = view_result('HEALTH_ANXIETY')(outcome)
        const MAX_SCORE = 44

        expect(score).to.eql(MAX_SCORE)
      })

      it('should return the maximum score on the "Ilness behaviour" subscale', function () {
        const score = view_result('ILNESS_BEHAVIOUR')(outcome)
        const MAX_SCORE = 24

        expect(score).to.eql(MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = ias_calclation(random_response)

      it('should return the expected score on the "Health anxiety" subscale', function () {
        const score = view_result('HEALTH_ANXIETY')(outcome)
        const EXPECTED_SCORE = 20

        expect(score).to.eql(EXPECTED_SCORE)
      })

      it('should return the expected score on the "Ilness behaviour" subscale', function () {
        const score = view_result('ILNESS_BEHAVIOUR')(outcome)
        const EXPECTED_SCORE = 8

        expect(score).to.eql(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = ias_calclation({})

      it('should return MISSING_MESSAGE as the score on the "Health anxiety" subscale', function () {
        const score = view_result('HEALTH_ANXIETY')(outcome)

        expect(score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE as the on the "Ilness behaviour" subscale', function () {
        const score = view_result('ILNESS_BEHAVIOUR')(outcome)

        expect(score).to.eql(undefined)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ias_calclation({
            IAS_Q02: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is below the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ias_calclation({
            IAS_Q02: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is above the expected [0,4] range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          ias_calclation({
            IAS_Q02: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
