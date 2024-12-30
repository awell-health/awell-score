import type { InputType } from '../../../src/types/calculations.types'

export const OHS_INPUTS: Array<InputType> = [
  {
    input_id: 'ohs_01',
    required: true,
    input_label: {
      en: 'How would you describe the pain you usually had from your hip?',
      fr: 'Comment décririez-vous la douleur que vous habituellement ressentie dans votre hanche?',
      nl: 'Hoe zou u de pijn omschrijven die u normaal in/rond uw heup heeft?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Geen pijn', en: 'None', fr: 'Aucune' },
        },
        {
          value: 1,
          label: { nl: 'Hele lichte pijn', en: 'Very mild', fr: 'Minime' },
        },
        {
          value: 2,
          label: { nl: 'Milde pijn', en: 'Mild', fr: 'Légère' },
        },
        {
          value: 3,
          label: { nl: 'Matige pijn', en: 'Moderate', fr: 'Modérée' },
        },
        {
          value: 4,
          label: { nl: 'Ernstige pijn', en: 'Severe', fr: 'Sévère' },
        },
      ],
    },
  },
  {
    input_id: 'ohs_02',
    required: true,
    input_label: {
      en: 'Have you had any trouble with washing and drying yourself (all over) because of your hip?',
      fr: 'Avez-vous eu des difficultés pour vous laver et vous sécher le corps vous-même (des pieds à la tête) à cause de votre hanche?',
      nl: 'Heeft u, door uw heup, moeite met het wassen en afdrogen van uw hele lichaam?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Helemaal geen moeite',
            en: 'No trouble at all',
            fr: 'Aucune difficulté',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Beetje moeite',
            en: 'Very little trouble',
            fr: 'Difficultés minimes',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Nogal wat moeite',
            en: 'Moderate trouble',
            fr: 'Difficultés modérées',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel moeite',
            en: 'Extreme difficulty ',
            fr: 'Difficultés majeures',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Onmogelijk te doen',
            en: 'Impossible to do',
            fr: 'Impossible à réaliser',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_03',
    required: true,
    input_label: {
      en: 'Have you had any trouble getting in and out of a car or using public transport because of your hip? (whichever you tend to use)',
      fr: 'Avez-vous eu des difficultés à cause de votre hanche pour entrer ou sortir d’une voiture ou pour utiliser les transports en commun (quelque soit le mode de transport utilisé)?',
      nl: 'Heeft u, door uw heup, moeite bij het in en uit stappen van de auto, trein, bus of ander openbaar vervoer?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Helemaal geen moeite',
            en: 'No trouble at all',
            fr: 'Aucune difficulté',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Beetje moeite',
            en: 'Very little trouble',
            fr: 'Difficultés minimes',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Nogal wat moeite',
            en: 'Moderate trouble',
            fr: 'Difficultés modérées',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Veel moeite',
            en: 'Extreme difficulty ',
            fr: 'Difficultés majeures',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Onmogelijk te doen',
            en: 'Impossible to do',
            fr: 'Impossible à réaliser',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_04',
    required: true,
    input_label: {
      en: 'Have you been able to put on a pair of socks, stockings or tights?',
      fr: 'Avez-vous été capable de mettre seul(e) vos bas, collants ou chaussettes?',
      nl: 'Kunt u zelf uw sokken, kousen of panty`s aantrekken?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Ja, gemakkelijk',
            en: 'Yes, easily',
            fr: 'Oui, facilement',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Met een beetje moeite',
            en: 'With a little difficulty',
            fr: 'Avec très peu de difficultés',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Met nogal wat moeite',
            en: 'With moderate difficulty',
            fr: 'Avec quelques difficultés ',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Met moeite',
            en: 'With extreme difficulty',
            fr: 'Avec beaucoup de difficultés',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Nee, onmogelijk te doen',
            en: 'No, impossible',
            fr: 'Non, impossible',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_05',
    required: true,
    input_label: {
      en: 'Could you do the household shopping on your own?',
      fr: 'Avez-vous pu faire tout(e) seul(e) des courses pour la maison?',
      nl: 'Kunt u zelf uw dagelijkse boodschappen doen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Ja, gemakkelijk',
            en: 'Yes, easily',
            fr: 'Oui, facilement',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Met een beetje moeite',
            en: 'With a little difficulty',
            fr: 'Avec très peu de difficultés',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Met nogal wat moeite',
            en: 'With moderate difficulty',
            fr: 'Avec quelques difficultés ',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Met moeite',
            en: 'With extreme difficulty',
            fr: 'Avec beaucoup de difficultés',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Nee, onmogelijk te doen',
            en: 'No, impossible',
            fr: 'Non, impossible',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_06',
    required: true,
    input_label: {
      en: 'For how long have you been able to walk before pain from your hip becomes severe? (with or without a stick)',
      fr: 'Combien de temps pouviez-vous marcher (sans vous arrêter) avant que la douleur dans votre hanche ne devienne très importante ? (avec ou sans canne)?',
      nl: 'Hoe lang kunt u lopen (met of zonder stok) voordat de pijn in/rond uw heup ernstig wordt?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Geen pijn / meer dan 30 minuten',
            en: 'No pain/ More than 30 minutes',
            fr: 'Pas de douleur ou plus de 30 minutes',
          },
        },
        {
          value: 1,
          label: {
            nl: '16 tot 30 minuten',
            en: '16 to 30 minutes',
            fr: 'De 16 à 30 minutes',
          },
        },
        {
          value: 2,
          label: {
            nl: '5 tot 15 minuten',
            en: '5 to 15 minutes',
            fr: 'De 5 à 15 minutes',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Alleen in en om het huis',
            en: 'Around the house only',
            fr: 'Autour de la maison seulement',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Niet mogelijk',
            en: 'Not at all-Pain severe on walking',
            fr: 'Pas du tout',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_07',
    required: true,
    input_label: {
      en: 'Have you been able to climb a flight of stairs?',
      fr: 'Avez-vous pu monter un étage par les escaliers?',
      nl: 'Kunt u trap lopen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Ja, gemakkelijk',
            en: 'Yes, easily',
            fr: 'Oui, facilement',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Met een beetje moeite',
            en: 'With a little difficulty',
            fr: 'Avec très peu de difficultés',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Met nogal wat moeite',
            en: 'With moderate difficulty',
            fr: 'Avec quelques difficultés ',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Met moeite',
            en: 'With extreme difficulty',
            fr: 'Avec beaucoup de difficultés',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Nee, onmogelijk te doen',
            en: 'No, impossible',
            fr: 'Non, impossible',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_08',
    required: true,
    input_label: {
      en: 'After a meal (sat at a table), how painful has it been for you to stand up from a chair because of your hip?',
      fr: 'Apres être resté assis (pour un repas par exemple), quel degré de douleur avez-vous ressenti en vous levant de la chaise à cause de votre hanche?',
      nl: 'Hoe pijnlijk is uw heup, als u na het eten aan tafel, uit uw stoel opstaat?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Helemaal niet pijnlijk',
            en: 'Not at all painful',
            fr: 'Pas douloureux du tout',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Beetje pijnlijk',
            en: 'Slightly painful',
            fr: 'Légèrement douloureux',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Nogal pijnlijk',
            en: 'Moderately painful',
            fr: 'Modérément douloureux',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Erg pijnlijk',
            en: 'Very painful',
            fr: 'Très douloureux',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Ondragelijk',
            en: 'Unbearable',
            fr: 'Insupportable',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_09',
    required: true,
    input_label: {
      en: 'Have you been limping when walking, because of your hip?',
      fr: 'Avez-vous boité en marchant, à cause de votre hanche?',
      nl: 'Trekt u, vanwege uw heup, met uw been tijdens het lopen (afgelopen 4 weken)?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Nee, nooit',
            en: 'Rarely/never',
            fr: 'Rarement ou jamais',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Soms (bv de eerste passen)',
            en: 'Sometimes, or just at first',
            fr: 'Quelquefois, ou juste au début',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Vaak ( bv niet alleen de eerste paar stappen)',
            en: 'Often, not just at first',
            fr: 'Souvent, pas seulement au début',
          },
        },
        {
          value: 3,
          label: {
            nl: 'Meestal',
            en: 'Most of the time',
            fr: 'La plupart du temps',
          },
        },
        {
          value: 4,
          label: { nl: 'Altijd', en: 'All of the time', fr: 'Tout le temps' },
        },
      ],
    },
  },
  {
    input_id: 'ohs_10',
    required: true,
    input_label: {
      en: 'Have you had any sudden, severe pain - "shooting", "stabbing" or "spasms" - from the affected hip?',
      fr: 'Avez-vous ressenti au niveau de votre hanche malade (ou opérée) une douleur soudaine, vive et intense (en coup de poignard, spasme, en vrille, etc...)?',
      nl: 'Heeft u wel eens dagen waarop u plotselinge, ernstige pijn (scheuten, steken en/of krampen) in/rond uw heup heeft?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Zelden/Nooit',
            en: 'No days',
            fr: 'Jamais',
          },
        },
        {
          value: 1,
          label: {
            nl: '1-2 dagen',
            en: 'Only 1 or 2 days',
            fr: 'Seulement 1 ou 2 jours',
          },
        },
        {
          value: 2,
          label: {
            nl: 'Een aantal dagen',
            en: 'Some days',
            fr: 'Quelques jours',
          },
        },
        {
          value: 3,
          label: {
            nl: 'De meeste dagen',
            en: 'Most days',
            fr: 'La plupart des jours',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Elke dag',
            en: 'Every day',
            fr: 'Chaque jour',
          },
        },
      ],
    },
  },
  {
    input_id: 'ohs_11',
    required: true,
    input_label: {
      en: 'How much has pain from your hip interfered with your usual work (including housework)?',
      fr: 'La douleur de votre hanche vous a-t-elle gêné(e) dans votre travail ou vos activités habituelles (taches ménagères comprises)?',
      nl: 'In hoeverre beïnvloedt de pijn in uw heup uw dagelijkse werk (inclusief huishoudelijk werk)?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { nl: 'Helemaal niet', en: 'Not at all', fr: 'Pas du tout' },
        },
        {
          value: 1,
          label: { nl: 'Een beetje', en: 'A little bit', fr: 'Un peu' },
        },
        {
          value: 2,
          label: { nl: 'Nogal', en: 'Moderately', fr: 'Modérément' },
        },
        { value: 3, label: { nl: 'Veel', en: 'Greatly', fr: 'Fortement' } },
        {
          value: 4,
          label: { nl: 'Totaal', en: 'Totally', fr: 'Tout le temps' },
        },
      ],
    },
  },
  {
    input_id: 'ohs_12',
    required: true,
    input_label: {
      en: 'Have you been troubled by pain from your hip in bed at night?',
      fr: 'Avez-vous souffert de douleurs de votre hanche au lit la nuit?',
      nl: 'Heeft u wel eens nachten waarop u in bed last heeft van pijn in/rond uw heup?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: {
            nl: 'Nooit',
            en: 'No nights',
            fr: 'Jamais',
          },
        },
        {
          value: 1,
          label: {
            nl: '1 of 2 nachten per week',
            en: 'Only 1 or 2 nights',
            fr: 'Seulement 1 ou 2 nuits',
          },
        },
        {
          value: 2,
          label: {
            nl: '3 of 4 nachten per week',
            en: 'Some nights',
            fr: 'Quelques nuits',
          },
        },
        {
          value: 3,
          label: {
            nl: '5 of 6 nachten per week',
            en: 'Most nights',
            fr: 'La plupart des nuits',
          },
        },
        {
          value: 4,
          label: {
            nl: 'Alle nachten',
            en: 'Every night',
            fr: 'Toutes les nuits',
          },
        },
      ],
    },
  },
]
