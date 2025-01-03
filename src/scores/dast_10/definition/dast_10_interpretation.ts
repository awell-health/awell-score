type DegreeOfProblemsType =
  | 'No problems reported'
  | 'Low level'
  | 'Moderate level'
  | 'Substantial level'
  | 'Severe level'

export const DAST10_INTERPRETATION_TABLE: {
  [key: string]: DegreeOfProblemsType
} = {
  '0': 'No problems reported',
  '1': 'Low level',
  '2': 'Low level',
  '3': 'Moderate level',
  '4': 'Moderate level',
  '5': 'Moderate level',
  '6': 'Substantial level',
  '7': 'Substantial level',
  '8': 'Substantial level',
  '9': 'Severe level',
  '10': 'Severe level',
}
