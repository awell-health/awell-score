type AcceptanceOfIllnessType =
  | 'Low acceptance'
  | 'Moderate acceptance'
  | 'High acceptance'

export const AIS_INTERPRETATION_TABLE: {
  [key: string]: AcceptanceOfIllnessType
} = {
  // Low acceptance: scores 8-19
  '8': 'Low acceptance',
  '9': 'Low acceptance',
  '10': 'Low acceptance',
  '11': 'Low acceptance',
  '12': 'Low acceptance',
  '13': 'Low acceptance',
  '14': 'Low acceptance',
  '15': 'Low acceptance',
  '16': 'Low acceptance',
  '17': 'Low acceptance',
  '18': 'Low acceptance',
  '19': 'Low acceptance',
  
  // Moderate acceptance: scores 20-30
  '20': 'Moderate acceptance',
  '21': 'Moderate acceptance',
  '22': 'Moderate acceptance',
  '23': 'Moderate acceptance',
  '24': 'Moderate acceptance',
  '25': 'Moderate acceptance',
  '26': 'Moderate acceptance',
  '27': 'Moderate acceptance',
  '28': 'Moderate acceptance',
  '29': 'Moderate acceptance',
  '30': 'Moderate acceptance',
  
  // High acceptance: scores 31-40
  '31': 'High acceptance',
  '32': 'High acceptance',
  '33': 'High acceptance',
  '34': 'High acceptance',
  '35': 'High acceptance',
  '36': 'High acceptance',
  '37': 'High acceptance',
  '38': 'High acceptance',
  '39': 'High acceptance',
  '40': 'High acceptance',
}
