# DV-specific code linters configs
Currently, we are using the following configs:

### Eslint
`@dvdevcz/eslint-config-base`  
`@dvdevcz/eslint-config-react` *for React projects*
`@dvdevcz/eslint-config-typescript` *for Typescript projects*
> **_NOTE:_**  React config and typescript already contains base config, so there is no need to install both

### Stylelint
`@dvdevcz/stylelint-config` *with PostCss*

#### TSconfig
`@dvdevcz/typescript-config`

## How to use

### Install and config
In the project where you want to use linters, do the following:

1. Install required linter config(s)
```sh
yarn add -D @dvdevcz/eslint-config-base
# OR
yarn add -D @dvdevcz/eslint-config-react
# OR
yarn add -D @dvdevcz/eslint-config-typescript
# OR
yarn add -D @dvdevcz/stylelint-config
# OR
yarn add -D @dvdevcz/typescript-config
```

2. Add following to your package.json (or add `extends` to your `.eslintrc` or `.stylelintrc` config)
```js
"eslint": {
  "extends": [
      // in case of Typescript
      "@dvdevcz/eslint-config-typescript",
      // in case of React
      "@dvdevcz/eslint-config-react",
      // in case of NodeJs
      "@dvdevcz/eslint-config-base",
  ]
}
```
```js
"stylelint": {
  "extends": "@dvdevcz/stylelint-config/config"
}
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

2. Automatically install pre-commit hook and add script to your package.json
```sh
npx husky install && \
npx husky add .husky/pre-commit "yarn pre-commit" && \
npx npm-add-script -k pre-commit -v "lint-staged"
```

3. Create `.lintstagedrc` and add the following code (omit stylelint if it's not needed)
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
