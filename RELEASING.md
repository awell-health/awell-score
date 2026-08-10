# Releasing

`@awell-health/awell-score` is published to npm by
[`.github/workflows/publish.yml`](./.github/workflows/publish.yml), which runs
when a **GitHub Release is published**. Pushing to `main` never publishes.

What a push to `main` *does* do, once lint/`tsc`/jest are green, is move the
version to the next release candidate and leave a draft release ready for you in
the [Releases tab](../../releases). Shipping is then one click.

## The default path: a release candidate

Merge a PR to `main` and the `release` job in
[`test.yml`](./.github/workflows/test.yml):

1. Bumps `package.json` to the next rc — `1.1.8` becomes `1.1.9-rc.0`,
   `1.1.9-rc.0` becomes `1.1.9-rc.1` — and commits that to `main` as
   `chore: bump version to vX`.
2. Deletes the previous rc's draft, since it was superseded without ever
   shipping.
3. Drafts a release for the new version, marked as a prerelease, with the top
   section of [CHANGELOG.md](./CHANGELOG.md) and the merged-PR list as its notes.

Publish that draft and the rc goes to npm under the **`rc` dist-tag**, so
consumers can `yarn add @awell-health/awell-score@rc` to try it while
`npm install @awell-health/awell-score` still resolves to the last stable
version.

## Choosing the bump yourself

The rc bump only happens when a push leaves the version untouched. Set the
version in your PR and CI takes it as given — that is the whole override
mechanism, and it shows up in the PR diff where reviewers can see it.

| You want | Run in your PR branch | `1.1.8` becomes |
| --- | --- | --- |
| The next rc (what CI does anyway) | `yarn bump` | `1.1.9-rc.0` |
| A minor release | `yarn bump:minor` | `1.2.0-rc.0` |
| A major release | `yarn bump:major` | `2.0.0-rc.0` |
| To cut the stable release | `yarn bump:release` | `1.1.9` |

Commit the `package.json` change along with your work. These are thin wrappers
around `npm version <level> --preid rc --no-git-tag-version`; they only edit the
manifest, and never tag or commit.

`yarn bump:minor` from `1.1.9-rc.3` gives `1.2.0-rc.0`, so you can redirect a
release line at any point before it ships. Once you are on a line, ordinary
merges keep incrementing within it: `1.2.0-rc.0` → `1.2.0-rc.1` → …

## Cutting a stable release

1. In a PR, run `yarn bump:release`. From any rc on the line this drops the
   suffix — `1.2.0-rc.4` becomes `1.2.0` — and from a stable version it moves to
   the next patch.
2. Roll the `## Unreleased` heading in [CHANGELOG.md](./CHANGELOG.md) to the
   version number.
3. Merge. CI leaves the version alone and drafts `v1.2.0` as a normal (non-pre)
   release.
4. Publish the draft. Check the **target commit** first — a draft has no tag yet,
   only a target, so the tag is created wherever the target points at the moment
   you publish.
5. `gh run watch`, then confirm with
   `npm view @awell-health/awell-score version`.

Publishing by hand works identically, as long as the tag matches `package.json`:

```bash
gh release create v1.2.0 --target main --title v1.2.0 --notes "See CHANGELOG.md"
```

The `v` prefix is required — every tag in this repo uses it, and `publish.yml`
checks for it.

## Guardrails

**The tag and `package.json` must agree.** `publish.yml` fails before installing
anything if they do not:

```
tag v1.1.9 does not match package.json version 1.1.8
```

That means the release was cut from a commit whose `package.json` says something
else. Point the release at the right commit, or fix `package.json` on `main`
first. This is the check that stops the drift behind this repo's
`bump to correct version` / `make the version in line with what's in github`
commits. It also means the publish step no longer rewrites the version from the
tag — `package.json` is the source of truth and the guard proves the tag follows
it.

**Prereleases cannot hijack `latest`.** The publish step reads the version and
sends anything containing a hyphen to the `rc` dist-tag. (The older `beta`
dist-tag, at `1.0.8-beta12`, was set outside this workflow.)

**The draft must be published by a person.** The draft is created with the
built-in `GITHUB_TOKEN`, and events raised by that token do not trigger further
workflows. If you ever make this publish automatically using that token, the npm
publish will silently never run.

## The `RELEASE_BOT_TOKEN` secret

`main` requires a pull request with one approval, and **`github-actions[bot]`
cannot be granted a bypass** — classic branch protection only accepts users,
teams, and installable GitHub Apps in "Allow specified actors to bypass required
pull requests", and the Actions bot is none of those. Its push is rejected with
`protected branch hook declined`.

So the `release` job checks out with `RELEASE_BOT_TOKEN` and falls back to the
built-in token, which cannot push here. Create that secret with a token
belonging to someone who *can* bypass — repository admins always can, as can the
`awell-health/awell-developers` team:

1. Create a fine-grained personal access token scoped to this repository with
   **Contents: read and write**.
2. Add it as the repository secret `RELEASE_BOT_TOKEN` (Settings → Secrets and
   variables → Actions).

Until that secret exists, everything else still works — tests run, and you can
release by bumping the version in a PR yourself and cutting the release by hand.
Only the automatic rc bump needs it.

A personal token ties releases to one person's account and expires. The durable
version of this is a GitHub App with `contents: write`, installed on the repo and
added to the bypass list (Apps *can* be added there), minting a token per run via
`actions/create-github-app-token`. Worth doing if this outgrows one maintainer.

Note the trade-off that comes with a PAT: unlike the built-in token, a PAT push
**does** retrigger workflows, which is why the bump commit carries `[skip ci]`.
Remove that and the job will bump forever.
