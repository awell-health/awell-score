// @flow
import type { InputType } from '../../../../types/calculations.types'

export const BASDAI_INPUTS: Array<InputType> = [
  {
    input_id: 'Q1',
    input_label: {
      en: 'How would you describe the overall level of FATIGUE/TIREDNESS you have experienced?',
      nl: 'Hoe moe was u?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'None', nl: 'Niet' }
        },
        max: {
          value: 10,
          label: { en: 'Very severe', nl: 'Heel erg' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q2',
    input_label: {
      en: 'How would you describe the overall level of AS NECK, BACK or HIP pain you have had?',
      nl: 'Hoeveel pijn in de nek, rug of heup had u als gevolg van de ziekte van Bechterew?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'None', nl: 'Geen' }
        },
        max: {
          value: 10,
          label: { en: 'Very severe', nl: 'Zeer veel' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q3',
    input_label: {
      en: 'How would you describe the overall level of pain/swelling in joints OTHER THAN neck, back or hips you have had?',
      nl: 'Hoeveel pijn en zwelling had u in andere gewrichten dan de nek, rug en heupen?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'None', nl: 'Geen' }
        },
        max: {
          value: 10,
          label: { en: 'Very severe', nl: 'Zeer veel' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q4',
    input_label: {
      en: 'How would you describe the overall level of DISCOMFORT you have had from any areas tender to touch or pressure?',
      nl: 'Hoeveel last had u van plaatsen op uw lichaam die gevoelig zijn bij aanraken of druk?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'None', nl: 'Geen' }
        },
        max: {
          value: 10,
          label: { en: 'Very severe', nl: 'Zeer veel' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q5',
    input_label: {
      en: 'How would you describe the overall LEVEL of MORNING STIFFNESS you have had from the time you wake up?',
      nl: 'Hoeveel last had u van ochtendstijfheid vanaf het moment dat u opstond?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'None', nl: 'Geen' }
        },
        max: {
          value: 10,
          label: { en: 'Very severe', nl: 'Zeer veel' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q6',
    inverse: true,
    input_label: {
      en: 'HOW LONG does your MORNING STIFFNESS last from the time you wake up?',
      nl: 'Hoe lang duurde de ochtendstijfheid vanaf het moment dat u opstond?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: '0', nl: '0 uur' }
        },
        max: {
          value: 10,
          label: { en: '2+ hours', nl: '2 of meer' }
        }
      }
    },
    required: true
  }
]
