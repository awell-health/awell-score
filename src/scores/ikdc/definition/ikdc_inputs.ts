import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const INVERSE_ITEMS = ['IKDC_Q02', 'IKDC_Q03']

export const IKDC_INPUTS = {
  IKDC_Q01: {
    label: {
      en: 'What is the highest level of activity that you can perform without significant knee pain?',
      nl: 'Wat is het hoogste niveau van activiteiten dat u kunt bereiken zonder aanzienlijke pijn in uw knie?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'Very strenuous activities like jumping or pivoting as in basketball or soccer',
            nl: 'Erg Inspannende activiteiten, zoals springen, of draaibeweging zoals in basketbal of voetbal',
          },
        },
        {
          value: 3,
          label: {
            en: 'Strenuous activities like heavy physical work, skiing, or tennis',
            nl: 'Inspannende activiteiten, zoals zwaar lichamelijk werk, skiën of tennis',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate activities like moderate physical work, running, or jogging',
            nl: 'Matige activiteiten, zoals matig lichamelijk werk, rennen of joggen',
          },
        },
        {
          value: 1,
          label: {
            en: 'Light activities like walking, housework, or yard work',
            nl: 'Lichte activiteiten zoals lopen, huishoudelijk werk of werken in de tuin',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to perform any of the above activities due to knee pain',
            nl: 'Geen van de bovengenoemde activiteiten door pijn in de knie',
          },
        },
      ],
    },
  },
  IKDC_Q02: {
    label: {
      en: 'During the past 4 weeks, or since injury, how often have you had pain?',
      nl: 'Hoe vaak hebt u in de laatste 4 weken, of sinds uw ongeval, pijn gehad?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Never', nl: 'Nooit' },
        },
        max: {
          label: { en: 'Constant', nl: 'Constant' },
        },
      },
    },
  },
  IKDC_Q03: {
    label: {
      en: 'If you have pain, how severe is it?',
      nl: 'Als u pijn heeft, hoe erg is deze dan?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'No pain', nl: 'Geen pijn' },
        },
        max: {
          label: { en: 'Worst pain', nl: 'Ergst voorstelbare pijn' },
        },
      },
    },
  },
  IKDC_Q04: {
    label: {
      en: 'During the past 4 weeks, or since your injury, how stiff or swollen was your knee?',
      nl: 'Hoe stijf of gezwollen was uw knie in de laatste 4 weken, of sinds uw ongeval?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet',
          },
        },
        {
          value: 3,
          label: {
            en: 'Mildly',
            nl: 'Mild',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderately',
            nl: 'Matig',
          },
        },
        {
          value: 1,
          label: {
            en: 'Very',
            nl: 'Erg',
          },
        },
        {
          value: 0,
          label: {
            en: 'Extremely',
            nl: 'Zeer erg',
          },
        },
      ],
    },
  },
  IKDC_Q05: {
    label: {
      en: 'What is the highest level of activity you can perform without significant swelling in your knee?',
      nl: 'Wat is het hoogste niveau van activiteiten dat u kunt bereiken zonder een aanzienlijke zwelling van uw knie?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'Very strenuous activities like jumping or pivoting as in basketball or soccer',
            nl: 'Erg Inspannende activiteiten, zoals springen, of draaibeweging zoals in basketbal of voetbal',
          },
        },
        {
          value: 3,
          label: {
            en: 'Strenuous activities like heavy physical work, skiing, or tennis',
            nl: 'nspannende activiteiten, zoals zwaar lichamelijk werk, skiën of tennis',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate activities like moderate physical work, running, or jogging',
            nl: 'Matige activiteiten, zoals matig lichamelijk werk, rennen of joggen',
          },
        },
        {
          value: 1,
          label: {
            en: 'Light activities like walking, housework, or yard work',
            nl: 'Lichte activiteiten zoals lopen, huishoudelijk werk of werken in de tuin',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to perform any of the above activities due to knee swelling',
            nl: 'Geen van de bovengenoemde activiteiten vanwege zwelling van de knie',
          },
        },
      ],
    },
  },
  IKDC_Q06: {
    label: {
      en: 'During the past 4 weeks, or since your injury, did your knee lock or catch?',
      nl: 'Heeft u in de laatste 4 weken, of sinds uw ongeval, last gehad van slot en/of zwikklachten?',
    },
    type: z.union([z.literal(1), z.literal(0)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            en: 'No',
            nl: 'Nee',
          },
        },
        {
          value: 0,
          label: {
            en: 'Yes',
            nl: 'Ja',
          },
        },
      ],
    },
  },
  IKDC_Q07: {
    label: {
      en: 'What is the highest level of activity that you can perform without significant giving way in your knee?',
      nl: 'Wat is het hoogste niveau van activiteiten dat u kunt bereiken zonder dat u door uw knie zwikt? ',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'Very strenuous activities like jumping or pivoting as in basketball or soccer',
            nl: 'Erg Inspannende activiteiten, zoals springen, of draaibeweging zoals in basketbal of voetbal',
          },
        },
        {
          value: 3,
          label: {
            en: 'Strenuous activities like heavy physical work, skiing, or tennis',
            nl: 'Inspannende activiteiten, zoals zwaar lichamelijk werk, skiën of tennis.',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate activities like moderate physical work, running, or jogging',
            nl: 'Matige activiteiten, zoals matig lichamelijk werk, rennen of joggen. ',
          },
        },
        {
          value: 1,
          label: {
            en: 'Light activities like walking, housework, or yard work',
            nl: 'Lichte activiteiten zoals lopen, huishoudelijk werk of werken in de tuin.',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to perform any of the above activities due to giving way of the knee',
            nl: 'Geen van de bovengenoemde activiteiten door knie-instabiliteit.',
          },
        },
      ],
    },
  },
  IKDC_Q08: {
    label: {
      en: 'What is the highest level of activity you can participate in on a regular basis?',
      nl: 'Wat is het hoogste niveau van activiteiten waaraan u regelmatig kunt deelnemen?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'Very strenuous activities like jumping or pivoting as in basketball or soccer',
            nl: 'Erg inspannende activiteiten, zoals springen, of draaibeweging zoals in basketbal of voetbal',
          },
        },
        {
          value: 3,
          label: {
            en: 'Strenuous activities like heavy physical work, skiing, or tennis',
            nl: 'Inspannende activiteiten, zoals zwaar lichamelijk werk, skiën of tennis',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate activities like moderate physical work, running, or jogging',
            nl: 'Matige activiteiten, zoals matig lichamelijk werk, rennen of joggen',
          },
        },
        {
          value: 1,
          label: {
            en: 'Light activities like walking, housework, or yard work',
            nl: 'Lichte activiteiten zoals lopen, huishoudelijk werk of werken in de tuin',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to perform any of the above activities due to giving way of the knee',
            nl: 'Geen van de bovengenoemde activiteiten door de knie',
          },
        },
      ],
    },
  },
  IKDC_Q09A: {
    label: {
      en: 'How does your knee affect your ability to go up stairs',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: trap oplopen?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09B: {
    label: {
      en: 'How does your knee affect your ability to go down stairs',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: trap aflopen?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09C: {
    label: {
      en: 'How does your knee affect your ability to kneel on the front of your knee',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: op uw knieën zitten?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09D: {
    label: {
      en: 'How does your knee affect your ability to squat',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: hurken?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09E: {
    label: {
      en: 'How does your knee affect your ability to sit with your knee bent',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: zitten (met gebogen knieën)?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09F: {
    label: {
      en: 'How does your knee affect your ability to rise from a chair',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: opstaan uit een stoel?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09G: {
    label: {
      en: 'How does your knee affect your ability to run straight ahead',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: rechtdoor hardlopen?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09H: {
    label: {
      en: 'How does your knee affect your ability to jump and land on involved leg',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: springen en neerkomen op het aangedane been?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q09I: {
    label: {
      en: 'How does your knee affect your ability to stop and start quickly',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: snel starten en stoppen bij lopen?',
    },
    type: z.union([
      z.literal(4),
      z.literal(3),
      z.literal(2),
      z.literal(1),
      z.literal(0),
    ]),
    uiOptions: {
      options: [
        {
          value: 4,
          label: {
            en: 'None at all',
            nl: 'Niet moeilijk',
          },
        },
        {
          value: 3,
          label: {
            en: 'Slight',
            nl: 'Iets moeizaam',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
            nl: 'Moeilijk',
          },
        },
        {
          value: 1,
          label: {
            en: 'Extreme',
            nl: 'Erg moeilijk',
          },
        },
        {
          value: 0,
          label: {
            en: 'Unable to do',
            nl: 'Onmogelijk',
          },
        },
      ],
    },
  },
  IKDC_Q10_CURRENT_KNEE_FUNCTION: {
    label: {
      en: 'How would you rate the CURRENT function of your knee on a scale of 0 to 10 with 10 being normal, excellent function and 0 being the inability to perform any of your usual daily activities which may include sports?',
      nl: 'Beoordeel de huidige functie van uw knie op een schaal van 0 tot 10, als 10 normaal/perfecte functie betekent, en 0 betekent dat uw kniefunctie ervoor zorgt dat u geen van uw normale activiteiten kunt uitvoeren (inclusief sport). ',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: {
            en: 'Cannot perform ADL',
            nl: 'Kan geen dagelijkse activiteiten uitvoeren',
          },
        },
        max: {
          label: {
            en: 'Limitation of ADL',
            nl: 'Geen beperking in dagelijkse activiteiten',
          },
        },
      },
    },
  },
} satisfies ScoreInputSchemaType
