module.exports = {
  extends: [
    ...['../rules/javascript/index.js'].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended',
  ],
  plugins: ['@ranwawa/eslint-plugin'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
