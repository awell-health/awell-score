import type { InputType } from '../../../../src/types/calculations.types'

export const EQ5D_3L_INPUTS: Array<InputType> = [
  {
    input_id: 'eq5d_3l_mobility',
    input_label: { nl: 'Mobiliteit', en: 'Mobility' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met lopen',
            en: 'I have no problems in walking about',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb enige problemen met lopen',
            en: 'I have some problems in walking about',
          },
        },
        {
          value: 3,
          label: { nl: 'Ik ben bedlegerig', en: 'I am confined to bed' },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_3l_selfcare',
    input_label: { nl: 'Zelfzorg', en: 'Self-Care' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen om mijzelf te wassen of aan te kleden',
            en: 'I have no problems with self-care',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb enige problemen om mijzelf te wassen of aan te kleden',
            en: 'I have some problems washing or dressing myself',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik ben niet in staat mijzelf te wassen of aan te kleden',
            en: 'I am unable to wash or dress myself',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_3l_usual',
    input_label: {
      nl: 'Dagelijkse activiteiten (bijv. werk, studie, huishouden, gezins- en vrijetijdsactiviteiten)',
      en: 'Usual activities (e.g. work, study, housework, family or leisure activities)',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met mijn dagelijkse activiteiten',
            en: 'I have no problems with performing my usual activities',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb enige problemen met mijn dagelijkse activiteiten',
            en: 'I have some problems with performing my usual activities',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik ben niet in staat mijn dagelijkse activiteiten uit te voeren',
            en: 'I am unable to perform my usual activities',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_3l_pain',
    input_label: { nl: 'Pijn/klachten', en: 'Pain/Discomfort' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen pijn of andere klachten',
            en: 'I have no pain or discomfort',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb geen pijn of andere klachten',
            en: 'I have moderate pain or discomfort',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb zeer ernstige pijn of andere klachten',
            en: 'I have extreme pain or discomfort',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_3l_anxiety',
    input_label: { nl: 'Stemming', en: 'Anxiety/Depression' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ik ben niet angstig of somber',
            en: 'I am not anxious or depressed',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik ben matig angstig of somber',
            en: 'I am moderately anxious or depressed',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik ben erg angstig of somber',
            en: 'I am extremely anxious or depressed',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'eq5d_3l_vas',
    input_label: {
      nl: 'Om mensen te helpen bij het aangeven hoe goed of hoe slecht een gezondheidstoestand is, hebben we een meetschaal (te vergelijken met een thermometer) gemaakt. Op de meetschaal hiernaast betekent “100” de beste  gezondheidstoestand die u zich kunt voorstellen, en “0” de slechtste gezondheidstoestand die u zich kunt voorstellen.\n\nWe willen u vragen op deze meetschaal aan te geven hoe goed of hoe slecht volgens u uw eigen gezondheidstoestand vandaag is.',
      en: 'To help people say how good or bad a health state is, we have drawn a scale (rather like a thermometer) on which the best state you can imagine.\n\nWe would like you to indicate on this scale how good or bad your own health is today, in your opinion.',
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: {
            nl: 'Slechtst voorstelbare gezondheidstoestand',
            en: 'Worst imaginable health state',
          },
        },
        max: {
          value: 100,
          label: {
            nl: 'Best voorstelbare gezondheidstoestand',
            en: 'Best imaginable health state',
          },
        },
      },
    },
    required: true,
  },
]
