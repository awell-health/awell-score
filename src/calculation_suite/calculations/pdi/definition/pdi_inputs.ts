import { type InputType } from '../../../../types/calculations.types'
import { NumberInputType } from '../../../../types/calculations/inputs/calculation-inputs.types'

const input_type: NumberInputType = {
  type: 'number',
  component: 'slider',
  range: {
    min: {
      value: 0,
      label: { en: 'No disability', nl: 'Geen beperkingen' },
    },
    max: {
      value: 10,
      label: { en: 'Worst disability', nl: 'Volledig beperkt' },
    },
  },
}

export const PDI_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'Family and home responsibilities: activities related to home and family',
      nl: 'Familiare en huishoudelijke verantwoordelijkheden: Deze categorie houdt activiteiten in die te maken hebben met huishoudelijke werkzaamheden in en rond het huis (b.v. tuinieren e.d.) en verplichtingen ten aanzien van andere familieleden (b.v. kinderen naar school brengen e.d.).',
    },
    input_type,
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'Recreation: hobbies sports and other leisure time activities',
      nl: 'Recreatie: Deze categorie omvat activiteiten zoals hobby’s, sport en andere vrije tijdsbestedingen.',
    },
    input_type,
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'Social activity: participation with friends and acquaintances other than family members',
      nl: 'Sociale activiteiten: Deze categorie heeft te maken met samen met vrienden en/of familie uit te voeren activiteiten, zoals feestjes, theater of concertbezoek, uit eten gaan en andere sociale gelegenheden.',
    },
    input_type,
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'Occupation: activities partly or directly related to working including housework or volunteering',
      nl: 'Beroep: Deze categorie omvat activiteiten die geheel of gedeeltelijk te maken hebben met uw beroep. Ook niet-betaald werk, zoals huishouden of vrijwilligers werk, hoort hierbij.',
    },
    input_type,
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'Sexual behavior: frequency and quality of sex life?',
      nl: 'Sexuele activiteiten: Deze categorie vraagt naar de invloed op de frequentie en de kwaliteit van uw sexleven.',
    },
    input_type,
  },
  {
    input_id: 'Q06',
    input_label: {
      en: 'Self care: personal maintenance and independent daily living (bathing dressing etc.)',
      nl: 'Zelfverzorging: Deze categorie omvat activiteiten op het gebied van persoonlijke verzorging en onafhankelijke kunnen uitvoeren van allerlei dagelijkse activiteiten (b.v. douchen, aankleden, autorijden)',
    },
    input_type,
  },
  {
    input_id: 'Q07',
    input_label: {
      en: 'Life-support activity: basic life-supporting behaviors (eating sleeping breathing etc.)',
      nl: 'Basale levensbehoeftes: Deze categorie omvat activiteiten die de vitale levensfuncties omvatten, zoals eten, slapen en ademhalen.',
    },
    input_type,
  },
]
