import { ScoreType } from '../../types'
import { NAFLD_FIBROSIS_INPUTS, NAFLD_FIBROSIS_OUTPUT } from './definition'

const HIGH_CUTOFF = 0.675
const LOW_CUTOFF_UNDER_65 = -1.455
const LOW_CUTOFF_65_AND_OVER = -0.12

export const nafld_fibrosis: ScoreType<
  typeof NAFLD_FIBROSIS_INPUTS,
  typeof NAFLD_FIBROSIS_OUTPUT
> = {
  name: 'NAFLD Fibrosis Score (NFS)',
  readmeLocation: __dirname,
  inputSchema: NAFLD_FIBROSIS_INPUTS,
  outputSchema: NAFLD_FIBROSIS_OUTPUT,
  calculate: ({ data }) => {
    const age = data.age
    const bmi = data.bmi
    const ifg = data.ifg_or_diabetes ? 1 : 0
    const ast = data.ast
    const alt = data.alt
    const platelet = data.platelet
    const albumin = data.albumin

    const raw =
      -1.675 +
      0.037 * age +
      0.094 * bmi +
      1.13 * ifg +
      0.99 * (ast / alt) -
      0.013 * platelet -
      0.66 * albumin

    const lowCutoff = age >= 65 ? LOW_CUTOFF_65_AND_OVER : LOW_CUTOFF_UNDER_65
    const highCutoff = HIGH_CUTOFF

    const rounded = Math.round(raw * 1000) / 1000

    let category: string
    if (rounded < lowCutoff) {
      category = 'low'
    } else if (rounded > highCutoff) {
      category = 'high'
    } else {
      category = 'indeterminate'
    }

    return {
      NFS_SCORE: rounded,
      NFS_CATEGORY: category,
      NFS_LOW_CUTOFF_USED: lowCutoff,
      NFS_HIGH_CUTOFF_USED: highCutoff,
    }
  },
}
