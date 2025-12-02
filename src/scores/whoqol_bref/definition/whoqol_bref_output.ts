import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const WHOQOL_BREF_OUTPUT = {
  QUALITY_OF_LIFE: {
    label: {
      en: 'Quality of Life',
      pl: 'Jakość życia',
    },
    type: z.number(),
  },
  HEALTH_SATISFACTION: {
    label: {
      en: 'Health Satisfaction',
      pl: 'Zadowolenie ze zdrowia',
    },
    type: z.number(),
  },
  PHYSICAL_HEALTH: {
    label: {
      en: 'Physical Health (Somatic Domain)',
      pl: 'Zdrowie fizyczne (Domena Somatyczna)',
    },
    type: z.number(),
  },
  PSYCHOLOGICAL_HEALTH: {
    label: {
      en: 'Psychological Health (Psychological Domain)',
      pl: 'Zdrowie psychologiczne (Domena Psychologiczna)',
    },
    type: z.number(),
  },
  SOCIAL_RELATIONSHIPS: {
    label: {
      en: 'Social Relationships (Social Domain)',
      pl: 'Relacje społeczne (Domena Socjalna)',
    },
    type: z.number(),
  },
  ENVIRONMENT: {
    label: {
      en: 'Environment (Environmental Domain)',
      pl: 'Środowisko (Domena Środowiskowa)',
    },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
