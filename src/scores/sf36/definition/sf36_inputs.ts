import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

// Shared answer option constants for repetitive patterns
const SHARED_ANSWER_OPTIONS = {
  // Pattern 1: Physical Activity Limitations (Q3-Q12)
  PHYSICAL_LIMITATION: [
    { value: 1, label: { en: 'Yes, limited a lot', pl: 'Tak, bardzo ogranicza' } },
    { value: 2, label: { en: 'Yes, limited a little', pl: 'Tak, nieco ogranicza' } },
    { value: 3, label: { en: 'No, not limited at all', pl: 'Nie, nie ogranicza' } },
  ],
  // Pattern 2: Work/Activity Limitations (Q13-Q19)
  YES_NO: [
    { value: 1, label: { en: 'Yes', pl: 'Tak' } },
    { value: 2, label: { en: 'No', pl: 'Nie' } },
  ],
  // Pattern 3: Time-Based Questions (Q23-Q31)
  TIME_FREQUENCY: [
    { value: 1, label: { en: 'All of the time', pl: 'Cały czas' } },
    { value: 2, label: { en: 'Most of the time', pl: 'Większość czasu' } },
    { value: 3, label: { en: 'A good bit of the time', pl: 'Czasami' } },
    { value: 4, label: { en: 'Some of the time', pl: 'Rzadko' } },
    { value: 5, label: { en: 'A little of the time', pl: 'Bardzo rzadko' } },
    { value: 6, label: { en: 'None of the time', pl: 'Nigdy' } },
  ],
  // Pattern 4: Health Statement True/False (Q33-Q36)
  TRUE_FALSE_SCALE: [
    { value: 1, label: { en: 'Definitely true', pl: 'Zdecydowanie prawdziwe' } },
    { value: 2, label: { en: 'Mostly true', pl: 'Przeważnie prawdziwe' } },
    { value: 3, label: { en: 'Don\'t know', pl: 'Nie wiem' } },
    { value: 4, label: { en: 'Mostly false', pl: 'Przeważnie fałszywe' } },
    { value: 5, label: { en: 'Definitely false', pl: 'Zdecydowanie fałszywe' } },
  ],
}

// Shared type schemas for repetitive patterns
const SHARED_TYPE_SCHEMAS = {
  PHYSICAL_LIMITATION: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  YES_NO: z.union([z.literal(1), z.literal(2)]).optional(),
  TIME_FREQUENCY: z.union([
    z.literal(1), z.literal(2), z.literal(3), 
    z.literal(4), z.literal(5), z.literal(6)
  ]).optional(),
  TRUE_FALSE_SCALE: z.union([
    z.literal(1), z.literal(2), z.literal(3), 
    z.literal(4), z.literal(5)
  ]).optional(),
}

export const SF36_INPUTS = {
  SF36_Q01: {
    label: {
      en: 'In general, would you say your health is:',
      pl: 'Ogólnie powiedziałbym/łabym, że moje zdrowie jest:',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Excellent', pl: 'Doskonałe' } },
        { value: 2, label: { en: 'Very good', pl: 'Bardzo dobre' } },
        { value: 3, label: { en: 'Good', pl: 'Dobre' } },
        { value: 4, label: { en: 'Fair', pl: 'Niezbyt dobre' } },
        { value: 5, label: { en: 'Poor', pl: 'Złe' } },
      ],
    },
  },
  SF36_Q02: {
    label: {
      en: 'Compared to one year ago, how would you rate your health in general now?',
      pl: 'W porównaniu do okresu sprzed rokiem, swoje obecne zdrowie oceniłbym/łabym:',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Much better now than one year ago', pl: 'Obecnie dużo lepsze niż przed rokiem' } },
        { value: 2, label: { en: 'Somewhat better now than one year ago', pl: 'Obecnie nieco lepsze niż przed rokiem' } },
        { value: 3, label: { en: 'About the same', pl: 'Prawie takie samo jak przed rokiem' } },
        { value: 4, label: { en: 'Somewhat worse now than one year ago', pl: 'Obecnie nieco gorsze obecnie niż przed rokiem' } },
        { value: 5, label: { en: 'Much worse now than one year ago', pl: 'Obecnie znacznie gorsze obecnie niż przed rokiem' } },
      ],
    },
  },
  SF36_Q03: {
    label: {
      en: 'The following items are about activities you might do during a typical day. Does your health now limit you in these activities? If so, how much? Vigorous activities, such as running, lifting heavy objects, participating in strenuous sports',
      pl: 'Poniższe pytania dotyczą czynności, które możesz wykonać w zwykłym dniu. Czy stan Twojego zdrowia obecnie ogranicza Cię w wykonywaniu tych czynności? Jeżeli tak, to w jakim stopniu? Czynności wymagające intensywnego wysiłku, np. bieganie, podnoszenie ciężkich przedmiotów, męczące zajęcia sportowe',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q04: {
    label: {
      en: 'Moderate activities, such as moving a table, pushing a vacuum cleaner, bowling, or playing golf',
      pl: 'Umiarkowane czynności, np. przestawianie stołu, odkurzanie, pływanie, lekkie prace w ogródku',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q05: {
    label: {
      en: 'Lifting or carrying groceries',
      pl: 'Podnoszenie lub noszenie zakupów',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q06: {
    label: {
      en: 'Climbing several flights of stairs',
      pl: 'Wchodzenie po schodach na kilka pięter',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q07: {
    label: {
      en: 'Climbing one flight of stairs',
      pl: 'Wchodzenie po schodach na jedno piętro',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q08: {
    label: {
      en: 'Bending, kneeling, or stooping',
      pl: 'Schylanie się lub klękanie',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q09: {
    label: {
      en: 'Walking more than a mile',
      pl: 'Przejście ponad 1 kilometra',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q10: {
    label: {
      en: 'Walking several blocks',
      pl: 'Przejście kilkuset metrów',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q11: {
    label: {
      en: 'Walking one block',
      pl: 'Przejście odległości 100m',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q12: {
    label: {
      en: 'Bathing or dressing yourself',
      pl: 'Mycie się i ubieranie',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q13: {
    label: {
      en: 'During the past 4 weeks, have you had any of the following problems with your work or other regular daily activities as a result of your physical health? Cut down the amount of time you spent on work or other activities',
      pl: 'Czy w ciągu ostatnich 4 tygodni z powodu Twoich kłopotów ze zdrowiem fizycznym wystąpił któryś z poniższych problemów w pracy lub codziennych zajęciach, a jeśli tak to jak często? Skrócenie ilości czasu spędzanego na pracy lub innych czynnościach',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q14: {
    label: {
      en: 'Accomplished less than you would like',
      pl: 'Osiąganie mniej niżby się chciało',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q15: {
    label: {
      en: 'Were limited in the kind of work or other activities',
      pl: 'Ograniczenie rodzaju wykonywanej pracy lub innych czynności',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q16: {
    label: {
      en: 'Had difficulty performing the work or other activities (for example, it took extra effort)',
      pl: 'Miałeś trudności w wykonywaniu pracy lub innych czynności (np. wymagało to zwiększonego wysiłku)',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q17: {
    label: {
      en: 'During the past 4 weeks, have you had any of the following problems with your work or other regular daily activities as a result of any emotional problems (such as feeling depressed or anxious)? Cut down the amount of time you spent on work or other activities',
      pl: 'Czy w ciągu ostatnich 4 tygodni z powodu problemów emocjonalnych (np. depresji, lęku) wystąpiły któreś z poniższych problemów w Twojej pracy lub codziennych czynnościach a jeśli tak to jak często? Ograniczenie ilości czasu spędzanego na pracy lub innych czynnościach',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q18: {
    label: {
      en: 'Accomplished less than you would like',
      pl: 'Osiąganie mniej niżby się chciało',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q19: {
    label: {
      en: 'Didn\'t do work or other activities as carefully as usual',
      pl: 'Wykonywałeś/łaś pracę lub inne czynności mniej starannie niż zwykle',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q20: {
    label: {
      en: 'During the past 4 weeks, to what extent has your physical health or emotional problems interfered with your normal social activities with family, friends, neighbors, or groups?',
      pl: 'W jakim stopniu w ciągu ostatnich 4 tygodni Twoje zdrowie fizyczne lub problemy emocjonalne wpływały na normalną aktywność społeczną w kręgu rodziny, przyjaciół, sąsiadów lub innych grup?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Not at all', pl: 'Wcale' } },
        { value: 2, label: { en: 'Slightly', pl: 'Nieznacznie' } },
        { value: 3, label: { en: 'Moderately', pl: 'Średnio' } },
        { value: 4, label: { en: 'Quite a bit', pl: 'W znacznej mierze' } },
        { value: 5, label: { en: 'Extremely', pl: 'Bardzo' } },
      ],
    },
  },
  SF36_Q21: {
    label: {
      en: 'How much bodily pain have you had during the past 4 weeks?',
      pl: 'Jak bardzo odczuwałeś w ciągu ostatnich 4 tygodni ból fizyczny?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'None', pl: 'Żadnego' } },
        { value: 2, label: { en: 'Very mild', pl: 'Bardzo łagodny' } },
        { value: 3, label: { en: 'Mild', pl: 'Łagodny' } },
        { value: 4, label: { en: 'Moderate', pl: 'Średni' } },
        { value: 5, label: { en: 'Severe', pl: 'Silny' } },
        { value: 6, label: { en: 'Very severe', pl: 'Bardzo silny' } },
      ],
    },
  },
  SF36_Q22: {
    label: {
      en: 'During the past 4 weeks, how much did pain interfere with your normal work (including both work outside the home and housework)?',
      pl: 'Jak bardzo w ciągu ostatnich 4 tygodni ból przeszkadzał Ci w normalnej pracy (wliczając pracę poza domem i w domu)?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Not at all', pl: 'Wcale' } },
        { value: 2, label: { en: 'A little bit', pl: 'Nieco' } },
        { value: 3, label: { en: 'Moderately', pl: 'Średnio' } },
        { value: 4, label: { en: 'Quite a bit', pl: 'W znacznej mierze' } },
        { value: 5, label: { en: 'Extremely', pl: 'Bardzo' } },
      ],
    },
  },
  SF36_Q23: {
    label: {
      en: 'These questions are about how you feel and how things have been with you during the past 4 weeks. For each question, please give the one answer that comes closest to the way you have been feeling. How much of the time during the past 4 weeks... Did you feel full of pep?',
      pl: 'Poniższe pytania dotyczą tego jak się czułeś i jak Ci się wiodło w ciągu ostatnich 4 tygodni. Proszę podać dla każdego pytania jedną odpowiedź. Przez jaki czas w ciągu ostatnich 4 tygodni...... Czułeś/aś i się pełny/a życia',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q24: {
    label: {
      en: 'Have you been a very nervous person?',
      pl: 'Byłeś/aś bardzo nerwowy/a',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q25: {
    label: {
      en: 'Have you felt so down in the dumps that nothing could cheer you up?',
      pl: 'Czułeś/łaś się taki/a zdołowany/a, że nic nie było w stanie rozweselic',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q26: {
    label: {
      en: 'Have you felt calm and peaceful?',
      pl: 'Czułeś/łaś się spokojny/a i łagodny/a',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q27: {
    label: {
      en: 'Did you have a lot of energy?',
      pl: 'Miałeś/łaś mnóstwo energii',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q28: {
    label: {
      en: 'Have you felt downhearted and blue?',
      pl: 'Czułeś/aś się zniechęcony/a i przygnębiony/a',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q29: {
    label: {
      en: 'Did you feel worn out?',
      pl: 'Czułeś/aś się wyczerpany/a',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q30: {
    label: {
      en: 'Have you been a happy person?',
      pl: 'Byłeś/aś szczęśliwy/a',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q31: {
    label: {
      en: 'Did you feel tired?',
      pl: 'Czułeś/aś się zmęczony/a',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q32: {
    label: {
      en: 'During the past 4 weeks, how much of the time has your physical health or emotional problems interfered with your social activities (like visiting with friends, relatives, etc.)?',
      pl: 'Przez jaki okres czasu w ciągu ostatnich 4 tygodni Twoje zdrowie fizyczne lub problemy emocjonalne przeszkadzały Ci w aktywności społecznej (jak np. wizyty przyjaciół, krewnych itp.)?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'All of the time', pl: 'Cały czas' } },
        { value: 2, label: { en: 'Most of the time', pl: 'Większość czasu' } },
        { value: 3, label: { en: 'Some of the time', pl: 'Czasami' } },
        { value: 4, label: { en: 'A little of the time', pl: 'Rzadko' } },
        { value: 5, label: { en: 'None of the time', pl: 'Nigdy' } },
      ],
    },
  },
  SF36_Q33: {
    label: {
      en: 'How TRUE or FALSE is each of the following statements for you. I seem to get sick a little easier than other people',
      pl: 'Jak PRAWDZIWE lub FAŁSZYWE jest dla Ciebie każde z poniższych stwierdzeń? Wydaję się ulegać chorobom łatwiej niż inni ludzie',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
  SF36_Q34: {
    label: {
      en: 'I am as healthy as anybody I know',
      pl: 'Jestem tak samo zdrowy jak inne znane mi osoby',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
  SF36_Q35: {
    label: {
      en: 'I expect my health to get worse',
      pl: 'Oczekuję pogorszenia mojego zdrowia',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
  SF36_Q36: {
    label: {
      en: 'My health is excellent',
      pl: 'Moje zdrowie jest doskonałe',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
} satisfies ScoreInputSchemaType
