import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const OAS_OUTPUT = {
  OAS_TOTAL_SUM_SCORE: {
    label: { en: 'OAS Total Sum Score' },
    type: z.number(),
  },
  OAS_DAILY_ACTIVITIES_SUM_SCORE: {
    label: { en: 'OAS Daily Activities Sum Score' },
    type: z.number(),
  },
  OAS_DAILY_ACTIVITIES_MEAN_SCORE: {
    label: { en: 'OAS Daily Activities Mean Score' },
    type: z.number(),
  },
  OAS_KNOWLEDGE_AND_SKILLS_SUM_SCORE: {
    label: { en: 'OAS Knowledge and Skills Sum Score' },
    type: z.number(),
  },
  OAS_KNOWLEDGE_AND_SKILLS_MEAN_SCORE: {
    label: { en: 'OAS Knowledge and Skills Mean Score' },
    type: z.number(),
  },
  OAS_SELF_ESTEEM_SUM_SCORE: {
    label: { en: 'OAS Self Esteem Sum Score' },
    type: z.number(),
  },
  OAS_SELF_ESTEEM_MEAN_SCORE: {
    label: { en: 'OAS Self Esteem Mean Score' },
    type: z.number(),
  },
  OAS_PSYCHOLOGICAL_EXISTENTIAL_SUM_SCORE: {
    label: { en: 'OAS Psychological/Existential Sum Score' },
    type: z.number(),
  },
  OAS_PSYCHOLOGICAL_EXISTENTIAL_MEAN_SCORE: {
    label: { en: 'OAS Psychological/Existential Mean Score' },
    type: z.number(),
  },
  OAS_HEALTH_SUM_SCORE: {
    label: { en: 'OAS Health Sum Score' },
    type: z.number(),
  },
  OAS_HEALTH_MEAN_SCORE: {
    label: { en: 'OAS Health Mean Score' },
    type: z.number(),
  },
  OAS_HEALTH_PROFESSIONALS_SUM_SCORE: {
    label: { en: 'OAS Health Professionals Sum Score' },
    type: z.number(),
  },
  OAS_HEALTH_PROFESSIONALS_MEAN_SCORE: {
    label: { en: 'OAS Health Professionals Mean Score' },
    type: z.number(),
  },
  OAS_SEXUALITY_SUM_SCORE: {
    label: { en: 'OAS Sexuality Sum Score' },
    type: z.number(),
  },
  OAS_SEXUALITY_MEAN_SCORE: {
    label: { en: 'OAS Sexuality Mean Score' },
    type: z.number(),
  },
  OAS_MEAN_SCORE: {
    label: { en: 'OAS Mean Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
