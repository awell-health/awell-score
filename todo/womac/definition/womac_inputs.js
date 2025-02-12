// @flow
import type { InputType } from '../../../../types/calculations.types'

export const WOMAC_INPUTS: Array<InputType> = [
  {
    input_id: 'PAIN_WALKING',
    input_label: {
      en: 'Rate your pain when walking',
      nl: 'Hoeveel pijn had u bij het lopen op een vlakke ondergrond?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PAIN_STAIR_CLIMBING',
    input_label: {
      en: 'Rate your pain when climbing stairs',
      nl: 'Hoeveel pijn had u bij het trap op- of aflopen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PAIN_NOCTURNAL',
    input_label: {
      en: 'Rate your pain when sleeping at night',
      nl: "Hoeveel pijn had u 's nachts in bed?"
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PAIN_REST',
    input_label: {
      en: 'Rate your pain when resting',
      nl: 'Hoeveel pijn had u tijdens zitten of liggen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PAIN_WEIGHT_BEARING',
    input_label: {
      en: 'Rate your pain when standing',
      nl: 'Hoeveel pijn had u wanneer u rechtop staat?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'STIFFNESS_MORNING',
    input_label: {
      en: 'Rate your STIFFNESS in the morning ',
      nl: "Hoe erg was uw gewrichtsstijfheid 's morgens als u voor het eerst wakker wordt?"
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'STIFFNESS_LATER',
    input_label: {
      en: 'Rate your STIFFNESS in the evening / occuring later in the day',
      nl: 'Hoe erg was uw gewrichtsstijfheid na het zitten, liggen of rusten later op de dag?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_DESCENDING_STAIRS',
    input_label: {
      en: 'Rate your difficulty when descending stairs',
      nl: 'Hoeveel moeite had u bij trap oplopen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_ASCENDING_STAIRS',
    input_label: {
      en: 'Rate your difficulty when ascending stairs',
      nl: 'Hoeveel moeite had u bij trap aflopen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_RISING_FROM_SITTING',
    input_label: {
      en: 'Rate your difficulty when rising from sitting',
      nl: 'Hoeveel moeite had u bij opstaan vanuit een stoel?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_STANDING',
    input_label: {
      en: 'Rate your difficulty when standing',
      nl: 'Hoeveel moeite had u bij staan?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_BENDING',
    input_label: {
      en: 'Rate your difficulty when bending to the floor',
      nl: 'Hoeveel moeite had u bij bukken naar de grond?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_WALKING_FLAT_SURFACE',
    input_label: {
      en: 'Rate your difficulty when walking on even floor',
      nl: 'Hoeveel moeite had u bij lopen op een vlakke ondergrond?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_GETTING_IN_OUT_CAR',
    input_label: {
      en: 'Rate your difficulty when getting in/out of car',
      nl: 'Hoeveel moeite had u bij instappen/uitstappen van een auto?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_SHOPPING',
    input_label: {
      en: 'Rate your difficulty when going shopping',
      nl: 'Hoeveel moeite had u bij winkelen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_PUTTING_ON_SOCKS',
    input_label: {
      en: 'Rate your difficulty when putting on socks',
      nl: 'Hoeveel moeite had u bij sokken / kousen aantrekken?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_LYING_BED',
    input_label: {
      en: 'Rate your difficulty when lying in bed',
      nl: 'Hoeveel moeite had u bij in bed liggen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_TAKING_OFF_SOCKS',
    input_label: {
      en: 'Rate your difficulty when taking off socks',
      nl: 'Hoeveel moeite had u bij sokken / kousen uittrekken?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_RISING_BED',
    input_label: {
      en: 'Rate your difficulty when rising from bed',
      nl: 'Hoeveel moeite had u bij opstaan van bed?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_GETTING_IN_OUT_BATH',
    input_label: {
      en: 'Rate your difficulty when getting in/out bath',
      nl: 'Hoeveel moeite had u bij in/uit bad gaan?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_SITTING',
    input_label: {
      en: 'Rate your difficulty when sitting',
      nl: 'Hoeveel moeite had u bij zitten?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_GETTING_ON_OFF_TOILET',
    input_label: {
      en: 'Rate your difficulty when getting on/off toilet',
      nl: 'Hoeveel moeite had u bij gaan zitten op / opstaan van het toilet?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_HEAVY_DOMESTIC_DUTIES',
    input_label: {
      en: 'Rate your difficulty when doing heavy domestic duties (e.g. moving furniture)',
      nl: 'Hoeveel moeite had u bij zware huishoudelijke werkzaamheden?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  },
  {
    input_id: 'PHYSICAL_FUNCTION_LIGHT_DOMESTIC_DUTIES',
    input_label: {
      en: 'Rate your difficulty when doing light domestic duties (e.g. cooking, dusting)',
      nl: 'Hoeveel moeite had u bij lichte huishoudelijke werkzaamheden?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } }
      ]
    },
    required: true
  }
]
