import { sum } from 'lodash'
import { ScoreType } from '../../types'
import { WHO5_INPUTS, WHO5_OUTPUT } from './definition'

const PERCENTAGE_FACTOR = 4

export const who_5: ScoreType<typeof WHO5_INPUTS, typeof WHO5_OUTPUT> = {
  name: 'World Health Organization-Five Well-Being Index (WHO-5)',
  readmeLocation: __dirname,
  inputSchema: WHO5_INPUTS,
  outputSchema: WHO5_OUTPUT,
  licensing_status: 'license_required',
  license_contact: 'https://www.who.int/copyright',
  calculate: ({ data }) => {
    const rawScore = sum(Object.values(data))

    return {
      WHO5_RAW_SCORE: rawScore,
      WHO5_PERCENTAGE_SCORE: rawScore * PERCENTAGE_FACTOR,
    }
  },
}
