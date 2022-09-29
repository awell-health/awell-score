export type DomainType =
  | 'BREATHLESSNESS_AND_ACTIVITIES'
  | 'PSYCHOLOGICAL'
  | 'CHEST_SYMPTOMS'

export const KBILD_DOMAINS: { [key in DomainType]: string[] } = {
  BREATHLESSNESS_AND_ACTIVITIES: [
    'K_BILD_Q01',
    'K_BILD_Q04',
    'K_BILD_Q11',
    'K_BILD_Q13',
  ],
  PSYCHOLOGICAL: [
    'K_BILD_Q03',
    'K_BILD_Q05',
    'K_BILD_Q06',
    'K_BILD_Q08',
    'K_BILD_Q10',
    'K_BILD_Q12',
    'K_BILD_Q14',
  ],
  CHEST_SYMPTOMS: ['K_BILD_Q02', 'K_BILD_Q07', 'K_BILD_Q09'],
}
