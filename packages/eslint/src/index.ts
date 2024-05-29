import pluginBase from '@typescript-eslint/eslint-plugin';
import * as parserBase from '@typescript-eslint/parser';
import type {TSESLint} from '@typescript-eslint/utils';
import baseConfig from './configs/base';

const parser: TSESLint.FlatConfig.Parser = {
    meta: parserBase.meta,
    parseForESLint: parserBase.parseForESLint,
};

const plugin: TSESLint.FlatConfig.Plugin = pluginBase as Omit<
    typeof pluginBase,
    'configs'
>;

const configs = {base: baseConfig(plugin, parser)};

export type Config = TSESLint.FlatConfig.ConfigFile;

export default {configs};
export {
    configs,
    parser,
    plugin,
};
