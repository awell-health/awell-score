// @flow
import { expect } from 'chai'

import { execute_test_calculation } from '../../helper_functions/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../helper_functions/get_result_ids_from_calculation_output'
import { view_result } from '../../helper_functions/view_result'
import { view_status } from '../../helper_functions/view_status'
import { MISSING_STATUS } from '../../PARAMETERS'
import { CALCULATIONS } from '../calculation_library'
import { get_input_ids_from_calculation_blueprint } from '../shared_functions'
import {
  best_response,
  random_response,
  worst_response
} from './__testdata__/snap_test_responses'
import { SNAP_INPUTS, SNAP_SUBSCALES } from './definition'
import { snap_teacher } from './snap_teacher'

const snap_calculation = execute_test_calculation(snap_teacher)

describe('snap teacher', function () {
  it('snap calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.include.key('snap_teacher')
  })

  describe('basic assumptions', function () {
    const outcome = snap_calculation(best_response)

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'SNAP_TEACHER_INATTENTION_SCORE',
        'SNAP_TEACHER_INATTENTION_SCORE_INTERPRETATION',
        'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE',
        'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION',
        'SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE',
        'SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION'
      ]

      const configured_calculation_ids =
        get_result_ids_from_calculation_output(outcome)

      expect(configured_calculation_ids).to.have.members(EXPECTED_RESULT_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'SNAP_Q01',
          'SNAP_Q02',
          'SNAP_Q03',
          'SNAP_Q04',
          'SNAP_Q05',
          'SNAP_Q06',
          'SNAP_Q07',
          'SNAP_Q08',
          'SNAP_Q09',
          'SNAP_Q10',
          'SNAP_Q11',
          'SNAP_Q12',
          'SNAP_Q13',
          'SNAP_Q14',
          'SNAP_Q15',
          'SNAP_Q16',
          'SNAP_Q17',
          'SNAP_Q18',
          'SNAP_Q19',
          'SNAP_Q20',
          'SNAP_Q21',
          'SNAP_Q22',
          'SNAP_Q23',
          'SNAP_Q24',
          'SNAP_Q25',
          'SNAP_Q26'
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(SNAP_INPUTS)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('SNAP subscales', function () {
      describe('INATTENTION_SUBSET', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'SNAP_Q01',
            'SNAP_Q02',
            'SNAP_Q03',
            'SNAP_Q04',
            'SNAP_Q05',
            'SNAP_Q06',
            'SNAP_Q07',
            'SNAP_Q08',
            'SNAP_Q09'
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(SNAP_SUBSCALES.INATTENTION_SUBSET)
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'SNAP_Q10',
            'SNAP_Q11',
            'SNAP_Q12',
            'SNAP_Q13',
            'SNAP_Q14',
            'SNAP_Q15',
            'SNAP_Q16',
            'SNAP_Q17',
            'SNAP_Q18'
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(
            SNAP_SUBSCALES.HYPERACTIVITY_IMPULSIVITY_SUBSET
          )
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'SNAP_Q19',
            'SNAP_Q20',
            'SNAP_Q21',
            'SNAP_Q22',
            'SNAP_Q23',
            'SNAP_Q24',
            'SNAP_Q25',
            'SNAP_Q26'
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(
            SNAP_SUBSCALES.OPPOSITION_DEFIANCE_SUBSET
          )
        })
      })
    })

    describe('when called with an empty response', function () {
      const outcome = snap_calculation({})

      describe('INATTENTION_SUBSET', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result('SNAP_TEACHER_INATTENTION_SCORE')(outcome)
          const status = view_status('SNAP_TEACHER_INATTENTION_SCORE')(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE'
          )(outcome)
          const status = view_status(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE'
          )(outcome)

          expect(score).to.eql(undefined)
          expect(status).to.eql(MISSING_STATUS)
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return missing for the result status and undefined score', function () {
          const score = view_result('SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE')(
            outcome
          )
          const status = view_status('SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE')(
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
      const outcome = snap_calculation(worst_response)

      describe('INATTENTION_SUBSET', function () {
        it('should return the worst score', function () {
          const score = view_result('SNAP_TEACHER_INATTENTION_SCORE')(outcome)
          const interpretation = view_result(
            'SNAP_TEACHER_INATTENTION_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(27)
          expect(interpretation).to.eql('Severe symptoms')
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return the worst score', function () {
          const score = view_result(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE'
          )(outcome)
          const interpretation = view_result(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(27)
          expect(interpretation).to.eql('Severe symptoms')
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return the worst score', function () {
          const score = view_result('SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE')(
            outcome
          )
          const interpretation = view_result(
            'SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(24)
          expect(interpretation).to.eql('Severe symptoms')
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = snap_calculation(best_response)

      describe('INATTENTION_SUBSET', function () {
        it('should return the best score', function () {
          const score = view_result('SNAP_TEACHER_INATTENTION_SCORE')(outcome)
          const interpretation = view_result(
            'SNAP_TEACHER_INATTENTION_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(0)
          expect(interpretation).to.eql('Symptoms not clinically significant')
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return the best score', function () {
          const score = view_result(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE'
          )(outcome)
          const interpretation = view_result(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(0)
          expect(interpretation).to.eql('Symptoms not clinically significant')
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return the best score', function () {
          const score = view_result('SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE')(
            outcome
          )
          const interpretation = view_result(
            'SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(0)
          expect(interpretation).to.eql('Symptoms not clinically significant')
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = snap_calculation(random_response)

      describe('INATTENTION_SUBSET', function () {
        it('should return the exepected score', function () {
          const score = view_result('SNAP_TEACHER_INATTENTION_SCORE')(outcome)
          const interpretation = view_result(
            'SNAP_TEACHER_INATTENTION_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(11)
          expect(interpretation).to.eql('Symptoms not clinically significant')
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return the exepected score', function () {
          const score = view_result(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE'
          )(outcome)
          const interpretation = view_result(
            'SNAP_TEACHER_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(17)
          expect(interpretation).to.eql('Mild symptoms')
        })
      })
      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return the exepected score', function () {
          const score = view_result('SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE')(
            outcome
          )
          const interpretation = view_result(
            'SNAP_TEACHER_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION'
          )(outcome)

          expect(score).to.eql(9)
          expect(interpretation).to.eql('Mild symptoms')
        })
      })
    })
  })
})
