import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const SUBSCORE_QUESTIONS = ['STOOL_FREQUENCY', 'ABDOMINAL_PAIN']

export const PROMIS_10_INPUTS = {
  PROMIS_10_Q01: {
    label: {
      en: 'In general, would you say your health is:',
      nl: 'Hoe zou u uw gezondheid in het algemeen beoordelen?',
      pl: 'Ogólnie, jak ocenia Pan/Pani swój stan zdrowia?',
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend', pl: 'Znakomicie' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed', pl: 'Bardzo dobre' } },
        { value: 3, label: { en: 'Good', nl: 'Goed', pl: 'Dobrze' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk', pl: 'Tak sobie' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht', pl: 'Źle' } },
      ],
    },
  },
  PROMIS_10_Q02: {
    label: {
      en: 'In general, would you say your quality of life is:',
      nl: 'Hoe zou u de kwaliteit van uw leven in het algemeen beoordelen?',
      pl: 'Ogólnie, jak ocenia Pan/Pani jakość swego życia?',
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend', pl: 'Znakomicie' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed', pl: 'Bardzo dobre' } },
        { value: 3, label: { en: 'Good', nl: 'Goed', pl: 'Dobrze' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk', pl: 'Tak sobie' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht', pl: 'Źle' } },
      ],
    },
  },
  PROMIS_10_Q03: {
    label: {
      en: 'In general, how would you rate your physical health?',
      nl: 'Hoe zou u uw lichamelijke gezondheid in het algemeen beoordelen?',
      pl: 'Ogólnie, jak ocenia Pan/Pani swoje zdrowie fizyczne?',
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend', pl: 'Znakomicie' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed', pl: 'Bardzo dobre' } },
        { value: 3, label: { en: 'Good', nl: 'Goed', pl: 'Dobrze' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk', pl: 'Tak sobie' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht', pl: 'Źle' } },
      ],
    },
  },
  PROMIS_10_Q04: {
    label: {
      en: 'In general, how would you rate your mental health, including your mood and your ability to think?',
      nl: 'Hoe zou u uw geestelijke gezondheid, met inbegrip van uw humeur en uw denkvermogen, beoordelen?',
      pl: 'Ogólnie, jak ocenia Pan/Pani swoje zdrowie psychiczne, w tym nastrój i zdolność myślenia?',
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend', pl: 'Znakomicie' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed', pl: 'Bardzo dobre' } },
        { value: 3, label: { en: 'Good', nl: 'Goed', pl: 'Dobrze' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk', pl: 'Tak sobie' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht', pl: 'Źle' } },
      ],
    },
  },
  PROMIS_10_Q05: {
    label: {
      en: 'In general, how would you rate your satisfaction with your social activities and relationships?',
      nl: 'Hoe tevreden bent u met uw sociale activiteiten en relaties in het algemeen?',
      pl: 'Ogólnie, jak ocenia Pan/Pani swoje zadowolenie z życia towarzyskiego i relacji międzyludzkich?',
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend', pl: 'Znakomicie' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed', pl: 'Bardzo dobre' } },
        { value: 3, label: { en: 'Good', nl: 'Goed', pl: 'Dobrze' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk', pl: 'Tak sobie' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht', pl: 'Źle' } },
      ],
    },
  },
  PROMIS_10_Q06: {
    label: {
      en: 'To what extent are you able to carry out your everyday physcial activities such as walking, climbing stairs, carrying groceries, or moving a chair?',
      nl: 'In hoeverre bent u in staat geweest uw dagelijkse activiteiten zoals wandelen, traplopen, het dragen van boodschappen, of het verplaatsen van een stoel uit te voeren?',
      pl: 'W jakim stopniu jest Pan/Pani w stanie wykonywać codzienne czynności fizyczne, takie jak chodzenie, wchodzenie po schodach, noszenie zakupów spożywczych czy przesuwanie krzesła?',
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Completely', nl: 'Uitstekend', pl: 'W pełni' } },
        { value: 4, label: { en: 'Mostly', nl: 'Zeer goed', pl: 'W dużym' } },
        { value: 3, label: { en: 'Moderately', nl: 'Goed', pl: 'Umiarkowanie' } },
        { value: 2, label: { en: 'A little', nl: 'Redelijk', pl: 'W małym' } },
        { value: 1, label: { en: 'Not at all', nl: 'Slecht', pl: 'Nie mogę tego robić' } },
      ],
    },
  },
  PROMIS_10_Q07RC: {
    label: {
      en: 'How would you rate your pain on average?',
      nl: 'Hoe zou u, gemiddeld gezien, uw pijn beoordelen?',
      pl: 'Średnio rzecz biorąc, jak ocenia Pan/Pani odczuwany ból?',
    },
    type: z.number().min(0).max(10).optional(),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: {
            en: 'No pain',
            nl: 'Geen pijn',
            pl: 'Brak bólu',
          },
        },
        max: {
          label: {
            en: 'Worst pain imaginable',
            nl: 'Ergst denkbare pijn',
            pl: 'Najsilniejszy ból, jaki można sobie wyobrazić',
          },
        },
      },
    },
  },
  PROMIS_10_Q08R: {
    label: {
      en: 'How would you rate your fatigue on average?',
      nl: 'Hoe zou u, gemiddeld gezien, uw vermoeidheid beoordelen?',
      pl: 'Średnio rzecz biorąc, jak ocenia Pan/Pani swoje wyczerpanie?',
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'None', nl: 'Geen', pl: 'Brak' } },
        { value: 4, label: { en: 'Mild', nl: 'Mild', pl: 'Lekkie' } },
        { value: 3, label: { en: 'Moderate', nl: 'Matig', pl: 'Średnie' } },
        { value: 2, label: { en: 'Severe', nl: 'Ernstig', pl: 'Silne' } },
        { value: 1, label: { en: 'Very severe', nl: 'Zeer ernstig', pl: 'Bardzo silne' } },
      ],
    },
  },
  PROMIS_10_Q09R: {
    label: {
      en: 'In general, please rate how well you carry out your usual social activities and roles. This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.',
      nl: 'Hoe goed gaat het uitvoeren van uw gebruikelijke sociale activiteiten en rollen in het algemeen? (Bv. activiteiten thuis, op het werk, in uw gemeenschap, en verantwoordelijkheden als ouder, kind, partner, werknemer, vriend, etc.).',
      pl: 'Proszę ocenić, na ile dobrze radzi sobie Pan/Pani na ogół ze zwykłymi czynnościami życia towarzyskiego i rolami społecznymi. (Obejmuje to czynności w domu, w pracy i w społeczności oraz obowiązki rodzica, dziecka, współmałżonka, pracownika, przyjaciela, itp.)'
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Excellent', nl: 'Uitstekend', pl: 'Znakomicie' } },
        { value: 4, label: { en: 'Very good', nl: 'Zeer goed', pl: 'Bardzo dobre' } },
        { value: 3, label: { en: 'Good', nl: 'Goed', pl: 'Dobrze' } },
        { value: 2, label: { en: 'Fair', nl: 'Redelijk', pl: 'Tak sobie' } },
        { value: 1, label: { en: 'Poor', nl: 'Slecht', pl: 'Źle' } },
      ],
    },
  },
  PROMIS_10_Q10R: {
    label: {
      en: 'How often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?',
      nl: 'Hoe vaak hebt u last gehad van emotionele problemen zoals uzelf angstig, depressief or irriteerbaar voelen?',
      pl: 'Jak często dokuczały Panu/Pani problemy emocjonalne, takie jak uczucie niepokoju, przygnębienia czy rozdrażnienia?'
    },
    type: z
      .union([
        z.literal(5),
        z.literal(4),
        z.literal(3),
        z.literal(2),
        z.literal(1),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 5, label: { en: 'Never', nl: 'Nooit', pl: 'Nigdy' } },
        { value: 4, label: { en: 'Rarely', nl: 'Zelden', pl: 'Rzadko' } },
        { value: 3, label: { en: 'Sometimes', nl: 'Soms', pl: 'Czasami' } },
        { value: 2, label: { en: 'Often', nl: 'Vaak', pl: 'Często' } },
        { value: 1, label: { en: 'Always', nl: 'Altijd', pl: 'Zawsze' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
