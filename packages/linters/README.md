# @dvdevcz/linters

Shared lint configs of Digital Vision CZ in one package:

| Entry point | What it is |
| --- | --- |
| `@dvdevcz/linters/oxlint` | [oxlint](https://oxc.rs) config — correctness + type-aware TypeScript, import, promise and Vitest rules |
| `@dvdevcz/linters/oxlint/react` | the oxlint config + React (hooks, React Compiler, react-perf) and jsx-a11y rules |
| `@dvdevcz/linters/eslint` | ESLint flat config — stylistic rules only (formatting, import sorting) |
| `@dvdevcz/linters/stylelint/base` | stylelint config — CSS ordering and style |
| `@dvdevcz/linters/stylelint/guards` | opt-in stylelint guards against hard-coded lengths and hex colors |

oxlint owns the "is this code correct" rules, ESLint only formats. Run both.

## Install

```sh
pnpm add -D @dvdevcz/linters oxlint oxlint-tsgolint eslint
# CSS projects
pnpm add -D stylelint
```

`oxlint-tsgolint` powers oxlint's type-aware rules and needs a `tsconfig.json` in the project.

### TypeScript

The ESLint config parses TS with `typescript-eslint`, which needs the TypeScript JS API. TypeScript 7 does not ship one
yet (expected in 7.1), so install TypeScript 7 and 6 side by side, as
[recommended by the TypeScript team](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0):

```json
{
    "devDependencies": {
        "@typescript/native": "npm:typescript@^7.0.2",
        "typescript": "npm:@typescript/typescript6@^6.0.2"
    }
}
```

`tsc` is then TypeScript 7, while `import 'typescript'` (typescript-eslint) gets the 6.0 API. oxlint's type-aware rules
run on tsgolint (the Go port of TypeScript) and are not affected. Projects still on TypeScript ≤ 6.0 need nothing extra.

## Config

### oxlint — `oxlint.config.ts`

```ts
export {default} from '@dvdevcz/linters/oxlint';
```

React projects use the React variant instead (it includes everything from the base config):

```ts
export {default} from '@dvdevcz/linters/oxlint/react';
```

React Compiler rules (`react/purity`, `react/refs`, `react/set-state-in-effect`, …) are experimental in oxlint and
report warnings.

Extend it when a project needs more:

```ts
import dvdevOxlint from '@dvdevcz/linters/oxlint';
import {defineConfig} from 'oxlint';

export default defineConfig({
    ...dvdevOxlint,
    ignorePatterns: [...dvdevOxlint.ignorePatterns ?? [], 'generated/**'],
});
```

### ESLint — `eslint.config.js`

```js
import dvdevEslint from '@dvdevcz/linters/eslint';

export default [
    {ignores: ['**/node_modules/**']},
    ...dvdevEslint,
];
```

### stylelint — `stylelint.config.js`

```js
import base, {ignoreFiles} from '@dvdevcz/linters/stylelint/base';
import guards from '@dvdevcz/linters/stylelint/guards';

export default {
    ...base,
    // Overriding ignoreFiles replaces the defaults (JS/TS sources, node_modules), so extend them.
    ignoreFiles: [...ignoreFiles, '**/dist/**'],
    // Hold only the paths that already follow the token ladder to the guards.
    ...guards(['src/**/*.module.css']),
};
```

## Editor (VS Code)

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.oxc": "explicit",
        "source.fixAll.eslint": "explicit"
    },
    "eslint.useFlatConfig": true
}
```
