import stylistic from '@stylistic/eslint-plugin';
import type {Linter, Rule} from 'eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import {parser} from 'typescript-eslint';

import jsxRules from './jsx.ts';
import lineBreakRules from './lineBreaks.ts';
import oneItemPerLine from './rules/oneItemPerLine.ts';
import spacingRules from './spacing.ts';

const config: Linter.Config[] = [
    {ignores: [
        '**/build/**',
        '**/dist/**',
        '**/*.d.ts',
        '**/*.d.mts',
    ]},
    {
        name: '@dvdevcz/linters/eslint/base',
        files: ['**/*.{ts,tsx,js,jsx,mjs,cjs,mts}'],
        languageOptions: {
            parser,
            parserOptions: {ecmaFeatures: {jsx: true}},
        },
        linterOptions: {
            // oxlint owns eslint-disable comments for non-stylistic rules.
            reportUnusedDisableDirectives: 'off',
        },
        plugins: {
            '@stylistic': stylistic,
            'simple-import-sort': simpleImportSort,
            // typescript-eslint's RuleModule is a stricter view of ESLint's own rule type.
            dvdev: {rules: {'one-item-per-line': oneItemPerLine as unknown as Rule.RuleModule}},
        },
        rules: {
            ...spacingRules,
            ...lineBreakRules,

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
                    ignoredNodes: ['ArrowFunctionExpression[body.type="ConditionalExpression"]'],
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

            'dvdev/one-item-per-line': 'error',

            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
    {
        name: '@dvdevcz/linters/eslint/jsx',
        files: ['**/*.{jsx,tsx}'],
        rules: jsxRules,
    },
];

export default config;
