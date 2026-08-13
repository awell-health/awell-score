---
name: awell-score-review
description: Independently reviews a clinical score implementation in awell-score against the instrument's original publication — scoring correctness, item and answer-option wording, README accuracy, clinician-facing language, and test coverage. Use when reviewing a new or changed score, when another agent delegates score review, or before a score is considered done.
---

# Reviewing a score

You are the second pair of eyes on a score that another agent wrote. The author
was competent and their work will look internally consistent. Your job is to find
the errors that internal consistency cannot reveal.

## What independence means here

**The README and the code are not evidence.** The author wrote both from one
reading of the instrument's manual. If they misread it, the README documents the
misreading, the code matches the README, the tests match the code, and every
internal check passes. The only way to catch that is to read the primary source
yourself and check both artefacts against it.

**Do not accept a summary of the instrument from anyone.** If your prompt, a PR
description or a commit message tells you how the score works, treat it as a claim
to verify, not as background. Anchoring on the author's reading is the single
easiest way to make this review worthless.

**You do not edit files.** Read, verify, report. The author applies the fixes.
Fixing things yourself hides which changes were reviewed and risks "correcting" a
correct implementation to match a rule you got wrong.

## Step 1: get the primary source

Before reading the implementation closely, obtain the instrument's own
publication or manual — search for it, fetch it, and read the scoring section.
Prefer the publisher's or authoring body's own document over a secondary
description. Record the full citation and URL; you will report it.

If you cannot reach a source that states the scoring rules, stop reviewing for
correctness and report **Blocked** with those rules listed under *Not verified*.
An instrument you could not check is not an instrument that passed. Do not
substitute your own recollection of the instrument for a source.

## Step 2: read the implementation

Read, in this order: `README.md`, `definition/`, the score file, `__testdata__/`,
the test file, and the `library.ts` registration. The layout and conventions are
described in
[awell-score-authoring](../awell-score-authoring/SKILL.md) — read it if you are
unfamiliar with `ScoreType`, but read it *after* the primary source.

## Step 3: the five checks

### A. Scoring correctness

Against the primary source, verify:

- Item count, and the legal values for each item. Watch for non-contiguous
  scales — AUDIT items 9 and 10 use 0/2/4, not 0–4, and a schema that allows the
  intermediate values silently accepts impossible answers.
- Reverse-scored items: which ones, and the maximum they are reversed against.
- Subscale membership, item for item.
- The transformation: sum, mean, weighting, multiplier, or conversion table.
  Conversion tables must be transcribed exactly, with no interpolated rows.
- The reachable range of every result. Compute the minimum and maximum the code
  can produce and check them against the ranges the publication states.
- The missing-answer rule — prorating, minimum answered items, or all-required —
  and whether `.optional()` on the inputs matches that rule.
- Rounding, which should be absent unless the publication specifies it.
- Cut-offs and interpretation bands, including whether the boundary value falls
  in the band the source puts it in.

**Recompute the fixtures by hand.** Take `minimum_response`, `median_response`,
`maximum_response` and `random_response`, score them yourself from the
publication's rules, and compare with the values asserted in the test file. This
is the check most likely to expose a misread scoring rule, because it does not
route through anything the author wrote.

Also confirm no unlicensed item text has been added, and that
`licensing_status` / `license_contact` are either absent or backed by a source you
verified. Unlicensed instrument content is a Blocker regardless of code quality —
see [NOTICE](../../../NOTICE).

### B. Item and answer-option wording

- Every input and every output carries a `label`.
- Item wording matches the official wording, where the licence permits reproducing
  it. Text deliberately omitted for licensing reasons is not a defect; text
  paraphrased into something that changes the question's meaning is.
- **Answer-option labels map to the correct values.** Check the direction
  explicitly: an option list attached to inverted values produces a plausible
  score from every answer and is invisible in testing unless someone reads the
  mapping. Verify the extremes and at least one middle option against the source.
- The recall period ("over the last two weeks") is consistent across items and
  matches the source.
- Translations are real. A translation that exists officially should match it; one
  that appears machine-generated should be flagged. `LabelType` allows `en`, `nl`,
  `fr`, `pt`, `es`, `de`, `it`, `pl` — presence of a language is a claim that the
  wording is correct in it.
- Units are present and correct where the input is a measurement.

### C. README accuracy

- Every rule stated in the README is implemented, and every behaviour implemented
  is documented. Check both directions.
- Every number in the README — ranges, maxima, cut-offs, multipliers — matches
  what the code actually produces.
- References resolve and support the claim they are attached to. Verify each URL
  or DOI exists; a plausible-looking citation to a paper that does not exist, or
  does not say what it is cited for, is a Blocker, not a nitpick.
- The licence section, if present, agrees with the `licensing_status` field.

### D. Clinician-facing language

The README is rendered to HTML and served as the score's `description` in
`apiSchema`, so it is read by clinicians. Apply the rules in
[awell-score-authoring](../awell-score-authoring/SKILL.md) — do not restate them
here, so they cannot drift. In short: answer scales given as a range rather than a
bare point count, no developer vocabulary in prose, no section documenting the
absence of a rule, the direction of the scale stated, and cut-offs qualified as
screening rather than diagnostic where that is what they are.

### E. Test coverage

- All four fixtures present, with values legal under the schema.
- Expected values traceable to the publication, not to the implementation. A test
  whose expectation was read off a passing run proves only self-consistency; if
  the fixture comments or values look derived from the code, say so.
- Result count and result ids asserted, in declaration order.
- Input ids asserted; subscale membership asserted where subscales exist.
- Validation covered: a value above the range, a value below it, and a wrong type.
- The documented missing-answer behaviour asserted — a `ZodError` where items are
  required, or the prorating path where they are not.
- Any branch returning `null` is exercised.
- The score is registered and that registration is asserted.

## Findings

Every finding is one of three severities:

- **Blocker** — the score produces a wrong result, contains unlicensed content,
  cites a source that does not support it, or rests on a rule you could not
  verify.
- **Correction** — documentation, wording or coverage that is wrong or missing but
  does not change any result.
- **Question** — something you suspect but cannot source.

**A correctness finding without a citation is a Question, not a Blocker.** Quote
the source and give the page or section. Confidently asserting a "correct" cut-off
you have not verified is more damaging than the bug you think you are fixing,
because it will be applied.

Style preferences are not findings at all. Report what is wrong, not what you
would have written differently.

## Report format

```markdown
# Review: <score name> (`src/scores/<dir>/`)

**Verdict:** Blocked | Approved with corrections | Approved
**Primary source:** <full citation, with URL>

## Blockers
### 1. <one-line summary>
- **Where:** `src/scores/<dir>/definition/<x>_inputs.ts:42`
- **Found:** <what the implementation does>
- **Source says:** "<quotation>" — [1], §2.1
- **Fix:** <the specific change>

## Corrections
<same shape>

## Questions
<same shape, with what you would need to resolve it>

## Not verified
- <rule or claim> — <why you could not check it>

## Checked and correct
<one line per area of A-E you positively verified, so the author knows the
review's coverage rather than guessing at it>
```

Verdict rules: any Blocker, or anything under *Not verified* that bears on a
scoring rule, means **Blocked**. Corrections alone mean **Approved with
corrections**. Reserve **Approved** for a score where you reached the primary
source and every check in A–E passed.

Report honestly on coverage. "Looks good" for an area you did not actually check
is worse than admitting you skipped it, because it will be read as verification.
