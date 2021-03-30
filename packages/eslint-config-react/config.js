module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  rules: {
      // Forbid certain propTypes
      'react/forbid-prop-types': [0],

      // Enforce JSX indentation
      'react/jsx-indent': ['error', 4],

      // Validate props indentation in JSX
      'react/jsx-indent-props': ['error', 4],

      // Prevent definitions of unused state
      'react/no-unused-state': 0,

      // Enforce consistent usage of destructuring assignment of props, state, and context
      'react/destructuring-assignment': [
          1,
          'always',
          {
              ignoreClassFields: true,
          },
      ],

      // Checks rules of Hooks
      'react-hooks/rules-of-hooks': 'error',

      // Checks effect dependencies
      'react-hooks/exhaustive-deps': 'warn',

      // Enforce that a label tag has a text label and an associated control.
      'jsx-a11y/label-has-associated-control': 1,
      'jsx-a11y/label-has-for': [
          1, {
              required: {
                  some: ['nesting', 'id'],
              },
          },
      ],

      // Turn off things that handle NextJS
      'jsx-a11y/anchor-is-valid': 0,
  },
};
