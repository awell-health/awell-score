import type { InputType } from '../../../src/types/calculations.types'

export const IKDC_INPUTS: Array<InputType> = [
  {
    input_id: 'IKDC_Q01',
    input_label: {
      en: 'What is the highest level of activity that you can perform without significant knee pain?',
      nl: 'Wat is het hoogste niveau van activiteiten dat u kunt bereiken zonder aanzienlijke pijn in uw knie?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q02',
    input_label: {
      en: 'During the past 4 weeks, or since injury, how often have you had pain?',
      nl: 'Hoe vaak hebt u in de laatste 4 weken, of sinds uw ongeval, pijn gehad?',
    },
    inverse: true, // This item is reverse scored
    input_type: {
      type: 'number',
      range: {
        min: {
          value: 0,
          label: { en: 'Never', nl: 'Nooit' },
        },
        max: {
          value: 10,
          label: { en: 'Constant', nl: 'Constant' },
        },
      },
    },
  },
  {
    input_id: 'IKDC_Q03',
    input_label: {
      en: 'If you have pain, how severe is it?',
      nl: 'Als u pijn heeft, hoe erg is deze dan?',
    },
    inverse: true, // This item is reverse scored
    input_type: {
      type: 'number',
      range: {
        min: {
          value: 0,
          label: { en: 'No pain', nl: 'Geen pijn' },
        },
        max: {
          value: 10,
          label: { en: 'Worst pain', nl: 'Ergst voorstelbare pijn' },
        },
      },
    },
  },
  {
    input_id: 'IKDC_Q04',
    input_label: {
      en: 'During the past 4 weeks, or since your injury, how stiff or swollen was your knee?',
      nl: 'Hoe stijf of gezwollen was uw knie in de laatste 4 weken, of sinds uw ongeval?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q05',
    input_label: {
      en: 'What is the highest level of activity you can perform without significant swelling in your knee?',
      nl: 'Wat is het hoogste niveau van activiteiten dat u kunt bereiken zonder een aanzienlijke zwelling van uw knie?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q06',
    input_label: {
      en: 'During the past 4 weeks, or since your injury, did your knee lock or catch?',
      nl: 'Heeft u in de laatste 4 weken, of sinds uw ongeval, last gehad van slot en/of zwikklachten?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q07',
    input_label: {
      en: 'What is the highest level of activity that you can perform without significant giving way in your knee?',
      nl: 'Wat is het hoogste niveau van activiteiten dat u kunt bereiken zonder dat u door uw knie zwikt? ',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q08',
    input_label: {
      en: 'What is the highest level of activity you can participate in on a regular basis?',
      nl: 'Wat is het hoogste niveau van activiteiten waaraan u regelmatig kunt deelnemen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09A',
    input_label: {
      en: 'How does your knee affect your ability to go up stairs',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: trap oplopen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09B',
    input_label: {
      en: 'How does your knee affect your ability to go down stairs',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: trap aflopen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09C',
    input_label: {
      en: 'How does your knee affect your ability to kneel on the front of your knee',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: op uw knieën zitten?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09D',
    input_label: {
      en: 'How does your knee affect your ability to squat',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: hurken?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09E',
    input_label: {
      en: 'How does your knee affect your ability to sit with your knee bent',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: zitten (met gebogen knieën)?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09F',
    input_label: {
      en: 'How does your knee affect your ability to rise from a chair',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: opstaan uit een stoel?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09G',
    input_label: {
      en: 'How does your knee affect your ability to run straight ahead',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: rechtdoor hardlopen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09H',
    input_label: {
      en: 'How does your knee affect your ability to jump and land on involved leg',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: springen en neerkomen op het aangedane been?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q09I',
    input_label: {
      en: 'How does your knee affect your ability to stop and start quickly',
      nl: 'Hoe moeilijk is de volgende activiteit voor u, door uw knieklachten: snel starten en stoppen bij lopen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'IKDC_Q10_CURRENT_KNEE_FUNCTION',
    input_label: {
      en: 'How would you rate the CURRENT function of your knee on a scale of 0 to 10 with 10 being normal, excellent function and 0 being the inability to perform any of your usual daily activities which may include sports?',
      nl: 'Beoordeel de huidige functie van uw knie op een schaal van 0 tot 10, als 10 normaal/perfecte functie betekent, en 0 betekent dat uw kniefunctie ervoor zorgt dat u geen van uw normale activiteiten kunt uitvoeren (inclusief sport). ',
    },
    input_type: {
      type: 'number',
      range: {
        min: {
          value: 0,
          label: {
            en: 'Cannot perform ADL',
            nl: 'Kan geen dagelijkse activiteiten uitvoeren',
          },
        },
        max: {
          value: 10,
          label: {
            en: 'Limitation of ADL',
            nl: 'Geen beperking in dagelijkse activiteiten',
          },
        },
      },
    },
  },
]
