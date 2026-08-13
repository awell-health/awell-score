# Reference: score file templates and edge cases

Companion to [SKILL.md](SKILL.md). Templates below use a fictional `EXAMPLE`
instrument with two subscales.

## Input type table

| Answer shape | `type` |
| --- | --- |
| Boolean | `z.boolean()` |
| Free number | `z.number()`, with `.min()` / `.max()` for a range |
| Free text | `z.string()` |
| Date | `z.string().min(1).transform(compactDateToIsoDate).pipe(z.coerce.date())` |
| Fixed numeric options | `z.union([z.literal(0), z.literal(1), ...])` |
| Fixed string options | `z.union([z.literal('a'), z.literal('b'), ...])` |
| Multi-select, numeric | `z.array(z.union([z.literal(0), ...]))` |
| Multi-select, string | `z.array(z.union([z.literal('a'), ...]))` |

`DateInputType` requires a string-to-date pipeline, not a bare `z.coerce.date()`;
`src/scores/age_calc/definition/age_calc_inputs.ts` is the only date input in the
repository and the shape to copy, including the `compactDateToIsoDate`
transformer from `src/lib/zod/transformers/`.

Append `.optional()` to allow a missing answer. Without it the input is
required and `calculate` never runs when it is absent — a `ZodError` is thrown
instead. Use `.optional()` when the instrument tolerates omissions and you handle
them inside `calculate`.

Outputs are limited to `z.number()`, `z.string()` and `z.boolean()`, must carry a
`label`, and cannot be optional. A result may still be `null` at runtime.

Optional metadata on an input: `label`, `info`, `unit`, `uiOptions`. On an output:
`label` (required), `unit`, `interpretation`, `terminology`.

Labels are `LabelType` — any of `en`, `nl`, `fr`, `pt`, `es`, `de`, `it`, `pl`.
`en` is expected in practice. Only add a translation you actually have; do not
machine-translate item text.

## definition/example_inputs.ts

```typescript
import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const EXAMPLE_INPUTS = {
  EXAMPLE_Q01: {
    label: { en: 'Item 1 wording' },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Never' } },
        { value: 1, label: { en: 'Sometimes' } },
        { value: 2, label: { en: 'Often' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
```

When many items share one answer scale, hoist it into a local `INPUT_TYPES`
record and spread it per item, adding only the label. `audit_inputs.ts` does
this with four shared scales and is the pattern to copy for long questionnaires.

```typescript
const INPUT_TYPES: Record<string, EnumNumberInputType> = {
  frequency: { type: z.union([...]).optional(), uiOptions: { options: [...] } },
}

export const EXAMPLE_INPUTS = {
  EXAMPLE_Q01: { ...INPUT_TYPES.frequency, label: { en: '...' } },
} satisfies ScoreInputSchemaType
```

A numeric input rendered as a slider uses the `SimpleNumberInputType` UI variant:

```typescript
uiOptions: {
  component: 'slider',
  range: {
    min: { value: 0, label: { en: 'No pain' } },
    max: { value: 10, label: { en: 'Worst pain' } },
  },
}
```

## definition/example_output.ts

```typescript
import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const EXAMPLE_OUTPUT = {
  TOTAL: { label: { en: 'Total score' }, type: z.number() },
  SUBSCALE_A: { label: { en: 'Subscale A score' }, type: z.number() },
  SUBSCALE_B: { label: { en: 'Subscale B score' }, type: z.number() },
} satisfies ScoreOutputSchemaType
```

Put `TOTAL` first — tests assert result ids in declaration order.

FHIR terminology is optional and goes on the output it describes. Only add codes
you have verified in LOINC/SNOMED; a wrong code is worse than none:

```typescript
terminology: {
  code: {
    coding: [
      { system: 'http://loinc.org', code: '44261-6', display: '...' },
      { system: 'http://snomed.info/sct', code: '720433000', display: '...' },
    ],
    text: 'PHQ-9',
  },
}
```

`terminology.category` sits on the score object rather than an output — see
`src/scores/bmi/metric/bmi.ts`, which categorises BMI as `vital-signs`.

## definition/example_subscales.ts

```typescript
export type SubscaleType = 'SUBSCALE_A' | 'SUBSCALE_B'

export const EXAMPLE_SUBSCALES: Record<SubscaleType, string[]> = {
  SUBSCALE_A: ['EXAMPLE_Q01', 'EXAMPLE_Q02'],
  SUBSCALE_B: ['EXAMPLE_Q03'],
}
```

## definition/index.ts

```typescript
export * from './example_output'
export * from './example_inputs'
export * from './example_subscales'
```

## example.ts

```typescript
import { pick, sum } from 'lodash'
import { ScoreType } from '../../types'
import {
  EXAMPLE_INPUTS,
  EXAMPLE_OUTPUT,
  EXAMPLE_SUBSCALES,
  type SubscaleType,
} from './definition'

export const example: ScoreType<
  typeof EXAMPLE_INPUTS,
  typeof EXAMPLE_OUTPUT
> = {
  name: 'Example Instrument (EXAMPLE)',
  readmeLocation: __dirname,
  inputSchema: EXAMPLE_INPUTS,
  outputSchema: EXAMPLE_OUTPUT,
  calculate: ({ data }) => {
    const subscaleScore = (subscale: SubscaleType) =>
      sum(
        Object.values(pick(data, EXAMPLE_SUBSCALES[subscale])).filter(
          v => v !== undefined,
        ),
      )

    const a = subscaleScore('SUBSCALE_A')
    const b = subscaleScore('SUBSCALE_B')

    return { TOTAL: a + b, SUBSCALE_A: a, SUBSCALE_B: b }
  },
}
```

Note what this does with omissions: filters `undefined` and sums the rest, so an
unanswered item contributes `0`. That is only correct if the manual says so.

## __testdata__/example_responses.ts

```typescript
export const minimum_response = { EXAMPLE_Q01: 0, EXAMPLE_Q02: 0, EXAMPLE_Q03: 0 }
export const median_response = { EXAMPLE_Q01: 1, EXAMPLE_Q02: 1, EXAMPLE_Q03: 1 }
export const maximum_response = { EXAMPLE_Q01: 2, EXAMPLE_Q02: 2, EXAMPLE_Q03: 2 }

/**
 * Expected score = 3
 */
export const random_response = { EXAMPLE_Q01: 2, EXAMPLE_Q02: 1, EXAMPLE_Q03: 0 }
```

## example.test.ts

```typescript
import { ZodError } from 'zod'
import { Score } from '../../classes'
import { example } from './example'
import { maximum_response, minimum_response } from './__testdata__/example_responses'

const example_calculation = new Score(example)

describe('example', function () {
  describe('basic assumptions', function () {
    const outcome = example_calculation.calculate({ payload: minimum_response })

    it('should return 3 calculation results', function () {
      expect(Object.keys(outcome).length).toEqual(3)
    })

    it('should contain all the correct calculation ids', function () {
      expect(Object.keys(outcome)).toEqual(['TOTAL', 'SUBSCALE_A', 'SUBSCALE_B'])
    })
  })

  describe('validation', function () {
    it('should throw a ZodError on an out-of-range answer', function () {
      try {
        example_calculation.calculate({ payload: { EXAMPLE_Q01: 10 } })
      } catch (error) {
        expect(error).toBeInstanceOf(ZodError)
      }
    })
  })

  describe('score calculation', function () {
    it('should return the maximum total', function () {
      const outcome = example_calculation.calculate({ payload: maximum_response })
      expect(outcome.TOTAL).toEqual(6)
    })
  })
})
```

Scores are exercised through `new Score(definition)`, not by calling `calculate`
directly — the `Score` wrapper is what applies Zod validation and casting, so
calling the raw function skips the behaviour under test.

`src/scores/audit/audit.test.ts` is the fullest example: result count, result
ids, input ids, subscale membership, three ZodError cases (above range, below
range, wrong type), empty response, and all four fixtures.

154 of 166 test files import `ScoreLibrary` purely for a
`expect(ScoreLibrary).toHaveProperty('<name>')` registration assertion, which
pulls in all 124 scores. Don't extend that pattern: **if a test only needs one
score, import that score directly.**

## README structure and vocabulary

Sections, in order. Omit any that has nothing to say — an empty or negative
section is worse than no section:

```markdown
# <ABBREV> (<Full instrument name>)

## Introduction        provenance, what it measures, recall period, authorship
## Questionnaire structure   item count, answer range, the value/answer table
## Scoring             each result, its range, and the formula block
## Subscales           only when the instrument has them
## Interpretation      cut-offs, direction, and the limits of the measure
## Licensing           only when there is something specific to say
## References          numbered, cited inline as [1], [2]
```

Identifiers belong in the formula block, not in prose:

```
RAW_SCORE        = WHO5_Q01 + WHO5_Q02 + WHO5_Q03 + WHO5_Q04 + WHO5_Q05
PERCENTAGE_SCORE = RAW_SCORE × 4
```

Vocabulary swaps for prose:

| Instead of | Write |
| --- | --- |
| payload | the answers, the completed questionnaire |
| a payload missing any of them fails validation | an incomplete questionnaire does not produce a score |
| input / input id | item, question |
| output / result id | result, score |
| the score returns `null` | no score is produced |
| six-point scale | 0-5 scale |
| optional / required input | items the instrument allows to be skipped / all items are required |
| schema, validation, ZodError, fixture | (nothing — these are implementation, not documentation) |

State the direction of the scale ("higher scores indicate better well-being")
because it is genuinely ambiguous across instruments. Do not state that items are
*not* reverse scored, that there is *no* conversion table, or that the manual is
*silent* on something — none of that changes what the reader does.

Where the interpretation section gives a cut-off, say what the cut-off is for.
`who_5` is the model: it gives the threshold, then notes the instrument is a
screening measure and a score below it warrants assessment rather than
establishing a diagnosis.

## Score behaviour worth knowing

`Score.calculate` accepts options that change failure behaviour:

- `strictMode` (default `false`) — when off, inputs are cast toward their schema
  type first, so `'3'` is accepted for a numeric input. Turn it on to reject
  serialized values.
- `nullOnMissingInputs` (default `false`) — when on, returns `null` for every
  result if the only validation problems are missing required inputs. Other Zod
  issues still throw.

`Score.simulate()` generates a valid input payload from the schema and runs the
calculation. It is the fastest way to sanity-check a new schema, and consumers
use it for playground examples — so a schema that cannot be simulated is a bug.

`Score.apiSchema` is the consumer-facing contract: score id, name, description
(the README rendered to HTML), input and output schemas, terminology and the two
licensing fields. Anything that changes its shape belongs in `CHANGELOG.md`.

## Edge-case patterns

**Interpretation string alongside the number.** Keep the lookup table in
`definition/` as a `Record<string, T>` keyed by total score, with a union type for
the categories, then index it in `calculate`. See
`src/scores/phq_9/definition/phq9_interpretation.ts`.

**Published conversion table.** Instruments like HOOS-PS and KOOS-PS convert a
raw sum to an interval score via a table from the manual. Transcribe it into
`definition/<score>_conversion_table.ts` verbatim; never interpolate a value the
table does not contain.

**Reverse-scored items.** Reverse explicitly and name the maximum, as
`src/scores/pss_4/pss_4.ts` does:

```typescript
const MAX_SCORE = 4
const reversedValues = [data.PSS4_Q02, data.PSS4_Q03].map(i => MAX_SCORE - i)
```

**Score not computable.** Guard early and return `null` for every output key —
`src/scores/psk/psk.ts` returns `null` when no activity was answered rather than
reporting a mean of nothing.

**Multiple variants of one instrument.** Give each variant its own subdirectory
with its own README, and re-export from the score's `index.ts` under distinct
names. `src/scores/bmi/` does this for metric and imperial:

```typescript
export { bmi as bmi_metric } from './metric/bmi'
export { bmi_us as bmi_imperial } from './us/bmi'
```

These variant directories use a single `<score>.schema.ts` holding both schemas
instead of a `definition/` folder. Both layouts are current; use `definition/`
for new standalone scores and `.schema.ts` only for small variant sets.
