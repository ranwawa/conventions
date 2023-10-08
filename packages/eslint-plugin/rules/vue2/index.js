/*
 * @Description:
 * @Date: 2023-02-04 15:07:05
 * @Author: ranqirong 274544338@qq.com
 */
const originalRules = require('./originalRules');
const disabledOriginalRules = require('./disabledOriginalRules');
const enabledCustomRules = require('./enabledCustomRules');

module.exports = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['eslint-plugin-vue']
};
