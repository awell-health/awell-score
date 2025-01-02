/* eslint-disable no-magic-numbers */
import { expect } from 'chai'
import R from 'ramda'

import { InvalidInputsError } from '../../src/calculation_suite/errors'
import { execute_test_calculation } from '../../lib/execute_test_calculation'
import { get_result_ids_from_calculation_output } from '../../lib/get_result_ids_from_calculation_output'
import { view_result } from '../../lib/view_result'
import { CALCULATIONS } from '../../src/calculation_suite/calculations/calculation_library'
import {
  get_input_ids_for_specific_subscale,
  get_input_ids_in_subscale,
} from '../../src/calculation_suite/calculations/shared_functions'
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

const mpi_calculation = execute_test_calculation(mpi)

describe('mpi', function () {
  it('mpi calculation function should be available as a calculation', function () {
    expect(CALCULATIONS).toHaveProperty('mpi')
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
      ]

      const configured_input_ids = R.compose(
        (input_ids: string[]) => input_ids.sort(),
        R.flatten,
        R.map(get_input_ids_in_subscale),
      )(MPI_DOMAINS)

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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('MPI_PSYCHOSOCIAL')(MPI_DOMAINS),
      )
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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('MPI_BEHAVIOUR')(MPI_DOMAINS),
      )
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

      expect(EXPECTED_INPUT_IDS).toEqual(
        get_input_ids_for_specific_subscale('MPI_ADL')(MPI_DOMAINS),
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = mpi_calculation(min_response)

    it('should return a score for all subscales (n=3) and a total score', function () {
      expect(outcome).toHaveLength(4)
    })

    it('should have all the correct calculation ids', function () {
      const EXPECTED_CALCULATION_IDS = [
        'MPI_PSYCHOSOCIAL',
        'MPI_BEHAVIOUR',
        'MPI_ADL',
        'MPI_TOTAL',
      ]

      const extracted_calculation_ids_from_outcome =
        get_result_ids_from_calculation_output(outcome)

      expect(EXPECTED_CALCULATION_IDS).toEqual(
        extracted_calculation_ids_from_outcome,
      )
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = mpi_calculation({})

      it('should return undefined as the result for "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        const score = view_result('MPI_PSYCHOSOCIAL')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "Interactional aspects/reactions on pain" domain', function () {
        const score = view_result('MPI_BEHAVIOUR')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the result for "Participation in daily activities" domain', function () {
        const score = view_result('MPI_ADL')(outcome)
        expect(score).toEqual(undefined)
      })

      it('should return undefined as the total score', function () {
        const score = view_result('MPI_TOTAL')(outcome)
        expect(score).toEqual(undefined)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when minimum response is passed', function () {
      const outcome = mpi_calculation(min_response)

      it('should return the minimum score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        const score = view_result('MPI_PSYCHOSOCIAL')(outcome)
        const PAIN_EXPERIENCE_MIN_SCORE = 0

        expect(score).toEqual(PAIN_EXPERIENCE_MIN_SCORE)
      })

      it('should return the minimum score for the "Interactional aspects/reactions on pain" domain', function () {
        const score = view_result('MPI_BEHAVIOUR')(outcome)
        const INTERACTIONAL_ASPECTS_PAIN_MIN_SCORE = 0

        expect(score).toEqual(INTERACTIONAL_ASPECTS_PAIN_MIN_SCORE)
      })

      it('should return the minimum score for the "Participation in daily activities" domain', function () {
        const score = view_result('MPI_ADL')(outcome)
        const ADL_MIN_SCORE = 0

        expect(score).toEqual(ADL_MIN_SCORE)
      })

      it('should return the minimum the total score', function () {
        const score = view_result('MPI_TOTAL')(outcome)
        expect(score).toEqual(MPI_TOTAL_MIN_SCORE)
      })
    })

    describe('when a median response is passed', function () {
      const outcome = mpi_calculation(median_response)

      it('should return the median score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        const score = view_result('MPI_PSYCHOSOCIAL')(outcome)
        const PAIN_EXPERIENCE_MEDIAN_SCORE = 60

        expect(score).toEqual(PAIN_EXPERIENCE_MEDIAN_SCORE)
      })

      it('should return the median score for the "Interactional aspects/reactions on pain" domain', function () {
        const score = view_result('MPI_BEHAVIOUR')(outcome)
        const INTERACTIONAL_ASPECTS_PAIN_MEDIAN_SCORE = 42

        expect(score).toEqual(INTERACTIONAL_ASPECTS_PAIN_MEDIAN_SCORE)
      })

      it('should return the median score for the "Participation in daily activities" domain', function () {
        const score = view_result('MPI_ADL')(outcome)
        const ADL_MEDIAN_SCORE = 54

        expect(score).toEqual(ADL_MEDIAN_SCORE)
      })

      it('should return the median the total score', function () {
        const score = view_result('MPI_TOTAL')(outcome)
        expect(score).toEqual(MPI_TOTAL_MEDIAN_SCORE)
      })
    })

    describe('when maximum response is passed', function () {
      const outcome = mpi_calculation(max_response)

      it('should return the maximum score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        const score = view_result('MPI_PSYCHOSOCIAL')(outcome)
        const MPI_PSYCHOSOCIAL_MAX_SCORE = 120

        expect(score).toEqual(MPI_PSYCHOSOCIAL_MAX_SCORE)
      })

      it('should return the maximum score for the "Interactional aspects/reactions on pain" domain', function () {
        const score = view_result('MPI_BEHAVIOUR')(outcome)
        const MPI_BEHAVIOUR_MAX_SCORE = 84

        expect(score).toEqual(MPI_BEHAVIOUR_MAX_SCORE)
      })

      it('should return the maximum score for the "Participation in daily activities" domain', function () {
        const score = view_result('MPI_ADL')(outcome)
        const MPI_ADL_MAX_SCORE = 108

        expect(score).toEqual(MPI_ADL_MAX_SCORE)
      })

      it('should return the maximum the total score', function () {
        const score = view_result('MPI_TOTAL')(outcome)
        expect(score).toEqual(MPI_TOTAL_MAX_SCORE)
      })
    })

    describe('when a random response is passed', function () {
      const outcome = mpi_calculation(random_response)

      it('should return the expected score for the "Pain expierience" domain (Psychological/Psychosocial aspects of pain)', function () {
        const score = view_result('MPI_PSYCHOSOCIAL')(outcome)
        const EXPECTED_SCORE = 58

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Interactional aspects/reactions on pain" domain', function () {
        const score = view_result('MPI_BEHAVIOUR')(outcome)
        const EXPECTED_SCORE = 40

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected score for the "Participation in daily activities" domain', function () {
        const score = view_result('MPI_ADL')(outcome)
        const EXPECTED_SCORE = 45

        expect(score).toEqual(EXPECTED_SCORE)
      })

      it('should return the expected total score', function () {
        const score = view_result('MPI_TOTAL')(outcome)
        const EXPECTED_SCORE = 143

        expect(score).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mpi_calculation({
            MPI_PART1_Q01: "I'm not a number",
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mpi_calculation({
            MPI_PART1_Q01: -1,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an InvalidInputsError', function () {
        expect(() =>
          mpi_calculation({
            MPI_PART1_Q01: 7,
          }),
        ).toThrow(InvalidInputsError)
      })
    })
  })
})
