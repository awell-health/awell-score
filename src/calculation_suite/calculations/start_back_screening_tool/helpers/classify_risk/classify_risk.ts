import R from 'ramda'

import type { LabelType } from '../../../../../types/localization.types'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'

export class CannotDetermineRiskClassification extends Error {
  constructor({
    total_score,
    subscale_score,
  }: {
    total_score: number
    subscale_score: number
  }) {
    super(
      `Cannot determine risk classification with a total score of ${total_score} and a subscale score of ${subscale_score}).`
    )
  }
}

const classifications = {
  LOW_RISK: {
    score: 1,
    interpretation: { en: 'Low risk', nl: 'Laag risico' },
  },
  MEDIUM_RISK: {
    score: 2,
    interpretation: { en: 'Medium risk', nl: 'Matig risico' },
  },
  HIGH_RISK: {
    score: 3,
    interpretation: { en: 'High risk', nl: 'Hoog risico' },
  },
  MISSING: {
    score: MISSING_MESSAGE,
  },
}

export const classify_risk = ({
  total_score,
  subscale_score,
}: {
  total_score?: number | string
  subscale_score?: number | string
}): {
  score: number | string
  interpretation?: LabelType
} => {
  if (
    R.isNil(total_score) ||
    R.isNil(subscale_score) ||
    total_score === MISSING_MESSAGE ||
    subscale_score === MISSING_MESSAGE
  ) {
    return classifications.MISSING
  }

  const numeric_total_score = Number(total_score)
  const numeric_subscale_score = Number(subscale_score)

  const TOTAL_SCORE_CUT_OFF = 3
  const SUBSCALE_SCORE_CUT_OFF = 3

  if (numeric_total_score <= TOTAL_SCORE_CUT_OFF) {
    return classifications.LOW_RISK
  }

  if (
    numeric_total_score > TOTAL_SCORE_CUT_OFF &&
    numeric_subscale_score <= SUBSCALE_SCORE_CUT_OFF
  ) {
    return classifications.MEDIUM_RISK
  }

  if (
    numeric_total_score > TOTAL_SCORE_CUT_OFF &&
    numeric_subscale_score > SUBSCALE_SCORE_CUT_OFF
  ) {
    return classifications.HIGH_RISK
  }

  throw new CannotDetermineRiskClassification({
    total_score: numeric_total_score,
    subscale_score: numeric_subscale_score,
  })
}
