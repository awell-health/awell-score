import { type ScoreInputSchemaType } from '../../../../../types'
import { AGREEMENT_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_EXPECTATIONS_COSMETIC_INPUTS = {
  BODY_Q_EXPECTATIONS_COSMETIC_Q01: {
    label: { en: '', fr: "J'aurai l'air magnifique." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_EXPECTATIONS_COSMETIC_Q02: {
    label: { en: '', fr: "Les gens me diront à quel point j'ai l'air superbe." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_EXPECTATIONS_COSMETIC_Q03: {
    label: { en: '', fr: 'Les gens proches de moi seront fiers de mon apparence.',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_EXPECTATIONS_COSMETIC_Q04: {
    label: { en: '', fr: 'Je serai transformé(e).' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_EXPECTATIONS_COSMETIC_Q05: {
    label: { en: '', fr: "De bonnes choses m'arriveront." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_EXPECTATIONS_COSMETIC_Q06: {
    label: { en: '', fr: "J'aurai le sentiment d'être à ma place." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_EXPECTATIONS_COSMETIC_Q07: {
    label: { en: '', fr: "Mes relations proches s'amélioreront." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_EXPECTATIONS_COSMETIC_Q08: {
    label: { en: '', fr: 'De nouvelles personnes voudront apprendre à me connaître.',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
