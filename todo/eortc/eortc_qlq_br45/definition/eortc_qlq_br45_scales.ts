import type { InputType } from '../../../../../types/calculations.types'
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

export const ADDITIONAL_INPUTS: InputType[] = [
  {
    label: {
      nl: 'Heb je reeds borstchirurgie ondergaan?',
      en: 'Did you already receive breast surgery?',
    },
    input_id: 'BREAST_SURGERY_BOOL',
    type: {
      type: 'boolean',
      allowed_answers: [
        { value: true, label: { en: 'Had breast surgery', nl: 'Ja' } },
        { value: false, label: { en: 'No breast surgery', nl: ' Nee' } },
      ],
    },
    required: true,
    info: {
      en: 'If patient did not had any surgery before subscale "Breast Satisfaction" will not be applicable.',
    },
  },
]

export const EORTC_QLQ_BR45_SCALES: Array<EORTCScaleType> = [
  {
    id: 'BI',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Voelde u zich gedurende de afgelopen week lichamelijk minder aantrekkelijk ten gevolge van uw ziekte of behandeling?',
          en: 'Have you felt physically less attractive as a result of your disease or treatment during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q39',
      },
      {
        label: {
          nl: 'Voelde u zich gedurende de afgelopen week minder vrouwelijk ten gevolge van uw ziekte of behandeling?',
          en: 'Have you felt less feminine as a result of your disease or treatment during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q40',
      },
      {
        label: {
          nl: 'Heeft u er problemen mee gehad gedurende de afgelopen week om uzelf naakt te zien?',
          en: 'Have you had problems looking at yourself naked during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q41',
      },
      {
        label: {
          nl: 'Was u gedurende de afgelopen week ontevreden met uw lichaam?',
          en: 'Have you been dissatisfied with your body during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q42',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'FU',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u zich gedurende de afgelopen week zorgen gemaakt over uw gezondheid in de toekomst?',
          en: 'Have you worried about your health in the future during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q43',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SX',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen vier weken belangstelling voor seks gehad?',
          en: 'Have you been interested in sex during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_BR45_Q44',
        inverse: true,
      },
      {
        label: {
          nl: 'Bent u gedurende de afgelopen vier weken seksueel actief geweest (met of zonder geslachtsgemeenschap)?',
          en: 'Have you been sexually active during the past four weeks (with or without intercourse)?',
        },
        input_id: 'EORTC_QLQ_BR45_Q45',
        inverse: true,
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SE',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Was seks gedurende de afgelopen vier weken plezierig voor u?',
          en: 'Has sex been enjoyable for you during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_BR45_Q46',
        inverse: true,
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTC_QLQ_BR45_Q45',
        value_is_one_of: [1],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'BS',
    scale_type: 'functional',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Bent u gedurende de afgelopen week tevreden geweest over het cosmetische resultaat van de operatie?',
          en: 'Have you been satisfied with the cosmetic result of the surgery during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q74',
        inverse: true,
      },
      {
        label: {
          nl: 'Was u gedurende de afgelopen week tevreden met hoe de huid van uw aangetaste borst (borstkas) eruitziet?',
          en: 'Have you been satisfied with the appearance of the skin of your affected breast (thoracic area) during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q75',
        inverse: true,
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'BREAST_SURGERY_BOOL',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'SYS',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week een droge mond gehad?',
          en: 'Have you had a dry mouth during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q31',
      },
      {
        label: {
          nl: 'Was de smaak van voedsel en drank gedurende de afgelopen week anders dan u gewend was?',
          en: 'Have food and drink tasted different than usual during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q32',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijnlijke, geïrriteerde of tranende ogen gehad?',
          en: 'Have your eyes been painful, irritated or watery during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q33',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week haaruitval gehad?',
          en: 'Have you lost any hair during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q34',
      },
      {
        label: {
          nl: 'Heeft u zich gedurende de afgelopen week ziek of onwel gevoeld?',
          en: 'Have you felt ill or unwell during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q36',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week opvliegers (vapeurs) gehad?',
          en: 'Have you had hot flushes during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q37',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week hoofdpijn gehad?',
          en: 'Have you had headaches during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q38',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'HU',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Was u gedurende de afgelopen week door het verlies van uw haar van streek?',
          en: 'Have you been upset by the loss of your hair during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q35',
        info: {
          nl: 'Deze vraag alleen invullen indien u haaruitval heeft gehad.',
          en: 'Answer this question only if you have lost any hair.',
        },
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'EORTC_QLQ_BR45_Q34',
        value_is_one_of: [1],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'ARM',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijn in uw arm of schouder gehad?',
          en: 'Have you had any pain in your arm or shoulder during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q47',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week een gezwollen arm of hand gehad?',
          en: 'Have you had a swollen arm or hand during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q48',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week problemen gehad om met uw arm omhoog of opzij te bewegen?',
          en: 'Have you had problems raising your arm or moving it sideways during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q49',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'BR',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijn gehad in het gebied van uw aangetaste borst?',
          en: 'Have you had any pain in the area of your affected breast during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q50',
      },
      {
        label: {
          nl: 'Was het gebied van uw aangetaste borst gedurende de afgelopen week gezwollen?',
          en: 'Has the area of your affected breast been swollen during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q51',
      },
      {
        label: {
          nl: 'Was het gebied van uw aangetaste borst gedurende de afgelopen week overgevoelig?',
          en: 'Has the area of your affected breast been oversensitive during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q52',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week huidproblemen gehad in het gebied van uw aangetaste borst (bijv. jeukerig, droog, schilferachtig)?',
          en: 'Have you had skin problems on or in the area of your affected breast during the past week (e.g., itchy, dry, flaky)?',
        },
        input_id: 'EORTC_QLQ_BR45_Q53',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'ET',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week overmatig getranspireerd?',
          en: 'Have you sweated excessively during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q54',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week stemmingswisselingen gehad?',
          en: 'Have you had mood swings during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q55',
      },
      {
        label: {
          nl: 'Bent u gedurende de afgelopen week duizelig geweest?',
          en: 'Have you been dizzy during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q56',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week problemen met uw gewrichten gehad?',
          en: 'Have you had problems with your joints during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q63',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week stijfheid in uw gewrichten gehad?',
          en: 'Have you had stiffness in your joints during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q64',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijn in uw gewrichten gehad?',
          en: 'Have you had pain in your joints during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q65',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijn in uw botten gehad?',
          en: 'Have you had aches or pains in your bones during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q66',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijn in uw spieren gehad?',
          en: 'Have you had aches or pains in your muscles during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q67',
      },
      {
        label: {
          nl: 'Bent u gedurende de afgelopen week in gewicht aangekomen?',
          en: 'Have you gained weight during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q68',
      },
      {
        label: {
          nl: 'Was uw gewichtstoename gedurende de afgelopen week een probleem voor u?',
          en: 'Has weight gain been a problem for you during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q69',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SM',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Was uw mond gedurende de afgelopen week gevoelig?',
          en: 'Have you had soreness in your mouth during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q57',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week roodheid in uw mond gehad?',
          en: 'Have you had any reddening in your mouth during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q58',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week pijn in uw handen of voeten gehad?',
          en: 'Have you had pain in your hands or feet during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q59',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week rode plekken op uw handen of voeten gehad?',
          en: 'Have you had any reddening on your hands or feet during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q60',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week tintelingen in uw vingers of tenen gehad?',
          en: 'Have you had tingling in your fingers or toes during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q61',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen week gevoelloze vingers of tenen gehad?',
          en: 'Have you had numbness in your fingers or toes during the past week?',
        },
        input_id: 'EORTC_QLQ_BR45_Q62',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'ES',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen vier weken een droge vagina gehad?',
          en: 'Have you had a dry vagina during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_BR45_Q70',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen vier weken ongemak in uw vagina gehad?',
          en: 'Have you had discomfort in your vagina during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_BR45_Q71',
      },
      {
        label: {
          nl: 'Heeft u gedurende de afgelopen vier weken tijdens seksuele activiteit pijn in uw vagina gehad?',
          en: 'Have you experienced a dry vagina during sexual activity during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_BR45_Q72',
        info: {
          nl: 'Deze vraag alleen invullen indien u seksueel actief was.',
          en: 'Please answer this question only if you have been sexually active.',
        },
      },
      {
        label: {
          nl: 'Had u gedurende de afgelopen vier weken een droge vagina tijdens seksuele activiteit?',
          en: 'Have you experienced a dry vagina during sexual activity during the past four weeks?',
        },
        input_id: 'EORTC_QLQ_BR45_Q73',
        info: {
          nl: 'Deze vraag alleen invullen indien u seksueel actief was.',
          en: 'Please answer this question only if you have been sexually active.',
        },
      },
    ].map(add_allowed_answers),
  },
]
