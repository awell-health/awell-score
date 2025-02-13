import { z } from 'zod'
import { EnumNumberInputType } from '../../../types'

const inputType = {
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  uiOptions: {
    options: [
      {
        label: { en: 'Not at all' },
        value: 0,
      },
      {
        label: { en: 'Just a little' },
        value: 1,
      },
      {
        label: { en: 'Quite a bit' },
        value: 2,
      },
      {
        label: { en: 'Very much' },
        value: 3,
      },
    ],
  },
} satisfies EnumNumberInputType

export const SNAP_INPUTS = {
  SNAP_Q01: {
    input_label: {
      en: 'Often fails to give close attention to details or makes careless mistakes in schoolwork or tasks',
    },
    ...inputType,
  },
  SNAP_Q02: {
    input_label: {
      en: 'Often has difficulty sustaining attention in tasks or play activities',
    },
    ...inputType,
  },
  SNAP_Q03: {
    input_label: {
      en: 'Often does not seem to listen when spoken to directly',
    },
    ...inputType,
  },
  SNAP_Q04: {
    input_label: {
      en: 'Often does not follow through on instructions and fails to finish schoolwork, chores, or duties ',
    },
    ...inputType,
  },
  SNAP_Q05: {
    input_label: {
      en: 'Often has difficulty organizing tasks and activities',
    },
    ...inputType,
  },
  SNAP_Q06: {
    input_label: {
      en: 'Often avoids, dislikes, or reluctantly engages in tasks requiring sustained mental effort',
    },
    ...inputType,
  },
  SNAP_Q07: {
    input_label: {
      en: 'Often loses things necessary for activities (e.g., toys, school assignments, pencils or books',
    },
    ...inputType,
  },
  SNAP_Q08: {
    input_label: {
      en: 'Often is distracted by extraneous stimuli',
    },
    ...inputType,
  },
  SNAP_Q09: {
    input_label: {
      en: 'Often is forgetful in daily activities',
    },
    ...inputType,
  },
  SNAP_Q10: {
    input_label: {
      en: 'Often fidgets with hands or feet or squirms in seat',
    },
    ...inputType,
  },
  SNAP_Q11: {
    input_label: {
      en: 'Often leaves seat in classroom or in other situations in which remaining seated is expected',
    },
    ...inputType,
  },
  SNAP_Q12: {
    input_label: {
      en: 'Often runs about or climbs excessively in situations in which it is inappropriate',
    },
    ...inputType,
  },
  SNAP_Q13: {
    input_label: {
      en: 'Often has difficulty playing or engaging in leisure activities quietly',
    },
    ...inputType,
  },
  SNAP_Q14: {
    input_label: {
      en: 'Often is “on the go” or often acts as if “driven by a motor”',
    },
    ...inputType,
  },
  SNAP_Q15: {
    input_label: {
      en: 'Often talks excessively',
    },
    ...inputType,
  },
  SNAP_Q16: {
    input_label: {
      en: 'Often blurts out answers before questions have been completed',
    },
    ...inputType,
  },
  SNAP_Q17: {
    input_label: {
      en: 'Often has difficulty awaiting turn',
    },
    ...inputType,
  },
  SNAP_Q18: {
    input_label: {
      en: 'Often interrupts or intrudes on others (e.g., butts into conversations/games',
    },
    ...inputType,
  },
  SNAP_Q19: {
    input_label: {
      en: 'Often loses temper',
    },
    ...inputType,
  },
  SNAP_Q20: {
    input_label: {
      en: 'Often argues with adults',
    },
    ...inputType,
  },
  SNAP_Q21: {
    input_label: {
      en: 'Often actively defies or refuses adult requests or rules',
    },
    ...inputType,
  },
  SNAP_Q22: {
    input_label: {
      en: 'Often deliberately does things that annoy other people',
    },
    ...inputType,
  },
  SNAP_Q23: {
    input_label: {
      en: 'Often blames others for his or her mistakes or misbehaviour',
    },
    ...inputType,
  },
  SNAP_Q24: {
    input_label: {
      en: 'Often is touchy or easily annoyed by others',
    },
    ...inputType,
  },
  SNAP_Q25: {
    input_label: {
      en: 'Often is angry and resentful',
    },
    ...inputType,
  },
  SNAP_Q26: {
    input_label: {
      en: 'Often is spiteful or vindictive',
    },
    ...inputType,
  },
}
