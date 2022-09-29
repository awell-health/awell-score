import type { COMIDomainType } from '../../../../../types/calculations/subscales/custom/comi.types'
import {
  max_of_items_in_domain,
  mean_of_items_in_domain,
  raw_score_of_item,
} from '../../common/comi_functions'

export const COMI_BACK_DOMAINS: Array<COMIDomainType> = [
  {
    id: 'PAIN',
    input_ids_in_subscale: [
      {
        input_id: 'item_1a',
        input_label: {
          en: 'How severe was your back pain in the last week?',
          nl: 'Hoe erg was uw rugpijn in de afgelopen week?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'No pain', nl: 'Geen pijn' } },
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
            { value: 7 },
            { value: 8 },
            { value: 9 },
            {
              value: 10,
              label: {
                en: 'Worst pain that I can imagine',
                nl: 'Ergste pijn die ik mij kan voorstellen',
              },
            },
          ],
        },
      },
      {
        input_id: 'item_1b',
        input_label: {
          en: 'How severe was your leg pain (sciatica)/buttock pain in the last week?',
          nl: 'Hoe erg was uw beenpijn (ischias) en/of bilpijn in de afgelopen week?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { en: 'No pain', nl: 'Geen pijn' } },
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
            { value: 7 },
            { value: 8 },
            { value: 9 },
            {
              value: 10,
              label: {
                en: 'Worst pain that I can imagine',
                nl: 'Ergste pijn die ik mij kan voorstellen',
              },
            },
          ],
        },
      },
    ],
    score_fn: max_of_items_in_domain,
  },
  {
    id: 'BACK_RELATED_FUNCTION',
    input_ids_in_subscale: [
      {
        input_id: 'item_2',
        input_label: {
          en: 'During the past week, how much did your back problem interfere with your normal work (including both work outside the home and housework)?',
          nl: 'In welke mate hinderde uw rugprobleem uw normale werk (zowel uw job als huishoudelijk werk) in de afgelopen week?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
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
    ],
    score_fn: raw_score_of_item,
  },
  {
    id: 'SYMPTOM_SPECIFIC_WELLBEING',
    input_ids_in_subscale: [
      {
        input_id: 'item_3',
        input_label: {
          en: 'If you had to spend the rest of your life with the symptoms you have right now, how would you feel about it?',
          nl: 'Hoe zou u er zich bij voelen indien u de rest van uw leven zou moeten doorbrengen met de klachten die u nu voelt?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
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
    ],
    score_fn: raw_score_of_item,
  },
  {
    id: 'GENERAL_QOL',
    input_ids_in_subscale: [
      {
        input_id: 'item_4',
        input_label: {
          en: 'Please reflect on the last week. How would you rate your quality of life?',
          nl: 'Als u aan de afgelopen week terugdenkt, hoe zou u uw levenskwaliteit inschatten/beoordelen?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Zeer goed', en: 'Very good' } },
            { value: 2.5, label: { nl: 'Goed', en: 'Good' } },
            { value: 5, label: { nl: 'Matig', en: 'Moderate' } },
            { value: 7.5, label: { nl: 'Slecht', en: 'Bad' } },
            { value: 10, label: { nl: 'Zeer slecht', en: 'Very bad' } },
          ],
        },
      },
    ],
    score_fn: raw_score_of_item,
  },
  {
    id: 'DISABILITY',
    input_ids_in_subscale: [
      {
        input_id: 'item_5',
        input_label: {
          en: 'During the past 4 weeks, how many days did you cut down on the things you usually do (work, housework, school, recreational activities) because of your back problem?',
          nl: 'Hoeveel dagen van de laatste 4 weken werden activiteiten die u normaal doet (uw job, huishoudelijk werk, school, recreatieve activiteiten) ingekort/verminderd omwille van uw rugprobleem?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
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
      {
        input_id: 'item_6',
        input_label: {
          en: 'During the past 4 weeks, how many days did your back problem keep you from going to work (job, school, housework)?',
          nl: 'Hoeveel dagen van de laatste 4 weken heeft uw rugprobleem u belet om te gaan werken (uw job, huishoudelijk werk, school)?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
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
    ],
    score_fn: mean_of_items_in_domain,
  },
]
