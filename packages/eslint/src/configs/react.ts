import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import reactRecommended from 'eslint-plugin-react/configs/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import rules from '../rules/rules';

export default (
    plugin: FlatConfig.Plugin,
    parser: FlatConfig.Parser,
): FlatConfig.ConfigArray => [
    {ignores: ['**/build/**', '**/dist/**']},
    {
        name: '@dvdevcz/eslint/react',
        languageOptions: {
            ...reactRecommended.languageOptions,
            parser,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.serviceworker,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            '@stylistic': stylistic,
            react: react,
            'react-hooks': reactHooks,
        },
        files: ['**/*.{jsx,tsx}'],
        rules: {
            // JSX
            ...rules.jsx,
        },
    },
    {
        files: ['**/*.tsx'],
        rules: {
             'react/prop-types': 'off',
        },
    }
];
