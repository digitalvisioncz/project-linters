import {defineConfig, type OxlintConfig} from 'oxlint';

import base from './index.ts';

// Base config + React. The correctness category (from base) turns on most react/* and jsx-a11y/* rules.
const config: OxlintConfig = defineConfig({
    extends: [base],
    plugins: [
        'jsx-a11y',
        'react',
        'react-perf',
    ],
    rules: {
        'react/button-has-type': 'error',
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unstable-nested-components': 'error',
        // Vite HMR (react-refresh) only works for modules exporting components.
        'react/only-export-components': ['warn', {allowConstantExport: true}],
        'react/rules-of-hooks': 'error',

        // React Compiler rules are experimental in oxlint.
        'react/error-boundaries': 'warn',
        'react/globals': 'warn',
        'react/immutability': 'warn',
        'react/incompatible-library': 'warn',
        'react/preserve-manual-memoization': 'warn',
        'react/purity': 'warn',
        'react/refs': 'warn',
        'react/set-state-in-effect': 'warn',
        'react/set-state-in-render': 'warn',
        'react/static-components': 'warn',
        'react/use-memo': 'warn',
        'react/void-use-memo': 'warn',

        // jsx-no-new-function-as-prop stays off: inline handlers are idiomatic.
        'react-perf/jsx-no-jsx-as-prop': 'warn',
        'react-perf/jsx-no-new-array-as-prop': 'warn',
        'react-perf/jsx-no-new-object-as-prop': 'warn',
    },
});

export default config;
