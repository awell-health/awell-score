import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

const YES_ANSWER = 2
const SOMETIMES_ANSWER = 1
const NO_ANSWER = 0

const type = {
  type: z.union([
    z.literal(NO_ANSWER),
    z.literal(SOMETIMES_ANSWER),
    z.literal(YES_ANSWER),
  ]),
  uiOptions: {
    options: [
      { value: NO_ANSWER, label: { en: 'No', nl: 'Nee' } },
      {
        value: SOMETIMES_ANSWER,
        label: { en: 'Yes, sometimes', nl: 'Ja, soms' },
      },
      {
        value: YES_ANSWER,
        label: { en: 'Yes, on a regular basis', nl: 'Ja, regelmatig' },
      },
    ],
  },
}

export const MODIFIED_CAREGIVER_STRAIN_INDEX_INPUTS = {
  CSI_Q01: {
    label: {
      nl: 'Mijn nachtrust is verstoord.',
      en: 'My sleep is disturbed (e.g., because the person I care for is in and out of bed or wanders around at night)',
    },
    ...type,
  },
  CSI_Q02: {
    label: {
      nl: 'Hem of haar helpen kost me nogal wat moeite en tijd.',
      en: 'Caregiving is inconvenient (e.g., helping takes so much time or it’s a long drive over to help)',
    },
    ...type,
  },
  CSI_Q03: {
    label: {
      nl: 'Ik vind het lichamelijk zwaar.',
      en: 'It is a physical strain (e.g., because of lifting in and out of a chair; effort or concentration is required)',
    },
    ...type,
  },
  CSI_Q04: {
    label: {
      nl: 'Het beperkt me in andere dingen die ik wil doen.',
      en: 'Caregiving is confining (e.g., helping restricts free time or cannot go visiting)',
    },
    ...type,
  },
  CSI_Q05: {
    label: {
      nl: 'Wij hebben onze dagelijkse manier van doen moeten aanpassen.',
      en: 'There have been family adjustments (e.g., because helping has disrupted routine; there has been no privacy)',
    },
    ...type,
  },
  CSI_Q06: {
    label: {
      nl: 'Wij hebben onze plannen moeten wijzigen.',
      en: 'There have been changes in personal plans (e.g., had to turn down a job; could not go on vacation)',
    },
    ...type,
  },
  CSI_Q07: {
    label: {
      nl: 'Er zijn ook andere zaken waaraan ik mijn tijd moet besteden.',
      en: 'There have been other demands on my time (e.g., other family members need me)',
    },
    ...type,
  },
  CSI_Q08: {
    label: {
      nl: 'Emotioneel gedragen we ons anders ten opzichte van elkaar.',
      en: 'There have been emotional adjustments (e.g., because of severe arguments)',
    },
    ...type,
  },
  CSI_Q09: {
    label: {
      nl: 'Het gedrag van mijn man/vrouw maakt me soms van streek.',
      en: 'Some behavior is upsetting (e.g., because of incontinence; the person I care for has trouble remembering things; or the person I care for accuses people of taking things)',
    },
    ...type,
  },
  CSI_Q10: {
    label: {
      nl: 'Het is pijnlijk te moeten zien dat hij/zij een ander persoon is geworden.',
      en: 'It is upsetting to find that he/she has changed so much from his/her former self (e.g., he/she is a different person than he/she used to be)',
    },
    ...type,
  },
  CSI_Q11: {
    label: {
      nl: 'Ik heb mijn werk/baan moeten aanpassen aan de situatie.',
      en: 'There have been work adjustments (e.g., because of having to take time off)',
    },
    ...type,
  },
  CSI_Q12: {
    label: {
      nl: 'Ik word geheel door deze situatie in beslag genomen.',
      en: "I'm feeling completely overwhelmed (e.g., because of worry about the person I care for; concerns about how you I will manage)",
    },
    ...type,
  },
  CSI_Q13: {
    label: {
      nl: 'We leven onder financiële druk.',
      en: 'It is a financial strain',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
