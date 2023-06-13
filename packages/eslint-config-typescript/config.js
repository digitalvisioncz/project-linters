const {rules: baseStyleRules} = require('eslint-config-airbnb-base/rules/style');
const {rules: baseBestPracticesRules} = require('eslint-config-airbnb-base/rules/best-practices');
const {rules: baseErrorsRules} = require('eslint-config-airbnb-base/rules/errors');
const {rules: baseVariablesRules} = require('eslint-config-airbnb-base/rules/variables');
const {rules: baseImportsRules} = require('eslint-config-airbnb-base/rules/imports');

module.exports = {
    extends: [
        '@dvdevcz/eslint-config-base',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    ignorePatterns: ['.eslintrc', '.eslintrc.js'],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js', 
                    '.jsx', 
                    '.mjs', 
                    '.ts', 
                    '.tsx', 
                    '.mts', 
                    '.json'
                ],
            },
        },
    },
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/prop-types': 'off',
        '@typescript-eslint/type-annotation-spacing': [
            'error', {
                'before': false,
                'after': true,
                overrides: {
                    arrow: {
                        before: true,
                        after: true
                    }
                }
            }
        ],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': [
            baseStyleRules['comma-dangle'][0], {
                ...baseStyleRules['comma-dangle'][1],
            },
        ],

        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': baseStyleRules['comma-spacing'],

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': baseStyleRules['keyword-spacing'],

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

        quotes: 'off',
        '@typescript-eslint/quotes': baseStyleRules.quotes,

        semi: 'off',
        '@typescript-eslint/semi': baseStyleRules.semi,

        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],

        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: [
                    'camelCase',
                    'PascalCase',
                    'UPPER_CASE',
                ],
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],

        'import/no-extraneous-dependencies': [
            baseImportsRules['import/no-extraneous-dependencies'][0],
            {
                ...baseImportsRules['import/no-extraneous-dependencies'][1],
                devDependencies: baseImportsRules['import/no-extraneous-dependencies'][1].devDependencies.reduce((result, devDep) => {
                    const toAppend = [devDep];
                    const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
                    if (devDepWithTs !== devDep) {
                        toAppend.push(devDepWithTs);
                    }
                    return [...result, ...toAppend];
                }, []),
            },
        ],

        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                "multiline": {
                    "delimiter": "comma",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],

        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["error"],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        // force handled promises
        "@typescript-eslint/no-floating-promises": "error"
    },
};
