import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const HAQ_INPUTS = {
  DRESSING_1: {
    label: {
      en: 'Over the past week, were you able to dress yourself, including tying shoelaces and doing buttons?',
      nl: 'Kon u in de afgelopen week uzelf aankleden, inclusief veters strikken en knopen dichtmaken?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  DRESSING_2: {
    label: {
      en: 'Over the past week, were you able to shampoo your hair?',
      nl: 'Kon u in de afgelopen week uw haar wassen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  ARISING_1: {
    label: {
      en: 'Over the past week, were you able to stand up from an armless chair?',
      nl: 'Kon u in de afgelopen week opstaan vanuit een rechte stoel?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  ARISING_2: {
    label: {
      en: 'Over the past week, were you able to get in and out of bed?',
      nl: 'Kon u in de afgelopen week in en uit bed komen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  EATING_1: {
    label: {
      en: 'Over the past week, were you able to cut your meat?',
      nl: 'Kon u in de afgelopen week vlees snijden?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  EATING_2: {
    label: {
      en: 'Over the past week, were you able to lift a full cup or glass to your mouth?',
      nl: 'Kon u in de afgelopen week een vol kopje of glas naar de mond brengen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  EATING_3: {
    label: {
      en: 'Over the past week, were you able to open a new milk carton?',
      nl: 'Kon u in de afgelopen week een nieuw pak melk openen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  WALKING_1: {
    label: {
      en: 'Over the past week, were you able to walk outdoors on flat ground?',
      nl: 'Kon u in de afgelopen week buitenshuis op vlak terrein wandelen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  WALKING_2: {
    label: {
      en: 'Over the past week, were you able to climb up five steps?',
      nl: 'Kon u in de afgelopen week vijf traptreden oplopen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  AIDS_OR_DEVICES_PART_1: {
    label: {
      en: 'Please check any AIDS OR DEVICES that you usually use for any of these activities (dressing and grooming, arising, eating, walking):',
      nl: 'Kruis aan welke HULPMIDDELEN u gewoonlijk gebruikt voor bovenstaande activiteiten:',
    },
    type: z
      .array(
        z.union([
          z.literal('cane'),
          z.literal('walker'),
          z.literal('crutches'),
          z.literal('wheelchair'),
          z.literal('devices_used_for_dressing'),
          z.literal('built_up_or_special_utensils'),
          z.literal('special_or_built_up_chair'),
          z.literal('other'),
        ]),
      )
      .optional(),
    uiOptions: {
      options: [
        {
          value: 'cane',
          label: {
            en: 'Cane',
            nl: 'Wandelstok',
          },
        },
        {
          value: 'walker',
          label: {
            en: 'Walker',
            nl: 'Rollator/Looprekje',
          },
        },
        {
          value: 'crutches',
          label: {
            en: 'Crutches',
            nl: 'Krukken',
          },
        },
        {
          value: 'wheelchair',
          label: {
            en: 'Wheelchair',
            nl: 'Rolstoel',
          },
        },
        {
          value: 'devices_used_for_dressing',
          label: {
            en: 'Devices used for dressing (button hook, zipper puller, etc)',
            nl: 'Hulpmiddelen, gebruikt bij het aankleden (knopenhaakje, kousenaantrekker schoenlepel met lange steel, etc.)',
          },
        },
        {
          value: 'built_up_or_special_utensils',
          label: {
            en: 'Built-up or special utensils',
            nl: 'Aangepast bestek',
          },
        },
        {
          value: 'special_or_built_up_chair',
          label: {
            en: 'Special or built up chair',
            nl: 'Speciale of aangepaste stoel',
          },
        },
        {
          value: 'other',
          label: {
            en: 'Other',
            nl: 'Overig',
          },
        },
      ],
    },
  },
  NEED_HELP_PART_1: {
    label: {
      en: 'Please check any categories for which you need HELP FROM ANOTHER PERSON',
      nl: '',
    },
    type: z
      .array(
        z.union([
          z.literal('dressing'),
          z.literal('arising'),
          z.literal('eating'),
          z.literal('walking'),
        ]),
      )
      .optional(),
    uiOptions: {
      options: [
        {
          value: 'dressing',
          label: {
            en: 'Dressing and grooming',
            nl: 'Aankleden/verzorging',
          },
        },
        {
          value: 'arising',
          label: {
            en: 'Arising',
            nl: 'Opstaan',
          },
        },
        {
          value: 'eating',
          label: {
            en: 'Eating',
            nl: 'Eten',
          },
        },
        {
          value: 'walking',
          label: {
            en: 'Walking',
            nl: 'Lopen',
          },
        },
      ],
    },
  },
  HYGIENE_1: {
    label: {
      en: 'Over the past week, were you able to wash and dry your entire body?',
      nl: 'Kon u in de afgelopen week zelf Uw lichaam wassen en afdrogen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  HYGIENE_2: {
    label: {
      en: 'Over the past week, were you able to take a tub bath?',
      nl: 'Kon u in de afgelopen week in en uit bad komen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  HYGIENE_3: {
    label: {
      en: 'Over the past week, were you able to get on and off the toilet?',
      nl: 'Kon u in de afgelopen week op en van het toilet komen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  REACH_1: {
    label: {
      en: 'Over the past week, were you able to reach and get a 5-lb object (such as a bag of sugar) from just above your head?',
      nl: 'Kon u in de afgelopen week iets van ongeveer 2,5 kg (bijv. een zak aardappelen of rijst) van net boven uw hoofd pakken?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  REACH_2: {
    label: {
      en: 'Over the past week, were you able to bend down and pick up clothing from the floor?',
      nl: 'Kon u in de afgelopen week voorover buigen om kleren van de vloer op te rapen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  GRIP_1: {
    label: {
      en: 'Over the past week, were you able to open car doors?',
      nl: 'Kon u in de afgelopen week auto–portieren openen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  GRIP_2: {
    label: {
      en: 'Over the past week, were you able to get open jars which have been previously opened?',
      nl: 'Kon u in de afgelopen week deksels van potjes die al eens geopend zijn, losdraaien?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  GRIP_3: {
    label: {
      en: 'Over the past week, were you able to turn faucets on and off?',
      nl: 'Kon u in de afgelopen week een kraan open– en dichtdraaien?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  ACTIVITIES_1: {
    label: {
      en: 'Over the past week, were you able to run errands and shop?',
      nl: 'Kon u in de afgelopen week boodschappen doen en winkelen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  ACTIVITIES_2: {
    label: {
      en: 'Over the past week, were you able to get in and out of a car?',
      nl: 'Kon u in de afgelopen week in en uit een auto komen?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  ACTIVITIES_3: {
    label: {
      en: 'Over the past week, were you able to do chores such as vacuuming, yard work?',
      nl: 'Kon u in de afgelopen week klusjes doen, zoals stofzuigen of in de tuin werken?',
    },
    type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' },
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' },
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' },
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' },
        },
      ],
    },
  },
  AIDS_OR_DEVICES_PART_2: {
    label: {
      en: 'Please check any AIDS OR DEVICES that you usually use for any of these activities (hygiene, reach, grip, activities):',
      nl: 'Kruis aan welke HULPMIDDELEN u gewoonlijk gebruikt voor bovenstaande activiteiten:',
    },
    type: z
      .array(
        z.union([
          z.literal('raised_toilet_seat'),
          z.literal('bathtub_seat'),
          z.literal('jar_opener'),
          z.literal('long_handled_appliances_for_reach'),
          z.literal('long_handled_appliances_in_bathroom'),
          z.literal('bathtub_bar'),
          z.literal('other'),
        ]),
      )
      .optional(),
    uiOptions: {
      options: [
        {
          value: 'raised_toilet_seat',
          label: {
            en: 'Raised toilet seat',
            nl: 'Verhoogd toilet',
          },
        },
        {
          value: 'bathtub_seat',
          label: {
            en: 'Bathtub seat',
            nl: 'Douchestoel, douchezitje, badplank',
          },
        },
        {
          value: 'jar_opener',
          label: {
            en: 'Jar opener',
            nl: 'Opener voor potten (als de pot al eens geopend is)',
          },
        },
        {
          value: 'long_handled_appliances_for_reach',
          label: {
            en: 'Long-handled appliances for reach',
            nl: 'Hulpmiddelen met lange steel (om ergens bij te kunnen)',
          },
        },
        {
          value: 'long_handled_appliances_in_bathroom',
          label: {
            en: 'Long-handled appliances in bathroom',
            nl: 'Hulpmiddelen met lange steel in de badkamer',
          },
        },
        {
          value: 'bathtub_bar',
          label: {
            en: 'Bathtub bar',
            nl: 'Beugels of steunen in badkuip of douche',
          },
        },
        {
          value: 'other',
          label: {
            en: 'Other',
            nl: 'Overig',
          },
        },
      ],
    },
  },
  NEED_HELP_PART_2: {
    label: {
      en: 'Please check any categories for which you need HELP FROM ANOTHER PERSON',
      nl: 'Kruis elke categorie aan waarvoor u gewoonlijk HULP VAN ANDEREN nodig heeft:',
    },
    type: z
      .array(
        z.union([
          z.literal('hygiene'),
          z.literal('reach'),
          z.literal('grip'),
          z.literal('activities'),
        ]),
      )
      .optional(),
    uiOptions: {
      options: [
        {
          value: 'hygiene',
          label: {
            en: 'Hygiene',
            nl: 'Wassen en toiletbezoek',
          },
        },
        {
          value: 'reach',
          label: {
            en: 'Reach',
            nl: 'Naar voorwerpen reiken',
          },
        },
        {
          value: 'grip',
          label: {
            en: 'Gripping and opening things',
            nl: 'Voorwerpen pakken en openen',
          },
        },
        {
          value: 'activities',
          label: {
            en: 'Errands and chores',
            nl: 'Boodschappen doen en klussen',
          },
        },
      ],
    },
  },
  /**
   * BELOW IS SOMETIMES PART OF AN EXTENDED VERSION
   * OF THE HAQ BUT WE DON'T NEED IT YET
   */
  // {
  //   input_id: 'PAIN',
  //   label: {
  //     en: 'How much PAIN have you had because of your illness in the PAST WEEK? Please indicate on the scale below how severe your pain has been:',
  //     nl: ''
  //   },
  //   input_type: {
  //     type: 'number',
  //     component: 'slider',
  //     range: {
  //       min: {
  //         value: 0,
  //         label: { en: 'No pain', nl: '' }
  //       },
  //       max: {
  //         value: 10,
  //         label: { en: 'Very severe pain', nl: '' }
  //       }
  //     }
  //   },
  // },
  // {
  //   input_id: 'FATIGUE',
  //   label: {
  //     en: 'How much of a problem has UNUSUAL fatigue or tiredness been for you OVER THE PAST WEEK?',
  //     nl: ''
  //   },
  //   input_type: {
  //     type: 'number',
  //     component: 'slider',
  //     range: {
  //       min: {
  //         value: 0,
  //         label: { en: 'Fatigue is no problem', nl: '' }
  //       },
  //       max: {
  //         value: 10,
  //         label: { en: 'Fatigue is a major problem', nl: '' }
  //       }
  //     }
  //   },
  // },
  // {
  //   input_id: 'SLEEPING',
  //   label: {
  //     en: 'How much of a problem has sleeping been for you OVER THE PAST WEEK?',
  //     nl: ''
  //   },
  //   input_type: {
  //     type: 'number',
  //     component: 'slider',
  //     range: {
  //       min: {
  //         value: 0,
  //         label: { en: 'Sleep is no problem', nl: '' }
  //       },
  //       max: {
  //         value: 10,
  //         label: { en: 'Sleep is a major problem', nl: '' }
  //       }
  //     }
  //   },
  // },
  // {
  //   input_id: 'ARTHRITIS_ACTIVE',
  //   label: {
  //     en: 'How active has your arthritis been in the LAST 24 HOURS?',
  //     nl: ''
  //   },
  //   input_type: {
  //     type: 'number',
  //     component: 'slider',
  //     range: {
  //       min: {
  //         value: 0,
  //         label: { en: 'Very well', nl: '' }
  //       },
  //       max: {
  //         value: 10,
  //         label: { en: 'Very poorly', nl: '' }
  //       }
  //     }
  //   },
  // },
  // {
  //   input_id: 'STIFF',
  //   label: {
  //     en: 'When you get up in the morning do you feel stiff?',
  //     nl: ''
  //   },
  //   input_type: {
  //     type: 'boolean'
  //   },
  // },
  // {
  //   input_id: 'HOW_DO_YOU_FEEL',
  //   label: {
  //     en: 'How do you feel today compared to ONE MONTH AGO? Please check only one:',
  //     nl: ''
  //   },
  //   input_type: {
  //     type: 'number',
  //     allowed_answers: [
  //       {
  //         value: 1,
  //         label: { en: 'Much better', nl: '' }
  //       },
  //       {
  //         value: 2,
  //         label: { en: 'Better', nl: '' }
  //       },
  //       {
  //         value: 3,
  //         label: { en: 'The same', nl: '' }
  //       },
  //       {
  //         value: 4,
  //         label: { en: 'Worse', nl: '' }
  //       },
  //       {
  //         value: 5,
  //         label: { en: 'Much worse', nl: '' }
  //       }
  //     ]
  //   },
  // }
} satisfies ScoreInputSchemaType
