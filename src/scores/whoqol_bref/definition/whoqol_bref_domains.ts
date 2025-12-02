/**
 * WHOQOL-BREF domain question mappings
 * 
 * Domain formulas:
 * - Domain 1 (Somatyczna): 4×(Q3 + Q4 + Q10 + Q15 + Q16 + Q17 + Q18) / 7
 * - Domain 2 (Psychologiczna): 4×(Q5 + Q6 + Q7 + Q11 + Q19 + Q26) / 6
 * - Domain 3 (Socjalna): 4×(Q20 + Q21 + Q22) / 3
 * - Domain 4 (Środowiskowa): 4×(Q8 + Q9 + Q12 + Q13 + Q14 + Q23 + Q24 + Q25) / 8
 * 
 * Note: Q3, Q4, and Q26 use PRE-REVERSED value scales in the questionnaire
 *       (5=best/not at all, 1=worst/very much), so no transformation is needed in calculation
 * Note: Q1 and Q2 are standalone questions (not included in domains)
 */

export type DomainType = 
  | 'PHYSICAL_HEALTH'
  | 'PSYCHOLOGICAL_HEALTH'
  | 'SOCIAL_RELATIONSHIPS'
  | 'ENVIRONMENT'

export const WHOQOL_BREF_DOMAINS: Record<DomainType, string[]> = {
  PHYSICAL_HEALTH: [
    'WHOQOL_BREF_Q03', // Ból fizyczny (pre-reversed scale: 5=not at all, 1=very much)
    'WHOQOL_BREF_Q04', // Leczenie medyczne (pre-reversed scale: 5=not at all, 1=very much)
    'WHOQOL_BREF_Q10', // Energia
    'WHOQOL_BREF_Q15', // Funkcjonowanie
    'WHOQOL_BREF_Q16', // Sen
    'WHOQOL_BREF_Q17', // Wydolność
    'WHOQOL_BREF_Q18', // Zdolność do pracy
  ],
  PSYCHOLOGICAL_HEALTH: [
    'WHOQOL_BREF_Q05', // Radość w życiu
    'WHOQOL_BREF_Q06', // Sens życia
    'WHOQOL_BREF_Q07', // Koncentracja
    'WHOQOL_BREF_Q11', // Wygląd
    'WHOQOL_BREF_Q19', // Zadowolenie z siebie
    'WHOQOL_BREF_Q26', // Negatywne uczucia (pre-reversed scale: 5=never, 1=always)
  ],
  SOCIAL_RELATIONSHIPS: [
    'WHOQOL_BREF_Q20', // Relacje osobiste
    'WHOQOL_BREF_Q21', // Życie intymne
    'WHOQOL_BREF_Q22', // Wsparcie przyjaciół
  ],
  ENVIRONMENT: [
    'WHOQOL_BREF_Q08', // Bezpieczeństwo
    'WHOQOL_BREF_Q09', // Otoczenie sprzyja zdrowiu
    'WHOQOL_BREF_Q12', // Pieniądze
    'WHOQOL_BREF_Q13', // Dostęp do informacji
    'WHOQOL_BREF_Q14', // Zainteresowania
    'WHOQOL_BREF_Q23', // Warunki mieszkaniowe
    'WHOQOL_BREF_Q24', // Placówki służby zdrowia
    'WHOQOL_BREF_Q25', // Transport
  ],
}

// Maximum allowed missing questions per domain
export const MAX_MISSING_PER_DOMAIN: Record<DomainType, number> = {
  PHYSICAL_HEALTH: 2, // 7 questions, max 2 missing
  PSYCHOLOGICAL_HEALTH: 2, // 6 questions, max 2 missing
  SOCIAL_RELATIONSHIPS: 1, // 3 questions, max 1 missing
  ENVIRONMENT: 2, // 8 questions, max 2 missing
}
