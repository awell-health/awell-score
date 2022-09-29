import type { InputType } from '../../../../types/calculations.types'

export const BECK_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: { nl: 'Somberheid, verdriet', en: 'Sadness' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: { nl: 'Ik voel me niet somber.', en: 'I do not feel sad.' },
          value: 0,
        },
        {
          label: {
            nl: 'Ik voel me een groot deel van de tijd somber.',
            en: 'I feel sad much of the time.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben de hele tijd somber.',
            en: 'I am sad all the time.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben zó somber of ongelukkig dat ik het niet verdragen kan.',
            en: "I am so sad or unhappy that I can't stand it.",
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q02',
    input_label: { nl: 'Pessimisme', en: 'Pessimism' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik ben niet ontmoedigd over mijn toekomst.',
            en: 'I am not discouraged about my future.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben meer ontmoedigd over mijn toekomst dan vroeger.',
            en: 'I feel more discouraged about my future than I used to.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik verwacht niet dat de dingen goed voor mij zullen uitpakken.',
            en: 'I do not expect things to work out for me.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb het gevoel dat mijn toekomst hopeloos is en dat het alleen maar erger zal worden.',
            en: 'I feel my future is hopeless and will only get worse.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q03',
    input_label: { nl: 'Mislukkingen', en: 'Past Failure' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik voel me geen mislukking.',
            en: 'I do not feel like a failure.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb te veel dingen laten mislukken.',
            en: 'I have failed more than I should have.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Als ik terugkijk, zie ik een hoop mislukkingen.',
            en: 'As I look back, I see a lot of failures.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik vind dat ik als persoon een totale mislukking ben.',
            en: 'I feel I am a total failure as a person.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q04',
    input_label: { nl: 'Verlies van plezier', en: 'Loss of Pleasure' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik beleef net zo veel plezier als altijd aan de dingen die ik leuk vind.',
            en: 'I get as much pleasure as I ever did from the things I enjoy.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik geniet niet meer zoveel van dingen als vroeger.',
            en: "I don't enjoy things as much as I used to.",
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik beleef heel weinig plezier aan de dingen die ik vroeger leuk vond.',
            en: 'I get very little pleasure from the things I used to enjoy.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik beleef geen enkel plezier aan de dingen die ik vroeger leuk vond.',
            en: "I can't get any pleasure from the things I used to enjoy.",
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q05',
    input_label: { nl: 'Schuldgevoelens', en: 'Guilty Feelings' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik voel me niet bijzonder schuldig.',
            en: "I don't feel particularly guilty.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik voel me schuldig over veel dingen die ik heb gedaan of had moeten doen.',
            en: 'I feel guilty over many things I have done or should have done.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik voel me meestal erg schuldig.',
            en: 'I feel quite guilty most of the time.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik voel me de hele tijd schuldig.',
            en: 'I feel guilty all of the time.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q06',
    input_label: { nl: 'Gevoel gestraft te worden', en: 'Punishment Feelings' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik heb niet het gevoel dat ik gestraft word.',
            en: "I don't feel I am being punished.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb het gevoel dat ik misschien gestraft zal worden.',
            en: 'I feel I may be punished.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik verwacht gestraft te worden.',
            en: 'I expect to be punished.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb het gevoel dat ik nu gestraft word.',
            en: 'I feel I am being punished.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q07',
    input_label: { nl: 'Afkeer van zichzelf', en: 'Self-Dislike' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik voel me over mezelf net als altijd.',
            en: 'I feel the same about myself as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb minder zelfvertrouwen.',
            en: 'I have lost confidence in myself.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben teleurgesteld in mezelf.',
            en: 'I am disappointed in myself.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb een hekel aan mezelf.',
            en: 'I dislike myself.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q08',
    input_label: { nl: 'Zelfkritiek', en: 'Self-Criticalness' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik bekritiseer of verwijt mijzelf niet meer dan gewoonlijk.',
            en: "I don't criticize or blame myself more than usual.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben meer kritisch op mezelf dan vroeger.',
            en: 'I am more critical of myself than I used to be.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik bekritiseer mezelf voor al mijn tekortkomingen.',
            en: 'I criticize myself for all of my faults.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik verwijt mijzelf al het slechte wat gebeurt.',
            en: 'I blame myself for everything bad that happens.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q09',
    input_label: {
      nl: 'Suïcidale gedachten of wensen',
      en: 'Suicidal Thoughts or Wishes',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik heb geen enkele gedachte aan zelfdoding.',
            en: "I don't have any thoughts of killing myself.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb gedachten aan zelfdoding, maar ik zou ze niet ten uitvoer brengen.',
            en: 'I have thoughts of killing myself, but I would not carry them out.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik zou liever een eind aan mijn leven maken.',
            en: 'I would like to kill myself.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik zou een eind aan mijn leven maken als ik de kans kreeg.',
            en: 'I would kill myself if I had the chance.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q10',
    input_label: { nl: 'Huilen', en: 'Crying' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik huil niet meer dan vroeger.',
            en: "I don't cry anymore than I used to.",
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik huil meer dan vroeger.',
            en: 'I cry more than I used to.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik huil om elk klein ding.',
            en: 'I cry over every little thing.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik wil graag huilen, maar ik kan het niet.',
            en: "I feel like crying, but I can't.",
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q11',
    input_label: { nl: 'Agitatie, onrust', en: 'Agitation' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik ben niet rustelozer of meer gespannen dan anders.',
            en: 'I am no more restless or wound up than usual.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben rustelozer of meer gespannen dan anders.',
            en: 'I feel more restless or wound up than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben zo rusteloos of opgewonden dat ik moeilijk stil kan zitten.',
            en: "I am so restless or agitated, it's hard to stay still.",
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben zo rusteloos of opgewonden dat ik moet blijven bewegen of iets doen.',
            en: 'I am so restless or agitated that I have to keep moving or doing something.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q12',
    input_label: { nl: 'Verlies van interesse', en: 'Loss of Interest' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Mijn belangstelling voor andere mensen of activiteiten is niet verminderd.',
            en: 'I have not lost interest in other people or activities.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb nu minder belangstelling voor andere mensen of dingen dan vroeger.',
            en: 'I am less interested in other people or things than before.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb mijn belangstelling voor andere mensen of dingen grotendeels verloren.',
            en: 'I have lost most of my interest in other people or things.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Het is moeilijk om nog ergens belangstelling voor op te brengen.',
            en: "It's hard to get interested in anything.",
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q13',
    input_label: { nl: 'Besluiteloosheid', en: 'Indecisiveness' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik neem beslissingen ongeveer even makkelijk als altijd.',
            en: 'I make decisions about as well as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik vind het moeilijker om beslissingen te nemen dan gewoonlijk.',
            en: 'I find it more difficult to make decisions than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb veel meer moeite met het nemen van beslissingen dan vroeger.',
            en: 'I have much greater difficulty in making decisions than I used to.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb moeite met alle beslissingen.',
            en: 'I have trouble making any decisions.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q14',
    input_label: { nl: 'Waardeloosheid', en: 'Worthlessness' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik heb niet het gevoel dat ik waardeloos ben.',
            en: 'I do not feel I am worthless.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik zie mezelf niet meer zo waardevol en nuttig als vroeger.',
            en: "I don't consider myself as worthwhile and useful as I used to.",
          },
          value: 1,
        },
        {
          label: {
            nl: 'Vergeleken met anderen voel ik me meer waardeloos.',
            en: 'I feel more worthless as compared to others.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik voel me volstrekt waardeloos.',
            en: 'I feel utterly worthless.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q15',
    input_label: { nl: 'Energieverlies', en: 'Loss of Energy' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik heb nog evenveel energie als altijd.',
            en: 'I have as much energy as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb minder energie dan vroeger.',
            en: 'I have less energy than I used to have.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb niet voldoende energie om veel te doen.',
            en: "I don't have enough energy to do very much.",
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb niet genoeg energie om wat dan ook te doen.',
            en: "I don't have enough energy to do anything.",
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q16',
    input_label: {
      nl: 'Verandering van slaappatroon',
      en: 'Changes in Sleeping Pattern',
    },
    input_type: {
      type: 'string',
      allowed_answers: [
        {
          label: {
            nl: 'Mijn slaappatroon is niet veranderd.',
            en: 'I have not experienced any change in my sleeping.',
          },
          value: '0',
        },
        {
          label: {
            nl: 'Ik slaap wat meer dan gewoonlijk.',
            en: 'I sleep somewhat more than usual.',
          },
          value: '1a',
        },
        {
          label: {
            nl: 'Ik slaap wat minder dan gewoonlijk.',
            en: 'I sleep somewhat less than usual.',
          },
          value: '1b',
        },
        {
          label: {
            nl: 'Ik slaap veel meer dan gewoonlijk.',
            en: 'I sleep a lot more than usual.',
          },
          value: '2a',
        },
        {
          label: {
            nl: 'Ik slaap veel minder dan gewoonlijk.',
            en: 'I sleep a lot less than usual.',
          },
          value: '2b',
        },
        {
          label: {
            nl: 'Ik slaap het grootste deel van de dag.',
            en: 'I sleep most of the day.',
          },
          value: '3a',
        },
        {
          label: {
            nl: 'Ik word 1-2uren te vroeg wakker en kan niet meer inslapen.',
            en: "I wake up 1-2 hours early and can't get back to sleep.",
          },
          value: '3b',
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q17',
    input_label: { nl: 'Prikkelbaarheid', en: 'Irritability' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik ben niet meer prikkelbaar dan anders.',
            en: 'I am not more irritable than usual.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik ben meer prikkelbaar dan anders.',
            en: 'I am more irritable than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben veel meer prikkelbaar dan anders.',
            en: 'I am much more irritable than usual.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben de hele tijd prikkelbaar.',
            en: 'I am irritable all the time.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q18',
    input_label: { nl: 'Verandering van eetlust', en: 'Changes in Appetite' },
    input_type: {
      type: 'string',
      allowed_answers: [
        {
          label: {
            nl: 'Mijn eetlust is niet veranderd.',
            en: 'I have not experienced any change in my appetite.',
          },
          value: '0',
        },
        {
          label: {
            nl: 'Mijn eetlust is wat kleiner dan gewoonlijk.',
            en: 'My appetite is somewhat less than usual.',
          },
          value: '1a',
        },
        {
          label: {
            nl: 'Mijn eetlust is wat groter dan gewoonlijk.',
            en: 'My appetite is somewhat greater than usual.',
          },
          value: '1b',
        },
        {
          label: {
            nl: 'Mijn eetlust is veel kleiner dan vroeger.',
            en: 'My appetite is much less than before.',
          },
          value: '2a',
        },
        {
          label: {
            nl: 'Mijn eetlust is veel groter dan gewoonlijk.',
            en: 'My appetite is much greater than usual.',
          },
          value: '2b',
        },
        {
          label: {
            nl: 'Ik heb helemaal geen eetlust.',
            en: 'I have no appetite at all.',
          },
          value: '3a',
        },
        {
          label: {
            nl: 'Ik verlang de hele tijd naar eten.',
            en: 'I crave food all the time.',
          },
          value: '3b',
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q19',
    input_label: {
      nl: 'Concentratieproblemen',
      en: 'Concentration Difficulty',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik kan me net zo goed concentreren als altijd.',
            en: 'I can concentrate as well as ever.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik kan me niet zo goed concentreren als anders.',
            en: "I can't concentrate as well as usual.",
          },
          value: 1,
        },
        {
          label: {
            nl: 'Het is lastig om mijn gedachten ergens lang bij te houden.',
            en: "It's hard to keep my mind on anything for very long.",
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik kan me nergens op concentreren.',
            en: "I find I can't concentrate on anything.",
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q20',
    input_label: { nl: 'Moeheid', en: 'Tiredness or Fatigue' },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik ben niet meer moe of afgemat dan gewoonlijk.',
            en: 'I am no more tired or fatigued than usual.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik word sneller moe of afgemat dan gewoonlijk.',
            en: 'I get more tired or fatigued more easily than usual.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik ben te moe of afgemat voor veel dingen die ik vroeger wel deed.',
            en: 'I am too tired or fatigued to do a lot of the things I used to do.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik ben te moe of afgemat voor de meeste dingen die ik vroeger wel deed.',
            en: 'I am too tired or fatigued to do most of the things I used to do.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
  {
    input_id: 'Q21',
    input_label: {
      nl: 'Verlies van interesse in sex',
      en: 'Loss of Interest in Sex',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          label: {
            nl: 'Ik heb de laatste tijd geen verandering gemerkt in mijn belangstelling voor sex.',
            en: 'I have not noticed any recent change in my interest in sex.',
          },
          value: 0,
        },
        {
          label: {
            nl: 'Ik heb minder belangstelling voor sex dan vroeger.',
            en: 'I am less interested in sex than I used to be.',
          },
          value: 1,
        },
        {
          label: {
            nl: 'Ik heb tegenwoordig veel minder belangstelling voor sex.',
            en: 'I am much less interested in sex now.',
          },
          value: 2,
        },
        {
          label: {
            nl: 'Ik heb alle belangstelling voor sex verloren.',
            en: 'I have lost interest in sex completely.',
          },
          value: 3,
        },
      ],
    },
    required: true,
  },
]
