/*
 * @Description:
 * @Date: 2023-02-04 15:07:05
 * @Author: ranqirong 274544338@qq.com
 */
const originalRules = require('./originalRules');
const disabledOriginalRules = require('./disabledOriginalRules');
const enabledCustomRules = require('./enabledCustomRules');

module.exports = {
  plugins: ['eslint-plugin-react'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze']
  },
  rules: { ...originalRules, ...disabledOriginalRules, ...enabledCustomRules }
};
