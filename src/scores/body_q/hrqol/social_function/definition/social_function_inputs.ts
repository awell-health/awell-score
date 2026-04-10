import { type ScoreInputSchemaType } from '../../../../../types'
import { AGREEMENT_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_SOCIAL_FUNCTION_INPUTS = {
  BODY_Q_SOCIAL_FUNCTION_Q01: {
    label: { en: '', fr: 'Je me sens à l\'aise en groupe avec des gens que je connais.',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q02: {
    label: { en: '', fr: "Les gens écoutent ce que j'ai à dire." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q03: {
    label: { en: '', fr: 'Je me sens accepté(e) par les gens.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q04: {
    label: { en: '', fr: "Je me sens intégré(e) lorsque je suis en groupe." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q05: {
    label: { en: '', fr: 'Je laisse une bonne première impression.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q06: {
    label: { en: '', fr: 'Je prends part à la vie au lieu de rester en retrait.',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q07: {
    label: { en: '', fr: "Il m'est facile de me faire de nouveaux amis." },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q08: {
    label: { en: '', fr: 'Je me sens confiant(e) lorsque je suis dans un contexte de groupe (par exemple réunions).',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q09: {
    label: { en: '', fr: 'Je suis détendu(e) en compagnie de gens que je ne connais pas bien.',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SOCIAL_FUNCTION_Q10: {
    label: { en: '', fr: "Je me sens confiant(e) lorsque j'entre dans une pièce remplie de gens que je ne connais pas.",
    },
    ...AGREEMENT_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
