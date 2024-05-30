import type {FlatConfig} from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import reactRecommended from 'eslint-plugin-react/configs/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import rules from '../rules/rules';

export default (
    plugin: FlatConfig.Plugin,
    parser: FlatConfig.Parser,
): FlatConfig.ConfigArray => [
    {ignores: ['**/build/**', '**/dist/**']},
    reactRecommended,
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
        plugins: {
            '@typescript-eslint': plugin,
            '@stylistic': stylistic,
            'react-hooks': reactHooks,
        },
        files: [
            '**/*.ts',
            '**/*.tsx',
            '**/*.js',
            '**/*.jsx',
        ],
        rules: {
            // JSX
            ...rules.jsx,

            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
