import { type InputType } from '../../../src/types/calculations.types'

export const ZERO = 0
export const TWO = 2
export const THREE = 3
export const FOUR = 4
export const FIVE = 5
export const SIX = 6
export const TEN = 10
export const FIFTEEN = 15
export const TWENTY = 20
export const TWENTY_FIVE = 25

/**
 * Make sure to update all the input labels with MLKS labels
 */
export const MLKS_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01_LIMP',
    input_label: {
      en: 'Limp',
      nl: 'Afwijkend looppatroon, mank lopen',
      fr: 'Boiterie',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: FIVE,
          label: {
            en: 'I have a slight or periodical limp when I walk.',
            nl: 'Geen',
            fr: 'Je ne boite pas quand je marche.',
          },
        },
        {
          value: THREE,
          label: {
            en: 'Once',
            nl: 'Gering probleem, doorstappen mogelijk.',
            fr: 'Je boite légèrement quand je marche.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'I have a severe and constant limp when I walk.',
            nl: 'Ernstig, constant.',
            fr: 'J`ai une boiterie sévère et constante lorsque je marche.',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q02_CANE_OR_CRUTCHES',
    input_label: {
      en: 'Using cane or crutches',
      nl: 'Steun',
      fr: 'Utiliser une canne ou des béquilles',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: FIVE,
          label: {
            en: 'I do not use a cane or crutches.',
            nl: 'Geen',
            fr: 'Je ne me sers pas d`une canne ou de béquilles.',
          },
        },
        {
          value: TWO,
          label: {
            en: 'I use a cane or crutches with some weight-bearing.',
            nl: 'Soms, stok of kruk',
            fr: 'Je me sers d`une canne ou de béquilles avec une certaine capacité de charge.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'Putting weight on my hurt leg is impossible.',
            nl: 'Altijd, volledige belasting niet mogelijk.',
            fr: 'Impossible de mettre du poids sur ma jambe blessée.',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q03_LOCKING_KNEE',
    input_label: {
      en: 'Locking sensation in the knee',
      nl: 'Blokkades/slotverschijnselen',
      fr: 'Sensation de blocage dans le genou',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: FIFTEEN,
          label: {
            en: 'I have no locking and no catching sensation in my knee.',
            nl: 'Geen blokkade, geen gevoel van vast blijven zitten.',
            fr: 'Je n`ai pas de sensation de blocage et d`accrochage dans mon genou.',
          },
        },
        {
          value: TEN,
          label: {
            en: 'I have catching sensation but no locking sensation in my knee.',
            nl: 'Gevoel blokkade, van vast blijven zitten, geen blokkade.',
            fr: 'J`ai une sensation de pincement mais pas de blocage dans mon genou.',
          },
        },
        {
          value: SIX,
          label: {
            en: 'My knee locks occasionally.',
            nl: 'Af en toe blokkade.',
            fr: 'Mon genou se bloque de temps en temps.',
          },
        },
        {
          value: TWO,
          label: {
            en: 'My knee locks frequently.',
            nl: 'Frequent blokkade.',
            fr: 'Mon genou se bloque fréquemment.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'My knee feels locked at this moment.',
            nl: 'Blokkade tijdens onderzoek.',
            fr: 'Mon genou est bloqué en ce moment.',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q04_GIVING_WAY_SENSATION_KNEE',
    input_label: {
      en: 'Giving way sensation from the knee',
      nl: 'Door de knie zakken',
      fr: 'Sensation de cèder au niveau du genou',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: TWENTY_FIVE,
          label: {
            en: 'My knee gives way',
            nl: 'Nooit',
            fr: 'Mon genou cède',
          },
        },
        {
          value: TWENTY,
          label: {
            en: 'My knee rarely gives way, only during athletics or vigorous activity.',
            nl: 'Zelden tijdens sport of zware belasting.',
            fr: 'Mon genou cède rarement, seulement pendant l`athlétisme ou une activité vigoureuse.',
          },
        },
        {
          value: FIFTEEN,
          label: {
            en: 'My knee frequently gives way during athletics or other vigorous activities. In turn I am unable to participate in these activities.',
            nl: 'Frequent tijdens sport of zware belasting.',
            fr: 'Mon genou se dérobe fréquemment lors d`activités sportives ou autres activités vigoureuses. Je ne peux donc pas participer à ces activités.',
          },
        },
        {
          value: TEN,
          label: {
            en: 'My knee frequently gives way during daily activities.',
            nl: 'Af en toe tijdens adl.',
            fr: 'Mon genou cède fréquemment pendant les activités quotidiennes.',
          },
        },
        {
          value: FIVE,
          label: {
            en: 'My knee often gives way during daily activities.',
            nl: 'Frequent tijdens adl.',
            fr: 'Mon genou cède souvent pendant les activités quotidiennes.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'My knee gives way every step I take.',
            nl: 'Bij elke stap.',
            fr: 'Mon genou se dérobe à chaque pas que je fais.',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q05_PAIN',
    input_label: {
      en: 'Pain',
      nl: 'Pijn',
      fr: 'Douleur',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: TWENTY_FIVE,
          label: {
            en: 'I have no pain in my knee.',
            nl: 'Geen',
            fr: 'Je n`ai pas de douleur au genou.',
          },
        },
        {
          value: TWENTY,
          label: {
            en: 'I have intermittent or slight pain in my knee during vigorous activities.',
            nl: 'Niet constant, gering tijdens sport, na sport of zware belasting.',
            fr: 'Je ressens une douleur intermittente ou légère dans le genou lors d`activités vigoureuses.',
          },
        },
        {
          value: FIFTEEN,
          label: {
            en: 'I have marked pain in my knee during vigorous activities.',
            nl: 'Duidelijk tijdens sport of zware belasting.',
            fr: 'Je ressens une douleur marquée dans le genou lors d`activités vigoureuses.',
          },
        },
        {
          value: TEN,
          label: {
            en: 'I have marked pain in my knee during or after walking more than 1 mile.',
            nl: 'Duidelijk tijdens of na wandelen > 2km (of >= 30 minuten).',
            fr: 'Je ressens une douleur marquée au genou pendant ou après une marche de plus d`un kilomètre.',
          },
        },
        {
          value: FIVE,
          label: {
            en: 'I have marked pain in my knee during or after walking less than 1 mile.',
            nl: 'Duidelijk tijdens of na wandelen < 2km (of < 30 minuten).',
            fr: 'Je ressens une douleur marquée au genou pendant ou après une marche de moins d`un kilomètre.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'I have constant pain in my knee.',
            nl: 'Constant',
            fr: 'J`ai une douleur constante au genou.',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q06_SWELLING',
    input_label: {
      en: 'Swelling',
      nl: 'Zwelling',
      fr: 'Gonflement',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: TEN,
          label: {
            en: 'I have swelling in my knee.',
            nl: 'Geen',
            fr: 'J`ai un gonflement dans le genou.',
          },
        },
        {
          value: SIX,
          label: {
            en: 'I have swelling in my knee only after vigorous activities.',
            nl: 'Na zware belasting of door knie zakken.',
            fr: 'J`ai un gonflement du genou uniquement après des activités vigoureuses.',
          },
        },
        {
          value: TWO,
          label: {
            en: 'I have swelling in my knee after ordinary activities.',
            nl: 'Na normale belasting.',
            fr: 'J`ai un gonflement du genou après des activités ordinaires.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'I have swelling constantly in my knee.',
            nl: 'Constant',
            fr: 'J`ai un gonflement constant dans mon genou.',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q07_CLIMBING_STAIRS',
    input_label: {
      en: 'Climbing stairs',
      nl: 'Traplopen',
      fr: 'Monter les escaliers',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: TEN,
          label: {
            en: 'I have no problems climbing stairs.',
            nl: 'Geen probleem.',
            fr: 'Je n`ai aucun problème pour monter les escaliers.',
          },
        },
        {
          value: SIX,
          label: {
            en: 'I have slight problems climbing stairs.',
            nl: 'Geen probleem, doorstappen mogelijk.',
            fr: 'J`ai de légers problèmes pour monter les escaliers.',
          },
        },
        {
          value: TWO,
          label: {
            en: 'I can climb stairs only one at a time.',
            nl: 'Met aansluitpas, één trede tegelijk.',
            fr: 'J`ai un gonflement dans le genou après que j`ai pu monter des escaliers, un seul à la fois, et faire des activités extraordinaires.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'Climbing stairs is impossible for me.',
            nl: 'Niet mogelijk',
            fr: 'Monter des escaliers m`est impossible.',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q08_SQUATTING',
    input_label: {
      en: 'Squatting',
      nl: 'Hurkzit',
      fr: 'Accroupissement',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: FIVE,
          label: {
            en: 'I have no problems squatting.',
            nl: 'Geen probleem',
            fr: 'Je n`ai aucun problème à m`accroupir.',
          },
        },
        {
          value: FOUR,
          label: {
            en: 'I have slight problems squatting.',
            nl: 'Gering probleem',
            fr: 'J`ai de légers problèmes pour m`accroupir.',
          },
        },
        {
          value: TWO,
          label: {
            en: 'I cannot squat beyond a 90° bend in my knee.',
            nl: 'Niet voorbij 90°',
            fr: 'Je ne peux pas m`accroupir au-delà d`une flexion de 90° du genou.',
          },
        },
        {
          value: ZERO,
          label: {
            en: 'Squatting is impossible because of my knee.',
            nl: 'Niet mogelijk',
            fr: 'Le squat est impossible à cause de mon genou.',
          },
        },
      ],
    },
  },
]
