import { type DefaultSubscaleType } from '../../../../src/types/calculations.types'
import { NumberInputType } from '../../../../src/types/calculations/inputs/calculation-inputs.types'

export const NOT_APPLICABLE_ANSWER = 999

const LIMITATION_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: 0,
      label: { nl: 'Nooit' },
    },
    {
      value: 1,
      label: { nl: 'Zelden' },
    },
    {
      value: 2,
      label: { nl: 'Af en toe' },
    },
    {
      value: 3,
      label: { nl: 'Meestal' },
    },
    {
      value: 4,
      label: { nl: 'Altijd' },
    },
    {
      value: NOT_APPLICABLE_ANSWER,
      label: { nl: 'Niet van toepassing' },
    },
  ],
}

const PAIN_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: 0,
      label: { nl: 'Geen pijn' },
    },
    {
      value: 1,
      label: { nl: 'Enige pijn' },
    },
    {
      value: 2,
      label: { nl: 'Nogal wat pijn' },
    },
    {
      value: 3,
      label: { nl: 'Veel pijn' },
    },
    {
      value: 4,
      label: { nl: 'Niet te verdragen pijn' },
    },
    {
      value: NOT_APPLICABLE_ANSWER,
      label: { nl: 'Niet van toepassing' },
    },
  ],
}

const DISABILITY_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    {
      value: 0,
      label: { nl: 'Geen moeite' },
    },
    {
      value: 1,
      label: { nl: 'Enige moeite' },
    },
    {
      value: 2,
      label: { nl: 'Nogal wat moeite' },
    },
    {
      value: 3,
      label: { nl: 'Veel moeite' },
    },
    {
      value: 4,
      label: { nl: 'Niet in staat' },
    },
    {
      value: NOT_APPLICABLE_ANSWER,
      label: { nl: 'Niet van toepassing' },
    },
  ],
}

export const FFI_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'LIMITATION',
    input_ids_in_subscale: [
      {
        input_id: 'LIMITATION_Q01',
        label: {
          nl: 'Hoe vaak gebruikte u in de afgelopen weken een stok, krukken, een looprek of rollator binnenshuis als gevolg van uw voetklachten?',
        },
        type: LIMITATION_INPUT_TYPE,
      },
      {
        input_id: 'LIMITATION_Q02',
        label: {
          nl: 'Hoe vaak gebruikte u in de afgelopen weken een stok, krukken, een looprek of rollator buitenshuis als gevolg van uw voetklachten?',
        },
        type: LIMITATION_INPUT_TYPE,
      },
      {
        input_id: 'LIMITATION_Q03',

        label: {
          nl: 'Hoe vaak bleef u in de afgelopen weken bijna de hele dag binnen als gevolg van uw voetklachten?',
        },
        type: LIMITATION_INPUT_TYPE,
      },
      {
        input_id: 'LIMITATION_Q04',

        label: {
          nl: 'Hoe vaak bleef u in de afgelopen weken bijna de hele dag in bed als gevolg van uw voetklachten?',
        },
        type: LIMITATION_INPUT_TYPE,
      },
      {
        input_id: 'LIMITATION_Q05',
        label: {
          nl: 'Hoe vaak in de afgelopen weken beperkte u uw activiteiten als gevolg van uw voetklachten?',
        },
        type: LIMITATION_INPUT_TYPE,
      },
    ],
  },
  {
    id: 'PAIN',
    input_ids_in_subscale: [
      {
        input_id: 'PAIN_Q01',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week toen deze op zijn ergst was?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q02',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week voor u uit bed kwam ’s morgens?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q03',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week bij lopen op blote voeten?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q04',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week bij staan op blote voeten?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q05',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week bij lopen met schoenen aan?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q06',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week bij staan met schoenen aan?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q07',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week bij lopen met inlays of aangepaste binnenzolen?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q08',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week bij staan met inlays of aangepaste binnenzolen?',
        },
        type: PAIN_INPUT_TYPE,
      },
      {
        input_id: 'PAIN_Q09',
        label: {
          nl: 'Hoeveel pijn had u in de afgelopen week aan het einde van de dag?',
        },
        type: PAIN_INPUT_TYPE,
      },
    ],
  },
  {
    id: 'DISABILITY',
    input_ids_in_subscale: [
      {
        input_id: 'DISABILITY_Q01',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om binnenshuis te lopen?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q02',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om buitenshuis te lopen op oneffen terrein?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q03',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om 500 meter of meer te lopen',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q04',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om de trap op te lopen?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q05',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om de trap af te lopen?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q06',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om op de tenen te staan?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q07',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om op te staan uit een stoel?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q08',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om een stoeprand op- of af te stappen?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
      {
        input_id: 'DISABILITY_Q09',
        label: {
          nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om snel te lopen of te rennen?',
        },
        type: DISABILITY_INPUT_TYPE,
      },
    ],
  },
]
