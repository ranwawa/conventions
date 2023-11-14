/*
 * @Description:
 * @Date: 2023-07-31 22:07:20
 * @Author: ranqirong 274544338@qq.com
 */
const util = require('@typescript-eslint/utils');
const builtinRules = require('eslint/use-at-your-own-risk').builtinRules;
const { rules: importRules } = require('eslint-plugin-import');
const { rules: jsxa11yRules } = require('eslint-plugin-jsx-a11y');
const { rules: nodeRules } = require('eslint-plugin-node');
const { rules: reactHooksRules } = require('eslint-plugin-react-hooks');
const { rules: reactRules } = require('eslint-plugin-react');
const { rules: typescriptRules } = require('@typescript-eslint/eslint-plugin');
const { rules: vueRules } = require('eslint-plugin-vue');

const eslintCoreRules = new Proxy(
  {},
  {
    get(target, key) {
      return builtinRules.get(key);
    }
  }
);

module.exports = {
  'eslint-core': eslintCoreRules,
  import: importRules,
  'jsx-a11y': jsxa11yRules,
  node: nodeRules,
  'react-hooks': reactHooksRules,
  react: reactRules,
  '@typescript-eslint': typescriptRules,
  vue: vueRules
};
