// The repo lints itself with the local sources of @dvdevcz/linters (not the built package).
import dvdevEslint from './packages/linters/src/eslint/index.ts';

export default [
    {ignores: ['**/node_modules/**']},
    ...dvdevEslint,
];
