import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      { value: 0, label: { nl: 'Geen', en: 'None', fr: 'Jamais' } },
      { value: 1, label: { nl: 'Gering', en: 'Mild', fr: 'Rarement' } },
      { value: 2, label: { nl: 'Matig', en: 'Moderate', fr: 'Parfois' } },
      { value: 3, label: { nl: 'Veel', en: 'Severe', fr: 'Souvent' } },
      { value: 4, label: { nl: 'Erg veel', en: 'Extreme', fr: 'Toujours' } },
    ],
  },
} satisfies EnumNumberInputType

const timeType = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      { value: 0, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
      { value: 1, label: { nl: 'Maandelijks', en: 'Monthly or less', fr: 'Mensuellement' } },
      { value: 2, label: { nl: '', en: 'Weekly', fr: '' } },
      { value: 3, label: { nl: '', en: 'Daily', fr: '' } },
      { value: 4, label: { nl: 'Erg veel', en: 'Always', fr: 'Toujours' } },
    ],
  },
} satisfies EnumNumberInputType

const basicType = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      { value: 0, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
      { value: 1, label: { nl: 'Zelden', en: 'Rarely', fr: 'Rarement' } },
      { value: 2, label: { nl: 'Soms', en: 'Sometimes', fr: 'Parfois' } },
      { value: 3, label: { nl: 'Vaak', en: 'Often', fr: 'Souvent' } },
      { value: 4, label: { nl: 'Altijd', en: 'Always', fr: 'Toujours' } },
    ],
  },
} satisfies EnumNumberInputType

const basicReverseType = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      { value: 4, label: { nl: 'Nooit', en: 'Never', fr: 'Jamais' } },
      { value: 3, label: { nl: 'Zelden', en: 'Rarely', fr: 'Rarement' } },
      { value: 2, label: { nl: 'Soms', en: 'Sometimes', fr: 'Parfois' } },
      { value: 1, label: { nl: 'Vaak', en: 'Often', fr: 'Souvent' } },
      { value: 0, label: { nl: 'Altijd', en: 'Always', fr: 'Toujours' } },
    ],
  },
} satisfies EnumNumberInputType


export const KOOS_INPUTS = {
  'P1': {
    label: {
      nl: 'Hoe vaak heeft u de afgelopen week pijn in uw knie gehad?',
      en: 'What degree of pain have you experienced the last week when having knee pain?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière quand votre genou était douloureux?',
    },
    ...timeType,
  },
  'P2': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren bij het draaien op je knie?',
      en: 'What degree of pain have you experienced the last week when twisting/pivoting on your knee?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière en tournant sur votre genou?',
    },
    ...type,
  },
  'P3': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren bij het volledig strekken van de knie?',
      en: 'What degree of pain have you experienced the last week when straightening knee fully?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière en étendant complètement le genou?',
    },
    ...type,
  },
  'P4': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren bij het volledig buigen van de knie?',
      en: 'What degree of pain have you experienced the last week when bending knee fully?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière en pliant complètement le genou?',
    },
    ...type,
  },
  'P5': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren bij het lopen op een vlakke ondergrond?',
      en: 'What degree of pain have you experienced the last week when walking on flat surface?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière en marchant sur une surface plane?',
    },
    ...type,
  },
  'P6': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren bij het trap op of af lopen?',
      en: 'What degree of pain have you experienced the last week when going up or down stairs?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière en montant ou descendant les escaliers?',
    },
    ...type,
  },
  'P7': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren `s nachts in bed?',
      en: 'What degree of pain have you experienced the last week when at night while in bed?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière la nuit au lit?',
    },
    ...type,
  },
  'P8': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren bij het zitten of liggen?',
      en: 'What degree of pain have you experienced the last week when sitting or lying?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière en position assise ou couchée?',
    },
    ...type,
  },
  'P9': {
    label: {
      nl: 'Hoeveel pijn heeft u de afgelopen week ervaren bij het rechtop staan?',
      en: 'What degree of pain have you experienced the last week when standing upright?',
      fr: 'Quel degré de douleur avez-vous ressenti la semaine dernière en se tenant debout?',
    },
    ...type,
  },
  'Sy1': {
    label: {
      nl: 'Hoe ernstig is de stijfheid van uw knie direct na het ontwaken `s ochtends?',
      en: 'How severe is your knee stiffness after first wakening in the morning?',
      fr: 'Quelle est la gravité de la raideur de votre genou au réveil le matin?',
    },
    ...type,
  },
  'Sy2': {
    label: {
      nl: 'Hoe ernstig is de stijfheid van uw knie na zitten, liggen of rusten later op de dag?',
      en: 'How severe is your knee stiffness after sitting, lying, or resting later in the day?',
      fr: 'Quelle est la gravité de la raideur de votre genou après être resté assis, couché ou au repos plus tard dans la journée?',
    },
    ...type,
  },
  'Sy3': {
    label: {
      nl: 'Heeft u een gezwollen knie?',
      en: 'Do you have swelling in your knee?',
      fr: 'Avez-vous un gonflement du genou?',
    },
    ...basicType,
  },
  'Sy4': {
    label: {
      nl: 'Voelt u een krakend gevoel, hoort u klikken of andere geluiden als uw knie beweegt?',
      en: 'Do you feel grinding, hear clicking or any other type of noise when your knee moves?',
      fr: 'Sentez-vous un crissement, entendez-vous un clic ou tout autre type de bruit lorsque votre genou bouge?',
    },
    ...basicType,
  },
  'Sy5': {
    label: {
      nl: 'Blijft uw knie steken of blokkeert deze bij beweging?',
      en: 'Does your knee catch or hang up when moving?',
      fr: 'Votre genou se bloque-t-il lors des mouvements?',
    },
    ...basicType,
  },
  'Sy6': {
    label: {
      nl: 'Kunt u uw knie volledig strekken?',
      en: 'Can you straighten your knee fully?',
      fr: 'Pouvez-vous étendre complètement votre genou?',
    },
    ...basicReverseType,
  },
  'Sy7': {
    label: {
      nl: 'Kunt u uw knie volledig buigen?',
      en: 'Can you bend your knee fully?',
      fr: 'Pouvez-vous plier complètement votre genou?',
    },
    ...basicReverseType,
  },
  'A1': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met trap aflopen?',
      en: 'What difficulty have you experienced the last week when descending stairs?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en descendant les escaliers?',
    },
    ...type,
  },
  'A2': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met trap oplopen?',
      en: 'What difficulty have you experienced the last week when ascending stairs?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en montant les escaliers?',
    },
    ...type,
  },
  'A3': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met opstaan vanuit zittende positie?',
      en: 'What difficulty have you experienced the last week when rising from sitting?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en vous levant d`une position assise?',
    },
    ...type,
  },
  'A4': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met staan?',
      en: 'What difficulty have you experienced the last week when standing?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en restant debout?',
    },
    ...type,
  },
  'A5': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met bukken naar de grond/iets oppakken?',
      en: 'What difficulty have you experienced the last week when bending to floor/picking up an object?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en vous penchant pour ramasser un objet?',
    },
    ...type,
  },
  'A6': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met lopen op een vlakke ondergrond?',
      en: 'What difficulty have you experienced the last week when walking on flat surface?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en marchant sur une surface plane?',
    },
    ...type,
  },
  'A7': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met in/uit de auto stappen?',
      en: 'What difficulty have you experienced the last week when getting in/out of car?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en entrant/sortant d`une voiture?',
    },
    ...type,
  },
  'A8': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met winkelen?',
      en: 'What difficulty have you experienced the last week when going shopping?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en faisant les courses?',
    },
    ...type,
  },
  'A9': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met sokken/kousen aantrekken?',
      en: 'What difficulty have you experienced the last week when putting on socks/stockings?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en mettant vos chaussettes/bas?',
    },
    ...type,
  },
  'A10': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met opstaan uit bed?',
      en: 'What difficulty have you experienced the last week when rising from bed?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en vous levant du lit?',
    },
    ...type,
  },
  'A11': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met sokken/kousen uittrekken?',
      en: 'What difficulty have you experienced the last week when taking off socks/stockings?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en enlevant vos chaussettes/bas?',
    },
    ...type,
  },
  'A12': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met in bed liggen (omdraaien, kniepositie behouden)?',
      en: 'What difficulty have you experienced the last week when lying in bed (turning over, maintaining knee position)?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en étant couché (pour vous retourner, maintenir la position du genou)?',
    },
    ...type,
  },
  'A13': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met in/uit bad stappen?',
      en: 'What difficulty have you experienced the last week when getting in/out of bath?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en entrant/sortant du bain?',
    },
    ...type,
  },
  'A14': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met zitten?',
      en: 'What difficulty have you experienced the last week when sitting?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en position assise?',
    },
    ...type,
  },
  'A15': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met op/af het toilet gaan?',
      en: 'What difficulty have you experienced the last week when getting on/off toilet?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en vous asseyant/vous levant des toilettes?',
    },
    ...type,
  },
  'A16': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met zwaar huishoudelijk werk (sneeuw scheppen, vloeren schrobben, etc)?',
      en: 'What difficulty have you experienced the last week when doing heavy domestic duties (shovelling, scrubbing floors, etc)?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en faisant des tâches domestiques lourdes (pelleter, frotter les sols, etc)?',
    },
    ...type,
  },
  'A17': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met licht huishoudelijk werk (koken, afstoffen, etc)?',
      en: 'What difficulty have you experienced the last week when doing light domestic duties (cooking, dusting, etc)?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en faisant des tâches domestiques légères (cuisiner, épousseter, etc)?',
    },
    ...type,
  },
  'Sp1': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met hurken?',
      en: 'What difficulty have you experienced the last week when squatting?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en vous accroupissant?',
    },
    ...type,
  },
  'Sp2': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met rennen?',
      en: 'What difficulty have you experienced the last week when running?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en courant?',
    },
    ...type,
  },
  'Sp3': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met springen?',
      en: 'What difficulty have you experienced the last week when jumping?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en sautant?',
    },
    ...type,
  },
  'Sp4': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met draaien/zwenken op uw geblesseerde knie?',
      en: 'What difficulty have you experienced the last week when turning/twisting on your injured knee?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en tournant/pivotant sur votre genou blessé?',
    },
    ...type,
  },
  'Sp5': {
    label: {
      nl: 'Hoeveel moeite heeft u de afgelopen week gehad met knielen?',
      en: 'What difficulty have you experienced the last week when kneeling?',
      fr: 'Quelle difficulté avez-vous éprouvée la semaine dernière en vous agenouillant?',
    },
    ...type,
  },
  'Q1': {
    label: {
      nl: 'Hoe vaak bent u zich bewust van uw knieproblemen?',
      en: 'How often are you aware of your knee problems?',
      fr: 'À quelle fréquence êtes-vous conscient de vos problèmes de genou?',
    },
    ...timeType,
  },
  'Q2': {
    label: {
      nl: 'Heeft u uw levensstijl aangepast om activiteiten te vermijden die mogelijk schadelijk zijn voor uw knie?',
      en: 'Have you modified your lifestyle to avoid potentially damaging activities to your knee?',
      fr: 'Avez-vous modifié votre mode de vie pour éviter les activités potentiellement dangereuses pour votre genou?',
    },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', fr: 'Pas du tout' } },
        { value: 1, label: { nl: 'Een beetje', en: 'Mildly', fr: 'Légèrement' } },
        { value: 2, label: { nl: 'Matig', en: 'Moderately', fr: 'Modérément' } },
        { value: 3, label: { nl: 'Ernstig', en: 'Severely', fr: 'Sévèrement' } },
        { value: 4, label: { nl: 'Totaal', en: 'Totally', fr: 'Totalement' } },
      ],
    },
  },
  'Q3': {
    label: {
      nl: 'Hoeveel last heeft u van gebrek aan vertrouwen in uw knie?',
      en: 'How troubled are you with lack of confidence in your knee?',
      fr: 'À quel point le manque de confiance en votre genou vous dérange-t-il?',
    },
    type: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', fr: 'Pas du tout' } },
        { value: 1, label: { nl: 'Een beetje', en: 'Mildly', fr: 'Légèrement' } },
        { value: 2, label: { nl: 'Matig', en: 'Moderately', fr: 'Modérément' } },
        { value: 3, label: { nl: 'Ernstig', en: 'Severely', fr: 'Sévèrement' } },
        { value: 4, label: { nl: 'Totaal', en: 'Totally', fr: 'Totalement' } },
      ],
    },
  },
  'Q4': {
    label: {
      nl: 'In het algemeen, hoeveel moeite heeft u met uw knie?',
      en: 'In general, how much difficulty do you have with your knee?',
      fr: 'En général, à quel point avez-vous des difficultés avec votre genou?',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
