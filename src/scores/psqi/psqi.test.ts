import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/psqi_test_responses'
import { PSQI_SUBSCALES } from './definition/psqi_subscales'
import { psqi } from './psqi'

const WORST_SCORE = 21
const BEST_SCORE = 0

const psqi_calculation = new Score(psqi)

describe('psqi', function () {
  it('psqi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('psqi')
  })

  describe('the score includes the correct input fields', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'Q01',
          'Q02',
          'Q03',
          'Q04',
          'Q05a',
          'Q05b',
          'Q05c',
          'Q05d',
          'Q05e',
          'Q05f',
          'Q05g',
          'Q05h',
          'Q05i',
          'Q05j',
          'Q05jj',
          'Q06',
          'Q07',
          'Q08',
          'Q09',
        ]
        const configured_input_ids = Object.keys(psqi_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('basic assumptions', function () {
      const outcome = psqi_calculation.calculate({ payload: best_response })

      it('should have the expected result ids', function () {
        const EXPECTED_RESULT_IDS = [
          'PSQI_TOTAL_SCORE',
          'SUBJECTIVE_SLEEP_QUALITY',
          'SLEEP_LATENCY',
          'SLEEP_DURATION',
          'HABITUAL_SLEEP_EFFICIENCY',
          'SLEEP_DISTURBANCES',
          'USE_OF_SLEEPING_MEDICATION',
          'DAYTIME_DYSFUNCTION',
        ]

        const configured_calculation_ids = Object.keys(outcome)

        expect(configured_calculation_ids).toEqual(EXPECTED_RESULT_IDS)
      })
      it('should have the expected input ids configured for the "SUBJECTIVE_SLEEP_QUALITY"	', function () {
        const EXPECTED_INPUT_IDS = ['Q09']

        expect(EXPECTED_INPUT_IDS).toEqual(
          PSQI_SUBSCALES.SUBJECTIVE_SLEEP_QUALITY,
        )
      })

      it('should have the expected input ids configured for the "SLEEP_LATENCY"	', function () {
        const EXPECTED_INPUT_IDS = ['Q02', 'Q05a']

        expect(EXPECTED_INPUT_IDS).toEqual(PSQI_SUBSCALES.SLEEP_LATENCY)
      })

      it('should have the expected input ids configured for the "SLEEP_DURATION"	', function () {
        const EXPECTED_INPUT_IDS = ['Q04']

        expect(EXPECTED_INPUT_IDS).toEqual(PSQI_SUBSCALES.SLEEP_DURATION)
      })

      it('should have the expected input ids configured for the "HABITUAL_SLEEP_EFFICIENCY"	', function () {
        const EXPECTED_INPUT_IDS = ['Q04', 'Q03', 'Q01']

        expect(EXPECTED_INPUT_IDS).toEqual(
          PSQI_SUBSCALES.HABITUAL_SLEEP_EFFICIENCY,
        )
      })

      it('should have the expected input ids configured for the "SLEEP_DISTURBANCES"	', function () {
        const EXPECTED_INPUT_IDS = [
          'Q05b',
          'Q05c',
          'Q05d',
          'Q05e',
          'Q05f',
          'Q05g',
          'Q05h',
          'Q05i',
          'Q05j',
        ]

        expect(EXPECTED_INPUT_IDS).toEqual(PSQI_SUBSCALES.SLEEP_DISTURBANCES)
      })

      it('should have the expected input ids configured for the "USE_OF_SLEEPING_MEDICATION"	', function () {
        const EXPECTED_INPUT_IDS = ['Q06']

        expect(EXPECTED_INPUT_IDS).toEqual(
          PSQI_SUBSCALES.USE_OF_SLEEPING_MEDICATION,
        )
      })

      it('should have the expected input ids configured for the "DAYTIME_DYSFUNCTION"	', function () {
        const EXPECTED_INPUT_IDS = ['Q07', 'Q08']

        expect(EXPECTED_INPUT_IDS).toEqual(PSQI_SUBSCALES.DAYTIME_DYSFUNCTION)
      })
    })
  })

  describe('Input validations', function () {
    it('when an answer is below the expected range for question with hours: should throw an ZodError', function () {
      expect(() =>
        psqi_calculation.calculate({
          payload: {
            ...best_response,
            Q01: -1,
          },
        }),
      ).toThrow(ZodError)
    })

    it('when an answer is above the expected range for question with hours: should throw an ZodError', function () {
      expect(() =>
        psqi_calculation.calculate({
          payload: {
            ...best_response,
            Q01: 25,
          },
        }),
      ).toThrow(ZodError)
    })

    it('when there are non-numerical answers: should throw an ZodError', function () {
      expect(() =>
        psqi_calculation.calculate({
          payload: {
            ...best_response,
            Q01: "I'm not a number",
          },
        }),
      ).toThrow(ZodError)
    })

    it('when an answer is below the expected range for question with standard input: should throw an ZodError', function () {
      expect(() =>
        psqi_calculation.calculate({
          payload: {
            ...best_response,
            Q06: -1,
          },
        }),
      ).toThrow(ZodError)
    })

    it('when an answer is above the expected range for question with standard input: should throw an ZodError', function () {
      expect(() =>
        psqi_calculation.calculate({
          payload: {
            ...best_response,
            Q06: 5,
          },
        }),
      ).toThrow(ZodError)
    })

    it('when there are non-numerical answers with standard input: should throw an ZodError', function () {
      expect(() =>
        psqi_calculation.calculate({
          payload: {
            ...best_response,
            Q06: "I'm not a number",
          },
        }),
      ).toThrow(ZodError)
    })
  })

  describe('Score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = psqi_calculation.calculate({ payload: worst_response })

      it('Total Score: should return the worst score', function () {
        expect(outcome.PSQI_TOTAL_SCORE).toEqual(WORST_SCORE)
      })

      it('Subjective Sleep Quality subscale: should return the worst score', function () {
        expect(outcome.SUBJECTIVE_SLEEP_QUALITY).toEqual(3)
      })

      it('Sleep Latency subscale: should return the worst score', function () {
        expect(outcome.SLEEP_LATENCY).toEqual(3)
      })

      it('Sleep Duration subscale: should return the worst score', function () {
        expect(outcome.SLEEP_DURATION).toEqual(3)
      })

      it('Habitual Sleep Efficiency subscale: hould return the worst score', function () {
        expect(outcome.HABITUAL_SLEEP_EFFICIENCY).toEqual(3)
      })

      it('Sleep Disturbances subscale: should return the worst score', function () {
        expect(outcome.SLEEP_DISTURBANCES).toEqual(3)
      })

      it('Use of Sleeping Medication subscale: should return the worst score', function () {
        expect(outcome.USE_OF_SLEEPING_MEDICATION).toEqual(3)
      })

      it('Daytime Disfunction subscale: should return the worst score', function () {
        expect(outcome.DAYTIME_DYSFUNCTION).toEqual(3)
      })
    })

    describe('when called with the best response', function () {
      const outcome = psqi_calculation.calculate({ payload: best_response })
      it('Total score: should return the best score', function () {
        expect(outcome.PSQI_TOTAL_SCORE).toEqual(BEST_SCORE)
      })

      it('Subjective Sleep Quality subscale: should return the best score', function () {
        expect(outcome.SUBJECTIVE_SLEEP_QUALITY).toEqual(0)
      })

      it('Sleep Latency subscale: should return the best score', function () {
        expect(outcome.SLEEP_LATENCY).toEqual(0)
      })

      it('Sleep Duration subscale: should return the best score', function () {
        expect(outcome.SLEEP_DURATION).toEqual(0)
      })

      it('Habitual Sleep Efficiency subscale: should return the best score', function () {
        expect(outcome.HABITUAL_SLEEP_EFFICIENCY).toEqual(0)
      })

      it('Sleep Disturbances subscale: should return the best score', function () {
        expect(outcome.SLEEP_DISTURBANCES).toEqual(0)
      })

      it('Use of Sleeping Medication subscale: should return the best score', function () {
        expect(outcome.USE_OF_SLEEPING_MEDICATION).toEqual(0)
      })

      it('Daytime Disfunction subscale: should return the best score', function () {
        expect(outcome.DAYTIME_DYSFUNCTION).toEqual(0)
      })
    })

    describe('when called with a median response', function () {
      const outcome = psqi_calculation.calculate({ payload: median_response })

      it('Total score: should return the median score', function () {
        expect(outcome.PSQI_TOTAL_SCORE).toEqual(10)
      })

      it('Subjective Sleep Quality subscale: should return the median score', function () {
        expect(outcome.SUBJECTIVE_SLEEP_QUALITY).toEqual(1)
      })

      it('Sleep Latency subscale: should return the median score', function () {
        expect(outcome.SLEEP_LATENCY).toEqual(2)
      })

      it('Sleep Duration subscale: should return the median score', function () {
        expect(outcome.SLEEP_DURATION).toEqual(1)
      })

      it('Habitual Sleep Efficiency subscale: should return the median score', function () {
        expect(outcome.HABITUAL_SLEEP_EFFICIENCY).toEqual(2)
      })

      it('Sleep Disturbances subscale: should return the median score', function () {
        expect(outcome.SLEEP_DISTURBANCES).toEqual(1)
      })

      it('Use of Sleeping Medication subscale: should return the median score', function () {
        expect(outcome.USE_OF_SLEEPING_MEDICATION).toEqual(1)
      })

      it('Daytime Disfunction subscale: should return the median score', function () {
        expect(outcome.DAYTIME_DYSFUNCTION).toEqual(2)
      })
    })

    describe('when called with the random response', function () {
      const outcome = psqi_calculation.calculate({ payload: random_response })

      it('Total score: should return the exepected score', function () {
        expect(outcome.PSQI_TOTAL_SCORE).toEqual(9)
      })

      it('Subjective Sleep Quality subscale: should return the random score', function () {
        expect(outcome.SUBJECTIVE_SLEEP_QUALITY).toEqual(1)
      })

      it('Sleep Latency subscale: should return the random score', function () {
        expect(outcome.SLEEP_LATENCY).toEqual(2)
      })

      it('Sleep Duration subscale: should return the random score', function () {
        expect(outcome.SLEEP_DURATION).toEqual(1)
      })

      it('Habitual Sleep Efficiency subscale: should return the random score', function () {
        expect(outcome.HABITUAL_SLEEP_EFFICIENCY).toEqual(0)
      })

      it('Sleep Disturbances subscale: should return the random score', function () {
        expect(outcome.SLEEP_DISTURBANCES).toEqual(1)
      })

      it('Use of Sleeping Medication subscale: should return the random score', function () {
        expect(outcome.USE_OF_SLEEPING_MEDICATION).toEqual(3)
      })
      it('Daytime Disfunction subscale: should return the random score', function () {
        expect(outcome.DAYTIME_DYSFUNCTION).toEqual(1)
      })
    })
  })

  describe('When called with an empty response', function () {
    const outcome = psqi_calculation.calculate({ payload: {} })
    it('Total score: should return null', function () {
      expect(outcome.PSQI_TOTAL_SCORE).toEqual(null)
    })

    it('SUBJECTIVE_SLEEP_QUALITY: should return null', function () {
      expect(outcome.SUBJECTIVE_SLEEP_QUALITY).toEqual(null)
    })

    it('SLEEP_LATENCY: should return null', function () {
      expect(outcome.SLEEP_LATENCY).toEqual(null)
    })

    it('SLEEP_DURATION: should return null', function () {
      expect(outcome.SLEEP_DURATION).toEqual(null)
    })

    it('HABITUAL_SLEEP_EFFICIENCY: should return null', function () {
      expect(outcome.HABITUAL_SLEEP_EFFICIENCY).toEqual(null)
    })

    it('SLEEP_DISTURBANCES: should return null', function () {
      expect(outcome.SLEEP_DISTURBANCES).toEqual(null)
    })

    it('USE_OF_SLEEPING_MEDICATION: should return null', function () {
      expect(outcome.USE_OF_SLEEPING_MEDICATION).toEqual(null)
    })

    it('DAYTIME_DYSFUNCTION: should return null', function () {
      expect(outcome.DAYTIME_DYSFUNCTION).toEqual(null)
    })
  })
})
