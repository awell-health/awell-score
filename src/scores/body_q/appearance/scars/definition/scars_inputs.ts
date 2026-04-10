import { type ScoreInputSchemaType } from '../../../../../types'
import { APPRAISAL_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_SCARS_INPUTS = {
  BODY_Q_SCARS_Q01: {
    label: { en: '', fr: 'Avoir dû vous habiller de manière à cacher vos cicatrices?',
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q02: {
    label: { en: '', fr: 'A quel point vos cicatrices paraissent larges?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q03: {
    label: { en: '', fr: "L'emplacement de vos cicatrices?" },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q04: {
    label: { en: '', fr: 'La longueur de vos cicatrices?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q05: {
    label: { en: '', fr: 'A quel point vos cicatrices sont perceptibles?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q06: {
    label: { en: '', fr: 'La couleur de vos cicatrices?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q07: {
    label: { en: '', fr: 'A quel point vos cicatrices paraissent épaisses (par exemple en relief ou boursouflées)?',
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q08: {
    label: { en: '', fr: "L'apparence tordue de vos cicatrices (par exemple pas en ligne droite)?",
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q09: {
    label: { en: '', fr: 'Le fait que les gens voient vos cicatrices?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_SCARS_Q10: {
    label: { en: '', fr: "L'apparence de vos cicatrices lorsqu'elles ne sont pas recouvertes par des vêtements?",
    },
    ...APPRAISAL_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
