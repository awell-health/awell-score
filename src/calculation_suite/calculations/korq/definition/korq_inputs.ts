import { type InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

export const ZERO = 0
export const ONE = 1
export const TWO = 2
export const THREE = 3
export const FOUR = 4

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
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
}

/**
 * Make sure to update all the input labels with KORQ labels
 */
export const KORQ_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01_KORQ',
    input_label: {
      en: 'How much does your vision interfere with using a computer screen?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`utilisation d`un écran d`ordinateur?',
    },
    input_type,
  },
  {
    input_id: 'Q02_KORQ',
    input_label: {
      en: 'How much does your vision interfere with driving during the day?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la conduite pendant la journée?',
    },
    input_type,
  },
  {
    input_id: 'Q03_KORQ',
    input_label: {
      en: 'How much does your vision interfere with driving during the night?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la conduite pendant la nuit?',
    },
    input_type,
  },
  {
    input_id: 'Q04_KORQ',
    input_label: {
      en: 'How much does your vision interfere with reading street signs?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la lecture des panneaux de rue?',
    },
    input_type,
  },
  {
    input_id: 'Q05_KORQ',
    input_label: {
      en: 'How much does your vision interfere with watching TV?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec le visionnage de la télévision?',
    },
    input_type,
  },
  {
    input_id: 'Q06_KORQ',
    input_label: {
      en: 'How much does your vision interfere with walking up/down steps?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la montée/descente des escaliers?',
    },
    input_type,
  },
  {
    input_id: 'Q07_KORQ',
    input_label: {
      en: 'How much does your vision interfere with avoiding objects in your path?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`évitement d`obstacles sur votre chemin?',
    },
    input_type,
  },
  {
    input_id: 'Q08_KORQ',
    input_label: {
      en: 'How much does your vision interfere with your ability to do your job?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec votre capacité à faire votre travail?',
    },
    input_type,
  },
  {
    input_id: 'Q09_KORQ',
    input_label: {
      en: 'How much does your vision interfere with seeing in the distance?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la vision à distance?',
    },
    input_type,
  },
  {
    input_id: 'Q10_KORQ',
    input_label: {
      en: 'How much do on coming lights interfere with your ability to see, to do your tasks?',
      fr: 'Dans quelle mesure les lumières venant en sens inverse interfèrent-elles avec votre capacité à voir et à effectuer vos tâches?',
    },
    input_type,
  },
  {
    input_id: 'Q11_KORQ',
    input_label: {
      en: 'How much does your vision interfere with doing fine tasks at near?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`accomplissement de tâches fines de près?',
    },
    input_type,
  },
  {
    input_id: 'Q12_KORQ',
    input_label: {
      en: 'How much does your vision interfere with doing your hobby?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la pratique de votre passe-temps?',
    },
    input_type,
  },
  {
    input_id: 'Q13_KORQ',
    input_label: {
      en: 'How much does your vision interfere with recognizing faces?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la reconnaissance des visages?',
    },
    input_type,
  },
  {
    input_id: 'Q14_KORQ',
    input_label: {
      en: 'How much does your vision interfere with seeing in poor light?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la vision en conditions de faible luminosité?',
    },
    input_type,
  },
  {
    input_id: 'Q15_KORQ',
    input_label: {
      en: 'How much does your vision interfere with doing household tasks? (e.g. cleaning, ironing, washing, washing up)',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`accomplissement de tâches ménagères? (par ex. nettoyage, repassage, lavage, vaisselle)',
    },
    input_type,
  },
  {
    input_id: 'Q16_KORQ',
    input_label: {
      en: 'How much does your vision interfere with judging depth?',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec l`évaluation des distances?',
    },
    input_type,
  },
  {
    input_id: 'Q17_KORQ',
    input_label: {
      en: 'How much does your vision interfere with seeing small objects in the distance? (e.g. golf ball, darts)',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec la vision d`objets petits à distance? (par ex. balle de golf, fléchettes)',
    },
    input_type,
  },
  {
    input_id: 'Q18_KORQ',
    input_label: {
      en: 'How much does your vision interfere with sighting tasks? (e.g. camera, microscope, binoculars etc.)',
      fr: 'Dans quelle mesure votre vision interfère-t-elle avec les tâches de visée? (par ex. appareil photo, microscope, jumelles, etc.)',
    },
    input_type,
  },
  {
    input_id: 'Q19_KORQ',
    input_label: {
      en: 'How much are you troubled by distorted vision?',
      fr: 'Dans quelle mesure êtes-vous gêné par une vision déformée?',
    },
    input_type,
  },
  {
    input_id: 'Q20_KORQ',
    input_label: {
      en: 'How much are you troubled by glare and wearing sunglasses all the time?',
      fr: 'Dans quelle mesure êtes-vous gêné par l`éblouissement et le port de lunettes de soleil tout le temps?',
    },
    input_type,
  },
  {
    input_id: 'Q21_KORQ',
    input_label: {
      en: 'How much does a bright sunny day interfere with your ability to see, to do your tasks?',
      fr: 'Dans quelle mesure une journée ensoleillée interfère-t-elle avec votre capacité à voir et à effectuer vos tâches?',
    },
    input_type,
  },
  {
    input_id: 'Q22_KORQ',
    input_label: {
      en: 'How much are you troubled by wearing rigid gas permeable contact lenses?',
      fr: 'Dans quelle mesure êtes-vous gêné par le port de lentilles de contact rigides perméables aux gaz?',
    },
    input_type,
  },
  {
    input_id: 'Q23_KORQ',
    input_label: {
      en: 'How much are you troubled by headaches when wearing your glasses/contact lenses?',
      fr: 'Dans quelle mesure êtes-vous gêné par des maux de tête lorsque vous portez vos lunettes/lentilles de contact?',
    },
    input_type,
  },
  {
    input_id: 'Q24_KORQ',
    input_label: {
      en: 'How much are you troubled by dry eyes?',
      fr: 'Dans quelle mesure êtes-vous gêné par les yeux secs?',
    },
    input_type,
  },
  {
    input_id: 'Q25_KORQ',
    input_label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by windy days?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les journées venteuses?',
    },
    input_type,
  },
  {
    input_id: 'Q26_KORQ',
    input_label: {
      en: 'With respect to yours eyes and vision: How much are you troubled when you are tired?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné lorsque vous êtes fatigué?',
    },
    input_type,
  },
  {
    input_id: 'Q27_KORQ',
    input_label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by dry days?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les journées sèches?',
    },
    input_type,
  },
  {
    input_id: 'Q28_KORQ',
    input_label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by dusty days?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les journées poussiéreuses?',
    },
    input_type,
  },
  {
    input_id: 'Q29_KORQ',
    input_label: {
      en: 'With respect to yours eyes and vision: How much are you troubled by smoky environments?',
      fr: 'En ce qui concerne vos yeux et votre vision: Dans quelle mesure êtes-vous gêné par les environnements enfumés?',
    },
    input_type,
  },
]
