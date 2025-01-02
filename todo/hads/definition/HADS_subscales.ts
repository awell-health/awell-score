import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

export const HADS_subscales: Array<DefaultSubscaleType> = [
  {
    id: 'FEAR',
    input_ids_in_subscale: [
      {
        input_id: 'HADS_01',
        label: {
          nl: 'Ik voel me de laatste tijd gespannen',
          en: "I feel tense or 'wound up'",
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 3, label: { nl: 'Meestal', en: 'Most of the time' } },
            { value: 2, label: { nl: 'Vaak', en: 'A lot of the time' } },
            {
              value: 1,
              label: {
                nl: 'Af en toe, soms',
                en: 'From time to time, occasionally',
              },
            },
            { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_03',
        label: {
          nl: 'Ik krijg de laatste tijd het angstige gevoel alsof er elk moment iets vreselijks zal gebeuren',
          en: 'I get a sort of frightened feeling as if something awful is about to happen',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: {
                nl: 'Heel zeker en vrij erg',
                en: 'Very definitely and quite badly',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Ja, maar niet zo erg',
                en: 'Yes, but not too badly ',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje, maar ik maak me er geen zorgen over',
                en: "A little, but it doesn't worry me",
              },
            },
            { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_05',
        label: {
          nl: 'Ik maak me de laatste tijd ongerust.',
          en: 'Worrying thoughts go through my mind',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: { nl: 'Heel erg vaak', en: 'A great deal of the time' },
            },
            { value: 2, label: { nl: 'Vaak', en: 'A lot of the time' } },
            {
              value: 1,
              label: {
                nl: 'Niet zo vaak',
                en: 'From time to time, but not too often ',
              },
            },
            { value: 0, label: { nl: 'Heel soms', en: 'Only occasionally' } },
          ],
        },
      },
      {
        input_id: 'HADS_07',
        label: {
          nl: 'Ik kan de laatste tijd rustig zitten en me ontspannen',
          en: 'I can sit at ease and feel relaxed',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Zeker', en: 'Definitely' } },
            { value: 1, label: { nl: 'Meestal', en: 'Usually' } },
            { value: 2, label: { nl: 'Niet vaak', en: 'Not Often' } },
            { value: 3, label: { nl: 'Helemaal niet', en: 'Not at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_09',
        label: {
          nl: 'Ik krijg de laatste tijd een soort benauwd, gespannen gevoel in mijn maag.',
          en: "I get a sort of frightened feeling like 'butterflies' in the stomach",
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all' } },
            { value: 1, label: { nl: 'Soms', en: 'Occasionally' } },
            { value: 2, label: { nl: 'Vrij vaak', en: 'Quite often' } },
            { value: 3, label: { nl: 'Heel vaak', en: 'Very often' } },
          ],
        },
      },
      {
        input_id: 'HADS_11',
        label: {
          nl: 'Ik voel me de laatste tijd rusteloos',
          en: 'I feel restless as I have to be on the move',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 3, label: { nl: 'Heel erg', en: 'Very much indeed' } },
            { value: 2, label: { nl: 'Tamelijk veel', en: 'Quite a lot' } },
            { value: 1, label: { nl: 'Niet erg veel', en: 'Not very much' } },
            { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_13',
        label: {
          nl: 'Ik krijg de laatste tijd plotseling gevoelens van angst of paniek',
          en: 'I get sudden feelings of panic',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 3, label: { nl: 'Zeer vaak', en: 'Very often indeed' } },
            { value: 2, label: { nl: 'Tamelijk veel', en: 'Quite often' } },
            { value: 1, label: { nl: 'Niet erg vaak', en: 'Not very often' } },
            { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all' } },
          ],
        },
      },
    ],
  },
  {
    id: 'DEPRESSION',
    input_ids_in_subscale: [
      {
        input_id: 'HADS_02',
        label: {
          nl: 'Ik geniet nog steeds van de dingen waar ik vroeger van genoot',
          en: 'I still enjoy the things I used to enjoy',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Zeker zo veel', en: 'Definitely as much' },
            },
            { value: 1, label: { nl: 'Wat minder', en: 'Not quite so much' } },
            {
              value: 2,
              label: { nl: 'Duidelijk minder', en: 'Only a little ' },
            },
            { value: 3, label: { nl: 'Nauwelijks nog', en: 'Hardly at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_04',
        label: {
          nl: 'Ik kan lachen en de dingen van de vrolijke kant zien.',
          en: 'I can laugh and see the funny side of things',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: {
                nl: 'Net zoveel als vroeger',
                en: 'As much as I always could',
              },
            },
            {
              value: 1,
              label: { nl: 'Nu wat minder', en: 'Not quite so much now ' },
            },
            {
              value: 2,
              label: {
                nl: 'Nu duidelijk minder',
                en: 'Definitely not so much now',
              },
            },
            { value: 3, label: { nl: 'Helemaal niet meer', en: 'Not at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_06',
        label: {
          nl: 'Ik voel me de laatste tijd opgewekt',
          en: 'I feel cheerful',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 3, label: { nl: 'Helmaal niet', en: 'Not at all' } },
            { value: 2, label: { nl: 'Niet vaak', en: 'Not often' } },
            { value: 1, label: { nl: 'Soms', en: 'Sometimes' } },
            { value: 0, label: { nl: 'Meestal', en: 'Most of the time' } },
          ],
        },
      },
      {
        input_id: 'HADS_08',
        label: {
          nl: 'Ik voel me de laatste tijd alsof alles moeizamer gaat',
          en: 'I feel as if I am slowed down',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 3,
              label: { nl: 'Bijna altijd', en: 'Nearly all the time' },
            },
            { value: 2, label: { nl: 'Heel vaak', en: 'Very often' } },
            { value: 1, label: { nl: 'Soms', en: 'Sometimes' } },
            { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_10',
        label: {
          nl: 'Ik heb de laatste tijd geen interesse meer in mijn uiterlijk',
          en: 'I have lost interest in my appearance',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 3, label: { nl: 'Zeker', en: 'Definitely' } },
            {
              value: 2,
              label: {
                nl: 'Niet meer zoveel als ik zou moeten',
                en: "I don't take as much care as I should",
              },
            },
            {
              value: 1,
              label: {
                nl: 'Mogelijk wat minder',
                en: 'I may not take quite as much care',
              },
            },
            {
              value: 0,
              label: {
                nl: 'Evenveel interesse als voorheen',
                en: 'I take just as much care as ever',
              },
            },
          ],
        },
      },
      {
        input_id: 'HADS_12',
        label: {
          nl: 'Ik verheug me van tevoren al op dingen',
          en: 'I look forward with enjoyment to things',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: {
                nl: 'Net zoveel als vroeger',
                en: 'As much as I ever did',
              },
            },
            {
              value: 1,
              label: {
                nl: 'Een beetje minder als vroeger',
                en: 'Rather less than I used to',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Zeker minder dan vroeger',
                en: 'Definitely less than I used to',
              },
            },
            { value: 3, label: { nl: 'Bijna nooit', en: 'Hardly at all' } },
          ],
        },
      },
      {
        input_id: 'HADS_14',
        label: {
          nl: 'Ik kan van een goed boek genieten of een radio- of televisieprogramma.',
          en: 'I can enjoy a good book or radio or TV program',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Vaak', en: 'Often' } },
            { value: 1, label: { nl: 'Soms', en: 'Sometimes' } },
            { value: 2, label: { nl: 'Niet vaak', en: 'Not often' } },
            { value: 3, label: { nl: 'Heel zelden', en: 'Very seldom' } },
          ],
        },
      },
    ],
  },
]
