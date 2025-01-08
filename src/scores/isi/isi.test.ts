import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/isi_test_responses'
import { isi } from './isi'

const ISI_BEST_SCORE = 0
const ISI_MEDIAN_SCORE = 14
const ISI_WORST_SCORE = 28

const isi_calculation = new Score(isi)

describe('isi', function () {
  it('isi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('isi')
  })

  describe('basic assumptions', function () {
    const outcome = isi_calculation.calculate({ payload: best_response })

    it('should have the expected calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = ['ISI_TOTAL_SCORE', 'ISI_INTERPRETATION']
      const configured_calculation_ids = Object.keys(outcome)

      expect(configured_calculation_ids).toEqual(EXPECTED_CALCULATION_IDS)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'ISI_Q01',
          'ISI_Q02',
          'ISI_Q03',
          'ISI_Q04',
          'ISI_Q05',
          'ISI_Q06',
          'ISI_Q07',
        ]

        const configured_input_ids = Object.keys(isi_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          isi_calculation.calculate({
            payload: {
              ISI_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          isi_calculation.calculate({
            payload: {
              ISI_Q01: 5,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when there are non-numerical answers', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          isi_calculation.calculate({
            payload: {
              ISI_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      it('should throw a ZodError', function () {
        expect(() => isi_calculation.calculate({ payload: {} })).toThrow(
          ZodError,
        )
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the worst response', function () {
      const outcome = isi_calculation.calculate({ payload: worst_response })

      describe('Total score', function () {
        it('should return the worst score', function () {
          expect(outcome.ISI_TOTAL_SCORE).toEqual(ISI_WORST_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the worst interpretation', function () {
          expect(outcome.ISI_INTERPRETATION).toEqual(
            'Clinical insomnia (severe)',
          )
        })
      })
    })

    describe('when called with a median response', function () {
      const outcome = isi_calculation.calculate({ payload: median_response })

      describe('Total score', function () {
        it('should return the median score', function () {
          expect(outcome.ISI_TOTAL_SCORE).toEqual(ISI_MEDIAN_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the median interpretation', function () {
          expect(outcome.ISI_INTERPRETATION).toEqual('Subthreshold insomnia')
        })
      })
    })

    describe('when called with the best response', function () {
      const outcome = isi_calculation.calculate({ payload: best_response })

      describe('Total score', function () {
        it('should return the best score', function () {
          expect(outcome.ISI_TOTAL_SCORE).toEqual(ISI_BEST_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the best interpretation', function () {
          expect(outcome.ISI_INTERPRETATION).toEqual(
            'No clinically significant insomnia',
          )
        })
      })
    })

    describe('when called with a random response', function () {
      const outcome = isi_calculation.calculate({ payload: random_response })

      describe('Total score', function () {
        it('should return the expeced score', function () {
          const EXPECTED_SCORE = 9

          expect(outcome.ISI_TOTAL_SCORE).toEqual(EXPECTED_SCORE)
        })
      })
      describe('Interpretation', function () {
        it('should return the expeced interpretation', function () {
          const EXPECTED_INTERPRETATION = 'Subthreshold insomnia'

          expect(outcome.ISI_INTERPRETATION).toEqual(EXPECTED_INTERPRETATION)
        })
      })
    })
  })
})
