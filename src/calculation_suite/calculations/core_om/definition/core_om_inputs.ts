import type { InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 0, label: { en: 'Not at all', it: 'Per nulla' } },
    { value: 1, label: { en: 'Only occasionaly', it: 'Solo occasionalmente' } },
    { value: 2, label: { en: 'Sometimes', it: 'Ogni tanto' } },
    { value: 3, label: { en: 'Often', it: 'Spesso' } },
    {
      value: 4,
      label: { en: 'Most or all the time', it: 'Molto spesso o sempre' },
    },
  ],
}

const input_type_reversed: NumberInputType = {
  type: 'number',
  allowed_answers: [
    { value: 4, label: { en: 'Not at all', it: 'Per nulla' } },
    { value: 3, label: { en: 'Only occasionaly', it: 'Solo occasionalmente' } },
    { value: 2, label: { en: 'Sometimes', it: 'Ogni tanto' } },
    { value: 1, label: { en: 'Often', it: 'Spesso' } },
    {
      value: 0,
      label: { en: 'Most or all the time', it: 'Molto spesso o sempre' },
    },
  ],
}

export const CORE_OM_INPUTS: Array<InputType> = [
  {
    input_id: 'CORE_OM_Q01',
    input_label: {
      it: 'Mi sono sentito terribilmente solo e isolato',
      en: 'Over the last week... I have felt terribly alone and isolated',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q02',
    input_label: {
      it: 'Mi sono sentito teso, ansioso o nervoso',
      en: 'Over the last week... I have felt tense, anxious or nervous',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q03',
    input_label: {
      it: 'Ho sentito di avere qualcuno a cui rivolgermi per ricevere un sostegno quando ne ho avuto bisogno',
      en: 'Over the last week... I have felt I have someone to turn to for support when needed ',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q04',
    input_label: {
      it: 'Mi sono sentito a posto con me stesso',
      en: 'Over the last week... I have felt O.K. about myself',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q05',
    input_label: {
      it: 'Mi sono sentito completamente privo di energia e di entusiasmo',
      en: 'Over the last week... I have felt totally lacking in energy and enthusiasm ',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q06',
    input_label: {
      it: 'Sono stato violento fisicamente verso altre persone',
      en: 'Over the last week... I have been physically violent to others',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q07',
    input_label: {
      it: 'Mi sono sentito capace di adattarmi in caso di difficoltà',
      en: 'Over the last week... I have felt able to cope when things go wrong',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q08',
    input_label: {
      it: 'Sono stato disturbato da malesseri, dolori o altri problemi fisici',
      en: 'Over the last week... I have been troubled by aches, pains or other physical problems',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q09',
    input_label: {
      it: 'Ho pensato a farmi del male',
      en: 'Over the last week... I have thought of hurting myself',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q10',
    input_label: {
      it: 'Non ho avuto la forza di parlare con le persone',
      en: 'Over the last week... Talking to people has felt too much for me',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q11',
    input_label: {
      it: 'La tensione e l’ansia mi hanno impedito di fare cose importanti',
      en: 'Over the last week... Tension and anxiety have prevented me doing important things',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q12',
    input_label: {
      it: 'Sono stato contento per le cose che ho fatto',
      en: 'Over the last week... I have been happy with the things I have done',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q13',
    input_label: {
      it: 'Sono stato disturbato da pensieri e stati d’animo indesiderati',
      en: 'Over the last week... I have been disturbed by unwanted thoughts and feelings',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q14',
    input_label: {
      it: 'Ho avuto voglia di piangere',
      en: 'Over the last week... I have felt like crying',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q15',
    input_label: {
      it: 'Ho provato panico o terrore',
      en: 'Over the last week... I have felt panic or terror',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q16',
    input_label: {
      it: 'Ho progettato di mettere fine alla mia vita',
      en: 'Over the last week... I made plans to end my life',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q17',
    input_label: {
      it: 'Mi sono sentito sopraffatto dai miei problemi',
      en: 'Over the last week... I have felt overwhelmed by my problems',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q18',
    input_label: {
      it: 'Ho avuto difficoltà ad addormentarmi o a mantenere il sonno',
      en: 'Over the last week... I have had difficulty getting to sleep or staying asleep',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q19',
    input_label: {
      it: 'Ho provato calore o affetto per qualcuno',
      en: 'Over the last week... I have felt warmth or affection for someone',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q20',
    input_label: {
      it: 'Mi è stato impossibile mettere da parte i miei problemi',
      en: 'Over the last week... My problems have been impossible to put to one side ',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q21',
    input_label: {
      it: 'Sono stato in grado di fare la maggior parte delle cose che dovevo fare',
      en: 'Over the last week... I have been able to do most things I needed to ',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q22',
    input_label: {
      it: 'Ho minacciato o intimorito qualcuno',
      en: 'Over the last week... I have threatened or intimidated another person ',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q23',
    input_label: {
      it: 'Mi sono sentito affranto o senza speranza',
      en: 'Over the last week... I have felt despairing or hopeless',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q24',
    input_label: {
      it: 'Ho pensato: “Sarebbe meglio essere morto”',
      en: 'Over the last week... I have thought it would be better if I were dead',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q25',
    input_label: {
      it: 'Mi sono sentito criticato da altre persone',
      en: 'Over the last week... I have felt criticised by other people',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q26',
    input_label: {
      it: 'Ho pensato di non avere amici',
      en: 'Over the last week... I have thought I have no friends',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q27',
    input_label: {
      it: 'Mi sono sentito infelic',
      en: 'Over the last week... I have felt unhappy ',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q28',
    input_label: {
      it: 'Sono stato turbato da immagini o ricordi indesiderati',
      en: 'Over the last week... Unwanted images or memories have been distressing me',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q29',
    input_label: {
      it: 'Mi sono sentito irritato mentre ero con altre persone',
      en: 'Over the last week... I have been irritable when with other people ',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q30',
    input_label: {
      it: 'Ho pensato che è mia la colpa dei problemi e delle difficoltà che ho',
      en: 'Over the last week... I have thought I am to blame for my problems and difficulties',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q31',
    input_label: {
      it: 'Mi sono sentito ottimista per il mio futuro',
      en: 'Over the last week... I have felt optimistic about my future',
    },
    input_type: input_type_reversed,
  },
  {
    input_id: 'CORE_OM_Q32',
    input_label: {
      it: 'Ho ottenuto ciò che volevo',
      en: 'Over the last week... I have achieved the things I wanted to',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q33',
    input_label: {
      it: 'Mi sono sentito umiliato o messo in imbarazzo da altre persone',
      en: 'Over the last week... I have felt humiliated or shamed by other people',
    },
    input_type,
  },
  {
    input_id: 'CORE_OM_Q34',
    input_label: {
      it: 'Mi sono fatto del male fisicamente o ho messo seriamente in pericolo la mia salute',
      en: 'Over the last week... I have hurt myself physically or taken dangerous risks with my health',
    },
    input_type,
  },
]
