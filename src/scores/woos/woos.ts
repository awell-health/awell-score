import { ScoreType } from '../../types'
import { WOOS_INPUTS, WOOS_OUTPUT } from './definition'

const PHYSICAL_SYMPTOMS_KEYS = [
  'WOOS_Q01',
  'WOOS_Q02',
  'WOOS_Q03',
  'WOOS_Q04',
  'WOOS_Q05',
  'WOOS_Q06',
] as const

const SPORTS_RECREATION_WORK_KEYS = [
  'WOOS_Q07',
  'WOOS_Q08',
  'WOOS_Q09',
  'WOOS_Q10',
  'WOOS_Q11',
] as const

const LIFESTYLE_KEYS = [
  'WOOS_Q12',
  'WOOS_Q13',
  'WOOS_Q14',
  'WOOS_Q15',
  'WOOS_Q16',
] as const

const EMOTIONS_KEYS = ['WOOS_Q17', 'WOOS_Q18', 'WOOS_Q19'] as const

const MAX_TOTAL = 1900

function sumSection(
  data: Record<string, unknown>,
  keys: readonly string[],
): number | null {
  const values = keys.map(k => data[k])
  if (values.some(v => v == null)) return null
  return values.reduce<number>((acc, v) => acc + (v as number), 0)
}

export const woos: ScoreType<typeof WOOS_INPUTS, typeof WOOS_OUTPUT> = {
  name: 'Western Ontario Osteoarthritis of the Shoulder Index (WOOS)',
  readmeLocation: __dirname,
  inputSchema: WOOS_INPUTS,
  outputSchema: WOOS_OUTPUT,
  calculate: ({ data }) => {
    const physicalSymptoms = sumSection(data, PHYSICAL_SYMPTOMS_KEYS)
    const sportsRecreationWork = sumSection(data, SPORTS_RECREATION_WORK_KEYS)
    const lifestyle = sumSection(data, LIFESTYLE_KEYS)
    const emotions = sumSection(data, EMOTIONS_KEYS)

    const sections = [physicalSymptoms, sportsRecreationWork, lifestyle, emotions]
    const total = sections.every(s => s !== null)
      ? sections.reduce<number>((acc, s) => acc + s!, 0)
      : null

    const percentage = total !== null ? (MAX_TOTAL - total) / 19 : null

    return {
      WOOS_PHYSICAL_SYMPTOMS: physicalSymptoms,
      WOOS_SPORTS_RECREATION_WORK: sportsRecreationWork,
      WOOS_LIFESTYLE: lifestyle,
      WOOS_EMOTIONS: emotions,
      WOOS_TOTAL: total,
      WOOS_PERCENTAGE: percentage,
    }
  },
}
