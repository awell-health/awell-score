import type { InputType } from '../../../src/types/calculations.types'

export const SUBSCORE_QUESTIONS = ['STOOL_FREQUENCY', 'ABDOMINAL_PAIN']

export const PROMIS_10_INPUTS: Array<InputType> = [
  {
    input_id: 'PROMIS_10_Q01',
    label: {
      en: 'In general, would you say your health is:',
      nl: 'Hoe zou u uw gezondheid in het algemeen beoordelen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed' } },
        { value: 3, label: { en: 'Good', nl: 'Goed' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q02',
    label: {
      en: 'In general, would you say your quality of life is:',
      nl: 'Hoe zou u de kwaliteit van uw leven in het algemeen beoordelen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed' } },
        { value: 3, label: { en: 'Good', nl: 'Goed' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q03',
    label: {
      en: 'In general, how would you rate your physical health?',
      nl: 'Hoe zou u uw lichamelijke gezondheid in het algemeen beoordelen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed' } },
        { value: 3, label: { en: 'Good', nl: 'Goed' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q04',
    label: {
      en: 'In general, how would you rate your mental health, including your mood and your ability to think?',
      nl: 'Hoe zou u uw geestelijke gezondheid, met inbegrip van uw humeur en uw denkvermogen, beoordelen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed' } },
        { value: 3, label: { en: 'Good', nl: 'Goed' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q05',
    label: {
      en: 'In general, how would you rate your satisfaction with your social activities and relationships?',
      nl: 'Hoe tevreden bent u met uw sociale activiteiten en relaties in het algemeen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed' } },
        { value: 3, label: { en: 'Good', nl: 'Goed' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q06',
    label: {
      en: 'To what extent are you able to carry out your everyday physcial activities such as walking, climbing stairs, carrying groceries, or moving a chair?',
      nl: 'In hoeverre bent u in staat geweest uw dagelijkse activiteiten zoals wandelen, traplopen, het dragen van boodschappen, of het verplaatsen van een stoel uit te voeren?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Completely', nl: 'Uitstekend' } },
        { value: 4, label: { en: 'Mostly', nl: 'Zeer goed' } },
        { value: 3, label: { en: 'Moderately', nl: 'Goed' } },
        { value: 2, label: { en: 'A little', nl: 'Redelijk' } },
        { value: 1, label: { en: 'Not at all', nl: 'Slecht' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q07RC',
    label: {
      en: 'How would you rate your pain on average?',
      nl: 'Hoe zou u, gemiddeld gezien, uw pijn beoordelen?',
    },
    type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: {
            en: 'No pain',
            nl: 'Geen pijn',
          },
        },
        max: {
          value: 10,
          label: {
            en: 'Worst pain imaginable',
            nl: 'Ergst denkbare pijn',
          },
        },
      },
    },
  },
  {
    input_id: 'PROMIS_10_Q08R',
    label: {
      en: 'How would you rate your fatigue on average?',
      nl: 'Hoe zou u, gemiddeld gezien, uw vermoeidheid beoordelen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'None', nl: 'Geen' } },
        { value: 4, label: { en: 'Mild', nl: 'Mild' } },
        { value: 3, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 2, label: { en: 'Severe', nl: 'Ernstig' } },
        { value: 1, label: { en: 'Very severe', nl: 'Zeer ernstig' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q09R',
    label: {
      en: 'In general, please rate how well you carry out your usual social activities and roles. This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.',
      nl: 'Hoe goed gaat het uitvoeren van uw gebruikelijke sociale activiteiten en rollen in het algemeen? (Bv. activiteiten thuis, op het werk, in uw gemeenschap, en verantwoordelijkheden als ouder, kind, partner, werknemer, vriend, etc.).',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed' } },
        { value: 3, label: { en: 'Good', nl: 'Goed' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht' } },
      ],
    },
  },
  {
    input_id: 'PROMIS_10_Q10R',
    label: {
      en: 'How often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?',
      nl: 'Hoe vaak hebt u last gehad van emotionele problemen zoals uzelf angstig, depressief or irriteerbaar voelen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        { value: 5, label: { en: 'Never', nl: 'Nooit' } },
        { value: 4, label: { en: 'Rarely', nl: 'Zelden' } },
        { value: 3, label: { en: 'Sometimes', nl: 'Soms' } },
        { value: 2, label: { en: 'Often', nl: 'Vaak' } },
        { value: 1, label: { en: 'Always', nl: 'Altijd' } },
      ],
    },
  },
]
