import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  component: 'slider',
  range: {
    min: {
      value: 0,
      label: { en: 'Absolutely disagree', nl: 'Helemaal niet akkoord' },
    },
    max: {
      value: 10,
      label: { en: 'Absolutely agree', nl: 'Helemaal akkoord' },
    },
  },
}

export const IBD_DISK_INPUTS: Array<InputType> = [
  {
    input_id: 'abdominal_pain',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa last van pijn ter hoogte van mijn maag of buik.',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have had aches or pains in my stomach or abdomen.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'regulating_defecation',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa moeilijkheden met het regelen van mijn stoelgang, met inbegrip van het zoeken naar een nabijgelegen toilet en de reiniging nadien.',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have had difficulty coordinating and managing defecation, including choosing and getting to an appropriate place for defecation and cleaning myself afterwards.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'interpersonal_interactions',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa moeilijkheden met persoonlijke relaties/sociale contacten en/of deelname aan publieke activiteiten (interpersoonlijke interacties).',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have had difficulty with personal relationships and/or difficulty participating in the community.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'education_and_work',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa moeilijkheden met school of studeren, en/of moeilijkheden met het werk of huishoudelijke activiteiten (educatie en werk).',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have had difficulty with school or studying activities, and/or difficulty with work or household activities.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'sleep',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa slaapproblemen, zoals moeilijk inslapen, frequent wakker worden ’s nachts of te vroeg wakker worden ’s ochtends.',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have had difficulty sleeping, such as falling asleep, waking up frequently during the night or waking up too early in the morning.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'energy',
    label: {
      nl: 'Tijdens de laatste week voelde ik me, omwille van mijn ziekte van Crohn of colitis ulcerosa, niet uitgerust gedurende de dag. Ik voelde mij moe en futloos.',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have not felt rested and refreshed during the day, and have felt tired and without energy.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'emotions',
    label: {
      nl: 'Tijdens de laatste week voelde ik me, omwille van mijn ziekte van Crohn of colitis ulcerosa, verdrietig, depressief en/of bezorgd of angstig.',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have felt sad, low or depressed, and/or worried or anxious.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'body_image',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa was ik niet tevreden met mijn uiterlijk of een deel hiervan (lichaamsbeeld).',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have not liked the way my body or body parts look.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'sexual_function',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa problemen met de fysieke of mentale aspecten van seks (sexuele functie).',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have had difficulty with the mental and/or physical aspects of sex.",
    },
    input_type,
    required: true,
  },
  {
    input_id: 'arthralgia',
    label: {
      nl: 'Tijdens de laatste week had ik omwille van mijn ziekte van Crohn of colitis ulcerosa pijn ter hoogte van mijn gewrichten.',
      en: "In the past week, because of my Crohn's disease or ulcerative colitis I have had pains in the joints of my body.",
    },
    input_type,
    required: true,
  },
]
