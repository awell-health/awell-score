// @flow
import type { InputType } from '../../../../../../types/calculations.types'

export const OMPQ_10_INPUTS: Array<InputType> = [
  {
    input_id: 'OREBRO_DURATION',
    input_label: {
      nl: 'Hoe lang hebt u inmiddels last van uw huidige klacht?',
      en: 'How long have you had your current pain problem?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            en: '0-1 weeks',
            nl: '0-1 week'
          }
        },
        {
          value: 2,
          label: {
            en: '1-2 weeks',
            nl: '2-3 weken'
          }
        },
        {
          value: 3,
          label: {
            en: '3-4 weeks',
            nl: '4-5 weken'
          }
        },
        {
          value: 4,
          label: {
            en: '4-5 weeks',
            nl: '6-7 weken'
          }
        },
        {
          value: 5,
          label: {
            en: '6-8 weeks',
            nl: '8-9 weken'
          }
        },
        {
          value: 6,
          label: {
            en: '9-11 weeks',
            nl: '10-11 weken'
          }
        },
        {
          value: 7,
          label: {
            en: '3-6 months',
            nl: '12-23 weken'
          }
        },
        {
          value: 8,
          label: {
            en: '6-9 months',
            nl: '24-35 weken'
          }
        },
        {
          value: 9,
          label: {
            en: '9-12 months',
            nl: '36-52 weken'
          }
        },
        {
          value: 10,
          label: {
            en: 'over 1 year',
            nl: '> 52 weken'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_PAIN_EXPERIENCE',
    input_label: {
      nl: 'Hoe zou u de pijn beoordelen die u de afgelopen week hebt gehad?',
      en: 'How would you rate the pain that you have had during the past week?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'No pain',
            nl: 'Geen pijn'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Pain as bad as it could be',
            nl: 'Ergst denkbare pijn'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_FEELING_DEPRESSED',
    input_label: {
      nl: 'Hoeveel last hebt u de afgelopen week gehad van sombere gevoelens?',
      en: 'How much have you been bothered by feeling depressed in the past week?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Not at all',
            nl: 'Helemaal niet'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Extremely',
            nl: 'Zeer vaak'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_ANXIOUS',
    input_label: {
      nl: 'Hoe gespannen of angstig heeft u zich de afgelopen week gevoeld?',
      en: 'How tense or anxious have you felt in the past week? '
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Absolutely calm and relaxed',
            nl: 'Heel kalm en ontspannen'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: "As tense and anxious as I've ever felt",
            nl: 'Heel gespannen en angstig'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_RISK_OF_PERSISTENT_PAIN',
    input_label: {
      nl: 'Hoe groot is volgens u het risico dat uw huidige pijn blijft bestaan?',
      en: 'In your view, how large is the risk that your current pain may become persistent?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'No risk',
            nl: 'Geen risico'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Very large risk',
            nl: 'Erg groot risico'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_RETURN_TO_WORK_EXPECTANCY',
    inverse: true,
    input_label: {
      nl: 'Hoe groot is volgens u de kans dat u binnen 6 maanden weer aan het werk bent?',
      en: 'In your estimation, what are the chances you will be working your normal duties in 3 months?'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'No chance',
            nl: 'Geen kans'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Very large chance',
            nl: 'Erg grote kans'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_PAIN_FEAR_AVOIDANCE',
    input_label: {
      nl: 'Een toename van pijn is een teken dat ik moet stoppen met wat ik aan het doen ben tot de pijn vermindert.',
      en: 'An increase in pain is an indication that I should stop what I’m doing until the pain decreases'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Completely disagree',
            nl: 'Geheel mee oneens'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Completely agree',
            nl: 'Geheel mee eens'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_NORMAL_WORK_WITH_PAIN',
    input_label: {
      nl: 'Met de huidige pijn zou ik mijn normale werk niet moeten doen.',
      en: 'I should not do my normal work with my present pain.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Completely disagree',
            nl: 'Geheel mee oneens'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Completely agree',
            nl: 'Geheel mee eens'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_LIGHT_WORK',
    inverse: true,
    input_label: {
      nl: 'Ik kan gedurende een uur lichte werkzaamheden doen.',
      en: 'I can do light work for an hour.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Can’t do it because of the pain problem',
            nl: 'Kan ik niet vanwege de pijn'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Can do it without pain being a problem',
            nl: 'Kan ik doen zonder dat de pijn me hindert'
          }
        }
      ]
    },
    required: true
  },
  {
    input_id: 'OREBRO_SLEEP_AT_NIGHT',
    inverse: true,
    input_label: {
      nl: 'Ik kan ‘s nachts slapen.',
      en: 'I can sleep at night.'
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            en: 'Can’t do it because of the pain problem',
            nl: 'Kan ik niet vanwege de pijn'
          }
        },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        {
          value: 10,
          label: {
            en: 'Can do it without pain being a problem',
            nl: 'Kan ik doen zonder dat de pijn me hindert'
          }
        }
      ]
    },
    required: true
  }
]
