import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_BODY_INPUTS = {
  BODY_Q_BODY_Q01: {
    label: { en: '', fr: "L'apparence de votre corps lorsque vous êtes habillé(e)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q02: {
    label: { en: '', fr: 'La façon dont vos habits vous vont?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q03: {
    label: { en: '', fr: 'La corpulence (càd le poids) de votre corps?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q04: {
    label: { en: '', fr: 'La forme de votre corps?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q05: {
    label: { en: '', fr: "L'apparence de votre corps sur les photos?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q06: {
    label: { en: '', fr: "L'apparence de votre corps vu de derrière?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q07: {
    label: { en: '', fr: "L'apparence de votre corps vu de côté (càd de profil)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q08: {
    label: { en: '', fr: "L'apparence de votre corps dans des vêtements d'été (par ex: shorts, t-shirts)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q09: {
    label: { en: '', fr: "L'apparence de votre corps en maillot de bain?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_BODY_Q10: {
    label: { en: '', fr: "L'apparence de votre corps nu dans un miroir?" },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
