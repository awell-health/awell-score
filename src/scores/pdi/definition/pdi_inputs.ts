import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type SimpleNumberInputType,
} from '../../../types'

const type = {
  type: z.number().min(0).max(10),
  uiOptions: {
    component: 'slider',
    range: {
      min: {
        label: { en: 'No disability', nl: 'Geen beperkingen' },
      },
      max: {
        label: { en: 'Worst disability', nl: 'Volledig beperkt' },
      },
    },
  },
} satisfies SimpleNumberInputType

export const PDI_INPUTS = {
  Q01: {
    label: {
      en: 'Family and home responsibilities: activities related to home and family',
      nl: 'Familiare en huishoudelijke verantwoordelijkheden: Deze categorie houdt activiteiten in die te maken hebben met huishoudelijke werkzaamheden in en rond het huis (b.v. tuinieren e.d.) en verplichtingen ten aanzien van andere familieleden (b.v. kinderen naar school brengen e.d.).',
    },
    ...type,
  },
  Q02: {
    label: {
      en: 'Recreation: hobbies sports and other leisure time activities',
      nl: 'Recreatie: Deze categorie omvat activiteiten zoals hobby’s, sport en andere vrije tijdsbestedingen.',
    },
    ...type,
  },
  Q03: {
    label: {
      en: 'Social activity: participation with friends and acquaintances other than family members',
      nl: 'Sociale activiteiten: Deze categorie heeft te maken met samen met vrienden en/of familie uit te voeren activiteiten, zoals feestjes, theater of concertbezoek, uit eten gaan en andere sociale gelegenheden.',
    },
    ...type,
  },
  Q04: {
    label: {
      en: 'Occupation: activities partly or directly related to working including housework or volunteering',
      nl: 'Beroep: Deze categorie omvat activiteiten die geheel of gedeeltelijk te maken hebben met uw beroep. Ook niet-betaald werk, zoals huishouden of vrijwilligers werk, hoort hierbij.',
    },
    ...type,
  },
  Q05: {
    label: {
      en: 'Sexual behavior: frequency and quality of sex life?',
      nl: 'Sexuele activiteiten: Deze categorie vraagt naar de invloed op de frequentie en de kwaliteit van uw sexleven.',
    },
    ...type,
  },
  Q06: {
    label: {
      en: 'Self care: personal maintenance and independent daily living (bathing dressing etc.)',
      nl: 'Zelfverzorging: Deze categorie omvat activiteiten op het gebied van persoonlijke verzorging en onafhankelijke kunnen uitvoeren van allerlei dagelijkse activiteiten (b.v. douchen, aankleden, autorijden)',
    },
    ...type,
  },
  Q07: {
    label: {
      en: 'Life-support activity: basic life-supporting behaviors (eating sleeping breathing etc.)',
      nl: 'Basale levensbehoeftes: Deze categorie omvat activiteiten die de vitale levensfuncties omvatten, zoals eten, slapen en ademhalen.',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
