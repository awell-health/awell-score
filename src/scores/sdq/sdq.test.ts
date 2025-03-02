import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import { SDQ_INTERPRETATION_SCALE_IDS } from './__testdata__/sdq_interpretation_scale_ids'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/sdq_test_responses'
import { SDQ_SUBSCALES } from './definition/sdq_subscales'
import { sdq } from './sdq'
import { pick } from 'lodash'

const IMPACT_SCALE_IDS = [
  'IMPACT_PARENT_REPORTED',
  'IMPACT_TEACHER_REPORTED',
  'IMPACT_SELF_REPORTED',
]

const sdq_calculation = new Score(sdq)

describe('sdq', function () {
  it('sdq calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('sdq')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'EMOTIONAL_PROBLEMS_Q01',
        'EMOTIONAL_PROBLEMS_Q02',
        'EMOTIONAL_PROBLEMS_Q03',
        'EMOTIONAL_PROBLEMS_Q04',
        'EMOTIONAL_PROBLEMS_Q05',
        'CONDUCT_PROBLEMS_Q01',
        'CONDUCT_PROBLEMS_Q02',
        'CONDUCT_PROBLEMS_Q03',
        'CONDUCT_PROBLEMS_Q04',
        'CONDUCT_PROBLEMS_Q05',
        'HYPERACTIVITY_Q01',
        'HYPERACTIVITY_Q02',
        'HYPERACTIVITY_Q03',
        'HYPERACTIVITY_Q04',
        'HYPERACTIVITY_Q05',
        'PEER_PROBLEMS_Q01',
        'PEER_PROBLEMS_Q02',
        'PEER_PROBLEMS_Q03',
        'PEER_PROBLEMS_Q04',
        'PEER_PROBLEMS_Q05',
        'PROSOCIAL_Q01',
        'PROSOCIAL_Q02',
        'PROSOCIAL_Q03',
        'PROSOCIAL_Q04',
        'PROSOCIAL_Q05',
        'IMPACT_PARENT_Q01',
        'IMPACT_PARENT_Q02',
        'IMPACT_PARENT_Q03',
        'IMPACT_PARENT_Q04',
        'IMPACT_PARENT_Q05',
        'IMPACT_TEACHER_Q01',
        'IMPACT_TEACHER_Q02',
        'IMPACT_TEACHER_Q03',
        'IMPACT_SELF_REPORT_Q01',
        'IMPACT_SELF_REPORT_Q02',
        'IMPACT_SELF_REPORT_Q03',
        'IMPACT_SELF_REPORT_Q04',
        'IMPACT_SELF_REPORT_Q05',
      ]

      const configured_input_ids = Object.keys(sdq_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Emotional problems" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'EMOTIONAL_PROBLEMS_Q01',
        'EMOTIONAL_PROBLEMS_Q02',
        'EMOTIONAL_PROBLEMS_Q03',
        'EMOTIONAL_PROBLEMS_Q04',
        'EMOTIONAL_PROBLEMS_Q05',
      ]

      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.EMOTIONAL_PROBLEMS)
    })

    it('should have the expected input ids configured for the "Conduct problems" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'CONDUCT_PROBLEMS_Q01',
        'CONDUCT_PROBLEMS_Q02',
        'CONDUCT_PROBLEMS_Q03',
        'CONDUCT_PROBLEMS_Q04',
        'CONDUCT_PROBLEMS_Q05',
      ]
      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.CONDUCT_PROBLEMS)
    })
    it('should have the expected input ids configured for the "Hyperactivity" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'HYPERACTIVITY_Q01',
        'HYPERACTIVITY_Q02',
        'HYPERACTIVITY_Q03',
        'HYPERACTIVITY_Q04',
        'HYPERACTIVITY_Q05',
      ]
      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.HYPERACTIVITY)
    })
    it('should have the expected input ids configured for the "Peer problems" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'PEER_PROBLEMS_Q01',
        'PEER_PROBLEMS_Q02',
        'PEER_PROBLEMS_Q03',
        'PEER_PROBLEMS_Q04',
        'PEER_PROBLEMS_Q05',
      ]
      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.PEER_PROBLEMS)
    })
    it('should have the expected input ids configured for the "Prosocial" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'PROSOCIAL_Q01',
        'PROSOCIAL_Q02',
        'PROSOCIAL_Q03',
        'PROSOCIAL_Q04',
        'PROSOCIAL_Q05',
      ]
      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.PROSOCIAL)
    })
    it('should have the expected input ids configured for the "Impact (parent reported)" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'IMPACT_PARENT_Q01',
        'IMPACT_PARENT_Q02',
        'IMPACT_PARENT_Q03',
        'IMPACT_PARENT_Q04',
        'IMPACT_PARENT_Q05',
      ]
      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.IMPACT_PARENT_REPORTED)
    })
    it('should have the expected input ids configured for the "Impact (teacher reported)" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'IMPACT_TEACHER_Q01',
        'IMPACT_TEACHER_Q02',
        'IMPACT_TEACHER_Q03',
      ]
      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.IMPACT_TEACHER_REPORTED)
    })
    it('should have the expected input ids configured for the "Impact (self reported)" subscale', function () {
      const EXPECTED_INPUTS_IDS = [
        'IMPACT_SELF_REPORT_Q01',
        'IMPACT_SELF_REPORT_Q02',
        'IMPACT_SELF_REPORT_Q03',
        'IMPACT_SELF_REPORT_Q04',
        'IMPACT_SELF_REPORT_Q05',
      ]
      expect(EXPECTED_INPUTS_IDS).toEqual(SDQ_SUBSCALES.IMPACT_SELF_REPORTED)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = sdq_calculation.calculate({ payload: best_response })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        /** Raw subscale scores */
        'EMOTIONAL_PROBLEMS',
        'CONDUCT_PROBLEMS',
        'HYPERACTIVITY',
        'PEER_PROBLEMS',
        'PROSOCIAL',
        'TOTAL',
        'INTERNALISING',
        'EXTERNALISING',
        ...IMPACT_SCALE_IDS,
        ...SDQ_INTERPRETATION_SCALE_IDS,
      ].sort()

      const extracted_calculation_ids_from_outcome = Object.keys(outcome).sort()

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = sdq_calculation.calculate({ payload: {} })

      it('should return null as the result for "Emotional problems" subscale', function () {
        expect(outcome.EMOTIONAL_PROBLEMS).toEqual(null)
      })
      it('should return null as the result for "Conduct problems" subscale', function () {
        expect(outcome.CONDUCT_PROBLEMS).toEqual(null)
      })
      it('should return null as the result for "Hyperactivity" subscale', function () {
        expect(outcome.HYPERACTIVITY).toEqual(null)
      })
      it('should return null as the result for "Peer problems" subscale', function () {
        expect(outcome.PEER_PROBLEMS).toEqual(null)
      })
      it('should return null as the result for "Prosocial" subscale', function () {
        expect(outcome.PROSOCIAL).toEqual(null)
      })
      it('should return null as the result for "Internalising" subscale', function () {
        expect(outcome.INTERNALISING).toEqual(null)
      })
      it('should return null as the result for "Externalising" subscale', function () {
        expect(outcome.EXTERNALISING).toEqual(null)
      })
      it('should return null as the total score', function () {
        expect(outcome.TOTAL).toEqual(null)
      })

      it('should return null for the impact subscales', function () {
        const impactScores = pick(outcome, IMPACT_SCALE_IDS)

        Object.values(impactScores).forEach(score => {
          expect(score).toEqual(null)
        })
      })

      it('should return null for all interpretation subscales', function () {
        const scores = pick(outcome, SDQ_INTERPRETATION_SCALE_IDS)

        Object.values(scores).forEach(score => {
          expect(score).toEqual(null)
        })
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when worst response is passed', function () {
      const outcome = sdq_calculation.calculate({ payload: worst_response })

      it('should return the worst score for "Emotional problems" subscale', function () {
        const WORST_SCORE = 10
        expect(outcome.EMOTIONAL_PROBLEMS).toEqual(WORST_SCORE)
      })
      it('should returnthe worst score for "Conduct problems" subscale', function () {
        const WORST_SCORE = 10
        expect(outcome.CONDUCT_PROBLEMS).toEqual(WORST_SCORE)
      })
      it('should return the worst score for "Hyperactivity" subscale', function () {
        const WORST_SCORE = 10
        expect(outcome.HYPERACTIVITY).toEqual(WORST_SCORE)
      })
      it('should return the worst score for "Peer problems" subscale', function () {
        const WORST_SCORE = 10
        expect(outcome.PEER_PROBLEMS).toEqual(WORST_SCORE)
      })
      it('should return the worst score for "Prosocial" subscale', function () {
        const WORST_SCORE = 10
        expect(outcome.PROSOCIAL).toEqual(WORST_SCORE)
      })
      it('should return the worst score for "Internalising" subscale', function () {
        const WORST_SCORE = 20
        expect(outcome.INTERNALISING).toEqual(WORST_SCORE)
      })
      it('should return the worst score for "Externalising" subscale', function () {
        const WORST_SCORE = 20
        expect(outcome.EXTERNALISING).toEqual(WORST_SCORE)
      })
      it('should return the worst total score', function () {
        const WORST_SCORE = 40
        expect(outcome.TOTAL).toEqual(WORST_SCORE)
      })
      it('should return the worst score for the impact subscales', function () {
        const WORST_SCORE_IMPACT_PARENT_REPORTED = 10
        const WORST_SCORE_IMPACT_TEACHER_REPORTED = 6
        const WORST_SCORE_IMPACT_SELF_REPORTED = 10

        expect(outcome.IMPACT_PARENT_REPORTED).toEqual(
          WORST_SCORE_IMPACT_PARENT_REPORTED,
        )
        expect(outcome.IMPACT_TEACHER_REPORTED).toEqual(
          WORST_SCORE_IMPACT_TEACHER_REPORTED,
        )
        expect(outcome.IMPACT_SELF_REPORTED).toEqual(
          WORST_SCORE_IMPACT_SELF_REPORTED,
        )
      })
    })
    describe('when a median response is passed', function () {
      const outcome = sdq_calculation.calculate({ payload: median_response })

      it('should return the median score for "Emotional problems" subscale', function () {
        const MEDIAN_SCORE = 5
        expect(outcome.EMOTIONAL_PROBLEMS).toEqual(MEDIAN_SCORE)
      })
      it('should returnthe median score for "Conduct problems" subscale', function () {
        const MEDIAN_SCORE = 5
        expect(outcome.CONDUCT_PROBLEMS).toEqual(MEDIAN_SCORE)
      })
      it('should return the median score for "Hyperactivity" subscale', function () {
        const MEDIAN_SCORE = 5
        expect(outcome.HYPERACTIVITY).toEqual(MEDIAN_SCORE)
      })
      it('should return the median score for "Peer problems" subscale', function () {
        const MEDIAN_SCORE = 5
        expect(outcome.PEER_PROBLEMS).toEqual(MEDIAN_SCORE)
      })
      it('should return the median score for "Prosocial" subscale', function () {
        const MEDIAN_SCORE = 5
        expect(outcome.PROSOCIAL).toEqual(MEDIAN_SCORE)
      })
      it('should return the median score for "Internalising" subscale', function () {
        const MEDIAN_SCORE = 10
        expect(outcome.INTERNALISING).toEqual(MEDIAN_SCORE)
      })
      it('should return the median score for "Externalising" subscale', function () {
        const MEDIAN_SCORE = 10
        expect(outcome.EXTERNALISING).toEqual(MEDIAN_SCORE)
      })
      it('should return the worst total score', function () {
        const MEDIAN_SCORE = 20
        expect(outcome.TOTAL).toEqual(MEDIAN_SCORE)
      })
      it('should return the median score for the impact subscales', function () {
        const MEDIAN_SCORE_IMPACT_PARENT_REPORTED = 5
        const MEDIAN_SCORE_IMPACT_TEACHER_REPORTED = 3
        const MEDIAN_SCORE_IMPACT_SELF_REPORTED = 5
        expect(outcome.IMPACT_PARENT_REPORTED).toEqual(
          MEDIAN_SCORE_IMPACT_PARENT_REPORTED,
        )
        expect(outcome.IMPACT_TEACHER_REPORTED).toEqual(
          MEDIAN_SCORE_IMPACT_TEACHER_REPORTED,
        )
        expect(outcome.IMPACT_SELF_REPORTED).toEqual(
          MEDIAN_SCORE_IMPACT_SELF_REPORTED,
        )
      })
    })

    describe('when best response is passed', function () {
      const outcome = sdq_calculation.calculate({ payload: best_response })
      const BEST_SCORE = 0 // Best score is 0 for all subscales
      it('should return the best score for "Emotional problems" subscale', function () {
        expect(outcome.EMOTIONAL_PROBLEMS).toEqual(BEST_SCORE)
      })
      it('should returnthe best score for "Conduct problems" subscale', function () {
        expect(outcome.CONDUCT_PROBLEMS).toEqual(BEST_SCORE)
      })
      it('should return the best score for "Hyperactivity" subscale', function () {
        expect(outcome.HYPERACTIVITY).toEqual(BEST_SCORE)
      })
      it('should return the best score for "Peer problems" subscale', function () {
        expect(outcome.PEER_PROBLEMS).toEqual(BEST_SCORE)
      })
      it('should return the best score for "Prosocial" subscale', function () {
        expect(outcome.PROSOCIAL).toEqual(BEST_SCORE)
      })
      it('should return the best score for "Internalising" subscale', function () {
        expect(outcome.INTERNALISING).toEqual(BEST_SCORE)
      })
      it('should return the best score for "Externalising" subscale', function () {
        expect(outcome.EXTERNALISING).toEqual(BEST_SCORE)
      })
      it('should return the worst total score', function () {
        expect(outcome.TOTAL).toEqual(BEST_SCORE)
      })
      it('should return the best score for the impact subscales', function () {
        expect(outcome.IMPACT_PARENT_REPORTED).toEqual(BEST_SCORE)
        expect(outcome.IMPACT_TEACHER_REPORTED).toEqual(BEST_SCORE)
        expect(outcome.IMPACT_SELF_REPORTED).toEqual(BEST_SCORE)
      })
    })
    describe('when a random response is passed', function () {
      const outcome = sdq_calculation.calculate({ payload: random_response })
      it('should return the expected score for "Emotional problems" subscale', function () {
        const EXPECTED_SCORE = 4
        expect(outcome.EMOTIONAL_PROBLEMS).toEqual(EXPECTED_SCORE)
      })
      it('should returnthe expected score for "Conduct problems" subscale', function () {
        const EXPECTED_SCORE = 8
        expect(outcome.CONDUCT_PROBLEMS).toEqual(EXPECTED_SCORE)
      })
      it('should return the expected score for "Hyperactivity" subscale', function () {
        const EXPECTED_SCORE = 4
        expect(outcome.HYPERACTIVITY).toEqual(EXPECTED_SCORE)
      })
      it('should return the expected score for "Peer problems" subscale', function () {
        const EXPECTED_SCORE = 6
        expect(outcome.PEER_PROBLEMS).toEqual(EXPECTED_SCORE)
      })
      it('should return the expected score for "Prosocial" subscale', function () {
        const EXPECTED_SCORE = 4
        expect(outcome.PROSOCIAL).toEqual(EXPECTED_SCORE)
      })
      it('should return the expected score for "Internalising" subscale', function () {
        const EXPECTED_SCORE = 10
        expect(outcome.INTERNALISING).toEqual(EXPECTED_SCORE)
      })
      it('should return the expected score for "Externalising" subscale', function () {
        const EXPECTED_SCORE = 12
        expect(outcome.EXTERNALISING).toEqual(EXPECTED_SCORE)
      })
      it('should return the worst total score', function () {
        const EXPECTED_SCORE = 22
        expect(outcome.TOTAL).toEqual(EXPECTED_SCORE)
      })
      it('should return the expected score for the impact subscales', function () {
        const EXPECTED_SCORE_IMPACT_PARENT_REPORTED = 2
        const EXPECTED_SCORE_IMPACT_TEACHER_REPORTED = 3
        const EXPECTED_SCORE_IMPACT_SELF_REPORTED = 4
        expect(outcome.IMPACT_PARENT_REPORTED).toEqual(
          EXPECTED_SCORE_IMPACT_PARENT_REPORTED,
        )
        expect(outcome.IMPACT_TEACHER_REPORTED).toEqual(
          EXPECTED_SCORE_IMPACT_TEACHER_REPORTED,
        )
        expect(outcome.IMPACT_SELF_REPORTED).toEqual(
          EXPECTED_SCORE_IMPACT_SELF_REPORTED,
        )
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an error', function () {
        expect(() =>
          sdq_calculation.calculate({
            payload: {
              ...best_response,
              EMOTIONAL_PROBLEMS_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an error', function () {
        expect(() =>
          sdq_calculation.calculate({
            payload: {
              ...best_response,
              EMOTIONAL_PROBLEMS_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should return throw an error', function () {
        expect(() =>
          sdq_calculation.calculate({
            payload: {
              ...best_response,
              EMOTIONAL_PROBLEMS_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
