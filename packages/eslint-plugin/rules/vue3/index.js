module.exports = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['vue'],
  rules: {
    // base

    // https://eslint.vuejs.org/rules/comment-directive.html
    'vue/comment-directive': 'error',

    // https://eslint.vuejs.org/rules/jsx-uses-vars.html
    'vue/jsx-uses-vars': 'error',

    // essential

    // 组件名必须由多个单词构成
    // https://eslint.vuejs.org/rules/multi-word-component-names.html
    'vue/multi-word-component-names': 'error',

    // 禁止使用箭头函数定义监听函数
    // https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
    'vue/no-arrow-functions-in-watch': 'error',

    // https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
    'vue/no-async-in-computed-properties': 'error',

    // https://eslint.vuejs.org/rules/no-child-content.html
    'vue/no-child-content': 'error',

    // https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
    'vue/no-computed-properties-in-data': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
    'vue/no-deprecated-data-object-declaration': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
    'vue/no-deprecated-destroyed-lifecycle': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
    'vue/no-deprecated-dollar-listeners-api': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
    'vue/no-deprecated-dollar-scopedslots-api': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-events-api.html
    'vue/no-deprecated-events-api': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-filter.html
    'vue/no-deprecated-filter': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
    'vue/no-deprecated-functional-template': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
    'vue/no-deprecated-html-element-is': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
    'vue/no-deprecated-inline-template': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
    'vue/no-deprecated-props-default-this': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html
    'vue/no-deprecated-router-link-tag-prop': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
    'vue/no-deprecated-scope-attribute': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
    'vue/no-deprecated-slot-attribute': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
    'vue/no-deprecated-slot-scope-attribute': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
    'vue/no-deprecated-v-bind-sync': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-v-is.html
    'vue/no-deprecated-v-is': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
    'vue/no-deprecated-v-on-native-modifier': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
    'vue/no-deprecated-v-on-number-modifiers': 'error',

    // https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
    'vue/no-deprecated-vue-config-keycodes': 'error',

    // https://eslint.vuejs.org/rules/no-dupe-keys.html
    'vue/no-dupe-keys': 'error',

    // https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
    'vue/no-dupe-v-else-if': 'error',

    // https://eslint.vuejs.org/rules/no-duplicate-attributes.html
    'vue/no-duplicate-attributes': 'error',

    // https://eslint.vuejs.org/rules/no-export-in-script-setup.html
    'vue/no-export-in-script-setup': 'error',

    // https://eslint.vuejs.org/rules/no-expose-after-await.html
    'vue/no-expose-after-await': 'error',

    // https://eslint.vuejs.org/rules/no-lifecycle-after-await.html
    'vue/no-lifecycle-after-await': 'error',

    // https://eslint.vuejs.org/rules/no-mutating-props.html
    'vue/no-mutating-props': 'error',

    // https://eslint.vuejs.org/rules/no-parsing-error.html
    'vue/no-parsing-error': 'error',

    // https://eslint.vuejs.org/rules/no-ref-as-operand.html
    'vue/no-ref-as-operand': 'error',

    // https://eslint.vuejs.org/rules/no-reserved-component-names.html
    'vue/no-reserved-component-names': 'error',

    // https://eslint.vuejs.org/rules/no-reserved-keys.html
    'vue/no-reserved-keys': 'error',

    // https://eslint.vuejs.org/rules/no-reserved-props.html
    'vue/no-reserved-props': 'error',

    // https://eslint.vuejs.org/rules/no-setup-props-destructure.html
    'vue/no-setup-props-destructure': 'error',

    // https://eslint.vuejs.org/rules/no-shared-component-data.html
    'vue/no-shared-component-data': 'error',

    // https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
    'vue/no-side-effects-in-computed-properties': 'error',

    // https://eslint.vuejs.org/rules/no-template-key.html
    'vue/no-template-key': 'error',

    // https://eslint.vuejs.org/rules/no-textarea-mustache.html
    'vue/no-textarea-mustache': 'error',

    // https://eslint.vuejs.org/rules/no-unused-components.html
    'vue/no-unused-components': 'error',

    // https://eslint.vuejs.org/rules/no-unused-vars.html
    'vue/no-unused-vars': 'error',

    // https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
    'vue/no-use-computed-property-like-method': 'error',

    // https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
    'vue/no-use-v-if-with-v-for': 'error',

    // https://eslint.vuejs.org/rules/no-useless-template-attributes.html
    'vue/no-useless-template-attributes': 'error',

    // https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
    'vue/no-v-for-template-key-on-child': 'error',

    // https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html
    'vue/no-v-text-v-html-on-component': 'error',

    // https://eslint.vuejs.org/rules/no-watch-after-await.html
    'vue/no-watch-after-await': 'error',
    'vue/prefer-import-from-vue': 'error',

    // https://eslint.vuejs.org/rules/require-component-is.html
    'vue/require-component-is': 'error',

    // https://eslint.vuejs.org/rules/require-prop-type-constructor.html
    'vue/require-prop-type-constructor': 'error',

    // https://eslint.vuejs.org/rules/require-render-return.html
    'vue/require-render-return': 'error',

    // https://eslint.vuejs.org/rules/require-slots-as-functions.html
    'vue/require-slots-as-functions': 'error',

    // https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
    'vue/require-toggle-inside-transition': 'error',

    // https://eslint.vuejs.org/rules/require-v-for-key.html
    'vue/require-v-for-key': 'error',

    // https://eslint.vuejs.org/rules/require-valid-default-prop.html
    'vue/require-valid-default-prop': 'error',

    // https://eslint.vuejs.org/rules/return-in-computed-property.html
    'vue/return-in-computed-property': 'error',

    // https://eslint.vuejs.org/rules/return-in-emits-validator.html
    'vue/return-in-emits-validator': 'error',

    // https://eslint.vuejs.org/rules/use-v-on-exact.html
    'vue/use-v-on-exact': 'error',

    // https://eslint.vuejs.org/rules/valid-attribute-name.html
    'vue/valid-attribute-name': 'error',

    // https://eslint.vuejs.org/rules/valid-define-emits.html
    'vue/valid-define-emits': 'error',

    // https://eslint.vuejs.org/rules/valid-define-props.html
    'vue/valid-define-props': 'error',

    // https://eslint.vuejs.org/rules/valid-next-tick.html
    'vue/valid-next-tick': 'error',

    // https://eslint.vuejs.org/rules/valid-template-root.html
    'vue/valid-template-root': 'error',

    // https://eslint.vuejs.org/rules/valid-v-bind.html
    'vue/valid-v-bind': 'error',

    // https://eslint.vuejs.org/rules/valid-v-cloak.html
    'vue/valid-v-cloak': 'error',

    // https://eslint.vuejs.org/rules/valid-v-else-if.html
    'vue/valid-v-else-if': 'error',

    // https://eslint.vuejs.org/rules/valid-v-else.html
    'vue/valid-v-else': 'error',

    // https://eslint.vuejs.org/rules/valid-v-for.html
    'vue/valid-v-for': 'error',

    // https://eslint.vuejs.org/rules/valid-v-html.html
    'vue/valid-v-html': 'error',

    // https://eslint.vuejs.org/rules/valid-v-if.html
    'vue/valid-v-if': 'error',

    // https://eslint.vuejs.org/rules/valid-v-is.html
    'vue/valid-v-is': 'error',

    // https://eslint.vuejs.org/rules/valid-v-memo.html
    'vue/valid-v-memo': 'error',

    // https://eslint.vuejs.org/rules/valid-v-model.html
    'vue/valid-v-model': 'error',

    // https://eslint.vuejs.org/rules/valid-v-on.html
    'vue/valid-v-on': 'error',

    // https://eslint.vuejs.org/rules/valid-v-once.html
    'vue/valid-v-once': 'error',

    // https://eslint.vuejs.org/rules/valid-v-pre.html
    'vue/valid-v-pre': 'error',

    // https://eslint.vuejs.org/rules/valid-v-show.html
    'vue/valid-v-show': 'error',

    // https://eslint.vuejs.org/rules/valid-v-slot.html
    'vue/valid-v-slot': 'error',

    // https://eslint.vuejs.org/rules/valid-v-text.html
    'vue/valid-v-text': 'error',

    // strongly-recommended

    // 使用驼峰命名自定义组件的属性
    // https://eslint.vuejs.org/rules/attribute-hyphenation.html
    'vue/attribute-hyphenation': ['warn', 'never'],

    'vue/component-definition-name-casing': 'warn',
    'vue/first-attribute-linebreak': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': 'warn',
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/max-attributes-per-line': 'warn',
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-multi-spaces': 'warn',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    'vue/no-template-shadow': 'warn',
    'vue/one-component-per-file': 'warn',
    'vue/prop-name-casing': 'warn',
    'vue/require-default-prop': 'warn',

    // https://eslint.vuejs.org/rules/require-explicit-emits.html
    'vue/require-explicit-emits': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/singleline-html-element-content-newline': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-event-hyphenation': 'warn',
    'vue/v-on-style': 'warn',
    'vue/v-slot-style': 'warn',

    // recommended

    // https://eslint.vuejs.org/rules/attributes-order.html
    'vue/attributes-order': 'warn',

    // https://eslint.vuejs.org/rules/component-tags-order.html
    'vue/component-tags-order': 'warn',

    // https://eslint.vuejs.org/rules/no-lone-template.html
    'vue/no-lone-template': 'warn',

    // https://eslint.vuejs.org/rules/no-multiple-slot-args.html
    'vue/no-multiple-slot-args': 'warn',

    // https://eslint.vuejs.org/rules/no-v-html.html
    'vue/no-v-html': 'warn',

    // https://eslint.vuejs.org/rules/order-in-components.html
    'vue/order-in-components': 'warn',

    // https://eslint.vuejs.org/rules/this-in-template.html
    'vue/this-in-template': 'warn',
  },
};
