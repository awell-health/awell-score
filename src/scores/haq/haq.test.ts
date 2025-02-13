import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  min_response,
  random_response,
} from './__testdata__/haq_form_responses'
import { haq } from './haq'

const HAQ_MIN_SCORE = 0
const HAQ_MAX_SCORE = 3

const haq_calculation = new Score(haq)

describe('haq', function () {
  it('haq calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('haq')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'DRESSING_1',
        'DRESSING_2',
        'ARISING_1',
        'ARISING_2',
        'EATING_1',
        'EATING_2',
        'EATING_3',
        'WALKING_1',
        'WALKING_2',
        'AIDS_OR_DEVICES_PART_1',
        'NEED_HELP_PART_1',
        'HYGIENE_1',
        'HYGIENE_2',
        'HYGIENE_3',
        'REACH_1',
        'REACH_2',
        'GRIP_1',
        'GRIP_2',
        'GRIP_3',
        'ACTIVITIES_1',
        'ACTIVITIES_2',
        'ACTIVITIES_3',
        'AIDS_OR_DEVICES_PART_2',
        'NEED_HELP_PART_2',
      ]

      const configured_calculation_input_ids = Object.keys(haq.inputSchema)

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })

    it('should use the expected answer values for sections that need help', function () {
      const EXPECTED_ANSWER_OPTIONS = [
        'dressing',
        'arising',
        'eating',
        'walking',
        'hygiene',
        'reach',
        'grip',
        'activities',
      ]

      const help_answer_options = [
        haq.inputSchema.NEED_HELP_PART_1.uiOptions.options,
        haq.inputSchema.NEED_HELP_PART_2.uiOptions.options,
      ].flatMap(_ => _.map(_ => _?.value))

      expect(help_answer_options).toEqual(EXPECTED_ANSWER_OPTIONS)
    })

    it('should use the answer values for sections that need help', function () {
      const EXPECTED_ANSWER_OPTIONS = [
        'cane',
        'walker',
        'crutches',
        'wheelchair',
        'devices_used_for_dressing',
        'built_up_or_special_utensils',
        'special_or_built_up_chair',
        'other',
        'raised_toilet_seat',
        'bathtub_seat',
        'jar_opener',
        'long_handled_appliances_for_reach',
        'long_handled_appliances_in_bathroom',
        'bathtub_bar',
        'other',
      ]

      const aids_answer_options = [
        haq.inputSchema.AIDS_OR_DEVICES_PART_1.uiOptions.options,
        haq.inputSchema.AIDS_OR_DEVICES_PART_2.uiOptions.options,
      ].flatMap(_ => _.map(_ => _?.value))

      expect(aids_answer_options).toEqual(EXPECTED_ANSWER_OPTIONS)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = haq_calculation.calculate({ payload: min_response })

    it('should calculate a single score', function () {
      expect(Object.keys(outcome).length).toEqual(1)
    })

    it('should have the correct calculation id', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual(['DI'])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with a minimum response', function () {
      it('should return the minimum score', function () {
        const outcome = haq_calculation.calculate({ payload: min_response })
        expect(outcome.DI).toEqual(HAQ_MIN_SCORE)
      })
    })

    describe('when called with a maximum response', function () {
      it('should return the maximum score', function () {
        const outcome = haq_calculation.calculate({ payload: max_response })
        expect(outcome.DI).toEqual(HAQ_MAX_SCORE)
      })
    })

    describe('when called with a random response', function () {
      it('should return the expected score', function () {
        const outcome = haq_calculation.calculate({
          payload: random_response,
        })
        const EXPECTED_SCORE = 2.25
        expect(outcome.DI).toEqual(EXPECTED_SCORE)
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      it('should return null as the result', function () {
        const outcome = haq_calculation.calculate({
          payload: {},
          opts: {
            returnMissingOnZodError: true,
          },
        })

        expect(outcome.DI).toEqual(null)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw a ZodError', function () {
        try {
          haq_calculation.calculate({
            payload: {
              DRESSING_1: "I'm not a number",
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['DRESSING_1'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is below one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        try {
          haq_calculation.calculate({
            payload: {
              DRESSING_1: -1,
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['DRESSING_1'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is above one of the expected answers', function () {
      it('should throw an InvalidInputsError', function () {
        try {
          haq_calculation.calculate({
            payload: {
              DRESSING_1: 4,
            },
            opts: {
              returnMissingOnZodError: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Invalid input',
                path: ['DRESSING_1'],
              }),
            ]),
          )
        }
      })
    })
  })
})
