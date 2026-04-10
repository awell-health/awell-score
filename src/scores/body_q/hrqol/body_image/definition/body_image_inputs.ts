import { type ScoreInputSchemaType } from '../../../../../types'
import { AGREEMENT_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_BODY_IMAGE_INPUTS = {
  BODY_Q_BODY_IMAGE_Q01: {
    label: { en: '', fr: "J'ai une image positive de mon corps." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_BODY_IMAGE_Q02: {
    label: { en: '', fr: "Mon corps n'est pas parfait mais je l'aime." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_BODY_IMAGE_Q03: {
    label: { en: '', fr: 'Je suis content(e) de mon corps.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_BODY_IMAGE_Q04: {
    label: { en: '', fr: 'Je suis fier(e) de mon corps.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_BODY_IMAGE_Q05: {
    label: { en: '', fr: 'Je pense que mon corps est attirant.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_BODY_IMAGE_Q06: {
    label: { en: '', fr: 'Je me sens bien dans mon corps quand je suis nu(e).' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_BODY_IMAGE_Q07: {
    label: { en: '', fr: "J'ai le corps que je souhaitais avoir." },
    ...AGREEMENT_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
