type IsiSeverityType =
  | 'No clinically significant insomnia'
  | 'Subthreshold insomnia'
  | 'Clinical insomnia (moderate severity)'
  | 'Clinical insomnia (severe)'

export const ISI_INTERPRATION_TABLE: { [key: string]: IsiSeverityType } = {
  '0': 'No clinically significant insomnia',
  '1': 'No clinically significant insomnia',
  '2': 'No clinically significant insomnia',
  '3': 'No clinically significant insomnia',
  '4': 'No clinically significant insomnia',
  '5': 'No clinically significant insomnia',
  '6': 'No clinically significant insomnia',
  '7': 'No clinically significant insomnia',
  '8': 'Subthreshold insomnia',
  '9': 'Subthreshold insomnia',
  '10': 'Subthreshold insomnia',
  '11': 'Subthreshold insomnia',
  '12': 'Subthreshold insomnia',
  '13': 'Subthreshold insomnia',
  '14': 'Subthreshold insomnia',
  '15': 'Clinical insomnia (moderate severity)',
  '16': 'Clinical insomnia (moderate severity)',
  '17': 'Clinical insomnia (moderate severity)',
  '18': 'Clinical insomnia (moderate severity)',
  '19': 'Clinical insomnia (moderate severity)',
  '20': 'Clinical insomnia (moderate severity)',
  '21': 'Clinical insomnia (moderate severity)',
  '22': 'Clinical insomnia (severe)',
  '23': 'Clinical insomnia (severe)',
  '24': 'Clinical insomnia (severe)',
  '25': 'Clinical insomnia (severe)',
  '26': 'Clinical insomnia (severe)',
  '27': 'Clinical insomnia (severe)',
  '28': 'Clinical insomnia (severe)',
}
