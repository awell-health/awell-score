import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const BASFI_INPUTS = {
  Q01: {
    label: {
      en: 'Putting on your socks or tighs without help or aids (e.g. sock aid)',
      nl: 'Uw kousen of panty’s aantrekken zonder hulp of hulpmiddelen (b.v. kousentrekker)?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q02: {
    label: {
      en: 'Bending forward from the waist to pick up a pen from the fl oor without an aid',
      nl: 'Vanuit de heup naar voren buigen om zonder hulp een pen van de grond te rapen?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q03: {
    label: {
      en: 'Reaching up to a high shelf without help or aids (e.g. helping hand)',
      nl: 'Iets van een hoge plank pakken zonder hulp of hulpmiddelen (b.v. helpende hand)?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q04: {
    label: {
      en: 'Getting up out of an armless dining room chair without using your hands or any other help',
      nl: 'Rechtop gaan staan vanaf een eetkamerstoel zonder armleuning, zonder uw handen of andere hulp te gebruiken?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q05: {
    label: {
      en: 'Getting up off the floor without help from lying on your back',
      nl: 'Zonder hulp overeind komen als u op uw rug op de grond ligt?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q06: {
    label: {
      en: 'Standing unsupported for 10 minutes without discomfort',
      nl: 'Gedurende 10 minuten zonder steun blijven staan zonder ongemakken?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q07: {
    label: {
      en: 'Climbing 12–15 steps without using a handrail or walking aid, one foot on each step',
      nl: 'Een trap van 12-15 treden opgaan zonder een leuning of wandelstok of iets dergelijke te gebruiken. Eén voet op elke trede?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q08: {
    label: {
      en: 'Looking over your shoulder without turning your body',
      nl: 'Over uw schouder kijken zonder uw lichaam te draaien?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q09: {
    label: {
      en: 'Doing physically demanding activities (e.g. physiotherapy exercises, gardening or sports)',
      nl: 'Fysiek zware activiteiten uitvoeren (b.v. fysiotherapie oefeningen, tuinieren of sport)?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
  Q10: {
    label: {
      en: 'Doing a full day‘s activities whether it be at home or at work',
      nl: 'Een volledige dagtaak thuis of op het werk uitvoeren?',
    },
    type: z.number().min(0).max(10),
    uiOptions: {
      component: 'slider',
      range: {
        min: {
          label: { en: 'Easy', nl: 'Gemakkelijk' },
        },
        max: {
          label: { en: 'Impossible', nl: 'Onmogelijk' },
        },
      },
    },
  },
} satisfies ScoreInputSchemaType
