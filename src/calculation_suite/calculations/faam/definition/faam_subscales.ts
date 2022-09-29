import { type DefaultSubscaleType } from '../../../../types/calculations.types'

export const NOT_APPLICABLE_ANSWER = 999

const ALLOWED_ANSWERS = [
  { value: 4, label: { en: 'No difficulty', nl: 'Geen beperking' } },
  { value: 3, label: { en: 'Slight difficulty', nl: 'Lichte beperking' } },
  { value: 2, label: { en: 'Moderate difficulty', nl: 'Matige beperking' } },
  { value: 1, label: { en: 'Extreme difficulty', nl: 'Extreme beperking' } },
  {
    value: 0,
    label: { en: 'Unable to do', nl: 'Onmogelijkheid tot uitvoeren' },
  },
  {
    value: NOT_APPLICABLE_ANSWER,
    label: { en: 'Not applicable', nl: 'Niet van toepassing' },
  },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const FAAM_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'ADL',
    // 21 items
    input_ids_in_subscale: [
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q01' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q02' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q03' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q04' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q05' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q06' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q07' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q08' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q09' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q10' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q11' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q12' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q13' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q14' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q15' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q16' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q17' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q18' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q19' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q20' },
      { input_label: { nl: '', en: '' }, input_id: 'ADL_Q21' },
    ].map(add_allowed_answers),
    min_answers_needed_to_calculate_score: 19,
  },
  {
    id: 'SPORTS',
    /**
     * Literature says there are 8 items in the sports subscale
     * but I can only find 7 items. The 8th item that they are referring to is scored from 0-10
     * but no instructions are provided to recode this answer.
     *
     * https://www.physio-pedia.com/8-Item_Sports_Subscale
     *  */

    input_ids_in_subscale: [
      { input_label: { nl: '', en: '' }, input_id: 'SPORTS_Q01' },
      { input_label: { nl: '', en: '' }, input_id: 'SPORTS_Q02' },
      { input_label: { nl: '', en: '' }, input_id: 'SPORTS_Q03' },
      { input_label: { nl: '', en: '' }, input_id: 'SPORTS_Q04' },
      { input_label: { nl: '', en: '' }, input_id: 'SPORTS_Q05' },
      { input_label: { nl: '', en: '' }, input_id: 'SPORTS_Q06' },
      { input_label: { nl: '', en: '' }, input_id: 'SPORTS_Q07' },
    ].map(add_allowed_answers),
    min_answers_needed_to_calculate_score: 7,
  },
]
