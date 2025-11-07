import { z } from 'zod'
import type { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'

const type = {
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
} satisfies EnumNumberInputType

export const HADS_INPUTS = {
  HADS_01: {
    label: {
      nl: 'Ik voel me de laatste tijd gespannen',
      en: "I feel tense or 'wound up'",
      pl: 'Czuję się napięta/y',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 3, label: { nl: 'Meestal', en: 'Most of the time', pl: 'prawie stale' } },
        { value: 2, label: { nl: 'Vaak', en: 'A lot of the time', pl: 'często' } },
        {
          value: 1,
          label: {
            nl: 'Af en toe, soms',
            en: 'From time to time, occasionally',
            pl: 'od czasu do czasu',
          },
        },
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', pl: 'nigdy' } },
      ],
    },
  },
  HADS_03: {
    label: {
      nl: 'Ik krijg de laatste tijd het angstige gevoel alsof er elk moment iets vreselijks zal gebeuren',
      en: 'I get a sort of frightened feeling as if something awful is about to happen',
      pl: 'Obawiam się, że wydarzy się coś okropnego',
    },
    ...type,
    uiOptions: {
      options: [
        {
          value: 3,
          label: {
            nl: 'Heel zeker en vrij erg',
            en: 'Very definitely and quite badly',
            pl: 'stanowczo tak i to bardzo silnie',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Ja, maar niet zo erg',
            en: 'Yes, but not too badly ',
            pl: 'tak, ale niezbyt silnie',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Een beetje, maar ik maak me er geen zorgen over',
            en: "A little, but it doesn't worry me",
            pl: 'niewiele i nie martwię się tym',
          },
        },
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', pl: 'w ogóle nie' } },
      ],
    },
  },
  HADS_05: {
    label: {
      nl: 'Ik maak me de laatste tijd ongerust.',
      en: 'Worrying thoughts go through my mind',
      pl: 'Martwię się',
    },
    ...type,
    uiOptions: {
      options: [
        {
          value: 3,
          label: { nl: 'Heel erg vaak', en: 'A great deal of the time', pl: 'prawie cały czas' },
        },
        { value: 2, label: { nl: 'Vaak', en: 'A lot of the time', pl: 'często' } },
        {
          value: 1,
          label: {
            nl: 'Niet zo vaak',
            en: 'From time to time, but not too often ',
            pl: 'od czasu do czasu',
          },
        },
        { value: 0, label: { nl: 'Heel soms', en: 'Only occasionally', pl: 'rzadko' } },
      ],
    },
  },
  HADS_07: {
    label: {
      nl: 'Ik kan de laatste tijd rustig zitten en me ontspannen',
      en: 'I can sit at ease and feel relaxed',
      pl: 'Jestem w stanie odprężyć się',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Zeker', en: 'Definitely', pl: 'zdecydowanie tak' } },
        { value: 1, label: { nl: 'Meestal', en: 'Usually', pl: 'zazwyczaj tak' } },
        { value: 2, label: { nl: 'Niet vaak', en: 'Not Often', pl: 'niezbyt często' } },
        { value: 3, label: { nl: 'Helemaal niet', en: 'Not at all', pl: 'w ogóle nie' } },
      ],
    },
  },
  HADS_09: {
    label: {
      nl: 'Ik krijg de laatste tijd een soort benauwd, gespannen gevoel in mijn maag.',
      en: "I get a sort of frightened feeling like 'butterflies' in the stomach",
      pl: 'Bywa, że przeżywam lęk do tego stopnia, że czuję drżenie w żołądku',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', pl: 'nigdy' } },
        { value: 1, label: { nl: 'Soms', en: 'Occasionally', pl: 'rzadko' } },
        { value: 2, label: { nl: 'Vrij vaak', en: 'Quite often', pl: 'dość często' } },
        { value: 3, label: { nl: 'Heel vaak', en: 'Very often', pl: 'bardzo często' } },
      ],
    },
  },
  HADS_11: {
    label: {
      nl: 'Ik voel me de laatste tijd rusteloos',
      en: 'I feel restless as I have to be on the move',
      pl: 'Czuję się, jakbym nie mógł/a znaleźć sobie miejsca',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 3, label: { nl: 'Heel erg', en: 'Very much indeed', pl: 'rzeczywiście tak się czuję' } },
        { value: 2, label: { nl: 'Tamelijk veel', en: 'Quite a lot', pl: 'w dużej mierze tak' } },
        { value: 1, label: { nl: 'Niet erg veel', en: 'Not very much', pl: 'w niewielkim stopniu' } },
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', pl: 'w ogóle nie' } },
      ],
    },
  },
  HADS_13: {
    label: {
      nl: 'Ik krijg de laatste tijd plotseling gevoelens van angst of paniek',
      en: 'I get sudden feelings of panic',
      pl: 'Miewam napady panicznego lęku',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 3, label: { nl: 'Zeer vaak', en: 'Very often indeed', pl: 'bardzo często' } },
        { value: 2, label: { nl: 'Tamelijk veel', en: 'Quite often', pl: 'dość często' } },
        { value: 1, label: { nl: 'Niet erg vaak', en: 'Not very often', pl: 'niezbyt często' } },
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', pl: 'wcale' } },
      ],
    },
  },
  HADS_02: {
    label: {
      nl: 'Ik geniet nog steeds van de dingen waar ik vroeger van genoot',
      en: 'I still enjoy the things I used to enjoy',
      pl: 'Rzeczy, które sprawiały mi przyjemność, nadal mnie cieszą',
    },
    ...type,
    uiOptions: {
      options: [
        {
          value: 0,
          label: { nl: 'Zeker zo veel', en: 'Definitely as much', pl: 'zdecydowanie tak samo' },
        },
        { value: 1, label: { nl: 'Wat minder', en: 'Not quite so much', pl: 'nieco mniej' } },
        {
          value: 2,
          label: { nl: 'Duidelijk minder', en: 'Only a little ', pl: 'niewiele' },
        },
        { value: 3, label: { nl: 'Nauwelijks nog', en: 'Hardly at all', pl: 'zdecydowanie nie' } },
      ],
    },
  },
  HADS_04: {
    label: {
      nl: 'Ik kan lachen en de dingen van de vrolijke kant zien.',
      en: 'I can laugh and see the funny side of things',
      pl: 'Jestem w stanie śmiać się i dostrzegać zabawną stronę rzeczy',
    },
    ...type,
    uiOptions: {
      options: [
        {
          value: 0,
          label: {
            nl: 'Net zoveel als vroeger',
            en: 'As much as I always could',
            pl: 'tak jak zawsze',
          },
        },
        {
          value: 1,
          label: { nl: 'Nu wat minder', en: 'Not quite so much now ', pl: 'nieco mniej' },
        },
        {
          value: 2,
          label: {
            nl: 'Nu duidelijk minder',
            en: 'Definitely not so much now',
            pl: 'z pewnością mniej',
          },
        },
        { value: 3, label: { nl: 'Helemaal niet meer', en: 'Not at all', pl: 'w ogóle nie' } },
      ],
    },
  },
  HADS_06: {
    label: {
      nl: 'Ik voel me de laatste tijd opgewekt',
      en: 'I feel cheerful',
      pl: 'Jestem pogodna/y',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 3, label: { nl: 'Helmaal niet', en: 'Not at all', pl: 'nigdy' } },
        { value: 2, label: { nl: 'Niet vaak', en: 'Not often', pl: 'rzadko' } },
        { value: 1, label: { nl: 'Soms', en: 'Sometimes', pl: 'czasami' } },
        { value: 0, label: { nl: 'Meestal', en: 'Most of the time', pl: 'prawie cały czas' } },
      ],
    },
  },
  HADS_08: {
    label: {
      nl: 'Ik voel me de laatste tijd alsof alles moeizamer gaat',
      en: 'I feel as if I am slowed down',
      pl: 'Czuję się spowolniała/y',
    },
    ...type,
    uiOptions: {
      options: [
        {
          value: 3,
          label: { nl: 'Bijna altijd', en: 'Nearly all the time', pl: 'prawie stale' },
        },
        { value: 2, label: { nl: 'Heel vaak', en: 'Very often', pl: 'bardzo często' } },
        { value: 1, label: { nl: 'Soms', en: 'Sometimes', pl: 'czasami' } },
        { value: 0, label: { nl: 'Helemaal niet', en: 'Not at all', pl: 'wcale nie' } },
      ],
    },
  },
  HADS_10: {
    label: {
      nl: 'Ik heb de laatste tijd geen interesse meer in mijn uiterlijk',
      en: 'I have lost interest in my appearance',
      pl: 'Straciłam/em zainteresowanie swoim wyglądem',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 3, label: { nl: 'Zeker', en: 'Definitely', pl: 'zdecydowanie tak' } },
        {
          value: 2,
          label: {
            nl: 'Niet meer zoveel als ik zou moeten',
            en: "I don't take as much care as I should",
            pl: 'nie dbam tak, jak powinnam/powinienem',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Mogelijk wat minder',
            en: 'I may not take quite as much care',
            pl: 'dbam nieco mniej',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Evenveel interesse als voorheen',
            en: 'I take just as much care as ever',
            pl: 'dbam w tym samym stopniu co zawsze',
          },
        },
      ],
    },
  },
  HADS_12: {
    label: {
      nl: 'Ik verheug me van tevoren al op dingen',
      en: 'I look forward with enjoyment to things',
      pl: 'Spoglądam w przyszłość z radością',
    },
    ...type,
    uiOptions: {
      options: [
        {
          value: 0,
          label: {
            nl: 'Net zoveel als vroeger',
            en: 'As much as I ever did',
            pl: 'w takim samym stopniu jak zawsze',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Een beetje minder als vroeger',
            en: 'Rather less than I used to',
            pl: 'raczej mniej niż zwykle',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Zeker minder dan vroeger',
            en: 'Definitely less than I used to',
            pl: 'z pewnością mniej',
          },
        },
        { value: 3, label: { nl: 'Bijna nooit', en: 'Hardly at all', pl: 'prawie zupełnie nie' } },
      ],
    },
  },
  HADS_14: {
    label: {
      nl: 'Ik kan van een goed boek genieten of een radio- of televisieprogramma.',
      en: 'I can enjoy a good book or radio or TV program',
      pl: 'Dobra książka lub program telewizyjny sprawia mi przyjemność',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Vaak', en: 'Often', pl: 'często' } },
        { value: 1, label: { nl: 'Soms', en: 'Sometimes', pl: 'czasami' } },
        { value: 2, label: { nl: 'Niet vaak', en: 'Not often', pl: 'rzadko' } },
        { value: 3, label: { nl: 'Heel zelden', en: 'Very seldom', pl: 'bardzo rzadko' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
