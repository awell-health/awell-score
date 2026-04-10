import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const WOOS_INPUTS = {
  WOOS_Q01: {
    label: {
      en: 'How much pain do you experience in your shoulder with movement?',
      fr: 'À quel point avez-vous ressenti une douleur dans l\u2019épaule en effectuant un mouvement?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No pain', fr: 'Aucune douleur' } },
        max: { label: { en: 'Extreme pain', fr: 'Douleur extrême' } },
      },
    },
  },
  WOOS_Q02: {
    label: {
      en: 'How much constant, nagging pain do you have in your shoulder?',
      fr: 'À quel point la douleur que vous avez ressentie dans l\u2019épaule a-t-elle été constante, lancinante?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No pain', fr: 'Aucune douleur' } },
        max: { label: { en: 'Extreme pain', fr: 'Douleur extrême' } },
      },
    },
  },
  WOOS_Q03: {
    label: {
      en: 'How much weakness do you experience in your shoulder?',
      fr: 'À quel point avez-vous ressenti une faiblesse dans l\u2019épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No weakness', fr: 'Aucune faiblesse' } },
        max: { label: { en: 'Extreme weakness', fr: 'Faiblesse extrême' } },
      },
    },
  },
  WOOS_Q04: {
    label: {
      en: 'How much stiffness do you experience in your shoulder?',
      fr: 'À quel point avez-vous ressenti une raideur au niveau de l\u2019épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No stiffness', fr: 'Aucune raideur' } },
        max: { label: { en: 'Extreme stiffness', fr: 'Raideur extrême' } },
      },
    },
  },
  WOOS_Q05: {
    label: {
      en: 'How much grinding do you experience in your shoulder?',
      fr: 'À quel point avez-vous été gêné(e) par des claquements/frottements/grincements dans votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'None', fr: 'Aucune gêne' } },
        max: { label: { en: 'Extreme', fr: 'Gêne extrême' } },
      },
    },
  },
  WOOS_Q06: {
    label: {
      en: 'How much is your shoulder affected by the weather?',
      fr: 'À quel point votre épaule est-elle affectée par les changements météorologiques?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'Not affected', fr: 'Pas du tout affectée' } },
        max: {
          label: { en: 'Extremely affected', fr: 'Extrêmement affectée' },
        },
      },
    },
  },
  WOOS_Q07: {
    label: {
      en: 'How much difficulty do you experience working or reaching above shoulder level?',
      fr: 'À quel point a-t-il été difficile pour vous de travailler au-dessus de la hauteur des épaules ou d\u2019atteindre quelque chose à ce niveau?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q08: {
    label: {
      en: 'How much difficulty do you experience with lifting objects (eg. grocery bags, garbage can etc.) below shoulder level?',
      fr: 'À quel point a-t-il été difficile pour vous de soulever des objets (par exemple, des sacs d\u2019épicerie, des poubelles, etc.) en dessous du niveau de l\u2019épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q09: {
    label: {
      en: 'How much difficulty do you experience doing repetitive motions below shoulder level such as raking, sweeping or washing floors because of your shoulder?',
      fr: 'À quel point a-t-il été difficile pour vous, à cause de votre épaule, d\u2019effectuer des mouvements répétitifs en dessous du niveau de l\u2019épaule, par exemple ratisser, balayer ou laver le sol?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q10: {
    label: {
      en: 'How much difficulty do you experience pushing or pulling forcefully because of your shoulder?',
      fr: 'À quel point a-t-il été difficile pour vous de pousser ou de tirer quelque chose avec force à cause de votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q11: {
    label: {
      en: 'How troubled are you by an increase in pain in your shoulder after activities?',
      fr: 'À quel point avez-vous été gêné(e) par une augmentation de la douleur dans votre épaule après certaines activités?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'Not at all', fr: 'Aucune gêne' } },
        max: {
          label: { en: 'Extremely troubled', fr: 'Gêne extrême' },
        },
      },
    },
  },
  WOOS_Q12: {
    label: {
      en: 'How much difficulty do you have sleeping because of your shoulder?',
      fr: 'À quel point avez-vous eu de la difficulté à dormir à cause de votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q13: {
    label: {
      en: 'How much difficulty have you experienced with styling your hair because of your shoulder?',
      fr: 'À quel point avez-vous eu de la difficulté à vous coiffer à cause de votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q14: {
    label: {
      en: 'How much difficulty do you have maintaining your desired level of fitness because of your shoulder?',
      fr: 'À quel point a-t-il été difficile pour vous de maintenir le niveau de forme physique que vous désiriez à cause de votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q15: {
    label: {
      en: 'How much difficulty do you experience reaching behind to tuck in a shirt, get a wallet from your back pocket or do up clothing because of your shoulder?',
      fr: 'À quel point a-t-il été difficile pour vous de mettre les bras vers l\u2019arrière pour ajuster un vêtement dans le dos, prendre votre portefeuille dans la poche arrière de votre pantalon ou boutonner des vêtements dans le dos à cause de votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q16: {
    label: {
      en: 'How much difficulty do you have dressing or undressing?',
      fr: 'À quel point a-t-il été difficile pour vous de vous habiller ou de vous déshabiller à cause de votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No difficulty', fr: 'Aucune difficulté' } },
        max: {
          label: { en: 'Extreme difficulty', fr: 'Difficulté extrême' },
        },
      },
    },
  },
  WOOS_Q17: {
    label: {
      en: 'How much frustration or discouragement do you feel because of your shoulder?',
      fr: 'À quel point vous êtes-vous senti(e) frustré(e) ou découragé(e) à cause de votre épaule?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'No frustration', fr: 'Pas du tout frustré(e) ou découragé(e)' } },
        max: {
          label: {
            en: 'Extreme frustration',
            fr: 'Extrêmement frustré(e) ou découragé(e)',
          },
        },
      },
    },
  },
  WOOS_Q18: {
    label: {
      en: 'How worried are you about what will happen to your shoulder in the future?',
      fr: 'À quel point avez-vous été inquiet(ète) de ce qui va arriver à votre épaule dans le futur?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'Not worried at all', fr: 'Aucune inquiétude' } },
        max: {
          label: { en: 'Extremely worried', fr: 'Inquiétude extrême' },
        },
      },
    },
  },
  WOOS_Q19: {
    label: {
      en: 'How much of a burden do you feel you are on others?',
      fr: 'À quel point avez-vous eu l\u2019impression d\u2019être un fardeau pour les autres?',
    },
    type: z.number().min(0).max(100),
    uiOptions: {
      component: 'slider' as const,
      range: {
        min: { label: { en: 'Not at all', fr: 'Pas du tout' } },
        max: { label: { en: 'Extreme burden', fr: 'Extrêmement' } },
      },
    },
  },
} satisfies ScoreInputSchemaType
