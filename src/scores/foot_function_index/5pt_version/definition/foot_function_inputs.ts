import { z } from 'zod'
import type {
  EnumNumberInputType,
  ScoreInputSchemaType,
} from '../../../../types'

export const NOT_APPLICABLE_ANSWER = 999

const limitationType = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(NOT_APPLICABLE_ANSWER),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: 0,
        label: { nl: 'Nooit' },
      },
      {
        value: 1,
        label: { nl: 'Zelden' },
      },
      {
        value: 2,
        label: { nl: 'Af en toe' },
      },
      {
        value: 3,
        label: { nl: 'Meestal' },
      },
      {
        value: 4,
        label: { nl: 'Altijd' },
      },
      {
        value: NOT_APPLICABLE_ANSWER,
        label: { nl: 'Niet van toepassing' },
      },
    ],
  },
} satisfies EnumNumberInputType

const painType = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(NOT_APPLICABLE_ANSWER),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: 0,
        label: { nl: 'Geen pijn' },
      },
      {
        value: 1,
        label: { nl: 'Enige pijn' },
      },
      {
        value: 2,
        label: { nl: 'Nogal wat pijn' },
      },
      {
        value: 3,
        label: { nl: 'Veel pijn' },
      },
      {
        value: 4,
        label: { nl: 'Niet te verdragen pijn' },
      },
      {
        value: NOT_APPLICABLE_ANSWER,
        label: { nl: 'Niet van toepassing' },
      },
    ],
  },
} satisfies EnumNumberInputType

const disabilityType = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(NOT_APPLICABLE_ANSWER),
    ])
    .optional(),
  uiOptions: {
    options: [
      {
        value: 0,
        label: { nl: 'Geen moeite' },
      },
      {
        value: 1,
        label: { nl: 'Enige moeite' },
      },
      {
        value: 2,
        label: { nl: 'Nogal wat moeite' },
      },
      {
        value: 3,
        label: { nl: 'Veel moeite' },
      },
      {
        value: 4,
        label: { nl: 'Niet in staat' },
      },
      {
        value: NOT_APPLICABLE_ANSWER,
        label: { nl: 'Niet van toepassing' },
      },
    ],
  },
} satisfies EnumNumberInputType

export const FFI_INPUTS = {
  LIMITATION_Q01: {
    label: {
      nl: 'Hoe vaak gebruikte u in de afgelopen weken een stok, krukken, een looprek of rollator binnenshuis als gevolg van uw voetklachten?',
    },
    ...limitationType,
  },
  LIMITATION_Q02: {
    label: {
      nl: 'Hoe vaak gebruikte u in de afgelopen weken een stok, krukken, een looprek of rollator buitenshuis als gevolg van uw voetklachten?',
    },
    ...limitationType,
  },
  LIMITATION_Q03: {
    label: {
      nl: 'Hoe vaak bleef u in de afgelopen weken bijna de hele dag binnen als gevolg van uw voetklachten?',
    },
    ...limitationType,
  },
  LIMITATION_Q04: {
    label: {
      nl: 'Hoe vaak bleef u in de afgelopen weken bijna de hele dag in bed als gevolg van uw voetklachten?',
    },
    ...limitationType,
  },
  LIMITATION_Q05: {
    label: {
      nl: 'Hoe vaak in de afgelopen weken beperkte u uw activiteiten als gevolg van uw voetklachten?',
    },
    ...limitationType,
  },
  PAIN_Q01: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week toen deze op zijn ergst was?',
    },
    ...painType,
  },
  PAIN_Q02: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week voor u uit bed kwam ’s morgens?',
    },
    ...painType,
  },
  PAIN_Q03: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week bij lopen op blote voeten?',
    },
    ...painType,
  },
  PAIN_Q04: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week bij staan op blote voeten?',
    },
    ...painType,
  },
  PAIN_Q05: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week bij lopen met schoenen aan?',
    },
    ...painType,
  },
  PAIN_Q06: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week bij staan met schoenen aan?',
    },
    ...painType,
  },
  PAIN_Q07: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week bij lopen met inlays of aangepaste binnenzolen?',
    },
    ...painType,
  },
  PAIN_Q08: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week bij staan met inlays of aangepaste binnenzolen?',
    },
    ...painType,
  },
  PAIN_Q09: {
    label: {
      nl: 'Hoeveel pijn had u in de afgelopen week aan het einde van de dag?',
    },
    ...painType,
  },
  DISABILITY_Q01: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om binnenshuis te lopen?',
    },
    ...disabilityType,
  },
  DISABILITY_Q02: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om buitenshuis te lopen op oneffen terrein?',
    },
    ...disabilityType,
  },
  DISABILITY_Q03: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om 500 meter of meer te lopen',
    },
    ...disabilityType,
  },
  DISABILITY_Q04: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om de trap op te lopen?',
    },
    ...disabilityType,
  },
  DISABILITY_Q05: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om de trap af te lopen?',
    },
    ...disabilityType,
  },
  DISABILITY_Q06: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om op de tenen te staan?',
    },
    ...disabilityType,
  },
  DISABILITY_Q07: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om op te staan uit een stoel?',
    },
    ...disabilityType,
  },
  DISABILITY_Q08: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om een stoeprand op- of af te stappen?',
    },
    ...disabilityType,
  },
  DISABILITY_Q09: {
    label: {
      nl: 'Hoeveel moeite had u in de afgelopen week, als gevolg van uw voetklachten, om snel te lopen of te rennen?',
    },
    ...disabilityType,
  },
} satisfies ScoreInputSchemaType
