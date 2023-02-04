'use strict';

const { commonGlobals, rules } = require('./_commons');

module.exports = {
  globals: {
    ...commonGlobals,
    __dirname: 'readonly',
    __filename: 'readonly',
    exports: 'writable',
    module: 'readonly',
    require: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: { globalReturn: true },
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  plugins: ['node'],
  rules: {
    ...rules,
    'node/no-unsupported-features/es-syntax': ['error', { ignores: [] }],
  },
};
