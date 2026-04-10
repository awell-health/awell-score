import { type ScoreInputSchemaType } from '../../../../../types'
import { AGREEMENT_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_SEXUAL_FUNCTION_INPUTS = {
  BODY_Q_SEXUAL_FUNCTION_Q01: {
    label: { en: '', fr: 'Le sexe est épanouissant pour moi.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SEXUAL_FUNCTION_Q02: {
    label: { en: '', fr: 'Je suis à l\'aise avec le fait de me déshabiller devant mon/ma partenaire.',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SEXUAL_FUNCTION_Q03: {
    label: { en: '', fr: 'Je suis satisfait(e) de ma vie sexuelle.' },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SEXUAL_FUNCTION_Q04: {
    label: { en: '', fr: "Je suis à l'aise avec le fait de garder la lumière allumée durant les relations sexuelles.",
    },
    ...AGREEMENT_INPUT_TYPE,
  },
  BODY_Q_SEXUAL_FUNCTION_Q05: {
    label: { en: '', fr: 'Je me sens sexuellement attirant(e) lorsque je suis déshabillé(e).',
    },
    ...AGREEMENT_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
