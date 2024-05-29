import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import eslint from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default (
    plugin: FlatConfig.Plugin,
    parser: FlatConfig.Parser,
): FlatConfig.ConfigArray => [
    {ignores: ['**/build/**', '**/dist/**']},
    eslint.configs.recommended,
    {
        name: '@dvdevcz/eslint/base',
        languageOptions: {
            parser,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {project: './tsconfig.json'},
        },
        plugins: {
            '@typescript-eslint': plugin,
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
            '@stylistic/array-bracket-newline': [
                'error',
                {
                    multiline: true,
                    minItems: 3,
                },
            ],
            '@stylistic/array-bracket-spacing': ['error', 'never'],
            '@stylistic/array-element-newline': [
                'error',
                {
                    multiline: true,
                    minItems: 3,
                },
            ],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/arrow-spacing': [
                'error',
                {
                    before: true,
                    after: true,
                },
            ],
            '@stylistic/block-spacing': ['error', 'never'],
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/comma-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@stylistic/comma-style': ['error', 'last'],
            '@stylistic/computed-property-spacing': ['error', 'never'],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-call-spacing': ['error', 'never'],
            '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
            '@stylistic/generator-star-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/jsx-closing-bracket-location': [1, 'line-aligned'],
            '@stylistic/jsx-closing-tag-location': 'error',
            '@stylistic/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'never',
                    children: 'never',
                    propElementValues: 'always',
                },
            ],

            '@stylistic/jsx-max-props-per-line': [
                'error',
                {
                    maximum: {
                        single: 2,
                        multi: 1,
                    },
                },
            ],
            '@stylistic/jsx-newline': ['error', {prevent: true}],
            '@stylistic/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
            '@stylistic/jsx-pascal-case': ['error', {allowNamespace: true}],
            '@stylistic/jsx-props-no-multi-spaces': 'error',
            '@stylistic/jsx-quotes': ['error', 'prefer-double'],
            '@stylistic/jsx-self-closing-comp': [
                'error',
                {
                    component: true,
                    html: false,
                },
            ],
            '@stylistic/jsx-tag-spacing': [
                'error',
                {
                    closingSlash: 'never',
                    beforeSelfClosing: 'always',
                    afterOpening: 'never',
                    beforeClosing: 'never',
                },
            ],
            '@stylistic/jsx-wrap-multilines': [
                'error',
                {
                    declaration: 'parens-new-line',
                    assignment: 'parens-new-line',
                    return: 'parens-new-line',
                    arrow: 'parens-new-line',
                    condition: 'parens-new-line',
                    logical: 'parens-new-line',
                    prop: 'parens-new-line',
                },
            ],
            '@stylistic/key-spacing': [
                'error',
                {
                    beforeColon: false,
                    afterColon: true,
                    mode: 'strict',
                },
            ],
            '@stylistic/keyword-spacing': [
                'error',
                {
                    before: true,
                    after: true,
                },
            ],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/lines-between-class-members': ['error', 'always'],
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
            '@stylistic/multiline-comment-style': ['error', 'starred-block'],
            '@stylistic/new-parens': 'error',
            '@stylistic/newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],
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
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-multiple-empty-lines': ['error', {max: 1}],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/object-curly-newline': [
                'error',
                {
                    multiline: true,
                    minProperties: 3,
                },
            ],
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/object-property-newline': 'error',
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return',
                },
                {
                    blankLine: 'always',
                    prev: ['const', 'let'],
                    next: '*',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: ['const', 'let'],
                },
                {
                    blankLine: 'any',
                    prev: ['const', 'let'],
                    next: ['const', 'let'],
                },
                {
                    blankLine: 'always',
                    prev: [
                        'if',
                        'for',
                        'while',
                        'switch',
                        'class',
                    ],
                    next: '*',
                },
                {
                    blankLine: 'always',
                    prev: 'directive',
                    next: '*',
                },
                {
                    blankLine: 'any',
                    prev: 'directive',
                    next: 'directive',
                },
            ],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/rest-spread-spacing': ['error', 'never'],
            '@stylistic/semi': [
                'error',
                'always',
                {omitLastInOneLineBlock: true},
            ],
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/space-unary-ops': 'error',
            '@stylistic/spaced-comment': [
                'error',
                'always',
                {exceptions: ['-']},
            ],
            '@stylistic/switch-colon-spacing': 'error',
            '@stylistic/template-curly-spacing': 'error',
            '@stylistic/template-tag-spacing': 'error',
            '@stylistic/type-annotation-spacing': 'error',
            '@stylistic/type-generic-spacing': 'error',
            '@stylistic/type-named-tuple-spacing': 'error',
            '@stylistic/wrap-regex': 'error',
            '@stylistic/yield-star-spacing': ['error', 'after'],
        },
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
];
