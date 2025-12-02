import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const FSFI_INPUTS = {
  FSFI_Q01: {
    label: {
      en: 'Over the past 4 weeks, how often did you feel sexual desire or interest?',
      pl: 'Jak często odczuwała Pani pożądanie seksualne i zainteresowanie życiem seksualnym?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Most times (more than half the time)', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q02: {
    label: {
      en: 'Over the past 4 weeks, how would you rate your level (degree) of sexual desire or interest?',
      pl: 'Jak oceniłaby Pani natężenie (poziom) swojego pożądania seksualnego i zainteresowania życiem seksualnym?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'Very high', 
            pl: 'Bardzo wysokie' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'High', 
            pl: 'Wysokie' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Moderate', 
            pl: 'Umiarkowane' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Low', 
            pl: 'Niskie' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Very low or none at all', 
            pl: 'Bardzo niskie lub nieobecne' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q03: {
    label: {
      en: 'Over the past 4 weeks, how often did you feel sexually aroused ("turned on") during sexual activity or intercourse?',
      pl: 'Jak często czuła się Pani pobudzona seksualnie (podniecona) podczas aktywności seksualnej lub stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Most times (more than half the time)', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q04: {
    label: {
      en: 'Over the past 4 weeks, how would you rate your level of sexual arousal ("turn on") during sexual activity or intercourse?',
      pl: 'Jak oceniłaby Pani natężenie (poziom) swojego pobudzenia seksualnego podczas aktywności seksualnej lub stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Very high', 
            pl: 'Bardzo wysokie' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'High', 
            pl: 'Wysokie' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Moderate', 
            pl: 'Umiarkowane' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Low', 
            pl: 'Niskie' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Very low or none at all', 
            pl: 'Bardzo niskie lub nieobecne' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q05: {
    label: {
      en: 'Over the past 4 weeks, how confident were you about becoming sexually aroused during sexual activity or intercourse?',
      pl: 'W jakim stopniu była Pani pewna, że zawsze będzie Pani w stanie pobudzić się seksualnie (podniecić) podczas aktywności seksualnej lub stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Very high confidence', 
            pl: 'W bardzo dużym stopniu' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'High confidence', 
            pl: 'W dużym stopniu' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Moderate confidence', 
            pl: 'W umiarkowanym stopniu' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Low confidence', 
            pl: 'W niskim stopniu' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Very low or no confidence', 
            pl: 'W bardzo niskim stopniu lub wcale' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q06: {
    label: {
      en: 'Over the past 4 weeks, how often have you been satisfied with your arousal (excitement) during sexual activity or intercourse?',
      pl: 'Jak często była Pani zadowolona ze swojego pobudzenia seksualnego (podniecenia) podczas aktywności seksualnej lub stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Most times (more than half the time)', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q07: {
    label: {
      en: 'Over the past 4 weeks, how often did you become lubricated ("wet") during sexual activity or intercourse?',
      pl: 'Jak często odczuwała Pani wilgotność w pochwie podczas aktywności seksualnej lub stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Most times (more than half the time)', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q08: {
    label: {
      en: 'Over the past 4 weeks, how difficult was it to become lubricated ("wet") during sexual activity or intercourse?',
      pl: 'Jak trudno było Pani uzyskać wilgotność w pochwie podczas aktywności seksualnej lub stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Extremely difficult or impossible', 
            pl: 'Niezwykle trudno' 
          },
          value: 1,
        },
        {
          label: { 
            en: 'Very difficult', 
            pl: 'Bardzo trudno' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Difficult', 
            pl: 'Trudno' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Slightly difficult', 
            pl: 'Trochę trudno' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Not difficult', 
            pl: 'Nietrudno' 
          },
          value: 5,
        },
      ],
    },
  },
  FSFI_Q09: {
    label: {
      en: 'Over the past 4 weeks, how often did you maintain your lubrication ("wetness") until completion of sexual activity or intercourse?',
      pl: 'Jak często była Pani w stanie utrzymać wilgotność w pochwie podczas aktywności seksualnej lub stosunku płciowego aż do jego zakończenia?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Most times (more than half the time)', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q10: {
    label: {
      en: 'Over the past 4 weeks, how difficult was it to maintain your lubrication ("wetness") until completion of sexual activity or intercourse?',
      pl: 'Jak trudno było Pani utrzymać wilgotność w pochwie podczas aktywności seksualnej lub stosunku płciowego aż do jego zakończenia?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Extremely difficult or impossible', 
            pl: 'Niezwykle trudno' 
          },
          value: 1,
        },
        {
          label: { 
            en: 'Very difficult', 
            pl: 'Bardzo trudno' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Difficult', 
            pl: 'Trudno' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Slightly difficult', 
            pl: 'Trochę trudno' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Not difficult', 
            pl: 'Nietrudno' 
          },
          value: 5,
        },
      ],
    },
  },
  FSFI_Q11: {
    label: {
      en: 'Over the past 4 weeks, when you had sexual stimulation or intercourse, how often did you reach orgasm (climax)?',
      pl: 'Jak często w czasie stymulacji seksualnej lub podczas stosunku płciowego przeżywała Pani orgazm?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Most times', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q12: {
    label: {
      en: 'Over the past 4 weeks, when you had sexual stimulation or intercourse, how difficult was it for you to reach orgasm (climax)?',
      pl: 'Jak trudno było Pani osiągnąć orgazm w czasie stymulacji seksualnej lub podczas stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Extremely difficult or impossible', 
            pl: 'Niezwykle trudno' 
          },
          value: 1,
        },
        {
          label: { 
            en: 'Very difficult', 
            pl: 'Bardzo trudno' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Difficult', 
            pl: 'Trudno' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Slightly difficult', 
            pl: 'Trochę trudno' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Not difficult', 
            pl: 'Nietrudno' 
          },
          value: 5,
        },
      ],
    },
  },
  FSFI_Q13: {
    label: {
      en: 'Over the past 4 weeks, how satisfied were you with your ability to reach orgasm (climax) during sexual activity or intercourse?',
      pl: 'Jak określiłaby Pani poziom swojej satysfakcji z dotychczasowej możliwości osiągania orgazmu w czasie aktywności seksualnej lub podczas stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Very satisfied', 
            pl: 'Bardzo zadowolona' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Moderately satisfied', 
            pl: 'Raczej zadowolona' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'About equally satisfied and dissatisfied', 
            pl: 'Zarówno zadowolona jak i niezadowolona (trudno powiedzieć)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Moderately dissatisfied', 
            pl: 'Raczej niezadowolona' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Very dissatisfied', 
            pl: 'Bardzo niezadowolona' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q14: {
    label: {
      en: 'Over the past 4 weeks, how satisfied have you been with the amount of emotional closeness during sexual activity between you and your partner?',
      pl: 'Jak określiłaby Pani poziom zadowolenia ze stopnia bliskości emocjonalnej pomiędzy Panią i partnerem w czasie aktywności seksualnej?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'No sexual activity', 
            pl: 'Nie odbywałam stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Very satisfied', 
            pl: 'Bardzo zadowolona' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Moderately satisfied', 
            pl: 'Raczej zadowolona' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'About equally satisfied and dissatisfied', 
            pl: 'Zarówno zadowolona jak i niezadowolona (trudno powiedzieć)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Moderately dissatisfied', 
            pl: 'Raczej niezadowolona' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Very dissatisfied', 
            pl: 'Bardzo niezadowolona' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q15: {
    label: {
      en: 'Over the past 4 weeks, how satisfied have you been with your sexual relationship with your partner?',
      pl: 'Jak określiłaby Pani stopień zadowolenia ze związku seksualnego ze swoim partnerem?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'Very satisfied', 
            pl: 'Bardzo zadowolona' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Moderately satisfied', 
            pl: 'Raczej zadowolona' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'About equally satisfied and dissatisfied', 
            pl: 'Zarówno zadowolona jak i niezadowolona (trudno powiedzieć)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Moderately dissatisfied', 
            pl: 'Raczej niezadowolona' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Very dissatisfied', 
            pl: 'Bardzo niezadowolona' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q16: {
    label: {
      en: 'Over the past 4 weeks, how satisfied have you been with your overall sexual life?',
      pl: 'Jak określiłaby Pani poziom swojej satysfakcji z dotychczasowego życia seksualnego?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'Very satisfied', 
            pl: 'Bardzo zadowolona' 
          },
          value: 5,
        },
        {
          label: { 
            en: 'Moderately satisfied', 
            pl: 'Raczej zadowolona' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'About equally satisfied and dissatisfied', 
            pl: 'Zarówno zadowolona jak i niezadowolona (trudno powiedzieć)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Moderately dissatisfied', 
            pl: 'Raczej niezadowolona' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Very dissatisfied', 
            pl: 'Bardzo niezadowolona' 
          },
          value: 1,
        },
      ],
    },
  },
  FSFI_Q17: {
    label: {
      en: 'Over the past 4 weeks, how often did you experience discomfort or pain during vaginal penetration?',
      pl: 'Jak często odczuwała Pani dyskomfort lub ból podczas penetracji w czasie stosunku płciowego?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'Did not attempt intercourse', 
            pl: 'Nie próbowałam odbywać stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 1,
        },
        {
          label: { 
            en: 'Most times (more than half the time)', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 5,
        },
      ],
    },
  },
  FSFI_Q18: {
    label: {
      en: 'Over the past 4 weeks, how often did you experience discomfort or pain following vaginal penetration?',
      pl: 'Jak często odczuwała Pani dyskomfort lub ból podczas penetracji i całego stosunku płciowego aż do jego zakończenia?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'Did not attempt intercourse', 
            pl: 'Nie próbowałam odbywać stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Almost always or always', 
            pl: 'Prawie zawsze lub zawsze' 
          },
          value: 1,
        },
        {
          label: { 
            en: 'Most times (more than half the time)', 
            pl: 'W większości przypadków (znacznie częściej niż w połowie przypadków)' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Sometimes (about half the time)', 
            pl: 'Czasem (mniej więcej w połowie przypadków)' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'A few times (less than half the time)', 
            pl: 'Kilka razy (znacznie rzadziej niż w połowie przypadków)' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Almost never or never', 
            pl: 'Prawie nigdy lub nigdy' 
          },
          value: 5,
        },
      ],
    },
  },
  FSFI_Q19: {
    label: {
      en: 'Over the past 4 weeks, how would you rate your level (degree) of discomfort or pain during or following vaginal penetration?',
      pl: 'Jak określiłaby Pani stopień dyskomfortu lub bólu podczas penetracji i całego stosunku płciowego aż do jego zakończenia?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
    uiOptions: {
      options: [
        {
          label: { 
            en: 'Did not attempt intercourse', 
            pl: 'Nie próbowałam odbywać stosunków płciowych' 
          },
          value: 0,
        },
        {
          label: { 
            en: 'Very high', 
            pl: 'Bardzo wysoki' 
          },
          value: 1,
        },
        {
          label: { 
            en: 'High', 
            pl: 'Wysoki' 
          },
          value: 2,
        },
        {
          label: { 
            en: 'Moderate', 
            pl: 'Umiarkowany' 
          },
          value: 3,
        },
        {
          label: { 
            en: 'Low', 
            pl: 'Niski' 
          },
          value: 4,
        },
        {
          label: { 
            en: 'Very low or none at all', 
            pl: 'Bardzo niski lub wcale' 
          },
          value: 5,
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
