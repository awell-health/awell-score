import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import { NOT_APPLICABLE_MESSAGE } from '../../../../PARAMETERS'
import { DEFAULT_ALLOWED_ANSWER_VALUES } from '../../common/eortc_parameters'

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  input_type: {
    type: 'number',
    allowed_answers: DEFAULT_ALLOWED_ANSWER_VALUES,
  },
})

/**
 * Question 1 = Item 31 in EORTC BR23 questionnaire
 * Question 2 = Item 32
 * Question 23 = Item 53
 */
export const EORTC_QLQ_BR23_SCALES: Array<EORTCScaleType> = [
  {
    id: 'BRBI',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Voelde u zich gedurende de afgelopen week lichamelijk minder aantrekkelijk ten gevolge van uw ziekte of behandeling?',
          en: 'Have you felt physically less attractive as a result of your disease or treatment during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q9',
      },
      {
        input_label: {
          nl: 'Voelde u zich gedurende de afgelopen week minder vrouwelijk ten gevolge van uw ziekte of behandeling?',
          en: 'Have you been feeling less feminine as a result of your disease or treatment during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q10',
      },
      {
        input_label: {
          nl: 'Vond u het gedurende de afgelopen week moeilijk om uzelf naakt te zien?',
          en: 'Did you find it difficult to look at yourself naked during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q11',
      },
      {
        input_label: {
          nl: 'Was u gedurende de afgelopen week ontevreden met uw lichaam?',
          en: 'Have you been dissatisfied with your body during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q12',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BRSEF',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'In hoeverre had u gedurende de afgelopen vier weken zin in seks?',
          en: 'To what extent were you interested in sex during the past 4 weeks?',
        },
        input_id: 'EORTC_QLQ_BR23_Q14',
        inverse: true,
      },
      {
        input_label: {
          nl: 'In hoeverre was u gedurende de afgelopen vier weken seksueel actief? (met of zonder geslachtsgemeenschap)',
          en: 'To what extent were you sexually active during the past 4 weeks? (with or without intercourse)',
        },
        input_id: 'EORTC_QLQ_BR23_Q15',
        inverse: true,
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BRSEE',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'In hoeverre was seks gedurende de afgelopen 4 weken plezierig voor u?',
          en: 'To what extent was sex enjoyable for you during the past 4 weeks?',
        },
        input_id: 'EORTC_QLQ_BR23_Q16',
        inverse: true,
        info: {
          nl: 'Deze vraag alleen invullen indien u seksueel actief was.',
          en: 'Answer this question only if you have been sexually active.',
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTC_QLQ_BR23_Q15',
        value_is_one_of: [1],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'BRFU',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Maakte u zich gedurende de afgelopen week zorgen over uw gezondheid in de toekomst?',
          en: 'Were you worried about your health in the future during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q13',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BRST',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Had u gedurende de afgelopen week een droge mond?',
          en: 'Did you have a dry mouth during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q1',
      },
      {
        input_label: {
          nl: 'Was gedurende de afgelopen week de smaak van voedsel en drank anders dan u gewend was?',
          en: 'Did food and drink taste different than usual during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q2',
      },
      {
        input_label: {
          nl: 'Had u gedurende de afgelopen week pijnlijke, geïrriteerde of tranende ogen?',
          en: 'Were your eyes painful, irritated or watery during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q3',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week haaruitval gehad?',
          en: 'Have you lost any hair during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q4',
        info: {
          en: 'If "EORTC_QLQ_BR23_Q4" = 1 then subscale "Upset by hair loss" will not be applicable.',
        },
      },
      {
        input_label: {
          nl: 'Voelde u zich gedurende de afgelopen week ziek of onwel? ',
          en: 'Did you feel ill or unwell during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q6',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week opvliegers gehad?',
          en: 'Did you have hot flushes during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q7',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week hoofdpijn gehad?',
          en: 'Did you have headaches during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q8',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BRBS',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week pijn gehad in het gebied van uw aangedane borst?',
          en: 'Have you had any pain in the area of your affected breast during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q20',
      },
      {
        input_label: {
          nl: 'Was het gebied van uw aangedane borst gedurende de afgelopen week gezwollen?',
          en: 'Was the area of your affected breast swollen during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q21',
      },
      {
        input_label: {
          nl: 'Was het gebied van uw aangedane borst gedurende de afgelopen week overgevoelig?',
          en: 'Was the area of your affected breast oversensitive during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q22',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week huidproblemen gehad in het gebied van uw aangedane borst (bijv. jeukerig, droog of schilferachtig)?',
          en: 'Have you had skin problems on or in the area of your affected breast during the past week (e.g., itchy, dry, flaky)?',
        },
        input_id: 'EORTC_QLQ_BR23_Q23',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BRAS',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Had u gedurende de afgelopen week pijn in uw arm of schouder?',
          en: 'Did you have any pain in your arm or shoulder during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q17',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week een gezwollen arm of hand gehad?',
          en: 'Did you have a swollen arm or hand during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q18',
      },
      {
        input_label: {
          nl: 'Was het gedurende de afgelopen week moeilijk om uw arm naar omhoog of opzij te bewegen?',
          en: 'Was it difficult to raise your arm or to move it sideways during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q19',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BRHL',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Was u gedurende de afgelopen week door het verlies van uw haar van streek?',
          en: 'Were you upset by the loss of your hair during the past week?',
        },
        input_id: 'EORTC_QLQ_BR23_Q5',
        info: {
          nl: 'Deze vraag alleen invullen indien u haaruitval heeft gehad.',
          en: 'Answer this question only if you had any hair loss.',
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTC_QLQ_BR23_Q4',
        value_is_one_of: [1],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
]
