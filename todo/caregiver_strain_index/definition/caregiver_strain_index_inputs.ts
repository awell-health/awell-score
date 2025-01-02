import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const NO_ANSWER = 0
const YES_ANSWER = 1

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: NO_ANSWER, label: { en: 'No', nl: 'Nee' } },
    { value: YES_ANSWER, label: { en: 'Yes', nl: 'Ja' } },
  ],
}

export const CAREGIVER_STRAIN_INDEX_INPUTS: Array<InputType> = [
  {
    input_id: 'CSI_Q01',
    label: {
      nl: 'Mijn nachtrust is verstoord.',
      en: 'My sleep is disturbed (e.g., because the person I care for is in and out of bed or wanders around at night)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q02',
    label: {
      nl: 'Hem of haar helpen kost me nogal wat moeite en tijd.',
      en: 'Caregiving is inconvenient (e.g., helping takes so much time or it’s a long drive over to help)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q03',
    label: {
      nl: 'Ik vind het lichamelijk zwaar.',
      en: 'It is a physical strain (e.g., because of lifting in and out of a chair; effort or concentration is required)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q04',
    label: {
      nl: 'Het beperkt me in andere dingen die ik wil doen.',
      en: 'Caregiving is confining (e.g., helping restricts free time or cannot go visiting)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q05',
    label: {
      nl: 'Wij hebben onze dagelijkse manier van doen moeten aanpassen.',
      en: 'There have been family adjustments (e.g., because helping has disrupted routine; there has been no privacy)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q06',
    label: {
      nl: 'Wij hebben onze plannen moeten wijzigen.',
      en: 'There have been changes in personal plans (e.g., had to turn down a job; could not go on vacation)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q07',
    label: {
      nl: 'Er zijn ook andere zaken waaraan ik mijn tijd moet besteden.',
      en: 'There have been other demands on my time (e.g., other family members need me)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q08',
    label: {
      nl: 'Emotioneel gedragen we ons anders ten opzichte van elkaar.',
      en: 'There have been emotional adjustments (e.g., because of severe arguments)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q09',
    label: {
      nl: 'Het gedrag van mijn man/vrouw maakt me soms van streek.',
      en: 'Some behavior is upsetting (e.g., because of incontinence; the person I care for has trouble remembering things; or the person I care for accuses people of taking things)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q10',
    label: {
      nl: 'Het is pijnlijk te moeten zien dat hij/zij een ander persoon is geworden.',
      en: 'It is upsetting to find that he/she has changed so much from his/her former self (e.g., he/she is a different person than he/she used to be)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q11',
    label: {
      nl: 'Ik heb mijn werk/baan moeten aanpassen aan de situatie.',
      en: 'There have been work adjustments (e.g., because of having to take time off)',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q12',
    label: {
      nl: 'Ik word geheel door deze situatie in beslag genomen.',
      en: "I'm feeling completely overwhelmed (e.g., because of worry about the person I care for; concerns about how you I will manage)",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CSI_Q13',
    label: {
      nl: 'We leven onder financiële druk.',
      en: 'It is a financial strain',
    },
    input_type,
    required: true,
  },
]
