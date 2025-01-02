import type { InputType } from '../../../src/types/calculations.types'

export const IIEF5_INPUTS: Array<InputType> = [
  {
    input_id: 'IIEF5_Q01',
    input_label: {
      en: 'Over the past 6 months, how do you rate your confidence that you could get and keep an erection?',
      nl: 'Hoe sterk zou u het vertrouwen noemen dat u had, de afgelopen 4 weken, om een erectie te kunnen krijgen en behouden?',
      fr: 'Au cours des six derniers mois: A quel point étiez-vous sûr de pouvoir avoir une érection et de la maintenir ?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { en: 'Very low', nl: 'Heel zwak', fr: 'Pas sûr du tout' },
          value: 1,
        },
        {
          label: { en: 'Low', nl: 'Zwak', fr: 'Pas très sûr' },
          value: 2,
        },
        {
          label: {
            en: 'Moderate',
            nl: 'Middelmatig',
            fr: 'Moyennement sûr',
          },
          value: 3,
        },
        {
          label: { en: 'High', nl: 'Sterk', fr: 'Sûr' },
          value: 4,
        },
        {
          label: { en: 'Very high', nl: 'Heel sterk', fr: 'Très sûr' },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: 'IIEF5_Q02',
    input_label: {
      en: 'Over the past 6 months, when you had erections with sexual stimulation, how often were your erections hard enough for penetration?',
      nl: 'Hoe vaak is het de afgelopen 4 weken voorgekomen dat, terwijl u een erectie had door seksuele stimulatie, uw penis stijf genoeg was om te penetreren (binnen te gaan)?',
      fr: 'Au cours des six derniers mois: Lorsque vous avez eu des érections à la suite de stimulations sexuelles, avec quelle fréquence votre pénis a-t-il été suffisamment rigide (dur) pour permettre la pénétration ?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            en: 'No sexual activity',
            nl: 'Geen seksuele stimulatie',
            fr: "Je n'ai pas été stimulé sexuellement",
          },
          value: 0,
        },
        {
          label: {
            en: 'Almost never/never',
            nl: 'Bijna nooit of nooit',
            fr: 'Presque jamais ou jamais',
          },
          value: 1,
        },
        {
          label: {
            en: 'A few times (much less than half the time)',
            nl: 'Een paar keer (veel minder dan de helft van de tijd)',
            fr: 'Rarement (beaucoup moins que la moitié du temps)',
          },
          value: 2,
        },
        {
          label: {
            en: 'Sometimes (about half the time)',
            nl: 'Soms (ongeveer de helft van de tijd)',
            fr: 'Quelquefois (environ la moitié du temps)',
          },
          value: 3,
        },
        {
          label: {
            en: 'Most times (much more than half the time)',
            nl: 'Meestal (veel meer dan de helft van de tijd)',
            fr: 'La plupart du temps (beaucoup plus que la moitié du temps)',
          },
          value: 4,
        },
        {
          label: {
            en: 'Almost always/always',
            nl: 'Bijna altijd of altijd',
            fr: 'Presque tout le temps ou tout le temps',
          },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: 'IIEF5_Q03',
    input_label: {
      en: 'Over the past 6 months, during sexual intercourse, how often were you able to maintain your erection after you had penetrated (entered) your partner?',
      nl: 'Hoe vaak kon u de afgelopen 4 weken tijdens de geslachtsgemeenschap uw erectie behouden, nadat u bij uw partner was gepenetreerd (binnengegaan)?',
      fr: "Au cours des six derniers mois: Lorsque vous avez essayé d'avoir des rapports sexuels, avec quelle fréquence avez-vous pu rester en érection après avoir pénétré votre partenaire ?",
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            en: 'Did not attempt intercourse',
            nl: 'Niet geprobeerd geslachtsgemeenschap te hebben',
            fr: "Je n'ai pas essayé d'avoir de rapports sexuels",
          },
          value: 0,
        },
        {
          label: {
            en: 'Almost never/never',
            nl: 'Bijna nooit of nooit',
            fr: 'Presque jamais ou jamais',
          },
          value: 1,
        },
        {
          label: {
            en: 'A few times (much less than half the time)',
            nl: 'Een paar keer (veel minder dan de helft van de tijd)',
            fr: 'Rarement (beaucoup moins que la moitié du temps)',
          },
          value: 2,
        },
        {
          label: {
            en: 'Sometimes (about half the time)',
            nl: 'Soms (ongeveer de helft van de tijd)',
            fr: 'Quelquefois (environ la moitié du temps)',
          },
          value: 3,
        },
        {
          label: {
            en: 'Most times (much more than half the time)',
            nl: 'Meestal (veel meer dan de helft van de tijd)',
            fr: 'La plupart du temps (beaucoup plus que la moitié du temps)',
          },
          value: 4,
        },
        {
          label: {
            en: 'Almost always/always',
            nl: 'Bijna altijd of altijd',
            fr: 'Presque tout le temps ou tout le temps',
          },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: 'IIEF5_Q04',
    input_label: {
      en: 'Over the past 6 months, during sexual intercourse, how difficult was it to maintain your erection to completion of intercourse?',
      nl: 'Hoe moeilijk was het de afgelopen 4 weken om tijdens de geslachtsgemeenschap uw erectie te behouden tot de geslachtsdaad voltooid was?',
      fr: "Au cours des six derniers mois: Pendant vos rapports sexuels, à quel point vous a-t-il été difficile de rester en érection jusqu'à la fin de ces rapports ?",
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            en: 'Did not attempt intercouse',
            nl: 'Niet geprobeerd geslachtsgemeenschap te hebben',
            fr: "Je n'ai pas essayé d'avoir de rapports sexuels",
          },
          value: 0,
        },
        {
          label: {
            en: 'Extremely difficult',
            nl: 'Heel erg moeilijk',
            fr: 'Extrêmement difficile',
          },
          value: 1,
        },
        {
          label: {
            en: 'Very difficult',
            nl: 'Erg moeilijk',
            fr: 'Très difficile',
          },
          value: 2,
        },
        {
          label: {
            en: 'Difficult',
            nl: 'Moeilijk',
            fr: 'Difficile',
          },
          value: 3,
        },
        {
          label: {
            en: 'Slightly difficult',
            nl: 'Een beetje moeilijk',
            fr: 'Un peu difficile',
          },
          value: 4,
        },
        {
          label: {
            en: 'Not difficult',
            nl: 'Niet moeilijk',
            fr: 'Pas difficile',
          },
          value: 5,
        },
      ],
    },
  },
  {
    input_id: 'IIEF5_Q05',
    input_label: {
      en: 'Over the past 6 months, when you attempted sexual intercourse, how often was it satisfactory for you?',
      nl: 'Hoe vaak was het de afgelopen 4 weken bevredigend voor u wanneer u probeerde geslachtsgemeenschap te hebben?',
      fr: "Au cours des six derniers mois: Lorsque vous avez essayé d'avoir des rapports sexuels, avec quelle fréquence en avez-vous été satisfait ?",
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            en: 'Did not attempt intercourse',
            nl: 'Niet geprobeerd geslachtsgemeenschap te hebben',
            fr: "Je n'ai pas essayé d'avoir de rapports sexuels",
          },
          value: 0,
        },
        {
          label: {
            en: 'Almost never/never',
            nl: 'Bijna nooit of nooit',
            fr: 'Presque jamais ou jamais',
          },
          value: 1,
        },
        {
          label: {
            en: 'A few times (much less than half the time)',
            nl: 'Een paar keer (veel minder dan de helft van de tijd)',
            fr: 'Rarement (beaucoup moins que la moitié du temps)',
          },
          value: 2,
        },
        {
          label: {
            en: 'Sometimes (about half the time)',
            nl: 'Soms (ongeveer de helft van de tijd)',
            fr: 'Quelquefois (environ la moitié du temps)',
          },
          value: 3,
        },
        {
          label: {
            en: 'Most times (much more than half the time)',
            nl: 'Meestal (veel meer dan de helft van de tijd)',
            fr: 'La plupart du temps (beaucoup plus que la moitié du temps)',
          },
          value: 4,
        },
        {
          label: {
            en: 'Almost always/always',
            nl: 'Bijna altijd of altijd',
            fr: 'Presque tout le temps ou tout le temps',
          },
          value: 5,
        },
      ],
    },
  },
]
