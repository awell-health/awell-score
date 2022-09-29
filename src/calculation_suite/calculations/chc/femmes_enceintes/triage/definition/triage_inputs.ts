import type { InputType } from '../../../../../../types/calculations.types'

const ALLOWED_ANSWERS = [
  { value: 0, label: { fr: 'Non' } },
  { value: 1, label: { fr: 'Oui' } },
]

export const TRIAGE_INPUTS: Array<InputType> = [
  {
    input_id: 'Q1',
    input_label: {
      fr: 'Avez-vous ou un membre de votre famille proche une anomalie de la coagulation (hémophilie, déficit en facteur de coagulation, maladie de von Willebrand, …)? si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q2',
    input_label: {
      fr: 'Prenez-vous un médicament qui fluidifie le sang (CLOPIDOGREL/PLAVIX, HÉPARINE/CLEXANE/FRAXODI/FRAXI/FRAGMIN/ASPIRINE …)? si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q3',
    input_label: {
      fr: 'Avez-vous déjà̀ consulté un médecin ou reçu un traitement pour un saignement prolongé, spontané ou inhabituel (par exemple après un saignement de nez ou une petite coupure) ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q4',
    input_label: {
      fr: 'Avez-vous tendance à faire des bleus de plus de 2 cm ou des hématomes importants, sans choc ou traumatisme ou bien après un choc ou un traumatisme sans importance ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q5',
    input_label: {
      fr: 'Avez-vous présenté un saignement anormal pendant ou après une visite cheź votre dentiste (pour une extraction dentaire par exemple) ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q6',
    input_label: {
      fr: 'Avez-vous saigné de manière anormale pendant ou après une intervention chirurgicale : Saignement anormal signalé par votre chirurgien / transfusion de sang pour une chirurgie banale (amygdales – végétation par exemple) /ré hospitalisation pour saignement ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q7',
    input_label: {
      fr: 'Avez-vous consulté un médecin ou reçu un traitement pour des règles trop abondantes par exemple contraception orale (pilule), traitement par fer, médicament pour diminuer le saignement comme l’EXACYL ... ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q8',
    input_label: {
      fr: 'Avez-vous saigné de façon anormale après un accouchement ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q9',
    input_label: {
      fr: 'Etes-vous suivie par un neurologue ou neurochirurgien? Si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q10',
    input_label: {
      fr: 'Avez-vous un problème de colonne vertébrale sévère  malformation, opération antérieure, lésion de moelle épinière, spina bifida, neurofibromatose, sclérose en plaque,…)? Si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q11',
    input_label: {
      fr: 'Avez-vous ou avez-vous eu un problème cérébral (tumeur, anévrisme, hypertension intracrânienne, dispositif de dérivation, épilepsie, …)? si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q12',
    input_label: {
      fr: 'Souffrez-vous d’une maladie musculaire (myasthénie, myopathie de Duchenne, ...)? si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q13',
    input_label: {
      fr: 'Avez-vous déjà bénéficié d’une péridurale ou d’une rachianesthésie (injection dans le dos également) très difficile ou impossible à réaliser? si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q14',
    input_label: {
      fr: 'Avez-vous une allergie connue à un produit d’anesthésie administré lors d’une anesthésie générale ou lors d’une anesthésie locale (chez le dentiste  par exemple) ? Si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q15',
    input_label: {
      fr: 'Vous ou un membre de votre famille a-t-il déjà fait une réaction anormale (“hyperthermie maligne” par exemple) lors d’une anesthésie générale? Si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q16',
    input_label: {
      fr: 'Souffrez-vous d’insuffisance rénale, hépatique (foie), cardiaque ou pulmonaire? Avez-vous bénéficié d’une greffe pour l’un de ces organes? Si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q17',
    input_label: {
      fr: 'Avez-vous un problème cardiaque (malformation, opération antérieure, problème de valve, arythmie, défibrillateur/pacemaker, …) ? Si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q18',
    input_label: {
      fr: 'Souffrez-vous d’anémie sévère  (taux d’hémoglobine < 10 gr/dl) par manque de fer ou drépanocytose (anémie falciforme)? Si oui, précisez',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q19',
    input_label: {
      fr: 'Avez-vous déjà fait une embolie pulmonaire, une thrombophlébite ou un accident vasculaire cérébral ? Si oui, précisez le contexte',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q20',
    input_label: {
      fr: 'Consommez-vous des drogues “dures” (cocaïne, héroïne, amphétamines, champignons hallucinogènes…) ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
  {
    input_id: 'Q21',
    input_label: {
      fr: 'Une césarienne est-elle prévue d’office ou est-elle hautement probable ?',
    },
    input_type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
  },
]
