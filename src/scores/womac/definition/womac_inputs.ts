import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const WOMAC_INPUTS = {
  PAIN_WALKING: {
    label: {
      en: 'Rate your pain when walking',
      nl: 'Hoeveel pijn had u bij het lopen op een vlakke ondergrond?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PAIN_STAIR_CLIMBING: {
    label: {
      en: 'Rate your pain when climbing stairs',
      nl: 'Hoeveel pijn had u bij het trap op- of aflopen?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PAIN_NOCTURNAL: {
    label: {
      en: 'Rate your pain when sleeping at night',
      nl: "Hoeveel pijn had u 's nachts in bed?",
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PAIN_REST: {
    label: {
      en: 'Rate your pain when resting',
      nl: 'Hoeveel pijn had u tijdens zitten of liggen?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PAIN_WEIGHT_BEARING: {
    label: {
      en: 'Rate your pain when standing',
      nl: 'Hoeveel pijn had u wanneer u rechtop staat?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  STIFFNESS_MORNING: {
    label: {
      en: 'Rate your STIFFNESS in the morning ',
      nl: "Hoe erg was uw gewrichtsstijfheid 's morgens als u voor het eerst wakker wordt?",
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  STIFFNESS_LATER: {
    label: {
      en: 'Rate your STIFFNESS in the evening / occuring later in the day',
      nl: 'Hoe erg was uw gewrichtsstijfheid na het zitten, liggen of rusten later op de dag?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_DESCENDING_STAIRS: {
    label: {
      en: 'Rate your difficulty when descending stairs',
      nl: 'Hoeveel moeite had u bij trap oplopen?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_ASCENDING_STAIRS: {
    label: {
      en: 'Rate your difficulty when ascending stairs',
      nl: 'Hoeveel moeite had u bij trap aflopen?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_RISING_FROM_SITTING: {
    label: {
      en: 'Rate your difficulty when rising from sitting',
      nl: 'Hoeveel moeite had u bij opstaan vanuit een stoel?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_STANDING: {
    label: {
      en: 'Rate your difficulty when standing',
      nl: 'Hoeveel moeite had u bij staan?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_BENDING: {
    label: {
      en: 'Rate your difficulty when bending to the floor',
      nl: 'Hoeveel moeite had u bij bukken naar de grond?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_WALKING_FLAT_SURFACE: {
    label: {
      en: 'Rate your difficulty when walking on even floor',
      nl: 'Hoeveel moeite had u bij lopen op een vlakke ondergrond?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_GETTING_IN_OUT_CAR: {
    label: {
      en: 'Rate your difficulty when getting in/out of car',
      nl: 'Hoeveel moeite had u bij instappen/uitstappen van een auto?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_SHOPPING: {
    label: {
      en: 'Rate your difficulty when going shopping',
      nl: 'Hoeveel moeite had u bij winkelen?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_PUTTING_ON_SOCKS: {
    label: {
      en: 'Rate your difficulty when putting on socks',
      nl: 'Hoeveel moeite had u bij sokken / kousen aantrekken?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_LYING_BED: {
    label: {
      en: 'Rate your difficulty when lying in bed',
      nl: 'Hoeveel moeite had u bij in bed liggen?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_TAKING_OFF_SOCKS: {
    label: {
      en: 'Rate your difficulty when taking off socks',
      nl: 'Hoeveel moeite had u bij sokken / kousen uittrekken?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_RISING_BED: {
    label: {
      en: 'Rate your difficulty when rising from bed',
      nl: 'Hoeveel moeite had u bij opstaan van bed?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_GETTING_IN_OUT_BATH: {
    label: {
      en: 'Rate your difficulty when getting in/out bath',
      nl: 'Hoeveel moeite had u bij in/uit bad gaan?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_SITTING: {
    label: {
      en: 'Rate your difficulty when sitting',
      nl: 'Hoeveel moeite had u bij zitten?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_GETTING_ON_OFF_TOILET: {
    label: {
      en: 'Rate your difficulty when getting on/off toilet',
      nl: 'Hoeveel moeite had u bij gaan zitten op / opstaan van het toilet?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_HEAVY_DOMESTIC_DUTIES: {
    label: {
      en: 'Rate your difficulty when doing heavy domestic duties (e.g. moving furniture)',
      nl: 'Hoeveel moeite had u bij zware huishoudelijke werkzaamheden?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
  PHYSICAL_FUNCTION_LIGHT_DOMESTIC_DUTIES: {
    label: {
      en: 'Rate your difficulty when doing light domestic duties (e.g. cooking, dusting)',
      nl: 'Hoeveel moeite had u bij lichte huishoudelijke werkzaamheden?',
    },
    type: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'None', nl: 'Geen' } },
        { value: 1, label: { en: 'Slight', nl: 'Gering' } },
        { value: 2, label: { en: 'Moderate', nl: 'Matig' } },
        { value: 3, label: { en: 'Very', nl: 'Veel' } },
        { value: 4, label: { en: 'Extreme', nl: 'Erg veel' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
