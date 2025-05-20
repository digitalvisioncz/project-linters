# DV-specific code linters configs
Currently, we are using the following configs:

### Eslint
`@dvdevcz/eslint`  

### Stylelint
`@dvdevcz/stylelint`

#### TSconfig
`@dvdevcz/typescript-config`

## How to use

### Install and config
In the project where you want to use linters, do the following:

1. Install required linter config(s)
```sh
yarn add -D @dvdevcz/eslint
# OR
yarn add -D @dvdevcz/stylelint
# OR
yarn add -D @dvdevcz/typescript-config
```

2. Add the config to your linter setup:

#### For ESLint (Flat Config)
If you are using the new ESLint Flat Config (eslint.config.mjs):

```js
import dvdevEslint from '@dvdevcz/eslint';

export default [
    ...dvdevEslint.configs.base, // or .react
];
```
You can choose the config variant you need (`base` or `react`, TS included in both).

#### For Stylelint
Add the following to your package.json (or `stylelint.config.mjs`):
```js
export default {
    extends: ['@dvdevcz/stylelint'],
};

```

3. In a typescript project, add the following to your tsconfig.json
```json
{
  "extends": "@dvdevcz/typescript-config"
}

```
## Adding a pre-commit hook

Linting makes more sense when running before committing the code.

To add a pre-commit task:

1. Install [Husky](https://typicode.github.io/husky/#/) and [lint-staged]()
```sh
yarn add husky lint-staged -D
```

2. Automatically install the pre-commit hook and add a script to your package.json
```sh
npx husky install && \
npx husky add .husky/pre-commit "yarn pre-commit" && \
npx npm-add-script -k pre-commit -v "lint-staged"
```

3. Create `.lintstagedrc` and add the following code (omit a stylelint if it's not needed)
```json
{
    "*.{js,jsx}": [
      "eslint --cache --fix"
    ],
    "*.css": [
      "stylelint --cache --fix --color --formatter verbose"
    ]
}

```
