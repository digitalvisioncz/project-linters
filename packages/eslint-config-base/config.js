module.exports = {
    extends: ['airbnb-base'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
    },
    rules: {
        // Enforce line breaks between array elements
        'array-element-newline': [
            'error', {
                minItems: 3,
            },
        ],

        // Enforce line breaks after opening and before closing array brackets
        'array-bracket-newline': [
            'error', {
                multiline: true,
            },
        ],

        // Require parens in arrow function arguments
        'arrow-parens': ['error', 'as-needed'],

        // Require braces in arrow function body
        'arrow-body-style': ['error', 'as-needed'],

        // Disallow or enforce spaces inside of single line blocks
        'block-spacing': ['error', 'never'],

        // Require or disallow trailing commas
        'comma-dangle': [
            'error', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
            },
        ],

        // Indentation
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],

        // Enforce consistent linebreak style
        'linebreak-style': ['error', 'unix'],

        // Enforce consistent spacing inside braces
        'object-curly-spacing': ['error', 'never'],

        // Enforce a maximum line length
        'max-len': [
            'error', {
                code: 160,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTrailingComments: true,
                ignoreRegExpLiterals: true,
            },
        ],

        // Disallow the use of console
        'no-console': [
            'error', {
                allow: [
                    'info',
                    'log',
                    'assert',
                ],
            },
        ],

        // Disallow the unary operators ++ and --
        'no-plusplus': [
            'error', {
                allowForLoopAfterthoughts: true,
            },
        ],

        // Disallow dangling underscores in identifiers
        'no-underscore-dangle': [
            'error', {
                allow: ['_this', '_id'],
                allowAfterThis: true,
                allowAfterSuper: true,
            },
        ],

        // Require or disallow padding lines between statements (padding-line-between-statements)
        'padding-line-between-statements': [
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

        // Enforce the consistent use of either backticks, double, or single quotes
        quotes: ['error', 'single'],

        // Require or disallow a space before function parenthesis
        'space-before-function-paren': [
            'error', {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],

        // Off import errors (becauseof webpack config)
        'import/no-extraneous-dependencies': 1,
        'import/no-unresolved': 1,
        'import/extensions': 1,
    },
};
