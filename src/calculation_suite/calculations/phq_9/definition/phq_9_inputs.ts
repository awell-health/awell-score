import type { InputType } from '../../../../types/calculations.types'

export const PHQ9_INPUTS: Array<InputType> = [
  {
    input_id: 'PHQ9_Q01',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van weinig interesse of plezier in activiteiten?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q02',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van u neerslachtig, depressief of wanhopig voelen?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q03',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van moeilijk inslapen, moeilijk doorslapen of te veel slapen?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q04',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling tired or having little energy?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van u moe voelen of gebrek aan energie hebben?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q05',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by poor appetite or overeating?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van weinig eetlust of overmatig eten.?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q06',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling bad about yourself or that you are a failure or have let yourself or your family down?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van een slecht gevoel hebben over uzelf, het gevoel hebben dat u een mislukkeling bent of dat u zichzelf of uw familie teleurgesteld hebt?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q07',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van problemen om u te concentreren, bijvoorbeeld om de krant te lezen of om tv te kijken?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q08',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by moving or speaking so slowly that other people could have noticed. Or the opposite being so fidgety or restless that you have been moving around a lot more than usual?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van zo traag bewegen of zo langzaam spreken dat andere mensen dit opgemerkt hebben? Of het tegenovergestelde: zo zenuwachtig of rusteloos zijn dat u veel meer bewoog dan gebruikelijk?',
    },
    input_type: {
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
    input_id: 'PHQ9_Q09',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by thoughts that you would be better off dead, or of hurting yourself?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van de gedachte dat u beter dood zou kunnen zijn of de gedachte uzelf op een bepaalde manier pijn te doen?',
    },
    input_type: {
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
