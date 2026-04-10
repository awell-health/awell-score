import { type ScoreInputSchemaType } from '../../../../../types'
import { AGREEMENT_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_APPEARANCE_DISTRESS_INPUTS = {
  BODY_Q_APPEARANCE_DISTRESS_Q01: {
    label: { en: '', fr: 'Je suis mécontent(e) de mon apparence.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_APPEARANCE_DISTRESS_Q02: {
    label: { en: '', fr: 'Je me sens stressé(e) par mon apparence.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_APPEARANCE_DISTRESS_Q03: {
    label: { en: '', fr: 'Je me sens déprimé(e) par mon apparence.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_APPEARANCE_DISTRESS_Q04: {
    label: { en: '', fr: 'Je me sens anxieux(se) lorsque les gens me regardent.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_APPEARANCE_DISTRESS_Q05: {
    label: { en: '', fr: "Je suis inquiet(e) de ne pas avoir l'air normal(e)." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_APPEARANCE_DISTRESS_Q06: {
    label: { en: '', fr: "Je suis inquiet(e) d'être laid(e)." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_APPEARANCE_DISTRESS_Q07: {
    label: { en: '', fr: "J'ai tendance à éviter d'être entouré(e) de gens." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_APPEARANCE_DISTRESS_Q08: {
    label: { en: '', fr: "Je n'ai que peu d'intérêt à faire des choses." },
    ...AGREEMENT_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
