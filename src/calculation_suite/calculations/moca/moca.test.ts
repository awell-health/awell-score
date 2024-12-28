/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../shared_functions'
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

const moca_calculation = execute_test_calculation(moca)

describe('moca', function () {
  it('moca calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).to.have.property('moca')
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
        ].sort()

        const configured_input_ids = R.compose(
          (input_ids: string[]) => input_ids.sort(),
          R.flatten,
          R.map(get_input_ids_in_subscale)
        )(MOCA_SCALES)

        expect(EXPECTED_INPUT_IDS).to.eql(configured_input_ids)
      })

      it('should have the expected input ids configured for the "Visuospatial / executive" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'ALTERNATING_TRAIL_MARKING',
          'VISUOCONSTRUCTIONAL_SKILLS_CUBE',
          'VISUOCONSTRUCTIONAL_SKILLS_CLOCK',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('VISUOSPATIAL_EXECUTIVE')(
            MOCA_SCALES
          )
        )
      })

      it('should have the expected input ids configured for the "Naming" subscale', function () {
        const EXPECTED_INPUT_IDS = ['NAMING']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('NAMING')(MOCA_SCALES)
        )
      })

      it('should have the expected input ids configured for the "Attention" subscale', function () {
        const EXPECTED_INPUT_IDS = [
          'FORWARD_DIGIT_SPAN',
          'BACKWARD_DIGIT_SPAN',
          'VIGILANCE',
          'SERIAL_7S',
        ]

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('ATTENTION')(MOCA_SCALES)
        )
      })

      it('should have the expected input ids configured for the "Language" subscale', function () {
        const EXPECTED_INPUT_IDS = ['SENTENCE_REPETITION', 'VERBAL_FLUENCY']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('LANGUAGE')(MOCA_SCALES)
        )
      })

      it('should have the expected input ids configured for the "Abstraction" subscale', function () {
        const EXPECTED_INPUT_IDS = ['ABSTRACTION']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('ABSTRACTION')(MOCA_SCALES)
        )
      })

      it('should have the expected input ids configured for the "Delayed recall" subscale', function () {
        const EXPECTED_INPUT_IDS = ['DELAYED_RECALL']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('DELAYED_RECALL')(MOCA_SCALES)
        )
      })

      it('should have the expected input ids configured for the "Orientation" subscale', function () {
        const EXPECTED_INPUT_IDS = ['ORIENTATION']

        expect(EXPECTED_INPUT_IDS).to.eql(
          get_input_ids_for_specific_subscale('ORIENTATION')(MOCA_SCALES)
        )
      })
    })

    describe('each calculated score includes the correct output result and correct score title', function () {
      const outcome = moca_calculation(best_response)

      it('should return a score for all subscales (n=7) and a total score', function () {
        expect(outcome).to.have.length(8)
      })

      it('should have all the correct calculation ids', function () {
        const EXPECTED_CALCULATION_IDS = [
          'VISUOSPATIAL_EXECUTIVE',
          'NAMING',
          'ATTENTION',
          'LANGUAGE',
          'ABSTRACTION',
          'DELAYED_RECALL',
          'ORIENTATION',
          'TOTAL',
        ]

        const extracted_calculation_ids_from_outcome =
          get_result_ids_from_calculation_output(outcome)

        expect(EXPECTED_CALCULATION_IDS).to.eql(
          extracted_calculation_ids_from_outcome
        )
      })
    })

    describe('a score is only calculated when all mandatory fields are entered', function () {
      describe('when an empty response is passed', function () {
        const outcome = moca_calculation({})

        it('should return undefined as the result for "Visuospatial / executive" subscale', function () {
          const score = view_result('VISUOSPATIAL_EXECUTIVE')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "Naming" subscale', function () {
          const score = view_result('NAMING')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "Attention" subscale', function () {
          const score = view_result('ATTENTION')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "Language" subscale', function () {
          const score = view_result('LANGUAGE')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "Abstraction" subscale', function () {
          const score = view_result('ABSTRACTION')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "Delayed recall" subscale', function () {
          const score = view_result('DELAYED_RECALL')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the result for "Orientation" subscale', function () {
          const score = view_result('ORIENTATION')(outcome)
          expect(score).to.eql(undefined)
        })

        it('should return undefined as the total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(undefined)
        })
      })
    })

    describe('each calculated score includes the correct formula and outputs the correct result', function () {
      describe('when worst response is passed', function () {
        const outcome = moca_calculation(worst_response)

        it('should return the worst score for "Visuospatial / executive" subscale', function () {
          const score = view_result('VISUOSPATIAL_EXECUTIVE')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for "Naming" subscale', function () {
          const score = view_result('NAMING')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for "Attention" subscale', function () {
          const score = view_result('ATTENTION')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for "Language" subscale', function () {
          const score = view_result('LANGUAGE')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for "Abstraction" subscale', function () {
          const score = view_result('ABSTRACTION')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for "Delayed recall" subscale', function () {
          const score = view_result('DELAYED_RECALL')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst score for "Orientation" subscale', function () {
          const score = view_result('ORIENTATION')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })

        it('should return the worst total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(WORST_SCORE)
        })
      })

      describe('when a median response is passed', function () {
        const outcome = moca_calculation(median_response)

        it('should return the median the total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(MEDIAN_SCORE)
        })
      })

      describe('when best response is passed', function () {
        const outcome = moca_calculation(best_response)

        it('should return the best total score', function () {
          const score = view_result('TOTAL')(outcome)
          expect(score).to.eql(BEST_SCORE)
        })
      })

      describe('when a random response is passed', function () {
        const outcome = moca_calculation(random_response)

        it('should return the expected score for "Visuospatial / executive" subscale', function () {
          const score = view_result('VISUOSPATIAL_EXECUTIVE')(outcome)
          const EXPECTED_SCORE = 3

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for "Naming" subscale', function () {
          const score = view_result('NAMING')(outcome)
          const EXPECTED_SCORE = 1

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for "Attention" subscale', function () {
          const score = view_result('ATTENTION')(outcome)
          const EXPECTED_SCORE = 4

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for "Language" subscale', function () {
          const score = view_result('LANGUAGE')(outcome)
          const EXPECTED_SCORE = 2

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for "Abstraction" subscale', function () {
          const score = view_result('ABSTRACTION')(outcome)
          const EXPECTED_SCORE = 2

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for "Delayed recall" subscale', function () {
          const score = view_result('DELAYED_RECALL')(outcome)
          const EXPECTED_SCORE = 2

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score for "Orientation" subscale', function () {
          const score = view_result('ORIENTATION')(outcome)
          const EXPECTED_SCORE = 4

          expect(score).to.eql(EXPECTED_SCORE)
        })

        it('should return the expected score total score', function () {
          const score = view_result('TOTAL')(outcome)
          const EXPECTED_SCORE = 18

          expect(score).to.eql(EXPECTED_SCORE)
        })
      })
    })

    describe('values entered by the user are checked to verify they are inside specified ranges', function () {
      describe('for inputs where an array of answers is expected (e.g. "VISUOCONSTRUCTIONAL_SKILLS_CLOCK")', function () {
        describe('when an answer is an empty array', function () {
          it('should NOT throw an error', function () {
            expect(() =>
              moca_calculation({
                VISUOCONSTRUCTIONAL_SKILLS_CLOCK: [],
              })
            ).to.not.throw(InvalidInputsError)
          })
        })

        describe('when an unexpected answer is passed in the array', function () {
          it('should throw an error', function () {
            expect(() =>
              moca_calculation({
                VISUOCONSTRUCTIONAL_SKILLS_CLOCK: ["I'm unexpected"],
              })
            ).to.throw(InvalidInputsError)
          })
        })
      })

      describe('for all other inputs', function () {
        describe('when an answer is not allowed (e.g. is below the expected range)', function () {
          it('should throw an error', function () {
            expect(() =>
              moca_calculation({
                ALTERNATING_TRAIL_MARKING: -1,
              })
            ).to.throw(InvalidInputsError)
          })
        })
        describe('when an answer is not allowed (e.g. is above the expected range)', function () {
          it('should return throw an error', function () {
            expect(() =>
              moca_calculation({
                ALTERNATING_TRAIL_MARKING: 2,
              })
            ).to.throw(InvalidInputsError)
          })
        })
      })
    })
  })
})
