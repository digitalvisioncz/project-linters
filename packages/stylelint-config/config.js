module.exports = {
    extends: 'stylelint-config-recommended',
    plugins: [
        'stylelint-order',
        '@double-great/stylelint-a11y',
        '@carlosjeurissen/stylelint-csstree-validator',
    ],
    ignoreFiles: ['**/*.js', '**/*.jsx'],
    rules: {
        'a11y/no-outline-none': true,
        'a11y/selector-pseudo-class-focus': true,
        'a11y/content-property-no-static-value': [
            true, {
                severity: 'warning',
            },
        ],
        'a11y/font-size-is-readable': [
            true, {
                severity: 'warning',
            },
        ],
        'a11y/no-spread-text': [
            true, {
                severity: 'warning',
            },
        ],
        'a11y/no-obsolete-attribute': [
            true, {
                severity: 'warning',
            },
        ],
        'a11y/no-obsolete-element': [
            true, {
                severity: 'warning',
            },
        ],
        'a11y/no-text-align-justify': [
            true, {
                severity: 'warning',
            },
        ],
        'at-rule-empty-line-before': [
            'always', {
                except: ['blockless-after-same-name-blockless'],
                ignore: ['after-comment'],
                ignoreAtRules: [
                    'font-face',
                    'mixin',
                    'include',
                    'extend',
                    'custom-media',
                ],
            },
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always',
        'at-rule-no-vendor-prefix': true,
        'at-rule-no-unknown': [
            true, {
                ignoreAtRules: [
                    'import-normalize',
                    'mixin',
                    'include',
                    'extend',
                    'custom-media',
                ],
            },
        ],
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': 'never-single-line',
        'block-opening-brace-space-before': 'always',
        'csstree/validator': {
            properties: {
                content: '| attr( <custom-ident> )',
                width: '| <min()> | <max()> | <clamp()>',
                padding: '| <min()> | <max()> | <clamp()>',
                'font-size': '| <min()> | <max()> | <clamp()>',
            },
            ignoreProperties: [
                'composes',
                'scrollbar-width',
            ],
        },
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'comment-whitespace-inside': 'always',
        'custom-property-empty-line-before': 'never',
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': 'never',
        'function-comma-newline-after': 'never-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'never-multi-line',
        'function-parentheses-space-inside': 'never',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',
        indentation: 4,
        'length-zero-no-unit': [
            true, {
                ignore: ['custom-properties'],
            },
        ],
        'max-empty-lines': 1,
        'max-nesting-depth': 4,
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': [
            true, {
                ignoreMediaFeatureNames: ['prefers-reduced-motion'],
            },
        ],
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        'no-descending-specificity': null,
        'no-unknown-animations': [
            true, {
                severity: 'warning',
            },
        ],
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'property-case': 'lower',
        'property-no-vendor-prefix': true,
        'property-no-unknown': [
            true, {
                ignoreProperties: ['composes', 'appearance'],
            },
        ],
        'order/order': [
            'custom-properties',
            'declarations',
            {
                type: 'rule',
                selector: '^&:[\\w-]+',
            },
            {
                type: 'rule',
                selector: '^&::[\\w-]+',
            },
            {
                type: 'rule',
                selector: '^&.-[\\w-]+',
            },
            {
                type: 'rule',
                selector: '^&\\[',
            },
            {
                type: 'rule',
                selector: '^&__[\\w-]+',
            },
            {
                type: 'rule',
                selector: '^[>|+|~] .[\\w-]+',
            },
            {
                type: 'rule',
                selector: '^.[\\w-]+ &',
            },
            'rules',
            'at-rules',
        ],
        'order/properties-order': [
            'width',
            'min-width',
            'max-width',
            'column-width',
            'flex-basis',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'box-sizing',
            'column-gap',
            'column-count',
            'display',
            'grid',
            'grid-template',
            'grid-template-row',
            'grid-template-columns',
            'grid-template-areas',
            'grid-gap',
            'grid-area',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-row-gap',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-column-gap',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-auto-columns',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'flex-direction',
            'justify-content',
            'align-content',
            'align-items',
            'align-self',
            'order',
            'vertical-align',
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'content',
            'object-fit',
            'float',
            'clear',
            'opacity',
            'visibility',
            'appearance',
            'overflow',
            'overflow-x',
            'overflow-y',
            'overflow-wrap',
            'table-layout',
            'border-collapse',
            'empty-cells',
            'cursor',
            'scroll-behavior',
            'touch-action',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-size',
            'background-attachment',
            'background-clip',
            'background-origin',
            'background-blend-mode',
            'mix-blend-mode',
            'color',
            'font',
            'font-family',
            'font-size',
            'line-height',
            'font-weight',
            'text-align',
            'font-variant',
            'font-style',
            'font-display',
            'letter-spacing',
            'text-decoration',
            'text-indent',
            'text-transform',
            'text-overflow',
            'text-shadow',
            'white-space',
            'word-wrap',
            'word-break',
            'word-spacing',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'filter',
            'transform',
            'transform-origin',
            'will-change',
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-direction',
            'animation-play-state',
            'backface-visibility',
            'box-shadow',
            'pointer-events',
            'user-select',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'border-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'border',
            'border-image',
            'border-image-source',
            'border-image-width',
            'border-image-slice',
            'border-image-outset',
            'border-image-repeat',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-top-width',
            'border-top-style',
            'border-top-color',
            'border-right',
            'border-right-width',
            'border-right-style',
            'border-right-color',
            'border-bottom',
            'border-bottom-width',
            'border-bottom-style',
            'border-bottom-color',
            'border-left',
            'border-left-style',
            'border-left-width',
            'border-left-color',
        ],
        'rule-empty-line-before': 'always',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'always',
        'selector-attribute-operator-space-before': 'always',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',
        'selector-max-class': 3,
        'selector-max-compound-selectors': 5,
        'selector-max-empty-lines': 0,
        'selector-max-id': 1,
        'selector-max-type': 1,
        'selector-no-qualifying-type': [
            true, {
                ignore: ['attribute'],
            },
        ],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': [
            true, {
                ignorePseudoClasses: ['global', 'local'],
            },
        ],
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'single',
        'unit-case': 'lower',
        'value-keyword-case': 'lower',
        'value-list-comma-newline-after': 'never-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        'value-no-vendor-prefix': true,
    },
};
