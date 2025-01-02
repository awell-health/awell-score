import type { InputType } from '../../../src/types/calculations.types'
import { NumberInputType } from '../../../src/types/calculations/inputs/calculation-inputs.types'

const type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { nl: 'Nooit' } },
    { value: 1, label: { nl: 'Bijna nooit' } },
    { value: 2, label: { nl: 'Soms' } },
    { value: 3, label: { nl: 'Vaak' } },
    { value: 4, label: { nl: 'Zeer vaak' } },
  ],
}

export const CPDI_INPUTS: Array<InputType> = [
  {
    input_id: 'CPDI_Q1',
    label: {
      nl: 'Ik voel me nerveuzer en angstiger dan gewoonlijk.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q2',
    label: {
      nl: 'Ik voel me onzeker en heb veel mondmaskers, medicatie, zeep, handschoenen en/of andere huishoudspullen gekocht.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q3',
    label: {
      nl: 'Ik beeld me in dat ikzelf of iemand in mijn familie besmet is en ben hier zeer bang voor.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q4',
    label: { nl: 'Ik voel me leeg en hulpeloos.' },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q5',
    label: {
      nl: 'Ik leef mee met de patiënten met het coronavirus en hun familie. Ik heb met hen te doen.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q6',
    label: {
      nl: 'Ik voel me hulpeloos en kwaad op mijn omgeving, de gezagdrager en de media.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q7',
    label: {
      nl: 'Ik verlies het vertrouwen in de mensen om me heen',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q8',
    label: {
      nl: 'Ik verzamel dagelijks informatie over het coronavirus. Zelfs als het niet noodzakelijk is. ',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q9',
    label: {
      nl: 'Ik geloof alle informatie over het coronavirus van verschillende bronnen en ga niet na of ze correct zijn.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q10',
    label: {
      nl: 'Ik geloof eerder in negatief nieuws over het coronavirus en ben sceptisch bij goed nieuws. ',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q11',
    label: {
      nl: 'Ik deel constant nieuws over het coronavirus (meestal negatief nieuws).',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q12',
    label: {
      nl: 'Ik vermijd nieuws over het coronavirus omdat ik hier schrik voor heb.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q13',
    label: {
      nl: 'Ik ben sneller geïrriteerd en heb vaker conflicten met mijn familie.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q14',
    label: { nl: 'Ik voel me moe en soms zelfs uitgeput.' },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q15',
    label: {
      nl: 'Mijn reacties worden slomer door angstgevoelens.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q16',
    label: { nl: 'Ik kan me moeilijk concentreren.' },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q17',
    label: {
      nl: 'Ik vind het moeilijk om beslissingen te nemen.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q18',
    label: {
      nl: 'Tijdens de pandemie voel ik me vaak duizelig of heb ik rugpijn en een beklemmend gevoel in mijn borst.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q19',
    label: {
      nl: 'Tijdens de pandemie voel ik vaak buikpijn, heb ik een opgezwollen gevoel en andere discomfort in mijn buik.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q20',
    label: {
      nl: 'Ik voel me oncomfortabel wanneer ik met anderen communiceer.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q21',
    label: {
      nl: 'Ik praat sinds kort nauwelijks met mijn familie.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q22',
    label: {
      nl: 'Ik slaap niet goed. Ik droom altijd dat ik of iemand in mijn familie besmet is met het coronavirus.',
    },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q23',
    label: { nl: 'Ik heb geen eetlust.' },
    input_type,
    required: true,
  },
  {
    input_id: 'CPDI_Q24',
    label: {
      nl: 'Ik heb last van constipatie of moet vaak plassen.',
    },
    input_type,
    required: true,
  },
]
