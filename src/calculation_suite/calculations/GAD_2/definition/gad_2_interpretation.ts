type AnxietySeverityType =
  | 'No anxiety'
  | 'Mild anxiety'
  | 'Moderate anxiety'
  | 'Severe anxiety'

export const GAD2_INTERPRETATION_TABLE: Record<string, AnxietySeverityType> = {
  '0': 'No anxiety',
  '1': 'Mild anxiety',
  '2': 'Mild anxiety',
  '3': 'Moderate anxiety',
  '4': 'Moderate anxiety',
  '5': 'Severe anxiety',
  '6': 'Severe anxiety',
}
