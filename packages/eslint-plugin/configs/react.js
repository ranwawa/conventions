module.exports = {
  extends: [
    ...[
      '../rules/imports/index.js',
      '../rules/javascript/index.js',
      '../rules/react/index.js',
      '../rules/typescript/index.js',
      '../rules/react/index.js',
      '../rules/react-hooks/index.js',
      '../rules/jsx-a11y/index.js',
    ].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended',
  ],
  plugins: ['@awawa/eslint-plugin'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
