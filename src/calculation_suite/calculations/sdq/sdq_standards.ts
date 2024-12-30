/* eslint-disable no-magic-numbers */

type VersionType =
  | 'PARENT_COMPLETED_SDQ'
  | 'TEACHER_COMPLETED_SDQ'
  | 'SELF_COMPLETED_SDQ'

type SubscaleIdType =
  | 'EMOTIONAL_PROBLEMS'
  | 'CONDUCT_PROBLEMS'
  | 'HYPERACTIVITY'
  | 'PEER_PROBLEMS'
  | 'PROSOCIAL'
  | 'TOTAL'
  | 'IMPACT'

type CategoryThreeBandType = 'NORMAL' | 'BORDERLINE' | 'ABNORMAL'

type CategoryFourBandType =
  | 'CLOSE_TO_AVERAGE'
  | 'SLIGHTLY_RAISED_OR_LOWERED'
  | 'HIGH_OR_LOW'
  | 'VERY_HIGH_OR_LOW'

type LowerBoundaryType = number
type UpperBoundaryType = number

type BoundariesType = [LowerBoundaryType, UpperBoundaryType]

export type CategoriationTableType = Record<
  VersionType,
  Record<
    SubscaleIdType,
    Record<CategoryThreeBandType | CategoryFourBandType, BoundariesType>
  >
>

export const TRANSLATION_TABLE_CATEGORIES = {
  NORMAL: 'Normal',
  BORDERLINE: 'Borderline',
  ABNORMAL: 'Abnormal',
  CLOSE_TO_AVERAGE: 'Close to average',
  SLIGHTLY_RAISED_OR_LOWERED: 'Slightly raised (/slightly lowered)',
  HIGH_OR_LOW: 'High (/low)',
  VERY_HIGH_OR_LOW: 'Very high (/very low)',
}

/**
 * The initial bandings presented for the SDQ scores were ‘normal’, ‘borderline’
 * and ‘abnormal’. These bandings were defined based on a population-based UK survey,
 * attempting to choose cutpoints such that 80% of children scored ‘normal’, 10% ‘borderline’ and
 * 10% ‘abnormal’.
 *
 * See https://drive.google.com/drive/u/1/folders/1aKLfrdf2cBsh_w4U71Cc2F_VwBbtfjy_
 */
export const ORIGINAL_THREE_BAND_CATEGORISATION: CategoriationTableType = {
  PARENT_COMPLETED_SDQ: {
    //@ts-expect-error to do
    TOTAL: {
      NORMAL: [0, 13],
      BORDERLINE: [14, 16],
      ABNORMAL: [17, 40],
    }, //@ts-expect-error to do
    EMOTIONAL_PROBLEMS: {
      NORMAL: [0, 3],
      BORDERLINE: [4, 4],
      ABNORMAL: [5, 10],
    }, //@ts-expect-error to do
    CONDUCT_PROBLEMS: {
      NORMAL: [0, 2],
      BORDERLINE: [3, 3],
      ABNORMAL: [4, 10],
    }, //@ts-expect-error to do
    HYPERACTIVITY: {
      NORMAL: [0, 5],
      BORDERLINE: [6, 6],
      ABNORMAL: [7, 10],
    }, //@ts-expect-error to do
    PEER_PROBLEMS: {
      NORMAL: [0, 2],
      BORDERLINE: [3, 3],
      ABNORMAL: [4, 10],
    }, //@ts-expect-error to do
    PROSOCIAL: {
      NORMAL: [6, 10],
      BORDERLINE: [5, 5],
      ABNORMAL: [0, 4],
    }, //@ts-expect-error to do
    IMPACT: {
      NORMAL: [0, 0],
      BORDERLINE: [1, 1],
      ABNORMAL: [2, 10],
    },
  },
  TEACHER_COMPLETED_SDQ: {
    //@ts-expect-error to do
    TOTAL: {
      NORMAL: [0, 11],
      BORDERLINE: [12, 15],
      ABNORMAL: [16, 40],
    }, //@ts-expect-error to do
    EMOTIONAL_PROBLEMS: {
      NORMAL: [0, 4],
      BORDERLINE: [5, 5],
      ABNORMAL: [6, 10],
    }, //@ts-expect-error to do
    CONDUCT_PROBLEMS: {
      NORMAL: [0, 2],
      BORDERLINE: [3, 3],
      ABNORMAL: [4, 10],
    }, //@ts-expect-error to do
    HYPERACTIVITY: {
      NORMAL: [0, 5],
      BORDERLINE: [6, 6],
      ABNORMAL: [7, 10],
    }, //@ts-expect-error to do
    PEER_PROBLEMS: {
      NORMAL: [0, 3],
      BORDERLINE: [4, 4],
      ABNORMAL: [5, 10],
    }, //@ts-expect-error to do
    PROSOCIAL: {
      NORMAL: [6, 10],
      BORDERLINE: [5, 5],
      ABNORMAL: [0, 4],
    }, //@ts-expect-error to do
    IMPACT: {
      NORMAL: [0, 0],
      BORDERLINE: [1, 1],
      ABNORMAL: [2, 10],
    },
  },
  SELF_COMPLETED_SDQ: {
    //@ts-expect-error to do
    TOTAL: {
      NORMAL: [0, 15],
      BORDERLINE: [16, 19],
      ABNORMAL: [20, 40],
    }, //@ts-expect-error to do
    EMOTIONAL_PROBLEMS: {
      NORMAL: [0, 5],
      BORDERLINE: [6, 6],
      ABNORMAL: [7, 10],
    }, //@ts-expect-error to do
    CONDUCT_PROBLEMS: {
      NORMAL: [0, 3],
      BORDERLINE: [4, 4],
      ABNORMAL: [5, 10],
    }, //@ts-expect-error to do
    HYPERACTIVITY: {
      NORMAL: [0, 5],
      BORDERLINE: [6, 6],
      ABNORMAL: [7, 10],
    }, //@ts-expect-error to do
    PEER_PROBLEMS: {
      NORMAL: [0, 3],
      BORDERLINE: [4, 5],
      ABNORMAL: [6, 10],
    }, //@ts-expect-error to do
    PROSOCIAL: {
      NORMAL: [6, 10],
      BORDERLINE: [5, 5],
      ABNORMAL: [0, 4],
    }, //@ts-expect-error to do
    IMPACT: {
      NORMAL: [0, 0],
      BORDERLINE: [1, 1],
      ABNORMAL: [2, 10],
    },
  },
}

/**
 * More recently a four-fold classification has been created based on an even larger UK
 * community sample. This four-fold classification differs from the original in that it (1) divided the
 * top ‘abnormal’ category into two groups, each containing around 5% of the population, (2)
 * renamed the four categories (80% ‘close to average’, 10% ‘slightly raised, 5% ‘high’ and 5%
 * ‘very high’ for all scales except prosocial, which is 80% ‘close to average’, 10% ‘slightly
 * lowered’, 5% ‘low’ and 5% ‘very low’), and (3) changed the cut-points for some scales, to better
 * reflect the proportion of children in each category in the larger dataset.
 *
 * See https://drive.google.com/drive/u/1/folders/1aKLfrdf2cBsh_w4U71Cc2F_VwBbtfjy_
 */
export const NEWER_FOUR_BAND_CATEGORISATION: CategoriationTableType = {
  PARENT_COMPLETED_SDQ: {
    //@ts-expect-error to do
    TOTAL: {
      CLOSE_TO_AVERAGE: [0, 13],
      SLIGHTLY_RAISED_OR_LOWERED: [14, 16],
      HIGH_OR_LOW: [17, 19],
      VERY_HIGH_OR_LOW: [20, 40],
    }, //@ts-expect-error to do
    EMOTIONAL_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 3],
      SLIGHTLY_RAISED_OR_LOWERED: [4, 4],
      HIGH_OR_LOW: [5, 6],
      VERY_HIGH_OR_LOW: [7, 10],
    }, //@ts-expect-error to do
    CONDUCT_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 2],
      SLIGHTLY_RAISED_OR_LOWERED: [3, 3],
      HIGH_OR_LOW: [4, 5],
      VERY_HIGH_OR_LOW: [6, 10],
    }, //@ts-expect-error to do
    HYPERACTIVITY: {
      CLOSE_TO_AVERAGE: [0, 5],
      SLIGHTLY_RAISED_OR_LOWERED: [6, 7],
      HIGH_OR_LOW: [8, 8],
      VERY_HIGH_OR_LOW: [9, 10],
    }, //@ts-expect-error to do
    PEER_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 2],
      SLIGHTLY_RAISED_OR_LOWERED: [3, 3],
      HIGH_OR_LOW: [4, 4],
      VERY_HIGH_OR_LOW: [5, 10],
    }, //@ts-expect-error to do
    PROSOCIAL: {
      CLOSE_TO_AVERAGE: [8, 10],
      SLIGHTLY_RAISED_OR_LOWERED: [7, 7],
      HIGH_OR_LOW: [6, 6],
      VERY_HIGH_OR_LOW: [0, 5],
    }, //@ts-expect-error to do
    IMPACT: {
      CLOSE_TO_AVERAGE: [0, 0],
      SLIGHTLY_RAISED_OR_LOWERED: [1, 1],
      HIGH_OR_LOW: [2, 2],
      VERY_HIGH_OR_LOW: [3, 10],
    },
  },
  TEACHER_COMPLETED_SDQ: {
    //@ts-expect-error to do
    TOTAL: {
      CLOSE_TO_AVERAGE: [0, 11],
      SLIGHTLY_RAISED_OR_LOWERED: [12, 15],
      HIGH_OR_LOW: [16, 18],
      VERY_HIGH_OR_LOW: [19, 40],
    }, //@ts-expect-error to do
    EMOTIONAL_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 3],
      SLIGHTLY_RAISED_OR_LOWERED: [4, 4],
      HIGH_OR_LOW: [5, 5],
      VERY_HIGH_OR_LOW: [6, 10],
    }, //@ts-expect-error to do
    CONDUCT_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 2],
      SLIGHTLY_RAISED_OR_LOWERED: [3, 3],
      HIGH_OR_LOW: [4, 4],
      VERY_HIGH_OR_LOW: [5, 10],
    }, //@ts-expect-error to do
    HYPERACTIVITY: {
      CLOSE_TO_AVERAGE: [0, 5],
      SLIGHTLY_RAISED_OR_LOWERED: [6, 7],
      HIGH_OR_LOW: [8, 8],
      VERY_HIGH_OR_LOW: [9, 10],
    }, //@ts-expect-error to do
    PEER_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 2],
      SLIGHTLY_RAISED_OR_LOWERED: [3, 4],
      HIGH_OR_LOW: [5, 5],
      VERY_HIGH_OR_LOW: [6, 10],
    }, //@ts-expect-error to do
    PROSOCIAL: {
      CLOSE_TO_AVERAGE: [6, 10],
      SLIGHTLY_RAISED_OR_LOWERED: [5, 5],
      HIGH_OR_LOW: [4, 4],
      VERY_HIGH_OR_LOW: [0, 3],
    }, //@ts-expect-error to do
    IMPACT: {
      CLOSE_TO_AVERAGE: [0, 0],
      SLIGHTLY_RAISED_OR_LOWERED: [1, 1],
      HIGH_OR_LOW: [2, 2],
      VERY_HIGH_OR_LOW: [3, 10],
    },
  },
  SELF_COMPLETED_SDQ: {
    //@ts-expect-error to do
    TOTAL: {
      CLOSE_TO_AVERAGE: [0, 14],
      SLIGHTLY_RAISED_OR_LOWERED: [15, 17],
      HIGH_OR_LOW: [18, 19],
      VERY_HIGH_OR_LOW: [20, 40],
    }, //@ts-expect-error to do
    EMOTIONAL_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 4],
      SLIGHTLY_RAISED_OR_LOWERED: [5, 5],
      HIGH_OR_LOW: [6, 6],
      VERY_HIGH_OR_LOW: [7, 10],
    }, //@ts-expect-error to do
    CONDUCT_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 3],
      SLIGHTLY_RAISED_OR_LOWERED: [4, 4],
      HIGH_OR_LOW: [5, 5],
      VERY_HIGH_OR_LOW: [6, 10],
    }, //@ts-expect-error to do
    HYPERACTIVITY: {
      CLOSE_TO_AVERAGE: [0, 5],
      SLIGHTLY_RAISED_OR_LOWERED: [6, 6],
      HIGH_OR_LOW: [7, 7],
      VERY_HIGH_OR_LOW: [8, 10],
    }, //@ts-expect-error to do
    PEER_PROBLEMS: {
      CLOSE_TO_AVERAGE: [0, 2],
      SLIGHTLY_RAISED_OR_LOWERED: [3, 3],
      HIGH_OR_LOW: [4, 4],
      VERY_HIGH_OR_LOW: [5, 10],
    }, //@ts-expect-error to do
    PROSOCIAL: {
      CLOSE_TO_AVERAGE: [7, 10],
      SLIGHTLY_RAISED_OR_LOWERED: [6, 6],
      HIGH_OR_LOW: [5, 5],
      VERY_HIGH_OR_LOW: [0, 4],
    }, //@ts-expect-error to do
    IMPACT: {
      CLOSE_TO_AVERAGE: [0, 0],
      SLIGHTLY_RAISED_OR_LOWERED: [1, 1],
      HIGH_OR_LOW: [2, 2],
      VERY_HIGH_OR_LOW: [3, 10],
    },
  },
}
