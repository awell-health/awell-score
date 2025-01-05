import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      { value: 0, label: { nl: 'Nooit', en: 'Never' } },
      { value: 1, label: { nl: 'Zelden', en: 'Rarely' } },
      { value: 2, label: { nl: 'Soms', en: 'Sometimes' } },
      { value: 3, label: { nl: 'Vaak', en: 'Often' } },
      { value: 4, label: { nl: 'Altijd', en: 'Always' } },
    ],
  },
} satisfies EnumNumberInputType

export const CSI_INPUTS = {
  Q01: {
    label: {
      nl: 'Ik voel me niet uitgeslapen ’s morgens als ik wakker word',
      en: 'I feel tired and unrefreshed when I wake from sleeping.',
    },
    ...type,
  },
  Q02: {
    label: {
      nl: 'Mijn spieren voelen stijf en pijnlijk',
      en: 'My muscles feel stiff and achy.',
    },
    ...type,
  },
  Q03: {
    label: { nl: 'Ik heb angstaanvallen', en: 'I have anxiety attacks.' },
    ...type,
  },
  Q04: {
    label: {
      nl: 'Ik knars of klem met mijn tanden',
      en: 'I grind or clench my teeth.',
    },
    ...type,
  },
  Q05: {
    label: {
      nl: 'Ik heb last van diarree en/of constipatie',
      en: 'I have problems with diarrhea and/or constipation.',
    },
    ...type,
  },
  Q06: {
    label: {
      nl: 'Ik heb hulp nodig bij het uitvoeren van dagelijkse activiteiten',
      en: 'I need help in performing my daily activities.',
    },
    ...type,
  },
  Q07: {
    label: {
      nl: 'Ik ben gevoelig voor fel licht',
      en: 'I am sensitive to bright lights.',
    },
    ...type,
  },
  Q08: {
    label: {
      nl: 'Ik ben snel moe bij fysieke activiteiten',
      en: 'I get tired very easily when I am physically active.',
    },
    ...type,
  },
  Q09: {
    label: {
      nl: 'Ik heb pijn over mijn gehele lichaam',
      en: 'I feel pain all over my body.',
    },
    ...type,
  },
  Q10: {
    label: { nl: 'Ik heb last van hoofdpijn', en: 'I have headaches.' },
    ...type,
  },
  Q11: {
    label: {
      nl: 'Ik heb een ongemakkelijk gevoel in mijn blaas en/of een branderig gevoel bij het plassen',
      en: 'I feel discomfort in my bladder and/or burning when I urinate.',
    },
    ...type,
  },
  Q12: {
    label: { nl: 'Ik slaap niet goed', en: 'I do not sleep well.' },
    ...type,
  },
  Q13: {
    label: {
      nl: 'Ik kan me moeilijk concentreren',
      en: 'I have difficulty concentrating.',
    },
    ...type,
  },
  Q14: {
    label: {
      nl: 'Ik heb huidproblemen zoals droge huid, jeuk of huiduitslag',
      en: 'I have skin problems such as dryness, itchiness, or rashes.',
    },
    ...type,
  },
  Q15: {
    label: {
      nl: 'Stress verergert mijn lichamelijke klachten',
      en: 'Stress makes my physical symptoms get worse.',
    },
    ...type,
  },
  Q16: {
    label: {
      nl: 'Ik voel me neerslachtig of depressief',
      en: 'I feel sad or depressed.',
    },
    ...type,
  },
  Q17: {
    label: { nl: 'Ik heb weinig energie', en: 'I have low energy.' },
    ...type,
  },
  Q18: {
    label: {
      nl: 'Ik heb spierspanning in mijn nek en schouders',
      en: 'I have muscle tension in my neck and shoulders.',
    },
    ...type,
  },
  Q19: {
    label: {
      nl: 'Ik heb pijn in mijn kaak',
      en: 'I have pain in my jaw.',
    },
    ...type,
  },
  Q20: {
    label: {
      nl: 'Bepaalde geuren, zoals parfums, maken me duizelig en misselijk',
      en: 'Certain smells, such as perfumes, make me feel dizzy and nauseated.',
    },
    ...type,
  },
  Q21: {
    label: {
      nl: 'Ik moet vaak plassen',
      en: 'I have to urinate frequently.',
    },
    ...type,
  },
  Q22: {
    label: {
      nl: 'Mijn benen voelen ongemakkelijk en rusteloos wanneer ik ’s avonds wil gaan slapen',
      en: 'My legs feel uncomfortable and restless when I am trying to go to sleep at night.',
    },
    ...type,
  },
  Q23: {
    label: {
      nl: 'Ik heb moeite om dingen te onthouden',
      en: 'I have difficulty remembering things.',
    },
    ...type,
  },
  Q24: {
    label: {
      nl: 'Als kind heb ik traumatische gebeurtenissen meegemaakt',
      en: 'I suffered trauma as a child.',
    },
    ...type,
  },
  Q25: {
    label: {
      nl: 'Ik heb pijn in mijn bekkenregio',
      en: 'I have pain in my pelvic area.',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
