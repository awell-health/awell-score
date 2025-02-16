import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  max_response,
  median_response,
  min_response,
  random_response,
} from './__testdata__/dri_responses'
import { DRI_SUBSCALES } from './definition/dri_subscales'
import { dri } from './dri'

const DRI_MIN_SCORE = 0
const DRI_MEDIAN_SCORE = 50
const DRI_MAX_SCORE = 100

const dri_calculation = new Score(dri)

describe('dri', function () {
  it('dri calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('dri')
  })

  describe('the score includes the correct input fields', function () {
    it('should have all the expected input ids configured', function () {
      const EXPECTED_INPUT_IDS = [
        'DRI_01',
        'DRI_02',
        'DRI_03',
        'DRI_04',
        'DRI_05',
        'DRI_06',
        'DRI_07',
        'DRI_08',
        'DRI_09',
        'DRI_10',
        'DRI_11',
        'DRI_12',
      ].sort()

      const configured_input_ids = Object.keys(dri_calculation.inputSchema)

      expect(EXPECTED_INPUT_IDS).toEqual(configured_input_ids)
    })

    it('should have the expected input ids configured for the "Common basic activities" subscale', function () {
      const EXPECTED_INPUT_IDS = ['DRI_01', 'DRI_02', 'DRI_03', 'DRI_04'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(DRI_SUBSCALES.BASIC_ACTIVITIES)
    })

    it('should have the expected input ids configured for the "More demanding daily physical activities" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DRI_05', 'DRI_06', 'DRI_07', 'DRI_08'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(DRI_SUBSCALES.PHYSICAL_ACTIVITIES)
    })

    it('should have the expected input ids configured for the "More vigorous activities" subscale	', function () {
      const EXPECTED_INPUT_IDS = ['DRI_09', 'DRI_10', 'DRI_11', 'DRI_12'].sort()

      expect(EXPECTED_INPUT_IDS).toEqual(DRI_SUBSCALES.WORK_RELATED_ACTIVITIES)
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = dri_calculation.calculate({ payload: min_response })

    it('should return 5 calculation results', function () {
      expect(Object.keys(outcome)).toHaveLength(5)
    })

    it('should return results with expected scale ids', function () {
      const EXPECTED_SCALE_IDS = [
        'DRI',
        'DRI_INTERPRETATION',
        'BASIC_ACTIVITIES',
        'PHYSICAL_ACTIVITIES',
        'WORK_RELATED_ACTIVITIES',
      ]

      const EXTRACTED_SCALE_IDS_FROM_RESULT = Object.keys(outcome)

      expect(EXTRACTED_SCALE_IDS_FROM_RESULT).toEqual(EXPECTED_SCALE_IDS)
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = dri_calculation.calculate({
        payload: {},
        opts: { nullOnMissingInputs: true },
      })

      it('should return null on the "Common basic activities" subscale', function () {
        expect(outcome.BASIC_ACTIVITIES).toEqual(null)
      })

      it('should return null on the "More demanding daily physical activities" subscale', function () {
        expect(outcome.PHYSICAL_ACTIVITIES).toEqual(null)
      })

      it('should return null on the "More vigorous activities" subscale', function () {
        expect(outcome.WORK_RELATED_ACTIVITIES).toEqual(null)
      })

      it('should return null on the DRI score', function () {
        expect(outcome.DRI).toEqual(null)
      })
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when called with minimum response', function () {
      const outcome = dri_calculation.calculate({ payload: min_response })

      it('should return the minimum score for the "Common basic activities" subscale', function () {
        expect(outcome.BASIC_ACTIVITIES).toEqual(DRI_MIN_SCORE)
      })

      it('should return the minimum score for the "More demanding daily physical activities" subscale', function () {
        expect(outcome.PHYSICAL_ACTIVITIES).toEqual(DRI_MIN_SCORE)
      })

      it('should return the minimum score for the "More vigorous activities" subscale', function () {
        expect(outcome.WORK_RELATED_ACTIVITIES).toEqual(DRI_MIN_SCORE)
      })

      it('should return the minimum total score', function () {
        expect(outcome.DRI).toEqual(DRI_MIN_SCORE)
      })
    })

    describe('when called with a median response', function () {
      const outcome = dri_calculation.calculate({ payload: median_response })

      it('should return the median score for the "Common basic activities" subscale', function () {
        expect(outcome.BASIC_ACTIVITIES).toEqual(DRI_MEDIAN_SCORE)
      })

      it('should return the median score for the "More demanding daily physical activities" subscale', function () {
        expect(outcome.PHYSICAL_ACTIVITIES).toEqual(DRI_MEDIAN_SCORE)
      })

      it('should return the median score for the "More vigorous activities" subscale', function () {
        expect(outcome.WORK_RELATED_ACTIVITIES).toEqual(DRI_MEDIAN_SCORE)
      })

      it('should return the minimum total score', function () {
        expect(outcome.DRI).toEqual(DRI_MEDIAN_SCORE)
      })
    })

    describe('when called with maximum response', function () {
      const outcome = dri_calculation.calculate({ payload: max_response })

      it('should return the maximum score for the "Common basic activities" subscale', function () {
        expect(outcome.BASIC_ACTIVITIES).toEqual(DRI_MAX_SCORE)
      })

      it('should return the maximum score for the "More demanding daily physical activities" subscale', function () {
        expect(outcome.PHYSICAL_ACTIVITIES).toEqual(DRI_MAX_SCORE)
      })

      it('should return the maximum score for the "More vigorous activities" subscale', function () {
        expect(outcome.WORK_RELATED_ACTIVITIES).toEqual(DRI_MAX_SCORE)
      })

      it('should return the maximum total score', function () {
        expect(outcome.DRI).toEqual(DRI_MAX_SCORE)
      })
    })

    describe('when a random response is passed ', function () {
      const outcome = dri_calculation.calculate({ payload: random_response })

      it('should return the expected score for the "Common basic activities" subscale', function () {
        expect(outcome.BASIC_ACTIVITIES).toEqual(34)
      })

      it('should return the expected score for the "More demanding daily physical activities" subscale', function () {
        expect(outcome.PHYSICAL_ACTIVITIES).toEqual(33)
      })

      it('should return the expected score for the "More vigorous activities" subscale', function () {
        expect(outcome.WORK_RELATED_ACTIVITIES).toEqual(60)
      })

      it('should return the expected total score', function () {
        expect(outcome.DRI).toEqual(42.33)
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        try {
          dri_calculation.calculate({
            payload: {
              DRI_01: "I'm not a number",
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Expected number, received string',
                path: ['DRI_01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is not allowed (e.g. is below the expected range)', function () {
      it('should throw an ZodError', function () {
        try {
          dri_calculation.calculate({
            payload: {
              DRI_01: -1,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be greater than or equal to 0',
                path: ['DRI_01'],
              }),
            ]),
          )
        }
      })
    })
    describe('when an answer is not allowed (e.g. is above the expected range)', function () {
      it('should throw an ZodError', function () {
        try {
          dri_calculation.calculate({
            payload: {
              DRI_01: 110,
            },
            opts: {
              nullOnMissingInputs: true,
            },
          })
        } catch (error) {
          expect(error).toBeInstanceOf(ZodError)

          const err = error as ZodError
          expect(err.issues).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                message: 'Number must be less than or equal to 100',
                path: ['DRI_01'],
              }),
            ]),
          )
        }
      })
    })
  })
})
