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
    // 必须导入可解析的模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // 必须导入已存在的命名模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': ['error'],

    // ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': ['off'],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': ['off'],

    // 禁止导出生重复的模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': ['error'],

    // 禁用使用已存在的具名模块导入默认模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': ['error'],

    // 禁止在默认模块上访问已存在的具名模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': ['warn'],

    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': ['off'],

    // 路径策略
    // paths are treated both as absolute paths, and relative to process.cwd()
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

    // 禁止导出可更改的模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': ['warn'],

    /* 模块系统: */

    // 禁止使用 CMD,AMD 模块语法
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-commonjs': ['off'],
    'import/no-amd': ['error'],

    // No Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    // TODO: enable?
    'import/no-nodejs-modules': ['off'],

    /* 格式化风格: */

    // 必须将import语句放在最前面
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': ['warn'],

    // 必须在一条语句中完成所有全名模块导入
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': ['error'],

    // disallow namespace imports
    // TODO: enable?
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': ['off'],

    // 引入的文件必须包含后缀名
    // TODO 直接用tsc命令编译.ts后缀名会存在问题
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['warn', 'never'],

    // 必须按固定顺序引入模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
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
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    // 必须在最后一条 import 语句后换行
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': ['warn', { count: 1 }],

    // 必须使用default导出惟一的模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': ['warn'],

    // Restrict which files can be imported in a given folder
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': ['off'],

    // Forbid modules to have too many dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': ['off', { max: 10 }],

    // 禁止使用绝对路径导入模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': ['error'],

    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': ['error'],

    // prevent importing the submodules of other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-internal-modules': [
      'off',
      {
        allow: []
      }
    ],

    // Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    // this should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it's not a thing.
    'import/unambiguous': ['off'],

    // 禁止使用webpack loader语法
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': ['error'],

    // Prevent unassigned imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': ['off'],

    // Prevent importing the default as if it were named
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': ['error'],

    // 优先导入具名模块
    // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false
      }
    ],

    // This rule enforces that all exports are declared at the bottom of the file.
    // https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
    // TODO: enable?
    'import/exports-last': ['off'],

    // Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
    'import/group-exports': ['off'],

    // forbid default exports. this is a terrible rule, do not use it.
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
    'import/no-default-export': ['off'],

    // Prohibit named exports. this is a terrible rule, do not use it.
    // https://github.com/benmosher/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
    'import/no-named-export': ['off'],

    // 禁止引用同一文件自身的模块
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
    'import/no-self-import': ['error'],

    // 禁止文件间互相引用模块
    // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // 禁止多余的相对路径符号
    // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // dynamic imports require a leading comment with a webpackChunkName
    // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
      }
    ],

    // Use this rule to prevent imports to folders in relative parent paths.
    // https://github.com/benmosher/eslint-plugin-import/blob/c34f14f67f077acd5a61b3da9c0b0de298d20059/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': ['off'],

    // 禁止存在未使用的模块文件
    // https://github.com/benmosher/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
    // TODO: 如果ignoreExports不存在,则会导致eslint挂掉
    'import/no-unused-modules': [
      'off',
      {
        missingExports: true,
        unusedExports: true,
        ignoreExports: ['.eslintrc.{js,cjs,mjs}']
      }
    ],

    // 禁止混用import和module.exports
    // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: []
      }
    ],

    // 禁止使用相对路径引入monorepo包
    // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
    'import/no-relative-packages': ['error']
  }
};
