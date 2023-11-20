module.exports = {
  // 强制在 JSX 属性中一致地使用双引号或单引号
  // https://eslint.org/docs/rules/jsx-quotes
  // prettier重写
  'jsx-quotes': ['error', 'prefer-double'],

  // 类的实例方法中必须使用this
  // https://eslint.org/docs/rules/jsx-quotes
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate'
      ]
    }
  ],

  // 防止 React 组件定义中缺少 displayName
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': ['off', { ignoreTranspilerName: false }],

  // 禁止propTypes中出现any,array,object类型
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true
    }
  ],

  // 禁止 DOM 节点上的某些props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-dom-props.md
  'react/forbid-dom-props': ['off', { forbid: [] }],

  // boolean值为true的属性只需要写属性名即可
  // Enforce boolean attributes notation in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['error', 'never', { always: [] }],

  // 验证jsx中闭合括号的位置
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

  // 验证jsx中的结束标签位置
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  'react/jsx-closing-tag-location': 'error',

  // 在jsx属性和表达式中强制要求或禁止大括号内的空格
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

  // 在jsx中强制执行事件处理函数的命名规范
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  'react/jsx-handler-names': [
    'off',
    {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }
  ],
  // 验证jsx中的 props 缩进
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  'react/jsx-indent-props': ['error', 2],

  // 检测缺失key值
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  // Turned off because it has too many false positives
  'react/jsx-key': 'off',

  // 在jsx中限制单行上的prop的数量
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

  // 在jsx中禁止使用.bind()或箭头函数
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true
    }
  ],

  // 防止jsx中的重复属性
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

  // 防止在jsx中使用字符串
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  'react/jsx-no-literals': ['off', { noStrings: true }],

  // 禁止使用在jsx中未声明的变量
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': 'error',

  // 为用户定义的jsx组件强制执行驼峰拼写法
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      ignore: []
    }
  ],

  //强制 propTypes 声明按字母排序
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  'react/sort-prop-types': [
    'off',
    {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true
    }
  ],

  // Deprecated in favor of react/jsx-sort-props
  'react/jsx-sort-prop-types': 'off',

  // 强制 props 按字母排序
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  'react/jsx-sort-props': [
    'off',
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true
    }
  ],

  // 强制 defaultProps 声明按字母排序
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
  'react/jsx-sort-default-props': [
    'off',
    {
      ignoreCase: true
    }
  ],

  // 防止 React 被错误地标记为未使用
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  'react/jsx-uses-react': ['error'],

  // 防止jsx中使用的变量被错误地标记为未使用
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': 'error',

  // 防止使用危险的jsx属性
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'warn',

  // 防止使用过时的方法
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': ['error'],

  // 防止在componentDidMoun中使用 setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  // this is necessary for server-rendering
  'react/no-did-mount-set-state': 'off',

  // 防止在componentDidUpdate中使用 setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': 'error',

  // 防止在componentWillUpdate中使用 setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  'react/no-will-update-set-state': 'error',

  // 防止this.state的直接改变
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'off',

  // 防止使用isMounted
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': 'error',

  // 防止每个文件定义多个组件
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  'react/no-multi-comp': 'off',

  // 防止使用 setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  'react/no-set-state': 'off',

  // 防止使用字符串引用
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': 'error',

  // 防止使用未知的DOM属性
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': 'error',

  // 为React组件强制执行 ES5 或 ES6 类
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': ['error', 'always'],

  // 强制将无状态React组件编写为纯函数
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

  // 禁止调用未显示声明的props属性
  // Prevent missing props validation in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': [
    'error',
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }
  ],

  // 使用jsx时防止缺少 React
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'error',

  // 强制 ES5 或 ES6 类在渲染函数中返回值
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': 'error',

  // 防止没有子组件的额外结束标签
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': 'error',

  // 强制执行组件方法顺序
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
  'react/sort-comp': [
    'error',
    {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^handle.+$/',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount'
        ],
        rendering: ['/^render.+$/', 'render']
      }
    }
  ],

  // 防止多行 JSX周围缺少括号
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
  'react/jsx-wrap-multilines': [
    'error',
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }
  ],

  // 当元素是多行时需要在jsx的第一个prop是在新的一行
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  // 在jsx中强制等号周围有空格
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  'react/jsx-equals-spacing': ['error', 'never'],

  // 强制jsx缩进
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  'react/jsx-indent': ['error', 2],

  // 防止使用不安全的target='_blank'
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

  // 必须在.jsx/.tsx 文件中编写 jsx 语法
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

  // 防止注释作为文本节点插入
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': 'error',

  // 防止使用 ReactDOM.render 的返回值
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': 'error',

  // 强制 React 组件具有 shouldComponentUpdate 方法
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  'react/require-optimization': ['off', { allowDecorators: [] }],

  // 防止使用 findDOMNode
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  'react/no-find-dom-node': 'error',

  // 禁止组件上的某些props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  'react/forbid-component-props': ['off', { forbid: [] }],

  // Forbid certain elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  'react/forbid-elements': ['off', { forbid: [] }],

  // 防止子项和 props.dangerouslySetInnerHTML之间出现问题
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  'react/no-danger-with-children': 'error',

  // 防止定义未使用的propTypes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  'react/no-unused-prop-types': [
    'error',
    {
      customValidators: [],
      skipShapeProps: true
    }
  ],

  // 将样式prop值强制为对象或一个对象的变量
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  'react/style-prop-object': 'error',

  // 防止无效字符出现在标记中
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  'react/no-unescaped-entities': 'error',

  // 防止将子项作为props传递
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  'react/no-children-prop': 'error',

  // 验证 JSX 开始括号和结束括号中的空格
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }
  ],

  // Enforce spaces before the closing bracket of self-closing JSX elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
  // Deprecated in favor of jsx-tag-spacing
  'react/jsx-space-before-closing': ['off', 'always'],

  // 禁止使用数组索引做为循环的标记
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  'react/no-array-index-key': 'error',

  // 必须给可选的 props 属性设置默认值
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
  'react/require-default-props': [
    'off',
    {
      forbidDefaultForRequired: true
    }
  ],

  //  禁止使用未导出的propTypes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // this is intentionally set to "warn". it would be "error",
  // but it's only critical if you're stripping propTypes in production.
  'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

  // 防止 void DOM 元素接收子元素
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  'react/void-dom-elements-no-children': 'error',

  // 强制所有 defaultProps 有一个对应的非必需 PropType
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
  'react/default-props-match-prop-types': [
    'error',
    { allowRequiredDefaults: false }
  ],

  // 扩展 React.PureComponent 时防止使用 shouldComponentUpdate
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
  'react/no-redundant-should-component-update': 'error',

  // 防止定义未使用的state
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
  'react/no-unused-state': 'error',

  // 强制布尔props命名一致
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
  'react/boolean-prop-naming': [
    'off',
    {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: ''
    }
  ],

  // 防止常见的大小写错误
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
  'react/no-typos': 'error',

  // 在 JSX props中/或子项中强制使用大括号或禁止使用不必要的大括号
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' }
  ],

  // 每行一个 JSX 元素
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
  'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

  // 必须使用props、state和context的解构赋值
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
  'react/destructuring-assignment': ['error', 'always'],

  // 必须在 setState 的回调中使用 state
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
  'react/no-access-state-in-setstate': 'error',

  // 防止使用button元素没有显式属性的元素type
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: false
    }
  ],

  // Ensures inline tags are not rendered without spaces between them
  'react/jsx-child-element-spacing': 'off',

  // 防止this在无状态功能组件中使用
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
  'react/no-this-in-sfc': 'error',

  // 验证 JSX 最大深度
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
  'react/jsx-max-depth': 'off',

  // 禁止内联 JSX props之间有多个空格
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
  'react/jsx-props-no-multi-spaces': 'error',

  // 防止使用UNSAFE_方法
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/157cc932be2cfaa56b3f5b45df6f6d4322a2f660/docs/rules/no-unsafe.md
  'react/no-unsafe': 'off',

  // 强制执行 React 片段的简写或标准形式
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],

  // 在 JSX 属性和表达式中的花括号中强制换行
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  'react/jsx-curly-newline': [
    'error',
    {
      multiline: 'consistent',
      singleline: 'consistent'
    }
  ],

  // 强制状态初始化样式
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  // TODO: set to "never" once babel-preset-airbnb supports public class fields
  'react/state-in-constructor': ['error', 'always'],

  // 必须将 props 属性类型检查及默认值放在类函数外
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  // TODO: set to "static public field" once babel-preset-airbnb supports public class fields
  'react/static-property-placement': ['error', 'property assignment'],

  // 禁止 JSX props传播
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  'react/jsx-props-no-spreading': [
    'error',
    {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
      exceptions: []
    }
  ],

  // 强制 props 是只读的
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  'react/prefer-read-only-props': 'off',

  // 防止使用javascript:URL
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  'react/jsx-no-script-url': [
    'error',
    [
      {
        name: 'Link',
        props: ['to']
      }
    ]
  ],

  // 禁止不必要的fragments
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  'react/jsx-no-useless-fragment': 'error',

  // 防止相邻的内联元素不被空格分隔
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
  // TODO: enable? semver-major
  'react/no-adjacent-inline-elements': 'off',

  // 必须使用箭头函数声明函数式组件
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['arrow-function'],
      unnamedComponents: 'arrow-function'
    }
  ],

  // 在 jsx 元素和表达式之后强制空行
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-newline.md
  'react/jsx-newline': 'off',

  // 防止react contexts采用不稳定的值
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-no-constructed-context-values.md
  'react/jsx-no-constructed-context-values': 'error',

  // 防止在组件内部创建不稳定的组件
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/c2a790a3472eea0f6de984bdc3ee2a62197417fb/docs/rules/no-unstable-nested-components.md
  'react/no-unstable-nested-components': 'error',

  // 强制在 React 元素中不使用命名空间
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/8785c169c25b09b33c95655bf508cf46263bc53f/docs/rules/no-namespace.md
  'react/no-namespace': 'error',

  // 偏好精确的 proptype 定义
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/8785c169c25b09b33c95655bf508cf46263bc53f/docs/rules/prefer-exact-props.md
  'react/prefer-exact-props': 'error',

  // 生命周期方法应该是原型上的方法，而不是类字段
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-arrow-function-lifecycle.md
  'react/no-arrow-function-lifecycle': 'error',

  // 防止使用无效属性
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-invalid-html-attribute.md
  'react/no-invalid-html-attribute': 'error',

  // 防止声明组件类的未使用方法
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-unused-class-component-methods.md
  'react/no-unused-class-component-methods': 'error',

  // 确保 useState hook 值和 setter 变量的解构和对称命名
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/c8833f301314dab3e79ef7ac4cf863e4d5fa0019/docs/rules/hook-use-state.md
  // TODO: semver-major, enable
  'react/hook-use-state': 'off',

  // 在 iframe 元素上强制执行sandbox属性
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/c8833f301314dab3e79ef7ac4cf863e4d5fa0019/docs/rules/iframe-missing-sandbox.md
  // TODO: semver-major, enable
  'react/iframe-missing-sandbox': 'off',

  // 防止呈现有问题的泄漏值
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-leaked-render.md
  // TODO: semver-major, enable
  'react/jsx-no-leaked-render': 'off'
};
