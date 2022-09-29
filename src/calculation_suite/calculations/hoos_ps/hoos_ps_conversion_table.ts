type RawScore = string
type NormalizedScore = number

type HoosConversionTable = {
  [key in RawScore]: NormalizedScore
}

/**
 * The conversion table reverses the score
 * - Raw score = the higher, the worse
 * - Normalized score = the higher, the better
 *
 * So in the end we have a score from [0, 100] where 0 is extreme difficulty and 100 no difficulty.
 */
export const hoos_conversion_table: HoosConversionTable = {
  '0': 100,
  '1': 95.4,
  '2': 91.2,
  '3': 87.3,
  '4': 83.6,
  '5': 80,
  '6': 76.6,
  '7': 73.1,
  '8': 69.6,
  '9': 66.1,
  '10': 62.3,
  '11': 58.3,
  '12': 53.9,
  '13': 49.2,
  '14': 44.1,
  '15': 38.4,
  '16': 32.1,
  '17': 25.2,
  '18': 17.6,
  '19': 9.2,
  '20': 0,
}
