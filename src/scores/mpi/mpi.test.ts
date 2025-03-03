import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/mpi_test_responses'
import { MPI_DOMAINS } from './definition/mpi_domains'
import { mpi } from './mpi'

const MPI_TOTAL_MIN_SCORE = 0
const MPI_TOTAL_MEDIAN_SCORE = 156
const MPI_TOTAL_MAX_SCORE = 312

const mpi_calculation = new Score(mpi)

describe('mpi', function () {
  it('mpi calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('mpi')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'MPI_PART1_Q01',
        'MPI_PART1_Q02',
        'MPI_PART1_Q03',
        'MPI_PART1_Q04',
        'MPI_PART1_Q05',
        'MPI_PART1_Q06',
        'MPI_PART1_Q07',
        'MPI_PART1_Q08',
        'MPI_PART1_Q09',
        'MPI_PART1_Q10',
        'MPI_PART1_Q11',
        'MPI_PART1_Q12',
        'MPI_PART1_Q13',
        'MPI_PART1_Q14',
        'MPI_PART1_Q15',
        'MPI_PART1_Q16',
        'MPI_PART1_Q17',
        'MPI_PART1_Q18',
        'MPI_PART1_Q19',
        'MPI_PART1_Q20',
        'MPI_PART2_Q01',
        'MPI_PART2_Q02',
        'MPI_PART2_Q03',
        'MPI_PART2_Q04',
        'MPI_PART2_Q05',
        'MPI_PART2_Q06',
        'MPI_PART2_Q07',
        'MPI_PART2_Q08',
        'MPI_PART2_Q09',
        'MPI_PART2_Q10',
        'MPI_PART2_Q11',
        'MPI_PART2_Q12',
        'MPI_PART2_Q13',
        'MPI_PART2_Q14',
        'MPI_PART3_Q01',
        'MPI_PART3_Q02',
        'MPI_PART3_Q03',
        'MPI_PART3_Q04',
        'MPI_PART3_Q05',
        'MPI_PART3_Q06',
        'MPI_PART3_Q07',
        'MPI_PART3_Q08',
        'MPI_PART3_Q09',
        'MPI_PART3_Q10',
        'MPI_PART3_Q11',
        'MPI_PART3_Q12',
        'MPI_PART3_Q13',
        'MPI_PART3_Q14',
        'MPI_PART3_Q15',
        'MPI_PART3_Q16',
        'MPI_PART3_Q17',
        'MPI_PART3_Q18',
      ].sort()

      const configured_input_ids = Object.keys(
        mpi_calculation.inputSchema,
      ).sort()

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input idss configured for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
      const EXPECTED_INPUT_IDS = [
        'MPI_PART1_Q01',
        'MPI_PART1_Q02',
        'MPI_PART1_Q03',
        'MPI_PART1_Q04',
        'MPI_PART1_Q05',
        'MPI_PART1_Q06',
        'MPI_PART1_Q07',
        'MPI_PART1_Q08',
        'MPI_PART1_Q09',
        'MPI_PART1_Q10',
        'MPI_PART1_Q11',
        'MPI_PART1_Q12',
        'MPI_PART1_Q13',
        'MPI_PART1_Q14',
        'MPI_PART1_Q15',
        'MPI_PART1_Q16',
        'MPI_PART1_Q17',
        'MPI_PART1_Q18',
        'MPI_PART1_Q19',
        'MPI_PART1_Q20',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(MPI_DOMAINS.MPI_PSYCHOSOCIAL)
    })

    it('should have the expected input idss configured for the "Interactional aspects/reactions on pain" domain', function () {
      const EXPECTED_INPUT_IDS = [
        'MPI_PART2_Q01',
        'MPI_PART2_Q02',
        'MPI_PART2_Q03',
        'MPI_PART2_Q04',
        'MPI_PART2_Q05',
        'MPI_PART2_Q06',
        'MPI_PART2_Q07',
        'MPI_PART2_Q08',
        'MPI_PART2_Q09',
        'MPI_PART2_Q10',
        'MPI_PART2_Q11',
        'MPI_PART2_Q12',
        'MPI_PART2_Q13',
        'MPI_PART2_Q14',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(MPI_DOMAINS.MPI_BEHAVIOUR)
    })

    it('should have the expected input idss configured for the "Participation in daily activities" domain', function () {
      const EXPECTED_INPUT_IDS = [
        'MPI_PART3_Q01',
        'MPI_PART3_Q02',
        'MPI_PART3_Q03',
        'MPI_PART3_Q04',
        'MPI_PART3_Q05',
        'MPI_PART3_Q06',
        'MPI_PART3_Q07',
        'MPI_PART3_Q08',
        'MPI_PART3_Q09',
        'MPI_PART3_Q10',
        'MPI_PART3_Q11',
        'MPI_PART3_Q12',
        'MPI_PART3_Q13',
        'MPI_PART3_Q14',
        'MPI_PART3_Q15',
        'MPI_PART3_Q16',
        'MPI_PART3_Q17',
        'MPI_PART3_Q18',
      ]

      expect(EXPECTED_INPUT_IDS).toEqual(MPI_DOMAINS.MPI_ADL)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = mpi_calculation.calculate({ payload: min_response })

    it('should return a score for all subscales (n=3) and a total score', function () {
      expect(Object.keys(outcome)).toHaveLength(4)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'MPI_TOTAL',
        'MPI_PSYCHOSOCIAL',
        'MPI_BEHAVIOUR',
        'MPI_ADL',
      ]

      const extracted_calculation_ids_from_outcome = Object.keys(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = mpi_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      it('should return null as the result for "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        expect(outcome.MPI_PSYCHOSOCIAL).toEqual(null)
      })

      it('should return null as the result for "Interactional aspects/reactions on pain" domain', function () {
        expect(outcome.MPI_BEHAVIOUR).toEqual(null)
      })

      it('should return null as the result for "Participation in daily activities" domain', function () {
        expect(outcome.MPI_ADL).toEqual(null)
      })

      it('should return undefined as the total score', function () {
        expect(outcome.MPI_TOTAL).toEqual(null)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when minimum response is passed', function () {
      const outcome = mpi_calculation.calculate({ payload: min_response })

      it('should return the minimum score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        expect(outcome.MPI_PSYCHOSOCIAL).toEqual(0)
      })

      it('should return the minimum score for the "Interactional aspects/reactions on pain" domain', function () {
        expect(outcome.MPI_BEHAVIOUR).toEqual(0)
      })

      it('should return the minimum score for the "Participation in daily activities" domain', function () {
        expect(outcome.MPI_ADL).toEqual(0)
      })

      it('should return the minimum the total score', function () {
        expect(outcome.MPI_TOTAL).toEqual(MPI_TOTAL_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = mpi_calculation.calculate({ payload: median_response })

      it('should return the median score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        expect(outcome.MPI_PSYCHOSOCIAL).toEqual(60)
      })

      it('should return the median score for the "Interactional aspects/reactions on pain" domain', function () {
        expect(outcome.MPI_BEHAVIOUR).toEqual(42)
      })

      it('should return the median score for the "Participation in daily activities" domain', function () {
        expect(outcome.MPI_ADL).toEqual(54)
      })

      it('should return the median the total score', function () {
        expect(outcome.MPI_TOTAL).toEqual(MPI_TOTAL_MEDIAN_SCORE)
      })
    })

    describe('when maximum response is passed', function () {
      const outcome = mpi_calculation.calculate({ payload: max_response })

      it('should return the maximum score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        expect(outcome.MPI_PSYCHOSOCIAL).toEqual(120)
      })

      it('should return the maximum score for the "Interactional aspects/reactions on pain" domain', function () {
        expect(outcome.MPI_BEHAVIOUR).toEqual(84)
      })

      it('should return the maximum score for the "Participation in daily activities" domain', function () {
        expect(outcome.MPI_ADL).toEqual(108)
      })

      it('should return the maximum the total score', function () {
        expect(outcome.MPI_TOTAL).toEqual(MPI_TOTAL_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = mpi_calculation.calculate({ payload: random_response })

      it('should return the expected score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        expect(outcome.MPI_PSYCHOSOCIAL).toEqual(58)
      })

      it('should return the expected score for the "Interactional aspects/reactions on pain" domain', function () {
        expect(outcome.MPI_BEHAVIOUR).toEqual(40)
      })

      it('should return the expected score for the "Participation in daily activities" domain', function () {
        expect(outcome.MPI_ADL).toEqual(45)
      })

      it('should return the expected total score', function () {
        expect(outcome.MPI_TOTAL).toEqual(143)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mpi_calculation.calculate({
            payload: {
              ...min_response,
              MPI_PART1_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mpi_calculation.calculate({
            payload: {
              ...min_response,
              MPI_PART1_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          mpi_calculation.calculate({
            payload: {
              ...min_response,
              MPI_PART1_Q01: 7,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
