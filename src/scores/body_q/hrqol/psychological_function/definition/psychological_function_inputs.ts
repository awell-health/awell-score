import { type ScoreInputSchemaType } from '../../../../../types'
import { AGREEMENT_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_PSYCHOLOGICAL_FUNCTION_INPUTS = {
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q01: {
    label: { en: '', fr: 'Je crois en moi.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q02: {
    label: { en: '', fr: 'Je suis fier(-ère) de moi.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q03: {
    label: { en: '', fr: 'Je me sens heureux(-se).' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q04: {
    label: { en: '', fr: "Je m'aime bien." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q05: {
    label: { en: '', fr: 'Je suis fort(e) sur le plan émotionnel.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q06: {
    label: {
      en: '',
      fr: "J'ai l'impression d'avoir le contrôle de ma vie.",
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q07: {
    label: { en: '', fr: 'Je me sens sûr(e) de moi.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q08: {
    label: { en: '', fr: "Je m'accepte comme je suis." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q09: {
    label: { en: '', fr: "Je me sens à l'aise avec moi-même." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_PSYCHOLOGICAL_FUNCTION_Q10: {
    label: { en: '', fr: 'Je me sens très bien dans ma peau.' },
    ...AGREEMENT_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
