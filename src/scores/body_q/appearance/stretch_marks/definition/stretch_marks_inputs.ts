import { type ScoreInputSchemaType } from '../../../../../types'
import { APPRAISAL_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_STRETCH_MARKS_INPUTS = {
  BODY_Q_STRETCH_MARKS_Q01: {
    label: { en: '', fr: 'Le fait de ne pas pouvoir porter certains types de vêtements à cause de vos vergetures?',
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q02: {
    label: { en: '', fr: 'La largeur de vos vergetures?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q03: {
    label: { en: '', fr: 'Le fait de devoir vous habiller de manière à cacher vos vergetures?',
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q04: {
    label: { en: '', fr: 'La longueur de vos vergetures?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q05: {
    label: { en: '', fr: "L'emplacement de vos vergetures (où elles se situent sur votre corps)?",
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q06: {
    label: { en: '', fr: 'Le fait que vos vergetures donnent un aspect plus âgé à votre corps?',
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q07: {
    label: { en: '', fr: 'A quel point vos vergetures sont visibles?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q08: {
    label: { en: '', fr: 'La quantité de vergetures que vous avez?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q09: {
    label: { en: '', fr: 'Le fait que les autres voient vos vergetures?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_STRETCH_MARKS_Q10: {
    label: { en: '', fr: "L'apparence de vos vergetures vues de près?" },
    ...APPRAISAL_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
