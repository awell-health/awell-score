import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { nl: 'Nooit', en: 'Never' } },
    { value: 1, label: { nl: 'Zelden', en: 'Rarely' } },
    { value: 2, label: { nl: 'Soms', en: 'Sometimes' } },
    { value: 3, label: { nl: 'Vaak', en: 'Often' } },
    { value: 4, label: { nl: 'Altijd', en: 'Always' } },
  ],
}

export const CSI_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      nl: 'Ik voel me niet uitgeslapen ’s morgens als ik wakker word',
      en: 'I feel tired and unrefreshed when I wake from sleeping.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q02',
    input_label: {
      nl: 'Mijn spieren voelen stijf en pijnlijk',
      en: 'My muscles feel stiff and achy.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q03',
    input_label: { nl: 'Ik heb angstaanvallen', en: 'I have anxiety attacks.' },
    input_type,
    required: true,
  },
  {
    input_id: 'Q04',
    input_label: {
      nl: 'Ik knars of klem met mijn tanden',
      en: 'I grind or clench my teeth.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q05',
    input_label: {
      nl: 'Ik heb last van diarree en/of constipatie',
      en: 'I have problems with diarrhea and/or constipation.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q06',
    input_label: {
      nl: 'Ik heb hulp nodig bij het uitvoeren van dagelijkse activiteiten',
      en: 'I need help in performing my daily activities.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q07',
    input_label: {
      nl: 'Ik ben gevoelig voor fel licht',
      en: 'I am sensitive to bright lights.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q08',
    input_label: {
      nl: 'Ik ben snel moe bij fysieke activiteiten',
      en: 'I get tired very easily when I am physically active.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q09',
    input_label: {
      nl: 'Ik heb pijn over mijn gehele lichaam',
      en: 'I feel pain all over my body.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q10',
    input_label: { nl: 'Ik heb last van hoofdpijn', en: 'I have headaches.' },
    input_type,
    required: true,
  },
  {
    input_id: 'Q11',
    input_label: {
      nl: 'Ik heb een ongemakkelijk gevoel in mijn blaas en/of een branderig gevoel bij het plassen',
      en: 'I feel discomfort in my bladder and/or burning when I urinate.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q12',
    input_label: { nl: 'Ik slaap niet goed', en: 'I do not sleep well.' },
    input_type,
    required: true,
  },
  {
    input_id: 'Q13',
    input_label: {
      nl: 'Ik kan me moeilijk concentreren',
      en: 'I have difficulty concentrating.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q14',
    input_label: {
      nl: 'Ik heb huidproblemen zoals droge huid, jeuk of huiduitslag',
      en: 'I have skin problems such as dryness, itchiness, or rashes.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q15',
    input_label: {
      nl: 'Stress verergert mijn lichamelijke klachten',
      en: 'Stress makes my physical symptoms get worse.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q16',
    input_label: {
      nl: 'Ik voel me neerslachtig of depressief',
      en: 'I feel sad or depressed.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q17',
    input_label: { nl: 'Ik heb weinig energie', en: 'I have low energy.' },
    input_type,
    required: true,
  },
  {
    input_id: 'Q18',
    input_label: {
      nl: 'Ik heb spierspanning in mijn nek en schouders',
      en: 'I have muscle tension in my neck and shoulders.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q19',
    input_label: {
      nl: 'Ik heb pijn in mijn kaak',
      en: 'I have pain in my jaw.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q20',
    input_label: {
      nl: 'Bepaalde geuren, zoals parfums, maken me duizelig en misselijk',
      en: 'Certain smells, such as perfumes, make me feel dizzy and nauseated.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q21',
    input_label: {
      nl: 'Ik moet vaak plassen',
      en: 'I have to urinate frequently.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q22',
    input_label: {
      nl: 'Mijn benen voelen ongemakkelijk en rusteloos wanneer ik ’s avonds wil gaan slapen',
      en: 'My legs feel uncomfortable and restless when I am trying to go to sleep at night.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q23',
    input_label: {
      nl: 'Ik heb moeite om dingen te onthouden',
      en: 'I have difficulty remembering things.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q24',
    input_label: {
      nl: 'Als kind heb ik traumatische gebeurtenissen meegemaakt',
      en: 'I suffered trauma as a child.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'Q25',
    input_label: {
      nl: 'Ik heb pijn in mijn bekkenregio',
      en: 'I have pain in my pelvic area.',
    },
    input_type,
    required: true,
  },
]
