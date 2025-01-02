import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

export const NOT_RELEVANT_ANSWER = 999
export const YES_ANSWER = 3
export const NO_ANSWER = 0

export const DLQI_subscales: Array<DefaultSubscaleType> = [
  {
    id: 'SYMPTOMS_AND_FEELING',
    input_ids_in_subscale: [
      {
        input_id: 'DLQI_Q01',
        label: {
          nl: 'Hoe jeukerig, pijnlijk of branderig is uw huid geweest, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how itchy, sore, painful or stinging has your skin been?',
          fr: 'Au cours des 7 derniers jours, votre peau vous a-t-elle démangé(e), fait souffrir ou brûlé(e) ?',
          de: 'Wie sehr hat Ihre Haut in den vergangenen 7 Tagen gejuckt, war wund, hat geschmerzt oder gebrannt?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
          ],
        },
      },
      {
        input_id: 'DLQI_Q02',
        label: {
          nl: 'In welke mate heeft u zich vanwege uw huid opgelaten of ongemakkelijk gevoeld, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how embarrassed or self conscious have you been because of your skin?',
          fr: 'Au cours des 7 derniers jours, vous êtes-vous senti(e) gêné(e) ou complexé(e) par votre problème de peau ?',
          de: 'Wie sehr hat Ihre Hauterkrankung Sie in den vergangenen 7 Tagen verlegen oder befangen gemacht?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: 'DAILY_ACTIVITIES',
    input_ids_in_subscale: [
      {
        input_id: 'DLQI_Q03',
        label: {
          nl: 'In welke mate heeft uw huid u gehinderd bij het winkelen of het werken in uw huis of tuin, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how much has your skin interfered with you going shopping or looking after your home or garden?',
          fr: 'Au cours des 7 derniers jours, votre problème de peau vous a-t-il gêné(e) pour faire des courses, vous occuper de votre maison ou pour jardiner ?',
          de: 'Wie sehr hat Ihre Hauterkrankung Sie in den vergangenen 7 Tagen bei Einkäufen oder bei Haus- oder Gartenarbeit behindert?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
      {
        input_id: 'DLQI_Q04',
        label: {
          nl: 'In welke mate heeft uw huid invloed gehad op de kleren die u droeg, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how much has your skin influenced the clothes you wear?',
          fr: 'Au cours des 7 derniers jours, votre problème de peau vous a-t-il influencé(e) dans le choix des vêtements que vous portiez ?',
          de: 'Wie sehr hat Ihre Hauterkrankung die Wahl der Kleidung beeinflußt, die Sie in den vergangenen 7 Tagen getragen haben?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: 'LEISURE',
    input_ids_in_subscale: [
      {
        input_id: 'DLQI_Q05',
        label: {
          nl: 'In welke mate heeft uw huid een nadelige invloed gehad op uw sociale activiteiten of vrijetijdsbesteding, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how much has your skin affected any social or leisure activities?',
          fr: 'Au cours des 7 derniers jours, votre problème de peau a-t-il affecté vos activités avec les autres ou vos loisirs ?',
          de: 'Wie sehr hat Ihre Hauterkrankung in den vergangenen 7 Tagen Ihre Aktivitäten mit anderen Menschen oder Ihre Freizeitgestaltung beeinflußt?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
      {
        input_id: 'DLQI_Q06',
        label: {
          nl: 'In welke mate heeft uw huid het u bemoeilijkt om te sporten, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how much has your skin made it difficult for you to do any sport?',
          fr: 'Au cours des 7 derniers jours, avez-vous eu du mal à faire du sport à cause de votre problème de peau ?',
          de: 'Wie sehr hat Ihre Hauterkrankung es Ihnen in den vergangenen 7 Tagen erschwert, sportlich aktiv zu sein?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: 'WORK_AND_SCHOOL',
    input_ids_in_subscale: [
      {
        input_id: 'DLQI_Q07',
        label: {
          nl: 'Heeft uw huid u ervan weerhouden om te werken of te studeren, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, has your skin prevented you from working or studying?',
          fr: "Au cours des 7 derniers jours, votre problème de peau vous a-t-il complètement empêché(e) de travailler ou d'étudier ?",
          de: 'Hat Ihre Hauterkrankung in den vergangenen 7 Tagen dazu geführt, daß Sie Ihrer beruflichen Tätigkeit nicht nachgehen oder nicht studieren konnten?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: YES_ANSWER,
              label: { en: 'Yes', nl: 'Ja', fr: 'Oui', de: 'Ja' },
            },
            {
              value: NO_ANSWER,
              label: { en: 'No', nl: 'Nee', fr: 'Non', de: 'Nein' },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
      {
        input_id: 'DLQI_Q07_SUB',
        label: {
          nl: 'Zo "nee": In welke mate is uw huid een probleem voor u geweest tijdens uw werk of studie, gedurende de afgelopen 7 dagen?',
          en: 'If "No", over the last week how much has your skin been a problem at work or studying?',
          fr: 'Si la réponse est "non" : au cours des 7 derniers jours, votre problème de peau vous a-t-il gêné(e) dans votre travail ou dans vos études ?',
          de: 'Falls "nein", wie sehr ist Ihre Hauterkrankung in den vergangenen 7 Tagen ein Problem bei Ihrer beruflichen Tätigkeit bzw. Ihrem Studium gewesen?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
          ],
        },
        not_applicable_if: {
          input_id: 'DLQI_Q07',
          value_is_one_of: [YES_ANSWER, NOT_RELEVANT_ANSWER],
        },
      },
    ],
  },
  {
    id: 'PERSONAL_RELATIONSHIPS',
    input_ids_in_subscale: [
      {
        input_id: 'DLQI_Q08',
        label: {
          nl: 'In welke mate heeft uw huid problemen veroorzaakt met uw partner, goede vrienden of familie, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how much has your skin created problems with your partner or any of your close friends or relatives?',
          fr: 'Au cours des 7 derniers jours, votre problème de peau a-t-il rendu difficiles vos relations avec votre conjoint(e), vos amis proches ou votre famille ?',
          de: 'Wie sehr hat Ihre Hauterkrankung in den vergangenen 7 Tagen Probleme im Umgang mit Ihrem Partner, Freunden oder Verwandten verursacht?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
      {
        input_id: 'DLQI_Q09',
        label: {
          nl: 'In welke mate heeft uw huid voor seksuele problemen gezorgd, gedurende de afgelopen 7 dagen?',
          en: 'Over the last week, how much has your skin caused any sexual difficulties?',
          fr: 'Au cours des 7 derniers jours, votre problème de peau a-t-il rendu votre vie sexuelle difficile ?',
          de: 'Wie sehr hat Ihre Hauterkrankung in den vergangenen 7 Tagen Ihr Liebesleben beeinträchtigt?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: 'TREATMENT',
    input_ids_in_subscale: [
      {
        input_id: 'DLQI_Q10',
        label: {
          nl: 'In welke mate is de behandeling van uw huid een probleem geweest, gedurende de afgelopen 7 dagen, bijvoorbeeld omdat de behandeling veel tijd kost, of doordat uw huis er vies van wordt?',
          en: 'Over the last week, how much of a problem has the treatment for your skin been, for example by making your home messy, or by taking up time?',
          fr: 'Au cours des 7 derniers jours, le traitement que vous utilisez pour votre peau a-t-il été un problème, par exemple en prenant trop de votre temps ou en salissant votre maison ?',
          de: 'Inwieweit war die Behandlung Ihrer Haut in den vergangenen 7 Tagen für Sie mit Problemen verbunden (z. B. weil die Behandlung Zeit in Anspruch nahm oder dadurch Ihr Haushalt unsauber wurde)?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel erg',
                en: 'Very much',
                fr: 'Enormément',
                de: 'Sehr',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Nogal',
                en: 'A lot',
                fr: 'Beaucoup',
                de: 'Ziemlich',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje',
                en: 'A little',
                fr: 'Un peu',
                de: 'Ein bißchen',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Helemaal niet',
                en: 'Not at all',
                fr: 'Pas du tout',
                de: 'Überhaupt nicht',
              },
            },
            {
              value: NOT_RELEVANT_ANSWER,
              label: {
                en: 'Not relevant',
                nl: 'Niet van toepassing',
                fr: 'Non concerné(e)',
                de: 'Frage betrifft mich nicht',
              },
            },
          ],
        },
      },
    ],
  },
]
