import { z } from 'zod'
import { EnumNumberInputType, ScoreInputSchemaType } from '../../../../types'

export const DONT_KNOW_ANSWER = 999

const type = {
  type: z.union([z.literal(1), z.literal(0), z.literal(DONT_KNOW_ANSWER)]),
  uiOptions: {
    options: [
      {
        value: 1,
        label: { nl: 'Waar', en: 'True' },
      },
      {
        value: 0,
        label: {
          nl: 'Niet waar',
          en: 'False',
        },
      },
      {
        value: DONT_KNOW_ANSWER,
        label: {
          nl: 'Ik weet het niet',
          en: "I don't know",
        },
      },
    ],
  },
} satisfies EnumNumberInputType

export const CADE_Q_INPUTS = {
  Q01: {
    label: {
      en: 'Coronary Artery Disease is a disease of the arteries in the heart which only happens in older people who have high cholesterol or smoke.',
    },
    ...type,
  },
  Q02: {
    label: {
      en: 'Examples of risk factors for heart disease that can be changed are: blood pressure, cholesterol, smoking and second hand smoking, waist size, and reaction to stress.',
    },
    ...type,
  },
  Q03: {
    label: {
      en: '“Angina” is chest pain or discomfort, at rest or during physical activity, which can be felt in the arm, back and/or neck.',
    },
    ...type,
  },
  Q04: {
    label: {
      en: 'The benefits of resistance training (lifting weights or using elastic bands) include: increasing strength, improving the ability to carry out day to day activities, improving blood sugar levels and increasing muscle mass.',
    },
    ...type,
  },
  Q05: {
    label: {
      en: 'Eating more meat and dairy products is a good way to add more fibre to one’s diet.',
    },
    ...type,
  },
  Q06: {
    label: {
      en: 'Anti-platelet medications such as aspirin (ASA) are important because they lower the “stickiness” of platelets in the bloods that blood flows more easily through coronary arteries and past coronary stents.',
    },
    ...type,
  },
  Q07: {
    label: {
      en: 'The only effective strategy to manage stress is to avoid people who cause unpleasant feelings',
    },
    ...type,
  },
  Q08: {
    label: {
      en: 'An exercise warm-up slowly increases heart rate and can lower the risk of developing angina.',
    },
    ...type,
  },
  Q09: {
    label: {
      en: 'Prepared, processed foods usually have high sodium content.',
    },
    ...type,
  },
  Q10: {
    label: {
      en: 'Depression is common after a heart attack. Depression can lower one’s energy level for rehab and increases the risk of another heart attack.',
    },
    ...type,
  },
  Q11: {
    label: {
      en: 'The “statin” medications limit how much cholesterol the body absorbs from food. Statin medications include atorvastatin (LipitorTM), rosuvastatin (Crestor TM), or simvastatin (Zocor TM).',
    },
    ...type,
  },
  Q12: {
    label: {
      en: 'To control blood pressure, one should lower the amount of sodium in the diet to less than 2000 mg per day, exercise, take blood pressure medication regularly (if prescribed), and learn relaxation techniques.',
    },
    ...type,
  },
  Q13: {
    label: {
      en: 'If someone gets chest discomfort during a walking exercise session, he or she should speed up to see if the discomfort goes away.',
    },
    ...type,
  },
  Q14: {
    label: {
      en: 'Trans fats are partially hydrogenated vegetable oils (e.g. vegetable shortening) and are unhealthy.',
    },
    ...type,
  },
  Q15: {
    label: {
      en: 'Sleep apnea that is not treated increases the risk for another heart attack, but it does not increase risk of death.',
    },
    ...type,
  },
  Q16: {
    label: {
      en: 'To control cholesterol, one should become a vegetarian and avoid eggs.',
    },
    ...type,
  },
  Q17: {
    label: {
      en: 'Someone knows if he or she is exercising at the right level when the heart rate is in the target zone, the exertion level is no higher than “somewhat hard”, and he or she can exercise and talk at the same time.',
    },
    ...type,
  },
  Q18: {
    label: {
      en: 'Diabetes cannot be prevented with exercise and healthy eating',
    },
    ...type,
  },
  Q19: {
    label: {
      en: 'Stress is a large risk for heart attack and is as important as high blood pressure and diabetes.',
    },
    ...type,
  },
  Q20: {
    label: {
      en: 'A diet that can help lower blood pressure is rich in: vegetables and fruits, whole grains, low fat dairy, nuts and seeds',
    },
    ...type,
  },
}
