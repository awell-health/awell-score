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
  worst_response,
} from './__testdata__/compass_31_test_responses'
import { compass_31 } from './compass_31'
import { COMPASS_31_DOMAINS } from './definition/compass_31_domains'
import { COMPASS_31_INPUTS } from './definition/compass_31_inputs'

const compass_calculation = execute_test_calculation(compass_31)

describe('compass_31', function () {
  it('compass_31 calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('compass_31')
  })

  describe('basic assumptions', function () {
    const outcome = compass_calculation(worst_response)

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'COMPASS_13_ORTHOSTATIC_INTOLERANCE',
        'COMPASS_13_VASOMOTOR',
        'COMPASS_13_SECRETOMOTOR',
        'COMPASS_13_GASTROINTESTINAL',
        'COMPASS_13_BLADDER',
        'COMPASS_13_PUPILLOMOTOR',
        'COMPASS_13_TOTAL_SCORE',
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
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
          'Q10',
          'Q11',
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
          'Q22',
          'Q23',
          'Q24',
          'Q25',
          'Q26',
          'Q27',
          'Q28',
          'Q29',
          'Q30',
          'Q31',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(COMPASS_31_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('Orthostatic intolerance domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04']

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.ORTHOSTATIC_INTOLERANCE.items,
        )
      })
    })

    describe('Vasomotor domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q05', 'Q06', 'Q07']

        expect(EXPECTED_INPUT_IDS).toEqual(COMPASS_31_DOMAINS.VASOMOTOR.items)
      })
    })

    describe('Secretomotor domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q08', 'Q09', 'Q10', 'Q11']

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.SECRETOMOTOR.items,
        )
      })
    })

    describe('Gastrointestinal domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'Q12',
          'Q13',
          'Q14',
          'Q15',
          'Q16',
          'Q17',
          'Q18',
          'Q19',
          'Q20',
          'Q21',
          'Q22',
          'Q23',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.GASTROINTESTINAL.items,
        )
      })
    })

    describe('Bladder domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q24', 'Q25', 'Q26']

        expect(EXPECTED_INPUT_IDS).toEqual(COMPASS_31_DOMAINS.BLADDER.items)
      })
    })

    describe('Pupillomotor domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['Q27', 'Q28', 'Q29', 'Q30', 'Q31']

        expect(EXPECTED_INPUT_IDS).toEqual(
          COMPASS_31_DOMAINS.PUPILLOMOTOR.items,
        )
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          compass_calculation({
            Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          compass_calculation({
            Q01: 8,
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          compass_calculation({
            Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      describe('Orthostatic intolerance domain', function () {
        it('should return a score of 0', function () {
          const score = R.compose(
            view_result('COMPASS_13_ORTHOSTATIC_INTOLERANCE'),
            compass_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
      describe('Vasomotor domain', function () {
        it('should return a score of 0', function () {
          const score = R.compose(
            view_result('COMPASS_13_VASOMOTOR'),
            compass_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
      describe('Secretomotor domain', function () {
        it('should return a score of 0', function () {
          const score = R.compose(
            view_result('COMPASS_13_SECRETOMOTOR'),
            compass_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
      describe('Gastrointestinal domain', function () {
        it('should return a score of 0', function () {
          const score = R.compose(
            view_result('COMPASS_13_GASTROINTESTINAL'),
            compass_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
      describe('Bladder domain', function () {
        it('should return a score of 0', function () {
          const score = R.compose(
            view_result('COMPASS_13_BLADDER'),
            compass_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
      describe('Pupillomotor domain', function () {
        it('should return a score of 0', function () {
          const score = R.compose(
            view_result('COMPASS_13_PUPILLOMOTOR'),
            compass_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
      describe('Total score', function () {
        it('should return a score of 0', function () {
          const score = R.compose(
            view_result('COMPASS_13_TOTAL_SCORE'),
            compass_calculation,
          )({})

          expect(score).toEqual(0)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = compass_calculation(worst_response)

      describe('Orthostatic intolerance domain', function () {
        it('should return the worst score', function () {
          const score = view_result('COMPASS_13_ORTHOSTATIC_INTOLERANCE')(
            outcome,
          )

          expect(score).toEqual(40)
        })
      })
      describe('Vasomotor domain', function () {
        it('should return the worst score', function () {
          const score = view_result('COMPASS_13_VASOMOTOR')(outcome)

          expect(score).toEqual(5)
        })
      })
      describe('Secretomotor domain', function () {
        it('should return the worst score', function () {
          const score = view_result('COMPASS_13_SECRETOMOTOR')(outcome)

          expect(score).toEqual(15)
        })
      })
      describe('Gastrointestinal domain', function () {
        it('should return the worst score', function () {
          const score = view_result('COMPASS_13_GASTROINTESTINAL')(outcome)

          expect(score).toEqual(25)
        })
      })
      describe('Bladder domain', function () {
        it('should return the worst score', function () {
          const score = view_result('COMPASS_13_BLADDER')(outcome)

          expect(score).toEqual(10)
        })
      })
      describe('Pupillomotor domain', function () {
        it('should return the worst score', function () {
          const score = view_result('COMPASS_13_PUPILLOMOTOR')(outcome)

          expect(score).toEqual(5)
        })
      })
      describe('Total score', function () {
        it('should return the worst score', function () {
          const score = view_result('COMPASS_13_TOTAL_SCORE')(outcome)

          expect(score).toEqual(100)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = compass_calculation(best_response)

      describe('Orthostatic intolerance domain', function () {
        it('should return the best score', function () {
          const score = view_result('COMPASS_13_ORTHOSTATIC_INTOLERANCE')(
            outcome,
          )

          expect(score).toEqual(0)
        })
      })
      describe('Vasomotor domain', function () {
        it('should return the best score', function () {
          const score = view_result('COMPASS_13_VASOMOTOR')(outcome)

          expect(score).toEqual(0)
        })
      })
      describe('Secretomotor domain', function () {
        it('should return the best score', function () {
          const score = view_result('COMPASS_13_SECRETOMOTOR')(outcome)

          expect(score).toEqual(0)
        })
      })
      describe('Gastrointestinal domain', function () {
        it('should return the best score', function () {
          const score = view_result('COMPASS_13_GASTROINTESTINAL')(outcome)

          expect(score).toEqual(0)
        })
      })
      describe('Bladder domain', function () {
        it('should return the best score', function () {
          const score = view_result('COMPASS_13_BLADDER')(outcome)

          expect(score).toEqual(0)
        })
      })
      describe('Pupillomotor domain', function () {
        it('should return the best score', function () {
          const score = view_result('COMPASS_13_PUPILLOMOTOR')(outcome)

          expect(score).toEqual(0)
        })
      })
      describe('Total score', function () {
        it('should return the best score', function () {
          const score = view_result('COMPASS_13_TOTAL_SCORE')(outcome)

          expect(score).toEqual(0)
        })
      })
    })
  })
})
