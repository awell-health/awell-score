import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_CHEST_INPUTS = {
  BODY_Q_CHEST_Q01: {
    label: { en: '', fr: "L'apparence de votre buste (zone des seins) dans un T-shirt ample?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q02: {
    label: { en: '', fr: "L'apparence de votre buste (zone des seins) lorsque vous vous allongez sur le dos?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q03: {
    label: { en: '', fr: "L'aspect plat de votre buste (zone des seins), lorsque vous vous tenez droit(e)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q04: {
    label: { en: '', fr: "L'apparence masculine de votre buste (zone des seins)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q05: {
    label: { en: '', fr: "L'apparence de votre buste (zone des seins) lorsque vous êtes en mouvement (par exemple courir, sauter…)?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q06: {
    label: { en: '', fr: "L'apparence de votre buste (zone des seins) lorsque vous portez un T-shirt moulant?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q07: {
    label: { en: '', fr: 'La forme de votre buste (zone des seins) lorsque vous êtes sans vêtements?',
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q08: {
    label: { en: '', fr: "L'apparence de votre buste (zone des seins) lorsque vous vous penchez en avant?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q09: {
    label: { en: '', fr: "L'apparence de votre buste (zone des seins) vu de côté (par exemple vu de profil) lorsque vous êtes sans vêtements?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q10: {
    label: { en: '', fr: "L'apparence de votre buste (zone des seins) lorsque vous vous regardez dans le miroir sans vêtements?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_CHEST_Q11_SCAR: {
    label: { en: '', fr: "L'apparence des cicatrices de votre chirurgie?",
    },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
