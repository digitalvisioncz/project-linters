import spacingRules from './spacing';
import lineBreaksRules from './lineBreaks';
import jsxRules from './jsx';
import type {TSESLint} from '@typescript-eslint/utils';

type CustomRules = Partial<Record<string, TSESLint.SharedConfig.RuleEntry>>;

const rules = {
    spacing: spacingRules as unknown as CustomRules ,
    lineBreaks: lineBreaksRules as unknown as CustomRules,
    jsx: jsxRules as unknown as CustomRules,
}

export default rules;
