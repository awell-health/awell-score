import { type DefaultSubscaleType } from '../../../src/types/calculations.types'

const ALLOWED_ANSWERS = [
  { value: 0, label: { nl: 'Nee' } },
  { value: 1, label: { nl: 'Zelden' } },
  { value: 2, label: { nl: 'Soms' } },
  { value: 3, label: { nl: 'Vaak' } },
  { value: 4, label: { nl: 'Meestal' } },
]

//@ts-expect-error to do
const add_allowed_answers = input => ({
  ...input,
  type: { type: 'number', allowed_answers: ALLOWED_ANSWERS },
})

export const IAS_SCALES: Array<DefaultSubscaleType> = [
  {
    id: 'HEALTH_ANXIETY',
    input_ids_in_subscale: [
      {
        input_id: 'IAS_Q02',
        label: {
          nl: 'Bent u bezorgd dat u in de toekomst een ernstige ziekte zou kunnen krijgen?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q03',
        label: {
          nl: 'Maakt de gedachte aan een ernstige ziekte u bang?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q04',
        label: {
          nl: 'Als u pijn heeft, maakt u zich dan zorgen dat het mogelijk door een ernstige ziekte wordt veroorzaakt?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q06',
        label: {
          nl: 'Als pijn een week of langer aanhoudt, gelooft u dan dat u een ernstige ziekte heeft?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q13',
        label: {
          nl: 'Bent u bang voor nieuws dat u aan de dood herinnert (zoals begrafenissen, rouw-advertenties)?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q14',
        label: { nl: 'Maakt de gedachte aan de dood u bang?', en: '' },
      },
      {
        input_id: 'IAS_Q15',
        label: {
          nl: 'Bent u bang dat u spoedig zou kunnen overlijden?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q16',
        label: {
          nl: 'Bent u bang dat u kanker zou kunnen hebben?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q17',
        label: {
          nl: 'Bent u bang dat u een ziekte aan uw hart zou kunnen hebben?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q19',
        label: {
          nl: 'Als u leest of hoort over een ziekte, krijgt u dan verschijnselen die vergelijkbaar zijn met die van de ziekte?',
          en: '',
        },
      },
      {
        input_id: 'IAS_Q21',
        label: {
          nl: 'Als u iets in uw lichaam voelt, maakt u zich daar dan zorgen over?',
          en: '',
        },
      },
    ].map(add_allowed_answers),
  },
  {
    id: 'ILNESS_BEHAVIOUR',
    input_ids_in_subscale: [
      {
        input_id: 'IAS_Q23',
        label: { nl: 'Hoe vaak gaat u naar een arts?', en: '' },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Bijna nooit' } },
            { value: 1, label: { nl: 'Zelden' } },
            { value: 2, label: { nl: 'Ongeveer 4 maal per jaar' } },
            { value: 3, label: { nl: 'Ongeveer één maal per maand' } },
            { value: 4, label: { nl: 'Ongeveer één maal per week' } },
          ],
        },
      },
      {
        input_id: 'IAS_Q24',
        label: {
          nl: 'Bij hoeveel verschillende artsen, homeopaten of andere genezers bent u in het afgelopen jaar geweest?',
          en: '',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Geen' } },
            { value: 1, label: { nl: '1' } },
            { value: 2, label: { nl: '2 of 3' } },
            { value: 3, label: { nl: '4 of 5' } },
            { value: 4, label: { nl: '6 of meer' } },
          ],
        },
      },
      {
        input_id: 'IAS_Q25',
        label: {
          nl: 'Hoe vaak bent u in het afgelopen jaar behandeld? (Bijvoorbeeld medicijnen, verandering van medicijnen, operatie, enz.)',
          en: '',
        },
        type: {
          type: 'number',
          allowed_answers: [
            { value: 0, label: { nl: 'Helemaal niet' } },
            { value: 1, label: { nl: '1 keer' } },
            { value: 2, label: { nl: '2 of 3 keer' } },
            { value: 3, label: { nl: '4 of 5 keer' } },
            { value: 4, label: { nl: '6 of meer keer' } },
          ],
        },
      },
      {
        input_id: 'IAS_Q27',
        label: {
          nl: 'Verhinderen uw lichamelijke klachten u te werken?',
          en: '',
        },
        type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS,
        },
      },
      {
        input_id: 'IAS_Q28',
        label: {
          nl: 'Verhinderen uw lichamelijk klachten u om u te concentreren op wat u aan het doen bent?',
          en: '',
        },
        type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS,
        },
      },
      {
        input_id: 'IAS_Q29',
        label: {
          nl: 'Verhinderen uw lichamelijke klachten u om uzelf te vermaken?',
          en: '',
        },
        type: {
          type: 'number',
          allowed_answers: ALLOWED_ANSWERS,
        },
      },
    ],
  },
]
