import {
  CORE_OM_INPUTS,
  CORE_OM_OUTPUT,
  CORE_OM_SUBSCALE_ITEMS,
} from './definition'
import { ScoreType } from '../../types'
import { sum, pick, pickBy, isEmpty, round, size } from 'lodash'

export const core_om: ScoreType<typeof CORE_OM_INPUTS, typeof CORE_OM_OUTPUT> =
  {
    name: 'Caregiver Strain Index (CSI)',
    readmeLocation: __dirname,
    inputSchema: CORE_OM_INPUTS,
    outputSchema: CORE_OM_OUTPUT,
    calculate: ({ data }) => {
      const subjectiveWellBeingItems = pick(
        data,
        CORE_OM_SUBSCALE_ITEMS.SUBJECTIVE_WELLBEING,
      )
      const problemsSymptomsItems = pick(
        data,
        CORE_OM_SUBSCALE_ITEMS.PROBLEMS_SYMPTOMS,
      )
      const lifeFunctioningDifficultiesItems = pick(
        data,
        CORE_OM_SUBSCALE_ITEMS.LIFE_FUNCTIONING_DIFFICULTIES,
      )
      const riskHarmItems = pick(data, CORE_OM_SUBSCALE_ITEMS.RISK_HARM)

      const calculateRawScore = (
        items: Record<string, number | undefined>,
      ): number | null => {
        const definedItems = pickBy(items, value => value !== undefined)

        if (isEmpty(definedItems)) {
          return null
        }

        return sum(Object.values(definedItems))
      }

      const calculateMeanScore = (
        items: Record<string, number | undefined>,
      ): number | null => {
        const rawScore = calculateRawScore(items)

        if (rawScore === null) {
          return null
        }
        const ROUND_TO = 2
        return round(rawScore / size(items), ROUND_TO)
      }

      return {
        TOTAL_RAW: calculateRawScore(data),
        SUBJECTIVE_WELL_BEING_DEFICITS_RAW: calculateRawScore(
          subjectiveWellBeingItems,
        ),
        SUBJECTIVE_WELL_BEING_DEFICITS_MEAN: calculateMeanScore(
          subjectiveWellBeingItems,
        ),
        PROBLEMS_SYMPTOMS_RAW: calculateRawScore(problemsSymptomsItems),
        PROBLEMS_SYMPTOMS_MEAN: calculateMeanScore(problemsSymptomsItems),
        LIFE_FUNCTIONING_DIFFICULTIES_RAW: calculateRawScore(
          lifeFunctioningDifficultiesItems,
        ),
        LIFE_FUNCTIONING_DIFFICULTIES_MEAN: calculateMeanScore(
          lifeFunctioningDifficultiesItems,
        ),
        RISK_HARM_RAW: calculateRawScore(riskHarmItems),
        RISK_HARM_MEAN: calculateMeanScore(riskHarmItems),
        TOTAL_MEAN: calculateMeanScore(data),
      }
    },
  }
