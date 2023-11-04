module.exports = {
  extends: [
    ...['../rules/eslint-core/index.js'].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended'
  ],
  plugins: ['@awawa/eslint-plugin'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
