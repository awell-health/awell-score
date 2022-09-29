import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const TEN_METER_WALK_TEST_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'TMWT_MEAN_IN_SECONDS',
    label: { en: 'Mean in seconds', nl: 'Gemiddelde in seconden' },
    type: 'number',
    unit: { en: 'sec' },
  },
  {
    subresult_id: 'TMWT_MEAN_IN_METERS_PER_SECOND',
    label: {
      en: 'Mean in meters per second',
      nl: 'Gemiddelde in meter per seconde',
    },
    type: 'number',
    unit: { en: 'm/sec' },
  },
  {
    subresult_id: 'TMWT_MEAN_IN_KILOMETERS_PER_HOUR',
    label: {
      en: 'Mean in kilometers per hour',
      nl: 'Gemiddelde in kilometer per uur',
    },
    type: 'number',
    unit: { en: 'km/u' },
  },
]
