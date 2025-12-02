import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

// Shared answer options
const SHARED_ANSWER_OPTIONS = {
  // Quality of life scale (Q1)
  QUALITY_SCALE: [
    { value: 1, label: { en: 'Very poor', pl: 'Bardzo zła' } },
    { value: 2, label: { en: 'Poor', pl: 'Zła' } },
    { value: 3, label: { en: 'Neither poor nor good', pl: 'Ani dobra, ani zła' } },
    { value: 4, label: { en: 'Good', pl: 'Dobra' } },
    { value: 5, label: { en: 'Very good', pl: 'Bardzo dobra' } },
  ],
  // Satisfaction scale (Q2, Q16-Q25)
  SATISFACTION_SCALE: [
    { value: 1, label: { en: 'Very dissatisfied', pl: 'Bardzo niezadowolona/niezadowolony' } },
    { value: 2, label: { en: 'Dissatisfied', pl: 'Niezadowolona/niezadowolony' } },
    { value: 3, label: { en: 'Neither satisfied nor dissatisfied', pl: 'Ani zadowolona/y, ani niezadowolona/y' } },
    { value: 4, label: { en: 'Satisfied', pl: 'Zadowolona/zadowolony' } },
    { value: 5, label: { en: 'Very satisfied', pl: 'Bardzo zadowolona/zadowolony' } },
  ],
  // Intensity scale - STANDARD (Q5-Q6: higher is better)
  INTENSITY_SCALE_STANDARD: [
    { value: 1, label: { en: 'Not at all', pl: 'Wcale' } },
    { value: 2, label: { en: 'A little', pl: 'Nieco' } },
    { value: 3, label: { en: 'A moderate amount', pl: 'Średnio' } },
    { value: 4, label: { en: 'Very much', pl: 'W dużym stopniu' } },
    { value: 5, label: { en: 'An extreme amount', pl: 'W bardzo dużym stopniu' } },
  ],
  // Intensity scale - REVERSED (Q3-Q4: higher is better, but question is negative)
  // Note: Polish questionnaire already has reversed values (5=best)
  INTENSITY_SCALE_REVERSED: [
    { value: 5, label: { en: 'Not at all', pl: 'Wcale' } },
    { value: 4, label: { en: 'A little', pl: 'Nieco' } },
    { value: 3, label: { en: 'A moderate amount', pl: 'Średnio' } },
    { value: 2, label: { en: 'Very much', pl: 'W dużym stopniu' } },
    { value: 1, label: { en: 'An extreme amount', pl: 'W bardzo dużym stopniu' } },
  ],
  // Ability scale (Q7-Q9)
  ABILITY_SCALE: [
    { value: 1, label: { en: 'Not at all', pl: 'Wcale' } },
    { value: 2, label: { en: 'A little', pl: 'Nieco' } },
    { value: 3, label: { en: 'Moderately', pl: 'Średnio' } },
    { value: 4, label: { en: 'Very much', pl: 'Dość dobrze' } },
    { value: 5, label: { en: 'Extremely', pl: 'Bardzo dobrze' } },
  ],
  // Completeness scale (Q10-Q14)
  COMPLETENESS_SCALE: [
    { value: 1, label: { en: 'Not at all', pl: 'Wcale' } },
    { value: 2, label: { en: 'A little', pl: 'Nieco' } },
    { value: 3, label: { en: 'Moderately', pl: 'Umiarkowanie' } },
    { value: 4, label: { en: 'Mostly', pl: 'Przeważnie' } },
    { value: 5, label: { en: 'Completely', pl: 'W pełni' } },
  ],
  // Functioning scale (Q15)
  FUNCTIONING_SCALE: [
    { value: 1, label: { en: 'Very poor', pl: 'Bardzo źle' } },
    { value: 2, label: { en: 'Poor', pl: 'Źle' } },
    { value: 3, label: { en: 'Neither poor nor good', pl: 'Ani dobrze, ani źle' } },
    { value: 4, label: { en: 'Good', pl: 'Dobrze' } },
    { value: 5, label: { en: 'Very good', pl: 'Bardzo dobrze' } },
  ],
  // Frequency scale - REVERSED (Q26: higher value is better, but asks about negative feelings)
  // Note: Polish questionnaire already has reversed values (5=never is best)
  FREQUENCY_SCALE_REVERSED: [
    { value: 5, label: { en: 'Never', pl: 'Nigdy' } },
    { value: 4, label: { en: 'Seldom', pl: 'Rzadko' } },
    { value: 3, label: { en: 'Quite often', pl: 'Często' } },
    { value: 2, label: { en: 'Very often', pl: 'Bardzo często' } },
    { value: 1, label: { en: 'Always', pl: 'Zawsze' } },
  ],
}

const ONE_TO_FIVE = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]).optional()

export const WHOQOL_BREF_INPUTS = {
  WHOQOL_BREF_Q01: {
    label: {
      en: 'How would you rate your quality of life?',
      pl: 'Jaka jest Pani/Pana jakość życia?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.QUALITY_SCALE,
    },
  },
  WHOQOL_BREF_Q02: {
    label: {
      en: 'How satisfied are you with your health?',
      pl: 'Czy jest Pani/Pan zadowolona/zadowolony ze swojego zdrowia?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q03: {
    label: {
      en: 'To what extent do you feel that (physical) pain prevents you from doing what you need to do?',
      pl: 'Jak ból fizyczny przeszkadzał Pani/Panu robić to, co Pani/Pan powinien?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.INTENSITY_SCALE_REVERSED,
    },
  },
  WHOQOL_BREF_Q04: {
    label: {
      en: 'How much do you need any medical treatment to function in your daily life?',
      pl: 'W jakim stopniu potrzebuje Pani/Pan leczenia medycznego do codziennego funkcjonowania?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.INTENSITY_SCALE_REVERSED,
    },
  },
  WHOQOL_BREF_Q05: {
    label: {
      en: 'How much do you enjoy life?',
      pl: 'Ile ma Pani/Pan radości w życiu?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.INTENSITY_SCALE_STANDARD,
    },
  },
  WHOQOL_BREF_Q06: {
    label: {
      en: 'To what extent do you feel your life to be meaningful?',
      pl: 'W jakim stopniu ocenia Pani/Pan, że Pani/Pana życie ma sens?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.INTENSITY_SCALE_STANDARD,
    },
  },
  WHOQOL_BREF_Q07: {
    label: {
      en: 'How well are you able to concentrate?',
      pl: 'Czy dobrze koncentruje Pani/Pan uwagę?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.ABILITY_SCALE,
    },
  },
  WHOQOL_BREF_Q08: {
    label: {
      en: 'How safe do you feel in your daily life?',
      pl: 'Jak bezpiecznie czuje się Pani/Pan w swoim codziennym życiu?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.ABILITY_SCALE,
    },
  },
  WHOQOL_BREF_Q09: {
    label: {
      en: 'How healthy is your physical environment?',
      pl: 'W jakim stopniu Pani/Pana otoczenie sprzyja zdrowiu?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.ABILITY_SCALE,
    },
  },
  WHOQOL_BREF_Q10: {
    label: {
      en: 'Do you have enough energy for everyday life?',
      pl: 'Czy ma Pani/Pan wystarczająco energii w codziennym życiu?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.COMPLETENESS_SCALE,
    },
  },
  WHOQOL_BREF_Q11: {
    label: {
      en: 'Are you able to accept your bodily appearance?',
      pl: 'Czy jest Pani/Pan w stanie zaakceptować swój wygląd (fizyczny)?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.COMPLETENESS_SCALE,
    },
  },
  WHOQOL_BREF_Q12: {
    label: {
      en: 'Have you enough money to meet your needs?',
      pl: 'Czy ma Pani/Pan wystarczająco dużo pieniędzy na swoje potrzeby?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.COMPLETENESS_SCALE,
    },
  },
  WHOQOL_BREF_Q13: {
    label: {
      en: 'How available to you is the information that you need in your day-to-day life?',
      pl: 'Na ile dostępne są informacje, których może Pani/Pan potrzebować w codziennym życiu?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.COMPLETENESS_SCALE,
    },
  },
  WHOQOL_BREF_Q14: {
    label: {
      en: 'To what extent do you have the opportunity for leisure activities?',
      pl: 'W jakim zakresie ma Pani/Pan sposobność realizowania swoich zainteresowań?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.COMPLETENESS_SCALE,
    },
  },
  WHOQOL_BREF_Q15: {
    label: {
      en: 'How well are you able to get around?',
      pl: 'Jak odnajduje się Pani/Pan w tej sytuacji?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.FUNCTIONING_SCALE,
    },
  },
  WHOQOL_BREF_Q16: {
    label: {
      en: 'How satisfied are you with your sleep?',
      pl: 'Czy jest Pani/Pan zadowolona/zadowolony ze swojego snu?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q17: {
    label: {
      en: 'How satisfied are you with your ability to perform your daily living activities?',
      pl: 'W jakim stopniu jest Pani/Pan zadowolona/zadowolony ze swojej wydolności w życiu codziennym?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q18: {
    label: {
      en: 'How satisfied are you with your capacity for work?',
      pl: 'W jakim stopniu jest Pani/Pan zadowolona/zadowolony ze swojej zdolności (gotowości) do pracy?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q19: {
    label: {
      en: 'How satisfied are you with yourself?',
      pl: 'Czy jest Pani/Pan zadowolona/zadowolony z siebie?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q20: {
    label: {
      en: 'How satisfied are you with your personal relationships?',
      pl: 'Czy jest Pani/Pan zadowolona/zadowolony ze swoich osobistych relacji z ludźmi?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q21: {
    label: {
      en: 'How satisfied are you with your sex life?',
      pl: 'Czy jest Pani/Pan zadowolona/zadowolony ze swojego życia intymnego?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q22: {
    label: {
      en: 'How satisfied are you with the support you get from your friends?',
      pl: 'Czy jest Pani/Pan zadowolona/zadowolony z oparcia, wsparcia, jakie dostaje Pani/Pan od swoich przyjaciół?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q23: {
    label: {
      en: 'How satisfied are you with the conditions of your living place?',
      pl: 'Jak bardzo jest Pani/Pan zadowolona/zadowolony ze swoich warunków mieszkaniowych?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q24: {
    label: {
      en: 'How satisfied are you with your access to health services?',
      pl: 'Jak bardzo jest Pani/Pan zadowolona/zadowolony z placówek służby zdrowia?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q25: {
    label: {
      en: 'How satisfied are you with your transport?',
      pl: 'Czy jest Pani/Pan zadowolona/zadowolony z komunikacji (transportu)?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.SATISFACTION_SCALE,
    },
  },
  WHOQOL_BREF_Q26: {
    label: {
      en: 'How often do you have negative feelings such as blue mood, despair, anxiety, depression?',
      pl: 'Jak często doświadczała Pani/Pan negatywnych uczuć, takich jak przygnębienie, rozpacz, lęk, depresja?',
    },
    type: ONE_TO_FIVE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.FREQUENCY_SCALE_REVERSED,
    },
  },
} satisfies ScoreInputSchemaType
