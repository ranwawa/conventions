'use strict';

const { commonGlobals, rules } = require('./_commons');

module.exports = {
  globals: {
    ...commonGlobals,
    __dirname: 'off',
    __filename: 'off',
    exports: 'off',
    module: 'off',
    require: 'off',
  },
  parserOptions: {
    ecmaFeatures: { globalReturn: false },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['node'],
  rules: {
    ...rules,
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
  },
};
