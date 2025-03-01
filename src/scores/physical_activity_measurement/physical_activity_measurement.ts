import { ScoreType } from '../../types'
import { PA_INPUTS, PHYSICAL_ACTIVITY_MEASUREMENTS_OUTPUT } from './definition'
import { sum, isNil } from 'lodash'
import { areSufficientAnswersProvided } from './validation/areSufficientAnswersProvided'

export const physical_activity_measurement: ScoreType<
  typeof PA_INPUTS,
  typeof PHYSICAL_ACTIVITY_MEASUREMENTS_OUTPUT
> = {
  name: 'Physical Activity Measurements',
  readmeLocation: __dirname,
  inputSchema: PA_INPUTS,
  outputSchema: PHYSICAL_ACTIVITY_MEASUREMENTS_OUTPUT,
  calculate: ({ data }) => {
    if (!areSufficientAnswersProvided(data)) {
      return {
        PA_MINUTES_PER_WEEK: null,
        PA_MET_MINUTES_PER_WEEK: null,
        ENOUGH_PA: null,
      }
    }

    const MET_LIGHT_PA = 3.3
    const MET_MODERATE_PA = 4
    const MET_VIGOROUS_PA = 8

    const calculateTotalAmountOfPhysicalActivityInMinutesPerWeek = () => {
      const MODERATE_PA_WEIGHT = 2

      const MODERATE_PA =
        (data?.MODERATE_PA_DAYS_PER_WEEK ?? 0) *
        (data?.MODERATE_PA_MINUTES_PER_DAY ?? 0) *
        MODERATE_PA_WEIGHT

      const VIGOROUS_PA =
        (data?.VIGOROUS_PA_DAYS_PER_WEEK ?? 0) *
        (data?.VIGOROUS_PA_MINUTES_PER_DAY ?? 0)

      return sum([MODERATE_PA, VIGOROUS_PA])
    }

    const calculateTotalAmountOfPhysicalActivityInMETMinutesPerWeek = () => {
      const MET_MINUTES_PER_WEEK_OF_LIGHT_PA =
        (data?.LIGHT_PA_DAYS_PER_WEEK ?? 0) *
        (data?.LIGHT_PA_MINUTES_PER_DAY ?? 0) *
        MET_LIGHT_PA

      const MET_MINUTES_PER_WEEK_OF_MODERATE_PA =
        (data?.MODERATE_PA_DAYS_PER_WEEK ?? 0) *
        (data?.MODERATE_PA_MINUTES_PER_DAY ?? 0) *
        MET_MODERATE_PA

      const MET_MINUTES_PER_WEEK_OF_VIGOROUS_PA =
        (data?.VIGOROUS_PA_DAYS_PER_WEEK ?? 0) *
        (data?.VIGOROUS_PA_MINUTES_PER_DAY ?? 0) *
        MET_VIGOROUS_PA

      return sum([
        MET_MINUTES_PER_WEEK_OF_LIGHT_PA,
        MET_MINUTES_PER_WEEK_OF_MODERATE_PA,
        MET_MINUTES_PER_WEEK_OF_VIGOROUS_PA,
      ])
    }

    const PA_MINUTES_PER_WEEK =
      calculateTotalAmountOfPhysicalActivityInMinutesPerWeek()
    const PA_MET_MINUTES_PER_WEEK =
      calculateTotalAmountOfPhysicalActivityInMETMinutesPerWeek()

    const LOWER_LIMIT_PA_IN_MINUTES_PER_WEEK = 150
    const LOWER_LIMIT_PA_IN_MET_MINUTES_PER_WEEK = 600

    const isCriteriaMet = (
      score: number | null,
      comparison: 'gt' | 'geq',
      lower_limit: number,
    ): boolean => {
      if (isNil(score)) {
        return false
      }

      switch (comparison) {
        case 'gt': {
          return score > lower_limit
        }

        case 'geq': {
          return score >= lower_limit
        }

        default: {
          return false
        }
      }
    }

    const SCORE_CRITERIA_MET = 1
    const SCORE_CRITERIA_NOT_MET = 0

    const hasSufficientPA_minutes = isCriteriaMet(
      PA_MINUTES_PER_WEEK,
      'gt',
      LOWER_LIMIT_PA_IN_MINUTES_PER_WEEK,
    )
    const hasSufficientPAMetMinutes = isCriteriaMet(
      PA_MET_MINUTES_PER_WEEK,
      'geq',
      LOWER_LIMIT_PA_IN_MET_MINUTES_PER_WEEK,
    )

    const enoughPA = hasSufficientPA_minutes || hasSufficientPAMetMinutes

    return {
      PA_MINUTES_PER_WEEK,
      PA_MET_MINUTES_PER_WEEK,
      ENOUGH_PA: enoughPA === true ? 1 : 0,
    }
  },
}
