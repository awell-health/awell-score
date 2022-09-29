export type ClusterType = 'B' | 'C' | 'D' | 'E'

export const CLUSTERS: { [key in ClusterType]: string[] } = {
  B: ['PCL5_Q01', 'PCL5_Q02', 'PCL5_Q03', 'PCL5_Q04', 'PCL5_Q05'],
  C: ['PCL5_Q06', 'PCL5_Q07'],
  D: [
    'PCL5_Q08',
    'PCL5_Q09',
    'PCL5_Q10',
    'PCL5_Q11',
    'PCL5_Q12',
    'PCL5_Q13',
    'PCL5_Q14',
  ],
  E: ['PCL5_Q15', 'PCL5_Q16', 'PCL5_Q17', 'PCL5_Q18', 'PCL5_Q19', 'PCL5_Q20'],
}
