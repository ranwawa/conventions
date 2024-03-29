// 文件内容由代码自动生成,请勿修改
module.exports = {
  "@awawa/jsx-a11y/alt-text": [
    "warn",
    {
      elements: ["img", "object", "area", 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': [],
    },
  ],
  "@awawa/jsx-a11y/anchor-has-content": ["warn", { components: [] }],
  "@awawa/jsx-a11y/anchor-is-valid": [
    "warn",
    {
      components: ["Link"],
      specialLink: ["to"],
      aspects: ["noHref", "invalidHref", "preferButton"],
    },
  ],
  "@awawa/jsx-a11y/aria-activedescendant-has-tabindex": "warn",
  "@awawa/jsx-a11y/aria-props": "warn",
  "@awawa/jsx-a11y/aria-proptypes": "warn",
  "@awawa/jsx-a11y/aria-role": ["warn", { ignoreNonDOM: false }],
  "@awawa/jsx-a11y/aria-unsupported-elements": "warn",
  "@awawa/jsx-a11y/click-events-have-key-events": "warn",
  "@awawa/jsx-a11y/control-has-associated-label": [
    "warn",
    {
      labelAttributes: ["label"],
      controlComponents: [],
      ignoreElements: [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "video",
      ],
      ignoreRoles: [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid",
      ],
      depth: 5,
    },
  ],
  "@awawa/jsx-a11y/heading-has-content": ["warn", { components: [""] }],
  "@awawa/jsx-a11y/html-has-lang": "warn",
  "@awawa/jsx-a11y/iframe-has-title": "warn",
  "@awawa/jsx-a11y/img-redundant-alt": "warn",
  "@awawa/jsx-a11y/interactive-supports-focus": "warn",
  "@awawa/jsx-a11y/label-has-associated-control": [
    "warn",
    {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: "both",
      depth: 25,
    },
  ],
  "@awawa/jsx-a11y/lang": "warn",
  "@awawa/jsx-a11y/media-has-caption": [
    "warn",
    { audio: [], video: [], track: [] },
  ],
  "@awawa/jsx-a11y/mouse-events-have-key-events": "warn",
  "@awawa/jsx-a11y/no-access-key": "warn",
  "@awawa/jsx-a11y/no-autofocus": ["warn", { ignoreNonDOM: true }],
  "@awawa/jsx-a11y/no-distracting-elements": [
    "warn",
    { elements: ["marquee", "blink"] },
  ],
  "@awawa/jsx-a11y/no-interactive-element-to-noninteractive-role": [
    "warn",
    { tr: ["none", "presentation"] },
  ],
  "@awawa/jsx-a11y/no-noninteractive-element-interactions": [
    "warn",
    {
      handlers: [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp",
      ],
    },
  ],
  "@awawa/jsx-a11y/no-noninteractive-element-to-interactive-role": [
    "warn",
    {
      ul: [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid",
      ],
      ol: [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid",
      ],
      li: ["menuitem", "option", "row", "tab", "treeitem"],
      table: ["grid"],
      td: ["gridcell"],
    },
  ],
  "@awawa/jsx-a11y/no-noninteractive-tabindex": [
    "warn",
    { tags: [], roles: ["tabpanel"] },
  ],
  "@awawa/jsx-a11y/no-redundant-roles": "warn",
  "@awawa/jsx-a11y/no-static-element-interactions": [
    "warn",
    {
      handlers: [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp",
      ],
    },
  ],
  "@awawa/jsx-a11y/role-has-required-aria-props": "warn",
  "@awawa/jsx-a11y/role-supports-aria-props": "warn",
  "@awawa/jsx-a11y/scope": "warn",
  "@awawa/jsx-a11y/tabindex-no-positive": "warn",
};
