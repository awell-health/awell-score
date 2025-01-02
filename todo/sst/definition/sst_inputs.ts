import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 1, label: { nl: 'Ja', en: 'Yes' } },
    { value: 0, label: { nl: 'Nee', en: 'No' } },
  ],
}

export const SST_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    label: {
      nl: 'Voelt uw schouder in rust met de arm langs uw lichaam comfortabel aan?',
      en: 'Is your shoulder comfortable with your arm at rest by your side?',
    },
    input_type,
  },
  {
    input_id: 'Q02',
    label: {
      nl: 'Is het vanwege uw schouder mogelijk: om rustig (of in ieder geval: normaal) te slapen?',
      en: 'Does your shoulder allow you to sleep comfortably?',
    },
    input_type,
  },
  {
    input_id: 'Q03',
    label: {
      nl: 'Kunt u uw hand op de rug brengen: om een blouse achter uw rug in de broek te doen?',
      en: 'Can you reach the small of your back to tuck in your shirt with your hand?',
    },
    input_type,
  },
  {
    input_id: 'Q04',
    label: {
      nl: 'Kunt u de hand achter het hoofd brengen en tegelijkertijd de elleboog volledig opzij brengen?',
      en: 'Can you place your hand behind your head with the elbow straight out to the side?',
    },
    input_type,
  },
  {
    input_id: 'Q05',
    label: {
      nl: 'Kunt u een licht voorwerp (bijvoorbeeld een muntstuk): met gestrekte arm op een plank op schouder hoogte leggen?',
      en: 'Can you place a coin on a shelf at the level of your shoulder without bending your elbow?',
    },
    input_type,
  },
  {
    input_id: 'Q06',
    label: {
      nl: 'Kunt u met een voorwerp in uw hand dat ongeveer een pond weegt (bijvoorbeeld een pak suiker, flesje water), uw arm met een gestrekte elleboog heffen tot schouderhoogte?',
      en: 'Can you lift one pound (a full pint container) to the level of your shoulder without bending your elbow?',
    },
    input_type,
  },
  {
    input_id: 'Q07',
    label: {
      nl: 'Kunt u met een voorwerp in uw hand dat ongeveer vier kilo weegt (bijvoorbeeld een tas met 2 pakken melk van 1,5 liter), uw arm met een gestrekte elleboog heffen tot schouderhoogte?',
      en: 'Can you lift eight pounds (a full gallon container) to the level of the top of your head without bending your elbow?',
    },
    input_type,
  },
  {
    input_id: 'Q08',
    label: {
      nl: 'Kunt u een boodschappentas die ongeveer 10 kilo weegt, dragen met uw arm langs het lichaam?',
      en: 'Can you carry 20 pounds at your side with the affected extremity?',
    },
    input_type,
  },
  {
    input_id: 'Q09',
    label: {
      nl: 'Kunt u een bal (tennisbal of iets een iets zwaardere softbal): met onderhandse techniek ongeveer 10 meter ver gooien?',
      en: 'Do you think you can toss a softball underhand 10 yards with the affected extremity?',
    },
    input_type,
  },
  {
    input_id: 'Q10',
    label: {
      nl: 'Kunt u een bal (tennisbal of een iets zwaardere softbal): met bovenhandse techniek ongeveer 20 meter ver gooien?',
      en: 'Do you think you can throw a softball overhand 20 yards with the affected extremity?',
    },
    input_type,
  },
  {
    input_id: 'Q11',
    label: {
      nl: 'Kunt u de achterzijde van uw niet – aangedane schouder: wassen?',
      en: 'Can you wash the back of your opposite shoulder with the affected extremity?',
    },
    input_type,
  },
  {
    input_id: 'Q12',
    label: {
      nl: 'Is het vanwege uw schouder mogelijk: uw normale activiteiten (baan, vrijwilligers werk, huishoudelijk werk) full time uit te voeren?',
      en: 'Would your shoulder allow you to work full-time at your usual job?',
    },
    input_type,
  },
]
