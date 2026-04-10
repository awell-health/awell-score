import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_MEDICAL_TEAM_INPUTS = {
  BODY_Q_MEDICAL_TEAM_Q01: {
    label: { en: '', fr: 'Etaient soucieux de respecter votre vie privée?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q02: {
    label: { en: '', fr: 'Etaient sympathiques et gentils?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q03: {
    label: { en: '', fr: 'Vous traitaient avec respect?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q04: {
    label: { en: '', fr: 'Répondaient à toutes vos questions?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q05: {
    label: { en: '', fr: 'Etaient accessibles pour discuter?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q06: {
    label: { en: '', fr: 'Etaient attentifs à vos besoins?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q07: {
    label: { en: '', fr: 'Etaient consciencieux?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q08: {
    label: { en: '', fr: "Travaillaient en équipe?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q09: {
    label: { en: '', fr: 'Avaient des connaissances suffisantes?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_MEDICAL_TEAM_Q10: {
    label: { en: '', fr: 'Etaient disponibles lorsque vous étiez inquiet(e)?' },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
