module.exports = {
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {jsx: true},
    },
    extends: [
        '@digitalvisioncz/eslint-config-base',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    rules: {
        // Forbid certain propTypes
        'react/forbid-prop-types': [0],

        // Enforce JSX indentation
        'react/jsx-indent': ['error', 4],

        // Validate props indentation in JSX
        'react/jsx-indent-props': ['error', 4],

        // Prevent definitions of unused state
        'react/no-unused-state': 0,

        // Enforce consistent usage of destructuring assignment of props, state, and context
        'react/destructuring-assignment': [
            1,
            'always',
            {
                ignoreClassFields: true,
            },
        ],

        // Checks rules of Hooks
        'react-hooks/rules-of-hooks': 'error',

        // Checks effect dependencies
        'react-hooks/exhaustive-deps': 'warn',

        // Enforce that a label tag has a text label and an associated control.
        'jsx-a11y/label-has-associated-control': 1,
        'jsx-a11y/label-has-for': [
            1, {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],

        // Forbid unnecessary rules for React v17
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        // Turn off things that handle NextJS
        'jsx-a11y/anchor-is-valid': 0,


        // File must have .jsx extension when using JSX syntax
        'react/jsx-filename-extension': [1, {
            allow: 'as-needed',
            extensions: [".tsx", ".jsx"]
        }],

        // React components must use PascalCase when using in code
        'react/jsx-pascal-case': [2],

        'react/jsx-max-props-per-line': [
            2, {
                maximum: {
                    single: 2,
                    multi: 1,
                },
            },
        ],
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-closing-bracket-location': [2, 'line-aligned'],
        'react/jsx-closing-tag-location': [2],

        'react/jsx-wrap-multilines': [
            2, {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        'react/jsx-curly-spacing': [2],

        'react/self-closing-comp': [
            2, {
                component: true,
                html: false,
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
