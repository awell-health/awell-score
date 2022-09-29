import type { InputType } from '../../../../../types/calculations.types'
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

export const ADDITIONAL_INPUTS: InputType[] = [
  {
    input_id: 'EORTCQLQCR29_Q48',
    input_label: {
      nl: 'Hebt u een stoma (dunnedarm-stoma of dikkedarm-stoma)?',
      en: 'Do you have a stoma bag (colostomy/ileostomy)?',
    },
    input_type: {
      type: 'boolean',
      allowed_answers: [
        { value: true, label: { en: 'Yes', nl: 'Ja' } },
        { value: false, label: { en: 'No', nl: 'Nee' } },
      ],
    },
    required: true,
    info: {
      en: 'The fact that patient has a stoma bag will influence the phrasing of questions 49 to 54. Question 55 is only applicable when patient has a stoma bag.',
    },
  },
]

export const EORTC_QLQ_CR29_SCALES: Array<EORTCScaleType> = [
  {
    id: 'BI',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Voelde u zich de afgelopen week lichamelijk minder aantrekkelijk ten gevolge van uw ziekte of behandeling?',
          en: 'Have you felt physically less attractive as a result of your disease or treatment during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q45',
      },
      {
        input_label: {
          nl: 'Voelde u zich de afgelopen week minder vrouwelijk / mannelijk ten gevolge van uw ziekte of behandeling?',
          en: 'Have you been feeling less feminine/masculine as a result of your disease or treatment during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q46',
      },
      {
        input_label: {
          nl: 'Was u gedurende de afgelopen week ontevreden over uw lichaam?',
          en: 'Have you been dissatisfied with your body during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q47',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'ANX',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u zich gedurende de afgelopen week zorgen gemaakt over uw gezondheid in de toekomst?',
          en: 'Were you worried about your health in the future during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q43',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'WEI',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u zich gedurende de afgelopen wek zorgen gemaakt over uw gewicht?',
          en: 'Have you worried about your weight during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q44',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SEXM',
    scale_type: 'functional',
    score_as: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'In hoeverre had u de afgelopen 4 weken zin in seks?',
          en: 'To what extent were you interested in sex during the past four weeks?',
        },
        info: {
          nl: 'Enkel in te vullen door mannen.',
          en: 'For men only.',
        },
        input_id: 'EORTCQLQCR29_Q56',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SEXW',
    scale_type: 'functional',
    score_as: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'In hoeverre had u de afgelopen 4 weken zin in seks?',
          en: 'To what extent were you interested in sex during the past four weeks?',
        },
        info: {
          nl: 'Enkel in te vullen door vrouwen.',
          en: 'For women only.',
        },
        input_id: 'EORTCQLQCR29_Q58',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'UF',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week overdag geplast?',
          en: 'Did you urinate frequently during the day during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q31',
      },
      {
        input_label: {
          nl: "Hebt u gedurende de afgelopen week 's nachts geplast?",
          en: 'Did you urinate frequently during the night during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q32',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BMS',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week bloed in uw ontlasting gehad?',
          en: 'Have you had blood in your stools during the past week??',
        },
        input_id: 'EORTCQLQCR29_Q38',
      },
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week slijm in uw ontlasting gehad?',
          en: 'Have you had mucus in your stools during the past week??',
        },
        input_id: 'EORTCQLQCR29_Q39',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SF_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week overdag vaak het stomazakje moeten vervangen?',
          en: 'Did frequent bag changes occur during the day during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u een stoma heeft.',
          en: 'Answer this question only when you have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q52_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [false],
        },
      },
      {
        input_label: {
          nl: "Hebt u gedurende de afgelopen week 's nachts vaak het stomazakje moeten vervangen?",
          en: 'Did frequent bag changes occur during the night during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q53_STOMA',
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u een stoma heeft.',
          en: 'Answer this question only when you have a stoma bag.',
        },
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [false],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'SF_NO_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week overdag vaak ontlasting gehad?',
          en: 'Did frequent bowel movements occur during the day during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q52_NO_STOMA',
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u GEEN stoma heeft.',
          en: 'Answer this question only when you DO NOT have a stoma bag.',
        },
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [true],
        },
      },
      {
        input_label: {
          nl: "Hebt u gedurende de afgelopen week 's nachts vaak ontlasting gehad?",
          en: 'Did frequent bowel movements occur during the night during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q53_NO_STOMA',
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u GEEN stoma heeft.',
          en: 'Answer this question only when you DO NOT have a stoma bag.',
        },
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [true],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [true],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'UI',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week ongewild urine verloren?',
          en: 'Have you had any unintentional release (leakage) of urine during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q33',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'DY',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week pijn gehad bij het plassen?',
          en: 'Did you have pain when you urinated during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q34',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'AP',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week buikpijn gehad?',
          en: 'Did you have abdominal pain during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q35',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BP',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week pijn gehad in uw zitvlak of bij uw anus?',
          en: 'Did you have pain in your buttocks/anal area/rectum during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q36',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BF',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week een opgeblazen gevoel gehad in uw buik?',
          en: 'Did you have a bloated feeling in your abdomen during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q37',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'DM',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week een droge mond gehad?',
          en: 'Did you have a dry mouth during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q40',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'HL',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week haaruitval gehad ten gevolge van uw behandeling?',
          en: 'Have you lost hair as a result of your treatment during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q41',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'TA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week problemen met uw smaak gehad?',
          en: 'Have you had problems with your sense of taste during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q42',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'FL_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week last gehad van het ongewild vrijkomen van gas (winderigheid) uit uw stoma?',
          en: 'Have you had unintentional release of gas/flatulence from your stoma bag during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q49_STOMA',
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u een stoma heeft.',
          en: 'Answer this question only when you have a stoma bag.',
        },
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [false],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'FL_NO_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurend de afgelopen week last gehad van ongewild vrijkomen van gas (winderigheid)?',
          en: 'Have you had unintentional release of gas/flatulence from your back passage during the past week?',
        },
        input_id: 'EORTCQLQCR29_Q49_NO_STOMA',
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u GEEN stoma heeft.',
          en: 'Answer this question only when you DO NOT have a stoma bag.',
        },
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [true],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [true],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'FI_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Was er gedurende de afgelopen week lekkage van ontlasting uit uw stomazakje?',
          en: 'Have you had leakage of stools from your stoma bag during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u een stoma heeft.',
          en: 'Answer this question only when you have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q50_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [false],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'FI_NO_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende afgelopen week ongewild ontlasting verloren?',
          en: 'Have you had leakage of stools from your back passage during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u GEEN stoma heeft.',
          en: 'Answer this question only when you DO NOT have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q50_NO_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [true],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [true],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'SS_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week een pijnlijke huid gehad rond uw stoma?',
          en: 'Have you had sore skin around your stoma during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u een stoma heeft.',
          en: 'Answer this question only when you have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q51_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [false],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'SS_NO_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende afgelopen week een pijnlijke huid gehad rondom uw anus?',
          en: 'Have you had sore skin around your anal area during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u GEEN stoma heeft.',
          en: 'Answer this question only when you DO NOT have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q51_NO_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [true],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [true],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'EMB_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Voelde u zich gedurende de afgelopen week opgelaten door uw stoma?',
          en: 'Did you feel embarrassed because of your stoma during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u een stoma heeft.',
          en: 'Answer this question only when you have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q54_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [false],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'EMB_NO_STOMA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Voelde u zich gedurende de afgelopen week opgelaten door uw ontlastingspatroon?',
          en: 'Did you feel embarrassed because of your bowel movement during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u GEEN stoma heeft.',
          en: 'Answer this question only when you DO NOT have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q54_NO_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [true],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [true],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'STO',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Hebt u gedurende de afgelopen week problemen gehad met de verzorging van uw stoma?',
          en: 'Did you have problems caring for your stoma during the past week?',
        },
        info: {
          nl: 'Beantwoord deze vraag enkel wanneer u een stoma heeft.',
          en: 'Answer this question only when you have a stoma bag.',
        },
        input_id: 'EORTCQLQCR29_Q55_STOMA',
        not_applicable_if: {
          input_id: 'EORTCQLQCR29_Q48',
          value_is_one_of: [false],
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTCQLQCR29_Q48',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'IMP',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Indien u de afgelopen 4 weken seksueel actief was (met of zonder geslachtsgemeenschap): had u moeite met stijf worden of blijven van uw penis?',
          en: 'Did you have difficulty getting or maintaining an erection during the past four weeks?',
        },
        info: {
          nl: 'Enkel in te vullen door mannen.',
          en: 'For men only.',
        },
        input_id: 'EORTCQLQCR29_Q57',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'DYS',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_id: 'EORTCQLQCR29_Q59',
        input_label: {
          nl: 'Indien u geslachtsgemeenschap hebt gehad: had u pijn of ongemak tijdens de gemeenschap?',
          en: 'Did you have pain or discomfort during intercourse during the past four weeks?',
        },
        info: {
          nl: 'Enkel in te vullen door vrouwen.',
          en: 'For women only.',
        },
      },
    ].map(add_allowed_answers),
  },
]
