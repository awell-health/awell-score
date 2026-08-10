# Agent instructions

`@awell-health/awell-score` is a library of scoring functions for clinical
assessment instruments and PROMs. It is published to npm and consumed by
`calculations-api` (`packages/api` in the GitLab `awellhealth/calculation-suite`
repo), which is deployed through
[release-management](https://release-management.awellhealth.com).

## Start here

| Task | Read |
| --- | --- |
| Cutting a release, bumping the version | **[RELEASING.md](./RELEASING.md)** |
| Adding or changing a score | [README.md](./README.md#adding-a-new-score) and the anatomy below |
| Anything touching instrument content | **[NOTICE](./NOTICE)** — read before adding item text |

## Commands

```bash
yarn test                       # jest, whole suite (slow — see below)
yarn test src/scores/audit      # one score's tests
yarn lint                       # eslint
yarn build                      # tsc + copy score READMEs into dist
yarn bump                       # next release candidate, e.g. 1.1.8 -> 1.1.9-rc.0
yarn bump:minor                 # 1.2.0-rc.0
yarn bump:major                 # 2.0.0-rc.0
yarn bump:release               # drop the rc suffix and cut stable
```

## Releasing, in one paragraph

Pushing to `main` does **not** publish. A push runs the tests, then bumps
`package.json` to the next release candidate, commits that, and leaves a draft
GitHub Release. Publishing that draft is what ships to npm. The bump only happens
when the push left the version alone, so running `yarn bump:minor` in your branch
is how you choose a different bump — that is the entire override mechanism, and it
belongs in the PR diff. `publish.yml` refuses to publish if the release tag and
`package.json` disagree. Full detail, including the `RELEASE_BOT_TOKEN` secret and
the `rc` dist-tag, is in [RELEASING.md](./RELEASING.md).

## Instrument content and licensing

This is the constraint most likely to cause real harm, so treat it as a hard rule.

The MIT licence covers **Awell's code only**. Instrument content — item text,
question labels, response options, scoring anchors, interview prompts — is often
third-party copyright, sometimes requiring a paid licence. The PANSS family was
removed from this repository for exactly this reason.

- Do not add or reproduce instrument item text without a verifiable licence
  permitting it. Scoring *logic* and *structure* are the deliverable here; verbatim
  content is not.
- `licensing_status` on a definition is one of `public_domain`,
  `free_with_attribution`, `license_required`, `unknown`, and defaults to
  `unknown`. **Never infer or guess it** — set it only from a verifiable source, and
  leave it off when you do not have one. Same for `license_contact`.
- If asked to add an instrument whose licensing you cannot establish, say so rather
  than shipping it with `unknown` and moving on.

## Anatomy of a score

121 scores live in `src/scores/<score_name>/`:

```
src/scores/audit/
  audit.ts             # the score, built with the SDK
  audit.test.ts        # tests
  definition/          # input/output schema, subscales
  __testdata__/        # response fixtures (min, max, median, random)
  README.md            # copied into dist by yarn build
```

A new score is not reachable until it is registered in
[`src/scores/library.ts`](./src/scores/library.ts), which imports all 124 entries
explicitly. `src/index.ts` exports `ScoreLibrary` from there.

Test fixtures conventionally cover minimum, maximum, median and random responses;
follow the neighbouring score's shape rather than inventing a new one.

## Changelog

Add entries under `## Unreleased` in [CHANGELOG.md](./CHANGELOG.md). Releasing
renames that heading to the version number — see RELEASING.md. Call out anything
that changes the shape of `apiSchema` output, since consumers validate against it.

## Known gotcha: the test suite is slow

A single test file takes roughly 9 seconds locally, and almost none of that is
the test. Measured:

| A test file that imports | Time |
| --- | --- |
| nothing | 2.1s |
| one score module | 3.0s |
| `ScoreLibrary` | 6.7s |

Nearly every test imports `ScoreLibrary` to look its own score up, and
`library.ts` imports all 124 scores — so each of the 166 test files loads and
type-checks the entire graph, in every jest worker, with no shared cache. On top of
that, `jest.config.cjs` uses `preset: 'ts-jest'` with type-checking left on, which
accounts for about 40% of the per-file cost.

Practical consequences for you:

- Run the single score's tests while iterating (`yarn test src/scores/audit`), not
  the whole suite.
- Do not conclude the suite has hung. It is just slow.
- Importing `ScoreLibrary` in a new test costs ~4s. If the test only needs one
  score, import that score directly.
