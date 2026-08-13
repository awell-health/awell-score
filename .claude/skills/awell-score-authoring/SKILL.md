---
name: awell-score-authoring
description: Authors and modifies clinical score calculations in the awell-score library — score definition files, input/output schemas, subscales, test fixtures, README documentation, and library registration. Use when adding a new questionnaire, PROM or clinical score, changing an existing score's scoring logic or schema, reviewing a score for clinical correctness, or when the user mentions a named instrument (e.g. AUDIT, PHQ-9, HADS, KOOS) in this repository.
---

# Authoring scores in awell-score

Every score in this library is consumed by clinical software. A wrong constant,
a mishandled missing answer, or a reversed item scored in the wrong direction
produces a plausible-looking number that misinforms a clinician. Treat
correctness and provenance as the deliverable, not the code.

## Two hard rules

### 1. Licensing gate — before writing any file

The MIT licence covers Awell's code only. Instrument content (item text,
question labels, response options, scoring anchors, interview prompts) is often
third-party copyright, sometimes requiring a paid licence. The PANSS family was
removed from this repository for exactly this reason. See [NOTICE](../../../NOTICE).

- Do **not** add or reproduce item text without a verifiable licence permitting
  it. Scoring *logic* and *structure* are the deliverable; verbatim content is not.
- `licensing_status` is one of `public_domain`, `free_with_attribution`,
  `license_required`, `unknown`, and defaults to `unknown`. **Never infer or guess
  it.** Set it only from a verifiable source; omit it when you have none. Same for
  `license_contact`. No score in the repository currently sets either field, so
  there is no precedent to copy — if you are the first, cite the source in the PR.
- If asked to add an instrument whose licensing you cannot establish, say so and
  stop rather than shipping it with `unknown` and moving on.

### 2. Never invent clinical content

Scoring rules, cut-offs, subscale membership, reverse-scored items, weighting and
conversion tables come from the instrument's published manual or a peer-reviewed
source — never from inference about what looks reasonable.

When the source is ambiguous or you cannot find it, stop and tell the user which
specific rule is unresolved. Do not pick the plausible option. Specifically, ask
rather than assume about:

- **Missing answers.** Some instruments prorate, some require a minimum number of
  answered items, some are invalid with any omission. This changes results
  silently, so it must come from the manual.
- **Rounding.** Return the raw computed value unless the instrument specifies
  rounding. `bmi` returns `21.604938271604937`, not `21.6`.
- **Reverse scoring.** Which items, and against which maximum.

## Anatomy of a score

121 scores live in `src/scores/<score_name>/`. 108 use the `definition/` layout —
follow it:

```
src/scores/audit/
  audit.ts                          # the score object
  audit.test.ts                      # tests
  definition/
    index.ts                         # re-exports the below
    audit_inputs.ts                  # AUDIT_INPUTS
    audit_output.ts                  # AUDIT_OUTPUT
    audit_subscales.ts               # optional: subscale → input id map
  __testdata__/
    audit_responses.ts               # minimum/median/maximum/random responses
  README.md                          # copied into dist by yarn build
```

`src/scores/audit/` is the reference implementation for a subscaled
questionnaire. Read it before writing a new one, and prefer copying the shape of
the nearest existing score over inventing a new one.

## The score object

`ScoreType` (`src/types/Score.types.ts`) is the whole contract:

```typescript
export const audit: ScoreType<typeof AUDIT_INPUTS, typeof AUDIT_OUTPUT> = {
  name: 'Alcohol Use Disorders Identification Test (AUDIT)',
  readmeLocation: __dirname,
  inputSchema: AUDIT_INPUTS,
  outputSchema: AUDIT_OUTPUT,
  calculate: ({ data }) => ({ TOTAL: sum(Object.values(data)) }),
}
```

- `name` — the full instrument name with its abbreviation in parentheses.
- `readmeLocation` — always `__dirname`. `Score` reads the README from here and
  exposes it as `description`.
- `terminology` / `licensing_status` / `license_contact` — optional. See
  [reference.md](reference.md) for the FHIR terminology shape.
- `calculate` receives Zod-validated `data`, so inputs are already the right
  type. It must return every key in `outputSchema`; a value may be `null` when
  the score cannot be computed.

Input keys are conventionally `<ABBREV>_Q01`-style; output keys are
`SCREAMING_SNAKE_CASE` result ids. Both appear in consumer payloads, so renaming
one is a breaking change.

## Schemas

Input types are declared with Zod and carry their own labels and UI options:

```typescript
export const AUDIT_INPUTS = {
  AUDIT_Q01: {
    label: { en: '...', nl: '...' },
    type: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
    uiOptions: {
      options: [{ value: 0, label: { en: 'Never', nl: 'Nooit' } }],
    },
  },
} satisfies ScoreInputSchemaType
```

Keep the `satisfies ScoreInputSchemaType` / `satisfies ScoreOutputSchemaType` —
it type-checks the schema while preserving the literal types that
`ScoreType<typeof ...>` depends on.

Outputs are limited to `z.number()`, `z.string()`, `z.boolean()`, must carry a
`label`, and cannot be optional. Full type table, optionality rules and the
`uiOptions` slider variant are in [reference.md](reference.md).

## Registration

A score is unreachable until it is registered in `src/scores/library.ts`, which
imports all entries explicitly and wraps each in `new Score(...)`. Add both the
import and the entry in `createScoreLibrary({ ... })`. The object key becomes the
public score id (`ScoreLibrary.audit`) and is a breaking change if altered.

## Workflow

Work through this in order:

```
- [ ] 1. Establish licensing and provenance for the instrument
- [ ] 2. Read the nearest existing score and copy its shape
- [ ] 3. Write README.md — scoring rules and references first
- [ ] 4. Write definition/ (inputs, output, subscales)
- [ ] 5. Write <score>.ts
- [ ] 6. Write __testdata__/ fixtures
- [ ] 7. Write <score>.test.ts
- [ ] 8. Register in src/scores/library.ts
- [ ] 9. Add a CHANGELOG.md entry under ## Unreleased
- [ ] 10. yarn test src/scores/<score> && yarn typecheck && yarn lint
- [ ] 11. Get an independent review and resolve its blockers
```

Writing the README before the code is deliberate: it forces the scoring rules and
their source into writing before they are encoded, which is where errors get
caught. It documents introduction, questionnaire structure, scoring, subscales,
interpretation and numbered references — see `src/scores/audit/README.md`, and
read the rules below before writing it.

Fixtures conventionally cover `minimum_response`, `median_response`,
`maximum_response` and `random_response`, exported from
`__testdata__/<score>_responses.ts`, with the expected total in a comment above
the random one. Tests assert result count, result ids, input ids, Zod validation
failures (out-of-range, wrong type), empty-response behaviour, and each fixture's
expected value. Derive expected values from the instrument's manual, not from
running the code — a test written from the implementation only proves the
implementation is self-consistent.

## Step 11: independent review

A score is not done until another agent has checked it against the instrument's
own publication. Launch a fresh subagent, tell it to follow
[awell-score-review](../awell-score-review/SKILL.md), and give it only the
instrument name and the changed paths:

```
Review the WHO-5 score in src/scores/who_5/ against the instrument's original
publication. Follow .claude/skills/awell-score-review/SKILL.md.
```

Do not include your reasoning, your reading of the scoring rules, or a summary of
what you implemented. The review's entire value is that it reaches the primary
source independently; anchoring it on your interpretation means it can only
confirm you. Prefer a different model from your own, since a model tends to share
blind spots with itself.

Resolve every Blocker before calling the work done. If you believe a finding is
wrong, answer it with the source you relied on rather than with your reasoning —
and if you cannot produce one, the reviewer is probably right.

## Writing the README for a clinical reader

`Score` renders `README.md` to HTML and serves it as the score's `description` in
`apiSchema`. It is public documentation a clinician reads, not a note to the next
developer. Four rules, each of which has already been got wrong:

**Give the answer range, not a bare point count.** Clinicians do not count zero as
a point, so "six-point scale" reads as 1–6.

- Write: `each answered on a 0-5 frequency scale describing the last two weeks`
- Not: `each answered on a six-point frequency scale describing the last two weeks`

**State what is true, not what is absent.** Do not catalogue properties the
instrument does not have; the reader has no reason to have wondered.

- Write: `Higher numbers mean better well-being throughout.`
- Not: `All five items are worded positively, so no item is reverse scored: higher numbers mean better well-being throughout.`

**Resolving a question is mandatory; giving it a section is not.** The workflow has
you settle reverse scoring, missing answers and rounding before writing code. That
does not mean each gets a README heading. When the answer is "nothing special",
write nothing and record in the PR description that you checked. When it does
change what a reader does, state the rule in one sentence and skip the
meta-commentary about what the source manual does or does not specify.

- Write: `All five items are required; an incomplete questionnaire does not produce a score.`
- Not: `The publication specifies no handling for unanswered items — no prorating, no minimum number of answered items, no substitution rule. All five items are therefore required, and a payload missing any of them fails validation rather than scoring the omission as 0.`

**No repository or developer vocabulary in prose.** `payload`, `schema`,
`validation`, `input id`, `key`, `optional`, `null`, `undefined`, `string`,
`ZodError` and `fixture` mean nothing to this reader — "payload" has appeared in a
score README exactly once, and it was a mistake. Item and result identifiers are
fine inside the scoring formula block and result tables, where they are the thing
being documented; keep them out of sentences.

`src/scores/who_5/README.md` is the worked example, including how to document a
licence. Vocabulary swaps and the section skeleton are in
[reference.md](reference.md).

## Commands

```bash
yarn test src/scores/audit   # one score
yarn test                    # whole suite, ~25s for 3122 tests
yarn typecheck               # tsc over src *including* tests
yarn lint
```

**Always run `yarn typecheck` after touching tests.** vitest transpiles without
type-checking and `tsconfig.json` excludes `*.test.ts`, so `yarn build` will not
catch a type error in a test. CI runs both.

The runner is vitest with `globals: true` — no `describe`/`it`/`expect` imports.
There is no jest here; use `vi.fn`/`vi.mock`, and prefer testing through inputs
over mocking anything.

## Do not

- Touch the `version` field in `package.json`. Version bumps happen through the
  release flow — see [RELEASING.md](../../../RELEASING.md). Running
  `yarn bump:minor` in a branch is the deliberate override, not routine.
- Change an existing input id, output id or `ScoreLibrary` key without calling it
  out as breaking. Consumers validate against `apiSchema` output.
- Round, clamp or default a result to make a test pass.

## Review checklist

- [ ] Every scoring rule traceable to a source cited in the README
- [ ] README free of developer vocabulary; answer scales given as a range; no
      section documenting the absence of a rule
- [ ] Missing-answer behaviour matches the manual (not incidentally `0`)
- [ ] Reverse-scored items reversed against the correct maximum
- [ ] Subscale membership matches the manual, item for item
- [ ] Output keys match `outputSchema` exactly
- [ ] `licensing_status` set only from a verifiable source, else omitted
- [ ] No unlicensed item text added
- [ ] Registered in `library.ts`; `CHANGELOG.md` updated under `## Unreleased`
- [ ] Tests, typecheck and lint pass
- [ ] Independent review obtained and every Blocker resolved

For file-by-file templates, the full input type table and edge-case patterns
(interpretation tables, conversion tables, multi-variant scores, `null` returns),
see [reference.md](reference.md).
