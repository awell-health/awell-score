import { min } from 'lodash'
import { ScoreType } from '../../types'
import { HRQOL_4_INPUTS, HRQOL_4_OUTPUT } from './definition'

export const hrqol_4: ScoreType<typeof HRQOL_4_INPUTS, typeof HRQOL_4_OUTPUT> =
  {
    name: 'Health-Related Quality of Life (HRQOL–4)',
    readmeLocation: __dirname,
    inputSchema: HRQOL_4_INPUTS,
    outputSchema: HRQOL_4_OUTPUT,
    calculate: ({ data }) => {
      const generalHealthAnswer = data.HRQOL_4_Q01
      const unhealthyPhysicalDays = data.HRQOL_4_Q02
      const unhealthyMentalDays = data.HRQOL_4_Q03
      const activityLimitationDays = data.HRQOL_4_Q04

      const MAX_NUMBER_OF_UNHEALTHY_DAYS = 30
      const sumUnhealthyDays = unhealthyMentalDays + unhealthyPhysicalDays
      const unHealthyDaysTotal = min([
        sumUnhealthyDays,
        MAX_NUMBER_OF_UNHEALTHY_DAYS,
      ])

      const DAYS_IN_MONTH = 30
      const sumHealthyDays = DAYS_IN_MONTH - (unHealthyDaysTotal ?? 0)

      return {
        HRQOL_4_UNHEALTHY_DAYS_INDEX: unHealthyDaysTotal ?? null,
        HRQOL_4_GENERAL_HEALTH_STATUS: generalHealthAnswer,
        HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS: unhealthyPhysicalDays,
        HRQOL_4_MENTALLY_UNHEALTHY_DAYS: unhealthyMentalDays,
        HRQOL_4_ACTIVITY_LIMITATION_DAYS: activityLimitationDays,
        HRQOL_4_HEALTHY_DAYS_INDEX: sumHealthyDays ?? null,
      }
    },
  }
