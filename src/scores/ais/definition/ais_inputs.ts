import { z } from 'zod'
import { ScoreInputSchemaType, EnumNumberInputType } from '../../../types'

const AIS_INPUT_TYPE = {
  type: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
  uiOptions: {
    options: [
      {
        value: 1,
        label: { 
          en: 'Definitely agree', 
          pl: 'Zdecydowanie zgadzam się' 
        },
      },
      {
        value: 2,
        label: { 
          en: 'Agree', 
          pl: 'Zgadzam się' 
        },
      },
      {
        value: 3,
        label: { 
          en: 'Do not know', 
          pl: 'Nie wiem' 
        },
      },
      {
        value: 4,
        label: { 
          en: 'Do not agree', 
          pl: 'Nie zgadzam się' 
        },
      },
      {
        value: 5,
        label: { 
          en: 'Definitely disagree', 
          pl: 'Zdecydowanie nie zgadzam się' 
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const AIS_INPUTS = {
  AIS_Q01: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'I have problems with adjustment to the limitations imposed by the illness',
      pl: 'Mam kłopoty z przystosowaniem się do ograniczeń narzuconych przez chorobę',
    },
  },
  AIS_Q02: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'Due to my state of health I am not able to do what I like best',
      pl: 'Z powodu swojego stanu zdrowia nie jestem w stanie robić tego, co najbardziej lubię',
    },
  },
  AIS_Q03: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'The disease sometimes makes me feel unnecessary',
      pl: 'Choroba sprawia, że czasem czuję się niepotrzebny',
    },
  },
  AIS_Q04: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'Because of health problems I am more dependent on others than I wish to be',
      pl: 'Problemy ze zdrowiem sprawiają, że jestem bardziej zależny od innych niż tego chcę',
    },
  },
  AIS_Q05: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'Due to the disease I am a burden on my family and friends',
      pl: 'Choroba sprawia, że jestem ciężarem dla swojej rodziny i przyjaciół',
    },
  },
  AIS_Q06: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'Due to my health status I do not feel a fully valued human being',
      pl: 'Mój stan zdrowia sprawia, że nie czuję się pełnowartościowym człowiekiem',
    },
  },
  AIS_Q07: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'I will never be self-sufficient to the degree I would like to be',
      pl: 'Nigdy nie będę samowystarczalny w takim stopniu, w jakim chciałbym być',
    },
  },
  AIS_Q08: {
    ...AIS_INPUT_TYPE,
    label: {
      en: 'I think that people who stay with me are often embarrassed because of my illness',
      pl: 'Myślę, że ludzie przebywający ze mną są często zakłopotani z powodu mojej choroby',
    },
  },
} satisfies ScoreInputSchemaType
