import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
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
} from './__testdata__/dri_responses'
import { DRI_SUBSCALES } from './definition/dri_subscales'
import { dri } from './dri'

const DRI_MIN_SCORE = 0
const DRI_MEDIAN_SCORE = 50
const DRI_MAX_SCORE = 100

const dri_calculation = execute_test_calculation(dri)

describe('dri', function () {
  it('dri calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('dri')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'DRI_01',
        'DRI_02',
        'DRI_03',
        'DRI_04',
        'DRI_05',
        'DRI_06',
        'DRI_07',
        'DRI_08',
        'DRI_09',
        'DRI_10',
        'DRI_11',
        'DRI_12',
      ].sort()

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale)
      )(DRI_SUBSCALES)

      expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Common basic activities" subscale', function () {
      const EXPECTED_INPUT_IDS = ['DRI_01', 'DRI_02', 'DRI_03', 'DRI_04'].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('BASIC_ACTIVITIES')(DRI_SUBSCALES)
      )
    })

    it('should have the expected input idss configured for the "More demanding daily physical activities" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DRI_05', 'DRI_06', 'DRI_07', 'DRI_08'].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('PHYSICAL_ACTIVITIES')(
          DRI_SUBSCALES
        )
      )
    })

    it('should have the expected input idss configured for the "More vigorous activities" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DRI_09', 'DRI_10', 'DRI_11', 'DRI_12'].sort()

      expect(EXPECTED_INPUT_IDS).to.eql(
        get_input_ids_for_specific_subscale('WORK_RELATED_ACTIVITIES')(
          DRI_SUBSCALES
        )
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = dri_calculation(min_response)

    it('should return 4 calculation results', function () {
      expect(outcome).to.have.lengthOf(4)
    })

    it('should return results with expected scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'BASIC_ACTIVITIES',
        'PHYSICAL_ACTIVITIES',
        'WORK_RELATED_ACTIVITIES',
        'DRI',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).to.eql(EXPECTED_SCALE_IDS)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = dri_calculation({})

      it('should return MISSING_MESSAGE the "Common basic activities" subscale', function () {
        const subscale_score = view_result('BASIC_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(undefined)
      })

      it('should return the expected score for the "More demanding daily physical activities" subscale', function () {
        const subscale_score = view_result('PHYSICAL_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE for the "More vigorous activities" subscale', function () {
        const subscale_score = view_result('WORK_RELATED_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(undefined)
      })

      it('should return MISSING_MESSAGE for DRI score', function () {
        const subscale_score = view_result('DRI')(outcome)
        expect(subscale_score).to.eql(undefined)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with minimum response', function () {
      const outcome = dri_calculation(min_response)

      it('should return the minimum score for the "Common basic activities" subscale', function () {
        const subscale_score = view_result('BASIC_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MIN_SCORE)
      })

      it('should return the minimum score for the "More demanding daily physical activities" subscale', function () {
        const subscale_score = view_result('PHYSICAL_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MIN_SCORE)
      })

      it('should return the minimum score for the "More vigorous activities" subscale', function () {
        const subscale_score = view_result('WORK_RELATED_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MIN_SCORE)
      })

      it('should return the minimum total score', function () {
        const subscale_score = view_result('DRI')(outcome)
        expect(subscale_score).to.eql(DRI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = dri_calculation(median_response)

      it('should return the median score for the "Common basic activities" subscale', function () {
        const subscale_score = view_result('BASIC_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MEDIAN_SCORE)
      })

      it('should return the median score for the "More demanding daily physical activities" subscale', function () {
        const subscale_score = view_result('PHYSICAL_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MEDIAN_SCORE)
      })

      it('should return the median score for the "More vigorous activities" subscale', function () {
        const subscale_score = view_result('WORK_RELATED_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MEDIAN_SCORE)
      })

      it('should return the minimum total score', function () {
        const subscale_score = view_result('DRI')(outcome)
        expect(subscale_score).to.eql(DRI_MEDIAN_SCORE)
      })
    })

    describe('when called with maximum response', function () {
      const outcome = dri_calculation(max_response)

      it('should return the maximum score for the "Common basic activities" subscale', function () {
        const subscale_score = view_result('BASIC_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MAX_SCORE)
      })

      it('should return the maximum score for the "More demanding daily physical activities" subscale', function () {
        const subscale_score = view_result('PHYSICAL_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MAX_SCORE)
      })

      it('should return the maximum score for the "More vigorous activities" subscale', function () {
        const subscale_score = view_result('WORK_RELATED_ACTIVITIES')(outcome)
        expect(subscale_score).to.eql(DRI_MAX_SCORE)
      })

      it('should return the maximum total score', function () {
        const subscale_score = view_result('DRI')(outcome)
        expect(subscale_score).to.eql(DRI_MAX_SCORE)
      })
    })

    describe('when a random response is passed ', function () {
      const outcome = dri_calculation(random_response)

      it('should return the expected score for the "Common basic activities" subscale', function () {
        const subscale_score = view_result('BASIC_ACTIVITIES')(outcome)
        const EXPECTED_BASIC_ACTIVITIES_SCORE = 34

        expect(subscale_score).to.eql(EXPECTED_BASIC_ACTIVITIES_SCORE)
      })

      it('should return the expected score for the "More demanding daily physical activities" subscale', function () {
        const subscale_score = view_result('PHYSICAL_ACTIVITIES')(outcome)
        const EXPECTED_PHYSICAL_ACTIVITIES_SCORE = 33

        expect(subscale_score).to.eql(EXPECTED_PHYSICAL_ACTIVITIES_SCORE)
      })

      it('should return the expected score for the "More vigorous activities" subscale', function () {
        const subscale_score = view_result('WORK_RELATED_ACTIVITIES')(outcome)
        const EXPECTED_WORK_RELATED_ACTIVITIES_SCORE = 60

        expect(subscale_score).to.eql(EXPECTED_WORK_RELATED_ACTIVITIES_SCORE)
      })

      it('should return the expected total score', function () {
        const subscale_score = view_result('DRI')(outcome)
        const EXPECTED_TOTAL_SCORE = 42.33

        expect(subscale_score).to.eql(EXPECTED_TOTAL_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dri_calculation({
            DRI_01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dri_calculation({
            DRI_01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          dri_calculation({
            DRI_01: 110,
          })
        ).to.throw(InvalidInputsError)
      })
    })
  })
})
