import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

export const HOOS_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'S',
    input_ids_in_subscale: [
      {
        input_id: 's1',
        label: {
          nl: '',
          en: 'Do you feel grinding, hear clicking or any other type of noise from your hip?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'Never' } },
            { value: 1, label: { nl: '', en: 'Rarely' } },
            { value: 2, label: { nl: '', en: 'Sometimes' } },
            { value: 3, label: { nl: '', en: 'Often' } },
            { value: 4, label: { nl: '', en: 'Always' } },
          ],
        },
      },
      {
        input_id: 's2',
        label: { nl: '', en: 'Difficulties spreading legs wide apart' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 's3',
        label: { nl: '', en: 'Difficulties to stride out when walking' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 's4',
        label: {
          nl: '',
          en: 'How severe is your hip joint stiffness after first wakening in the morning?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 's5',
        label: {
          nl: '',
          en: 'How severe is your hip stiffness after sitting, lying or resting later in the day?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
    ],
  },
  {
    id: 'P',
    input_ids_in_subscale: [
      {
        input_id: 'p1',
        label: { nl: '', en: 'How often is your hip painful?' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'Never' } },
            { value: 1, label: { nl: '', en: 'Monthly' } },
            { value: 2, label: { nl: '', en: 'Weekly' } },
            { value: 3, label: { nl: '', en: 'Daily' } },
            { value: 4, label: { nl: '', en: 'Always' } },
          ],
        },
      },
      {
        input_id: 'p2',
        label: { nl: '', en: 'Straightening your hip fully' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p3',
        label: { nl: '', en: 'Bending your hip fully' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p4',
        label: { nl: '', en: 'Walking on a flat surface' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p5',
        label: { nl: '', en: 'Going up or down stairs' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p6',
        label: { nl: '', en: 'At night while in bed' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p7',
        label: { nl: '', en: 'Sitting or lying' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p8',
        label: { nl: '', en: 'Standing upright' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p9',
        label: {
          nl: '',
          en: 'Walking on a hard surface (asphalt, concrete, etc.)',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'p10',
        label: { nl: '', en: 'Walking on an uneven surface' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
    ],
  },
  {
    id: 'ADL',
    input_ids_in_subscale: [
      {
        input_id: 'a1',
        label: { nl: '', en: 'Descending stairs' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a2',
        label: { nl: '', en: 'Ascending stairs' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a3',
        label: { nl: '', en: 'Rising from sitting' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a4',
        label: { nl: '', en: 'Standing' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a5',
        label: { nl: '', en: 'Bending to the floor/pick up an object' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a6',
        label: { nl: '', en: 'Walking on a flat surface' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a7',
        label: { nl: '', en: 'Getting in/out of car' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a8',
        label: { nl: '', en: 'Going shopping' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a9',
        label: { nl: '', en: 'Putting on socks/stockings' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a10',
        label: { nl: '', en: 'Rising from bed' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a11',
        label: { nl: '', en: 'Taking off socks/stockings' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a12',
        label: {
          nl: '',
          en: 'Lying in bed (turning over, maintaining hip position)',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a13',
        label: { nl: '', en: 'Getting in/out of bath' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a14',
        label: { nl: '', en: 'Sitting' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a15',
        label: { nl: '', en: 'Getting on/off toilet' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a16',
        label: {
          nl: '',
          en: 'Heavy domestic duties (moving heavy boxes, scrubbing floors, etc)',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'a17',
        label: {
          nl: '',
          en: 'Light domestic duties (cooking, dusting, etc)',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
    ],
  },
  {
    id: 'SP',
    input_ids_in_subscale: [
      {
        input_id: 'sp1',
        label: { nl: '', en: 'Squatting' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'sp2',
        label: { nl: '', en: 'Running' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'sp3',
        label: { nl: '', en: 'Twisting/pivoting on loaded leg' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
      {
        input_id: 'sp4',
        label: { nl: '', en: 'Walking on uneven surface' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
    ],
  },
  {
    id: 'QOL',
    input_ids_in_subscale: [
      {
        input_id: 'q1',
        label: {
          nl: '',
          en: 'How often are you aware of your hip problem?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'Never' } },
            { value: 1, label: { nl: '', en: 'Monthly' } },
            { value: 2, label: { nl: '', en: 'Weekly' } },
            { value: 3, label: { nl: '', en: 'Daily' } },
            { value: 4, label: { nl: '', en: 'Constantly' } },
          ],
        },
      },
      {
        input_id: 'q2',
        label: {
          nl: '',
          en: 'Have you modified your life style to avoid activities potentially damaging to your hip?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'Not at all' } },
            { value: 1, label: { nl: '', en: 'Mildly' } },
            { value: 2, label: { nl: '', en: 'Moderately' } },
            { value: 3, label: { nl: '', en: 'Severely' } },
            { value: 4, label: { nl: '', en: 'Totally' } },
          ],
        },
      },
      {
        input_id: 'q3',
        label: {
          nl: '',
          en: 'How much are you troubled with lack of confidence in your hip?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'Not at all' } },
            { value: 1, label: { nl: '', en: 'Mildly' } },
            { value: 2, label: { nl: '', en: 'Moderately' } },
            { value: 3, label: { nl: '', en: 'Severely' } },
            { value: 4, label: { nl: '', en: 'Extremely' } },
          ],
        },
      },
      {
        input_id: 'q4',
        label: {
          nl: '',
          en: 'In general, how much difficulty do you have with your hip?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: '', en: 'None' } },
            { value: 1, label: { nl: '', en: 'Mild' } },
            { value: 2, label: { nl: '', en: 'Moderate' } },
            { value: 3, label: { nl: '', en: 'Severe' } },
            { value: 4, label: { nl: '', en: 'Extreme' } },
          ],
        },
      },
    ],
  },
]
