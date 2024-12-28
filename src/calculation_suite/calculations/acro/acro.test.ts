import { expect } from 'chai'

import { CALCULATIONS } from '../calculation_library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/acro_test_responses'
import { acro } from './acro'
import { ACRO_SUBSCALES } from './definition'
import { Calculation } from '../../../api/shared/classes/Calculation'
import { ZodError } from 'zod'

const acro_calculation = new Calculation(acro)

describe('acro', function () {
  it('acro calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('acro')
  })

  describe('basic assumptions', function () {
    const outcome = acro_calculation.calculate({ payload: best_response })

    it('should have the expected result ids', function () {
      const EXPECTED_RESULT_IDS = [
        'ACRO_GLOBAL_SCORE',
        'ACRO_PHYSICAL_SUBSCALE_SCORE',
        'ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE',
        'ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE',
      ]
      const configured_calculation_ids = Object.keys(outcome)
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
          'Q22',
        ]

        const configured_input_ids = Object.keys(
          acro_calculation.inputSchema.shape
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('acro subscales', function () {
      describe('Physical subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q01',
            'Q03',
            'Q09',
            'Q13',
            'Q14',
            'Q15',
            'Q19',
            'Q22',
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(ACRO_SUBSCALES.PHYSICAL_SUBSCALE)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q02',
            'Q04',
            'Q07',
            'Q11',
            'Q12',
            'Q16',
            'Q17',
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(
            ACRO_SUBSCALES.PSYCHOLOGICAL_APPEARANCE_SUBSCALE
          )
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q05',
            'Q06',
            'Q08',
            'Q10',
            'Q18',
            'Q20',
            'Q21',
          ]
          expect(EXPECTED_INPUT_IDS).to.eql(
            ACRO_SUBSCALES.PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
          )
        })
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          acro_calculation.calculate({
            payload: {
              Q01: -1,
            },
          })
        ).to.throw(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          acro_calculation.calculate({
            payload: {
              Q01: 6,
            },
          })
        ).to.throw(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          acro_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          })
        ).to.throw(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = acro_calculation.calculate({ payload: {} })

      describe('Global score', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).to.eql(null)
        })
      })

      describe('Physical subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).to.eql(null)
        })
      })

      describe('Psychological appearance subscale score subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).to.eql(null)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
          ).to.eql(null)
        })
      })
    })

    describe('when called with a partial response', function () {
      const outcome = acro_calculation.calculate({
        payload: {
          Q02: 1, // Belongs to psychological appearance subscale
        },
      })

      describe('Total score', function () {
        it('should return the expected (partial) total score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).to.eql(null)
        })
      })

      describe('Physical subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).to.eql(null)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return missing for the result status and undefined score as the partial response', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).to.eql(null)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return missing for the result status and undefined score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
          ).to.eql(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = acro_calculation.calculate({
        payload: worst_response,
      })

      describe('Total score', function () {
        it('should return the worst score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).to.eql(0)
        })
      })

      describe('Physical subscale', function () {
        it('should return the worst score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).to.eql(0)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the worst score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).to.eql(0)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return the worst score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
          ).to.eql(0)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = acro_calculation.calculate({
        payload: best_response,
      })

      describe('Total score', function () {
        it('should return the best score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).to.eql(100)
        })
      })

      describe('Physical subscale', function () {
        it('should return the best score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).to.eql(100)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the best score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).to.eql(100)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return the best score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
          ).to.eql(100)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = acro_calculation.calculate({
        payload: median_response,
      })

      describe('Total score', function () {
        it('should return the median score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).to.eql(50)
        })
      })

      describe('Physical subscale', function () {
        it('should return the median score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).to.eql(50)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the median score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).to.eql(50)
        })
      })

      describe('Psychosocial personal relationships subscale', function () {
        it('should return the median score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
          ).to.eql(50)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = acro_calculation.calculate({
        payload: random_response,
      })

      describe('Total score', function () {
        it('should return the exepected score', function () {
          expect(outcome.ACRO_GLOBAL_SCORE).to.eql(53.41)
        })
      })

      describe('Physical subscale', function () {
        it('should return the exepected score', function () {
          expect(outcome.ACRO_PHYSICAL_SUBSCALE_SCORE).to.eql(50)
        })
      })

      describe('Psychological appearance subscale', function () {
        it('should return the exepected score', function () {
          expect(outcome.ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE).to.eql(67.86)
        })
      })
      describe('Psychosocial personal relationships subscale', function () {
        it('should return the exepected score', function () {
          expect(
            outcome.ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE
          ).to.eql(42.86)
        })
      })
    })
  })
})
