/**
 * UAS7 disease activity score bands.
 * Source: Hollis et al., 2018 (https://pmc.ncbi.nlm.nih.gov/articles/PMC5978890/)
 */

export type UAS7BandKey =
  | 'URTICARIA_FREE'
  | 'WELL_CONTROLLED'
  | 'MILD'
  | 'MODERATE'
  | 'SEVERE'

export const UAS7_INTERPRETATION_CODE = {
  URTICARIA_FREE: { en: 'Urticaria-free' },
  WELL_CONTROLLED: { en: 'Well-controlled' },
  MILD: { en: 'Mild' },
  MODERATE: { en: 'Moderate' },
  SEVERE: { en: 'Severe' },
}

export const UAS7_INTERPRETATION_LABEL = {
  URTICARIA_FREE: {
    en: 'Itch and hive free — indicative of no symptoms of CSU and considered a full treatment response',
  },
  WELL_CONTROLLED: {
    en: 'Well-controlled urticaria — indicates a good response to treatment',
  },
  MILD: {
    en: 'Mild urticaria — indicates also a lower response level',
  },
  MODERATE: {
    en: 'Moderate activity urticaria — entry criteria for clinical trials in CSU',
  },
  SEVERE: {
    en: 'Severe activity urticaria',
  },
}

export const UAS7_SCORE_BANDS: Array<{
  min: number
  max: number
  key: UAS7BandKey
}> = [
  { min: 0, max: 0, key: 'URTICARIA_FREE' },
  { min: 1, max: 6, key: 'WELL_CONTROLLED' },
  { min: 7, max: 15, key: 'MILD' },
  { min: 16, max: 27, key: 'MODERATE' },
  { min: 28, max: 42, key: 'SEVERE' },
]
