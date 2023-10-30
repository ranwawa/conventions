// 文件内容由代码自动生成,请勿修改
module.exports = {
  "@awawa/array-callback-return": ["error", { allowImplicit: true }],
  "@awawa/arrow-body-style": [
    "error",
    "as-needed",
    { requireReturnForObjectLiteral: false },
  ],
  "@awawa/arrow-parens": ["error", "always"],
  "@awawa/arrow-spacing": ["error", { before: true, after: true }],
  "@awawa/block-scoped-var": "error",
  "@awawa/class-methods-use-this": ["error", { exceptMethods: [] }],
  "@awawa/consistent-return": "error",
  "@awawa/constructor-super": "error",
  "@awawa/curly": ["error", "all"],
  "@awawa/default-case-last": "error",
  "@awawa/default-case": ["error", { commentPattern: "^no default$" }],
  "@awawa/default-param-last": "error",
  "@awawa/dot-location": ["error", "property"],
  "@awawa/dot-notation": ["error", { allowKeywords: true }],
  "@awawa/eqeqeq": ["error", "always", { null: "ignore" }],
  "@awawa/for-direction": "error",
  "@awawa/generator-star-spacing": ["error", { before: false, after: true }],
  "@awawa/getter-return": ["error", { allowImplicit: true }],
  "@awawa/grouped-accessor-pairs": ["error", "getBeforeSet"],
  "@awawa/guard-for-in": "error",
  "@awawa/max-classes-per-file": ["error", 1],
  "@awawa/no-alert": "warn",
  "@awawa/no-async-promise-executor": "error",
  "@awawa/no-await-in-loop": "error",
  "@awawa/no-caller": "error",
  "@awawa/no-case-declarations": "error",
  "@awawa/no-class-assign": "error",
  "@awawa/no-compare-neg-zero": "error",
  "@awawa/no-cond-assign": ["error", "always"],
  "@awawa/no-confusing-arrow": ["error", { allowParens: true }],
  "@awawa/no-const-assign": "error",
  "@awawa/no-constant-condition": "warn",
  "@awawa/no-constructor-return": "error",
  "@awawa/no-control-regex": "error",
  "@awawa/no-debugger": "error",
  "@awawa/no-dupe-args": "error",
  "@awawa/no-dupe-class-members": "error",
  "@awawa/no-dupe-else-if": "error",
  "@awawa/no-dupe-keys": "error",
  "@awawa/no-duplicate-case": "error",
  "@awawa/no-else-return": ["error", { allowElseIf: false }],
  "@awawa/no-empty-character-class": "error",
  "@awawa/no-empty-function": [
    "error",
    { allow: ["arrowFunctions", "functions", "methods"] },
  ],
  "@awawa/no-empty-pattern": "error",
  "@awawa/no-empty": "error",
  "@awawa/no-eval": "error",
  "@awawa/no-ex-assign": "error",
  "@awawa/no-extend-native": "error",
  "@awawa/no-extra-bind": "error",
  "@awawa/no-extra-boolean-cast": "error",
  "@awawa/no-extra-label": "error",
  "@awawa/no-extra-semi": "error",
  "@awawa/no-fallthrough": "error",
  "@awawa/no-floating-decimal": "error",
  "@awawa/no-func-assign": "error",
  "@awawa/no-global-assign": ["error", { exceptions: [] }],
  "@awawa/no-implied-eval": "error",
  "@awawa/no-import-assign": "error",
  "@awawa/no-inner-declarations": "error",
  "@awawa/no-invalid-regexp": "error",
  "@awawa/no-irregular-whitespace": "error",
  "@awawa/no-iterator": "error",
  "@awawa/no-labels": ["error", { allowLoop: false, allowSwitch: false }],
  "@awawa/no-lone-blocks": "error",
  "@awawa/no-loop-func": "error",
  "@awawa/no-loss-of-precision": "error",
  "@awawa/no-misleading-character-class": "error",
  "@awawa/no-multi-spaces": ["error", { ignoreEOLComments: false }],
  "@awawa/no-multi-str": "error",
  "@awawa/no-new-func": "error",
  "@awawa/no-new-symbol": "error",
  "@awawa/no-new-wrappers": "error",
  "@awawa/no-new": "error",
  "@awawa/no-nonoctal-decimal-escape": "error",
  "@awawa/no-obj-calls": "error",
  "@awawa/no-octal-escape": "error",
  "@awawa/no-octal": "error",
  "@awawa/no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "acc",
        "accumulator",
        "e",
        "ctx",
        "context",
        "req",
        "request",
        "res",
        "response",
        "$scope",
        "staticContext",
      ],
      ignorePropertyModificationsForRegex: ["^effect[A-Z]"],
    },
  ],
  "@awawa/no-promise-executor-return": "error",
  "@awawa/no-proto": "error",
  "@awawa/no-prototype-builtins": "error",
  "@awawa/no-redeclare": "error",
  "@awawa/no-regex-spaces": "error",
  "@awawa/no-restricted-exports": [
    "error",
    { restrictedNamedExports: ["default", "then"] },
  ],
  "@awawa/no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated",
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      object: "Math",
      property: "pow",
      message: "Use the exponentiation operator (**) instead.",
    },
  ],
  "@awawa/no-return-assign": ["error", "always"],
  "@awawa/no-script-url": "error",
  "@awawa/no-self-assign": ["error", { props: true }],
  "@awawa/no-self-compare": "error",
  "@awawa/no-sequences": "error",
  "@awawa/no-setter-return": "error",
  "@awawa/no-sparse-arrays": "error",
  "@awawa/no-template-curly-in-string": "error",
  "@awawa/no-this-before-super": "error",
  "@awawa/no-throw-literal": "error",
  "@awawa/no-unexpected-multiline": "error",
  "@awawa/no-unreachable-loop": ["error", { ignore: [] }],
  "@awawa/no-unreachable": "error",
  "@awawa/no-unsafe-finally": "error",
  "@awawa/no-unsafe-negation": "error",
  "@awawa/no-unsafe-optional-chaining": [
    "error",
    { disallowArithmeticOperators: true },
  ],
  "@awawa/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false,
    },
  ],
  "@awawa/no-unused-labels": "error",
  "@awawa/no-useless-backreference": "error",
  "@awawa/no-useless-catch": "error",
  "@awawa/no-useless-computed-key": "error",
  "@awawa/no-useless-concat": "error",
  "@awawa/no-useless-constructor": "error",
  "@awawa/no-useless-escape": "error",
  "@awawa/no-useless-rename": [
    "error",
    { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
  ],
  "@awawa/no-useless-return": "error",
  "@awawa/no-var": "error",
  "@awawa/no-void": "error",
  "@awawa/no-with": "error",
  "@awawa/object-shorthand": [
    "error",
    "always",
    { ignoreConstructors: false, avoidQuotes: true },
  ],
  "@awawa/prefer-arrow-callback": [
    "error",
    { allowNamedFunctions: false, allowUnboundThis: true },
  ],
  "@awawa/prefer-const": [
    "error",
    { destructuring: "any", ignoreReadBeforeAssign: true },
  ],
  "@awawa/prefer-destructuring": [
    "error",
    {
      VariableDeclarator: { array: false, object: true },
      AssignmentExpression: { array: true, object: false },
    },
    { enforceForRenamedProperties: false },
  ],
  "@awawa/prefer-numeric-literals": "error",
  "@awawa/prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
  "@awawa/prefer-regex-literals": [
    "error",
    { disallowRedundantWrapping: true },
  ],
  "@awawa/prefer-rest-params": "error",
  "@awawa/prefer-spread": "error",
  "@awawa/prefer-template": "error",
  "@awawa/radix": "error",
  "@awawa/require-yield": "error",
  "@awawa/rest-spread-spacing": ["error", "never"],
  "@awawa/use-isnan": "error",
  "@awawa/valid-typeof": ["error", { requireStringLiterals: true }],
  "@awawa/vars-on-top": "error",
  "@awawa/wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
  "@awawa/yoda": "error",
};
