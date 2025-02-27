import { mean, pickBy, round } from 'lodash'
import { ScoreType } from '../../types'
import { PAQ_C_INPUTS, PAQ_C_OUTPUT } from './definition'

export const paq_c: ScoreType<typeof PAQ_C_INPUTS, typeof PAQ_C_OUTPUT> = {
  name: 'The Physical Activity Questionnaire for Older Children (PAQ-C)',
  readmeLocation: __dirname,
  inputSchema: PAQ_C_INPUTS,
  outputSchema: PAQ_C_OUTPUT,
  calculate: ({ data }) => {
    const ROUND_TO = 2

    const itemOneScoreItems = pickBy(data, (_, key) =>
      key.startsWith('ITEM_1_ACTIVITY_'),
    )

    const itemOneScore = round(mean(Object.values(itemOneScoreItems)), ROUND_TO)

    const itemsTwoToEightScoreItems = round(
      mean([
        data.ITEM_2,
        data.ITEM_3,
        data.ITEM_4,
        data.ITEM_5,
        data.ITEM_6,
        data.ITEM_7,
        data.ITEM_8,
      ]),
      ROUND_TO,
    )

    const itemNineScoreItems = pickBy(data, (_, key) =>
      key.startsWith('ITEM_9_'),
    )
    const itemNineScore = round(
      mean(Object.values(itemNineScoreItems)),
      ROUND_TO,
    )

    const summaryScore = round(
      mean([itemOneScore, itemsTwoToEightScoreItems, itemNineScore]),
      ROUND_TO,
    )

    return {
      ITEM_1_SPARE_TIME_ACTIVITY_SCORE: itemOneScore,
      ITEMS_2_TO_8_ACTIVITY_SCORE: itemsTwoToEightScoreItems,
      ITEM_9_ACTIVITY_SCORE: itemNineScore,
      ACTIVITY_SUMMARY_SCORE: summaryScore,
    }
  },
}
