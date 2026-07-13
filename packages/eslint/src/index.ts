import type {TSESLint} from '@typescript-eslint/utils';
import {parser, plugin} from 'typescript-eslint';
import baseConfig from './configs/base';
import reactConfig from './configs/react';

const configs = {
    base: baseConfig(plugin as TSESLint.FlatConfig.Plugin, parser),
    react: reactConfig(plugin as TSESLint.FlatConfig.Plugin, parser),
};

export type Config = TSESLint.FlatConfig.ConfigFile;

export default {configs};
export {
    configs,
    parser,
};
