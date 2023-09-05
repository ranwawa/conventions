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

  rules: {
    'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
    'import/export': ['error'],
    'import/extensions': ['warn', 'never'],
    'import/first': ['warn'],
    'import/named': ['error'],
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/no-absolute-path': ['error'],
    'import/no-amd': ['error'],
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false
      }
    ],
    'import/no-commonjs': ['warn', { allowPrimitiveModules: true }],
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-duplicates': ['error'],
    'import/no-dynamic-require': ['error'],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          'test/**' /* tape, common npm pattern */,
          'tests/**' /* also common npm pattern */,
          'spec/**' /* mocha, rspec-like pattern */,
          '**/__tests__/**' /* jest pattern */,
          '**/__mocks__/**' /* jest pattern */,
          '*.test.{js,jsx,ts,tsx}' /* repos with a single test file */,
          '**/*.test.{js,jsx,ts,tsx}' /* repos with a single test file */,
          '**/*.test-*.{js,jsx,ts,tsx}' /* repos with multiple top-level test files */,
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}' /* tests where the extension or filename suffix denotes that it is a test */,
          '**/jest.config.js' /* jest config */,
          '**/jest.setup.js' /* jest setup */,
          '**/vue.config.js' /* vue-cli config */,
          '**/webpack.config.js' /* webpack config */,
          '**/webpack.config.*.js' /* webpack config */,
          '**/rollup.config.js' /* rollup config */,
          '**/rollup.config.*.js' /* rollup config */,
          '**/gulpfile.js' /* gulp config */,
          '**/gulpfile.*.js' /* gulp config */,
          '**/Gruntfile{,.js}' /* grunt config */,
          '**/protractor.conf.js' /* protractor config */,
          '**/protractor.conf.*.js' /* protractor config */,
          '**/karma.conf.js' /* karma config */,
          '**/.eslintrc.js' /* eslint config */
        ],
        optionalDependencies: false
      }
    ],
    'import/no-import-module-exports': ['error', { exceptions: [] }],
    'import/no-mutable-exports': ['warn'],
    'import/no-named-as-default-member': ['warn'],
    'import/no-named-as-default': ['error'],
    'import/no-named-default': ['error'],
    'import/no-relative-packages': ['error'],
    'import/no-self-import': ['error'],
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': ['error'],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
          'object'
        ],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'import/prefer-default-export': ['warn'],

    'import/default': ['off'],
    'import/namespace': ['off'],
    'import/no-deprecated': ['off'],
    'import/no-nodejs-modules': ['off'],
    'import/no-namespace': ['off'],
    'import/no-restricted-paths': ['off'],
    'import/max-dependencies': ['off', { max: 10 }],
    'import/no-internal-modules': [
      'off',
      {
        allow: []
      }
    ],
    'import/unambiguous': ['off'],
    'import/no-unassigned-import': ['off'],
    'import/exports-last': ['off'],
    'import/group-exports': ['off'],
    'import/no-default-export': ['off'],
    'import/no-named-export': ['off'],
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
      }
    ],
    'import/no-relative-parent-imports': ['off'],
    'import/no-unused-modules': [
      'off',
      {
        missingExports: true,
        unusedExports: true,
        ignoreExports: ['.eslintrc.{js,cjs,mjs}']
      }
    ]
  }
};
