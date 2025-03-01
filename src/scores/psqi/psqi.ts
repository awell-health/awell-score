import { ScoreType } from '../../types'
import { PSQI_INPUT, PSQI_OUTPUT } from './definition'
import { sum } from 'lodash'
import {
  calculate_sleep_latency,
  calculate_daytime_dysfunction,
  calculate_habitual_sleep_efficiency,
  calculate_sleep_disturbance,
  calculate_sleep_duration,
  calculate_subscale_scores,
} from './helpers'

export const psqi: ScoreType<typeof PSQI_INPUT, typeof PSQI_OUTPUT> = {
  name: 'Pittsburg Sleep Quality Index (PSQI)',
  readmeLocation: __dirname,
  inputSchema: PSQI_INPUT,
  outputSchema: PSQI_OUTPUT,
  calculate: ({ data }) => {
    const SLEEP_LATENCY = calculate_sleep_latency(data)
    const SLEEP_DISTURBANCES = calculate_sleep_disturbance(data)
    const SLEEP_DURATION = calculate_sleep_duration(data)
    const DAYTIME_DYSFUNCTION = calculate_daytime_dysfunction(data)
    const HABITUAL_SLEEP_EFFICIENCY = calculate_habitual_sleep_efficiency(data)

    const SUBJECTIVE_SLEEP_QUALITY = data.Q09

    const USE_OF_SLEEPING_MEDICATION = calculate_subscale_scores(
      data,
      'USE_OF_SLEEPING_MEDICATION',
    )

    const subscaleScores = [
      SUBJECTIVE_SLEEP_QUALITY,
      SLEEP_LATENCY,
      SLEEP_DURATION,
      HABITUAL_SLEEP_EFFICIENCY,
      SLEEP_DISTURBANCES,
      USE_OF_SLEEPING_MEDICATION,
      DAYTIME_DYSFUNCTION,
    ]

    const validSubscaleScores = subscaleScores.filter(
      score => score !== null && score !== undefined,
    )

    const TOTAL_SCORE =
      validSubscaleScores.length === 0 ? null : sum(validSubscaleScores)

    return {
      PSQI_TOTAL_SCORE: TOTAL_SCORE,
      SUBJECTIVE_SLEEP_QUALITY: SUBJECTIVE_SLEEP_QUALITY ?? null,
      SLEEP_LATENCY: SLEEP_LATENCY,
      SLEEP_DURATION: SLEEP_DURATION,
      HABITUAL_SLEEP_EFFICIENCY: HABITUAL_SLEEP_EFFICIENCY,
      SLEEP_DISTURBANCES: SLEEP_DISTURBANCES,
      USE_OF_SLEEPING_MEDICATION: USE_OF_SLEEPING_MEDICATION,
      DAYTIME_DYSFUNCTION: DAYTIME_DYSFUNCTION,
    }
  },
}
