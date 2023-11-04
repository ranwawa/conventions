/*
 * @Description:
 * @Date: 2023-10-03 14:21:43
 * @Author: ranqirong 274544338@qq.com
 */
module.exports = {
  extends: [
    ...[
      '../rules/import/index.js',
      '../rules/eslint-core/index.js',
      '../rules/typescript/index.js',
      '../rules/vue2/index.js'
    ].map(require.resolve),
    'plugin:eslint-plugin-prettier/recommended'
  ],
  plugins: ['@awawa/eslint-plugin']
};
