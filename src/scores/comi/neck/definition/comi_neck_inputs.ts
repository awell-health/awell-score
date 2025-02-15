import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../../types'

export const COMI_NECK_INPUTS = {
  item_1a: {
    label: {
      en: 'How severe was your neck pain in the last week?',
      nl: 'Hoe erg was uw nekpijn in de afgelopen week?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'No pain', nl: 'Geen pijn' },
        },
        max: {
          label: {
            en: 'Worst pain that I can imagine',
            nl: 'Ergste pijn die ik mij kan voorstellen',
          },
        },
      },
    },
  },
  item_1b: {
    label: {
      en: 'How severe was your arm/shoulder pain in the last week?',
      nl: 'Hoe erg was uw arm/schouder pijn in de afgelopen week?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'No pain', nl: 'Geen pijn' },
        },
        max: {
          label: {
            en: 'Worst pain that I can imagine',
            nl: 'Ergste pijn die ik mij kan voorstellen',
          },
        },
      },
    },
  },
  item_2: {
    label: {
      en: 'During the past week, how much did your neck problem interfere with your normal work (including both work outside the home and housework)?',
      nl: 'In welke mate hinderde uw nekproblemen uw normale werk (zowel uw job als huishoudelijk werk) in de afgelopen week?',
    },
    type: z.union([
      z.literal(0),
      z.literal(2.5),
      z.literal(5),
      z.literal(7.5),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all' } },
        { value: 2.5, label: { nl: 'Weinig', en: 'A little bit' } },
        { value: 5, label: { nl: 'Matig', en: 'Moderately' } },
        { value: 7.5, label: { nl: 'Veel', en: 'Quite a bit' } },
        {
          value: 10,
          label: { nl: 'Extreem veel', en: 'Very dissatisfied' },
        },
      ],
    },
  },

  item_3: {
    label: {
      en: 'If you had to spend the rest of your life with the symptoms you have right now, how would you feel about it?',
      nl: 'Hoe zou u er zich bij voelen indien u de rest van uw leven zou moeten doorbrengen met de klachten die u nu voelt?',
    },
    type: z.union([
      z.literal(0),
      z.literal(2.5),
      z.literal(5),
      z.literal(7.5),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Zeer tevreden', en: 'Very satisfied' } },
        {
          value: 2.5,
          label: {
            nl: 'Enigzins tevreden',
            en: 'Very satisfied somewhat satisfied',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Noch tevreden noch ontevreden',
            en: 'Neither satisfied nor dissatisfied',
          },
        },
        {
          value: 7.5,
          label: { nl: 'Enigzins ontevreden', en: 'Somewhat dissatisfied' },
        },
        {
          value: 10,
          label: { nl: 'Zeer ontevreden', en: 'Very dissatisfied' },
        },
      ],
    },
  },

  item_4: {
    label: {
      en: 'Please reflect on the last week. How would you rate your quality of life?',
      nl: 'Als u aan de afgelopen week terugdenkt, hoe zou u uw levenskwaliteit inschatten/beoordelen?',
    },
    type: z.union([
      z.literal(0),
      z.literal(2.5),
      z.literal(5),
      z.literal(7.5),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Zeer goed', en: 'Very good' } },
        { value: 2.5, label: { nl: 'Goed', en: 'Good' } },
        { value: 5, label: { nl: 'Matig', en: 'Moderate' } },
        { value: 7.5, label: { nl: 'Slecht', en: 'Bad' } },
        { value: 10, label: { nl: 'Zeer slecht', en: 'Very bad' } },
      ],
    },
  },

  item_5: {
    label: {
      en: 'During the past 4 weeks, how many days did you cut down on the things you usually do (work, housework, school, recreational activities) because of your neck problem?',
      nl: 'Hoeveel dagen van de laatste 4 weken werden activiteiten die u normaal doet (uw job, huishoudelijk werk, school, recreatieve activiteiten) ingekort/verminderd omwille van uw nekprobleem?',
    },
    type: z.union([
      z.literal(0),
      z.literal(2.5),
      z.literal(5),
      z.literal(7.5),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Geen', en: 'None' } },
        {
          value: 2.5,
          label: { nl: 'Tussen 1 en 7 dagen', en: 'Between 1 and 7 days' },
        },
        {
          value: 5,
          label: {
            nl: 'Tussen 8 en 15 dagen',
            en: 'Between 8 and 14 days',
          },
        },
        {
          value: 7.5,
          label: {
            nl: 'Tussen 15 en 21 dagen',
            en: 'Between 15 and 21 days',
          },
        },
        {
          value: 10,
          label: { nl: 'Meer dan 21 dagen', en: 'More than 21 days' },
        },
      ],
    },
  },
  item_6: {
    label: {
      en: 'During the past 4 weeks, how many days did your neck problem keep you from going to work (job, school, housework)?',
      nl: 'Hoeveel dagen van de laatste 4 weken heeft uw nekprobleem u belet om te gaan werken (uw job, huishoudelijk werk, school)?',
    },
    type: z.union([
      z.literal(0),
      z.literal(2.5),
      z.literal(5),
      z.literal(7.5),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Geen', en: 'None' } },
        {
          value: 2.5,
          label: { nl: 'Tussen 1 en 7 dagen', en: 'Between 1 and 7 days' },
        },
        {
          value: 5,
          label: {
            nl: 'Tussen 8 en 15 dagen',
            en: 'Between 8 and 14 days',
          },
        },
        {
          value: 7.5,
          label: {
            nl: 'Tussen 15 en 21 dagen',
            en: 'Between 15 and 21 days',
          },
        },
        {
          value: 10,
          label: { nl: 'Meer dan 21 dagen', en: 'More than 21 days' },
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
