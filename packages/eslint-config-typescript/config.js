module.exports = {
    extends: [
        '@digitalvisioncz/eslint-config-base',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.mts', '.json'],
            },
        },
        'import/extensions': [
            '.js', '.jsx', '.mjs', '.ts', '.tsx', '.mts'
        ],
    },
};
