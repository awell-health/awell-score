import { type DefaultSubscaleType } from '../../../../types/calculations.types'

const ALLOWED_ANSWERS = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const PCI_SUBSCALES: DefaultSubscaleType[] = [
  {
    id: 'PAIN_TRANSFORM',
    input_ids_in_subscale: [
      { input_id: 'PCI_Q15' },
      { input_id: 'PCI_Q16' },
      { input_id: 'PCI_Q18' },
      { input_id: 'PCI_Q30' },
    ].map(add_allowed_answers),
  },
  {
    id: 'DISTRACTION',
    input_ids_in_subscale: [
      { input_id: 'PCI_Q09' },
      { input_id: 'PCI_Q19' },
      { input_id: 'PCI_Q20' },
      { input_id: 'PCI_Q21' },
      { input_id: 'PCI_Q22' },
    ].map(add_allowed_answers),
  },
  {
    id: 'REDUCING_DEMANDS',
    input_ids_in_subscale: [
      { input_id: 'PCI_Q02' },
      { input_id: 'PCI_Q03' },
      { input_id: 'PCI_Q04' },
    ].map(add_allowed_answers),
  },
  {
    id: 'RETREATING',
    input_ids_in_subscale: [
      { input_id: 'PCI_Q10' },
      { input_id: 'PCI_Q11' },
      { input_id: 'PCI_Q12' },
      { input_id: 'PCI_Q13' },
      { input_id: 'PCI_Q14' },
      { input_id: 'PCI_Q32' },
      { input_id: 'PCI_Q33' },
    ].map(add_allowed_answers),
  },
  {
    id: 'WORRYING',
    input_ids_in_subscale: [
      { input_id: 'PCI_Q17' },
      { input_id: 'PCI_Q23' },
      { input_id: 'PCI_Q24' },
      { input_id: 'PCI_Q25' },
      { input_id: 'PCI_Q26' },
      { input_id: 'PCI_Q27' },
      { input_id: 'PCI_Q28' },
      { input_id: 'PCI_Q29' },
      { input_id: 'PCI_Q31' },
    ].map(add_allowed_answers),
  },
  {
    id: 'RESTING',
    input_ids_in_subscale: [
      { input_id: 'PCI_Q01' },
      { input_id: 'PCI_Q05' },
      { input_id: 'PCI_Q06' },
      { input_id: 'PCI_Q07' },
      { input_id: 'PCI_Q08' },
    ].map(add_allowed_answers),
  },
]
