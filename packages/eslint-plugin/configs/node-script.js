module.exports = {
  extends: [
    ...[
      '../rules/imports/index.js',
      '../rules/javascript/index.js',
      '../rules/typescript/index.js',
      '../rules/node/recommended-script.js'
    ].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended'
  ],
  plugins: ['@ranwawa/eslint-plugin']
};
