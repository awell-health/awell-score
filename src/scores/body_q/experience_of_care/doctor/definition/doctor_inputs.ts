import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_DOCTOR_INPUTS = {
  BODY_Q_DOCTOR_Q01: {
    label: { en: '', fr: 'A agi de manière professionnelle?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q02: {
    label: { en: '', fr: "Vous a parlé d'une manière compréhensible?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q03: {
    label: { en: '', fr: 'A répondu à toutes vos questions?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q04: {
    label: { en: '', fr: 'Vous a traité(e) avec respect?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q05: {
    label: { en: '', fr: 'Vous a mis(e) à l\'aise?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q06: {
    label: { en: '', fr: 'Vous a impliqué(e) dans les décisions concernant votre traitement?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q07: {
    label: { en: '', fr: 'Vous a écouté(e) et a compris vos préoccupations?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q08: {
    label: { en: '', fr: 'Vous a aidé(e) à comprendre ce qui était le mieux pour vous?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q09: {
    label: { en: '', fr: 'Etait disponible quand vous étiez inquiet(e)?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_DOCTOR_Q10: {
    label: { en: '', fr: 'A passé suffisamment de temps avec vous?' },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
