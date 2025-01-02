type DepressionSeverityType =
  | 'None/minimal depression'
  | 'Mild depression'
  | 'Moderate depression'
  | 'Moderately severe depression'
  | 'Severe depression'

export const PHQ9_INTERPRATION_TABLE: {
  [key: string]: DepressionSeverityType
} = {
  '0': 'None/minimal depression',
  '1': 'None/minimal depression',
  '2': 'None/minimal depression',
  '3': 'None/minimal depression',
  '4': 'None/minimal depression',
  '5': 'Mild depression',
  '6': 'Mild depression',
  '7': 'Mild depression',
  '8': 'Mild depression',
  '9': 'Mild depression',
  '10': 'Moderate depression',
  '11': 'Moderate depression',
  '12': 'Moderate depression',
  '13': 'Moderate depression',
  '14': 'Moderate depression',
  '15': 'Moderately severe depression',
  '16': 'Moderately severe depression',
  '17': 'Moderately severe depression',
  '18': 'Moderately severe depression',
  '19': 'Moderately severe depression',
  '20': 'Severe depression',
  '21': 'Severe depression',
  '22': 'Severe depression',
  '23': 'Severe depression',
  '24': 'Severe depression',
  '25': 'Severe depression',
  '26': 'Severe depression',
  '27': 'Severe depression',
}
