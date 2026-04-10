import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_BUTTOCKS_INPUTS = {
  BODY_Q_BUTTOCKS_Q01: {
    label: { en: '', fr: 'La taille de vos fesses?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BUTTOCKS_Q02: {
    label: { en: '', fr: "L'apparence de vos fesses vues de côté (càd vues de profil)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BUTTOCKS_Q03: {
    label: { en: '', fr: 'La forme de vos fesses?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BUTTOCKS_Q04: {
    label: { en: '', fr: "L'aspect lisse de vos fesses?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BUTTOCKS_Q05: {
    label: { en: '', fr: "L'apparence de la peau de vos fesses?" },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
