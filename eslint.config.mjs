import tseslint from 'typescript-eslint';
import dvdevEslint from './packages/eslint/dist/index.js';

export default tseslint.config(
    ...dvdevEslint.configs.base,
);
