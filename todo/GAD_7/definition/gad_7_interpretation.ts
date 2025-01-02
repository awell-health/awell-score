type AnxietynSeverityType =
  | 'No anxiety'
  | 'Mild anxiety'
  | 'Moderate anxiety'
  | 'Severe anxiety'

export const GAD7_INTERPRATION_TABLE: {
  [key: string]: AnxietynSeverityType
} = {
  '0': 'No anxiety',
  '1': 'No anxiety',
  '2': 'No anxiety',
  '3': 'No anxiety',
  '4': 'No anxiety',
  '5': 'Mild anxiety',
  '6': 'Mild anxiety',
  '7': 'Mild anxiety',
  '8': 'Mild anxiety',
  '9': 'Mild anxiety',
  '10': 'Moderate anxiety',
  '11': 'Moderate anxiety',
  '12': 'Moderate anxiety',
  '13': 'Moderate anxiety',
  '14': 'Moderate anxiety',
  '15': 'Severe anxiety',
  '16': 'Severe anxiety',
  '17': 'Severe anxiety',
  '18': 'Severe anxiety',
  '19': 'Severe anxiety',
  '20': 'Severe anxiety',
  '21': 'Severe anxiety',
}
