import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const TEN_METER_WALK_TEST_OUTPUT = {
  TMWT_MEAN_IN_SECONDS: {
    label: { en: 'Mean in seconds', nl: 'Gemiddelde in seconden' },
    type: z.number(),
    unit: { en: 'sec' },
  },
  TMWT_MEAN_IN_METERS_PER_SECOND: {
    label: {
      en: 'Mean in meters per second',
      nl: 'Gemiddelde in meter per seconde',
    },
    type: z.number(),
    unit: { en: 'm/sec' },
  },
  TMWT_MEAN_IN_KILOMETERS_PER_HOUR: {
    label: {
      en: 'Mean in kilometers per hour',
      nl: 'Gemiddelde in kilometer per uur',
    },
    type: z.number(),
    unit: { en: 'km/u' },
  },
} satisfies ScoreOutputSchemaType
