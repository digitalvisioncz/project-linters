# DV-specific code linters configs
Currently, we are using the following configs:

### Eslint
`@digitalvisioncz/eslint-config-base`  
`@digitalvisioncz/eslint-config-react` *for React projects*
`@digitalvisioncz/eslint-config-typescript` *for Typescript projects*
> **_NOTE:_**  React config and typescript already contains base config, so there is no need to install both

### Stylelint
`@digitalvisioncz/stylelint-config` *with PostCss*

#### TSconfig
`@digitalvisioncz/typescript-config`

## How to use

### Pre-requisits
All linter configs are available as NPM packages using Github Packages. At this time, you need to be logged in to the GitHub npm registry to use this package (even if they are public). Hopefully, in the future, GH will omit this step.

Run following command in your terminal  
`npm login --scope=@digitalvisioncz --registry=https://npm.pkg.github.com`  
It will prompt you to input your GitHub username, password (this will be your [personal access token](https://github.com/settings/tokens/new) with ` read:packages` scope) and public e-mail address. 

### Install and config
In the project where you want to use linters, do the following:

1. Create `.npmrc` and add the following code
```PlainText
@digitalvisioncz:registry=https://npm.pkg.github.com
```

2. Install required linter config(s), for example
```sh
yarn add -D @digitalvisioncz/eslint-config-react
```

3. Add following to your package.json (or add `extends` to your `.eslintrc` or `.stylelintrc` config)
```js
"eslint": {
  "extends": [
      // in case of Typescript
      "@digitalvisioncz/eslint-config-typescript",
      // in case of React
      "@digitalvisioncz/eslint-config-react",
      // in case of NodeJs
      "@digitalvisioncz/eslint-config-base",
  ]
}
```
```js
"stylelint": {
  "extends": "@digitalvisioncz/stylelint-config"
}
```
4. If a typescript project, add the following to your tsconfig.json
```json
{
  "extends": "@digitalvisioncz/typescript-config"
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
