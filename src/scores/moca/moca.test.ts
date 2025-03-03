import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/moca_test_responses'
import { MOCA_SCALES } from './definition/moca_scales'
import { moca } from './moca'

const WORST_SCORE = 0
const MEDIAN_SCORE = 15
const BEST_SCORE = 30

const moca_calculation = new Score(moca)

describe('moca', function () {
  it('moca calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('moca')
  })

  describe('specific_steps_moca_calc', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ALTERNATING_TRAIL_MARKING',
          'VISUOCONSTRUCTIONAL_SKILLS_CUBE',
          'VISUOCONSTRUCTIONAL_SKILLS_CLOCK',
          'NAMING',
          'FORWARD_DIGIT_SPAN',
          'BACKWARD_DIGIT_SPAN',
          'VIGILANCE',
          'SERIAL_7S',
          'SENTENCE_REPETITION',
          'VERBAL_FLUENCY',
          'ABSTRACTION',
          'DELAYED_RECALL',
          'ORIENTATION',
        ]

        const configured_input_ids = Object.keys(moca_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })

      it('should have the expected input ids configured for the "Visuospatial / executive" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'ALTERNATING_TRAIL_MARKING',
          'VISUOCONSTRUCTIONAL_SKILLS_CUBE',
          'VISUOCONSTRUCTIONAL_SKILLS_CLOCK',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MOCA_SCALES.VISUOSPATIAL_EXECUTIVE)
      })

      it('should have the expected input ids configured for the "Naming" subscale', function () {
        const EXPECTED_INPUT_IDS = ['NAMING']

        expect(EXPECTED_INPUT_IDS).toEqual(MOCA_SCALES.NAMING)
      })

      it('should have the expected input ids configured for the "Attention" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'FORWARD_DIGIT_SPAN',
          'BACKWARD_DIGIT_SPAN',
          'VIGILANCE',
          'SERIAL_7S',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(MOCA_SCALES.ATTENTION)
      })

      it('should have the expected input ids configured for the "Language" subscale', function () {
        const EXPECTED_INPUT_IDS = ['SENTENCE_REPETITION', 'VERBAL_FLUENCY']

        expect(EXPECTED_INPUT_IDS).toEqual(MOCA_SCALES.LANGUAGE)
      })

      it('should have the expected input ids configured for the "Abstraction" subscale', function () {
        const EXPECTED_INPUT_IDS = ['ABSTRACTION']

        expect(EXPECTED_INPUT_IDS).toEqual(MOCA_SCALES.ABSTRACTION)
      })

      it('should have the expected input ids configured for the "Delayed recall" subscale', function () {
        const EXPECTED_INPUT_IDS = ['DELAYED_RECALL']

        expect(EXPECTED_INPUT_IDS).toEqual(MOCA_SCALES.DELAYED_RECALL)
      })

      it('should have the expected input ids configured for the "Orientation" subscale', function () {
        const EXPECTED_INPUT_IDS = ['ORIENTATION']

        expect(EXPECTED_INPUT_IDS).toEqual(MOCA_SCALES.ORIENTATION)
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = moca_calculation.calculate({ payload: best_response })

      it('should return a score for all subscales (n=7) and a total score', function () {
        expect(Object.keys(outcome)).toHaveLength(8)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = [
          'TOTAL',
          'VISUOSPATIAL_EXECUTIVE',
          'NAMING',
          'ATTENTION',
          'LANGUAGE',
          'ABSTRACTION',
          'DELAYED_RECALL',
          'ORIENTATION',
        ]

        const extracted_calculation_ids_from_outcome = Object.keys(outcome)

        expect(EXPECTED_CALCULATION_IDS).toEqual(
          extracted_calculation_ids_from_outcome,
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = moca_calculation.calculate({ payload: {} })

        it('should return null as the result for "Visuospatial / executive" subscale', function () {
          expect(outcome.VISUOSPATIAL_EXECUTIVE).toEqual(null)
        })

        it('should return null as the result for "Naming" subscale', function () {
          expect(outcome.NAMING).toEqual(null)
        })

        it('should return null as the result for "Attention" subscale', function () {
          expect(outcome.ATTENTION).toEqual(null)
        })

        it('should return null as the result for "Language" subscale', function () {
          expect(outcome.LANGUAGE).toEqual(null)
        })

        it('should return null as the result for "Abstraction" subscale', function () {
          expect(outcome.ABSTRACTION).toEqual(null)
        })

        it('should return null as the result for "Delayed recall" subscale', function () {
          expect(outcome.DELAYED_RECALL).toEqual(null)
        })

        it('should return null as the result for "Orientation" subscale', function () {
          expect(outcome.ORIENTATION).toEqual(null)
        })

        it('should return undefined as the total score', function () {
          expect(outcome.TOTAL).toEqual(null)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = moca_calculation.calculate({ payload: worst_response })

        it('should return the worst score for "Visuospatial / executive" subscale', function () {
          expect(outcome.VISUOSPATIAL_EXECUTIVE).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Naming" subscale', function () {
          expect(outcome.NAMING).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Attention" subscale', function () {
          expect(outcome.ATTENTION).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Language" subscale', function () {
          expect(outcome.LANGUAGE).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Abstraction" subscale', function () {
          expect(outcome.ABSTRACTION).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Delayed recall" subscale', function () {
          expect(outcome.DELAYED_RECALL).toEqual(WORST_SCORE)
        })

        it('should return the worst score for "Orientation" subscale', function () {
          expect(outcome.ORIENTATION).toEqual(WORST_SCORE)
        })

        it('should return the worst total score', function () {
          expect(outcome.TOTAL).toEqual(WORST_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = moca_calculation.calculate({ payload: median_response })

        it('should return the median the total score', function () {
          expect(outcome.TOTAL).toEqual(MEDIAN_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = moca_calculation.calculate({ payload: best_response })

        it('should return the best total score', function () {
          expect(outcome.TOTAL).toEqual(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = moca_calculation.calculate({ payload: random_response })

        it('should return the expected score for "Visuospatial / executive" subscale', function () {
          expect(outcome.VISUOSPATIAL_EXECUTIVE).toEqual(3)
        })

        it('should return the expected score for "Naming" subscale', function () {
          expect(outcome.NAMING).toEqual(1)
        })

        it('should return the expected score for "Attention" subscale', function () {
          expect(outcome.ATTENTION).toEqual(4)
        })

        it('should return the expected score for "Language" subscale', function () {
          expect(outcome.LANGUAGE).toEqual(2)
        })

        it('should return the expected score for "Abstraction" subscale', function () {
          expect(outcome.ABSTRACTION).toEqual(2)
        })

        it('should return the expected score for "Delayed recall" subscale', function () {
          expect(outcome.DELAYED_RECALL).toEqual(2)
        })

        it('should return the expected score for "Orientation" subscale', function () {
          expect(outcome.ORIENTATION).toEqual(4)
        })

        it('should return the expected score total score', function () {
          expect(outcome.TOTAL).toEqual(18)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('for inputs where an array of answers is expected (e.g. "VISUOCONSTRUCTIONAL_SKILLS_CLOCK")', function () {
        describe('when an answer is an empty array', function () {
          it('should NOT throw an error', function () {
            expect(() =>
              moca_calculation.calculate({
                payload: {
                  ...best_response,
                  VISUOCONSTRUCTIONAL_SKILLS_CLOCK: [],
                },
              }),
            ).not.toThrow(ZodError)
          })
        })

        describe('when an unexpected answer is passed in the array', function () {
          it('should throw an error', function () {
            expect(() =>
              moca_calculation.calculate({
                payload: {
                  ...best_response,
                  VISUOCONSTRUCTIONAL_SKILLS_CLOCK: ["I'm unexpected"],
                },
              }),
            ).toThrow(ZodError)
          })
        })
      })

      describe('for all other inputs', function () {
        describe('when an answer is not allowed (e.g. is below the expected range)', function () {
          it('should throw an error', function () {
            expect(() =>
              moca_calculation.calculate({
                payload: {
                  ...best_response,
                  ALTERNATING_TRAIL_MARKING: -1,
                },
              }),
            ).toThrow(ZodError)
          })
        })
        describe('when an answer is not allowed (e.g. is above the expected range)', function () {
          it('should return throw an error', function () {
            expect(() =>
              moca_calculation.calculate({
                payload: {
                  ...best_response,
                  ALTERNATING_TRAIL_MARKING: 2,
                },
              }),
            ).toThrow(ZodError)
          })
        })
      })
    })
  })
})
