import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

export const HOOS_SUBSCALES: Array<DefaultSubscaleType> = [
  {
    id: 'S',
    input_ids_in_subscale: [
      {
        input_id: 's1',
        input_label: {
          nl: '',
          en: 'Do you feel grinding, hear clicking or any other type of noise from your hip?',
        },
        input_type: {
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
        input_label: { nl: '', en: 'Difficulties spreading legs wide apart' },
        input_type: {
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
        input_label: { nl: '', en: 'Difficulties to stride out when walking' },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'How severe is your hip joint stiffness after first wakening in the morning?',
        },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'How severe is your hip stiffness after sitting, lying or resting later in the day?',
        },
        input_type: {
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
        input_label: { nl: '', en: 'How often is your hip painful?' },
        input_type: {
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
        input_label: { nl: '', en: 'Straightening your hip fully' },
        input_type: {
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
        input_label: { nl: '', en: 'Bending your hip fully' },
        input_type: {
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
        input_label: { nl: '', en: 'Walking on a flat surface' },
        input_type: {
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
        input_label: { nl: '', en: 'Going up or down stairs' },
        input_type: {
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
        input_label: { nl: '', en: 'At night while in bed' },
        input_type: {
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
        input_label: { nl: '', en: 'Sitting or lying' },
        input_type: {
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
        input_label: { nl: '', en: 'Standing upright' },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'Walking on a hard surface (asphalt, concrete, etc.)',
        },
        input_type: {
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
        input_label: { nl: '', en: 'Walking on an uneven surface' },
        input_type: {
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
        input_label: { nl: '', en: 'Descending stairs' },
        input_type: {
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
        input_label: { nl: '', en: 'Ascending stairs' },
        input_type: {
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
        input_label: { nl: '', en: 'Rising from sitting' },
        input_type: {
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
        input_label: { nl: '', en: 'Standing' },
        input_type: {
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
        input_label: { nl: '', en: 'Bending to the floor/pick up an object' },
        input_type: {
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
        input_label: { nl: '', en: 'Walking on a flat surface' },
        input_type: {
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
        input_label: { nl: '', en: 'Getting in/out of car' },
        input_type: {
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
        input_label: { nl: '', en: 'Going shopping' },
        input_type: {
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
        input_label: { nl: '', en: 'Putting on socks/stockings' },
        input_type: {
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
        input_label: { nl: '', en: 'Rising from bed' },
        input_type: {
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
        input_label: { nl: '', en: 'Taking off socks/stockings' },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'Lying in bed (turning over, maintaining hip position)',
        },
        input_type: {
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
        input_label: { nl: '', en: 'Getting in/out of bath' },
        input_type: {
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
        input_label: { nl: '', en: 'Sitting' },
        input_type: {
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
        input_label: { nl: '', en: 'Getting on/off toilet' },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'Heavy domestic duties (moving heavy boxes, scrubbing floors, etc)',
        },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'Light domestic duties (cooking, dusting, etc)',
        },
        input_type: {
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
        input_label: { nl: '', en: 'Squatting' },
        input_type: {
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
        input_label: { nl: '', en: 'Running' },
        input_type: {
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
        input_label: { nl: '', en: 'Twisting/pivoting on loaded leg' },
        input_type: {
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
        input_label: { nl: '', en: 'Walking on uneven surface' },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'How often are you aware of your hip problem?',
        },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'Have you modified your life style to avoid activities potentially damaging to your hip?',
        },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'How much are you troubled with lack of confidence in your hip?',
        },
        input_type: {
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
        input_label: {
          nl: '',
          en: 'In general, how much difficulty do you have with your hip?',
        },
        input_type: {
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
