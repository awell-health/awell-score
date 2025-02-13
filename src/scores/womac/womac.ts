import { ScoreType } from '../../types'
import {
  WOMAC_INPUTS,
  WOMAC_OUTPUT,
  WOMAC_SECTIONS,
  type WOMAC_SECTION,
} from './definition'
import { pick, sum, pickBy } from 'lodash'

export const womac: ScoreType<typeof WOMAC_INPUTS, typeof WOMAC_OUTPUT> = {
  name: 'Western Ontario and McMaster Universities Osteoarthritis Index (WOMAC)',
  readmeLocation: __dirname,
  inputSchema: WOMAC_INPUTS,
  outputSchema: WOMAC_OUTPUT,
  calculate: ({ data }) => {
    const calculateSectionScore = (section: WOMAC_SECTION) => {
      const sectionInputs = WOMAC_SECTIONS[section]
      const sectionData = pick(data, sectionInputs)
      const validSectionInputs = Object.values(
        pickBy(sectionData, value => value !== undefined),
      )

      if (validSectionInputs.length === 0) return null

      return sum(validSectionInputs)
    }

    const pain_score = calculateSectionScore('PAIN')
    const stiffness_score = calculateSectionScore('STIFFNESS')
    const difficulty_score = calculateSectionScore('DIFFICULTY')

    const validInputs = pickBy(data, value => value !== undefined)

    const total_score =
      Object.keys(validInputs).length === 0
        ? null
        : sum(Object.values(validInputs))

    return {
      WOMAC_TOTAL_SCORE: total_score,
      WOMAC_PAIN_SCORE: pain_score,
      WOMAC_STIFFNESS_SCORE: stiffness_score,
      WOMAC_DIFFICULTY_SCORE: difficulty_score,
    }
  },
}
