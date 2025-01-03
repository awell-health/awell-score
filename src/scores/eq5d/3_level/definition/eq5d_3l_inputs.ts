import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../../types'

export const EQ5D_3L_INPUTS = {
  eq5d_3l_mobility: {
    label: { nl: 'Mobiliteit', en: 'Mobility' },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
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
  },
  eq5d_3l_selfcare: {
    label: { nl: 'Zelfzorg', en: 'Self-Care' },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
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
  },
  eq5d_3l_usual: {
    label: {
      nl: 'Dagelijkse activiteiten (bijv. werk, studie, huishouden, gezins- en vrijetijdsactiviteiten)',
      en: 'Usual activities (e.g. work, study, housework, family or leisure activities)',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
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
  },
  eq5d_3l_pain: {
    label: { nl: 'Pijn/klachten', en: 'Pain/Discomfort' },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
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
  },
  eq5d_3l_anxiety: {
    label: { nl: 'Stemming', en: 'Anxiety/Depression' },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
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
  },
  eq5d_3l_vas: {
    label: {
      nl: 'Om mensen te helpen bij het aangeven hoe goed of hoe slecht een gezondheidstoestand is, hebben we een meetschaal (te vergelijken met een thermometer) gemaakt. Op de meetschaal hiernaast betekent “100” de beste  gezondheidstoestand die u zich kunt voorstellen, en “0” de slechtste gezondheidstoestand die u zich kunt voorstellen.\n\nWe willen u vragen op deze meetschaal aan te geven hoe goed of hoe slecht volgens u uw eigen gezondheidstoestand vandaag is.',
      en: 'To help people say how good or bad a health state is, we have drawn a scale (rather like a thermometer) on which the best state you can imagine.\n\nWe would like you to indicate on this scale how good or bad your own health is today, in your opinion.',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: {
            nl: 'Slechtst voorstelbare gezondheidstoestand',
            en: 'Worst imaginable health state',
          },
        },
        max: {
          label: {
            nl: 'Best voorstelbare gezondheidstoestand',
            en: 'Best imaginable health state',
          },
        },
      },
    },
  },
} satisfies ScoreInputSchemaType
