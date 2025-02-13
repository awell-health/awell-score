import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/snap_test_responses'
import { SNAP_SUBSCALES } from './definition'
import { snap_parent } from './snap_parent'

const snap_calculation = new Score(snap_parent)

describe('snap parent', function () {
  it('snap calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('snap_parent')
  })

  describe('basic assumptions', function () {
    const outcome = snap_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'SNAP_PARENT_INATTENTION_SCORE',
        'SNAP_PARENT_INATTENTION_SCORE_INTERPRETATION',
        'SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE',
        'SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION',
        'SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE',
        'SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION',
      ]

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
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
          'SNAP_Q26',
        ]

        const configured_input_ids = Object.keys(snap_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
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
            'SNAP_Q09',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(SNAP_SUBSCALES.INATTENTION_SUBSET)
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
            'SNAP_Q18',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(
            SNAP_SUBSCALES.HYPERACTIVITY_IMPULSIVITY_SUBSET,
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
            'SNAP_Q26',
          ]

          expect(EXPECTED_INPUT_IDS).toEqual(
            SNAP_SUBSCALES.OPPOSITION_DEFIANCE_SUBSET,
          )
        })
      })
    })

    describe('when called with an empty response', function () {
      const outcome = snap_calculation.calculate({
        payload: {},
        opts: { returnMissingOnZodError: true },
      })

      describe('INATTENTION_SUBSET', function () {
        it('should return null for the result and interpretation', function () {
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE).toEqual(null)
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE_INTERPRETATION).toEqual(
            null,
          )
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return null for the result and interpretation', function () {
          expect(outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE).toEqual(
            null,
          )
          expect(
            outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION,
          ).toEqual(null)
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return null for the result and interpretation', function () {
          expect(outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE).toEqual(null)
          expect(
            outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION,
          ).toEqual(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = snap_calculation.calculate({ payload: worst_response })

      describe('INATTENTION_SUBSET', function () {
        it('should return the worst score', function () {
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE).toEqual(27)
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE_INTERPRETATION).toEqual(
            'Severe symptoms',
          )
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return the worst score', function () {
          expect(outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE).toEqual(
            27,
          )
          expect(
            outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION,
          ).toEqual('Severe symptoms')
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return the worst score', function () {
          expect(outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE).toEqual(24)
          expect(
            outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION,
          ).toEqual('Severe symptoms')
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = snap_calculation.calculate({ payload: best_response })

      describe('INATTENTION_SUBSET', function () {
        it('should return the best score', function () {
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE).toEqual(0)
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE_INTERPRETATION).toEqual(
            'Symptoms not clinically significant',
          )
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return the best score', function () {
          expect(outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE).toEqual(0)
          expect(
            outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION,
          ).toEqual('Symptoms not clinically significant')
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return the best score', function () {
          expect(outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE).toEqual(0)
          expect(
            outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION,
          ).toEqual('Symptoms not clinically significant')
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = snap_calculation.calculate({ payload: random_response })

      describe('INATTENTION_SUBSET', function () {
        it('should return the exepected score', function () {
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE).toEqual(11)
          expect(outcome.SNAP_PARENT_INATTENTION_SCORE_INTERPRETATION).toEqual(
            'Symptoms not clinically significant',
          )
        })
      })

      describe('HYPERACTIVITY_IMPULSIVITY_SUBSET', function () {
        it('should return the exepected score', function () {
          expect(outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE).toEqual(
            17,
          )
          expect(
            outcome.SNAP_PARENT_HYPERACTIVITY_IMPULSIVITY_SCORE_INTERPRETATION,
          ).toEqual('Mild symptoms')
        })
      })

      describe('OPPOSITION_DEFIANCE_SUBSET', function () {
        it('should return the exepected score', function () {
          expect(outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE).toEqual(9)
          expect(
            outcome.SNAP_PARENT_OPPOSITION_DEFIANCE_SCORE_INTERPRETATION,
          ).toEqual('Mild symptoms')
        })
      })
    })
  })
})
