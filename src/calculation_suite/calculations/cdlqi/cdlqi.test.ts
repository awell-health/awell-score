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
} from './__testdata__/cdlqi_responses'
import { cdlqi } from './cdlqi'
import { CDLQI_subscales } from './definition/cdlqi_subscales'

const CDLQI_MIN_SCORE = 0
const CDLQI_MEDIAN_SCORE = 15
const CDLQI_MAX_SCORE = 30

const cdlqi_calculation = execute_test_calculation(cdlqi)

describe('cdlqi', function () {
  it('cdlqi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('cdlqi')
  })

  describe('Basic Assumptions', function () {
    const outcome = cdlqi_calculation(random_response)

    it('should return 7 calculation results', function () {
      const AMOUNT_OF_RESULTS = 7
      expect(outcome).to.have.length(AMOUNT_OF_RESULTS)
    })

    it('should return a result with correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'SYMPTOMS_AND_FEELINGS',
        'LEISURE',
        'SCHOOL_OR_HOLIDAYS',
        'PERSONAL_RELATIONSHIPS',
        'SLEEP',
        'TREATMENT',
        'TOTAL',
      ]

      const EXTRACTED_CALCULATION_IDS_FROM_RESULT =
        get_result_ids_from_calculation_output(outcome)

      expect(EXTRACTED_CALCULATION_IDS_FROM_RESULT).to.eql(
        EXPECTED_CALCULATION_IDS
      )
    })
  })

  describe('validations', function () {
    describe('When the response is empty', function () {
      const outcome = cdlqi_calculation({})

      it('should return undefined result as score for TOTAL', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined result as score for the Symptoms and feelings', function () {
        const score = view_result('SYMPTOMS_AND_FEELINGS')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined result as score for the Leisure', function () {
        const score = view_result('LEISURE')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined result as score for the School or holidays', function () {
        const score = view_result('SCHOOL_OR_HOLIDAYS')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined result as score for the Personal relationships', function () {
        const score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined result as score for the Sleep', function () {
        const score = view_result('SLEEP')(outcome)
        expect(score).to.eql(undefined)
      })

      it('should return undefined result as score for the Treatment', function () {
        const score = view_result('TREATMENT')(outcome)
        expect(score).to.eql(undefined)
      })
    })

    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'CDLQI_Q01',
          'CDLQI_Q02',
          'CDLQI_Q03',
          'CDLQI_Q04',
          'CDLQI_Q05',
          'CDLQI_Q06',
          'CDLQI_Q07_HOLIDAY',
          'CDLQI_Q07_SCHOOL',
          'CDLQI_Q08',
          'CDLQI_Q09',
          'CDLQI_Q10',
        ]

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale)
        )(CDLQI_subscales)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input ids configured for the Symptoms and feelings', function () {
        const EXPECTED_INPUT_IDS = ['CDLQI_Q01', 'CDLQI_Q02']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('SYMPTOMS_AND_FEELINGS')(
            CDLQI_subscales
          )
        )
      })

      it('should have the expected input ids configured for the Leisure', function () {
        const EXPECTED_INPUT_IDS = ['CDLQI_Q04', 'CDLQI_Q05', 'CDLQI_Q06']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('LEISURE')(CDLQI_subscales)
        )
      })

      it('should have the expected input ids configured for the School or holidays', function () {
        const EXPECTED_INPUT_IDS = ['CDLQI_Q07_SCHOOL', 'CDLQI_Q07_HOLIDAY']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('SCHOOL_OR_HOLIDAYS')(
            CDLQI_subscales
          )
        )
      })

      it('should have the expected input ids configured for the Personal relationships', function () {
        const EXPECTED_INPUT_IDS = ['CDLQI_Q03', 'CDLQI_Q08']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('PERSONAL_RELATIONSHIPS')(
            CDLQI_subscales
          )
        )
      })

      it('should have the expected input ids configured for the Sleep', function () {
        const EXPECTED_INPUT_IDS = ['CDLQI_Q09']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('SLEEP')(CDLQI_subscales)
        )
      })

      it('should have the expected input ids configured for the Treatment', function () {
        const EXPECTED_INPUT_IDS = ['CDLQI_Q10']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('TREATMENT')(CDLQI_subscales)
        )
      })
    })

    describe('when called with a response with answers out of the expected [0,3] range', function () {
      describe('when an answer is not a number', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            cdlqi_calculation({
              CDLQI_Q01: "I'm not a number",
            })
          ).to.throw(InvalidInputsError)
        })
      })
      describe('when an answer is below the expected [0,3] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            cdlqi_calculation({
              CDLQI_Q01: -1,
            })
          ).to.throw(InvalidInputsError)
        })
      })

      describe('when an answer is above the expected [0,3] range', function () {
        it('should throw an InvalidInputsError', function () {
          expect(() =>
            cdlqi_calculation({
              CDLQI_Q01: 5,
            })
          ).to.throw(InvalidInputsError)
        })
      })
    })

    describe('When the response contains an answer for both "CDLQI_Q07_SCHOOL" and "CDLQI_Q07_HOLIDAY"', function () {
      it('should throw an error because this should not be possible, only one of the two should be present in the response', function () {
        expect(() =>
          cdlqi_calculation({
            CDLQI_Q07_SCHOOL: 1,
            CDLQI_Q07_HOLIDAY: 2,
          })
        ).to.throw(
          `Response passed to the CDLQI calculation can't contain both "CDLQI_Q07_SCHOOL" and "CDLQI_Q07_HOLIDAY", it must be one of the 2 but not both.`
        )
      })
    })
  })

  describe('score calculations', function () {
    describe('when called with minimum response', function () {
      const outcome = cdlqi_calculation(min_response)
      it('should return the minimum score for CDLQI TOTAL', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).to.eql(CDLQI_MIN_SCORE)
      })

      it('should return the minimum score for the Symptoms and feelings', function () {
        const score = view_result('SYMPTOMS_AND_FEELINGS')(outcome)
        const EXPECTED_SYMPTOMS_AND_FEELINGS_MIN_SCORE = 0
        expect(score).to.eql(EXPECTED_SYMPTOMS_AND_FEELINGS_MIN_SCORE)
      })

      it('should return the minimum score for the Leisure', function () {
        const score = view_result('LEISURE')(outcome)
        const EXPECTED_LEISURE_MIN_SCORE = 0
        expect(score).to.eql(EXPECTED_LEISURE_MIN_SCORE)
      })

      it('should return the minimum score for the School or holidays', function () {
        const score = view_result('SCHOOL_OR_HOLIDAYS')(outcome)
        const EXPECTED_SCHOOL_OR_HOLIDAYS_MIN_SCORE = 0
        expect(score).to.eql(EXPECTED_SCHOOL_OR_HOLIDAYS_MIN_SCORE)
      })

      it('should return the minimum score for the Personal relationships', function () {
        const score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        const EXPECTED_PERSONAL_RELATIONSHIPS_MIN_SCORE = 0
        expect(score).to.eql(EXPECTED_PERSONAL_RELATIONSHIPS_MIN_SCORE)
      })

      it('should return the minimum score for the Sleep', function () {
        const score = view_result('SLEEP')(outcome)
        const EXPECTED_SLEEP_MIN_SCORE = 0
        expect(score).to.eql(EXPECTED_SLEEP_MIN_SCORE)
      })

      it('should return the minimum score for the Treatment', function () {
        const score = view_result('TREATMENT')(outcome)
        const EXPECTED_TREATMENT_MIN_SCORE = 0
        expect(score).to.eql(EXPECTED_TREATMENT_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = cdlqi_calculation(median_response)
      it('should return the median score for CDLQI TOTAL', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).to.eql(CDLQI_MEDIAN_SCORE)
      })

      it('should return the median score for the Symptoms and feelings', function () {
        const score = view_result('SYMPTOMS_AND_FEELINGS')(outcome)
        const EXPECTED_SYMPTOMS_AND_FEELINGS_MEDIAN_SCORE = 3
        expect(score).to.eql(EXPECTED_SYMPTOMS_AND_FEELINGS_MEDIAN_SCORE)
      })

      it('should return the median score for the Leisure', function () {
        const score = view_result('LEISURE')(outcome)
        const EXPECTED_LEISURE_MEDIAN_SCORE = 4
        expect(score).to.eql(EXPECTED_LEISURE_MEDIAN_SCORE)
      })

      it('should return the median score for the School or holidays', function () {
        const score = view_result('SCHOOL_OR_HOLIDAYS')(outcome)
        const EXPECTED_SCHOOL_OR_HOLIDAYS_MEDIAN_SCORE = 2
        expect(score).to.eql(EXPECTED_SCHOOL_OR_HOLIDAYS_MEDIAN_SCORE)
      })

      it('should return the median score for the Personal relationships', function () {
        const score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        const EXPECTED_PERSONAL_RELATIONSHIPS_MEDIAN_SCORE = 3
        expect(score).to.eql(EXPECTED_PERSONAL_RELATIONSHIPS_MEDIAN_SCORE)
      })

      it('should return the median score for the Sleep', function () {
        const score = view_result('SLEEP')(outcome)
        const EXPECTED_SLEEP_MEDIAN_SCORE = 2
        expect(score).to.eql(EXPECTED_SLEEP_MEDIAN_SCORE)
      })

      it('should return the median score for the Treatment', function () {
        const score = view_result('TREATMENT')(outcome)
        const EXPECTED_TREATMENT_MEDIAN_SCORE = 1
        expect(score).to.eql(EXPECTED_TREATMENT_MEDIAN_SCORE)
      })
    })

    describe('when called with maximum response', function () {
      const outcome = cdlqi_calculation(max_response)

      it('should return the maximum score for CDLQI TOTAL', function () {
        const score = view_result('TOTAL')(outcome)
        expect(score).to.eql(CDLQI_MAX_SCORE)
      })

      it('should return the maximum score for the Symptoms and feelings', function () {
        const score = view_result('SYMPTOMS_AND_FEELINGS')(outcome)
        const EXPECTED_SYMPTOMS_AND_FEELINGS_MAX_SCORE = 6
        expect(score).to.eql(EXPECTED_SYMPTOMS_AND_FEELINGS_MAX_SCORE)
      })

      it('should return the maximum score for the Leisure', function () {
        const score = view_result('LEISURE')(outcome)
        const EXPECTED_LEISURE_MAX_SCORE = 9
        expect(score).to.eql(EXPECTED_LEISURE_MAX_SCORE)
      })

      it('should return the maximum score for the School or holidays', function () {
        const score = view_result('SCHOOL_OR_HOLIDAYS')(outcome)
        const EXPECTED_SCHOOL_OR_HOLIDAYS_MAX_SCORE = 3
        expect(score).to.eql(EXPECTED_SCHOOL_OR_HOLIDAYS_MAX_SCORE)
      })

      it('should return the maximum score for the Personal relationships', function () {
        const score = view_result('PERSONAL_RELATIONSHIPS')(outcome)
        const EXPECTED_PERSONAL_RELATIONSHIPS_MAX_SCORE = 6
        expect(score).to.eql(EXPECTED_PERSONAL_RELATIONSHIPS_MAX_SCORE)
      })

      it('should return the maximum score for the Sleep', function () {
        const score = view_result('SLEEP')(outcome)
        const EXPECTED_SLEEP_MAX_SCORE = 3
        expect(score).to.eql(EXPECTED_SLEEP_MAX_SCORE)
      })

      it('should return the maximum score for the Treatment', function () {
        const score = view_result('TREATMENT')(outcome)
        const EXPECTED_TREATMENT_MAX_SCORE = 3
        expect(score).to.eql(EXPECTED_TREATMENT_MAX_SCORE)
      })
    })

    describe('when called with random response', function () {
      describe('should return the correct score for every subscale', function () {
        //@ts-expect-error to do
        const outcome = scaleId =>
          R.compose(view_result(scaleId), cdlqi_calculation)(random_response)

        const EXPECTED_SYMPTOMS_AND_FEELING_SCORE = 5
        const EXPECTED_LEISURE_SCORE = 7
        const EXPECTED_SCHOOL_OR_HOLIDAYS_SCORE = 1
        const EXPECTED_PERSONAL_RELATIONSHIPS_SCORE = 1
        const EXPECTED_SLEEP_SCORE = 1
        const EXPECTED_TREATMENT_SCORE = 2
        const EXPECTED_TOTAL_SCORE = 17

        it('should return the expected score for Symptoms and feelings', function () {
          expect(EXPECTED_SYMPTOMS_AND_FEELING_SCORE).to.eql(
            outcome('SYMPTOMS_AND_FEELINGS')
          )
        })

        it('should return the expected score for Leisure', function () {
          expect(EXPECTED_LEISURE_SCORE).to.eql(outcome('LEISURE'))
        })

        it('should return the expected score for School or holidays', function () {
          expect(EXPECTED_SCHOOL_OR_HOLIDAYS_SCORE).to.eql(
            outcome('SCHOOL_OR_HOLIDAYS')
          )
        })

        it('should return the expected score for Personal relationships', function () {
          expect(EXPECTED_PERSONAL_RELATIONSHIPS_SCORE).to.eql(
            outcome('PERSONAL_RELATIONSHIPS')
          )
        })

        it('should return the expected score for Sleep', function () {
          expect(EXPECTED_SLEEP_SCORE).to.eql(outcome('SLEEP'))
        })

        it('should return the expected score for Treatment', function () {
          expect(EXPECTED_TREATMENT_SCORE).to.eql(outcome('TREATMENT'))
        })

        it('should return the expected score for TOTAL', function () {
          expect(EXPECTED_TOTAL_SCORE).to.eql(outcome('TOTAL'))
        })
      })
    })
  })
})
