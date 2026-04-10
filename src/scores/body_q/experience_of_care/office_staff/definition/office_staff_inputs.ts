import { type ScoreInputSchemaType } from '../../../../../types'
import { SATISFACTION_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_OFFICE_STAFF_INPUTS = {
  BODY_Q_OFFICE_STAFF_Q01: {
    label: { en: '', fr: 'Vous ont traité(e) avec respect?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q02: {
    label: { en: '', fr: "Vous ont mis(e) à l'aise?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q03: {
    label: { en: '', fr: 'Avaient des connaissances suffisantes?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q04: {
    label: { en: '', fr: 'Etaient attentifs à vos besoins?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q05: {
    label: { en: '', fr: 'Etaient minutieux?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q06: {
    label: { en: '', fr: "Travaillaient en équipe?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q07: {
    label: { en: '', fr: "Vous ont accueilli(e) à la réception?" },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q08: {
    label: { en: '', fr: 'Se souciaient de vous?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q09: {
    label: { en: '', fr: 'Ont répondu à toutes vos questions?' },
    ...SATISFACTION_INPUT_TYPE,
  },
  BODY_Q_OFFICE_STAFF_Q10: {
    label: { en: '', fr: 'Etaient disponibles lorsque vous étiez inquiet(e)?' },
    ...SATISFACTION_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
