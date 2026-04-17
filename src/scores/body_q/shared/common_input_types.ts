import { z } from 'zod'
import { type EnumNumberInputType } from '../../../types'

const BODY_Q_LIKERT_TYPE = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
])

export const SATISFACTION_INPUT_TYPE = {
  type: BODY_Q_LIKERT_TYPE.optional(),
  uiOptions: {
    options: [
      { value: 1, label: { en: '', fr: 'Très insatisfait(e)' } },
      { value: 2, label: { en: '', fr: 'Plutôt insatisfait(e)' } },
      { value: 3, label: { en: '', fr: 'Plutôt satisfait(e)' } },
      { value: 4, label: { en: '', fr: 'Très satisfait(e)' } },
    ],
  },
} satisfies EnumNumberInputType

export const APPRAISAL_INPUT_TYPE = {
  type: BODY_Q_LIKERT_TYPE.optional(),
  uiOptions: {
    options: [
      { value: 1, label: { en: '', fr: 'Extrêmement dérangé(e)' } },
      { value: 2, label: { en: '', fr: 'Modérément dérangé(e)' } },
      { value: 3, label: { en: '', fr: 'Un peu dérangé(e)' } },
      { value: 4, label: { en: '', fr: 'Pas du tout dérangé(e)' } },
    ],
  },
} satisfies EnumNumberInputType

export const AGREEMENT_INPUT_TYPE = {
  type: BODY_Q_LIKERT_TYPE.optional(),
  uiOptions: {
    options: [
      { value: 1, label: { en: 'Definitely disagree', fr: "Pas du tout d'accord" } },
      { value: 2, label: { en: 'Somewhat disagree', fr: "Plutôt pas d'accord" } },
      { value: 3, label: { en: 'Somewhat agree', fr: "Plutôt d'accord" } },
      { value: 4, label: { en: 'Definitely agree', fr: "Tout à fait d'accord" } },
    ],
  },
} satisfies EnumNumberInputType

export const FREQUENCY_INPUT_TYPE = {
  type: BODY_Q_LIKERT_TYPE.optional(),
  uiOptions: {
    options: [
      { value: 1, label: { en: 'Always', fr: 'Tout le temps' } },
      { value: 2, label: { en: 'Often', fr: 'Souvent' } },
      { value: 3, label: { en: 'Sometimes', fr: 'Parfois' } },
      { value: 4, label: { en: 'Never', fr: 'Jamais' } },
    ],
  },
} satisfies EnumNumberInputType

export const FREQUENCY_POSITIVE_INPUT_TYPE = {
  type: BODY_Q_LIKERT_TYPE.optional(),
  uiOptions: {
    options: [
      { value: 1, label: { en: 'Never', fr: 'Jamais' } },
      { value: 2, label: { en: 'Sometimes', fr: 'Parfois' } },
      { value: 3, label: { en: 'Often', fr: 'Souvent' } },
      { value: 4, label: { en: 'Always', fr: 'Toujours' } },
    ],
  },
} satisfies EnumNumberInputType
