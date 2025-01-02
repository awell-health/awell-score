import type { InputType } from '../../../src/types/calculations.types'

export const COMPASS_31_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'In the past year, have you ever felt faint, dizzy, "goofy", or had difficulty thinking soon after standing up from a sitting or lying position?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 5)',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'When standing up, how frequently do you get these feelings or symptoms?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Rarely' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Almost always',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q01',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'How would you rate the severity of these feelings or symptoms?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q01',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'In the past year, have these feelings or symptoms that you have experienced:',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Gotten much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Gotten somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Stayed about the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Gotten somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Gotten much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q01',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'In the past year, have you ever noticed color changes in your skin, such as red, white, or purple?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 8)',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q06',
    input_label: {
      en: 'What parts of your body are affected by these color changes? (Check all that apply)',
    },
    input_type: {
      type: 'numbers_array',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Hands' },
        },
        {
          value: 2,
          label: {
            en: 'Feet',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q05',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q07',
    input_label: {
      en: 'Are these changes in your skin color:',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Getting much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Getting somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Staying about the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Getting somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Getting much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q05',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q08',
    input_label: {
      en: 'In the past 5 years, what changes, if any, have occurred in your general body sweating?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'I sweat much more than I used to' },
        },
        {
          value: 2,
          label: {
            en: 'I sweat somewhat more than I used to',
          },
        },
        {
          value: 3,
          label: {
            en: "I haven't noticed any changes in my sweating",
          },
        },
        {
          value: 4,
          label: {
            en: 'I sweat somewhat less than I used to',
          },
        },
        {
          value: 5,
          label: {
            en: 'I sweat much less than I used to ',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q09',
    input_label: {
      en: 'Do your eyes feel excessively dry?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q10',
    input_label: {
      en: 'Does you mouth feel excessively dry?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q11',
    input_label: {
      en: 'For the symptom of dry eyes or dry mouth that you have had for the longest period of time, is this symptom:',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'I have not had any of these symptoms' },
        },
        {
          value: 2,
          label: { en: 'Getting much worse' },
        },
        {
          value: 3,
          label: {
            en: 'Getting somewhat worse',
          },
        },
        {
          value: 4,
          label: {
            en: 'Staying about the same',
          },
        },
        {
          value: 5,
          label: {
            en: 'Getting somewhat better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Getting much better',
          },
        },
        {
          value: 7,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q12',
    input_label: {
      en: 'In the past year, have you noticed any changes in how quickly you get full when eating a meal?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'I get full a lot more quickly now than I used to' },
        },
        {
          value: 2,
          label: {
            en: 'I get full more quickly now than I used to',
          },
        },
        {
          value: 3,
          label: {
            en: "I haven't noticed any change",
          },
        },
        {
          value: 4,
          label: {
            en: 'I get full less quickly now than I used to',
          },
        },
        {
          value: 5,
          label: {
            en: 'I get full a lot less quickly now than I used to',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q13',
    input_label: {
      en: 'In the past year, have you felt excessively full or persistently full (bloated feeling) after a meal?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Sometimes',
          },
        },
        {
          value: 3,
          label: {
            en: 'A lot of the time',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q14',
    input_label: {
      en: 'In the past year, have you vomited after a meal?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Sometimes',
          },
        },
        {
          value: 3,
          label: {
            en: 'A lot of the time',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q15',
    input_label: {
      en: 'In the past year, have you had a cramping or colicky abdominal pain?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Sometimes',
          },
        },
        {
          value: 3,
          label: {
            en: 'A lot of the time',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q16',
    input_label: {
      en: 'In the past year, have you had any bouts of diarrhea?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 20)',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q17',
    input_label: {
      en: 'How frequently does this occur?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Rarely' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q16',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q18',
    input_label: {
      en: 'How severe are these bouts of diarrhea?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q16',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q19',
    input_label: {
      en: 'Are your bouts of diarrhea getting:',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Staying the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q16',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q20',
    input_label: {
      en: 'In the past year, have you been constipated?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 24)',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q21',
    input_label: {
      en: 'How frequently are you constipated?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Rarely' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q20',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q22',
    input_label: {
      en: 'How severe are these episodes of constipation?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q20',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q23',
    input_label: {
      en: 'Is your constipation getting:',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Staying the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q20',
      value_is_one_of: [2],
    },
  },
  {
    input_id: 'Q24',
    input_label: {
      en: 'In the past year, have you ever lost control of your bladder function?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q25',
    input_label: {
      en: 'In the past year, have you had difficulty passing urine?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q26',
    input_label: {
      en: 'In the past year, have you had trouble completely emptying your bladder?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q27',
    input_label: {
      en: 'In the past year, without sunglasses or tinted glasses, has bright light bothered your eyes?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            en: 'Never (if you marked Never, please skip to question 29)',
          },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q28',
    input_label: {
      en: 'How severe is this sensitivity to bright light',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q27',
      value_is_one_of: [1],
    },
  },
  {
    input_id: 'Q29',
    input_label: {
      en: 'In the past year, have you had trouble focusing your eyes?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            en: 'Never (if you marked Never, please skip to question 31)',
          },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  {
    input_id: 'Q30',
    input_label: {
      en: 'How severe is this focusing problem?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
    not_applicable_if: {
      input_id: 'Q30',
      value_is_one_of: [1],
    },
  },
  {
    input_id: 'Q31',
    input_label: {
      en: 'Is the most troublesome symptom with your eyes (i.e. sensitivity to bright light or trouble focusing) getting:',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { en: 'I have not had any of these symptoms' },
        },
        {
          value: 2,
          label: {
            en: 'Much worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Somewhat worse',
          },
        },
        {
          value: 4,
          label: {
            en: 'Staying about the same',
          },
        },
        {
          value: 5,
          label: {
            en: 'Somewhat better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Much better',
          },
        },
        {
          value: 7,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
]
