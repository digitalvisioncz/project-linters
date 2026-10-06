// The stylelint plugins below ship without type declarations.
declare module '@stylistic/stylelint-plugin' {
    import type {Plugin} from 'stylelint';

    const plugins: Plugin[];
    export default plugins;
}

declare module 'stylelint-order' {
    import type {Plugin} from 'stylelint';

    const plugins: Plugin[];
    export default plugins;
}

declare module 'stylelint-config-clean-order' {
    import type {Config} from 'stylelint';

    export const propertyGroups: string[][];

    const config: Config;
    export default config;
}
