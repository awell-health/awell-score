import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const YES_ANSWER = 1
const NO_ANSWER = 0
const NOT_SURE_ANSWER = 2
export const NO_TREATMENT = 999

const type = {
  type: z.union([
    z.literal(NO_ANSWER),
    z.literal(YES_ANSWER),
    z.literal(NOT_SURE_ANSWER),
  ]),
  uiOptions: {
    options: [
      { value: NO_ANSWER, label: { en: 'No' } },
      { value: YES_ANSWER, label: { en: 'Yes' } },
      { value: NOT_SURE_ANSWER, label: { en: 'Not sure' } },
    ],
  },
} satisfies EnumNumberInputType

export const IBD_CONTROL_INPUTS = {
  ibd_control_1a: {
    label: {
      nl: 'Gelooft u dat uw darmaandoening goed onder controle is de laatste 2 weken?',
      en: 'Do you believe that your IBD has been well controlled in the past two weeks?',
    },
    ...type,
  },
  ibd_control_1b: {
    label: {
      nl: 'Gelooft u dat uw huidige behandeling nuttig is voor de controle van uw darmklachten?',
      en: 'Do you believe that your current treatment is useful in controlling IBD?',
    },
    type: z.union([
      z.literal(NO_ANSWER),
      z.literal(YES_ANSWER),
      z.literal(NOT_SURE_ANSWER),
      z.literal(NO_TREATMENT),
    ]),
    uiOptions: {
      options: [
        { value: NO_ANSWER, label: { en: 'No' } },
        { value: YES_ANSWER, label: { en: 'Yes' } },
        { value: NOT_SURE_ANSWER, label: { en: 'Not sure' } },
        {
          value: NO_TREATMENT,
          label: {
            en: "I'm not taking any treatment at the moment",
            nl: 'Ik onderga momenteel (nog) geen behandeling',
          },
        },
      ],
    },
    info: {
      en: `Answer "no_treatment" (999) will be recoded to a value of 1.`,
    },
  },
  ibd_control_3a: {
    label: {
      nl: 'Hebt u in de laatste 2 weken geplande activiteiten gemist omwille van uw darmaandoening (school/werk/uitstap/…)?',
      en: 'In the past 2 weeks, did you miss any planned activities because of IBD?',
    },
    ...type,
  },
  ibd_control_3b: {
    label: {
      nl: 'Bent u in de laatste 2 weken ’s nachts wakker geworden omwille van uw darmklachten?',
      en: 'In the past 2 weeks, did you wake up at night because of symptoms of IBD?',
    },
    ...type,
  },
  ibd_control_3c: {
    label: {
      nl: 'Hebt u in de laatste 2 weken last gehad van pijn of ongemak?',
      en: 'In the past 2 weeks, did you suffer from signifcant pain or discomfort?',
    },
    ...type,
  },
  ibd_control_3d: {
    label: {
      nl: 'Hebt u in de laatste 2 weken vaak (= meer dan de helft van de tijd) een gebrek aan energie bemerkt (vermoeidheid)?',
      en: 'In the past 2 weeks, did youoften feel lacking in energy (fatigued)?',
    },
    ...type,
  },
  ibd_control_3e: {
    label: {
      nl: 'Hebt u in de laatste 2 weken vaak een angstig of depressief gevoel gehad omwille van uw darmaandoening?',
      en: 'In the past 2 weeks, did you feel anxious or depressed because of your IBD?',
    },
    ...type,
  },
  ibd_control_3f: {
    label: {
      nl: 'Hebt u in de laatste 2 weken gedacht dat uw behandeling dient te worden aangepast?',
      en: 'In the past 2 weeks, did you think you needed a change to your treatment?',
    },
    ...type,
  },
  ibd_control_5: {
    label: {
      nl: 'Hoe scoort u de totale controle van uw darmprobleem over de laatste 2 weken? Gelieve een punt op onderstaande lijn te markeren door het bolletje te verschuiven.',
      en: 'How would you rate your OVERALL control of your IBD in the past two weeks?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: {
            en: 'Worst possible control',
            nl: 'Slechtst mogelijke controle',
          },
        },
        max: {
          label: { en: 'Best possible control', nl: 'Best mogelijke controle' },
        },
      },
    },
    info: { en: 'IBD-Control-VAS' },
  },
} satisfies ScoreInputSchemaType
