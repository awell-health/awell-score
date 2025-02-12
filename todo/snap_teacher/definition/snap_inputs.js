// @flow
import type { InputType } from '../../../../types/calculations.types'

const input_type = {
  type: 'number',
  allowed_answers: [
    {
      label: { en: 'Not at all' },
      value: 0
    },
    {
      label: { en: 'Just a little' },
      value: 1
    },
    {
      label: { en: 'Quite a bit' },
      value: 2
    },
    {
      label: { en: 'Very much' },
      value: 3
    }
  ]
}

export const SNAP_INPUTS: Array<InputType> = [
  {
    input_id: 'SNAP_Q01',
    input_label: {
      en: 'Often fails to give close attention to details or makes careless mistakes in schoolwork or tasks'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q02',
    input_label: {
      en: 'Often has difficulty sustaining attention in tasks or play activities'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q03',
    input_label: {
      en: 'Often does not seem to listen when spoken to directly'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q04',
    input_label: {
      en: 'Often does not follow through on instructions and fails to finish schoolwork, chores, or duties '
    },
    input_type
  },
  {
    input_id: 'SNAP_Q05',
    input_label: {
      en: 'Often has difficulty organizing tasks and activities'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q06',
    input_label: {
      en: 'Often avoids, dislikes, or reluctantly engages in tasks requiring sustained mental effort'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q07',
    input_label: {
      en: 'Often loses things necessary for activities (e.g., toys, school assignments, pencils or books'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q08',
    input_label: {
      en: 'Often is distracted by extraneous stimuli'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q09',
    input_label: {
      en: 'Often is forgetful in daily activities'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q10',
    input_label: {
      en: 'Often fidgets with hands or feet or squirms in seat'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q11',
    input_label: {
      en: 'Often leaves seat in classroom or in other situations in which remaining seated is expected'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q12',
    input_label: {
      en: 'Often runs about or climbs excessively in situations in which it is inappropriate'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q13',
    input_label: {
      en: 'Often has difficulty playing or engaging in leisure activities quietly'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q14',
    input_label: {
      en: 'Often is “on the go” or often acts as if “driven by a motor”'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q15',
    input_label: {
      en: 'Often talks excessively'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q16',
    input_label: {
      en: 'Often blurts out answers before questions have been completed'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q17',
    input_label: {
      en: 'Often has difficulty awaiting turn'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q18',
    input_label: {
      en: 'Often interrupts or intrudes on others (e.g., butts into conversations/games'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q19',
    input_label: {
      en: 'Often loses temper'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q20',
    input_label: {
      en: 'Often argues with adults'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q21',
    input_label: {
      en: 'Often actively defies or refuses adult requests or rules'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q22',
    input_label: {
      en: 'Often deliberately does things that annoy other people'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q23',
    input_label: {
      en: 'Often blames others for his or her mistakes or misbehaviour'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q24',
    input_label: {
      en: 'Often is touchy or easily annoyed by others'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q25',
    input_label: {
      en: 'Often is angry and resentful'
    },
    input_type
  },
  {
    input_id: 'SNAP_Q26',
    input_label: {
      en: 'Often is spiteful or vindictive'
    },
    input_type
  }
]
