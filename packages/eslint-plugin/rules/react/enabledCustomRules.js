// 文件内容由代码自动生成,请勿修改
module.exports = {
  "@awawa/react/forbid-prop-types": [
    "error",
    {
      forbid: ["any", "array", "object"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],
  "@awawa/react/jsx-boolean-value": ["error", "never", { always: [] }],
  "@awawa/react/jsx-closing-bracket-location": ["error", "line-aligned"],
  "@awawa/react/jsx-closing-tag-location": "error",
  "@awawa/react/jsx-curly-spacing": [
    "error",
    "never",
    { allowMultiline: true },
  ],
  "@awawa/react/jsx-indent-props": ["error", 2],
  "@awawa/react/jsx-max-props-per-line": [
    "error",
    { maximum: 1, when: "multiline" },
  ],
  "@awawa/react/jsx-no-bind": [
    "error",
    {
      ignoreRefs: true,
      allowArrowFunctions: false,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],
  "@awawa/react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
  "@awawa/react/jsx-no-undef": "error",
  "@awawa/react/jsx-pascal-case": ["error", { allowAllCaps: true, ignore: [] }],
  "@awawa/react/jsx-uses-react": ["error"],
};
