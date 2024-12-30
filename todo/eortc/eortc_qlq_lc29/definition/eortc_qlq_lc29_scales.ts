import type { InputType } from '../../../../src/types/calculations.types'
import type { EORTCScaleType } from '../../../../src/types/calculations/subscales/custom/eortc.types'
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
    input_id: 'LUNGCANCER_SURGERY_BOOL',
    input_label: {
      nl: 'Heeft u al een operatie ondergaan voor longkanker?',
      en: 'Did you already receive surgery for lung cancer?',
    },
    input_type: {
      type: 'boolean',
      allowed_answers: [
        {
          value: true,
          label: {
            nl: 'Ja',
            en: 'Yes',
          },
        },
        {
          value: false,
          label: {
            nl: 'Nee',
            en: 'No',
          },
        },
      ],
    },
    required: true,
    info: {
      en: 'If patient did not had any surgery before subscale "Surgery-related problems" will not be applicable.',
    },
  },
]

export const EORTC_QLQ_LC29_SCALES: Array<EORTCScaleType> = [
  {
    id: 'COU',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week gehoest?',
          en: 'Have you coughed during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q31',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week een droge hoest gehad?',
          en: 'Have you had dry cough during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q52',
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
          nl: 'Bent u gedurende de afgelopen week buiten adem geweest bij het rusten?',
          en: 'Have you been short of breath when you rested during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q33',
      },
      {
        input_label: {
          nl: 'Bent u gedurende de afgelopen week buiten adem geweest bij het wandelen?',
          en: 'Have you been short of breath when you walked during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q34',
      },
      {
        input_label: {
          nl: 'Bent u gedurende de afgelopen week buiten adem geweest bij het oplopen van trappen?',
          en: 'Have you been short of breath when you climbed stairs during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q35',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SE',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week een pijnlijke mond of tong gehad?',
          en: 'Have you had a sore mouth or tongue during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q36',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week problemen gehad met slikken?',
          en: 'Have you had problems swallowing during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q37',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week tintelende handen of voeten gehad?',
          en: 'Have you had tingling hands or feet during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q38',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week haaruitval gehad?',
          en: 'Have you had hair loss during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q39',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week allergische reacties gehad?',
          en: 'Have you had allergic reactions during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q43',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week branderige of pijnlijke ogen gehad?',
          en: 'Have you had burning or sore eyes during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q44',
      },
      {
        input_label: {
          nl: 'Bent u gedurende de afgelopen week duizelig geweest?',
          en: 'Have you been dizzy during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q45',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week splijtende vingernagels of teennagels gehad?',
          en: 'Have you had splitting fingernails or toenails during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q46',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week huidproblemen gehad (bijv. jeukerig, droog)?',
          en: 'Have you had skin problems (e.g. itchy, dry) during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q47',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week problemen gehad met spreken?',
          en: 'Have you had problems speaking during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q48',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week dun of futloos haar gehad als gevolg van uw ziekte of uw behandeling?',
          en: 'Have you had thin or lifeless hair as a result of your disease or treatment during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q50',
      },
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week gemerkt dat u lichamelijk minder aankunt?',
          en: 'Have you experienced a decrease in your physical capabilities during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q53',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'FP',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Bent u gedurende de afgelopen week bang geweest voor progressie van uw tumor?',
          en: 'Have you been afraid of tumor progression during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q49',
      },
      {
        input_label: {
          nl: 'Heeft u zich gedurende de afgelopen week zorgen gemaakt over uw gezondheid in de toekomst?',
          en: 'Have you been worried about your health in the future during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q51',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'SU',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u pijn gehad aan het geopereerde gebied?',
          en: 'Have you had pain in the area of surgery?',
        },
        input_id: 'EORTC_QLQ_LC29_Q55',
      },
      {
        input_label: {
          nl: 'Is het gebied van de wond overgevoelig geweest?',
          en: 'Has the area of your wound been oversensitive?',
        },
        input_id: 'EORTC_QLQ_LC29_Q56',
      },
      {
        input_label: {
          nl: 'Heeft de omvang van de operatie uw functioneren beperkt?',
          en: 'Have you been restricted in your performance due to the extent of surgery?',
        },
        input_id: 'EORTC_QLQ_LC29_Q57',
      },
      {
        input_label: {
          nl: 'Heeft u moeite gehad om uw arm of schouder aan de kant van de operatie aan de borstkas te gebruiken?',
          en: 'Have you had any difficulty using your arm or shoulder on the side of the chest operation?',
        },
        input_id: 'EORTC_QLQ_LC29_Q58',
      },
      {
        input_label: {
          nl: 'Heeft uw littekenpijn u gehinderd bij uw dagelijkse bezigheden?',
          en: 'Has your scar pain interfered with your daily activities?',
        },
        input_id: 'EORTC_QLQ_LC29_Q59',
      },
    ].map(add_allowed_answers),
    not_applicable_if: {
      input: {
        input_id: 'LUNGCANCER_SURGERY_BOOL',
        value_is_one_of: [false],
      },
      not_applicable_score: NOT_APPLICABLE_MESSAGE,
    },
  },
  {
    id: 'HA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week bloed opgehoest?',
          en: 'Have you coughed up blood during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q32',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'PC',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week pijn op de borst gehad?',
          en: 'Have you had pain in your chest during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q40',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'PA',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week pijn in uw arm of schouder gehad?',
          en: 'Have you had pain in your arm or shoulder during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q41',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'PO',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Heeft u gedurende de afgelopen week pijn in andere delen van uw lichaam gehad?',
          en: 'Have you had pain in other parts of your body during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q42',
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'WL',
    scale_type: 'symptoms',
    item_range: 3,
    input_ids_in_subscale: [
      {
        input_label: {
          nl: 'Was gewichtsverlies gedurende de afgelopen week een probleem voor u?',
          en: 'Has weight loss been a problem for you during the past week?',
        },
        input_id: 'EORTC_QLQ_LC29_Q54',
      },
    ].map(add_allowed_answers),
  },
]
