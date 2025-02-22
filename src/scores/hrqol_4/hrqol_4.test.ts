import { ZodError } from 'zod'
import { Score } from '../../classes'
import { ScoreLibrary } from '../library'
import {
  best_response,
  median_response,
  random_response,
  worst_response,
} from './__testdata__/hrqol_4_responses'
import { hrqol_4 } from './hrqol_4'

const hrqol_4_calculation = new Score(hrqol_4)

describe('hrqol_4', function () {
  it('hrqol_4 calculation function should be available as a calculation', function () {
    expect(ScoreLibrary).toHaveProperty('hrqol_4')
  })

  describe('the score includes the correct input fields', function () {
    it('should use the correct input fields', function () {
      const EXPECTED_CALCULATION_INPUT_IDS = [
        'HRQOL_4_Q01',
        'HRQOL_4_Q02',
        'HRQOL_4_Q03',
        'HRQOL_4_Q04',
      ]

      const configured_calculation_input_ids = Object.keys(
        hrqol_4_calculation.inputSchema,
      )

      expect(configured_calculation_input_ids).toEqual(
        EXPECTED_CALCULATION_INPUT_IDS,
      )
    })
  })

  describe('each calculated score includes the correct output result and correct score title', function () {
    const outcome = hrqol_4_calculation.calculate({ payload: best_response })

    it('should have the correct calculation ids', function () {
      const configured_calculation_id = Object.keys(outcome)

      expect(configured_calculation_id).toEqual([
        'HRQOL_4_UNHEALTHY_DAYS_INDEX',
        'HRQOL_4_GENERAL_HEALTH_STATUS',
        'HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS',
        'HRQOL_4_MENTALLY_UNHEALTHY_DAYS',
        'HRQOL_4_ACTIVITY_LIMITATION_DAYS',
        'HRQOL_4_HEALTHY_DAYS_INDEX',
      ])
    })
  })

  describe('each calculated score includes the correct formula and outputs the correct result', function () {
    describe('when the best response is passed', function () {
      const outcome = hrqol_4_calculation.calculate({ payload: best_response })

      describe('For the general health status score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_GENERAL_HEALTH_STATUS).toEqual(1)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS).toEqual(0)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_MENTALLY_UNHEALTHY_DAYS).toEqual(0)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_ACTIVITY_LIMITATION_DAYS).toEqual(0)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_UNHEALTHY_DAYS_INDEX).toEqual(0)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the best score result ', function () {
          expect(outcome.HRQOL_4_HEALTHY_DAYS_INDEX).toEqual(30)
        })
      })
    })

    describe('when a median response is passed', function () {
      const outcome = hrqol_4_calculation.calculate({
        payload: median_response,
      })

      describe('For the general health status score', function () {
        it('should return the median score ', function () {
          expect(outcome.HRQOL_4_GENERAL_HEALTH_STATUS).toEqual(3)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the median score ', function () {
          expect(outcome.HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS).toEqual(7)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the median score ', function () {
          expect(outcome.HRQOL_4_MENTALLY_UNHEALTHY_DAYS).toEqual(8)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the median score ', function () {
          expect(outcome.HRQOL_4_ACTIVITY_LIMITATION_DAYS).toEqual(15)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the median score ', function () {
          expect(outcome.HRQOL_4_UNHEALTHY_DAYS_INDEX).toEqual(15)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the median score result ', function () {
          expect(outcome.HRQOL_4_HEALTHY_DAYS_INDEX).toEqual(15)
        })
      })
    })

    describe('when the worst response is passed', function () {
      const outcome = hrqol_4_calculation.calculate({ payload: worst_response })

      describe('For the general health status score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_GENERAL_HEALTH_STATUS).toEqual(5)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS).toEqual(30)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_MENTALLY_UNHEALTHY_DAYS).toEqual(30)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_ACTIVITY_LIMITATION_DAYS).toEqual(30)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the best score ', function () {
          expect(outcome.HRQOL_4_UNHEALTHY_DAYS_INDEX).toEqual(30)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the best score result ', function () {
          expect(outcome.HRQOL_4_HEALTHY_DAYS_INDEX).toEqual(0)
        })
      })
    })

    describe('when a random response is passed', function () {
      const outcome = hrqol_4_calculation.calculate({
        payload: random_response,
      })

      describe('For the general health status score', function () {
        it('should return the expected score ', function () {
          expect(outcome.HRQOL_4_GENERAL_HEALTH_STATUS).toEqual(2)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return the expected score ', function () {
          expect(outcome.HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS).toEqual(5)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return the expected score ', function () {
          expect(outcome.HRQOL_4_MENTALLY_UNHEALTHY_DAYS).toEqual(11)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return the expected score ', function () {
          expect(outcome.HRQOL_4_ACTIVITY_LIMITATION_DAYS).toEqual(9)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return the expected score ', function () {
          expect(outcome.HRQOL_4_UNHEALTHY_DAYS_INDEX).toEqual(16)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return the expected score result ', function () {
          expect(outcome.HRQOL_4_HEALTHY_DAYS_INDEX).toEqual(14)
        })
      })
    })
  })

  describe('a score is only calculated when all mandatory fields are entered', function () {
    describe('when an empty response is passed', function () {
      const outcome = hrqol_4_calculation.calculate({
        payload: {},
        opts: {
          nullOnMissingInputs: true,
        },
      })

      describe('For the general health status score', function () {
        it('should return null result ', function () {
          expect(outcome.HRQOL_4_GENERAL_HEALTH_STATUS).toEqual(null)
        })
      })

      describe('For the physically unhealthy days score', function () {
        it('should return null result ', function () {
          expect(outcome.HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS).toEqual(null)
        })
      })

      describe('For the mentally unhealthy days score', function () {
        it('should return null result ', function () {
          expect(outcome.HRQOL_4_MENTALLY_UNHEALTHY_DAYS).toEqual(null)
        })
      })

      describe('For the activity limitation days score', function () {
        it('should return null result ', function () {
          expect(outcome.HRQOL_4_ACTIVITY_LIMITATION_DAYS).toEqual(null)
        })
      })

      describe('For the unhealthy days index score', function () {
        it('should return null result ', function () {
          expect(outcome.HRQOL_4_UNHEALTHY_DAYS_INDEX).toEqual(null)
        })
      })

      describe('For the healthy days index score', function () {
        it('should return undefined result ', function () {
          expect(outcome.HRQOL_4_HEALTHY_DAYS_INDEX).toEqual(null)
        })
      })
    })
  })

  describe('values entered by the user are checked to verify they are inside specified ranges', function () {
    describe('when an answer is not a number', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          hrqol_4_calculation.calculate({
            payload: {
              HRQOL_4_Q01: "I'm not a number",
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is below the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          hrqol_4_calculation.calculate({
            payload: {
              HRQOL_4_Q01: -1,
            },
          }),
        ).toThrow(ZodError)
      })
    })
    describe('when an answer is above the expected range', function () {
      it('should throw an ZodError', function () {
        expect(() =>
          hrqol_4_calculation.calculate({
            payload: {
              HRQOL_4_Q02: 31,
            },
          }),
        ).toThrow(ZodError)
      })
    })
  })
})
