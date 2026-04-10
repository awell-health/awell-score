import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_ABDOMEN_INPUTS = {
  BODY_Q_ABDOMEN_Q01: {
    label: { en: '',fr: 'Le fait que vos vêtements tombent bien sur votre ventre?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_ABDOMEN_Q02: {
    label: { en: '', fr: 'La taille de votre ventre?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_ABDOMEN_Q03: {
    label: { en: '',
      fr: "L'apparence de votre ventre vu de côté (càd vu de profil)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_ABDOMEN_Q04: {
    label: { en: '', fr: 'La forme de votre ventre?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_ABDOMEN_Q05: {
    label: { en: '', fr: "L'apparence de votre ventre en maillot de bain?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_ABDOMEN_Q06: {
    label: { en: '', fr: 'La tonicité de votre ventre?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_ABDOMEN_Q07: {
    label: { en: '', fr: "L'apparence de votre ventre lorsque vous êtes nu(e)?" },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
