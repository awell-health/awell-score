export type SubscaleType =
  | 'PAIN_TRANSFORM'
  | 'DISTRACTION'
  | 'REDUCING_DEMANDS'
  | 'RETREATING'
  | 'WORRYING'
  | 'RESTING'

export const PCI_SUBSCALES: Record<SubscaleType, string[]> = {
  PAIN_TRANSFORM: ['PCI_Q15', 'PCI_Q16', 'PCI_Q18', 'PCI_Q30'],
  DISTRACTION: ['PCI_Q09', 'PCI_Q19', 'PCI_Q20', 'PCI_Q21', 'PCI_Q22'],
  REDUCING_DEMANDS: ['PCI_Q02', 'PCI_Q03', 'PCI_Q04'],
  RETREATING: [
    'PCI_Q10',
    'PCI_Q11',
    'PCI_Q12',
    'PCI_Q13',
    'PCI_Q14',
    'PCI_Q32',
    'PCI_Q33',
  ],
  WORRYING: [
    'PCI_Q17',
    'PCI_Q23',
    'PCI_Q24',
    'PCI_Q25',
    'PCI_Q26',
    'PCI_Q27',
    'PCI_Q28',
    'PCI_Q29',
    'PCI_Q31',
  ],
  RESTING: ['PCI_Q01', 'PCI_Q05', 'PCI_Q06', 'PCI_Q07', 'PCI_Q08'],
}
