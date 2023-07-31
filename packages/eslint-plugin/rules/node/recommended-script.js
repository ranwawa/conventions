/*
 * @Description:
 * @Date: 2023-07-31 21:52:44
 * @Author: ranqirong 274544338@qq.com
 */
const { commonGlobals, rules } = require('./_commons');

module.exports = {
  globals: {
    ...commonGlobals,
    __dirname: 'readonly',
    __filename: 'readonly',
    exports: 'writable',
    module: 'readonly',
    require: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: { globalReturn: true },
    ecmaVersion: 2020,
    sourceType: 'script'
  },
  plugins: ['node'],
  rules: {
    ...rules
  }
};
