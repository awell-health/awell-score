type SeverityType = 'Normal' | 'Mild' | 'Moderate' | 'Severe'

export const PHQ4_INTERPRATION_TABLE: Record<string, SeverityType> = {
  '0': 'Normal',
  '1': 'Normal',
  '2': 'Normal',
  '3': 'Mild',
  '4': 'Mild',
  '5': 'Mild',
  '6': 'Moderate',
  '7': 'Moderate',
  '8': 'Moderate',
  '9': 'Severe',
  '10': 'Severe',
  '11': 'Severe',
  '12': 'Severe',
}
