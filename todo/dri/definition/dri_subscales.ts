import { type DefaultSubscaleType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  component: 'slider',
  range: {
    min: {
      value: 0,
      label: { nl: 'Geen enkele moeite', en: 'Without difficulty' },
    },
    max: { value: 100, label: { nl: 'Onmogelijk', en: 'Not at all' } },
  },
}

export const DRI_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'BASIC_ACTIVITIES',
    input_ids_in_subscale: [
      {
        input_id: 'DRI_01',
        input_type,
        label: {
          nl: 'Aankleden (zonder hulp)',
          en: 'Dressing (without help)',
        },
      },
      {
        input_id: 'DRI_02',
        input_type,
        label: { nl: 'Buitenshuis lopen', en: 'Outdoor walks' },
      },
      {
        input_id: 'DRI_03',
        input_type,
        label: { nl: 'Traplopen', en: 'Climbing stairs' },
      },
      {
        input_id: 'DRI_04',
        input_type,
        label: { nl: 'Langere tijd zitten', en: 'Sitting longer time' },
      },
    ],
  },
  {
    id: 'PHYSICAL_ACTIVITIES',
    input_ids_in_subscale: [
      {
        input_id: 'DRI_05',
        input_type,
        label: {
          nl: 'Voorovergebogen staan',
          en: 'Standing bent over a sink',
        },
      },
      {
        input_id: 'DRI_06',
        input_type,
        label: { nl: 'Het dragen van een tas', en: 'Carrying a bag' },
      },
      {
        input_id: 'DRI_07',
        input_type,
        label: { nl: 'Bedden opmaken', en: 'Making a bed' },
      },
      {
        input_id: 'DRI_08',
        input_type,
        label: { nl: 'Hardlopen', en: 'Running' },
      },
    ],
  },
  {
    id: 'WORK_RELATED_ACTIVITIES',
    input_ids_in_subscale: [
      {
        input_id: 'DRI_09',
        input_type,
        label: { nl: 'Lichte werkzaamheden', en: 'Light work' },
      },
      {
        input_id: 'DRI_10',
        input_type,
        label: { nl: 'Zware werkzaamheden', en: 'Heavy work' },
      },
      {
        input_id: 'DRI_11',
        input_type,
        label: {
          nl: 'Tillen van zware voorwerpen',
          en: 'Lifting heavy objects',
        },
      },
      {
        input_id: 'DRI_12',
        input_type,
        label: {
          nl: 'Sport of gymnastiek',
          en: 'Participating in exercise/sports',
        },
      },
    ],
  },
]
