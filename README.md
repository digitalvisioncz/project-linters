# DV-specific code linters configs

Monorepo with the lint configs used across Digital Vision CZ projects.

| Package | Description |
| --- | --- |
| [`@dvdevcz/linters`](packages/linters) | oxlint + ESLint (stylistic) + stylelint configs in one package |
| [`@dvdevcz/typescript-config`](packages/typescript-config) | Shared `tsconfig.json` |

`@dvdevcz/eslint`, `@dvdevcz/stylelint`, `@dvdevcz/eslint-config-*` and `@dvdevcz/stylelint-config` are deprecated and
no longer developed here (their last versions stay on npm; the sources are in the git history). Use `@dvdevcz/linters`.

See the [`@dvdevcz/linters` README](packages/linters/README.md) for installation and config.

### TSconfig

```json
{
  "extends": "@dvdevcz/typescript-config"
}
```

Since TypeScript 6 the `types` option defaults to `[]` — list global type packages explicitly, e.g. `"types": ["node"]`.

## Development

Requirements: [proto](https://moonrepo.dev/proto) (installs [moon](https://moonrepo.dev) in the version pinned in
`.prototools`), Node 24 and pnpm 11 (`corepack enable` picks the version from `packageManager`).
TypeScript 7 (`tsc`) builds and type-checks; TypeScript 6 is installed alongside as `typescript` for typescript-eslint
(see [TypeScript](packages/linters/README.md#typescript)).

All workflows are moon tasks — there are no package.json scripts. moon installs the dependencies (`pnpm install`)
whenever the lockfile or a manifest changes, and installs the git hooks on every run, so a fresh clone only needs:

```sh
moon run root:lint        # oxlint + eslint over the whole repo
moon run root:lint-fix
moon run root:typecheck   # tsc (TypeScript 7)
moon run :build           # build all packages (@dvdevcz/linters -> dist/)
moon run linters:start    # tsc --watch while working on the configs
```

The repo lints itself with the local sources of `@dvdevcz/linters`: `oxlint.config.ts` and `eslint.config.mjs` import
`packages/linters/src/*.ts` directly (Node 24 strips the types), so config changes apply immediately, without a build.
The package itself is compiled to `dist/` by `tsc` only for publishing (`moon run linters:build`). Inside `src/`,
relative imports use the `.ts` extension; `tsc` rewrites them to `.js` (`rewriteRelativeImportExtensions`).

Git hooks (configured in `.moon/workspace.yml`):

- `pre-commit` — `moon run root:staged` → lint-staged runs `moon run root:oxlint-fix` and `root:eslint-fix` on staged files
- `commit-msg` — `moon run root:commitlint` ([Conventional Commits](https://www.conventionalcommits.org))

Releases are published from `main` by GitHub Actions (`moon run root:release` → lerna, independent versioning,
conventional commits). Only `@dvdevcz/linters` and `@dvdevcz/typescript-config` are published.
