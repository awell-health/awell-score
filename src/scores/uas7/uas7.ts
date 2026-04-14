import { type LabelType, ScoreType } from '../../types'
import {
  UAS7_INPUTS,
  UAS7_OUTPUT,
  UAS7_INTERPRETATION_CODE,
  UAS7_INTERPRETATION_LABEL,
  UAS7_SCORE_BANDS,
} from './definition'

const DAYS = [1, 2, 3, 4, 5, 6, 7] as const

export const uas7: ScoreType<typeof UAS7_INPUTS, typeof UAS7_OUTPUT> = {
  name: 'Weekly Urticaria Activity Score (UAS7)',
  readmeLocation: __dirname,
  inputSchema: UAS7_INPUTS,
  outputSchema: UAS7_OUTPUT,
  calculate: ({ data, language }) => {
    const MIN_DAYS_REQUIRED = 4

    const dailyScores = DAYS.map(day => {
      const wheals = data[`DAY_${day}_WHEALS` as keyof typeof data]
      const itch = data[`DAY_${day}_ITCH` as keyof typeof data]

      if (wheals == null || itch == null) return null

      return (wheals as number) + (itch as number)
    })

    const missingDays = DAYS.filter((_day, i) => dailyScores[i] === null)
    const presentScores = dailyScores.filter(
      (s): s is number => s !== null,
    )
    const presentCount = presentScores.length

    let total: number | null = null
    if (presentCount === 7) {
      total = presentScores.reduce((sum, s) => sum + s, 0)
    } else if (presentCount >= MIN_DAYS_REQUIRED) {
      const sum = presentScores.reduce((acc, s) => acc + s, 0)
      total = Math.round((sum / presentCount) * 7)
    }

    let interpretation: string | null = null
    let interpretationLabel: string | null = null

    if (total !== null) {
      const band = UAS7_SCORE_BANDS.find(
        b => total >= b.min && total <= b.max,
      )

      if (band) {
        const code: LabelType = UAS7_INTERPRETATION_CODE[band.key]
        const label: LabelType = UAS7_INTERPRETATION_LABEL[band.key]

        interpretation = (language && code[language]) ?? code.en ?? ''
        interpretationLabel = (language && label[language]) ?? label.en ?? ''
      }
    }

    return {
      UAS7_DAY_1: dailyScores[0],
      UAS7_DAY_2: dailyScores[1],
      UAS7_DAY_3: dailyScores[2],
      UAS7_DAY_4: dailyScores[3],
      UAS7_DAY_5: dailyScores[4],
      UAS7_DAY_6: dailyScores[5],
      UAS7_DAY_7: dailyScores[6],
      UAS7_TOTAL: total,
      UAS7_INTERPRETATION: interpretation,
      UAS7_INTERPRETATION_LABEL: interpretationLabel,
      UAS7_MISSING_DAYS_NUMBER: missingDays.length,
      UAS7_MISSING_DAYS: missingDays.join(', '),
    }
  },
}
