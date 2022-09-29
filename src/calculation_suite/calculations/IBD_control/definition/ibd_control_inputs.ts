import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const YES_ANSWER = 1
const NO_ANSWER = 0
const NOT_SURE_ANSWER = 2
export const NO_TREATMENT = 999

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: NO_ANSWER, label: { en: 'No' } },
    { value: YES_ANSWER, label: { en: 'Yes' } },
    { value: NOT_SURE_ANSWER, label: { en: 'Not sure' } },
  ],
}

export const IBD_CONTROL_INPUTS: Array<InputType> = [
  {
    input_id: 'ibd_control_1a',
    input_label: {
      nl: 'Gelooft u dat uw darmaandoening goed onder controle is de laatste 2 weken?',
      en: 'Do you believe that your IBD has been well controlled in the past two weeks?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ibd_control_1b',
    input_label: {
      nl: 'Gelooft u dat uw huidige behandeling nuttig is voor de controle van uw darmklachten?',
      en: 'Do you believe that your current treatment is useful in controlling IBD?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
    required: true,
  },
  {
    input_id: 'ibd_control_3a',
    input_label: {
      nl: 'Hebt u in de laatste 2 weken geplande activiteiten gemist omwille van uw darmaandoening (school/werk/uitstap/…)?',
      en: 'In the past 2 weeks, did you miss any planned activities because of IBD?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ibd_control_3b',
    input_label: {
      nl: 'Bent u in de laatste 2 weken ’s nachts wakker geworden omwille van uw darmklachten?',
      en: 'In the past 2 weeks, did you wake up at night because of symptoms of IBD?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ibd_control_3c',
    input_label: {
      nl: 'Hebt u in de laatste 2 weken last gehad van pijn of ongemak?',
      en: 'In the past 2 weeks, did you suffer from signifcant pain or discomfort?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ibd_control_3d',
    input_label: {
      nl: 'Hebt u in de laatste 2 weken vaak (= meer dan de helft van de tijd) een gebrek aan energie bemerkt (vermoeidheid)?',
      en: 'In the past 2 weeks, did youoften feel lacking in energy (fatigued)?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ibd_control_3e',
    input_label: {
      nl: 'Hebt u in de laatste 2 weken vaak een angstig of depressief gevoel gehad omwille van uw darmaandoening?',
      en: 'In the past 2 weeks, did you feel anxious or depressed because of your IBD?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ibd_control_3f',
    input_label: {
      nl: 'Hebt u in de laatste 2 weken gedacht dat uw behandeling dient te worden aangepast?',
      en: 'In the past 2 weeks, did you think you needed a change to your treatment?',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'ibd_control_5', // IBD-Control-VAS input
    input_label: {
      nl: 'Hoe scoort u de totale controle van uw darmprobleem over de laatste 2 weken? Gelieve een punt op onderstaande lijn te markeren door het bolletje te verschuiven.',
      en: 'How would you rate your OVERALL control of your IBD in the past two weeks?',
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: {
            en: 'Worst possible control',
            nl: 'Slechtst mogelijke controle',
          },
        },
        max: {
          value: 100,
          label: { en: 'Best possible control', nl: 'Best mogelijke controle' },
        },
      },
    },
    info: { en: 'IBD-Control-VAS' },
    required: true,
  },
]
