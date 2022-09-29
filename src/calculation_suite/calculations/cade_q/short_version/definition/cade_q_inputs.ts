import type { InputType } from '../../../../../types/calculations.types'
import { NumberInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'

export const DONT_KNOW_ANSWER = 999

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
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
}

export const CADE_Q_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'Coronary Artery Disease is a disease of the arteries in the heart which only happens in older people who have high cholesterol or smoke.',
    },
    input_type,
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'Examples of risk factors for heart disease that can be changed are: blood pressure, cholesterol, smoking and second hand smoking, waist size, and reaction to stress.',
    },
    input_type,
  },
  {
    input_id: 'Q03',
    input_label: {
      en: '“Angina” is chest pain or discomfort, at rest or during physical activity, which can be felt in the arm, back and/or neck.',
    },
    input_type,
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'The benefits of resistance training (lifting weights or using elastic bands) include: increasing strength, improving the ability to carry out day to day activities, improving blood sugar levels and increasing muscle mass.',
    },
    input_type,
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'Eating more meat and dairy products is a good way to add more fibre to one’s diet.',
    },
    input_type,
  },
  {
    input_id: 'Q06',
    input_label: {
      en: 'Anti-platelet medications such as aspirin (ASA) are important because they lower the “stickiness” of platelets in the bloods that blood flows more easily through coronary arteries and past coronary stents.',
    },
    input_type,
  },
  {
    input_id: 'Q07',
    input_label: {
      en: 'The only effective strategy to manage stress is to avoid people who cause unpleasant feelings',
    },
    input_type,
  },
  {
    input_id: 'Q08',
    input_label: {
      en: 'An exercise warm-up slowly increases heart rate and can lower the risk of developing angina.',
    },
    input_type,
  },
  {
    input_id: 'Q09',
    input_label: {
      en: 'Prepared, processed foods usually have high sodium content.',
    },
    input_type,
  },
  {
    input_id: 'Q10',
    input_label: {
      en: 'Depression is common after a heart attack. Depression can lower one’s energy level for rehab and increases the risk of another heart attack.',
    },
    input_type,
  },
  {
    input_id: 'Q11',
    input_label: {
      en: 'The “statin” medications limit how much cholesterol the body absorbs from food. Statin medications include atorvastatin (LipitorTM), rosuvastatin (Crestor TM), or simvastatin (Zocor TM).',
    },
    input_type,
  },
  {
    input_id: 'Q12',
    input_label: {
      en: 'To control blood pressure, one should lower the amount of sodium in the diet to less than 2000 mg per day, exercise, take blood pressure medication regularly (if prescribed), and learn relaxation techniques.',
    },
    input_type,
  },
  {
    input_id: 'Q13',
    input_label: {
      en: 'If someone gets chest discomfort during a walking exercise session, he or she should speed up to see if the discomfort goes away.',
    },
    input_type,
  },
  {
    input_id: 'Q14',
    input_label: {
      en: 'Trans fats are partially hydrogenated vegetable oils (e.g. vegetable shortening) and are unhealthy.',
    },
    input_type,
  },
  {
    input_id: 'Q15',
    input_label: {
      en: 'Sleep apnea that is not treated increases the risk for another heart attack, but it does not increase risk of death.',
    },
    input_type,
  },
  {
    input_id: 'Q16',
    input_label: {
      en: 'To control cholesterol, one should become a vegetarian and avoid eggs.',
    },
    input_type,
  },
  {
    input_id: 'Q17',
    input_label: {
      en: 'Someone knows if he or she is exercising at the right level when the heart rate is in the target zone, the exertion level is no higher than “somewhat hard”, and he or she can exercise and talk at the same time.',
    },
    input_type,
  },
  {
    input_id: 'Q18',
    input_label: {
      en: 'Diabetes cannot be prevented with exercise and healthy eating',
    },
    input_type,
  },
  {
    input_id: 'Q19',
    input_label: {
      en: 'Stress is a large risk for heart attack and is as important as high blood pressure and diabetes.',
    },
    input_type,
  },
  {
    input_id: 'Q20',
    input_label: {
      en: 'A diet that can help lower blood pressure is rich in: vegetables and fruits, whole grains, low fat dairy, nuts and seeds',
    },
    input_type,
  },
]
