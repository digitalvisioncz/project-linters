import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import eslint from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import rules from '../rules/rules';

export default (
    plugin: FlatConfig.Plugin,
    parser: FlatConfig.Parser,
): FlatConfig.ConfigArray => [
    {ignores: ['**/build/**', '**/dist/**']},
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        name: '@dvdevcz/eslint/base',
        languageOptions: {
            parser,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.serviceworker,
            },
            parserOptions: {
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@stylistic': stylistic,
        },
        files: [
            '**/*.ts',
            '**/*.tsx',
            '**/*.js',
            '**/*.jsx',
            '**/*.mjs',
            '**/*.cjs',
            '**/*.mts',
        ],
        rules: {
            // Spacing
            ...rules.spacing,

            // Line breaks
            ...rules.lineBreaks,

            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/comma-style': ['error', 'last'],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/max-len': [
                'error',
                {
                    code: 160,
                    ignoreComments: true,
                    ignoreStrings: true,
                    ignoreTrailingComments: true,
                    ignoreRegExpLiterals: true,
                },
            ],
            '@stylistic/max-statements-per-line': ['error', {max: 1}],
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'comma',
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: 'comma',
                        requireLast: false,
                    },
                    multilineDetection: 'brackets',
                },
            ],
            '@stylistic/new-parens': 'error',
            '@stylistic/no-confusing-arrow': ['error', {onlyOneSimpleParam: true}],
            '@stylistic/no-extra-parens': [
                'error',
                'all',
                {
                    conditionalAssign: false,
                    nestedBinaryExpressions: false,
                    ignoreJSX: 'all',
                },
            ],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-operators': [
                'error',
                {
                    groups: [
                        ['%', '**'],
                        ['%', '+'],
                        ['%', '-'],
                        ['%', '*'],
                        ['%', '/'],
                        ['/', '*'],
                        [
                            '&',
                            '|',
                            '<<',
                            '>>',
                            '>>>',
                        ],
                        [
                            '==',
                            '!=',
                            '===',
                            '!==',
                        ],
                        ['&&', '||'],
                    ],
                    allowSamePrecedence: false,
                },
            ],
            '@stylistic/no-multiple-empty-lines': ['error', {max: 1}],
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': [
                'error',
                'always',
                {omitLastInOneLineBlock: true},
            ],
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/wrap-regex': 'error',
        },
    },
    // ts files
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    "checksVoidReturn": false,
                }
,            ],
            "@typescript-eslint/no-explicit-any": "warn"
        }
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
];
