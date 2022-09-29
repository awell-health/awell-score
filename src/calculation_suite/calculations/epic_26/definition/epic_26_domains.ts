import type { EPICDomainType } from '../../../../types/calculations/subscales/custom/epic26.types'

export const EPIC_26_HRQOL_DOMAINS: Array<EPICDomainType> = [
  {
    id: 'UI',
    input_ids_in_subscale: [
      {
        input_id: 'EPIC26_Q01',
        epic_item_number: 23,
        input_label: {
          nl: 'Hoe vaak verloor u in de afgelopen 4 weken urine zonder dat u dat wilde?',
          en: 'Over the past 4 weeks, how often have you leaked urine?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                nl: 'Meer dan één keer per dag',
                en: 'More than once a day',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Ongeveer één keer per dag',
                en: 'About once a day',
              },
            },
            {
              value: 3,
              label: {
                nl: 'Meer dan één keer per week',
                en: 'More than once a week',
              },
            },
            {
              value: 4,
              label: {
                nl: 'Ongeveer één keer per week',
                en: 'About once a week',
              },
            },
            {
              value: 5,
              label: { nl: 'Zelden of nooit', en: 'Rarely or never' },
            },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q02',
        epic_item_number: 26,
        input_label: {
          nl: 'Hoe goed kon u in de afgelopen 4 weken de urine ophouden?',
          en: 'Which of the following best describes your urinary control during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                nl: 'Kon de urine helemaal niet ophouden',
                en: 'No urinary control whatsoever',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Vaak ongewild verlies van druppels urine',
                en: 'Frequent dribbling',
              },
            },
            {
              value: 3,
              label: {
                nl: 'Af en toe ongewild verlies van druppels urine',
                en: 'Occasional dribbling',
              },
            },
            {
              value: 4,
              label: { nl: 'Geen ongewild urineverlies', en: 'Total control' },
            },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q03',
        epic_item_number: 27,
        input_label: {
          nl: 'Hoeveel verbanden of luiers gebruikte u om ongewild urineverlies op te vangen in de afgelopen 4 weken?',
          en: 'How many pads or adult diapers per day did you usually use to control leakage during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Geen verbanden of luiers', en: 'None' } },
            {
              value: 1,
              label: { nl: '1 verband of luier per dag', en: '1 pad per day' },
            },
            {
              value: 2,
              label: {
                nl: '2 verbanden of luiers per dag',
                en: '2 pads per day',
              },
            },
            {
              value: 3,
              label: {
                nl: '3 of meer verbanden of luiers per dag',
                en: '3 or more pads per day',
              },
            },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q04a',
        epic_item_number: 28,
        input_label: {
          nl: 'In hoeverre heeft u ongewild urineverlies, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was the dripping or leaking urine for you during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
    ],
    nbr_non_missing: 4,
  },
  {
    id: 'UIO',
    input_ids_in_subscale: [
      {
        input_id: 'EPIC26_Q04b',
        epic_item_number: 29,
        input_label: {
          nl: 'In hoeverre heeft u pijn of een branderig gevoel bij het plassen, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was pain or burning on urination for you during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q04c',
        epic_item_number: 30,
        input_label: {
          nl: 'In hoeverre heeft u bloed bij de urine, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was bleeding with urination for you during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q04d',
        epic_item_number: 31,
        input_label: {
          nl: 'In hoeverre heeft u een slappe straal of niet goed kunne uitplassen, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was a weak urine urine stream or incomplete emptying for you during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q04e',
        epic_item_number: 33,
        input_label: {
          nl: 'In hoeverre heeft u vaak plassen overdag, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was the need to urinate frequently during the day for you during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
    ],
    nbr_non_missing: 4,
  },
  {
    id: 'BOW',
    input_ids_in_subscale: [
      {
        input_id: 'EPIC26_Q06a',
        epic_item_number: 49,
        input_label: {
          nl: 'In hoeverre heeft u de drang om naar het toilet te gaan voor ontlasting, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was urgency to have a bowel movement for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q06b',
        epic_item_number: 50,
        input_label: {
          nl: 'In hoeverre heeft u de meer frequente / vakere ontlasting, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was increased frequency of bowel movements for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q06c',
        epic_item_number: 52,
        input_label: {
          nl: 'In hoeverre heeft u het verlies of onvoldoende controle over de ontlasting, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was losing control of your stools for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q06d',
        epic_item_number: 53,
        input_label: {
          nl: 'In hoeverre heeft u bloed bij de ontlasting, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was bloody stools for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q06e',
        epic_item_number: 54,
        input_label: {
          nl: 'In hoeverre heeft u pijn in de buik of het rectum, in de afgelopen 4 weken, als een probleem ervaren?',
          en: 'How big a problem, if any, was abdominal/pelvic/rectal pain for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q07',
        epic_item_number: 55,
        input_label: {
          nl: 'Over het geheel genomen, was de ontlasting (stoelgang) een probleem voor u in de afgelopen 4 weken?',
          en: 'Overall, how big a problem have your bowel habits been for you during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 2,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 3, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 4,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 5, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
    ],
    nbr_non_missing: 5,
  },
  {
    id: 'SEX',
    input_ids_in_subscale: [
      {
        input_id: 'EPIC26_Q08a',
        epic_item_number: 57,
        input_label: {
          nl: 'In de afgelopen 4 weken, hoe zou u voor uzelf het vermogen om een erectie te krijgen beoordelen?',
          en: 'How would you rate your ability to have an erection during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: { nl: 'Zeer slecht tot geen', en: 'Very poor to none' },
            },
            { value: 2, label: { nl: 'Slecht', en: 'Poor' } },
            { value: 3, label: { nl: 'Redelijk', en: 'Fair' } },
            { value: 4, label: { nl: 'Goed', en: 'Good' } },
            { value: 5, label: { nl: 'Zeer goed', en: 'Very good' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q08b',
        epic_item_number: 58,
        input_label: {
          nl: 'In de afgelopen 4 weken, hoe zou u voor uzelf het vermogen om een orgasme te krijgen beoordelen?',
          en: 'How would you rate your ability to reach an orgasm (climax) during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: { nl: 'Zeer slecht tot geen', en: 'Very poor to none' },
            },
            { value: 2, label: { nl: 'Slecht', en: 'Poor' } },
            { value: 3, label: { nl: 'Redelijk', en: 'Fair' } },
            { value: 4, label: { nl: 'Goed', en: 'Good' } },
            { value: 5, label: { nl: 'Zeer goed', en: 'Very good' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q09',
        epic_item_number: 59,
        input_label: {
          nl: 'Hoe zou u de kwaliteit van uw erecties omschrijven in de afgelopen 4 weken?',
          en: 'How would you describe the usual QUALITY of your erections during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1, label: { nl: 'Helemaal geen', en: 'None at all' } },
            {
              value: 2,
              label: {
                nl: 'Niet stevig genoeg voor enige seksuele activiteit',
                en: 'Not firm enough for any sexual activity',
              },
            },
            {
              value: 3,
              label: {
                nl: 'Alleen stevig genoeg voor masturbatie en voorspel ',
                en: 'Firm enough for masturbation and foreplay only',
              },
            },
            {
              value: 4,
              label: {
                nl: 'Stevig genoeg voor gemeenschap ',
                en: 'Firm enough for intercourse',
              },
            },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q10',
        epic_item_number: 60,
        input_label: {
          nl: 'In de afgelopen 4 weken, hoe vaak had u een erectie wanneer u dat wenste?',
          en: 'How would you describe the FREQUENCY of your erections during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                nl: 'Ik had NOOIT een erectie wanneer ik dat wenste',
                en: 'I NEVER had an erection when I wanted one',
              },
            },
            {
              value: 2,
              label: {
                nl: 'Ik had een erectie MINDER dan de helft van de keren',
                en: 'I had an erection LESS THAN HALF the time I wanted one',
              },
            },
            {
              value: 3,
              label: {
                nl: 'Ik had een erectie ONGEVEER de helft van de keren',
                en: 'I had an erection ABOUT HALF the time I wanted one',
              },
            },
            {
              value: 4,
              label: {
                nl: 'Ik had een erectie MEER dan de helft van de keren',
                en: 'I had an erection MORE THAN HALF the time I wanted one',
              },
            },
            {
              value: 5,
              label: {
                nl: 'Ik had ALTIJD een erectie wanneer ik dat wenste ',
                en: 'I had an erection WHENEVER I wanted one',
              },
            },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q11',
        epic_item_number: 64,
        input_label: {
          nl: 'Over het geheel, hoe zou u uw seksuele functioneren omschrijven in de afgelopen 4 weken?',
          en: 'Overall, how would you rate your ability to function sexually during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1, label: { nl: 'Zeer slecht', en: 'Very poor' } },
            { value: 2, label: { nl: 'Slecht', en: 'Poor' } },
            { value: 3, label: { nl: 'Redelijk', en: 'Fair' } },
            { value: 4, label: { nl: 'Goed', en: 'Good' } },
            { value: 5, label: { nl: 'Zeer goed', en: 'Very good' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q12',
        epic_item_number: 68,
        input_label: {
          nl: 'Over het geheel genomen, was uw seksueel functioneren of de afwezigheid ervan een probleem voor u in de afgelopen 4 weken?',
          en: 'Overall, how big a problem has your sexual function or lack of sexual function been for you during the last 4 weeks?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 2,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 3, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 4,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 5, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
    ],
    nbr_non_missing: 5,
  },
  {
    id: 'HOR',
    input_ids_in_subscale: [
      {
        input_id: 'EPIC26_Q13a',
        epic_item_number: 74,
        input_label: {
          nl: 'In hoeverre heeft u, in de afgelopen 4 weken, opvliegers als een probleem ervaren?',
          en: 'How big a problem during the last 4 weeks, if any, was hot flashes for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q13b',
        epic_item_number: 75,
        input_label: {
          nl: 'In hoeverre heeft u, in de afgelopen 4 weken, borstverandering / gevoeligheid als een probleem ervaren?',
          en: 'How big a problem during the last 4 weeks, if any, was breast tenderness/enlargement for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q13c',
        epic_item_number: 77,
        input_label: {
          nl: 'In hoeverre heeft u, in de afgelopen 4 weken, sombere buien / depressieve gevoelens als een probleem ervaren?',
          en: 'How big a problem during the last 4 weeks, if any, was feeling depressed for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q13d',
        epic_item_number: 78,
        input_label: {
          nl: 'In hoeverre heeft u, in de afgelopen 4 weken, gebrek aan energie als een probleem ervaren?',
          en: 'How big a problem during the last 4 weeks, if any, was lack of energy for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
      {
        input_id: 'EPIC26_Q13e',
        epic_item_number: 79,
        input_label: {
          nl: 'In hoeverre heeft u, in de afgelopen 4 weken, verandering in lichaamsgewicht als een probleem ervaren?',
          en: 'How big a problem during the last 4 weeks, if any, was change in body weight for you?',
        },
        input_type: {
          type: 'number',
          allowed_answers: [
            {
              value: 0,
              label: { nl: 'Geen probleem', en: 'No problem' },
            },
            {
              value: 1,
              label: { nl: 'Zeer klein probleem', en: 'Very small problem' },
            },
            { value: 2, label: { nl: 'Klein probleem', en: 'Small problem' } },
            {
              value: 3,
              label: { nl: 'Nogal een probleem', en: 'Moderate problem' },
            },
            { value: 4, label: { nl: 'Groot probleem', en: 'Big problem' } },
          ],
        },
      },
    ],
    nbr_non_missing: 4,
  },
]
