import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  random_response,
  worst_response,
} from './__testdata__/aq_50_test_responses'
import { aq_50 } from './aq_50'

const BEST_SCORE = 0
const WORST_SCORE = 50

const aq_50_calculation = new Score(aq_50)

describe('aq_50', function () {
  it('aq_50 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('aq_50')
  })

  describe('basic assumptions', function () {
    const outcome = aq_50_calculation.calculate({ payload: best_response })

    it('should return 2 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(2)
    })

    it('should have the expected calculation result ids', function () {
      const EXPECTED_CALCULATION_ID = ['AQ50_SCORE', 'AQ50_INTERPRETATION']

      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(EXPECTED_CALCULATION_ID)
    })
  })

  describe('validation', function () {
    describe('the score includes the correct input fields', function () {
      it('should have all the expected input ids configured', function () {
        const EXPECTED_INPUT_IDS = [
          'AQ50_Q01',
          'AQ50_Q02',
          'AQ50_Q03',
          'AQ50_Q04',
          'AQ50_Q05',
          'AQ50_Q06',
          'AQ50_Q07',
          'AQ50_Q08',
          'AQ50_Q09',
          'AQ50_Q10',
          'AQ50_Q11',
          'AQ50_Q12',
          'AQ50_Q13',
          'AQ50_Q14',
          'AQ50_Q15',
          'AQ50_Q16',
          'AQ50_Q17',
          'AQ50_Q18',
          'AQ50_Q19',
          'AQ50_Q20',
          'AQ50_Q21',
          'AQ50_Q22',
          'AQ50_Q23',
          'AQ50_Q24',
          'AQ50_Q25',
          'AQ50_Q26',
          'AQ50_Q27',
          'AQ50_Q28',
          'AQ50_Q29',
          'AQ50_Q30',
          'AQ50_Q31',
          'AQ50_Q32',
          'AQ50_Q33',
          'AQ50_Q34',
          'AQ50_Q35',
          'AQ50_Q36',
          'AQ50_Q37',
          'AQ50_Q38',
          'AQ50_Q39',
          'AQ50_Q40',
          'AQ50_Q41',
          'AQ50_Q42',
          'AQ50_Q43',
          'AQ50_Q44',
          'AQ50_Q45',
          'AQ50_Q46',
          'AQ50_Q47',
          'AQ50_Q48',
          'AQ50_Q49',
          'AQ50_Q50',
        ]

        const configured_input_ids = Object.keys(aq_50_calculation.inputSchema)

        expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
      })
    })

    describe('when an answer is not one of the allowed answers', function () {
      it('should throw a ZodError', function () {
        expect(() =>
          aq_50_calculation.calculate({
            payload: {
              AQ50_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })

    describe('when called with an empty response', function () {
      const outcome = aq_50_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null result', function () {
        expect(outcome.AQ50_SCORE).toEqual(null)
      })

      it('should return null result for the interpretation', function () {
        expect(outcome.AQ50_INTERPRETATION).toEqual(null)
      })
    })
  })

  describe('score calculation', function () {
    describe('when called with the best response', function () {
      const outcome = aq_50_calculation.calculate({ payload: best_response })

      it('should return the best score', function () {
        expect(outcome.AQ50_SCORE).toEqual(BEST_SCORE)
      })
    })

    describe('when called with the worst response', function () {
      const outcome = aq_50_calculation.calculate({ payload: worst_response })

      it('should return the worst score', function () {
        expect(outcome.AQ50_SCORE).toEqual(WORST_SCORE)
      })
    })

    describe('when called with a random response', function () {
      const outcome = aq_50_calculation.calculate({ payload: random_response })

      it('should return the expected score', function () {
        const EXPECTED_SCORE = 32
        expect(outcome.AQ50_SCORE).toEqual(EXPECTED_SCORE)
      })
    })
  })
})

