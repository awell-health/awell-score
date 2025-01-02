import type { AuditScaleType } from '../../../src/types/calculations/subscales/custom/audit.types'

const INPUT_TYPES: Record<string, any> = {
  input_1: {
    type: 'number',
    allowed_answers: [
      { value: 0, label: { nl: 'Nooit', en: 'Never' } },
      {
        value: 1,
        label: { nl: 'Maandelijks of minder', en: 'Monthly or less' },
      },
      {
        value: 2,
        label: { nl: '2 of 4 keer per maand', en: '2-4 times a months' },
      },
      {
        value: 3,
        label: { nl: '2 of 3 keer per week', en: '2-3 times a week' },
      },
      {
        value: 4,
        label: { nl: '4 of meer keer per week', en: '4 or more times a week' },
      },
    ],
  },
  input_2: {
    type: 'number',
    allowed_answers: [
      { value: 0, label: { nl: '1 of 2', en: '1 or 2' } },
      { value: 1, label: { nl: '3 of 4', en: '3 or 4' } },
      { value: 2, label: { nl: '5 of 6', en: '5 or 6' } },
      { value: 3, label: { nl: '7 of 9', en: '7 to 9' } },
      { value: 4, label: { nl: '10 of meer', en: '10 or more' } },
    ],
  },
  inputs_3_to_8: {
    type: 'number',
    allowed_answers: [
      { value: 0, label: { nl: 'Nooit', en: 'Never' } },
      {
        value: 1,
        label: { nl: 'Minder dan maandelijks', en: 'Less than monthly' },
      },
      { value: 2, label: { nl: 'Maandelijks', en: 'Monthly' } },
      { value: 3, label: { nl: 'Wekelijks', en: 'Weekly' } },
      {
        value: 4,
        label: {
          nl: 'Dagelijks of bijna dagelijks',
          en: 'Daily or almost daily',
        },
      },
    ],
  },
  inputs_9_and_10: {
    type: 'number',
    allowed_answers: [
      { value: 0, label: { nl: 'Nooit', en: 'No' } },
      {
        value: 2,
        label: {
          nl: 'Ja, maar niet in het laatste jaar',
          en: 'Yes, but not in the last year',
        },
      },
      {
        value: 4,
        label: {
          nl: 'Ja, in het laatste jaar',
          en: 'Yes, during the last year',
        },
      },
    ],
  },
}

export const AUDIT_SUBSCALES: Array<AuditScaleType> = [
  {
    id: 'CONSUMPTION',
    input_ids_in_subscale: [
      {
        input_id: 'AUDIT_Q01',
        type: INPUT_TYPES.input_1,
        label: {
          nl: 'Hoe vaak drink je alcohol?',
          en: 'How often do you have a drink containing alcohol?',
        },
      },
      {
        input_id: 'AUDIT_Q02',
        type: INPUT_TYPES.input_2,
        label: {
          nl: 'Wanneer je drinkt, hoeveel standaardglazen* drink je dan gewoonlijk op een dag?',
          en: 'How many standard drinks do you have on a typical day when you are drinking?',
        },
        not_applicable_if: {
          input_id: 'AUDIT_Q01',
          value_is_one_of: [0],
        },
      },
      {
        input_id: 'AUDIT_Q03',
        type: INPUT_TYPES.inputs_3_to_8,
        label: {
          nl: 'Hoe vaak gebeurt het dat je zes of meer standaardglazen drinkt bij één enkele gelegenheid?',
          en: 'How often do you have six or more standard drinks on one occasion?',
        },
        not_applicable_if: {
          input_id: 'AUDIT_Q01',
          value_is_one_of: [0],
        },
      },
    ],
    min_score: 0,
    median_score: 6,
    max_score: 12,
  },
  {
    id: 'DEPENDENCE',
    input_ids_in_subscale: [
      {
        input_id: 'AUDIT_Q04',
        type: INPUT_TYPES.inputs_3_to_8,
        label: {
          nl: 'Hoe vaak had je het afgelopen jaar het gevoel dat je, van zodra je begon, niet meer kon stoppen met drinken?',
          en: 'How often during the last year have you found that you were not able to stop drinking once you had started?',
        },
        not_applicable_if: { input_id: 'AUDIT_Q01', value_is_one_of: [0] },
      },
      {
        input_id: 'AUDIT_Q05',
        type: INPUT_TYPES.inputs_3_to_8,
        label: {
          nl: 'Hoe vaak ben je er, door je drinkgedrag, het afgelopen jaar niet in geslaagd te doen wat normaal van je werd verwacht?',
          en: 'How often during the last year have you failed to do what was normally expected of you because of drinking?',
        },
        not_applicable_if: { input_id: 'AUDIT_Q01', value_is_one_of: [0] },
      },
      {
        input_id: 'AUDIT_Q06',
        type: INPUT_TYPES.inputs_3_to_8,
        label: {
          nl: 'Hoe vaak heb je het afgelopen jaar ’s morgens behoefte gehad aan alcohol om jezelf er weer bovenop te helpen nadat je zwaar was doorgezakt?',
          en: 'How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?',
        },
        not_applicable_if: { input_id: 'AUDIT_Q01', value_is_one_of: [0] },
      },
    ],
    min_score: 0,
    median_score: 6,
    max_score: 12,
  },
  {
    id: 'ALCOHOL_RELATED_PROBLEMS',
    input_ids_in_subscale: [
      {
        input_id: 'AUDIT_Q07',
        type: INPUT_TYPES.inputs_3_to_8,
        label: {
          nl: 'Hoe vaak heb je het afgelopen jaar schuld of berouw gevoeld nadat je gedronken had?',
          en: 'How often during the last year have you had a feeling of guilt or remorse after drinking?',
        },
        not_applicable_if: { input_id: 'AUDIT_Q01', value_is_one_of: [0] },
      },
      {
        input_id: 'AUDIT_Q08',
        type: INPUT_TYPES.inputs_3_to_8,
        label: {
          nl: 'Hoe vaak kon je je het afgelopen jaar de gebeurtenissen van de avond voordien niet herinneren omdat je gedronken had?',
          en: 'How often during the last year have you been unable to remember what happened the night before because you had been drinking?',
        },
        not_applicable_if: { input_id: 'AUDIT_Q01', value_is_one_of: [0] },
      },
      {
        input_id: 'AUDIT_Q09',
        type: INPUT_TYPES.inputs_9_and_10,
        label: {
          nl: 'Raakte jij zelf of iemand anders ooit gewond ten gevolge van je drinkgedrag?',
          en: 'Have you or someone else been injured because of your drinking?',
        },
      },
      {
        input_id: 'AUDIT_Q10',
        type: INPUT_TYPES.inputs_9_and_10,
        label: {
          nl: 'Heeft een vriend, dokter of andere gezondheidswerker zich ooit zorgen gemaakt over je drinkgedrag of je aangeraden minder te drinken?',
          en: 'Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?',
        },
      },
    ],
    min_score: 0,
    median_score: 8,
    max_score: 16,
  },
]
