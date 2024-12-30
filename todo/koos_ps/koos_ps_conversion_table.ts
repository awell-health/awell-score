type RawScore = string
type NormalizedScore = number

type KoosConversionTable = Record<RawScore, NormalizedScore>

/**
 * The conversion table reverses the score
 * - Raw score = the higher, the worse
 * - Normalized score = the higher, the better
 *
 * So in the end we have a score from [0, 100] where 0 is extreme difficulty and 100 no difficulty.
 */
export const koos_conversion_table: KoosConversionTable = {
  '0': 100,
  '1': 94.4,
  '2': 89.5,
  '3': 85.2,
  '4': 81.4,
  '5': 78,
  '6': 75.1,
  '7': 72.5,
  '8': 70.3,
  '9': 68.2,
  '10': 66.4,
  '11': 64.7,
  '12': 63,
  '13': 61.4,
  '14': 59.7,
  '15': 58,
  '16': 56,
  '17': 53.9,
  '18': 51.5,
  '19': 48.8,
  '20': 45.6,
  '21': 42.1,
  '22': 38,
  '23': 33.4,
  '24': 28.2,
  '25': 22.3,
  '26': 15.7,
  '27': 8.2,
  '28': 0,
}
