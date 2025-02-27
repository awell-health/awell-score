import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/mfis_test_responses'
import { MFIS_SUBSCALES } from './definition'
import { mfis } from './mfis'

const mfis_calculation = new Score(mfis)

describe('mfis', function () {
  it('mfis calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('mfis')
  })

  describe('basic assumptions', function () {
    const outcome = mfis_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'MFIS_TOTAL_SCORE',
        'MFIS_PHYSICAL_SUBSCALE_SCORE',
        'MFIS_COGNITIVE_SUBSCALE_SCORE',
        'MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE',
      ]

      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
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

        const configured_input_ids = Object.keys(mfis_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
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

          expect(EXPECTED_INPUT_IDS).toEqual(MFIS_SUBSCALES.COGNITIVE_SUBSCALE)
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

          expect(EXPECTED_INPUT_IDS).toEqual(MFIS_SUBSCALES.PHYSICAL_SUBSCALE)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q08', 'Q09']

          expect(EXPECTED_INPUT_IDS).toEqual(
            MFIS_SUBSCALES.PSYCHOSOCIAL_SUBSCALE,
          )
        })
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mfis_calculation.calculate({
            payload: {
              ...best_response,
              Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mfis_calculation.calculate({
            payload: {
              ...best_response,
              Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mfis_calculation.calculate({
            payload: {
              ...best_response,
              Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = mfis_calculation.calculate({ payload: {} })

      describe('Total score', function () {
        it('should return null score', function () {
          expect(outcome.MFIS_TOTAL_SCORE).toEqual(null)
        })
      })

      describe('Physical subscale', function () {
        it('should return null score', function () {
          expect(outcome.MFIS_PHYSICAL_SUBSCALE_SCORE).toEqual(null)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return null score', function () {
          expect(outcome.MFIS_COGNITIVE_SUBSCALE_SCORE).toEqual(null)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return null score', function () {
          expect(outcome.MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE).toEqual(null)
        })
      })
    })

    describe('when called with a partial response', function () {
      const outcome = mfis_calculation.calculate({
        payload: {
          Q01: 1, // Belongs to cognitive subscale
        },
      })

      describe('Total score', function () {
        it('should return the expected (partial) total score', function () {
          expect(outcome.MFIS_TOTAL_SCORE).toEqual(1)
        })
      })

      describe('Physical subscale', function () {
        it('should return null score', function () {
          expect(outcome.MFIS_PHYSICAL_SUBSCALE_SCORE).toEqual(null)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return 1 as a result as the partial response has an anwer for this subscale', function () {
          expect(outcome.MFIS_COGNITIVE_SUBSCALE_SCORE).toEqual(1)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return null score', function () {
          expect(outcome.MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE).toEqual(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = mfis_calculation.calculate({ payload: worst_response })

      describe('Total score', function () {
        it('should return the worst score', function () {
          expect(outcome.MFIS_TOTAL_SCORE).toEqual(84)
        })
      })

      describe('Physical subscale', function () {
        it('should return the worst score', function () {
          expect(outcome.MFIS_PHYSICAL_SUBSCALE_SCORE).toEqual(36)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the worst score', function () {
          expect(outcome.MFIS_COGNITIVE_SUBSCALE_SCORE).toEqual(40)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return the worst score', function () {
          expect(outcome.MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE).toEqual(8)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = mfis_calculation.calculate({ payload: best_response })

      describe('Total score', function () {
        it('should return the best score', function () {
          expect(outcome.MFIS_TOTAL_SCORE).toEqual(0)
        })
      })

      describe('Physical subscale', function () {
        it('should return the best score', function () {
          expect(outcome.MFIS_PHYSICAL_SUBSCALE_SCORE).toEqual(0)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the best score', function () {
          expect(outcome.MFIS_COGNITIVE_SUBSCALE_SCORE).toEqual(0)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return the best score', function () {
          expect(outcome.MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE).toEqual(0)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = mfis_calculation.calculate({ payload: median_response })

      describe('Total score', function () {
        it('should return the median score', function () {
          expect(outcome.MFIS_TOTAL_SCORE).toEqual(42)
        })
      })

      describe('Physical subscale', function () {
        it('should return the median score', function () {
          expect(outcome.MFIS_PHYSICAL_SUBSCALE_SCORE).toEqual(18)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the median score', function () {
          expect(outcome.MFIS_COGNITIVE_SUBSCALE_SCORE).toEqual(20)
        })
      })

      describe('Psychosocial subscale', function () {
        it('should return the median score', function () {
          expect(outcome.MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE).toEqual(4)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = mfis_calculation.calculate({ payload: random_response })

      describe('Total score', function () {
        it('should return the exepected score', function () {
          expect(outcome.MFIS_TOTAL_SCORE).toEqual(40)
        })
      })

      describe('Physical subscale', function () {
        it('should return the exepected score', function () {
          expect(outcome.MFIS_PHYSICAL_SUBSCALE_SCORE).toEqual(19)
        })
      })

      describe('Cognitive subscale', function () {
        it('should return the exepected score', function () {
          expect(outcome.MFIS_COGNITIVE_SUBSCALE_SCORE).toEqual(18)
        })
      })
      describe('Psychosocial subscale', function () {
        it('should return the exepected score', function () {
          expect(outcome.MFIS_PSYCHOSOCIAL_SUBSCALE_SCORE).toEqual(3)
        })
      })
    })
  })
})
