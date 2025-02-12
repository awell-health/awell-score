// @flow

import type { InputType } from '../../../../types/calculations.types'
import { type CalculationParameterInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const PAID20_INPUTS_TYPE: CalculationParameterInputType = {
  type: 'number',
  allowed_answers: [
    {
      label: {
        en: 'Not a problem',
        pl: 'Nie jest to problem'
      },
      value: 0
    },
    {
      label: {
        en: 'Minor problem',
        pl: 'Drobny problem'
      },
      value: 1
    },
    {
      label: {
        en: 'Moderate problem',
        pl: 'Umiarkowany problem'
      },
      value: 2
    },
    {
      label: {
        en: 'Somewhat serious problem',
        pl: 'Dość poważny problem'
      },
      value: 3
    },
    {
      label: {
        en: 'Serious problem',
        pl: 'Poważny problem'
      },
      value: 4
    }
  ]
}
export const PAID20_INPUTS: Array<InputType> = [
  {
    input_id: 'PAID20_Q01',
    input_label: {
      en: 'Not having clear and concrete goals for your diabetes care?',
      pl: 'Brak jasnych i konkretnych celów dotyczących opieki nad cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q02',
    input_label: {
      en: 'Feeling discouraged with your diabetes treatment plan?',
      pl: 'Zniechęcenie związane z planem leczenia cukrzycy?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q03',
    input_label: {
      en: 'Feeling scared when you think about living with diabetes?',
      pl: 'Strach przed myśleniem o życiu z cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q04',
    input_label: {
      en: 'Uncomfortable social situations related to your diabetes care (e.g. people telling you what to eat)?',
      pl: 'Niezręczne sytuacje społeczne związane z opieką nad cukrzycą (np. ludzie mówiący, co masz jeść)?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q05',
    input_label: {
      en: 'Feelings of deprivation regarding food and meals?',
      pl: 'Poczucie deprywacji związane z jedzeniem i posiłkami?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q06',
    input_label: {
      en: 'Feeling depressed when you think about living with diabetes?',
      pl: 'Poczucie depresji przy myśleniu o życiu z cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q07',
    input_label: {
      en: 'Not knowing if your mood or feelings are related to your diabetes?',
      pl: 'Niepewność, czy Twój nastrój lub uczucia są związane z cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q08',
    input_label: {
      en: 'Feeling overwhelmed by your diabetes?',
      pl: 'Poczucie przytłoczenia cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q09',
    input_label: {
      en: 'Worrying about low blood glucose reactions?',
      pl: 'Obawy dotyczące reakcji na niski poziom glukozy we krwi?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q10',
    input_label: {
      en: 'Feeling angry when you think about living with diabetes?',
      pl: 'Złość kiedy myślisz o życiu z cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q11',
    input_label: {
      en: 'Feeling constantly concerned about food and eating?',
      pl: 'Stałe zmartwienie związane z jedzeniem i odżywianiem?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q12',
    input_label: {
      en: 'Worrying about the future and the possibility of serious complications?',
      pl: 'Obawy dotyczące przyszłości i możliwości poważnych powikłań?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q13',
    input_label: {
      en: 'Feelings of guilt or anxiety when you get off track with your diabetes management?',
      pl: 'Poczucie winy lub niepokoju, gdy nie trzymasz się planu zarządzania cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q14',
    input_label: {
      en: 'Not accepting your diabetes?',
      pl: 'Brak akceptacji swojej cukrzycy?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q15',
    input_label: {
      en: 'Feeling unsatisfied with your diabetes physician?',
      pl: 'Niezadowolenie ze swojego lekarza prowadzącego cukrzycę?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q16',
    input_label: {
      en: 'Feeling that diabetes is taking up too much of your mental and physical energy every day?',
      pl: 'Poczucie, że cukrzyca pochłania zbyt wiele Twojej codziennej energii psychicznej i fizycznej?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q17',
    input_label: {
      en: 'Feeling alone with your diabetes?',
      pl: 'Poczucie osamotnienia z powodu cukrzycy?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q18',
    input_label: {
      en: 'Feeling that your friends and family are not supportive of your diabetes management efforts?',
      pl: 'Poczucie, że Twoi przyjaciele i rodzina nie wspierają Twoich starań w zarządzaniu cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q19',
    input_label: {
      en: 'Coping with complications of diabetes?',
      pl: 'Radzenie sobie z powikłaniami cukrzycy?'
    },
    input_type: PAID20_INPUTS_TYPE
  },
  {
    input_id: 'PAID20_Q20',
    input_label: {
      en: 'Feeling burned out by the constant effort needed to manage diabetes?',
      pl: 'Poczucie wypalenia z powodu ciągłego wysiłku wymaganego do zarządzania cukrzycą?'
    },
    input_type: PAID20_INPUTS_TYPE
  }
]
