import { expect } from 'chai'

import { CALCULATIONS } from '../calculation_library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/asrs_test_responses'
import { asrs } from './asrs'
import { ASRS_PARTS, ASRS_SUBSCALES } from './definition'
import { Calculation } from '../../../api/shared/classes/Calculation'
import { ZodError } from 'zod'

const asrs_calculation = new Calculation(asrs)

describe('asrs', function () {
  it('asrs calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('asrs')
  })

  describe('basic assumptions', function () {
    const outcome = asrs_calculation.calculate({ payload: best_response })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'ASRS_PART_A_SCORE',
        'ASRS_PART_B_SCORE',
        'ASRS_TOTAL_SCORE',
        'ASRS_INATTENTIVE_SUBSCALE_SCORE',
        'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE',
        'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE',
      ]
      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).to.eql(EXPECTED_CALCULATION_IDS)
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
        ]

        const configured_input_ids = Object.keys(
          asrs_calculation.inputSchema.shape
        )

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })
    })

    describe('ASRS parts', function () {
      describe('Part A', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q01', 'Q02', 'Q03', 'Q04', 'Q05', 'Q06']

          expect(EXPECTED_INPUT_IDS).to.eql(ASRS_PARTS.PART_A)
        })
      })

      describe('Part B', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
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
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(ASRS_PARTS.PART_B)
        })
      })
    })

    describe('ASRS subscales', function () {
      describe('Inattentive subscale', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = [
            'Q01',
            'Q02',
            'Q03',
            'Q04',
            'Q07',
            'Q08',
            'Q09',
            'Q10',
            'Q11',
          ]

          expect(EXPECTED_INPUT_IDS).to.eql(ASRS_SUBSCALES.INATTENTIVE_SUBSCALE)
        })
      })

      describe('Hyperactive/Impulsive subscale (Motor)', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q05', 'Q06', 'Q12', 'Q13', 'Q14']

          expect(EXPECTED_INPUT_IDS).to.eql(
            ASRS_SUBSCALES.HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR
          )
        })
      })

      describe('Hyperactive/Impulsive subscale (Verbal)', function () {
        it('should have the expected input ids', function () {
          const EXPECTED_INPUT_IDS = ['Q15', 'Q16', 'Q17', 'Q18']

          expect(EXPECTED_INPUT_IDS).to.eql(
            ASRS_SUBSCALES.HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL
          )
        })
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          asrs_calculation.calculate({
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
          asrs_calculation.calculate({
            payload: {
              Q01: 5,
            },
          })
        ).to.throw(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          asrs_calculation.calculate({
            payload: {
              Q01: "I'm not a number",
            },
          })
        ).to.throw(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = asrs_calculation.calculate({ payload: {} })
      describe('Part A', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_PART_A_SCORE).to.eql(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_PART_A_SCORE')(outcome)

        //   expect(score).to.eql(MISSING_STATUS)
        // })
      })
      describe('Part B', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_PART_B_SCORE).to.eql(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_PART_B_SCORE')(outcome)

        //   expect(score).to.eql(MISSING_STATUS)
        // })
      })
      describe('Total score', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_TOTAL_SCORE).to.eql(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_TOTAL_SCORE')(outcome)

        //   expect(score).to.eql(MISSING_STATUS)
        // })
      })
      describe('Inattentive Subscale', function () {
        it('should return undefined for the score', function () {
          expect(outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE).to.eql(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_INATTENTIVE_SUBSCALE_SCORE')(outcome)

        //   expect(score).to.eql(MISSING_STATUS)
        // })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return undefined for the score', function () {
          expect(
            outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE
          ).to.eql(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status('ASRS_INATTENTIVE_SUBSCALE_SCORE')(outcome)

        //   expect(score).to.eql(MISSING_STATUS)
        // })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return undefined for the score', function () {
          expect(
            outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          ).to.eql(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status(
        //     'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE'
        //   )(outcome)

        //   expect(score).to.eql(MISSING_STATUS)
        // })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return undefined for the score', function () {
          expect(
            outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          ).to.eql(null)
        })

        // it('should return MISSING for the status', function () {
        //   const score = view_status(
        //     'ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE'
        // )(outcome)

        //   expect(score).to.eql(MISSING_STATUS)
        // })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = asrs_calculation.calculate({
        payload: worst_response,
      })

      describe('Part A', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_PART_A_SCORE
          expect(score).to.eql(6)
        })
      })
      describe('Part B', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_PART_B_SCORE
          expect(score).to.eql(12)
        })
      })
      describe('Total score', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_TOTAL_SCORE
          expect(score).to.eql(18)
        })
      })
      describe('Inattentive Subscale', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE
          expect(score).to.eql(9)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE
          expect(score).to.eql(5)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return the worst score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          expect(score).to.eql(4)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = asrs_calculation.calculate({
        payload: best_response,
      })

      describe('Part A', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_PART_A_SCORE
          expect(score).to.eql(0)
        })
      })
      describe('Part B', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_PART_B_SCORE
          expect(score).to.eql(0)
        })
      })
      describe('Total score', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_TOTAL_SCORE
          expect(score).to.eql(0)
        })
      })
      describe('Inattentive Subscale', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE
          expect(score).to.eql(0)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE
          expect(score).to.eql(0)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return the best score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          expect(score).to.eql(0)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = asrs_calculation.calculate({
        payload: random_response,
      })

      describe('Part A', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_PART_A_SCORE
          expect(score).to.eql(2)
        })
      })
      describe('Part B', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_PART_B_SCORE
          expect(score).to.eql(5)
        })
      })
      describe('Total score', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_TOTAL_SCORE
          expect(score).to.eql(7)
        })
      })
      describe('Inattentive Subscale', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_INATTENTIVE_SUBSCALE_SCORE
          expect(score).to.eql(4)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Motor)', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_MOTOR_SCORE
          expect(score).to.eql(2)
        })
      })
      describe('Hyperactive/Impulsive Subscale (Verbal)', function () {
        it('should return the exepected score', function () {
          const score = outcome.ASRS_HYPERACTIVE_IMPULSIVE_SUBSCALE_VERBAL_SCORE
          expect(score).to.eql(1)
        })
      })
    })
  })
})
