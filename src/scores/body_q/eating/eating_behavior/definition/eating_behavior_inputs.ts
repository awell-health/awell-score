import { type ScoreInputSchemaType } from '../../../../../types'
import { FREQUENCY_POSITIVE_INPUT_TYPE } from '../../../shared/common_input_types'

export const BODY_Q_EATING_BEHAVIOR_INPUTS = {
  BODY_Q_EATING_BEHAVIOR_Q01: {
    label: {
      en: '',
      fr: 'Vous êtes-vous senti(e) satisfait(e) après avoir mangé?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q02: {
    label: {
      en: '',
      fr: 'Avez-vous mangé des aliments sains, dont votre corps a besoin?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q03: {
    label: {
      en: '',
      fr: 'Avez-vous été capable de vous contrôler lorsque vous mangiez?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q04: {
    label: {
      en: '',
      fr: 'Avez-vous eu l\'impression de pouvoir contrôler les aliments que vous mangiez?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q05: {
    label: {
      en: '',
      fr: 'Avez-vous bien mâché les aliments avant de les avaler?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q06: {
    label: {
      en: '',
      fr: "Avez-vous mangé la bonne quantité d'aliments?",
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q07: {
    label: {
      en: '',
      fr: 'Avez-vous mangé à la bonne vitesse (pas trop vite)?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q08: {
    label: {
      en: '',
      fr: 'Avez-vous évité les en-cas mauvais pour votre santé?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
  BODY_Q_EATING_BEHAVIOR_Q09: {
    label: {
      en: '',
      fr: 'Avez-vous arrêté de manger avant de vous sentir trop plein(e)?',
    },
    ...FREQUENCY_POSITIVE_INPUT_TYPE,
  },
} satisfies ScoreInputSchemaType
