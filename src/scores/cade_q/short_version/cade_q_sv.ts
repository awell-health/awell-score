import { ScoreType } from '../../../types'
import {
  CADE_Q_OUTPUT,
  CADE_Q_INPUTS,
  CORRECT_ANSWER_PER_ITEM,
} from './definition'

export const cade_q_sv: ScoreType<typeof CADE_Q_INPUTS, typeof CADE_Q_OUTPUT> =
  {
    name: 'CADE-Q - Short Version',
    readmeLocation: __dirname,
    inputSchema: CADE_Q_INPUTS,
    outputSchema: CADE_Q_OUTPUT,
    calculate: ({ data }) => {
      const points = Object.entries(data).reduce((acc, [key, value]) => {
        const correctAnswer =
          CORRECT_ANSWER_PER_ITEM[key as keyof typeof CORRECT_ANSWER_PER_ITEM]
        return acc + (value === correctAnswer ? 1 : 0)
      }, 0)

      return { CADE_Q_SV_SCORE: points }
    },
  }
