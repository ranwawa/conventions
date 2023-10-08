/*
 * @Description: eslint内置规则
 * @Date: 2023-09-20 20:32:10
 * @Author: ranqirong 274544338@qq.com
 */
const originalRules = require('./originalRules');
const disabledOriginalRules = require('./disabledOriginalRules');
const enabledCustomRules = require('./enabledCustomRules');

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  rules: { ...originalRules, ...disabledOriginalRules, ...enabledCustomRules }
};
