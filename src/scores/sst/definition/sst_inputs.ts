import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([z.literal(1), z.literal(0)]).optional(),
  uiOptions: {
    options: [
      { value: 1, label: { nl: 'Ja', en: 'Yes' } },
      { value: 0, label: { nl: 'Nee', en: 'No' } },
    ],
  },
} satisfies EnumNumberInputType

export const SST_INPUTS = {
  Q01: {
    label: {
      nl: 'Voelt uw schouder in rust met de arm langs uw lichaam comfortabel aan?',
      en: 'Is your shoulder comfortable with your arm at rest by your side?',
    },
    ...type,
  },
  Q02: {
    label: {
      nl: 'Is het vanwege uw schouder mogelijk: om rustig (of in ieder geval: normaal) te slapen?',
      en: 'Does your shoulder allow you to sleep comfortably?',
    },
    ...type,
  },
  Q03: {
    label: {
      nl: 'Kunt u uw hand op de rug brengen: om een blouse achter uw rug in de broek te doen?',
      en: 'Can you reach the small of your back to tuck in your shirt with your hand?',
    },
    ...type,
  },
  Q04: {
    label: {
      nl: 'Kunt u de hand achter het hoofd brengen en tegelijkertijd de elleboog volledig opzij brengen?',
      en: 'Can you place your hand behind your head with the elbow straight out to the side?',
    },
    ...type,
  },
  Q05: {
    label: {
      nl: 'Kunt u een licht voorwerp (bijvoorbeeld een muntstuk): met gestrekte arm op een plank op schouder hoogte leggen?',
      en: 'Can you place a coin on a shelf at the level of your shoulder without bending your elbow?',
    },
    ...type,
  },
  Q06: {
    label: {
      nl: 'Kunt u met een voorwerp in uw hand dat ongeveer een pond weegt (bijvoorbeeld een pak suiker, flesje water), uw arm met een gestrekte elleboog heffen tot schouderhoogte?',
      en: 'Can you lift one pound (a full pint container) to the level of your shoulder without bending your elbow?',
    },
    ...type,
  },
  Q07: {
    label: {
      nl: 'Kunt u met een voorwerp in uw hand dat ongeveer vier kilo weegt (bijvoorbeeld een tas met 2 pakken melk van 1,5 liter), uw arm met een gestrekte elleboog heffen tot schouderhoogte?',
      en: 'Can you lift eight pounds (a full gallon container) to the level of the top of your head without bending your elbow?',
    },
    ...type,
  },
  Q08: {
    label: {
      nl: 'Kunt u een boodschappentas die ongeveer 10 kilo weegt, dragen met uw arm langs het lichaam?',
      en: 'Can you carry 20 pounds at your side with the affected extremity?',
    },
    ...type,
  },
  Q09: {
    label: {
      nl: 'Kunt u een bal (tennisbal of iets een iets zwaardere softbal): met onderhandse techniek ongeveer 10 meter ver gooien?',
      en: 'Do you think you can toss a softball underhand 10 yards with the affected extremity?',
    },
    ...type,
  },
  Q10: {
    label: {
      nl: 'Kunt u een bal (tennisbal of een iets zwaardere softbal): met bovenhandse techniek ongeveer 20 meter ver gooien?',
      en: 'Do you think you can throw a softball overhand 20 yards with the affected extremity?',
    },
    ...type,
  },
  Q11: {
    label: {
      nl: 'Kunt u de achterzijde van uw niet – aangedane schouder: wassen?',
      en: 'Can you wash the back of your opposite shoulder with the affected extremity?',
    },
    ...type,
  },
  Q12: {
    label: {
      nl: 'Is het vanwege uw schouder mogelijk: uw normale activiteiten (baan, vrijwilligers werk, huishoudelijk werk) full time uit te voeren?',
      en: 'Would your shoulder allow you to work full-time at your usual job?',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
