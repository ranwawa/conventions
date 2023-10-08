/*
 * @Description:
 * @Date: 2023-02-04 15:07:05
 * @Author: ranqirong 274544338@qq.com
 */
const originalRules = require('./originalRules');
const disabledOriginalRules = require('./disabledOriginalRules');
const enabledCustomRules = require('./enabledCustomRules');

module.exports = {
  plugins: ['eslint-plugin-jsx-a11y'],
  rules: { ...originalRules, ...disabledOriginalRules, ...enabledCustomRules }
};
