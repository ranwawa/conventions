const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  rules: {
    // 强制getter/setter成对出现在对象中
    // enforces getter/setter pairs in objects
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',

    // 限制圈复杂度
    // specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    complexity: ['off', 20],

    'class-methods-use-this': [
      'error',
      {
        exceptMethods: []
      }
    ],
    'consistent-return': 'error',

    /** ----------
     *  以prettier为准
     *  ----------
     */
    curly: ['error', 'all'],
    'dot-notation': ['error', { allowKeywords: true }],
    /** ---------- */

    'default-case': ['error', { commentPattern: '^no default$' }],

    'default-case-last': 'error',

    'default-param-last': 'error',

    // 要求点操作符和属性放在同一行
    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // 使用===和!==代替==和!=操作符
    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // 相同属性的访问器函数进行分组定义
    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // for in 循环要用 if 语句过滤
    // make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // 限制每个文件包含最大数量的类
    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // 禁止直接使用alert
    // disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // 禁用caller或callee(no-caller)
    // disallow use of arguments.caller or arguments.callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // 禁止在case或default子句中声明词法
    // disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // 禁止从构造函数中返回值
    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // 禁止使用看起来像除法的正则表达式
    // disallow division operators explicitly at beginning of regular expression
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // 禁止if语句中return语句后的else块
    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // 不允许空函数
    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],

    // 禁止使用空解构模式
    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // 禁止与 null 进行比较
    // disallow comparisons to null without a type-checking operator
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // 禁用 eval()
    // disallow use of eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // 禁止扩展本机类型
    // disallow adding to native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // 禁止对.bind()的不必要调用
    // disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // 禁止不必要的标签
    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // 禁止case语句的失败
    // disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // 禁止数字字面值的前导或尾随小数点
    // disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // 禁止对对象或只读全局变量赋值
    // disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // 禁止扩展本机类型
    // deprecated in favor of no-global-assign
    // https://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': 'off',

    // 禁止使用较短的符号实现类型转换
    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: []
      }
    ],

    // 禁止在全局作用域中声明
    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // 禁止使用eval()类方法
    // disallow use of eval()-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // 禁止在this的值未定义的上下文中使用this
    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // 禁止使用**iterator**属性
    // disallow usage of __iterator__ property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // 禁止标记语句
    // disallow use of labels for anything other than loops and switches
    // https://eslint.org/docs/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 禁止不必要的嵌套块
    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // 禁止循环中存在函数
    // disallow creation of functions within loops
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // 禁止使用魔术数字
    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],

    // 禁止出现多个空格
    // disallow use of multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ],

    // 禁止多行字符串
    // disallow use of multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // 禁止使用 new 以避免产生副作用
    // disallow use of new operator when not part of the assignment or comparison
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // 禁用Function构造函数
    // disallow use of new operator for Function object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // 禁止原始包装实例
    // disallows creating new instances of String, Number, and Boolean
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // 禁止在字符串字面量中使用\8和\9转义序列
    // Disallow \8 and \9 escape sequences in string literals
    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',

    // 禁用八进制字面量
    // disallow use of (old style) octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // 禁止在字符串字面量中使用八进制转义序列
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // 禁止对函数参数再赋值
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext'
        ],
        ignorePropertyModificationsForRegex: ['^effect[A-Z]']
      }
    ],

    // 禁用**proto**
    // disallow usage of __proto__ property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // 禁止重新声明变量
    // disallow declaring the same variable more than once
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // 禁止使用对象的某些属性
    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],

    // 禁止在返回语句中赋值
    // disallow use of assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // 禁用不必要的 return await
    // disallow redundant `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // 禁用 Script URL
    // disallow use of `javascript:` urls.
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // 禁止自身赋值
    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],

    // 禁止自身比较
    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // 不允许使用逗号操作符
    // disallow use of comma operator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // 限制可以被抛出的异常
    // restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // 禁用一成不变的循环条件
    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // 禁止未使用过的表达式
    // disallow usage of expressions in statement position
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false
      }
    ],

    // 禁用未使用过的标签
    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // 禁用不必要的 .call() 和 .apply()
    // disallow unnecessary .call() and .apply()
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // 禁止不必要的 catch 子句
    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // 禁止没有必要的字符拼接
    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // 禁用不必要的转义
    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // 禁止多余的 return 语句
    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // 禁止使用void操作符
    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // 禁用警告注释
    // disallow usage of configurable warning terms in comments: e.g. todo
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': [
      'off',
      { terms: ['todo', 'fixme', 'xxx'], location: 'start' }
    ],

    // 禁用 with 语句
    // disallow use of the with statement
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // 要求使用 Error 对象作为 Promise 拒绝的原因
    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // 建议在正则表达式中使用命名捕获组
    // Suggest using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // 使用Object.hasOwn()
    // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
    // https://eslint.org/docs/rules/prefer-object-has-own
    // TODO: semver-major: enable thus rule, once eslint v8.5.0 is required
    'prefer-object-has-own': 'off',

    // 禁止使用RegExp构造函数
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true
      }
    ],

    // 要求必须有基数
    // require use of the second argument for parseInt()
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // 禁止使用不带 await 表达式的 async 函数
    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // 强制在 RegExp 上使用 u 标志
    // Enforce the use of u flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // 要求将变量声明放在它们作用域的顶部
    // requires to declare all vars on top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // 需要把立即执行的函数包裹起来
    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // 要求或者禁止Yoda条件
    // require or disallow Yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',

    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // 强制在 getter 属性中出现一个 return 语句
    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // 禁止使用异步函数作为 Promise executor
    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // 禁止在循环中 出现 await
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // 禁止与 -0 进行比较
    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // 禁止在条件语句中出现赋值操作符
    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // 禁用 console
    // disallow use of console
    'no-console': 'off',

    // 禁用操作不影响值的表达式
    // Disallows expressions where the operation doesn't affect the value
    // https://eslint.org/docs/rules/no-constant-binary-expression
    // TODO: semver-major, enable
    'no-constant-binary-expression': 'off',

    // 禁止在条件中使用常量表达式
    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // 禁止在正则表达式中使用控制字符
    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // 禁用 debugger
    // disallow use of debugger
    'no-debugger': 'error',

    // 禁止在 function 定义中出现重复的参数
    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // 在if-else-if链中禁止重复条件
    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // 禁止在对象文字中使用重复键
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // 禁止重复的案例标签
    // disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // 禁止空块语句
    // disallow empty statements
    'no-empty': 'error',

    // 禁止在正则表达式中使用空字符类
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // 禁止在catch子句中重新分配异常
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // 禁止不必要的布尔类型转换
    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的括号
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }
    ],

    // 禁止不必要的分号
    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // 禁止重新分配function声明
    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // 禁止分配给导入的绑定
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',

    // 禁止在嵌套块中使用变量或函数声明
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // 禁止在RegExp构造函数中使用无效的正则表达式字符串
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // 禁止不规则空格
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // 禁止丢失精度的文字数字
    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // 禁止使用字符类语法中由多个代码点组成的字符
    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // 禁止将全局对象属性作为函数调用
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // 禁止从Promise执行器函数返回值
    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'error',

    // 禁止直接在对象上创建方法原型
    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // 禁止在正则表达式中使用多个空格
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // 禁止从设置器返回值
    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'error',

    // 禁止稀疏数组
    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // 禁止在常规字符串中使用模板文字占位符语法
    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // 禁止混淆多行表达式
    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // 在return，throw，continue和break语句之后禁止不可访问的代码
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // 不允许仅允许一次迭代的主体进行循环
    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': [
      'error',
      {
        ignore: []
      }
    ],

    // 禁止在“ finally”块中使用控制流语句
    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // 不允许否定关系运算符的左操作数
    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // 禁止在不允许使用“ undefined”值的情况下使用可选链接
    // disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true }
    ],

    // 禁止使用未使用的私有类成员
    // Disallow Unused Private Class Members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    // TODO: enable once eslint 7 is dropped (which is semver-major)
    'no-unused-private-class-members': 'off',

    // 禁止在正则表达式中使用无用的反向引用
    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'error',

    // 禁止在表达式中对左操作数求反
    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // 禁止因使用await或yield而导致竞态条件的赋值
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // note: not enabled because it is very buggy
    'require-atomic-updates': 'off',

    // 检查NaN时需要调用isNaN()
    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // 有效的jsdoc
    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // 强制typeof表达式与有效字符串进行比较
    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],

    // 要求箭头函数的参数使用圆括号
    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // 强制箭头函数的箭头前后使用一致的空格
    // require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // 要求在构造函数中有 super() 的调用
    // verify super() callings in constructors
    'constructor-super': 'error',

    // 强制generator函数中\*号周围使用一致的空格
    // enforce the spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // 禁止修改类声明的变量
    // disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],

    // 禁止修改 const 声明的变量
    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // 禁止类成员中出现重复的名称
    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // 禁止重复模块导入
    // disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // 禁止 Symbolnew 操作符和 new 一起使用
    // disallow symbol constructor
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // 在导出中禁止指定名称
    // Disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['default', 'then']
      }
    ],

    // 禁止使用指定的 import 加载的模块
    // disallow specific imports
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: []
      }
    ],

    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    // disallow to use this/super before super() calling in constructors.
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // 禁止在对象中使用不必要的计算属性
    // disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // 禁用不必要的构造函数
    // disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],

    // 要求使用 let 或 const 而不是 var
    // require let or const instead of var
    'no-var': 'error',

    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // 要求回调函数使用箭头函数
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    // 要求使用 const 声明那些声明后不再被修改的变量
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],

    // 优先使用数组和对象解构
    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // 注：该规则已废弃
    // suggest using Reflect methods where applicable
    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

    // 要求使用剩余参数而不是 arguments
    // use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // 要求使用扩展运算符而非 .apply()
    // suggest using the spread syntax instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // 使用模板字面量而非字符串连接
    // suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // 禁用函数内没有yield的generator函数
    // disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // 强制剩余和扩展运算符及其表达式之间有空格
    // enforce spacing between object rest-spread
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // 强制模块内的 import 排序
    // import sorting
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],

    // 要求 symbol 描述
    // require a Symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    // enforce usage of spacing in template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // 强制在 yield* 表达式中 * 周围使用空格
    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],

    // 要求或禁止使用严格模式指令
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],

    // 要求或禁止 var 声明中的初始化
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // 注：该规则已废弃
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // 禁止删除变量
    // disallow deletion of variables
    'no-delete-var': 'error',

    // 不允许标签与变量同名
    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // 禁用特定的全局变量
    // disallow specific globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite'
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan'
      }
    ].concat(confusingBrowserGlobals),

    // 禁止变量声明与外层作用域的变量同名
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // 禁止将标识符定义为受限的名字
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // 禁用未声明的变量，除非它们在或_global_或注释中被提到
    // disallow use of undeclared variables unless mentioned in a global block
    'no-undef': 'error',

    // 禁止将变量初始化为 undefined
    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // 禁止将 undefined 作为标识符
    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',

    // 禁止出现未使用过的变量
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],

    // 禁止在变量定义之前使用它们
    // disallow use of variables before they are defined
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true }
    ],

    // 强制数组方法的回调函数中有 return 语句
    // enforce return after a callback
    'callback-return': 'off',

    // 要求 require() 出现在顶层模块作用域中
    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // 要求回调函数中有容错处理
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // 禁用 Buffer() 构造函数
    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // 禁止混合常规变量声明和 require 调用
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // 禁止调用 require 时使用 new 操作符
    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // 禁止对**dirname和**filename进行字符串连接
    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // 禁用 process.env
    // disallow use of process.env
    'no-process-env': 'off',

    // 禁用 process.exit()
    // disallow process.exit()
    'no-process-exit': 'off',

    // 禁用通过 require 加载的指定模块
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // 禁用同步方法
    // disallow use of synchronous methods (off by default)
    'no-sync': 'off'
  }
};
