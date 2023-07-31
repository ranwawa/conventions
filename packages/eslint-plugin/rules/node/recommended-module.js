/*
 * @Description:
 * @Date: 2023-07-31 22:03:06
 * @Author: ranqirong 274544338@qq.com
 */
const { commonGlobals, rules } = require('./_commons');

module.exports = {
  globals: {
    ...commonGlobals,
    __dirname: 'off',
    __filename: 'off',
    exports: 'off',
    module: 'off',
    require: 'off'
  },
  parserOptions: {
    ecmaFeatures: { globalReturn: false },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['node'],
  rules: {
    ...rules
  }
};
