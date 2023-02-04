module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],
      rules: {
        // 必须把同个函数的重载签名放一起
        // https://typescript-eslint.io/rules/adjacent-overload-signatures
        '@typescript-eslint/adjacent-overload-signatures': ['error'],

        // 禁用单行注释关闭 ts 检测功能
        // https://typescript-eslint.io/rules/ban-ts-comment
        '@typescript-eslint/ban-ts-comment': ['error'],

        // 禁止使用内置类做为类型
        // https://typescript-eslint.io/rules/ban-types
        '@typescript-eslint/ban-types': ['error'],

        // 禁止使用数组构造函数
        // https://typescript-eslint.io/rules/no-array-constructor
        '@typescript-eslint/no-array-constructor': ['error'],

        // 禁止使用空函数
        // https://typescript-eslint.io/rules/no-empty-function
        '@typescript-eslint/no-empty-function': ['error'],

        // 禁止使用空类型
        // https://typescript-eslint.io/rules/no-empty-interface
        '@typescript-eslint/no-empty-interface': ['error'],

        // 禁止使用any
        // https://typescript-eslint.io/rules/no-explicit-any
        '@typescript-eslint/no-explicit-any': ['warn'],

        // 禁止使用额外的逗号
        // https://typescript-eslint.io/rules/no-extra-semi
        '@typescript-eslint/no-extra-semi': ['off'],

        // 禁止给可推导的变量添加类型
        // https://typescript-eslint.io/rules/no-inferrable-types
        '@typescript-eslint/no-inferrable-types': ['error'],

        // 禁止使用超出范围的数值
        // https://typescript-eslint.io/rules/no-loss-of-precision
        '@typescript-eslint/no-loss-of-precision': ['error'],

        // 禁止在类上使用new约束
        // https://typescript-eslint.io/rules/no-misused-new
        '@typescript-eslint/no-misused-new': ['error'],

        // 禁止使用module/namespace关键字
        // https://typescript-eslint.io/rules/no-namespace
        '@typescript-eslint/no-namespace': ['error'],

        // 禁止多余的非空断言
        // https://typescript-eslint.io/rules/no-non-null-assertion
        '@typescript-eslint/no-non-null-assertion': ['warn'],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],
        '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

        // 禁止将this赋值给其他变量
        // https://typescript-eslint.io/rules/no-this-alias
        '@typescript-eslint/no-this-alias': ['error'],

        // 禁止不必要的类型约束
        // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
        '@typescript-eslint/no-unnecessary-type-constraint': ['error'],

        // 禁止存在未使用的变量
        // https://typescript-eslint.io/rules/no-unused-vars
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn'],

        // 禁止使用node的require语法
        // https://typescript-eslint.io/rules/no-var-requires
        '@typescript-eslint/no-var-requires': ['error'],

        // 禁止使用原始值字面量作为类型
        // https://typescript-eslint.io/rules/prefer-as-const
        '@typescript-eslint/prefer-as-const': ['error'],

        // https://typescript-eslint.io/rules/prefer-namespace-keyword
        '@typescript-eslint/prefer-namespace-keyword': ['off'],

        // 禁止使用斜线语法引入类型
        // https://typescript-eslint.io/rules/triple-slash-reference
        '@typescript-eslint/triple-slash-reference': ['error'],

        // 禁止使用父作用域相同的变量
        // https://typescript-eslint.io/rules/no-shadow
        '@typescript-eslint/no-shadow': ['error'],

        'no-empty-function': ['off'],
        'no-shadow': ['off'],
        'no-array-constructor': ['off'],
        'constructor-super': ['off'],
        'getter-return': ['off'],
        'no-const-assign': ['off'],
        'no-dupe-args': ['off'],
        'no-dupe-class-members': ['off'],
        'no-dupe-keys': ['off'],
        'no-func-assign': ['off'],
        'no-import-assign': ['off'],
        'no-new-symbol': ['off'],
        'no-obj-calls': ['off'],
        'no-redeclare': ['off'],
        'no-setter-return': ['off'],
        'no-this-before-super': ['off'],
        'no-undef': ['off'],
        'no-unreachable': ['off'],
        'no-unsafe-negation': ['off'],

        'valid-typeof': ['off'],
      },
    },
  ],
};
