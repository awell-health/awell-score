import type { InputType } from '../../../../src/types/calculations.types'

export const SF12_INPUT: Array<InputType> = [
  {
    input_id: 'SF12_Q01',
    input_label: {
      en: 'In general, would you say your health is:',
      fr: 'Dans l`ensemble, pensez-vous que votre santé est :',
      nl: 'Hoe zou u over het algemeen uw gezondheid noemen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: { nl: 'Uitstekend', en: 'Excellent', fr: 'Excellente' },
        },
        {
          value: 2,
          label: { nl: 'Zeer goed', en: 'Very good', fr: 'Très bonne ' },
        },
        { value: 3, label: { nl: 'Goed', en: 'Good', fr: 'Bonne' } },
        { value: 4, label: { nl: 'Matig', en: 'Fair', fr: 'Médiocre' } },
        { value: 5, label: { nl: 'Slecht', en: 'Poor', fr: 'Mauvaise' } },
      ],
    },
  },
  {
    input_id: 'SF12_Q02',
    input_label: {
      en: 'Please select whether your health now limits you when doing moderate activities, such as moving a table, pushing a vacuum cleaner, bowling, or playing golf?',
      nl: 'Wordt u door uw gezondheid op dit moment beperkt bij matige inspanning, zoals het verplaatsen van een tafel, stofzuigen, zwemmen of fietsen',
      fr: 'En raison de votre état de santé actuel, êtes-vous limité pour des efforts physiques modérés (déplacer une table, passer l’aspirateur, jouer aux boules…)?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ja, ernstig beperkt',
            en: 'Yes, limited a lot',
            fr: 'Oui, beaucoup limité',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ja, een beetje beperkt',
            en: 'Yes, limited a little',
            fr: 'Oui, un peu limité',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Nee, helemaal niet beperkt',
            en: 'No, not limited at all',
            fr: 'Non, pas du tout limité',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q03',
    input_label: {
      en: 'Please select whether your health now limits you climbing several flights of stairs?',
      nl: 'Wordt u door uw gezondheid op dit moment beperkt bij een paar trappen oplopen?',
      fr: 'En raison de votre état de santé actuel, êtes-vous limité pour monter plusieurs étages par l’escalier?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ja, ernstig beperkt',
            en: 'Yes, limited a lot',
            fr: 'Oui, beaucoup limité',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ja, een beetje beperkt',
            en: 'Yes, limited a little',
            fr: 'Oui, un peu limité',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Nee, helemaal niet beperkt',
            en: 'No, not limited at all',
            fr: 'Non, pas du tout limité',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q04',
    input_label: {
      en: 'During the PAST FOUR WEEKS, have you ACCOMPLISHED LESS than you would like as a result of your physical health?',
      nl: 'Hoe vaak heeft u in de afgelopen 4 WEKEN, ten gevolge van uw lichamelijke gezondheid, minder bereikt dan u zou willen?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, et en raison de votre état physique, avez-vous accompli moins de choses que vous auriez souhaité?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ja',
            fr: 'Qui',
            en: 'Yes',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Nee',
            fr: 'Non',
            en: 'No',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q05',
    input_label: {
      en: 'During the PAST FOUR WEEKS, were you limited in the KIND of work or other activities you do as a result of your physical health?',
      nl: 'Hoe vaak was u in de afgelopen 4 WEKEN, ten gevolge van uw lichamelijke gezondheid, beperkt in het soort werk of andere bezigheden?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, et en raison de votre état physique, avez-vous été limité pour faire certaines choses?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ja',
            fr: 'Qui',
            en: 'Yes',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Nee',
            fr: 'Non',
            en: 'No',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q06',
    input_label: {
      en: 'During the PAST FOUR WEEKS, did you ACCOMPLISHED LESS than you would like AS A RESULT OF ANY EMOTIONAL PROBLEMS, such as feeling depressed or anxious?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, et en raison de votre état émotionnel (comme vous sentir triste, nerveux ou déprimé) avez-vous accompli moins de choses que vous auriez souhaité?',
      nl: 'Hoe vaak heeft u in de afgelopen 4 WEKEN, ten gevolge van emotionele problemen (zoals depressieve of angstige gevoelens), minder bereikt dan u zou willen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ja',
            fr: 'Qui',
            en: 'Yes',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Nee',
            fr: 'Non',
            en: 'No',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q07',
    input_label: {
      en: 'During the PAST FOUR WEEKS, you did not do work or other activities as CAREFULLY as usual AS A RESULT OF ANY EMOTIONAL PROBLEMS, such as feeling depressed or anxious?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, et en raison de votre état émotionnel (comme vous sentir triste, nerveux ou déprimé) avez-vous eu des difficultés à faire ce que vous aviez à faire avec autant de soin et d’attention que d’habitude?',
      nl: 'Hoe vaak heeft u in de afgelopen 4 WEKEN, ten gevolge van emotionele problemen (zoals depressieve of angstige gevoelens), uw werk of andere bezigheden niet zo zorgvuldig kunnen uitvoeren als gewoonlijk?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Ja',
            fr: 'Qui',
            en: 'Yes',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Nee',
            fr: 'Non',
            en: 'No',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q08',
    input_label: {
      en: 'During the PAST 4 WEEKS, how much did pain interfere with your normal work (including both work outside the home and housework)?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, dans quelle mesure vos douleurs physiques vous ont -elles limité dans votre travail ou vos activités domestiques?',
      nl: 'In welke mate bent u de afgelopen 4 WEKEN door pijn gehinderd in uw normale werk (zowel werk buitenshuis als huishoudelijk werk)?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Helemaal niet',
            en: 'Not at all',
            fr: 'Pas du tout',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Klein beetje',
            en: 'A little bit',
            fr: 'Un petit peu',
          },
        },
        {
          value: 3,
          label: { nl: 'Nogal', en: 'Moderately', fr: 'Moyennement' },
        },
        {
          value: 4,
          label: { nl: 'Veel', en: 'Quite a bit', fr: 'Beaucoup' },
        },
        {
          value: 5,
          label: { nl: 'Heel erg veel', en: 'Extremely', fr: 'Enormément' },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q09',
    input_label: {
      en: 'How much of the time during the PAST 4 WEEKS have you felt calm and peaceful?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, y a t-il eu des moments où vous vous êtes senti calme et détendu?',
      nl: 'Hoe vaak gedurende de afgelopen 4 WEKEN voelde u zich rustig en tevreden?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Altijd',
            fr: 'Toujours',
            en: 'All of the time',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Meestal',
            fr: 'La plupart du temps ',
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Vaak',
            fr: 'Souvent',
            en: 'A Good Bit of the Time',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Soms',
            fr: 'Souvent',
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Zelden',
            fr: 'Parfois',
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            nl: 'Nooit',
            fr: 'Jamais',
            en: 'None of the time',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q10',
    input_label: {
      en: 'How much of the time during the past 4 week did you have a lot of energy?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, y a t-il eu des moments où vous vous êtes senti débordant d’énergie?',
      nl: 'Hoe vaak gedurende de afgelopen 4 WEKEN had je veel energie?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Altijd',
            fr: 'Toujours',
            en: 'All of the time',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Meestal',
            fr: 'La plupart du temps ',
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Vaak',
            fr: 'Souvent',
            en: 'A Good Bit of the Time',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Soms',
            fr: 'Souvent',
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Zelden',
            fr: 'Parfois',
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            nl: 'Nooit',
            fr: 'Jamais',
            en: 'None of the time',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q11',
    input_label: {
      en: 'How much of the time during the PAST 4 WEEKS have you felt downhearted and blue?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, y a t-il eu des moments où vous vous êtes senti triste et abattu?',
      nl: 'Hoe vaak gedurende de afgelopen 4 WEKEN voelde u zich somber en neerslachtig?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Altijd',
            fr: 'Toujours',
            en: 'All of the time',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Meestal',
            fr: 'La plupart du temps ',
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Vaak',
            fr: 'Souvent',
            en: 'A Good Bit of the Time',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Soms',
            fr: 'Souvent',
            en: 'Some of the time',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Zelden',
            fr: 'Parfois',
            en: 'A little of the time',
          },
        },
        {
          value: 6,
          label: {
            nl: 'Nooit',
            fr: 'Jamais',
            en: 'None of the time',
          },
        },
      ],
    },
  },
  {
    input_id: 'SF12_Q12',
    input_label: {
      en: 'How much of the time during the PAST 4 WEEKS has your PHYSICAL HEALTH OR EMOTIONAL PROBLEMS interfered with your social activities (like visiting with friends, relatives, etc.)?',
      nl: 'Hoe vaak hebben uw lichamelijke gezondheid of emotionele problemen u gedurende de afgelopen 4 WEKEN gehinderd bij uw sociale activiteiten (zoals vrienden of familie bezoeken, etc.)?',
      fr: 'Au cours de ces 4 DERNIÉRES SEMAINES, y a t-il eu des moments où votre état de santé physique ou émotionnel vous a gêné dans votre vie sociale et vos relations avec les autres, votre famille, vos amis, vos connaissances?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 1,
          label: {
            nl: 'Altijd',
            fr: 'Toujours',
            en: 'All of the time',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Meestal',
            fr: 'La plupart du temps ',
            en: 'Most of the time',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Soms',
            fr: 'Souvent',
            en: 'Some of the time',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Zelden',
            fr: 'Parfois',
            en: 'A little of the time',
          },
        },
        {
          value: 5,
          label: {
            nl: 'Nooit',
            fr: 'Jamais',
            en: 'None of the time',
          },
        },
      ],
    },
  },
]
