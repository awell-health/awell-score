import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_INFORMATION_INPUTS = {
  BODY_Q_INFORMATION_Q01: {
    label: { en: '', fr: 'La manière dont on a répondu à vos questions?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q02: {
    label: { en: '', fr: "La quantité d'informations écrites que l'on vous a remise?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q03: {
    label: { en: '', fr: 'Les activités à éviter pendant votre convalescence?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q04: {
    label: { en: '', fr: "Le déroulement de l'intervention chirurgicale?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q05: {
    label: { en: '', fr: 'Le temps nécessaire à la guérison et à la récupération?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q06: {
    label: { en: '', fr: 'Les options sur la façon dont la chirurgie pourrait être faite?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q07: {
    label: { en: '', fr: 'Les types de complications qui pourraient se produire?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q08: {
    label: { en: '', fr: "Le vécu d'autres patients qui ont eu recours à ce type de chirurgie?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q09: {
    label: { en: '', fr: "Le temps nécessaire qu'il vous faudra pour vous sentir à nouveau comme avant?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_INFORMATION_Q10: {
    label: { en: '', fr: 'L\'intensité de la douleur que vous pourriez ressentir pendant votre convalescence?' },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
