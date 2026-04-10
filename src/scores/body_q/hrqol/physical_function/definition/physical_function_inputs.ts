import { type ScoreInputSchemaType } from '../../../../../types'
import { FREQUENCY_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_PHYSICAL_FUNCTION_INPUTS = {
  BODY_Q_PHYSICAL_FUNCTION_Q01: {
    label: { en: '', fr: "Vous lever d'un lit?" },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_FUNCTION_Q02: {
    label: { en: '', fr: "Vous pencher d'un côté à l'autre?" },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_FUNCTION_Q03: {
    label: { en: '', fr: 'Marcher ou vous déplacer?' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_FUNCTION_Q04: {
    label: { en: '', fr: 'Vous pencher en avant (par exemple pour attacher vos chaussures)?',
    },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_FUNCTION_Q05: {
    label: { en: '', fr: "Faire de l'exercice modéré (par exemple faire de la marche rapide)?",
    },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_FUNCTION_Q06: {
    label: { en: '', fr: 'Monter ou descendre les escaliers?' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_FUNCTION_Q07: {
    label: { en: '', fr: 'Vous tenir debout pendant un long moment?' },
    ...FREQUENCY_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
