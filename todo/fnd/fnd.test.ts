import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/fnd_test_responses'
import { FND_INPUTS } from './definition'
import { fnd } from './fnd'

const fnd_calculation = execute_test_calculation(fnd)

describe('fnd', function () {
  it('fnd calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('fnd')
  })

  describe('basic assumptions', function () {
    const outcome = fnd_calculation(best_response)

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = [
        'FAGERSTROM_TOTAL_SCORE',
        'FAGERSTROM_DEPENDENCE_LEVEL',
      ]

      const configured_calculation_id =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'FAGERSTROM_Q01',
          'FAGERSTROM_Q02',
          'FAGERSTROM_Q03',
          'FAGERSTROM_Q04',
          'FAGERSTROM_Q05',
          'FAGERSTROM_Q06',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(FND_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not not one of the allowed answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          fnd_calculation({
            FAGERSTROM_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with an empty response', function () {
      describe('Fagerstrom Total Score', function () {
        it('should return best score', function () {
          const score = R.compose(
            view_result('FAGERSTROM_TOTAL_SCORE'),
            fnd_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
      describe('Fagerstrom Dependence Level', function () {
        it('should return best dependency level', function () {
          const score = R.compose(
            view_result('FAGERSTROM_DEPENDENCE_LEVEL'),
            fnd_calculation,
          )({})

          expect(score).toEqual('Low depedence')
        })
      })
    })

    describe('when called with the worst response', function () {
      const outcome = fnd_calculation(worst_response)

      describe('Fagerstrom Total Score', function () {
        it('should return the worst score', function () {
          const score = view_result('FAGERSTROM_TOTAL_SCORE')(outcome)

          expect(score).toEqual(10)
        })
      })
      describe('Fagerstrom Dependence Level', function () {
        it('should return the worst dependence level', function () {
          const score = view_result('FAGERSTROM_DEPENDENCE_LEVEL')(outcome)

          expect(score).toEqual('High dependence')
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = fnd_calculation(best_response)

      describe('Fagerstrom Total Score', function () {
        it('should return the best score', function () {
          const score = view_result('FAGERSTROM_TOTAL_SCORE')(outcome)

          expect(score).toEqual(0)
        })
      })
      describe('Fagerstrom Dependence Level', function () {
        it('should return the best dependence level', function () {
          const score = view_result('FAGERSTROM_DEPENDENCE_LEVEL')(outcome)

          expect(score).toEqual('Low depedence')
        })
      })
    })

    describe('when called with a random response', function () {
      const outcome = fnd_calculation(random_response)

      describe('Fagerstrom Total Score', function () {
        it('should return the expeced score', function () {
          const score = view_result('FAGERSTROM_TOTAL_SCORE')(outcome)
          const EXPECTED_SCORE = 5

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Fagerstrom Dependence Level', function () {
        it('should return the expeced dependence level', function () {
          const score = view_result('FAGERSTROM_DEPENDENCE_LEVEL')(outcome)

          expect(score).toEqual('Moderate dependence')
        })
      })
    })
  })
})
