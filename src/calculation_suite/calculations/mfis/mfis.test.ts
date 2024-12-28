import { expect } from 'chai'

import { InvalidInputsError } from '../../errors'
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
} from './__testdata__/mfis_test_responses'
import { MFIS_INPUTS, MFIS_SUBSCALES } from './definition'
import { mfis } from './mfis'

const mfis_calculation = execute_test_calculation(mfis)

describe('mfis', function () {
  it('mfis calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('mfis')
  })

  describe('basic assumptions', function () {
    const outcome = mfis_calculation(best_response)

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'MFIS_TOTAL_SCORE',
        'MFIS_PHYSICAL_SUBSCALE_SCORE',
        'MFIS_COGNITIVE_SUBSCALE_SCORE',
        'MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE',
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
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(MFIS_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('MFIS subscales', function () {
      describe('Cognitive subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q01',
            'Q02',
            'Q03',
            'Q05',
            'Q11',
            'Q12',
            'Q15',
            'Q16',
            'Q18',
            'Q19',
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(MFIS_SUBSCALES.COGNITIVE_SUBSCALE)
        })
      })

      describe('Physicial subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q04',
            'Q06',
            'Q07',
            'Q10',
            'Q13',
            'Q14',
            'Q17',
            'Q20',
            'Q21',
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(MFIS_SUBSCALES.PHYSICAL_SUBSCALE)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q08', 'Q09']

          expect(EXPECTED_INPUT_IDS).to.eql(
            MFIS_SUBSCALES.PSYCHOSOCIAL_SUBSCALE
          )
        })
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mfis_calculation({
            Q01: -1,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mfis_calculation({
            Q01: 5,
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mfis_calculation({
            Q01: "I'm not a number",
          })
        ).to.throw(InvalidInputsError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = mfis_calculation({})

      describe('Total score', function () {
        it('should return missing for the result status and undefined score', function () {
          const status = view_status('MFIS_TOTAL_SCORE')(outcome)
          const score = view_result('MFIS_TOTAL_SCORE')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('Physical subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)
          const status = view_status('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result('MFIS_COGNITIVE_SUBSCALE_SCORE')(outcome)
          const status = view_status('MFIS_COGNITIVE_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(outcome)
          const status = view_status('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(
            outcome
          )

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })
    })

    describe('when called with a partial response', function () {
      const outcome = mfis_calculation({
        Q01: 1, // Belongs to cognitive subscale
      })

      describe('Total score', function () {
        it('should return the expected (partial) total score', function () {
          const score = view_result('MFIS_TOTAL_SCORE')(outcome)

          expect(score).to.eql(1)
        })
      })

      describe('Physical subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)
          const status = view_status('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return 1 as a result as the partial response has an anwer for this subscale', function () {
          const score = view_result('MFIS_COGNITIVE_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(1)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(outcome)
          const status = view_status('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(
            outcome
          )

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = mfis_calculation(worst_response)

      describe('Total score', function () {
        it('should return the worst score', function () {
          const score = view_result('MFIS_TOTAL_SCORE')(outcome)

          expect(score).to.eql(84)
        })
      })

      describe('Physical subscale', function () {
        it('should return the worst score', function () {
          const score = view_result('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(36)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the worst score', function () {
          const score = view_result('MFIS_COGNITIVE_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(40)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return the worst score', function () {
          const score = view_result('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(8)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = mfis_calculation(best_response)

      describe('Total score', function () {
        it('should return the best score', function () {
          const score = view_result('MFIS_TOTAL_SCORE')(outcome)

          expect(score).to.eql(0)
        })
      })

      describe('Physical subscale', function () {
        it('should return the best score', function () {
          const score = view_result('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(0)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the best score', function () {
          const score = view_result('MFIS_COGNITIVE_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(0)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return the best score', function () {
          const score = view_result('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(0)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = mfis_calculation(median_response)

      describe('Total score', function () {
        it('should return the median score', function () {
          const score = view_result('MFIS_TOTAL_SCORE')(outcome)

          expect(score).to.eql(42)
        })
      })

      describe('Physical subscale', function () {
        it('should return the median score', function () {
          const score = view_result('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(18)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the median score', function () {
          const score = view_result('MFIS_COGNITIVE_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(20)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return the median score', function () {
          const score = view_result('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(4)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = mfis_calculation(random_response)

      describe('Total score', function () {
        it('should return the exepected score', function () {
          const score = view_result('MFIS_TOTAL_SCORE')(outcome)

          expect(score).to.eql(40)
        })
      })

      describe('Physical subscale', function () {
        it('should return the exepected score', function () {
          const score = view_result('MFIS_PHYSICAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(19)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the exepected score', function () {
          const score = view_result('MFIS_COGNITIVE_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(18)
        })
      })
      describe('Psychosocial subscale', function () {
        it('should return the exepected score', function () {
          const score = view_result('MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE')(outcome)

          expect(score).to.eql(3)
        })
      })
    })
  })
})
