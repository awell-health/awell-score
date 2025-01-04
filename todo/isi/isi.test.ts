import { expect } from 'chai'
import R from 'ramda'

import { ZodError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { view_status } from '../../lib/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/isi_test_responses'
import { ISI_INPUTS } from './definition/isi_inputs'
import { isi } from './isi'

const ISI_BEST_SCORE = 0
const ISI_MEDIAN_SCORE = 14
const ISI_WORST_SCORE = 28

const isi_calculation = execute_test_calculation(isi)

describe('isi', function () {
  it('isi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('isi')
  })

  describe('basic assumptions', function () {
    const outcome = isi_calculation(best_response)

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['ISI_TOTAL_SCORE', 'ISI_INTERPRETATION']
      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ISI_Q01',
          'ISI_Q02',
          'ISI_Q03',
          'ISI_Q04',
          'ISI_Q05',
          'ISI_Q06',
          'ISI_Q07',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(ISI_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          isi_calculation({
            ISI_Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          isi_calculation({
            ISI_Q01: 5,
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          isi_calculation({
            ISI_Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      describe('Total score', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result('ISI_TOTAL_SCORE'),
            isi_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status('ISI_TOTAL_SCORE'),
            isi_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Interpretation', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result('ISI_INTERPRETATION'),
            isi_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status('ISI_INTERPRETATION'),
            isi_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = isi_calculation(worst_response)

      describe('Total score', function () {
        it('should return the worst score', function () {
          const score = view_result('ISI_TOTAL_SCORE')(outcome)

          expect(score).toEqual(ISI_WORST_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the worst interpretation', function () {
          const score = view_result('ISI_INTERPRETATION')(outcome)

          expect(score).toEqual('Clinical insomnia (severe)')
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = isi_calculation(median_response)

      describe('Total score', function () {
        it('should return the median score', function () {
          const score = view_result('ISI_TOTAL_SCORE')(outcome)

          expect(score).toEqual(ISI_MEDIAN_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the median interpretation', function () {
          const score = view_result('ISI_INTERPRETATION')(outcome)

          expect(score).toEqual('Subthreshold insomnia')
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = isi_calculation(best_response)

      describe('Total score', function () {
        it('should return the best score', function () {
          const score = view_result('ISI_TOTAL_SCORE')(outcome)

          expect(score).toEqual(ISI_BEST_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the best interpretation', function () {
          const score = view_result('ISI_INTERPRETATION')(outcome)

          expect(score).toEqual('No clinically significant insomnia')
        })
      })
    })

    describe('when called with a random response', function () {
      const outcome = isi_calculation(random_response)

      describe('Total score', function () {
        it('should return the expeced score', function () {
          const score = view_result('ISI_TOTAL_SCORE')(outcome)
          const EXPECTED_SCORE = 9

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the expeced interpretation', function () {
          const score = view_result('ISI_INTERPRETATION')(outcome)

          expect(score).toEqual('Subthreshold insomnia')
        })
      })
    })
  })
})
