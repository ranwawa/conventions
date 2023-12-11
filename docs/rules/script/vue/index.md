# vue
<!-- 
该文件是代码自动生成,请勿修改
-->
[自定义组件属性名必须使用连字符命名](./attribute-hyphenation.md)

[支持在`<template>`中使用注释指令](./comment-directive.md)

[组件定义名称必须是驼峰式命名](./component-definition-name-casing.md)

[属性的位置必须一致](./first-attribute-linebreak.md)

[标签闭合括号前必须换行](./html-closing-bracket-newline.md)

[标签闭合括号前必须有空格](./html-closing-bracket-spacing.md)

[必须使用闭合标签](./html-end-tags.md)

[模板中的缩进必须是2个空格](./html-indent.md)

[防止在JSX中使用的变量被标记为未使用](./jsx-uses-vars.md)

[组件名必须是多个单词](./multi-word-component-names.md)

[禁止在定义观察者时使用箭头函数](./no-arrow-functions-in-watch.md)

[禁止在计算属性中使用异步操作](./no-async-in-computed-properties.md)

[禁止元素的子内容被`v-html`或`v-text`指令覆盖](./no-child-content.md)

[禁止在`data`中访问计算属性](./no-computed-properties-in-data.md)

[禁止在data中使用已废弃的对象声明](./no-deprecated-data-object-declaration.md)

[禁止使用已废弃的`destroyed`和`beforeDestroy`生命周期钩子(Vue.js 3.0.0+)](./no-deprecated-destroyed-lifecycle.md)

[禁止使用已废弃的`$listeners`](./no-deprecated-dollar-listeners-api.md)

[禁止使用已废弃的`$scopedSlots` (在Vue.js 3.0.0+中)](./no-deprecated-dollar-scopedslots-api.md)

[禁止使用已废弃的事件API](./no-deprecated-events-api.md)

[禁止使用已废弃的`functional`模板](./no-deprecated-filter.md)

[为什么?](./no-deprecated-functional-template.md)

[禁止在HTML元素上使用已废弃的`is`属性](./no-deprecated-html-element-is.md)

[禁止使用已废弃的`inline-template`属性](./no-deprecated-inline-template.md)

[禁止在props默认函数中使用已弃用的`this`](./no-deprecated-props-default-this.md)

[禁止在`RouterLink`上使用已弃用的`tag`属性](./no-deprecated-router-link-tag-prop.md)

[禁止使用已废弃的`slot`属性](./no-deprecated-scope-attribute.md)

[为什么?](./no-deprecated-slot-attribute.md)

[禁止使用已废弃的`slot-scope`属性](./no-deprecated-slot-scope-attribute.md)

[禁止在 `v-bind` 指令上使用已废弃的 `.sync` 修饰符 (在 Vue.js 3.0.0+)](./no-deprecated-v-bind-sync.md)

[禁止使用已废弃的`v-is`指令](./no-deprecated-v-is.md)

[禁止使用已废弃的`.native`修饰符](./no-deprecated-v-on-native-modifier.md)

[禁止使用已废弃的数字（键码）修饰符](./no-deprecated-v-on-number-modifiers.md)

[禁止使用已废弃的`Vue.config.keyCodes`](./no-deprecated-vue-config-keycodes.md)

[禁止字段名重复](./no-dupe-keys.md)

[禁止在`v-if` / `v-else-if`链中出现重复的条件](./no-dupe-v-else-if.md)

[禁止属性重复](./no-duplicate-attributes.md)

[禁止在`<script setup>`中使用`export`](./no-export-in-script-setup.md)

[禁止在await表达式后异步注册`expose`](./no-expose-after-await.md)

[禁止异步注册生命周期钩子](./no-lifecycle-after-await.md)

[禁止修改组件的props](./no-mutating-props.md)

[禁止在`<template>`中出现解析错误](./no-parsing-error.md)

[禁止将`ref()`包装的值用作操作数](./no-ref-as-operand.md)

[禁止在组件定义中使用保留名称](./no-reserved-component-names.md)

[禁止覆盖保留关键字](./no-reserved-keys.md)

[禁止在props中使用保留名称](./no-reserved-props.md)

[禁止在`setup`中解构`props`导致失去响应性](./no-setup-props-destructure.md)

[组件的data属性必须是一个函数](./no-shared-component-data.md)

[禁止在计算属性中产生副作用](./no-side-effects-in-computed-properties.md)

[禁止在`<template>`上使用`key`属性](./no-template-key.md)

[禁止在`<textarea>`中使用插值表达式](./no-textarea-mustache.md)

[禁止注册模板中未使用的组件](./no-unused-components.md)

[禁止未使用的v-for指令或作用域属性的变量定义](./no-unused-vars.md)

[禁止将计算属性用作方法](./no-use-computed-property-like-method.md)

[禁止在同一个元素上同时使用`v-if`和`v-for`](./no-use-v-if-with-v-for.md)

[禁止在`<template>`上使用无用的属性](./no-useless-template-attributes.md)

[禁止在子元素上放置`<template v-for>`的key值](./no-v-for-template-key-on-child.md)

[禁止在组件上使用v-text/v-html](./no-v-text-v-html-on-component.md)

[禁止异步注册`watch`](./no-watch-after-await.md)

[必须从'vue'导入,而不是从'@vue/\*'导入](./prefer-import-from-vue.md)

[必须在`<component>`元素中使用`v-bind:is`](./require-component-is.md)

[必须使用构造函数作为prop的类型](./require-prop-type-constructor.md)

[必须在render函数中返回值](./require-render-return.md)

[必须将`$slots`的属性作为函数使用](./require-slots-as-functions.md)

[必须在`<transition>`内部控制内容的显示](./require-toggle-inside-transition.md)

[必须在`v-for`指令中使用`v-bind:key`](./require-v-for-key.md)

[默认属性值必须有效](./require-valid-default-prop.md)

[计算属性必须有返回值](./return-in-computed-property.md)

[必须在emits验证器中使用return语句](./return-in-emits-validator.md)

[必须在v-on上使用exact修饰符](./use-v-on-exact.md)

[必须使用有效的属性名](./valid-attribute-name.md)

[强制有效的 `defineEmits` 编译宏](./valid-define-emits.md)

[强制执行有效的 `defineProps` 编译器宏](./valid-define-props.md)

[必须正确使用`nextTick`函数](./valid-next-tick.md)

[模板根元素必须有效](./valid-template-root.md)

[必须使用有效的`v-bind`指令](./valid-v-bind.md)

[必须使用有效的`v-cloak`指令](./valid-v-cloak.md)

[必须将`else-if`放在`if`后面](./valid-v-else-if.md)

[必须将`v-else`放在最后](./valid-v-else.md)

[`v-for`指令必须有效](./valid-v-for.md)

[`v-html`指令必须有效](./valid-v-html.md)

[`v-if`指令必须有效](./valid-v-if.md)

[`v-is`指令必须有效](./valid-v-is.md)

[必须使用有效的`v-memo`指令](./valid-v-memo.md)

[必须使用有效的`v-model`指令](./valid-v-model.md)

[必须使用有效的`v-on`指令](./valid-v-on.md)

[必须使用有效的`v-once`指令](./valid-v-once.md)

[必须使用有效的`v-pre`指令](./valid-v-pre.md)

[`v-show`指令必须有效](./valid-v-show.md)

[`v-slot`指令必须有效](./valid-v-slot.md)

[强制使用有效的`v-text`指令](./valid-v-text.md)
