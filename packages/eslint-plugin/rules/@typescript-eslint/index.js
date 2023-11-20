const originalRules = require('./originalRules');
const disabledOriginalRules = require('./disabledOriginalRules');
const enabledCustomRules = require('./enabledCustomRules');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],
      rules: {
        ...originalRules,
        ...disabledOriginalRules,
        ...enabledCustomRules
      }
    }
  ]
};
