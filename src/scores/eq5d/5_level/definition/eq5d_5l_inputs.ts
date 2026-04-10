import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../../types'

export const EQ5D_5L_INPUTS = {
  eq5d_5l_mobility: {
    label: { nl: 'Mobiliteit', en: 'Mobility', pl: 'Poruszanie się' },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met lopen',
            en: 'I have no problems in walking about',
            pl: 'Nie mam żadnych problemów z chodzeniem',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje problemen met lopen',
            en: 'I have slight problems in walking about',
            pl: 'Mam niewielkie problemy z chodzeniem',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige problemen met lopen',
            en: 'I have moderate problems in walking about',
            pl: 'Mam umiarkowane problemy z chodzeniem',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige problemen met lopen',
            en: 'I have severe problems in walking about',
            pl: 'Mam poważne problemy z chodzeniem',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben niet in staat om te lopen',
            en: 'I am unable to walk about',
            pl: 'Nie jestem w stanie chodzić',
          },
        },
      ],
    },
  },
  eq5d_5l_selfcare: {
    label: { nl: 'Zelfzorg', en: 'Self-care', pl: 'Samoobsługa' },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met mijzelf wassen of aankleden',
            en: 'I have no problems washing or dressing myself',
            pl: 'Nie mam żadnych problemów z myciem i ubieraniem się',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje problemen met mijzelf wassen of aankleden',
            en: 'I have slight problems washing or dressing myself',
            pl: 'Mam niewielkie problemy z myciem i ubieraniem się',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige problemen met mijzelf wassen of aankleden',
            en: 'I have moderate problems washing or dressing myself',
            pl: 'Mam umiarkowane problemy z myciem i ubieraniem się',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige problemen met mijzelf wassen of aankleden',
            en: 'I have severe problems washing or dressing myself',
            pl: 'Mam poważne problemy z myciem i ubieraniem się',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben niet in staat mijzelf te wassen of aan te kleden',
            en: 'I am unable to wash or dress myself',
            pl: 'Nie mogę sam/a się umyć ani ubrać',
          },
        },
      ],
    },
  },
  eq5d_5l_usual: {
    label: {
      nl: 'Dagelijkse activiteiten (bijv. werk, studie, huishouden, gezins- en vrijetijdsactiviteiten)',
      en: 'Usual activities (e.g. work, study, housework, family or leisure activities)',
      pl: 'Zwykłe czynności (np. praca, nauka, zajęcia domowe, aktywności rodzinne, zajęcia w czasie wolnym)',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen problemen met mijn dagelijkse activiteiten',
            en: 'I have no problems doing my usual activities',
            pl: 'Nie mam żadnych problemów z wykonywaniem moich zwykłych czynności',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje problemen met mijn dagelijkse activiteiten',
            en: 'I have slight problems doing my usual activities',
            pl: 'Mam niewielkie problemy z wykonywaniem moich zwykłych czynności',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige problemen met mijn dagelijkse activiteiten ',
            en: 'I have moderate problems doing my usual activities',
            pl: 'Mam umiarkowane problemy z wykonywaniem moich zwykłych czynności',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige problemen met mijn dagelijkse activiteiten',
            en: 'I have severe problems doing my usual activities',
            pl: 'Mam poważne problemy z wykonywaniem moich zwykłych czynności',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben niet in staat mijn dagelijkse activiteiten uit te voeren ',
            en: 'I am unable to do my usual activities',
            pl: 'Nie jestem w stanie wykonywać moich zwykłych czynności',
          },
        },
      ],
    },
  },
  eq5d_5l_pain: {
    label: { nl: 'Pijn/ongemak', en: 'Pain/discomfort', pl: 'Ból / Dyskomfort' },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            nl: 'Ik heb geen pijn of ongemak',
            en: 'I have no pain or discomfort',
            pl: 'Nie odczuwam żadnego bólu ani dyskomfortu',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik heb een beetje pijn of ongemak',
            en: 'I have slight pain or discomfort',
            pl: 'Odczuwam niewielki ból lub dyskomfort',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik heb matige pijn of ongemak',
            en: 'I have moderate pain or discomfort',
            pl: 'Odczuwam umiarkowany ból lub dyskomfort',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik heb ernstige pijn of ongemak',
            en: 'I have severe pain or discomfort',
            pl: 'Odczuwam silny ból lub dyskomfort',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik heb extreme pijn of ongemak',
            en: 'I have extreme pain or discomfort',
            pl: 'Odczuwam krańcowy ból lub dyskomfort',
          },
        },
      ],
    },
  },
  eq5d_5l_anxiety: {
    label: {
      nl: 'Angst/somberheid',
      en: 'Anxiety/depression',
      pl: 'Niepokój / Przygnębienie',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            nl: 'Ik ben niet angstig of somber',
            en: 'I am not anxious or depressed',
            pl: 'Nie jestem niespokojny/a ani przygnębiony/a',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ik ben een beetje angstig of somber',
            en: 'I am slightly anxious or depressed',
            pl: 'Jestem trochę niespokojny/a lub przygnębiony/a',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Ik ben matig angstig of somber',
            en: 'I am moderately anxious or depressed',
            pl: 'Jestem umiarkowanie niespokojny/a lub przygnębiony/a',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ik ben erg angstig of somber',
            en: 'I am severely anxious or depressed',
            pl: 'Jestem bardzo niespokojny/a lub przygnębiony/a',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Ik ben extreem angstig of somber',
            en: 'I am extremely anxious or depressed',
            pl: 'Jestem krańcowo niespokojny/a lub przygnębiony/a',
          },
        },
      ],
    },
  },
  eq5d_5l_vas: {
    label: {
      nl: '- We willen weten hoe goed of slecht uw gezondheid VANDAAG is.\n- Deze meetschaal loopt van 0 tot 100.\n-100 staat voor de beste gezondheid die u zich kunt voorstellen. 0 staat voor de slechtste gezondheid die u zich kunt voorstellen.\n- Duid op de meetschaal aan hoe uw gezondheid VANDAAG is.',
      en: '- We would like to know how good or bad your health is TODAY.\n- This scale is numbered from 0 to 100\n- 100 means the best health you can imagine; 0 means the worst health you can imagine\n- Indicate on the scale how your health is TODAY.',
      pl: '- Chcielibyśmy wiedzieć jak dobre lub jak złe jest Pana/Pani zdrowie DZISIAJ.',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: {
          label: {
            nl: 'De slechtste gezondheid die u zich kunt voorstellen',
            en: 'The worst health you can imagine',
            pl: 'Najgorsze zdrowie jakie można sobie wyobrazić',
          },
          value: 0,
        },
        max: {
          label: {
            nl: 'De beste gezondheid die u zich kunt voorstellen',
            en: 'The best health you can imagine',
            pl: 'Najlepsze zdrowie jakie można sobie wyobrazić',
          },
          value: 100,
        },
      },
    },
  },
} satisfies ScoreInputSchemaType
