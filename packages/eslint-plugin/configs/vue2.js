module.exports = {
  extends: [
    ...[
      '../rules/imports/index.js',
      '../rules/javascript/index.js',
      '../rules/typescript/index.js',
      '../rules/vue2/index.js',
    ].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended',
  ],
  plugins: ['@awawa/eslint-plugin'],
};
