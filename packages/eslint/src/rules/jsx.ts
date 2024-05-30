const jsxRules = {
    '@stylistic/jsx-child-element-spacing': 'off',
    '@stylistic/jsx-closing-bracket-location': [1, 'line-aligned'],
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-brace-presence': [
        'error', {
            props: 'never',
            children: 'never',
            propElementValues: 'always',
        },
    ],
    '@stylistic/jsx-curly-newline': [
        'error', {
            multiline: 'consistent',
            singleline: 'consistent',
        },
    ],
    '@stylistic/jsx-curly-spacing': [
        'error', {
            when: 'never',
        },
    ],
    '@stylistic/jsx-equals-spacing': ['error', 'never'],
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],
    '@stylistic/jsx-indent': ['error', 4],
    '@stylistic/jsx-indent-props': ['error', 4],
    '@stylistic/jsx-max-props-per-line': [
        'error', {
            maximum: {
                single: 2,
                multi: 1,
            },
        },
    ],
    '@stylistic/jsx-newline': ['error', {prevent: true}],
    // '@stylistic/jsx-one-expression-per-line': ['error', {allow: 'non-jsx'}],
    '@stylistic/jsx-pascal-case': ['error', {allowNamespace: true}],
    '@stylistic/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/jsx-self-closing-comp': [
        'error', {
            component: true,
            html: false,
        },
    ],
    '@stylistic/jsx-tag-spacing': [
        'error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        },
    ],
    '@stylistic/jsx-wrap-multilines': [
        'error', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
        },
    ],
};

export default jsxRules;
