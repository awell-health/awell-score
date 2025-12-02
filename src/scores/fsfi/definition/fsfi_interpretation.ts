export const FSFI_CLINICAL_CUTOFF = 26

export const interpretFSFIScore = (totalScore: number | null): string => {
  if (totalScore === null) {
    return 'Insufficient data for interpretation'
  }
  
  if (totalScore <= FSFI_CLINICAL_CUTOFF) {
    return 'Clinically significant sexual dysfunction indicated'
  }
  
  return 'No clinically significant sexual dysfunction'
}
