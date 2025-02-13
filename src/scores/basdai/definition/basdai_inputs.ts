import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const BASDAI_INPUTS = {
  Q1: {
    label: {
      en: 'How would you describe the overall level of FATIGUE/TIREDNESS you have experienced?',
      nl: 'Hoe moe was u?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Niet' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Heel erg' },
        },
      },
    },
  },
  Q2: {
    label: {
      en: 'How would you describe the overall level of AS NECK, BACK or HIP pain you have had?',
      nl: 'Hoeveel pijn in de nek, rug of heup had u als gevolg van de ziekte van Bechterew?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q3: {
    label: {
      en: 'How would you describe the overall level of pain/swelling in joints OTHER THAN neck, back or hips you have had?',
      nl: 'Hoeveel pijn en zwelling had u in andere gewrichten dan de nek, rug en heupen?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q4: {
    label: {
      en: 'How would you describe the overall level of DISCOMFORT you have had from any areas tender to touch or pressure?',
      nl: 'Hoeveel last had u van plaatsen op uw lichaam die gevoelig zijn bij aanraken of druk?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q5: {
    label: {
      en: 'How would you describe the overall LEVEL of MORNING STIFFNESS you have had from the time you wake up?',
      nl: 'Hoeveel last had u van ochtendstijfheid vanaf het moment dat u opstond?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'None', nl: 'Geen' },
        },
        max: {
          label: { en: 'Very severe', nl: 'Zeer veel' },
        },
      },
    },
  },
  Q6: {
    label: {
      en: 'HOW LONG does your MORNING STIFFNESS last from the time you wake up?',
      nl: 'Hoe lang duurde de ochtendstijfheid vanaf het moment dat u opstond?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: '0', nl: '0 uur' },
        },
        max: {
          label: { en: '2+ hours', nl: '2 of meer' },
        },
      },
    },
  },
} satisfies ScoreInputSchemaType
