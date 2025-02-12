// @flow
import type { InputType } from '../../../../types/calculations.types'

export const HAQ_INPUTS: Array<InputType> = [
  {
    input_id: 'DRESSING_1',
    input_label: {
      en: 'Over the past week, were you able to dress yourself, including tying shoelaces and doing buttons?',
      nl: 'Kon u in de afgelopen week uzelf aankleden, inclusief veters strikken en knopen dichtmaken?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'DRESSING_2',
    input_label: {
      en: 'Over the past week, were you able to shampoo your hair?',
      nl: 'Kon u in de afgelopen week uw haar wassen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'ARISING_1',
    input_label: {
      en: 'Over the past week, were you able to stand up from an armless chair?',
      nl: 'Kon u in de afgelopen week opstaan vanuit een rechte stoel?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'ARISING_2',
    input_label: {
      en: 'Over the past week, were you able to get in and out of bed?',
      nl: 'Kon u in de afgelopen week in en uit bed komen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'EATING_1',
    input_label: {
      en: 'Over the past week, were you able to cut your meat?',
      nl: 'Kon u in de afgelopen week vlees snijden?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'EATING_2',
    input_label: {
      en: 'Over the past week, were you able to lift a full cup or glass to your mouth?',
      nl: 'Kon u in de afgelopen week een vol kopje of glas naar de mond brengen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'EATING_3',
    input_label: {
      en: 'Over the past week, were you able to open a new milk carton?',
      nl: 'Kon u in de afgelopen week een nieuw pak melk openen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'WALKING_1',
    input_label: {
      en: 'Over the past week, were you able to walk outdoors on flat ground?',
      nl: 'Kon u in de afgelopen week buitenshuis op vlak terrein wandelen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'WALKING_2',
    input_label: {
      en: 'Over the past week, were you able to climb up five steps?',
      nl: 'Kon u in de afgelopen week vijf traptreden oplopen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'AIDS_OR_DEVICES_PART_1',
    input_label: {
      en: 'Please check any AIDS OR DEVICES that you usually use for any of these activities (dressing and grooming, arising, eating, walking):',
      nl: 'Kruis aan welke HULPMIDDELEN u gewoonlijk gebruikt voor bovenstaande activiteiten:'
    },
    input_type: {
      type: 'strings_array',
      allowed_answers: [
        {
          value: 'cane',
          label: {
            en: 'Cane',
            nl: 'Wandelstok'
          }
        },
        {
          value: 'walker',
          label: {
            en: 'Walker',
            nl: 'Rollator/Looprekje'
          }
        },
        {
          value: 'crutches',
          label: {
            en: 'Crutches',
            nl: 'Krukken'
          }
        },
        {
          value: 'wheelchair',
          label: {
            en: 'Wheelchair',
            nl: 'Rolstoel'
          }
        },
        {
          value: 'devices_used_for_dressing',
          label: {
            en: 'Devices used for dressing (button hook, zipper puller, etc)',
            nl: 'Hulpmiddelen, gebruikt bij het aankleden (knopenhaakje, kousenaantrekker schoenlepel met lange steel, etc.)'
          }
        },
        {
          value: 'built_up_or_special_utensils',
          label: {
            en: 'Built-up or special utensils',
            nl: 'Aangepast bestek'
          }
        },
        {
          value: 'special_or_built_up_chair',
          label: {
            en: 'Special or built up chair',
            nl: 'Speciale of aangepaste stoel'
          }
        },
        {
          value: 'other',
          label: {
            en: 'Other',
            nl: 'Overig'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'NEED_HELP_PART_1',
    input_label: {
      en: 'Please check any categories for which you need HELP FROM ANOTHER PERSON',
      nl: ''
    },
    input_type: {
      type: 'strings_array',
      allowed_answers: [
        {
          value: 'dressing',
          label: {
            en: 'Dressing and grooming',
            nl: 'Aankleden/verzorging'
          }
        },
        {
          value: 'arising',
          label: {
            en: 'Arising',
            nl: 'Opstaan'
          }
        },
        {
          value: 'eating',
          label: {
            en: 'Eating',
            nl: 'Eten'
          }
        },
        {
          value: 'walking',
          label: {
            en: 'Walking',
            nl: 'Lopen'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'HYGIENE_1',
    input_label: {
      en: 'Over the past week, were you able to wash and dry your entire body?',
      nl: 'Kon u in de afgelopen week zelf Uw lichaam wassen en afdrogen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'HYGIENE_2',
    input_label: {
      en: 'Over the past week, were you able to take a tub bath?',
      nl: 'Kon u in de afgelopen week in en uit bad komen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'HYGIENE_3',
    input_label: {
      en: 'Over the past week, were you able to get on and off the toilet?',
      nl: 'Kon u in de afgelopen week op en van het toilet komen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'REACH_1',
    input_label: {
      en: 'Over the past week, were you able to reach and get a 5-lb object (such as a bag of sugar) from just above your head?',
      nl: 'Kon u in de afgelopen week iets van ongeveer 2,5 kg (bijv. een zak aardappelen of rijst) van net boven uw hoofd pakken?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'REACH_2',
    input_label: {
      en: 'Over the past week, were you able to bend down and pick up clothing from the floor?',
      nl: 'Kon u in de afgelopen week voorover buigen om kleren van de vloer op te rapen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'GRIP_1',
    input_label: {
      en: 'Over the past week, were you able to open car doors?',
      nl: 'Kon u in de afgelopen week auto–portieren openen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'GRIP_2',
    input_label: {
      en: 'Over the past week, were you able to get open jars which have been previously opened?',
      nl: 'Kon u in de afgelopen week deksels van potjes die al eens geopend zijn, losdraaien?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'GRIP_3',
    input_label: {
      en: 'Over the past week, were you able to turn faucets on and off?',
      nl: 'Kon u in de afgelopen week een kraan open– en dichtdraaien?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'ACTIVITIES_1',
    input_label: {
      en: 'Over the past week, were you able to run errands and shop?',
      nl: 'Kon u in de afgelopen week boodschappen doen en winkelen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'ACTIVITIES_2',
    input_label: {
      en: 'Over the past week, were you able to get in and out of a car?',
      nl: 'Kon u in de afgelopen week in en uit een auto komen?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'ACTIVITIES_3',
    input_label: {
      en: 'Over the past week, were you able to do chores such as vacuuming, yard work?',
      nl: 'Kon u in de afgelopen week klusjes doen, zoals stofzuigen of in de tuin werken?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Without any difficulty', nl: 'Zonder enige moeite' }
        },
        {
          value: 1,
          label: { en: 'Without some difficulty', nl: 'Met enige moeite' }
        },
        {
          value: 2,
          label: { en: 'Without much difficulty', nl: 'Met veel moeite' }
        },
        {
          value: 3,
          label: { en: 'Unable to do', nl: 'Onmogelijk uit te voeren' }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'AIDS_OR_DEVICES_PART_2',
    input_label: {
      en: 'Please check any AIDS OR DEVICES that you usually use for any of these activities (hygiene, reach, grip, activities):',
      nl: 'Kruis aan welke HULPMIDDELEN u gewoonlijk gebruikt voor bovenstaande activiteiten:'
    },
    input_type: {
      type: 'strings_array',
      allowed_answers: [
        {
          value: 'raised_toilet_seat',
          label: {
            en: 'Raised toilet seat',
            nl: 'Verhoogd toilet'
          }
        },
        {
          value: 'bathtub_seat',
          label: {
            en: 'Bathtub seat',
            nl: 'Douchestoel, douchezitje, badplank'
          }
        },
        {
          value: 'jar_opener',
          label: {
            en: 'Jar opener',
            nl: 'Opener voor potten (als de pot al eens geopend is)'
          }
        },
        {
          value: 'long_handled_appliances_for_reach',
          label: {
            en: 'Long-handled appliances for reach',
            nl: 'Hulpmiddelen met lange steel (om ergens bij te kunnen)'
          }
        },
        {
          value: 'long_handled_appliances_in_bathroom',
          label: {
            en: 'Long-handled appliances in bathroom',
            nl: 'Hulpmiddelen met lange steel in de badkamer'
          }
        },
        {
          value: 'bathtub_bar',
          label: {
            en: 'Bathtub bar',
            nl: 'Beugels of steunen in badkuip of douche'
          }
        },
        {
          value: 'other',
          label: {
            en: 'Other',
            nl: 'Overig'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'NEED_HELP_PART_2',
    input_label: {
      en: 'Please check any categories for which you need HELP FROM ANOTHER PERSON',
      nl: 'Kruis elke categorie aan waarvoor u gewoonlijk HULP VAN ANDEREN nodig heeft:'
    },
    input_type: {
      type: 'strings_array',
      allowed_answers: [
        {
          value: 'hygiene',
          label: {
            en: 'Hygiene',
            nl: 'Wassen en toiletbezoek'
          }
        },
        {
          value: 'reach',
          label: {
            en: 'Reach',
            nl: 'Naar voorwerpen reiken'
          }
        },
        {
          value: 'grip',
          label: {
            en: 'Gripping and opening things',
            nl: 'Voorwerpen pakken en openen'
          }
        },
        {
          value: 'activities',
          label: {
            en: 'Errands and chores',
            nl: 'Boodschappen doen en klussen'
          }
        }
      ]
    },
    required: true
  }
  /**
   * BELOW IS SOMETIMES PART OF AN EXTENDED VERSION
   * OF THE HAQ BUT WE DON'T NEED IT YET
   */
  // {
  //   input_id: 'PAIN',
  //   input_label: {
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
  //   required: true
  // },
  // {
  //   input_id: 'FATIGUE',
  //   input_label: {
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
  //   required: true
  // },
  // {
  //   input_id: 'SLEEPING',
  //   input_label: {
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
  //   required: true
  // },
  // {
  //   input_id: 'ARTHRITIS_ACTIVE',
  //   input_label: {
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
  //   required: true
  // },
  // {
  //   input_id: 'STIFF',
  //   input_label: {
  //     en: 'When you get up in the morning do you feel stiff?',
  //     nl: ''
  //   },
  //   input_type: {
  //     type: 'boolean'
  //   },
  //   required: true
  // },
  // {
  //   input_id: 'HOW_DO_YOU_FEEL',
  //   input_label: {
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
  //   required: true
  // }
]
