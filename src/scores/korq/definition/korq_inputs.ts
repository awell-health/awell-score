import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../types'

export const ZERO = 0
export const ONE = 1
export const TWO = 2
export const THREE = 3
export const FOUR = 4

const type = {
  type: z.union([
    z.literal(ZERO),
    z.literal(ONE),
    z.literal(TWO),
    z.literal(THREE),
    z.literal(FOUR),
  ]),
  uiOptions: {
    options: [
      {
        value: ZERO,
        label: {
          en: 'Not applicable',
          fr: 'Non applicable',
        },
      },
      {
        value: FOUR,
        label: {
          en: 'Not at all',
          fr: 'Pas du tout',
        },
      },
      {
        value: THREE,
        label: {
          en: 'A little',
          fr: 'Un peu',
        },
      },
      {
        value: TWO,
        label: {
          en: 'Quite a bit',
          fr: 'Moyennement',
        },
      },
      {
        value: ONE,
        label: {
          en: 'A lot',
          fr: 'Beaucoup',
        },
      },
    ],
  },
} satisfies EnumNumberInputType

/**
 * Make sure to update all the input labels with KORQ labels
 */
export const KORQ_INPUTS = {
  Q01_KORQ: {
    label: {
      en: 'How much does your vision interfere with using a computer screen?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`utilisation d`un écran d`ordinateur?',
    },
    ...type,
  },
  Q02_KORQ: {
    label: {
      en: 'How much does your vision interfere with driving during the day?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la conduite pendant la journée?',
    },
    ...type,
  },
  Q03_KORQ: {
    label: {
      en: 'How much does your vision interfere with driving during the night?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la conduite pendant la nuit?',
    },
    ...type,
  },
  Q04_KORQ: {
    label: {
      en: 'How much does your vision interfere with reading street signs?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la lecture des panneaux de rue?',
    },
    ...type,
  },
  Q05_KORQ: {
    label: {
      en: 'How much does your vision interfere with watching TV?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec le visionnage de la télévision?',
    },
    ...type,
  },
  Q06_KORQ: {
    label: {
      en: 'How much does your vision interfere with walking up/down steps?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la montée/descente des escaliers?',
    },
    ...type,
  },
  Q07_KORQ: {
    label: {
      en: 'How much does your vision interfere with avoiding objects in your path?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`évitement d`obstacles sur votre chemin?',
    },
    ...type,
  },
  Q08_KORQ: {
    label: {
      en: 'How much does your vision interfere with your ability to do your job?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec votre capacité à faire votre travail?',
    },
    ...type,
  },
  Q09_KORQ: {
    label: {
      en: 'How much does your vision interfere with seeing in the distance?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la vision à distance?',
    },
    ...type,
  },
  Q10_KORQ: {
    label: {
      en: 'How much do on coming lights interfere with your ability to see, to do your tasks?',
      fr: 'Dans quelle mesure les lumières venant en sens inverse interfèrent-elles avec votre capacité à voir et à effectuer vos tâches?',
    },
    ...type,
  },
  Q11_KORQ: {
    label: {
      en: 'How much does your vision interfere with doing fine tasks at near?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`accomplissement de tâches fines de près?',
    },
    ...type,
  },
  Q12_KORQ: {
    label: {
      en: 'How much does your vision interfere with doing your hobby?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la pratique de votre passe-temps?',
    },
    ...type,
  },
  Q13_KORQ: {
    label: {
      en: 'How much does your vision interfere with recognizing faces?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la reconnaissance des visages?',
    },
    ...type,
  },
  Q14_KORQ: {
    label: {
      en: 'How much does your vision interfere with seeing in poor light?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la vision en conditions de faible luminosité?',
    },
    ...type,
  },
  Q15_KORQ: {
    label: {
      en: 'How much does your vision interfere with doing household tasks? (e.g. cleaning, ironing, washing, washing up)',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`accomplissement de tâches ménagères? (par ex. nettoyage, repassage, lavage, vaisselle)',
    },
    ...type,
  },
  Q16_KORQ: {
    label: {
      en: 'How much does your vision interfere with judging depth?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`évaluation des distances?',
    },
    ...type,
  },
  Q17_KORQ: {
    label: {
      en: 'How much does your vision interfere with seeing small objects in the distance? (e.g. golf ball, darts)',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la vision d`objets petits à distance? (par ex. balle de golf, fléchettes)',
    },
    ...type,
  },
  Q18_KORQ: {
    label: {
      en: 'How much does your vision interfere with sighting tasks? (e.g. camera, microscope, binoculars etc.)',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec les tâches de visée? (par ex. appareil photo, microscope, jumelles, etc.)',
    },
    ...type,
  },
  Q19_KORQ: {
    label: {
      en: 'How much are you troubled by distorted vision?',
      fr: 'Dans quelle mesure êtes-vous gêné par une vision déformée?',
    },
    ...type,
  },
  Q20_KORQ: {
    label: {
      en: 'How much are you troubled by glare and wearing sunglasses all the time?',
      fr: 'Dans quelle mesure êtes-vous gêné par l`éblouissement et le port de lunettes de soleil tout le temps?',
    },
    ...type,
  },
  Q21_KORQ: {
    label: {
      en: 'How much does a bright sunny day interfere with your ability to see, to do your tasks?',
      fr: 'Dans quelle mesure une journée ensoleillée interfère-t-elle avec votre capacité à voir et à effectuer vos tâches?',
    },
    ...type,
  },
  Q22_KORQ: {
    label: {
      en: 'How much are you troubled by wearing rigid gas permeable contact lenses?',
      fr: 'Dans quelle mesure êtes-vous gêné par le port de lentilles de contact rigides perméables aux gaz?',
    },
    ...type,
  },
  Q23_KORQ: {
    label: {
      en: 'How much are you troubled by headaches when wearing your glasses/contact lenses?',
      fr: 'Dans quelle mesure êtes-vous gêné par des maux de tête lorsque vous portez vos lunettes/lentilles de contact?',
    },
    ...type,
  },
  Q24_KORQ: {
    label: {
      en: 'How much are you troubled by dry eyes?',
      fr: 'Dans quelle mesure êtes-vous gêné par les yeux secs?',
    },
    ...type,
  },
  Q25_KORQ: {
    label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by windy days?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les journées venteuses?',
    },
    ...type,
  },
  Q26_KORQ: {
    label: {
      en: 'With respect to yours eyes and vision: How much are you troubled when you are tired?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné lorsque vous êtes fatigué?',
    },
    ...type,
  },
  Q27_KORQ: {
    label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by dry days?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les journées sèches?',
    },
    ...type,
  },
  Q28_KORQ: {
    label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by dusty days?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les journées poussiéreuses?',
    },
    ...type,
  },
  Q29_KORQ: {
    label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by smoky environments?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les environnements enfumés?',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
