import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../src/calculation_suite/errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { view_status } from '../../lib/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../../src/calculation_suite/calculations/calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../../src/calculation_suite/calculations/shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/panss_6_test_responses'
import { PANNS_6_SCALES, PANSS_6_INPUTS } from './definition'
import { panss_6 } from './panss_6'

const panss_6_calculation = execute_test_calculation(panss_6)

describe('panss_6', function () {
  it('panss_6 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('panss_6')
  })

  describe('basic assumptions', function () {
    const outcome = panss_6_calculation(best_response)

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'PANNS_6_TOTAL_SCORE',
        'PANNS_6_POSITIVE_SCALE_SCORE',
        'PANNS_6_NEGATIVE_SCALE_SCORE',
      ]
      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'PANSS_6_Q01_DELUSIONS',
          'PANSS_6_Q02_CONCEPTUAL_DISORGANIZATIONS',
          'PANSS_6_Q03_HALLUCINATORY_BEHAVIOR',
          'PANSS_6_Q04_BLUNTED_AFFECT',
          'PANSS_6_Q05_PASSIVE_SOCIAL_WITHDRAWAL',
          'PANSS_6_Q06_LACK_OF_SPONTANEITY',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(PANSS_6_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('Positive scale has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'PANSS_6_Q01_DELUSIONS',
          'PANSS_6_Q02_CONCEPTUAL_DISORGANIZATIONS',
          'PANSS_6_Q03_HALLUCINATORY_BEHAVIOR',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(PANNS_6_SCALES.POSITIVE_SCALE)
      })
    })

    describe('Psychological domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'PANSS_6_Q04_BLUNTED_AFFECT',
          'PANSS_6_Q05_PASSIVE_SOCIAL_WITHDRAWAL',
          'PANSS_6_Q06_LACK_OF_SPONTANEITY',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(PANNS_6_SCALES.NEGATIVE_SCALE)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          panss_6_calculation({
            PANSS_6_Q01_DELUSIONS: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          panss_6_calculation({
            PANSS_6_Q01_DELUSIONS: 8,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          panss_6_calculation({
            PANSS_6_Q01_DELUSIONS: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      describe('Total score', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result('PANNS_6_TOTAL_SCORE'),
            panss_6_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status('PANNS_6_TOTAL_SCORE'),
            panss_6_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Positive scale score', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result('PANNS_6_POSITIVE_SCALE_SCORE'),
            panss_6_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status('PANNS_6_POSITIVE_SCALE_SCORE'),
            panss_6_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Negative scale score', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result('PANNS_6_NEGATIVE_SCALE_SCORE'),
            panss_6_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status('PANNS_6_NEGATIVE_SCALE_SCORE'),
            panss_6_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = panss_6_calculation(worst_response)

      describe('Total score', function () {
        it('should return the worst score', function () {
          const score = view_result('PANNS_6_TOTAL_SCORE')(outcome)

          expect(score).toEqual(42)
        })
      })
      describe('Positive scale score', function () {
        it('should return the worst score', function () {
          const score = view_result('PANNS_6_POSITIVE_SCALE_SCORE')(outcome)

          expect(score).toEqual(21)
        })
      })
      describe('Negative scale score', function () {
        it('should return the worst score', function () {
          const score = view_result('PANNS_6_NEGATIVE_SCALE_SCORE')(outcome)

          expect(score).toEqual(21)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = panss_6_calculation(median_response)

      describe('Total score', function () {
        it('should return the median score', function () {
          const score = view_result('PANNS_6_TOTAL_SCORE')(outcome)

          expect(score).toEqual(24)
        })
      })
      describe('Positive scale score', function () {
        it('should return the median score', function () {
          const score = view_result('PANNS_6_POSITIVE_SCALE_SCORE')(outcome)

          expect(score).toEqual(12)
        })
      })
      describe('Negative scale score', function () {
        it('should return the median score', function () {
          const score = view_result('PANNS_6_NEGATIVE_SCALE_SCORE')(outcome)

          expect(score).toEqual(12)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = panss_6_calculation(best_response)

      describe('Total score', function () {
        it('should return the best score', function () {
          const score = view_result('PANNS_6_TOTAL_SCORE')(outcome)

          expect(score).toEqual(6)
        })
      })
      describe('Positive scale score', function () {
        it('should return the best score', function () {
          const score = view_result('PANNS_6_POSITIVE_SCALE_SCORE')(outcome)

          expect(score).toEqual(3)
        })
      })
      describe('Negative scale score', function () {
        it('should return the best score', function () {
          const score = view_result('PANNS_6_NEGATIVE_SCALE_SCORE')(outcome)

          expect(score).toEqual(3)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = panss_6_calculation(random_response)

      describe('Total score', function () {
        it('should return the expected score', function () {
          const score = view_result('PANNS_6_TOTAL_SCORE')(outcome)
          const EXPECTED_SCORE = 21

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Positive scale score', function () {
        it('should return the expected score', function () {
          const score = view_result('PANNS_6_POSITIVE_SCALE_SCORE')(outcome)
          const EXPECTED_SCORE = 5

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Negative scale score', function () {
        it('should return the expected score', function () {
          const score = view_result('PANNS_6_NEGATIVE_SCALE_SCORE')(outcome)
          const EXPECTED_SCORE = 16

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
    })
  })
})
