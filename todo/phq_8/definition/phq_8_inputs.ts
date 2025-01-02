import type { InputType } from '../../../src/types/calculations.types'

export const PHQ8_INPUTS: Array<InputType> = [
  {
    input_id: 'PHQ8_Q01',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van weinig interesse of plezier in activiteiten?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'PHQ8_Q02',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van u neerslachtig, depressief of wanhopig voelen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'PHQ8_Q03',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van moeilijk inslapen, moeilijk doorslapen of te veel slapen?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'PHQ8_Q04',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van u moe voelen of gebrek aan energie hebben?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'PHQ8_Q05',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by poor appetite or overeating?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van weinig eetlust of overmatig eten.?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'PHQ8_Q06',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling bad about yourself or that you are a failure or have let yourself or your family down?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van een slecht gevoel hebben over uzelf, het gevoel hebben dat u een mislukkeling bent of dat u zichzelf of uw familie teleurgesteld hebt?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'PHQ8_Q07',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van problemen om u te concentreren, bijvoorbeeld om de krant te lezen of om tv te kijken?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'PHQ8_Q08',
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by moving or speaking so slowly that other people could have noticed. Or the opposite being so fidgety or restless that you have been moving around a lot more than usual?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van zo traag bewegen of zo langzaam spreken dat andere mensen dit opgemerkt hebben? Of het tegenovergestelde: zo zenuwachtig of rusteloos zijn dat u veel meer bewoog dan gebruikelijk?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
]
