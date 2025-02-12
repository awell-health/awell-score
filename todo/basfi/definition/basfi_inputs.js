// @flow
import type { InputType } from '../../../../types/calculations.types'

export const BASFI_INPUTS: Array<InputType> = [
  {
    input_id: 'Q01',
    input_label: {
      en: 'Putting on your socks or tighs without help or aids (e.g. sock aid)',
      nl: 'Uw kousen of panty’s aantrekken zonder hulp of hulpmiddelen (b.v. kousentrekker)?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q02',
    input_label: {
      en: 'Bending forward from the waist to pick up a pen from the fl oor without an aid',
      nl: 'Vanuit de heup naar voren buigen om zonder hulp een pen van de grond te rapen?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q03',
    input_label: {
      en: 'Reaching up to a high shelf without help or aids (e.g. helping hand)',
      nl: 'Iets van een hoge plank pakken zonder hulp of hulpmiddelen (b.v. helpende hand)?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q04',
    input_label: {
      en: 'Getting up out of an armless dining room chair without using your hands or any other help',
      nl: 'Rechtop gaan staan vanaf een eetkamerstoel zonder armleuning, zonder uw handen of andere hulp te gebruiken?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q05',
    input_label: {
      en: 'Getting up off the floor without help from lying on your back',
      nl: 'Zonder hulp overeind komen als u op uw rug op de grond ligt?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q06',
    inverse: true,
    input_label: {
      en: 'Standing unsupported for 10 minutes without discomfort',
      nl: 'Gedurende 10 minuten zonder steun blijven staan zonder ongemakken?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q07',
    inverse: true,
    input_label: {
      en: 'Climbing 12–15 steps without using a handrail or walking aid, one foot on each step',
      nl: 'Een trap van 12-15 treden opgaan zonder een leuning of wandelstok of iets dergelijke te gebruiken. Eén voet op elke trede?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q08',
    inverse: true,
    input_label: {
      en: 'Looking over your shoulder without turning your body',
      nl: 'Over uw schouder kijken zonder uw lichaam te draaien?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q09',
    inverse: true,
    input_label: {
      en: 'Doing physically demanding activities (e.g. physiotherapy exercises, gardening or sports)',
      nl: 'Fysiek zware activiteiten uitvoeren (b.v. fysiotherapie oefeningen, tuinieren of sport)?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  },
  {
    input_id: 'Q10',
    inverse: true,
    input_label: {
      en: 'Doing a full day‘s activities whether it be at home or at work',
      nl: 'Een volledige dagtaak thuis of op het werk uitvoeren?'
    },
    input_type: {
      type: 'number',
      component: 'slider',
      range: {
        min: {
          value: 0,
          label: { en: 'Easy', nl: 'Gemakkelijk' }
        },
        max: {
          value: 10,
          label: { en: 'Impossible', nl: 'Onmogelijk' }
        }
      }
    },
    required: true
  }
]
