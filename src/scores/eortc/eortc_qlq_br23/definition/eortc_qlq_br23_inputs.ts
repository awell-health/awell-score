import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../../types'

const ANSWER_TYPE = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
])

const ANSWER_OPTIONS = {
  options: [
    { value: 1, label: { en: 'Not at all' } },
    { value: 2, label: { en: 'A little' } },
    { value: 3, label: { en: 'Quite a bit' } },
    { value: 4, label: { en: 'Very much' } },
  ],
}

export const EORTC_QLQ_BR23_INPUTS = {
  EORTC_QLQ_BR23_Q01: {
    label: { en: 'Did you have a dry mouth during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q02: {
    label: { en: 'Did food and drink taste different than usual during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q03: {
    label: { en: 'Were your eyes painful, irritated or watery during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q04: {
    label: { en: 'Have you lost any hair during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q05: {
    label: { en: 'Were you upset by the loss of your hair during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q06: {
    label: { en: 'Did you feel ill or unwell during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q07: {
    label: { en: 'Did you have hot flushes during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q08: {
    label: { en: 'Did you have headaches during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q09: {
    label: { en: 'Have you felt physically less attractive as a result of your disease or treatment during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q10: {
    label: { en: 'Have you been feeling less feminine as a result of your disease or treatment during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q11: {
    label: { en: 'Did you find it difficult to look at yourself naked during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q12: {
    label: { en: 'Have you been dissatisfied with your body during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q13: {
    label: { en: 'Were you worried about your health in the future during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q14: {
    label: { en: 'To what extent were you interested in sex during the past 4 weeks?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q15: {
    label: { en: 'To what extent were you sexually active during the past 4 weeks? (with or without intercourse)' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q16: {
    label: { en: 'To what extent was sex enjoyable for you during the past 4 weeks?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q17: {
    label: { en: 'Did you have any pain in your arm or shoulder during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q18: {
    label: { en: 'Did you have a swollen arm or hand during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q19: {
    label: { en: 'Was it difficult to raise your arm or to move it sideways during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q20: {
    label: { en: 'Have you had any pain in the area of your affected breast during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q21: {
    label: { en: 'Was the area of your affected breast swollen during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q22: {
    label: { en: 'Was the area of your affected breast oversensitive during the past week?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
  EORTC_QLQ_BR23_Q23: {
    label: { en: 'Have you had skin problems on or in the area of your affected breast during the past week (e.g., itchy, dry, flaky)?' },
    type: ANSWER_TYPE,
    uiOptions: ANSWER_OPTIONS,
  },
} satisfies ScoreInputSchemaType
