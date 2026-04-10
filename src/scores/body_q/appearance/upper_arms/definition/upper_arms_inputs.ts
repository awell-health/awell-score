import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_UPPER_ARMS_INPUTS = {
  BODY_Q_UPPER_ARMS_Q01: {
    label: { en: '', fr: 'La taille de vos bras?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_UPPER_ARMS_Q02: {
    label: { en: '', fr: "L'aspect lisse de vos bras?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_UPPER_ARMS_Q03: {
    label: { en: '', fr: 'La forme de vos bras?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_UPPER_ARMS_Q04: {
    label: { en: '', fr: "L'apparence de la peau de vos bras?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_UPPER_ARMS_Q05: {
    label: { en: '', fr: "L'aspect tonique de vos bras?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_UPPER_ARMS_Q06: {
    label: { en: '', fr: "L'apparence de vos bras quand vous les levez?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_UPPER_ARMS_Q07: {
    label: { en: '', fr: "L'apparence de vos bras quand ils ne sont pas couverts (par exemple avec un T-shirt sans manche)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
