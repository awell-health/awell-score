import { type ScoreInputSchemaType } from '../../../../../types'
import { APPRAISAL_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_EXCESS_SKIN_INPUTS = {
  BODY_Q_EXCESS_SKIN_Q01: {
    label: { en: '', fr: "Votre excès de peau vous faisant paraître plus gros(se) que vous n'êtes (càd en surpoids)?",
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_EXCESS_SKIN_Q02: {
    label: { en: '', fr: 'Devoir vous habiller de manière à cacher votre excès de peau?',
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_EXCESS_SKIN_Q03: {
    label: { en: '', fr: 'Ne pas pouvoir porter certains vêtements à cause de votre excès de peau?',
    },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_EXCESS_SKIN_Q04: {
    label: { en: '', fr: 'A quel point votre excès de peau pend?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_EXCESS_SKIN_Q05: {
    label: { en: '', fr: "La quantité d'excès de peau que vous avez?" },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_EXCESS_SKIN_Q06: {
    label: { en: '', fr: 'Le fait que les gens voient votre excès de peau?' },
    ...APPRAISAL_INPUT_TYPE,
  },
  BODY_Q_EXCESS_SKIN_Q07: {
    label: { en: '', fr: "L'apparence de votre excès de peau lorsque vous êtes nu(e)?",
    },
    ...APPRAISAL_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
