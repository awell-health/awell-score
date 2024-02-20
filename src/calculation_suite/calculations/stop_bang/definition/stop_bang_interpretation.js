// @flow

type SeverityType = 'Low' | 'Intermediate' | 'High'

export const STOP_BANG_INTERPRETATION_TABLE: {| [string]: SeverityType |} = {
  '0': 'Low',
  '1': 'Low',
  '2': 'Low',
  '3': 'Intermediate',
  '4': 'Intermediate',
  '5': 'High',
  '6': 'High',
  '7': 'High',
  '8': 'High'
}
