import { z } from 'zod'
import { BooleanInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.boolean().optional(),
} satisfies BooleanInputType

export const DN4_INPUTS = {
  BURNING: {
    label: {
      en: 'Does your pain have the following characteristic: Burning?',
      nl: 'Vertoont de pijn volgende karakteristiek: Branderig gevoel?',
    },
    ...type,
  },
  PAINFUL_COLD: {
    label: {
      en: 'Does your pain have the following characteristic: Painful cold?',
      nl: 'Vertoont de pijn volgende karakteristiek: Pijnlijk koudegevoel?',
    },
    ...type,
  },
  ELECTRIC_SHOCKS: {
    label: {
      en: 'Does your pain have the following characteristic: Electric shocks?',
      nl: 'Vertoont de pijn volgende karakteristiek: Elektrische schokken?',
    },
    ...type,
  },
  TINGLING: {
    label: {
      en: 'Is the pain associated with the following symptom in the same area: Tingling?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Kriebelingen?',
    },
    ...type,
  },
  PINS_AND_NEEDLES: {
    label: {
      en: 'Is the pain associated with the following symptom in the same area: Pins and needles?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Tintelingen?',
    },
    ...type,
  },
  NUMBNESS: {
    label: {
      en: 'Is the pain associated with the following symptom in the same area: Numbness?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Gevoelloosheid?',
    },
    ...type,
  },
  ITCHING: {
    label: {
      en: 'Is the pain associated with the following symptom in the same area: Itching?',
      nl: 'Is de pijn in hetzelfde gebied geassocieerd met volgende symptoom: Jeuk?',
    },
    ...type,
  },
  HYPOESTHESIA_TO_TOUCH: {
    label: {
      en: 'Is the pain located in an area where the physicial examination may reveal the following characteristic: Hypoesthesia to touch?',
      nl: 'Is de pijn gelokaliseerd in een bepaald gebied waar het klinisch onderzoek het volgende aantoont: Hypo-esthesie bij aanraking?',
    },
    ...type,
  },
  HYPOESTHESIA_TO_PINPRICK: {
    label: {
      en: 'Is the pain located in an area where the physicial examination may reveal the following characteristic: Hypoesthesia to pinprick?',
      nl: 'Is de pijn gelokaliseerd in een bepaald gebied waar het klinisch onderzoek het volgende aantoont: Hypo-esthesie bij een prik?',
    },
    ...type,
  },
  BRUSHING: {
    label: {
      en: 'In the painful area, can the pain be caused or increased by brushing?',
      nl: 'Wordt de pijn veroorzaakt of versterkt door wrijven?',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
