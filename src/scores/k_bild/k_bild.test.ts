import { ZodError } from 'zod'
import { Score } from '../../classes'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/k_bild_test_responses'
import { KBILD_DOMAINS } from './definition/k_bild_domains'
import { k_bild } from './k_bild'
import { ScoreLibrary } from '../library'

const kbild_calculation = new Score(k_bild)

describe('k_bild', function () {
  it('k_bild calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('k_bild')
  })

  describe('basic assumptions', function () {
    const outcome = kbild_calculation.calculate({ payload: best_response })

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

      const configured_calculation_ids = Object.keys(outcome)
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

        const configured_input_ids = Object.keys(kbild_calculation.inputSchema)

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
          kbild_calculation.calculate({
            payload: {
              K_BILD_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kbild_calculation.calculate({
            payload: {
              K_BILD_Q01: 8,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          kbild_calculation.calculate({
            payload: {
              K_BILD_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = kbild_calculation.calculate({ payload: {} })

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return null for the score', function () {
          expect(
            outcome.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(null)
        })
      })

      describe('Psychological domain (raw)', function () {
        it('should return null for the score', function () {
          expect(outcome.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(null)
        })
      })

      describe('Chest symptoms domain (raw)', function () {
        it('should return null for the score', function () {
          expect(outcome.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(null)
        })
      })

      describe('Total score (raw)', function () {
        it('should return null for the score', function () {
          expect(outcome.KBILD_RAW_TOTAL_SCORE).toEqual(null)
        })
      })

      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return null for the score', function () {
          expect(
            outcome.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(null)
        })
      })

      describe('Psychological domain (transformed)', function () {
        it('should return null for the score', function () {
          expect(outcome.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(
            null,
          )
        })
      })

      describe('Chest symptoms domain (transformed)', function () {
        it('should return null for the score', function () {
          expect(outcome.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(
            null,
          )
        })
      })

      describe('Total score (transformed)', function () {
        it('should return null for the score', function () {
          expect(outcome.KBILD_TRANSFORMED_TOTAL_SCORE).toEqual(null)
        })
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = kbild_calculation.calculate({ payload: worst_response })

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the worst score', function () {
          expect(
            outcome.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(4)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return the worst score', function () {
          expect(outcome.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(7)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the worst score', function () {
          expect(outcome.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(3)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the worst score', function () {
          expect(outcome.KBILD_RAW_TOTAL_SCORE).toEqual(15)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the worst score', function () {
          expect(
            outcome.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(0)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the worst score', function () {
          expect(outcome.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(
            0,
          )
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the worst score', function () {
          expect(outcome.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(
            0,
          )
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the worst score', function () {
          expect(outcome.KBILD_TRANSFORMED_TOTAL_SCORE).toEqual(0)
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = kbild_calculation.calculate({ payload: median_response })

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the median score', function () {
          expect(
            outcome.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(16)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return the median score', function () {
          expect(outcome.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(28)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the median score', function () {
          expect(outcome.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(12)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the median score', function () {
          expect(outcome.KBILD_RAW_TOTAL_SCORE).toEqual(60)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the median score', function () {
          expect(
            outcome.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(50)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the median score', function () {
          expect(outcome.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(
            50,
          )
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the median score', function () {
          expect(outcome.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(
            50,
          )
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the median score', function () {
          expect(outcome.KBILD_TRANSFORMED_TOTAL_SCORE).toEqual(50)
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = kbild_calculation.calculate({ payload: best_response })

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the best score', function () {
          expect(
            outcome.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(28)
        })
      })
      describe('Psychological domain (raw)', function () {
        it('should return the best score', function () {
          expect(outcome.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(49)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the best score', function () {
          expect(outcome.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(21)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the best score', function () {
          expect(outcome.KBILD_RAW_TOTAL_SCORE).toEqual(105)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the best score', function () {
          expect(
            outcome.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(100)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the best score', function () {
          expect(outcome.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(
            100,
          )
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the best score', function () {
          expect(outcome.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(
            100,
          )
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the best score', function () {
          expect(outcome.KBILD_TRANSFORMED_TOTAL_SCORE).toEqual(100)
        })
      })
    })

    describe('when called with the random response', function () {
      const outcome = kbild_calculation.calculate({ payload: random_response })

      describe('Breathlessness and activities domain (raw)', function () {
        it('should return the expected score', function () {
          expect(
            outcome.KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(17)
        })
      })

      describe('Psychological domain (raw)', function () {
        it('should return the expected score', function () {
          expect(outcome.KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(19)
        })
      })
      describe('Chest symptoms domain (raw)', function () {
        it('should return the expected score', function () {
          expect(outcome.KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(9)
        })
      })
      describe('Total score (raw)', function () {
        it('should return the expected score', function () {
          expect(outcome.KBILD_RAW_TOTAL_SCORE).toEqual(46)
        })
      })
      describe('Breathlessness and activities domain (transformed)', function () {
        it('should return the expected score', function () {
          expect(
            outcome.KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE,
          ).toEqual(54.17)
        })
      })
      describe('Psychological domain (transformed)', function () {
        it('should return the expected score', function () {
          expect(outcome.KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE).toEqual(
            28.57,
          )
        })
      })
      describe('Chest symptoms domain (transformed)', function () {
        it('should return the expected score', function () {
          expect(outcome.KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE).toEqual(
            33.33,
          )
        })
      })
      describe('Total score (transformed)', function () {
        it('should return the expected score', function () {
          expect(outcome.KBILD_TRANSFORMED_TOTAL_SCORE).toEqual(34.44)
        })
      })
    })
  })
})
