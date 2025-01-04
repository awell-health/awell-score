import { expect } from 'chai'
import R from 'ramda'

import { ZodError } from '../../errors'
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
} from './__testdata__/k_bild_test_responses'
import { KBILD_DOMAINS } from './definition/k_bild_domains'
import { KBILD_INPUTS } from './definition/k_bild_inputs'
import { k_bild } from './k_bild'

const KBILD_RAW_BEST_SCORE = 105
const KBILD_RAW_MEDIAN_SCORE = 60
const KBILD_RAW_WORST_SCORE = 15
const KBILD_TRANSFORMED_BEST_SCORE = 100
const KBILD_TRANSFORMED_MEDIAN_SCORE = 50
const KBILD_TRANSFORMED_WORST_SCORE = 0

const kbild_calculation = execute_test_calculation(k_bild)

const RESULT_IDS = {
  KBILD_RAW_TOTAL_SCORE: 'KBILD_RAW_TOTAL_SCORE',
  KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE:
    'KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
  KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE: 'KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE',
  KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE:
    'KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE',
  KBILD_TRANSFORMED_TOTAL_SCORE: 'KBILD_TRANSFORMED_TOTAL_SCORE',
  KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE:
    'KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
  KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE:
    'KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE',
  KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE:
    'KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE',
}

describe('k_bild', function () {
  it('k_bild calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('k_bild')
  })

  describe('basic assumptions', function () {
    const outcome = kbild_calculation(best_response)

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'KBILD_RAW_TOTAL_SCORE',
        'KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
        'KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE',
        'KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE',
        'KBILD_TRANSFORMED_TOTAL_SCORE',
        'KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
        'KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE',
        'KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE',
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
          'K_BILD_Q01',
          'K_BILD_Q02',
          'K_BILD_Q03',
          'K_BILD_Q04',
          'K_BILD_Q05',
          'K_BILD_Q06',
          'K_BILD_Q07',
          'K_BILD_Q08',
          'K_BILD_Q09',
          'K_BILD_Q10',
          'K_BILD_Q11',
          'K_BILD_Q12',
          'K_BILD_Q13',
          'K_BILD_Q14',
          'K_BILD_Q15',
        ]

        const configured_input_ids =
          get_input_ids_from_calculation_blueprint(KBILD_INPUTS)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('Breathlessness and activities domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'K_BILD_Q01',
          'K_BILD_Q04',
          'K_BILD_Q11',
          'K_BILD_Q13',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(
          KBILD_DOMAINS.BREATHLESSNESS_AND_ACTIVITIES,
        )
      })
    })

    describe('Psychological domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = [
          'K_BILD_Q03',
          'K_BILD_Q05',
          'K_BILD_Q06',
          'K_BILD_Q08',
          'K_BILD_Q10',
          'K_BILD_Q12',
          'K_BILD_Q14',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(KBILD_DOMAINS.PSYCHOLOGICAL)
      })
    })

    describe('Chest symptoms domain has correct input fields', function () {
      it('should be true', function () {
        const EXPECTED_INPUT_IDS = ['K_BILD_Q02', 'K_BILD_Q07', 'K_BILD_Q09']

        expect(EXPECTED_INPUT_IDS).toEqual(KBILD_DOMAINS.CHEST_SYMPTOMS)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kbild_calculation({
            K_BILD_Q01: -1,
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kbild_calculation({
            K_BILD_Q01: 8,
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kbild_calculation({
            K_BILD_Q01: "I'm not a number",
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      describe('Breathlessness and activities domain (raw)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(
              RESULT_IDS.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(
              RESULT_IDS.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Total score (raw)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.KBILD_RAW_TOTAL_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.KBILD_RAW_TOTAL_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(
              RESULT_IDS.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(
              RESULT_IDS.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(
              RESULT_IDS.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(
              RESULT_IDS.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(
              RESULT_IDS.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(
              RESULT_IDS.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE,
            ),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
      describe('Total score (transformed)', function () {
        it('should return undefined for the score', function () {
          const score = R.compose(
            view_result(RESULT_IDS.KBILD_TRANSFORMED_TOTAL_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(undefined)
        })

        it('should return MISSING for the status', function () {
          const score = R.compose(
            view_status(RESULT_IDS.KBILD_TRANSFORMED_TOTAL_SCORE),
            kbild_calculation,
          )({})

          expect(score).toEqual(MISSING_STATUS)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = kbild_calculation(worst_response)

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the worst score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(4)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return the worst score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(7)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the worst score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(3)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the worst score', function () {
          const score = view_result(RESULT_IDS.KBILD_RAW_TOTAL_SCORE)(outcome)

          expect(score).toEqual(KBILD_RAW_WORST_SCORE)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the worst score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_WORST_SCORE)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the worst score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_WORST_SCORE)
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the worst score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_WORST_SCORE)
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the worst score', function () {
          const score = view_result(RESULT_IDS.KBILD_TRANSFORMED_TOTAL_SCORE)(
            outcome,
          )

          expect(score).toEqual(KBILD_TRANSFORMED_WORST_SCORE)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = kbild_calculation(median_response)

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the median score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(16)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return the median score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(28)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the median score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(12)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the median score', function () {
          const score = view_result(RESULT_IDS.KBILD_RAW_TOTAL_SCORE)(outcome)

          expect(score).toEqual(KBILD_RAW_MEDIAN_SCORE)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the median score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_MEDIAN_SCORE)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the median score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_MEDIAN_SCORE)
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the median score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_MEDIAN_SCORE)
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the median score', function () {
          const score = view_result(RESULT_IDS.KBILD_TRANSFORMED_TOTAL_SCORE)(
            outcome,
          )

          expect(score).toEqual(KBILD_TRANSFORMED_MEDIAN_SCORE)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = kbild_calculation(best_response)

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the best score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(28)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return the best score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(49)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the best score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(21)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the best score', function () {
          const score = view_result(RESULT_IDS.KBILD_RAW_TOTAL_SCORE)(outcome)

          expect(score).toEqual(KBILD_RAW_BEST_SCORE)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the best score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_BEST_SCORE)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the best score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_BEST_SCORE)
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the best score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)

          expect(score).toEqual(KBILD_TRANSFORMED_BEST_SCORE)
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the best score', function () {
          const score = view_result(RESULT_IDS.KBILD_TRANSFORMED_TOTAL_SCORE)(
            outcome,
          )

          expect(score).toEqual(KBILD_TRANSFORMED_BEST_SCORE)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = kbild_calculation(random_response)

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the expected score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)
          const EXPECTED_SCORE = 17

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return the expected score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)
          const EXPECTED_SCORE = 19

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the expected score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)
          const EXPECTED_SCORE = 9

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the expected score', function () {
          const score = view_result(RESULT_IDS.KBILD_RAW_TOTAL_SCORE)(outcome)
          const EXPECTED_SCORE = 46

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the expected score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          )(outcome)
          const EXPECTED_SCORE = 54.17

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the expected score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE,
          )(outcome)
          const EXPECTED_SCORE = 28.57

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the expected score', function () {
          const score = view_result(
            RESULT_IDS.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE,
          )(outcome)
          const EXPECTED_SCORE = 33.33

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the expected score', function () {
          const score = view_result(RESULT_IDS.KBILD_TRANSFORMED_TOTAL_SCORE)(
            outcome,
          )
          const EXPECTED_SCORE = 34.44

          expect(score).toEqual(EXPECTED_SCORE)
        })
      })
    })
  })
})
