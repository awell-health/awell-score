import { type ScoreInputSchemaType } from '../../../../../types'
import { FREQUENCY_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_PHYSICAL_SYMPTOMS_INPUTS = {
  BODY_Q_PHYSICAL_SYMPTOMS_Q01: {
    label: { en: '', fr: 'Se sentir fatigué(e) pendant la journée.' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q02: {
    label: { en: '', fr: 'Douleurs de dos.' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q03: {
    label: { en: '', fr: 'Douleurs articulaires.' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q04: {
    label: { en: '', fr: 'Douleurs ou inconfort dans les jambes.' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q05: {
    label: { en: '', fr: "Perte d'équilibre." },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q06: {
    label: { en: '', fr: 'Se sentir faible.' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q07: {
    label: { en: '', fr: "Essoufflement lors d'un exercice léger." },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q08: {
    label: { en: '', fr: 'Pieds gonflés.' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q09: {
    label: { en: '', fr: 'Démangeaisons ou infection de la peau.' },
    ...FREQUENCY_INPUT_TYPE,
  },
  BODY_Q_PHYSICAL_SYMPTOMS_Q10: {
    label: { en: '', fr: 'Transpiration abondante.' },
    ...FREQUENCY_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
