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
yarn test                       # vitest, whole suite (~25s for 3122 tests)
yarn test src/scores/audit      # one score's tests
yarn test:watch                 # vitest in watch mode
yarn typecheck                  # tsc over src *including* tests
yarn lint                       # eslint
yarn build                      # tsc + copy score READMEs into dist
yarn bump                       # next release candidate, e.g. 1.1.8 -> 1.1.9-rc.0
yarn bump:minor                 # 1.2.0-rc.0
yarn bump:major                 # 2.0.0-rc.0
yarn bump:release               # drop the rc suffix and cut stable
```

**Run `yarn typecheck` after touching tests.** vitest transpiles without
type-checking, and `tsconfig.json` excludes `*.test.ts` from the build, so
`yarn build` will not catch a type error in a test. `yarn typecheck` uses
`tsconfig.test.json`, which includes them. CI runs both.

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

## Test runner

vitest, configured in [`vitest.config.mts`](./vitest.config.mts) with
`globals: true`, so `describe`/`it`/`expect` need no imports. The whole suite —
166 files, 3122 tests — runs in about 25 seconds.

There is no `jest` here. Do not add `jest.fn`/`jest.mock`; use `vi.fn`/`vi.mock`.
As of the migration nothing in the suite mocked anything at all, so if you find
yourself needing a mock, check whether the score can be tested through its inputs
instead.

One inefficiency remains, if you are optimizing: 154 of the 166 test files
`import { ScoreLibrary }`, and `library.ts` imports all 124 scores, so each of
those files loads the entire graph. Almost every one of them uses it for a single
`expect(ScoreLibrary).toHaveProperty('<name>')` registration assertion. Those
could collapse into one test in `library.test.ts` that derives the expected names
from the score directories — stronger than the current per-file checks, which only
cover scores someone remembered to assert. Not urgent at 25 seconds.

If you add a test that only needs one score, import that score directly rather
than reaching through `ScoreLibrary`.
