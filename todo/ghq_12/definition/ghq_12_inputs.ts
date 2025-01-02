import type { InputType } from '../../../src/types/calculations.types'

export const GHQ_12_INPUTS: Array<InputType> = [
  {
    input_id: 'GHQ_12_Q01',
    label: {
      nl: 'Hebt u zich in de afgelopen weken kunnen concentreren op uw bezigheden?',
      en: 'Over the past few weeks... Have you been able to concentrate well on what you were doing?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Beter dan gewoonlijk', en: 'Better than usual' },
        },
        {
          value: 1,
          label: {
            nl: 'Net zo goed als gewoonlijk',
            en: 'Same as usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Minder goed dan gewoonlijk',
            en: 'Less than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel minder goed dan gewoonlijk',
            en: 'Much less than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q02',
    label: {
      nl: 'Bent u in de afgelopen weken door zorgen veel slaap tekort gekomen?',
      en: 'Over the past few weeks... Have your worries made you lose a lot of sleep?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Helemaal niet', en: 'Not at all' },
        },
        {
          value: 1,
          label: {
            nl: 'Niet meer dan gewoonlijk',
            en: 'No more than usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Wat meer dan gewoonlijk',
            en: 'Rather more than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel meer dan gewoonlijk',
            en: 'Much more than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q03',
    label: {
      nl: 'Hebt u in de afgelopen weken het gevoel gehad zinvol bezig te zijn?',
      en: 'Over the past few weeks... Have you felt that you are playing a useful role in life?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Meer dan gewoonlijk', en: 'More so than usual' },
        },
        {
          value: 1,
          label: {
            nl: 'Net zo goed als gewoonlijk',
            en: 'Same as usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Minder goed dan gewoonlijk',
            en: 'Less useful than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel minder goed dan gewoonlijk',
            en: 'Much less than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q04',
    label: {
      nl: 'Voelde u zich in de afgelopen weken in staat om beslissingen (over dingen) te nemen?',
      en: 'Over the past few weeks... Have you felt capable of making decisions?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Meer dan gewoonlijk', en: 'More so than usual' },
        },
        {
          value: 1,
          label: {
            nl: 'Net zo goed als gewoonlijk',
            en: 'Same as usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Minder goed dan gewoonlijk',
            en: 'Less so than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel minder goed dan gewoonlijk',
            en: 'Much less capable',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q05',
    label: {
      nl: 'Hebt u in de afgelopen weken het gevoel gehad dat u voortdurend onder druk stond?',
      en: 'Over the past few weeks... Have you felt constantly overwhelmed and stressed?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Helemaal niet', en: 'Not at all' },
        },
        {
          value: 1,
          label: {
            nl: 'Niet meer dan gewoonlijk',
            en: 'No more than usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Wat meer dan gewoonlijk',
            en: 'Rather more than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel meer dan gewoonlijk',
            en: 'Much more than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q06',
    label: {
      nl: 'Hebt u in de afgelopen weken het gevoel gehad dat u uw moeilijkheden niet de baas kon?',
      en: 'Over the past few weeks... Have you had the feeling that you cannot overcome your difficulties?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Helemaal niet', en: 'Not at all' },
        },
        {
          value: 1,
          label: {
            nl: 'Niet meer dan gewoonlijk',
            en: 'No more than usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Wat meer dan gewoonlijk',
            en: 'Rather more than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel meer dan gewoonlijk',
            en: 'Much more than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q07',
    label: {
      nl: 'Hebt u in de afgelopen weken plezier kunnen beleven aan uw gewone, dagelijkse bezigheden?',
      en: 'Over the past few weeks... Have you been able to enjoy your normal daily activities?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Meer dan gewoonlijk', en: 'More so than usual' },
        },
        {
          value: 1,
          label: {
            nl: 'Net zo goed als gewoonlijk',
            en: 'Same as usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Minder goed dan gewoonlijk',
            en: 'Less so than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel minder goed dan gewoonlijk',
            en: 'Much less than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q08',
    label: {
      nl: 'Bent u in de afgelopen weken in staat geweest uw problemen onder ogen te zien?',
      en: 'Over the past few weeks... Have you been able to adequately cope with your problems?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Beter dan gewoonlijk', en: 'More so than usual' },
        },
        {
          value: 1,
          label: {
            nl: 'Niet meer dan gewoonlijk',
            en: 'Same as usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Minder goed dan gewoonlijk',
            en: 'Less able than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel minder goed dan gewoonlijk',
            en: 'Much less than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q09',
    label: {
      nl: 'Hebt u zich in de afgelopen weken ongelukkig of neerslachtig gevoeld?',
      en: 'Over the past few weeks... Have you felt unhappy or depressed?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Helemaal niet', en: 'Not at all' },
        },
        {
          value: 1,
          label: {
            nl: 'Niet meer dan gewoonlijk',
            en: 'No more than usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Wat meer dan gewoonlijk',
            en: 'Rather more than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel meer dan gewoonlijk',
            en: 'Much more than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q10',
    label: {
      nl: 'Bent u in de afgelopen weken het vertrouwen in uzelf kwijtgeraakt?',
      en: 'Over the past few weeks... Have you lost confidence in yourself?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Helemaal niet', en: 'Not at all' },
        },
        {
          value: 1,
          label: {
            nl: 'Niet meer dan gewoonlijk',
            en: 'No more than usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Wat meer dan gewoonlijk',
            en: 'Rather more than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel meer dan gewoonlijk',
            en: 'Much more than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q11',
    label: {
      nl: 'Hebt u zich in de afgelopen weken als een waardeloos iemand beschouwd?',
      en: 'Over the past few weeks... Have you thought that you are a person worthless?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Helemaal niet', en: 'Not at all' },
        },
        {
          value: 1,
          label: {
            nl: 'Niet meer dan gewoonlijk',
            en: 'No more than usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Wat meer dan gewoonlijk',
            en: 'Rather more than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel meer dan gewoonlijk',
            en: 'Much more than usual',
          },
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'GHQ_12_Q12',
    label: {
      nl: 'Hebt u zich in de afgelopen weken alles bij elkaar redelijk gelukkig gevoeld?',
      en: 'Over the past few weeks... Do you feel reasonably happy considering all the circumstances?',
    },
    type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Beter dan gewoonlijk', en: 'More so than usual' },
        },
        {
          value: 1,
          label: {
            nl: 'Net zo goed als gewoonlijk',
            en: 'Same as usual',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Minder goed dan gewoonlijk',
            en: 'Less so than usual',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel minder goed dan gewoonlijk',
            en: 'Much less than usual',
          },
        },
      ],
    },
    required: true,
  },
]
