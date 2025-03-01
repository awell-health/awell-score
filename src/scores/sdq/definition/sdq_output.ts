import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const SDQ_OUTPUT = {
  TOTAL: {
    type: z.number(),
    label: { en: 'Total difficulties score' },
  },
  EMOTIONAL_PROBLEMS: {
    type: z.number(),
    label: { en: 'Emotional problems' },
  },
  CONDUCT_PROBLEMS: {
    type: z.number(),
    label: { en: 'Conduct problems' },
  },
  HYPERACTIVITY: {
    type: z.number(),
    label: { en: 'Hyperactivity' },
  },
  PEER_PROBLEMS: {
    type: z.number(),
    label: { en: 'Peer problems' },
  },
  PROSOCIAL: {
    type: z.number(),
    label: { en: 'Prosocial' },
  },
  IMPACT_PARENT_REPORTED: {
    type: z.number(),
    label: { en: 'Impact - Parent reported' },
  },
  IMPACT_TEACHER_REPORTED: {
    type: z.number(),
    label: { en: 'Impact - Teacher reported' },
  },
  IMPACT_SELF_REPORTED: {
    type: z.number(),
    label: { en: 'Impact - Self reported' },
  },
  INTERNALISING: {
    type: z.number(),
    label: { en: 'Internalising' },
  },
  EXTERNALISING: {
    type: z.number(),
    label: { en: 'Externalising' },
  },
  EMOTIONAL_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Emotional problems - Parent reported - Categorising - Three band',
    },
  },
  EMOTIONAL_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Emotional problems - Teacher reported - Categorising - Three band',
    },
  },
  EMOTIONAL_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Emotional problems - Self reported - Categorising - Three band',
    },
  },
  CONDUCT_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Conduct problems - Parent reported - Categorising - Three band',
    },
  },
  CONDUCT_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Conduct problems - Teacher reported - Categorising - Three band',
    },
  },
  CONDUCT_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Conduct problems - Self reported - Categorising - Three band',
    },
  },
  HYPERACTIVITY_PARENT_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Hyperactivity - Parent reported - Categorising - Three band',
    },
  },
  HYPERACTIVITY_TEACHER_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Hyperactivity - Teacher reported - Categorising - Three band',
    },
  },
  HYPERACTIVITY_SELF_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Hyperactivity - Self reported - Categorising - Three band',
    },
  },
  PEER_PROBLEMS_PARENT_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Peer problems - Parent reported - Categorising - Three band',
    },
  },
  PEER_PROBLEMS_TEACHER_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Peer problems - Teacher reported - Categorising - Three band',
    },
  },
  PEER_PROBLEMS_SELF_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Peer problems - Self reported - Categorising - Three band',
    },
  },
  PROSOCIAL_PARENT_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Prosocial - Parent reported - Categorising - Three band',
    },
  },
  PROSOCIAL_TEACHER_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Prosocial - Teacher reported - Categorising - Three band',
    },
  },
  PROSOCIAL_SELF_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Prosocial - Self reported - Categorising - Three band',
    },
  },
  TOTAL_PARENT_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Total difficulties score - Parent reported - Categorising - Three band',
    },
  },
  TOTAL_TEACHER_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Total difficulties score - Teacher reported - Categorising - Three band',
    },
  },
  TOTAL_SELF_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Total difficulties score - Self reported - Categorising - Three band',
    },
  },
  EMOTIONAL_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Emotional problems - Parent reported - Categorising - Four band',
    },
  },
  EMOTIONAL_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Emotional problems - Teacher reported - Categorising - Four band',
    },
  },
  EMOTIONAL_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Emotional problems - Self reported - Categorising - Four band',
    },
  },
  CONDUCT_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Conduct problems - Parent reported - Categorising - Four band',
    },
  },
  CONDUCT_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Conduct problems - Teacher reported - Categorising - Four band',
    },
  },
  CONDUCT_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Conduct problems - Self reported - Categorising - Four band',
    },
  },
  HYPERACTIVITY_PARENT_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Hyperactivity - Parent reported - Categorising - Four band',
    },
  },
  HYPERACTIVITY_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Hyperactivity - Teacher reported - Categorising - Four band',
    },
  },
  HYPERACTIVITY_SELF_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Hyperactivity - Self reported - Categorising - Four band',
    },
  },
  PEER_PROBLEMS_PARENT_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Peer problems - Parent reported - Categorising - Four band',
    },
  },
  PEER_PROBLEMS_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Peer problems - Teacher reported - Categorising - Four band',
    },
  },
  PEER_PROBLEMS_SELF_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Peer problems - Self reported - Categorising - Four band',
    },
  },
  PROSOCIAL_PARENT_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Prosocial - Parent reported - Categorising - Four band',
    },
  },
  PROSOCIAL_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Prosocial - Teacher reported - Categorising - Four band',
    },
  },
  PROSOCIAL_SELF_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Prosocial - Self reported - Categorising - Four band',
    },
  },
  TOTAL_PARENT_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Total difficulties score - Parent reported - Categorising - Four band',
    },
  },
  TOTAL_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Total difficulties score - Teacher reported - Categorising - Four band',
    },
  },
  TOTAL_SELF_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Total difficulties score - Self reported - Categorising - Four band',
    },
  },
  IMPACT_PARENT_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Impact - Parent reported - Categorising - Three band',
    },
  },
  IMPACT_TEACHER_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Impact - Teacher reported - Categorising - Three band',
    },
  },
  IMPACT_SELF_REPORTED_THREE_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Impact - Self reported - Categorising - Three band',
    },
  },
  IMPACT_PARENT_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Impact - Parent reported - Categorising - Four band',
    },
  },
  IMPACT_TEACHER_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Impact - Teacher reported - Categorising - Four band',
    },
  },
  IMPACT_SELF_REPORTED_FOUR_BAND_CATEGORISING: {
    type: z.string(),
    label: {
      en: 'Impact - Self reported - Categorising - Four band',
    },
  },
} satisfies ScoreOutputSchemaType
