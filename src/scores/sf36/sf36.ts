import { ScoreType } from '../../types'
import {
  SF36_INPUTS,
  SF36_OUTPUT,
  SF36_SUBSCALES,
  type SubscaleType,
  SF36_CONVERSION_TABLE,
} from './definition'
import { mapValues, mean, pick, round, sum } from 'lodash'

export const sf36: ScoreType<typeof SF36_INPUTS, typeof SF36_OUTPUT> = {
  name: '36-Item Short Form Survey (SF36)',
  readmeLocation: __dirname,
  inputSchema: SF36_INPUTS,
  outputSchema: SF36_OUTPUT,
  calculate: ({ data }) => {
    const ROUND_TO = 2

    const calculateSubscaleScore = (subscale: SubscaleType): number | null => {
      const subscaleInputs = pick(data, SF36_SUBSCALES[subscale])
      const validSubscaleInputs = Object.values(subscaleInputs).filter(
        value => value !== undefined,
      )

      if (validSubscaleInputs.length === 0) {
        return null
      }

      const stdInputValues = mapValues(subscaleInputs, (rawValue, inputId) => {
        const conversionTable = SF36_CONVERSION_TABLE.find(table =>
          table.items.includes(inputId),
        )

        if (!conversionTable) {
          return null
        }

        const conversionTableValue = conversionTable.conversion_table.find(
          table => table.raw === rawValue,
        )

        if (!conversionTableValue) {
          return null
        }

        return conversionTableValue.std
      })

      const subscaleScore = mean(Object.values(stdInputValues))

      return round(subscaleScore, ROUND_TO)
    }

    return {
      PHYSICAL_FUNCTIONING: calculateSubscaleScore('PHYSICAL_FUNCTIONING'),
      ROLE_LIMITATIONS_PHYSICAL_HEALTH: calculateSubscaleScore(
        'ROLE_LIMITATIONS_PHYSICAL_HEALTH',
      ),
      ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS: calculateSubscaleScore(
        'ROLE_LIMITATIONS_EMOTIONAL_PROBLEMS',
      ),
      ENERGY_FATIGUE: calculateSubscaleScore('ENERGY_FATIGUE'),
      EMOTIONAL_WELLBEING: calculateSubscaleScore('EMOTIONAL_WELLBEING'),
      SOCIAL_FUNCTIONING: calculateSubscaleScore('SOCIAL_FUNCTIONING'),
      PAIN: calculateSubscaleScore('PAIN'),
      GENERAL_HEALTH: calculateSubscaleScore('GENERAL_HEALTH'),
    }
  },
}
