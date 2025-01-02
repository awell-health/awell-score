import type { CDLQIScaleType } from '../../../src/types/calculations/subscales/custom/cdlqi.types'

const ALLOWED_ANSWERS = [
  {
    value: 3,
    label: { nl: 'Heel veel', en: 'Very much', fr: 'Enormément', de: 'Sehr' },
  },
  {
    value: 2,
    label: { nl: 'Veel', en: 'Quite a lot', fr: 'Beaucoup', de: 'Ziemlich' },
  },
  {
    value: 1,
    label: {
      nl: 'Weinig',
      en: 'Only a little',
      fr: 'Juste un peu',
      de: 'Etwas',
    },
  },
  {
    value: 0,
    label: {
      nl: 'Helemaal niet',
      en: 'Not at all',
      fr: 'Pas du tout',
      de: 'Gar nicht',
    },
  },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const CDLQI_subscales: Array<CDLQIScaleType> = [
  {
    id: 'SYMPTOMS_AND_FEELINGS',
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heb jij afgelopen week last gehad van een jeukende, pijnlijke of stekende huid?',
          en: 'Over the last week, how itchy, "scratchy", sore or painful has your skin been?',
          fr: 'Au cours de la semaine dernière, est-ce que ta peau t\'a démangé, "gratté", ou t\'a fait mal ?',
          de: 'Hat, in der letzten woche, deine Haut gejuckt, war wund oder hat weh getan?',
        },
        input_id: 'CDLQI_Q01',
      },
      {
        label: {
          nl: 'Heb jij je geschaamd of niet prettig gevoeld over je huidafwijking?',
          en: 'Over the last week, how embarrassed or self conscious, upset or sad have you been because of your skin?',
          fr: "Au cours de la semaine dernière, est-ce que tu as été gêné ou mal à l'aise, malheureux ou triste à cause de tes problèmes de peau ?",
          de: 'Warst du, in der letzten woche, wegen deiner Haut verlegen oder gehemmt, durcheinander oder traurig?',
        },
        input_id: 'CDLQI_Q02',
      },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 3,
    max_score: 6,
  },
  {
    id: 'LEISURE',
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Hoe vaak heb je afgelopen week andere of speciele kleren/schoenen aangetrokken vanwege je huidproblemen?',
          en: 'Over the last week, how much have you changed or worn different or special clothes/shoes	because of your skin?',
          fr: 'Au cours de la semaine dernière, est-ce que tu as dû te changer ou porter des chaussures ou des vêtements différents ou spéciaux à cause de tes problèmes de peau ?',
          de: 'Hast du, in der letzten woche, dich wegen deines Hautproblems umgezogen oder andere oder besondere Kleidung/Schuhe getragen?',
        },
        input_id: 'CDLQI_Q04',
      },
      {
        label: {
          nl: 'Had je afgelopen week moeite om te spelen of uit te gaan door je huidproblemen?',
          en: 'Over the last week, how much has your skin trouble affected going out, playing, or doing hobbies?',
          fr: "Au cours de la semaine dernière, est-ce que tes problèmes de peau t'ont gêné pour sortir, jouer, ou faire les choses qui t'intéressent ?",
          de: 'Hat dich, in der letzten woche, dein Hautproblem beim Spielen, bei deinen Hobbys oder wenn du draussen etwas unternommen hast, gestört oder dich daran gehindert?',
        },
        input_id: 'CDLQI_Q05',
      },
      {
        label: {
          nl: 'Had je afgelopen week moeite om te gaan zwemmen of te sporten door je huidafwijking?',
          en: 'Over the last week, how much have you avoided swimming or other sports because of your skin trouble?',
          fr: "Au cours de la semaine dernière, est-ce que tu as évité d'aller nager ou de faire du sport à cause de tes problèmes de peau ?",
          de: 'Hast du, in der letzten woche, es wegen deines Hautproblems vermieden, zum Schwimmen oder einem anderen Sport zu gehen?',
        },
        input_id: 'CDLQI_Q06',
      },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 4,
    max_score: 9,
  },
  {
    id: 'SCHOOL_OR_HOLIDAYS',
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Als je op school zat: heb je afgelopen week last gehad van je huidafwijking op school?',
          en: 'If school time: Over the last week, how much did your skin problem affect your school work?',
          fr: "Si tu avais école : au cours de la semaine dernière, est-ce que tes problèmes de peau ont eu des conséquences sur ton travail à l'école ?",
          de: 'Wenn in der Schulzeit: Hat dein, in der letzten woche, Hautproblem deine Mitarbeit in der Schule gestört?',
        },
        input_id: 'CDLQI_Q07_SCHOOL',
        type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS,
        },
        info: {
          en: 'If "CDLQI_Q07_SCHOOL" has an answer, "CDLQI_Q07_HOLIDAY" should not have answer since only one and not both can be answered',
        },
      },
      {
        label: {
          nl: 'Als je vakantie had: heb je afgelopen week in de vakantie last gehad van je huid zodat je geen plezier kon hebben?',
          en: 'If holiday time: How much over the last week, has your skin problem interfered with your enjoyment of the holiday?',
          fr: "Si tu étais en vacances : au cours de la semaine dernière, est-ce que tes problèmes de peau t'ont empêché de passer de bonnes vacances ?",
          de: 'Wenn in den Ferien: Hat dein, in der letzten woche, Hautproblem deinen Spaß an den Ferien gestört?',
        },
        input_id: 'CDLQI_Q07_HOLIDAY',
        type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
        info: {
          en: 'If "CDLQI_Q07_HOLIDAY" has an answer, "CDLQI_Q07_SCHOOL" should not have answer since only one and not both can be answered',
        },
      },
    ],
    min_score: 0,
    median_score: 2,
    max_score: 3, // Only one of these will be answered in the form (based on visibility condition), that why maximum score is 3
  },
  {
    id: 'PERSONAL_RELATIONSHIPS',
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Heb jij afgelopen week gemerkt dat je vriendjes of je vriendinnetjes het niet leuk vonden met jou te spelen vanwege je huidafwijking?',
          en: 'Over the last week, how much has your skin affected your friendships?',
          fr: 'Au cours de la semaine dernière, est-ce que tes problèmes de peau ont changé tes relations avec tes copains ?',
          de: 'Hat dein, in der letzten woche, Hautproblem deine Freundschaften gestört?',
        },
        input_id: 'CDLQI_Q03',
      },
      {
        label: {
          nl: 'Ben je gepest of uitgescholden of hebben mensen aan jou gevraagd wat je had?',
          en: 'ver the last week, how much trouble have you had because of your skin with	other people calling you names, teasing,bullying, asking questions or avoiding you?',
          fr: "Au cours de la semaine dernière, est-ce qu'à cause de tes problèmes de peau tu as été embêté(e) par les autres : ils te donnaient de drôles de noms, te taquinaient, cherchaient la bagarre, te posaient des questions, ou t'évitaient ?",
          de: 'Hat dir, in der letzten woche, deine Haut Probleme gemacht, weil andere dir Schimpfnamen zugerufen, dich gehänselt, schikaniert, dir Fragen gestellt haben oder dich gemieden haben?',
        },
        input_id: 'CDLQI_Q08',
      },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 3,
    max_score: 6,
  },
  {
    id: 'SLEEP',
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Had je last van je huid bij het slapen?',
          en: 'Over the last week, how much has your sleep been affected by your skin problem?',
          fr: 'Au cours de la semaine dernière, est-ce que tu as mal dormi à cause de tes problèmes de peau ?',
          de: 'Hat dich, in der letzten woche, dein Hautproblem beim Schlafen gestört?',
        },
        input_id: 'CDLQI_Q09',
      },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 2,
    max_score: 3,
  },
  {
    id: 'TREATMENT',
    input_ids_in_subscale: [
      {
        label: {
          nl: 'Hoeveel problemen had je afgelopen week met de behandeling voor je huid?',
          en: 'Over the last week, how much of a problem has the treatment for your skin been?',
          fr: "Au cours de la semaine dernière, est-ce que le traitement pour ta peau t'a posé des problèmes ?",
          de: 'Hat die, in der letzten woche, Behandlung deiner Haut dir Probleme gemacht?',
        },
        input_id: 'CDLQI_Q10',
      },
    ].map(add_allowed_answers),
    min_score: 0,
    median_score: 1,
    max_score: 3,
  },
]
