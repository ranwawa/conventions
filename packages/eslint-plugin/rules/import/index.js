/*
 * @Description:
 * @Date: 2023-07-31 22:07:20
 * @Author: ranqirong 274544338@qq.com
 */
const originalRules = require('./originalRules');
const disabledOriginalRules = require('./disabledOriginalRules');
const enabledCustomRules = require('./enabledCustomRules');

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx']
      },
      alias: {
        map: [['@', './src']]
      },
      typescript: {}
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.vue'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },

  rules: { ...originalRules, ...disabledOriginalRules, ...enabledCustomRules }
};
