import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import { NOT_APPLICABLE_MESSAGE } from '../../../../PARAMETERS'
import { DEFAULT_ALLOWED_ANSWER_VALUES } from '../../common/eortc_parameters'

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  type: {
    type: 'number',
    allowed_answers: DEFAULT_ALLOWED_ANSWER_VALUES,
  },
})

export const EORTC_QLQ_PR25_SCALES: Array<EORTCScaleType> = [
  {
    id: 'URI',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Moest u gedurende de afgelopen week gedurende de afgelopen week overdag vaak plassen?',
          en: 'Have you had to urinate frequently during the day during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q31',
      },
      {
        label: {
          nl: "Moest u gedurende de afgelopen week gedurende de afgelopen week 's nachts' vaak plassen?",
          en: 'Have you had to urinate frequently at night during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q32',
      },
      {
        label: {
          nl: 'Moest u zich gedurende de afgelopen week gedurende de afgelopen week zodra u de aandrang voelde om te plassen naar het toilet haasten?',
          en: 'When you felt the urge to pass urine, did you have to hurry to get to the toilet during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q33',
      },
      {
        label: {
          nl: "Had u gedurende de afgelopen week moeite voldoende nachtrust te krijgen, omdat u er 's nachts vaak uit moest om te plassen?",
          en: 'Was it difficult for you to get enough sleep, because you needed to get up frequently at night to urinate during the past week? ',
        },
        input_id: 'EORTC_QLQ_PR25_Q34',
      },
      {
        label: {
          nl: 'Had u gedurende de afgelopen week moeite om dingen buitenshuis te doen, omdat u in de buurt van een toilet moest blijven?',
          en: 'Have you had difficulty going out of the house because you needed to be close to a toilet during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q35',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week onbedoeld urine verloren?',
          en: 'Have you had any unintentional release (leakage) of urine during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q36',
      },
      {
        label: {
          nl: 'Had u gedurende de afgelopen week pijn bij het plassen?',
          en: 'Did you have pain when you urinated during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q37',
      },
      {
        label: {
          nl: 'Werd u gedurende de afgelopen week beperkt in uw dagelijkse bezigheden door problemen met plassen?',
          en: 'Have your daily activities been limited by your urinary problems during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q39',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'AID',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Beantwoord deze vraag a.u.b. alleen als u incontinentiemateriaal (zoals inlegkruisjes, luiers, of andere middelen om urine op te vangen) gebruikt. Was het dragen van incontinentiemateriaal gedurende de afgelopen week een probleem voor u?',
          en: 'Answer this question only if you wear an incontinence aid: Has wearing an incontinence aid been a problem for you during the past week? ',
        },
        input_id: 'EORTC_QLQ_PR25_Q38',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BOW',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Werd u gedurende de afgelopen week beperkt in uw dagelijkse bezigheden door problemen met uw stoelgang?',
          en: 'Have your daily activities been limited by your bowel problems during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q40',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week onbedoeld ontlasting verloren?',
          en: 'Have you had any unintentional release (leakage) of stools during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q41',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week bloed bij uw ontlasting gehad?',
          en: 'Have you had blood in your stools during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q42',
      },
      {
        label: {
          nl: 'Had u gedurende de afgelopen week een opgeblazen gevoel in uw buik?',
          en: 'Did you have a bloated feeling in your abdomen during the past week? ',
        },
        input_id: 'EORTC_QLQ_PR25_Q43',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'HTR',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week opvliegers gehad?',
          en: 'Did you have hot flushes during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q44',
      },
      {
        label: {
          nl: 'Had u gedurende de afgelopen week pijnlijke of gezwollen tepels of borsten?',
          en: 'Have you had sore or enlarged nipples or breasts during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q45',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week opgezwollen benen of enkels gehad?',
          en: 'Have you had swelling in your legs or ankles during the past week?',
        },
        input_id: 'EORTC_QLQ_PR25_Q46',
      },
      {
        label: {
          nl: 'Was uw gewichtsverlies gedurende de afgelopen vier weken een probleem voor u?',
          en: 'Has weight loss been a problem for you during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_PR25_Q47',
      },
      {
        label: {
          nl: 'Was uw gewichtstoename gedurende de afgelopen vier weken een probleem voor u?',
          en: 'Has weight gain been a problem for you during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_PR25_Q48',
      },
      {
        label: {
          nl: 'Voelde u zich gedurende de afgelopen vier weken minder mannelijk als gevolg van uw ziekte of behandeling?',
          en: 'Have you felt less masculine as a result of your illness or treatment during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_PR25_Q49',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SAC',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'In hoeverre had u zin in seks gedurende de afgelopen vier weken?',
          en: 'To what extent were you interested in sex during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_PR25_Q50',
        inverse: true,
      },
      {
        label: {
          nl: 'In hoeverre was u seksueel actief gedurende de afgelopen vier weken?',
          en: 'To what extent were you sexually active during the past four weeks (with or without intercourse)?',
        },
        input_id: 'EORTC_QLQ_PR25_Q51',
        inverse: true,
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SFU',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'In hoeverre was seks plezierig voor u de afgelopen vier weken?',
          en: 'To what extent was sex enjoyable for you during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_PR25_Q52',
        inverse: true,
      },
      {
        label: {
          nl: 'Had u moeite om een stijve penis te krijgen of te houden de afgelopen vier weken?',
          en: 'Did you have difficulty getting or maintaining an erection during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_PR25_Q53',
      },
      {
        label: {
          nl: 'Had u gedurende de afgelopen vier weken problemen met het krijgen van een zaadlozing (bv. een zgn "droge" zaadlozing)?',
          en: 'Did you have ejaculation problems during the past four weeks (eg dry ejaculation)?',
        },
        input_id: 'EORTC_QLQ_PR25_Q54',
      },
      {
        label: {
          nl: 'Zag u er de afgelopen vier weken tegen op om seksueel contact te hebben, of voelde u zich ongemakkelijk wat betreft seksueel intiem zijn?',
          en: 'Have you felt uncomfortable about being sexually intimate during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_PR25_Q55',
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTC_QLQ_PR25_Q51',
        value_is_one_of: [1],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
]
