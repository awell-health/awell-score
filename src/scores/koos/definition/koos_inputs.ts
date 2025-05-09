import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const baseNumericInputType = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .optional()

const type = {
  type: baseNumericInputType,
  uiOptions: {
    options: [
      { value: 0, label: { nl: 'Geen', en: 'None', fr: 'Absente' } },
      { value: 1, label: { nl: 'Gering', en: 'Mild', fr: 'Légère' } },
      { value: 2, label: { nl: 'Matig', en: 'Moderate', fr: 'Modérée' } },
      { value: 3, label: { nl: 'Veel', en: 'Severe', fr: 'Forte' } },
      { value: 4, label: { nl: 'Erg veel', en: 'Extreme', fr: 'Extrême' } },
    ],
  },
} satisfies EnumNumberInputType

export const KOOS_INPUTS = {
  P1_PAIN_FREQUENCY: {
    label: {
      nl: 'Hoe vaak heeft u pijn aan uw knie?',
      en: 'How often do you experience knee pain?',
      fr: 'Avez-vous souvent mal au genou?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
        {
          value: 1,
          label: { nl: 'Elke maand', en: 'Monthly', fr: 'Une fois par mois' },
        },
        {
          value: 2,
          label: { nl: 'Elke week', en: 'Weekly', fr: 'Une fois par semaine' },
        },
        {
          value: 3,
          label: { nl: 'Elke dag', en: 'Daily', fr: 'Tous les jours' },
        },
        {
          value: 4,
          label: { nl: 'Altijd', en: 'Always', fr: 'Tout le temps' },
        },
      ],
    },
  },
  P2_PAIN_TWISTING: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren tijdens draaien op een belaste knie?',
      en: 'What amount of pain have you experienced the last week when twisting/pivoting on your knee?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou en tournant, pivotant sur votre jambe ?',
    },
    ...type,
  },
  P3_STRETCHING: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren tijdens het helemaal strekken van de knie?',
      en: 'What amount of pain have you experienced the last week when straightening the knee fully?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou en étendant complètement le genou ?',
    },
    ...type,
  },
  P4_BENDING: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren tijdens het helemaal buigen van de knie?',
      en: 'What amount of pain have you experienced the last week when bending the knee fully?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou en pliant complètement le genou ?',
    },
    ...type,
  },
  P5_WALKING: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren tijdens het lopen op een vlakke ondergrond?',
      en: 'What amount of pain have you experienced the last week when walking on a flat surface?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou en marchant sur un terrain plat ?',
    },
    ...type,
  },
  P6_STAIRS: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren tijdens het trap oplopen of aflopen?',
      en: 'What amount of pain have you experienced the last week when going up or down stairs?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou en montant ou en descendant les escaliers ?',
    },
    ...type,
  },
  P7_NIGHT: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren `s nachts in bed?',
      en: 'What amount of pain have you experienced the last week at night while in bed?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou au lit la nuit ?',
    },
    ...type,
  },
  P8_SITTING_LYING: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren tijdens het zitten of liggen?',
      en: 'What amount of pain have you experienced the last week when sitting or lying?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou en restant assis(e) ou couché(e) ?',
    },
    ...type,
  },
  P9_STANDING: {
    label: {
      nl: 'Welke mate van kniepijn heeft u de afgelopen week ervaren tijdens het rechtop staan?',
      en: 'What amount of pain have you experienced the last week when standing upright?',
      fr: 'Au cours des huit derniers jours, quelle a été l’importance de votre douleur du genou en restant debout ?',
    },
    ...type,
  },
  SY1_MORNING_STIFFNESS: {
    label: {
      nl: 'Hoe ernstig was de gewrichtsstijfheid van de knie ’s morgens direct na het wakker worden gedurende de afgelopen week? ',
      en: 'How severe was your knee stiffness during the last week after first wakening in the morning?',
      fr: 'Au cours des huit derniers jours, comment décririez-vous la raideur de votre genou au réveil le matin ?',
    },
    ...type,
  },
  SY2_STIFFNESS_LATER_IN_DAY: {
    label: {
      nl: 'Hoe ernstig was de gewrichtsstijfheid van de knie later op de dag, na zitten liggen of rusten gedurende de afgelopen week?',
      en: 'How severe was your knee stiffness during the last week after sitting, lying, or resting later in the day?',
      fr: 'Au cours des huit derniers jours, comment décririez-vous la raideur de votre genou après être resté(e) assis(e), couché(e) ou au repos pendant la journée ?',
    },
    ...type,
  },
  SY3_SWELLING: {
    label: {
      nl: 'Was uw knie gezwollen gedurende de afgelopen week?',
      en: 'Did you have swelling in your knee during the last week?',
      fr: 'Est-ce que votre genou a été enflé au cours des huit derniers jours ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
        { value: 1, label: { nl: 'Zelden', en: 'Rarely', fr: 'Rarement' } },
        { value: 2, label: { nl: 'Soms', en: 'Sometimes', fr: 'Parfois' } },
        { value: 3, label: { nl: 'Vaak', en: 'Often', fr: 'Souvent' } },
        { value: 4, label: { nl: 'Altijd', en: 'Always', fr: 'Toujours' } },
      ],
    },
  },
  SY4_GRINDING: {
    label: {
      nl: 'Heeft u een knarsend gevoel in uw knie, klikkende of andere geluiden uit uw knie gehoord gedurende de afgelopen week?',
      en: 'Did you feel grinding, hear clicking or any other type of noise when your knee moved during the last week?',
      fr: 'Ressentez-vous des ou entendez-vous des craquements ou n’importe quel autre type de bruit au cours des huit derniers jours ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
        { value: 1, label: { nl: 'Zelden', en: 'Rarely', fr: 'Rarement' } },
        { value: 2, label: { nl: 'Soms', en: 'Sometimes', fr: 'Parfois' } },
        { value: 3, label: { nl: 'Vaak', en: 'Often', fr: 'Souvent' } },
        { value: 4, label: { nl: 'Altijd', en: 'Always', fr: 'Toujours' } },
      ],
    },
  },
  SY5_CATCHING: {
    label: {
      nl: 'Gebeurde het dat uw knie even vast bleef steken of helemaal op slot zat gedurende de afgelopen week? ',
      en: 'Did your knee catch or hang up when moving during the last week?',
      fr: 'Est-ce que votre genou s’est accroché ou bloqué en bougeant au cours des huit derniers jours ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
        { value: 1, label: { nl: 'Zelden', en: 'Rarely', fr: 'Rarement' } },
        { value: 2, label: { nl: 'Soms', en: 'Sometimes', fr: 'Parfois' } },
        { value: 3, label: { nl: 'Vaak', en: 'Often', fr: 'Souvent' } },
        { value: 4, label: { nl: 'Altijd', en: 'Always', fr: 'Toujours' } },
      ],
    },
  },
  SY6_STRETCHING: {
    label: {
      nl: 'Kon u uw knie helemaal strekken gedurende de afgelopen week?',
      en: 'Could you straighten your knee fully during the last week?',
      fr: 'Avez-vous pu plier complètement votre genou au cours des huit derniers jours ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Altijd', en: 'Always', fr: 'Toujours' } },
        { value: 1, label: { nl: 'Vaak', en: 'Often', fr: 'Souvent' } },
        { value: 2, label: { nl: 'Soms', en: 'Sometimes', fr: 'Parfois' } },
        { value: 3, label: { nl: 'Zelden', en: 'Rarely', fr: 'Rarement' } },
        { value: 4, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
      ],
    },
  },
  SY7_BENDING: {
    label: {
      nl: 'Kon u uw knie helemaal buigen gedurende de afgelopen week?',
      en: 'Could you bend your knee fully during the last week?',
      fr: 'Pouvez-vous plier complètement votre genou?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Altijd', en: 'Always', fr: 'Toujours' } },
        { value: 1, label: { nl: 'Vaak', en: 'Often', fr: 'Souvent' } },
        { value: 2, label: { nl: 'Soms', en: 'Sometimes', fr: 'Parfois' } },
        { value: 3, label: { nl: 'Zelden', en: 'Rarely', fr: 'Rarement' } },
        { value: 4, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
      ],
    },
  },
  A1_DESCENDING_STAIRS: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met trap aflopen?',
      en: 'What difficulty have you experienced during the last week when descending stairs?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour descendre les escaliers ?',
    },
    ...type,
  },
  A2_ASCENDING_STAIRS: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met trap oplopen?',
      en: 'What difficulty have you experienced during the last week when ascending stairs?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour monter les escaliers ?',
    },
    ...type,
  },
  A3_RISING_FROM_CHAIR: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met het opstaan vanuit een stoel?',
      en: 'What difficulty have you experienced during the last week when rising from sitting?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour vous lever d`une position assise ?',
    },
    ...type,
  },
  A4_STANDING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met staan?',
      en: 'What difficulty have you experienced during the last week when standing?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour rester debout ?',
    },
    ...type,
  },
  A5_BENDING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met bukken naar de grond/iets oppakken van de grond?',
      en: 'What difficulty have you experienced during the last week when bending to floor/picking up an object?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour vous pencher pour ramasser un objet ?',
    },
    ...type,
  },
  A6_WALKING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met lopen op een vlakke ondergrond?',
      en: 'What difficulty have you experienced during the last week when walking on flat surface?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour marcher sur un terrain plat ?',
    },
    ...type,
  },
  A7_GET_IN_OUT_OF_CAR: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met instappen/uitstappen uit een auto?',
      en: 'What difficulty have you experienced during the last week when getting in/out of car?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour monter ou descendre de voiture ?',
    },
    ...type,
  },
  A8_SHOPPING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met winkelen?',
      en: 'What difficulty have you experienced during the last week when going shopping?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour faire vos courses ?',
    },
    ...type,
  },
  A9_SOCKS_PUTTING_ON: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met sokken/kousen uittrekken?',
      en: 'What difficulty have you experienced during the last week when putting on socks/stockings?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour mettre vos chaussettes ou vos collants ?',
    },
    ...type,
  },
  A10_GETTING_OUT_OF_BED: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met opstaan vanuit bed?',
      en: 'What difficulty have you experienced during the last week when rising from bed?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour sortir du lit ?',
    },
    ...type,
  },
  A11_SOCKS_TAKING_OFF: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met sokken/kousen uittrekken?',
      en: 'What difficulty have you experienced during the last week when taking off socks/stockings?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour enlever vos chaussettes ou vos collants ?',
    },
    ...type,
  },
  A12_LYING_IN_BED: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met in bed liggen?',
      en: 'What difficulty have you experienced during the last week when lying in bed (turning over, maintaining knee position)?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour retourner ou garder le genou dans la même position en étant couché(e) ?',
    },
    ...type,
  },
  A13_BATHING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met in/uit bad of douche gaan?',
      en: 'What difficulty have you experienced during the last week when getting in/out of bath?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour entrer ou sortir d’une baignoire ?',
    },
    ...type,
  },
  A14_SITTING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met zitten?',
      en: 'What difficulty have you experienced during the last week when sitting?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour rester assis(e) ?',
    },
    ...type,
  },
  A15_TOILET: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met gaan zitten / opstaan van het toilet?',
      en: 'What difficulty have you experienced during the last week when getting on/off the toilet?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour vous asseoir ou vous relever des toilettes ?',
    },
    ...type,
  },
  A16_DOMESTIC_ACTIVITIES: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met zware huishoudelijke activiteiten (zware dozen tillen, de vloer schrobben etc)',
      en: 'What difficulty have you experienced during the last week when doing heavy domestic duties (shovelling, scrubbing floors, moving heavy boxes, etc)?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour faire de gros travaux ménagers (déplacer des objets lourds, récurer les sols,…) ?',
    },
    ...type,
  },
  A17_LIGHT_DOMESTIC_ACTIVITIES: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met lichte huishoudelijke werkzaamheden (koken, stoffen etc)',
      en: 'What difficulty have you experienced during the last week when doing light domestic duties (cooking, dusting, etc)?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour faire des petits travaux ménagers (faire la cuisine, faire la poussière,…) ?',
    },
    ...type,
  },
  SP1_SQUATTING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met op uw hurken zitten?',
      en: 'What difficulty have you experienced during the last week when squatting?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour rester accroupi(e)?',
    },
    ...type,
  },
  SP2_RUNNING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met hardlopen?',
      en: 'What difficulty have you experienced during the last week when running?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour courir ?',
    },
    ...type,
  },
  SP3_JUMPING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met springen?',
      en: 'What difficulty have you experienced during the last week when jumping?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour sauter ?',
    },
    ...type,
  },
  SP4_TWISTING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met draaien op een belaste knie?',
      en: 'What difficulty have you experienced during the last week when turning/twisting on your injured knee?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour tourner/pivoter sur votre jambe ?',
    },
    ...type,
  },
  SP5_KNEELING: {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met knielen?',
      en: 'What difficulty have you experienced during the last week when kneeling?',
      fr: 'Au cours des huit derniers jours, quelle a été votre difficulté pour rester à genoux ?',
    },
    ...type,
  },
  Q1_AWARENESS_OF_PROBLEMS: {
    label: {
      nl: 'Hoe vaak wordt u aan uw knie herinnerd?',
      en: 'How often are you aware of your knee problems?',
      fr: 'Pensez-vous souvent à votre problème de genou ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
        {
          value: 1,
          label: { nl: 'Elke maand', en: 'Monthly', fr: 'Une fois par mois' },
        },
        {
          value: 2,
          label: { nl: 'Elke week', en: 'Weekly', fr: 'Une fois par semaine' },
        },
        {
          value: 3,
          label: { nl: 'Elke dag', en: 'Daily', fr: 'Tous les jours' },
        },
        {
          value: 4,
          label: { nl: 'Altijd', en: 'Always', fr: 'Tout le temps' },
        },
      ],
    },
  },
  Q2_LIFESTYLE_MODIFICATIONS: {
    label: {
      nl: 'Heeft u uw manier van leven veranderd om uw knie te ontzien?',
      en: 'Have you modified your lifestyle to avoid potentially damaging activities to your knee?',
      fr: 'Avez-vous modifié votre façon de vivre pour éviter les activités qui pourraient aggraver votre problème de genou ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        {
          value: 0,
          label: { nl: 'Totaal niet', en: 'Not at all', fr: 'Pas du tout' },
        },
        { value: 1, label: { nl: 'Iets', en: 'Mildly', fr: 'Un peu' } },
        {
          value: 2,
          label: { nl: 'Matig', en: 'Moderately', fr: 'Modérément' },
        },
        {
          value: 3,
          label: { nl: 'Grotendeels', en: 'Severely', fr: 'Beaucoup' },
        },
        { value: 4, label: { nl: 'Totaal', en: 'Totally', fr: 'Totalement' } },
      ],
    },
  },
  Q3_CONFIDENCE: {
    label: {
      nl: 'In welke mate kunt u op uw knie vertrouwen?',
      en: 'How troubled are you with lack of confidence in your knee?',
      fr: 'Est-ce qu’un manque de confiance dans votre genou vous gêne ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        {
          value: 0,
          label: { nl: 'Totaal niet', en: 'Not at all', fr: 'Pas du tout' },
        },
        { value: 1, label: { nl: 'Grotendeels', en: 'Mildly', fr: 'Un peu' } },
        {
          value: 2,
          label: { nl: 'Matig', en: 'Moderately', fr: 'Modérément' },
        },
        { value: 3, label: { nl: 'Iets', en: 'Severely', fr: 'Beaucoup' } },
        { value: 4, label: { nl: 'Totaal', en: 'Totally', fr: 'Totalement' } },
      ],
    },
  },
  Q4_GENERAL_DIFFICULTY: {
    label: {
      nl: 'Hoe groot zijn uw problemen met de knie in het algemeen?',
      en: 'In general, how much difficulty do you have with your knee?',
      fr: 'Finalement, êtes-vous gêné(e) par votre genou ?',
    },
    type: baseNumericInputType,
    uiOptions: {
      options: [
        // Note FR & NL values here are different from eng hence we're not using the default values
        { value: 0, label: { nl: 'Geen', en: 'None', fr: 'Pas du tout' } },
        { value: 1, label: { nl: 'Gering', en: 'Mild', fr: 'Un peu' } },
        { value: 2, label: { nl: 'Matig', en: 'Moderate', fr: 'Modérément' } },
        { value: 3, label: { nl: 'Groot', en: 'Severe', fr: 'Beaucoup' } },
        {
          value: 4,
          label: { nl: 'Zeer groot', en: 'Extreme', fr: 'Extrêmement' },
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
