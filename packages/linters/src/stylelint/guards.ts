import type {Config} from 'stylelint';

/*
 * The ladder is not a convention if nothing enforces it.
 *
 * The demand is "no absolute lengths", not "no units": px, rem and em are what
 * tokens.css exists to carry, while %, vw and ch are a different tool with no
 * ladder to violate. Expressing it as an allowed-list is what keeps
 * clamp(var(--space-sm), 1vw, var(--space-lg)) legal while padding: 5px is not.
 *
 * The rule reads inside calc(), which is deliberate: a raw 2px in
 * calc(var(--space-md) + 2px) is still an invented value.
 *
 * Hairline widths, focus rings, shadows and durations are absent from the list
 * on purpose — border-width: 1px and outline-offset: 2px are physical, not
 * ladder steps.
 */
const RELATIVE: string[] = [
    '%',
    'vw',
    'vh',
    'svh',
    'dvh',
    'svw',
    'dvw',
    'ch',
    'fr',
];

/*
 * `inset` without its longhands would be a hole you could drive through, so the
 * four physical offsets are covered too. They re-invent as readily as padding
 * does: top: 13px is the same mistake in a different property.
 */
export const ladderRules: NonNullable<Config['rules']> = {
    'declaration-property-unit-allowed-list': {
        '/^padding/': RELATIVE,
        '/^margin/': RELATIVE,
        '/gap$/': RELATIVE,
        'font-size': RELATIVE,
        'border-radius': RELATIVE,
        '/^(inset|top|right|bottom|left)$/': RELATIVE,
    },
    'color-no-hex': true,
};

/*
 * Guards are opt-in per path: only code whose ladder compliance was measured
 * should be held to them. Pass the globs the guards apply to and spread the
 * result into the project's stylelint config.
 */
const guards = (files: string[]): Pick<Config, 'overrides'> => ({
    overrides: [
        {
            files,
            rules: ladderRules,
        },
    ],
});

export default guards;
