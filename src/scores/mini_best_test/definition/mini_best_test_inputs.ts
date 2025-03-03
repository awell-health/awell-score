import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const MINI_BEST_TEST_INPUTS = {
  MINI_BEST_TEST_Q01: {
    label: { nl: 'Van zit naar stand', en: 'Sit to stand' },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: gaat staan zonder de handen te gebruiken en hervindt zelfstandig de balans',
            en: 'Normal: Comes to stand without use of hands and stabilizes independently',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: gaat staan met gebruik van de handen bij de eerste poging',
            en: 'Moderate: Comes to stand WITH use of hands on first attempt',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: kan niet zonder hulp opstaan vanaf de stoel of heeft meerdere pogingen nodig waarbij de handen worden gebruikt',
            en: 'Severe: Unable to stand up from chair without assistance, OR needs several attempts with use of hands',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q02: {
    label: { nl: 'Op de tenen staan', en: 'Rise to toes' },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: 3 sec lang stabiel op maximale hoogte',
            en: 'Normal: Stable for 3 s with maximum height',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: hielen komen omhoog maar niet op maximale hoogte (lager dan wanneer de handen worden vastgehouden) of waarneembare instabiliteit gedurende 3 sec',
            en: 'Moderate: Heels up, but not full range (smaller than when holding hands), OR noticeable instability for 3 s',
          },
        },
        { value: 0, label: { nl: 'Ernstig: <3 sec', en: 'Severe: < 3 s' } },
      ],
    },
    info: { nl: 'Op de tenen staan', en: '' },
  },
  MINI_BEST_TEST_Q03_LEFT: {
    label: {
      nl: 'Op één been staan (links)',
      en: 'Stand on one leg (left)',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        { value: 2, label: { nl: 'Normaal: 20 sec', en: 'Normal: 20 s' } },
        {
          value: 1,
          label: { nl: 'Matig: <20 sec', en: 'Moderate: < 20 s' },
        },
        {
          value: 0,
          label: { nl: 'Ernstig: kan het niet', en: 'Severe: Unable' },
        },
      ],
    },
    info: { nl: 'Op één been staan (links)', en: '' },
  },
  MINI_BEST_TEST_Q03_RIGHT: {
    label: {
      nl: 'Op één been staan (rechts)',
      en: 'Stand on one leg (right)',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        { value: 2, label: { nl: 'Normaal: 20 sec', en: 'Normal: 20 s' } },
        {
          value: 1,
          label: { nl: 'Matig: <20 sec', en: 'Moderate: < 20 s' },
        },
        {
          value: 0,
          label: { nl: 'Ernstig: kan het niet', en: 'Severe: Unable' },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q04: {
    label: {
      nl: 'Corrigerende stappen ter compensatie - vooruit',
      en: 'Compensatory stepping correction - forward',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: hervindt zelfstandig de balans door een enkele, grote stap te zetten (een tweede stap om recht te gaan staan is toegestaan)',
            en: 'Normal: Recovers independently with a single, large step (second realignment step is allowed)',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: zet meer dan één stap om de balans te hervinden',
            en: 'Moderate: More than one step used to recover equilibrium',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: zet geen stap, of zou zonder te zijn opgevangen gevallen zijn, of valt spontaan',
            en: 'Severe: No step, OR would fall if not caught, OR falls spontaneously',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q05: {
    label: {
      nl: 'Corrigerende stappen ter compensatie – achteruit (=Push & Release test)',
      en: 'Compensatory stepping correction - backward',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: hervindt zelfstandig de balans door een enkele, grote stap te zetten',
            en: 'Normal: Recovers independently with a single, large step',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: zet meer dan één stap om de balans te hervinden',
            en: 'Moderate: More than one step used to recover equilibrium',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: zet geen stap, of zou zonder te zijn opgevangen gevallen zijn, of valt spontaan',
            en: 'Severe: No step, OR would fall if not caught, OR falls spontaneously',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q06_LEFT: {
    label: {
      nl: 'Corrigerende stappen ter compensatie naar links',
      en: 'Compensatory stepping correction - lateral (left)',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: hervindt zelfstandig de balans met een enkele stap (zowel kruislings als opzij is prima)',
            en: 'Normal: Recovers independently with 1 step (crossover or lateral OK)',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: heeft meerdere stappen nodig om de balans te hervinden',
            en: 'Moderate: Several steps to recover equilibrium',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: valt of kan geen stap zetten',
            en: 'Severe: Falls, or cannot step',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q06_RIGHT: {
    label: {
      nl: 'Corrigerende stappen ter compensatie naar rechts',
      en: 'Compensatory stepping correction - lateral (right)',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: hervindt zelfstandig de balans met een enkele stap (zowel kruislings als opzij is prima)',
            en: 'Normal: Recovers independently with 1 step (crossover or lateral OK)',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: heeft meerdere stappen nodig om de balans te hervinden',
            en: 'Moderate: Several steps to recover equilibrium',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: valt of kan geen stap zetten',
            en: 'Severe: Falls, or cannot step',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q07: {
    label: {
      nl: 'Staan (voeten naast elkaar); ogen open, op stevige ondergrond',
      en: 'Stance (feet together); eyes open, firm surface',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        { value: 2, label: { nl: 'Normaal: 30 sec', en: 'Normal: 30 s' } },
        {
          value: 1,
          label: { nl: 'Matig: <30 sec', en: 'Moderate: < 30 s' },
        },
        {
          value: 0,
          label: { nl: 'Ernstig: kan het niet', en: 'Severe: Unable' },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q08: {
    label: {
      nl: 'Staan (voeten naast elkaar); ogen dicht, op schuimrubber',
      en: 'Stance (feet together); eyes closed, foam surface',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        { value: 2, label: { nl: 'Normaal: 30 sec', en: 'Normal: 30 s' } },
        {
          value: 1,
          label: { nl: 'Matig: <30 sec', en: 'Moderate: < 30 s' },
        },
        {
          value: 0,
          label: { nl: 'Ernstig: kan het niet', en: 'Severe: Unable' },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q09: {
    label: {
      nl: 'Helling - ogen dicht',
      en: 'Incline - Eyes closed',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: blijft zelfstandig 30 sec staan en staat verticaal ten opzichte van de grond',
            en: 'Normal: Stands independently 30 s and aligns with gravity',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: blijft zelfstandig <30 sec staan OF staat verticaal ten opzichte van de schuine ondergrond',
            en: 'Moderate: Stands independently <30 s OR aligns with surface',
          },
        },
        {
          value: 0,
          label: { nl: 'Ernstig: kan het niet', en: 'Severe: Unable' },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q10: {
    label: {
      nl: 'Veranderen van loopsnelheid',
      en: 'Change in gait speed',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: verandert duidelijk van loopsnelheid zonder disbalans',
            en: 'Normal: Significantly changes walking speed without imbalance',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: kan niet van loopsnelheid veranderen of tekenen van disbalans',
            en: 'Moderate: Unable to change walking speed or signs of imbalance',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: kan niet duidelijk van loopsnelheid veranderen EN tekenen van disbalans',
            en: 'Severe: Unable to achieve significant change in walking speed AND signs of imbalance',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q11: {
    label: {
      nl: 'Lopen met draaien van het hoofd - naar links en rechts',
      en: 'Walk with head turns - horizontal',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: draait het hoofd zonder verandering in looptempo en met goede balans',
            en: 'Normal: performs head turns with no change in gait speed and good balance',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: draait het hoofd, maar met vertraging van het looptempo',
            en: 'Moderate: performs head turns with reduction in gait speed',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: draait het hoofd, maar met disbalans',
            en: 'Severe: performs head turns with imbalance',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q12: {
    label: {
      nl: 'Lopen met draai om de as',
      en: 'Walk with pivot turns',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: draait SNEL om (<3 stappen) met voeten dicht bij elkaar en goede balans',
            en: 'Normal: Turns with feet close FAST (< 3 steps) with good balance',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: draait LANGZAAM om (>4 stappen) met voeten dicht bij elkaar en goede balans',
            en: 'Moderate: Turns with feet close SLOW (>4 steps) with good balance',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: kan op geen enkele snelheid zonder disbalans omdraaien met de voeten dicht bij elkaar',
            en: 'Severe: Cannot turn with feet close at any speed without imbalance',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q13: {
    label: {
      nl: 'Over een obstakel stappen',
      en: 'Step over obstacles',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: kan over de doos stappen met minimale verandering in de loopsnelheid en met een goede balans',
            en: 'Normal: Able to step over box with minimal change of gait speed and with good balance',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: stapt over de doos, maar raakt deze OF laat voorzichtigheid zien door te vertragen',
            en: 'Moderate: Steps over box but touches box OR displays cautious behavior by slowing gait',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: kan niet over de doos stappen OF loopt langs de doos',
            en: 'Severe: Unable to step over box OR steps around box',
          },
        },
      ],
    },
  },
  MINI_BEST_TEST_Q14: {
    label: {
      nl: 'Timed Get-up & Go met dubbeltaak [loopafstand 3 meter]',
      en: 'Timed Up & Go with dual task [3 meter walk]',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        {
          value: 2,
          label: {
            nl: 'Normaal: geen duidelijk verschil in het zitten, staan of lopen tussen de TUG met en de TUG zonder terugtellen als dubbeltaak',
            en: 'Normal: No noticeable change in sitting, standing or walking while backward counting when compared to TUG without Dual Task',
          },
        },
        {
          value: 1,
          label: {
            nl: 'Matig: het lopen beïnvloedt het tellen of de loopsnelheid is bij de TUG met dubbeltaak >10% lager dan bij de TUG zonder dubbeltaak',
            en: 'Moderate: Dual Task affects either counting OR walking (>10%) when compared to the TUG without Dual Task',
          },
        },
        {
          value: 0,
          label: {
            nl: 'Ernstig: stopt tijdens het lopen met tellen of stopt tijdens het tellen met lopen',
            en: 'Severe: Stops counting while walking OR stops walking while counting',
          },
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
