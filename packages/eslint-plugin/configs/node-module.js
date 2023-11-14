/*
 * @Description:
 * @Date: 2023-02-04 15:07:05
 * @Author: ranqirong 274544338@qq.com
 */
module.exports = {
  extends: [
    ...[
      '../rules/import/index.js',
      '../rules/eslint-core/index.js',
      '../rules/@typescript-eslint/index.js',
      '../rules/node/recommended-module.js'
    ].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended'
  ],
  plugins: ['@awawa/eslint-plugin']
};
