import { type DefaultSubscaleType } from '../../../../types/calculations.types'

export const NOT_APPLICABLE_ANSWER = 999

const ALLOWED_ANSWERS = [
  {
    value: 4,
    label: {
      en: 'No difficulty',
      nl: 'Geen beperking',
    },
  },
  {
    value: 3,
    label: {
      en: 'Slight difficulty',
      nl: 'Lichte beperking',
    },
  },
  {
    value: 2,
    label: {
      en: 'Moderate difficulty',
      nl: 'Matige beperking',
    },
  },
  {
    value: 1,
    label: {
      en: 'Extreme difficulty',
      nl: 'Extreme beperking',
    },
  },
  {
    value: 0,
    label: {
      en: 'Unable to do',
      nl: 'Onmogelijkheid tot uitvoeren',
    },
  },
  {
    value: NOT_APPLICABLE_ANSWER,
    label: {
      en: 'Not applicable',
      nl: 'Niet van toepassing',
    },
  },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const HOS_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'ADL',
    input_ids_in_subscale: [
      { input_id: 'Q01', input_label: { nl: '', en: '' } },
      { input_id: 'Q02', input_label: { nl: '', en: '' } },
      { input_id: 'Q03', input_label: { nl: '', en: '' } },
      { input_id: 'Q04', input_label: { nl: '', en: '' } },
      { input_id: 'Q05', input_label: { nl: '', en: '' } },
      { input_id: 'Q06', input_label: { nl: '', en: '' } },
      { input_id: 'Q07', input_label: { nl: '', en: '' } },
      { input_id: 'Q08', input_label: { nl: '', en: '' } },
      { input_id: 'Q09', input_label: { nl: '', en: '' } },
      { input_id: 'Q10', input_label: { nl: '', en: '' } },
      { input_id: 'Q11', input_label: { nl: '', en: '' } },
      { input_id: 'Q12', input_label: { nl: '', en: '' } },
      { input_id: 'Q13', input_label: { nl: '', en: '' } },
      { input_id: 'Q14', input_label: { nl: '', en: '' } },
      { input_id: 'Q15', input_label: { nl: '', en: '' } },
      { input_id: 'Q16', input_label: { nl: '', en: '' } },
      { input_id: 'Q17', input_label: { nl: '', en: '' } },
    ].map(add_allowed_answers),
  },
  {
    id: 'SPORTS',
    input_ids_in_subscale: [
      { input_id: 'SQ01', input_label: { nl: '', en: '' } },
      { input_id: 'SQ02', input_label: { nl: '', en: '' } },
      { input_id: 'SQ03', input_label: { nl: '', en: '' } },
      { input_id: 'SQ04', input_label: { nl: '', en: '' } },
      { input_id: 'SQ05', input_label: { nl: '', en: '' } },
      { input_id: 'SQ06', input_label: { nl: '', en: '' } },
      { input_id: 'SQ07', input_label: { nl: '', en: '' } },
      { input_id: 'SQ08', input_label: { nl: '', en: '' } },
      { input_id: 'SQ09', input_label: { nl: '', en: '' } },
    ].map(add_allowed_answers),
  },
]
