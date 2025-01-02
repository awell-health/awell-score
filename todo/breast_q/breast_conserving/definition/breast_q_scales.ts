/* eslint-disable no-magic-numbers */

import { NumberInputType } from '../../../../src/types/calculations/inputs/calculation-inputs.types'
import type { BreastQScaleType } from '../../../../src/types/calculations/subscales/custom/breastq.types'
import {
  ADVERSE_EFFECTS_OF_RADIATION_POSTOP_TABLE,
  PHYSICAL_WELLBEING_CHEST_POSTOP_TABLE,
  PHYSICAL_WELLBEING_CHEST_PREOP_TABLE,
  PSYCHOSOCIAL_WELLBEING_TABLE,
  SATISFACTION_WITH_BREAST_POSTOP_TABLE,
  SATISFACTION_WITH_BREAST_PREOP_TABLE,
  SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_TABLE,
  SATISFACTION_WITH_INFORMATION_FROM_RADIATION_ONCOLOGIST_TABLE,
  SATISFACTION_WITH_MEDICAL_TEAM_TABLE,
  SATISFACTION_WITH_OFFICE_STAFF_TABLE,
  SATISFACTION_WITH_SURGEON_TABLE,
  SEXUAL_WELLBEING_TABLE,
} from '../conversion_tables'

const INPUT_TYPES: { [key: string]: NumberInputType } = {
  default: {
    type: 'number',
    allowed_answers: [
      { value: 1, label: { nl: 'Nooit', en: '' } },
      { value: 2, label: { nl: 'Zelden', en: '' } },
      { value: 3, label: { nl: 'Soms', en: '' } },
      { value: 4, label: { nl: 'Vaak', en: '' } },
      { value: 5, label: { nl: 'Altijd', en: '' } },
    ],
  },
  one_to_four: {
    type: 'number',
    allowed_answers: [
      { value: 1, label: { nl: 'Zeer ontevreden', en: '' } },
      { value: 2, label: { nl: 'Enigszins ontevreden', en: '' } },
      { value: 3, label: { nl: 'Enigszins tevreden', en: '' } },
      { value: 4, label: { nl: 'Zeer tevreden', en: '' } },
    ],
  },
  one_to_three: {
    type: 'number',
    allowed_answers: [
      { value: 1, label: { nl: 'Nooit', en: '' } },
      { value: 2, label: { nl: 'Soms', en: '' } },
      { value: 3, label: { nl: 'Altijd', en: '' } },
    ],
  },
}

export const BREAST_Q_SUBSCALES: Array<BreastQScaleType> = [
  {
    id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP',
    conversion_table: PSYCHOSOCIAL_WELLBEING_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_A',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen vol zelfvertrouwen in een sociale situatie? ',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_B',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen: emotioneel in staat om de dingen te doen die u wilde doen?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_C',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen emotioneel gezond?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_D',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen gelijkwaardig aan andere vrouwen?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_E',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen zelfverzekerd?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_F',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen vrouwelijk in uw kleding?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_G',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen in staat om uw lichaam te accepteren?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_H',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen normaal?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_I',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen net als andere vrouwen?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'PSYCHOSOCIAL_WELLBEING_PREOP_POSTOP_J',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe vaak voelde u zich de afgelopen zeven dagen aantrekkelijk?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
    ],
  },
  {
    id: 'SEXUAL_WELLBEING_PREOP_POSTOP',
    conversion_table: SEXUAL_WELLBEING_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SEXUAL_WELLBEING_PREOP_POSTOP_A',
        label: {
          nl: 'Denkend aan uw seksualiteit hoe vaak voelde u zich in het algemeen seksueel aantrekkelijk met uw kleding aan?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'SEXUAL_WELLBEING_PREOP_POSTOP_B',
        label: {
          nl: 'Denkend aan uw seksualiteit hoe vaak voelde u zich in het algemeen op uw gemak tijdens seksuele handelingen?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'SEXUAL_WELLBEING_PREOP_POSTOP_C',
        label: {
          nl: 'Denkend aan uw seksualiteit hoe vaak voelde u zich in het algemeen zelfverzekerd op seksueel gebied?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'SEXUAL_WELLBEING_PREOP_POSTOP_D',
        label: {
          nl: 'Denkend aan uw seksualiteit hoe vaak voelde u zich in het algemeen tevreden met uw seksleven?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'SEXUAL_WELLBEING_PREOP_POSTOP_E',
        label: {
          nl: 'Denkend aan uw seksualiteit hoe vaak voelde u zich in het algemeen zelfverzekerd op seksueel gebied over hoe uw borstgebied eruit ziet zonder kleding aan?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
      {
        input_id: 'SEXUAL_WELLBEING_PREOP_POSTOP_F',
        label: {
          nl: 'Denkend aan uw seksualiteit hoe vaak voelde u zich in het algemeen seksueel aantrekkelijk zonder kleding aan?',
          en: '',
        },
        type: INPUT_TYPES.default,
      },
    ],
  },
  {
    id: 'SATISFACTION_WITH_BREAST_PREOP',
    conversion_table: SATISFACTION_WITH_BREAST_PREOP_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SATISFACTION_WITH_BREAST_PREOP_A',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe tevreden of ontevreden bent u in de afgelopen zeven dagen geweest over hoe u er in de spiegel uitziet met uw kleding aan?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_PREOP_B',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe tevreden of ontevreden bent u in de afgelopen zeven dagen geweest over hoe comfortabel uw bh’s zit?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_PREOP_C',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe tevreden of ontevreden bent u in de afgelopen zeven dagen geweest over het kunnen dragen van strakkere kleding?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_PREOP_D',
        label: {
          nl: 'Als u aan uw borstgebied denkt, hoe tevreden of ontevreden bent u in de afgelopen zeven dagen geweest over hoe u er in de spiegel uitziet zonder kleding aan?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
    ],
  },
  {
    id: 'SATISFACTION_WITH_BREAST_POST_OP',
    conversion_table: SATISFACTION_WITH_BREAST_POSTOP_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_A',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoe u er in de spiegel uitziet met uw kleding aan?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_B',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met de vorm van uw geopereerde borst als u een bh aan hebt?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_C',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoe normaal u zich voelt in uw kleding?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_D',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met het kunnen dragen van strakkere kleding?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_E',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoe uw geopereerde borst zit/hangt?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_F',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoe glad gevormd uw geopereerde borst eruit ziet?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_G',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met het profiel (silhouet) van uw geopereerde borst?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_H',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoe gelijk van grootte uw borsten zijn?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_I',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoe normaal uw borstsparend geopereerde borst eruit ziet?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_J',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoeveel uw borsten op elkaar lijken?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_BREAST_POSTOP_K',
        label: {
          nl: 'Als u aan uw borsten denkt, hoe tevreden of ontevreden bent u de afgelopen zeven dagen geweest met hoe u er in de spiegel uitziet zonder kleding aan?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
    ],
  },
  {
    id: 'PHYSICAL_WELLBEING_CHEST_PREOP',
    conversion_table: PHYSICAL_WELLBEING_CHEST_PREOP_TABLE,
    recode: {
      '1': 3,
      '2': 2,
      '3': 1,
    },
    input_ids_in_subscale: [
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_A',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van pijn in de borstspieren?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_B',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van moeite om uw armen op te tillen of te bewegen?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_C',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van moeite met slapen doordat uw borstgebied ongemakkelijk voelde?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_D',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van een strak gevoel in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_E',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van een trekkend gevoel in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_F',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van een zeurend gevoel in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_G',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van gevoeligheid in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_H',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van scherpe pijn in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_I',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van een pijnlijk gevoel in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_PREOP_J',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van een kloppend gevoel in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
    ],
  },
  {
    id: 'PHYSICAL_WELLBEING_CHEST_POSTOP',
    conversion_table: PHYSICAL_WELLBEING_CHEST_POSTOP_TABLE,
    recode: {
      '1': 3,
      '2': 2,
      '3': 1,
    },
    /**
     * Items ‘h’ and ‘i’ are stand-alone items that are not included in the scale score.
     * Therefore it not included in the subscale.
     */
    input_ids_in_subscale: [
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_POSTOP_A',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van moeite om uw armen op te tillen of te bewegen?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_POSTOP_B',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van moeite met slapen doordat uw borstgebied ongemakkelijk aanvoelde?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_POSTOP_C',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van een strak gevoel in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_POSTOP_D',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van een trekkend gevoel in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_POSTOP_E',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van gevoeligheid in uw borstgebied?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_POSTOP_F',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van scherpe pijn in uw geopereerde borst?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'PHYSICAL_WELLBEING_CHEST_POSTOP_G',
        label: {
          nl: 'Hoe vaak hebt u in de afgelopen zeven dagen last gehad van zeurende pijn in uw geopereerde borst?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
    ],
  },
  {
    id: 'ADVERSE_EFFECTS_OF_RADIATION_POSTOP',
    conversion_table: ADVERSE_EFFECTS_OF_RADIATION_POSTOP_TABLE,
    recode: {
      '1': 3,
      '2': 2,
      '3': 1,
    },
    input_ids_in_subscale: [
      {
        input_id: 'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_A',
        label: {
          nl: 'Als u aan uw bestraalde borst(en) denkt, hoe vaak hebt u in de afgelopen zeven dagen last gehad van bestraalde huid van de borst die er anders uitzag (bijv. te donker of te licht)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_B',
        label: {
          nl: 'Als u aan uw bestraalde borst(en) denkt, hoe vaak hebt u in de afgelopen zeven dagen last gehad van markeringen op de huid van de borst door de bestraling (bijv. kleine zichtbare bloedvaten)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_C',
        label: {
          nl: 'Als u aan uw bestraalde borst(en) denkt, hoe vaak hebt u in de afgelopen zeven dagen last gehad van bestraalde huid van de borst die droog aanvoelde?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_D',
        label: {
          nl: 'Als u aan uw bestraalde borst(en) denkt, hoe vaak hebt u in de afgelopen zeven dagen last gehad van bestraalde huid van de borst die gevoelig is bij aanraking (bijv. bij temperatuursveranderingen van het water tijdens het douchen)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_E',
        label: {
          nl: 'Als u aan uw bestraalde borst(en) denkt, hoe vaak hebt u in de afgelopen zeven dagen last gehad van bestraalde huid van de borst die onnatuurlijk dik (ruw, hard) aanvoelt als u het aanraakt?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
      {
        input_id: 'ADVERSE_EFFECTS_OF_RADIATION_POSTOP_F',
        label: {
          nl: 'Als u aan uw bestraalde borst(en) denkt, hoe vaak hebt u in de afgelopen zeven dagen last gehad van bestraalde huid van de borst die geïrriteerd aanvoelt bij het dragen van kleding?',
          en: '',
        },
        type: INPUT_TYPES.one_to_three,
      },
    ],
  },
  {
    id: 'SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_POSTOP',
    conversion_table: SATISFACTION_WITH_INFORMATION_FROM_BREAST_SURGEON_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_A',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over De mogelijke noodzaak van bestraling afhankelijk van de operatie die u ondergaat (borstamputatie versus borstsparende operatie)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_B',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over De opties die u heeft gekregen rondom de soorten borstkankerchirurgie (borstamputatie versus borstsparende operatie)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_C',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over Dat uw overlevingskans hetzelfde zou zijn voor beide soorten chirurgie (borstamputatie versus borstsparende operatie)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_D',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over De genezing- en hersteltijd?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_E',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over Wat uw behandelingsplan zou zijn wanneer er kanker in uw schildwachtklier gevonden zou worden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_F',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over Hoeveel pijn u kon verwachten tijdens het herstellen?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_G',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over De mogelijke complicaties?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_H',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over Dat de kans dat de tumor terug zou keren hetzelfde zou zijn voor beide soorten chirurgie (borstamputatie versus borstsparende operatie)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_I',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over Hoe u kon verwachten dat uw geopereerde borst er uit zou zien na de operatie?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_J',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over Hoe de littekens van de borstsparende operatie er uit zouden zien?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_K',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over de grootte van uw borst die u kon verwachten na de borstsparende operatie?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_INFORMATION_BREAST_SURGEON_POSTOP_L',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van uw borstchirurg ontvangen heeft over de vorm van uw borst die u kon verwachten na de borstsparende operatie?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
    ],
  },
  {
    id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POST_OP',
    conversion_table:
      SATISFACTION_WITH_INFORMATION_FROM_RADIATION_ONCOLOGIST_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_A',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over hoeveel tijd elke bestraling in beslag zou nemen?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_B',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over de positie waarin u zich zou bevinden tijdens de bestraling (bijv. op uw rug of buik)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_C',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over waarom u bestraling nodig zou hebben na een borstsparende operatie?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_D',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over welk deel van uw borst bestraald zou moeten worden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_E',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over hoe de bestraling aan zou voelen?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_F',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over hoe u tijdens de bestralingsperiode voor uw huid zou moeten zorgen (bijv. crème aanbrengen, wassen)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_G',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over dat er permanente huidmarkeringen op uw borst zouden worden aangebracht (tatoeagepuntjes)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_H',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over hoe moe u zich in het algemeen zou kunnen voelen tijdens de bestralingsperiode?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_I',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over hoe de bestraling uw huid zou kunnen veranderen in de loop van de tijd (kleur, structuur)?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_J',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over hoe de bestraling een effect zou kunnen hebben op hoe uw borsten eruit zien in de loop van de tijd?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_RADIATION_ONCOLOGIST_POSTOP_K',
        label: {
          nl: 'Hoe tevreden of ontevreden bent u over de informatie die u van de radiotherapeut / bestralingsarts ontvangen heeft over mogelijke problemen (late effecten) die de bestraling op termijn zou kunnen veroorzaken?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
    ],
  },
  {
    id: 'SATISFACTION_WITH_SURGEON_POSTOP',
    conversion_table: SATISFACTION_WITH_SURGEON_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_A',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij professioneel was?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_B',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij u een vertrouwd gevoel gaf?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_C',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij u betrok bij het proces van beslissen?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_D',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij geruststellend was?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_E',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij al uw vragen beantwoordde?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_F',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij u op uw gemak stelde?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_G',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij grondig was?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_H',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij gemakkelijk om mee te praten?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_I',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij begreep wat u wilde?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_J',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij invoelend was?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_K',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij tijd nam voor de zaken waar u zorgen over had?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_SURGEON_POSTOP_L',
        label: {
          nl: 'Deze vraag gaat over uw borstkanker chirurg. Had u het gevoel dat hij/zij beschikbaar was als u ergens zorgen over had?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
    ],
  },
  {
    id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP',
    conversion_table: SATISFACTION_WITH_MEDICAL_TEAM_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_A',
        label: {
          nl: 'Deze vraag gaat over de leden van het medisch team, maar niet uw chirurg. Had u het gevoel dat zij professioneel waren?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_B',
        label: {
          nl: 'Deze vraag gaat over de leden van het medisch team, maar niet uw chirurg. Had u het gevoel dat zij u met respect behandelden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_C',
        label: {
          nl: 'Deze vraag gaat over de leden van het medisch team, maar niet uw chirurg. Had u het gevoel dat zij kennis van zaken hadden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_D',
        label: {
          nl: 'Deze vraag gaat over de leden van het medisch team, maar niet uw chirurg. Had u het gevoel dat zij vriendelijk en aardig waren?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_E',
        label: {
          nl: 'Deze vraag gaat over de leden van het medisch team, maar niet uw chirurg. Had u het gevoel dat zij u op uw gemak stelden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_F',
        label: {
          nl: 'Deze vraag gaat over de leden van het medisch team, maar niet uw chirurg. Had u het gevoel dat zij grondig waren?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_MEDICAL_TEAM_POSTOP_G',
        label: {
          nl: 'Deze vraag gaat over de leden van het medisch team, maar niet uw chirurg. Had u het gevoel dat zij tijd namen voor de zaken waar u zorgen over had?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
    ],
  },
  {
    id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP',
    conversion_table: SATISFACTION_WITH_OFFICE_STAFF_TABLE,
    input_ids_in_subscale: [
      {
        input_id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_A',
        label: {
          nl: 'Deze vraag gaat over het administratief/kantoorpersoneel (bijv. secretaresses). Had u het gevoel dat zij professioneel waren?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_B',
        label: {
          nl: 'Deze vraag gaat over het administratief/kantoorpersoneel (bijv. secretaresses). Had u het gevoel dat zij u met respect behandelden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_C',
        label: {
          nl: 'Deze vraag gaat over het administratief/kantoorpersoneel (bijv. secretaresses). Had u het gevoel dat zij kennis van zaken hadden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_D',
        label: {
          nl: 'Deze vraag gaat over het administratief/kantoorpersoneel (bijv. secretaresses). Had u het gevoel dat zij vriendelijk en aardig waren?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_E',
        label: {
          nl: 'Deze vraag gaat over het administratief/kantoorpersoneel (bijv. secretaresses). Had u het gevoel dat zij u op uw gemak stelden?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_F',
        label: {
          nl: 'Deze vraag gaat over het administratief/kantoorpersoneel (bijv. secretaresses). Had u het gevoel dat zij grondig waren?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
      {
        input_id: 'SATISFACTION_WITH_OFFICE_STAFF_POSTOP_G',
        label: {
          nl: 'Deze vraag gaat over het administratief/kantoorpersoneel (bijv. secretaresses). Had u het gevoel dat zij tijd voor de zaken namen waar u zorgen over had?',
          en: '',
        },
        type: INPUT_TYPES.one_to_four,
      },
    ],
  },
]
