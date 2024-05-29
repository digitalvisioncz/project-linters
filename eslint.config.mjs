import tseslint from 'typescript-eslint';
import dvdevEslint from './packages/eslint-config/dist/index.js';

export default tseslint.config(
    ...dvdevEslint.configs.base,
);
