import type { InputType } from '../../../../types/calculations.types'
import { BooleanInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: BooleanInputType = {
  type: 'boolean',
}

export const DN4_INPUTS: Array<InputType> = [
  {
    input_id: 'BURNING',
    input_label: {
      en: 'Does your pain have the following characteristic: Burning?',
      nl: 'Vertoont de pijn volgende karakteristiek: Branderig gevoel?',
    },
    input_type,
  },
  {
    input_id: 'PAINFUL_COLD',
    input_label: {
      en: 'Does your pain have the following characteristic: Painful cold?',
      nl: 'Vertoont de pijn volgende karakteristiek: Pijnlijk koudegevoel?',
    },
    input_type,
  },
  {
    input_id: 'ELECTRIC_SHOCKS',
    input_label: {
      en: 'Does your pain have the following characteristic: Electric shocks?',
      nl: 'Vertoont de pijn volgende karakteristiek: Elektrische schokken?',
    },
    input_type,
  },
  {
    input_id: 'TINGLING',
    input_label: {
      en: 'Is the pain associated with the following symptom in the same area: Tingling?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Kriebelingen?',
    },
    input_type,
  },
  {
    input_id: 'PINS_AND_NEEDLES',
    input_label: {
      en: 'Is the pain associated with the following symptom in the same area: Pins and needles?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Tintelingen?',
    },
    input_type,
  },
  {
    input_id: 'NUMBNESS',
    input_label: {
      en: 'Is the pain associated with the following symptom in the same area: Numbness?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Gevoelloosheid?',
    },
    input_type,
  },
  {
    input_id: 'ITCHING',
    input_label: {
      en: 'Is the pain associated with the following symptom in the same area: Itching?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Jeuk?',
    },
    input_type,
  },
  {
    input_id: 'HYPOESTHESIA_TO_TOUCH',
    input_label: {
      en: 'Is the pain located in an area where the physicial examination may reveal the following characteristic: Hypoesthesia to touch?',
      nl: 'Is de pijn gelokaliseerd in een bepaald gebied waar het klinisch onderzoek het volgende aantoont: Hypo-esthesie bij aanraking?',
    },
    input_type,
  },
  {
    input_id: 'HYPOESTHESIA_TO_PINPRICK',
    input_label: {
      en: 'Is the pain located in an area where the physicial examination may reveal the following characteristic: Hypoesthesia to pinprick?',
      nl: 'Is de pijn gelokaliseerd in een bepaald gebied waar het klinisch onderzoek het volgende aantoont: Hypo-esthesie bij een prik?',
    },
    input_type,
  },
  {
    input_id: 'BRUSHING',
    input_label: {
      en: 'In the painful area, can the pain be caused or increased by brushing?',
      nl: 'Wordt de pijn veroorzaakt of versterkt door wrijven?',
    },
    input_type,
  },
]
