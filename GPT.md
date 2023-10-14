请使用初级前端开发师易于理解的语言,将eslint规则翻译成比较地道本土化的中文.

翻译过程中必须满足以下13条所有的要求

要求:

1. 概括规则名(必须以禁止,必须,推荐,不推荐开头.20字以内)
2. 概述为什么会有这条规则,如果原文中没有说明,请运用你的知识进行总结(66字以内)
3. 概述建议怎么修改(30字以内)
4. 无论源代码中有多少个示例代码块,翻译后的正确和错误的示例分别只保留一个代码块
5. 无论源代码中的正确示例或错误示例代码块中包含了多少函数或者变量示例,始终只保留其中一个示例,太多的示例会给用户带来干扰
6. 删除示例中eslint的注释部分,比如/\*eslint max-classes-per-file: "error"\*/
7. 示例中的字符串值统一使用'ranwawa','zhangshan', 'lisi', 'wangwu', 'zhaoermazi'以此类推
8. 外部模块示例,只使用react和lodash
9. 内部模块示例,只使用./moduleA ./moduleB以此类推
10. 示例中的变量名,只使用foo,bar,baz以此类推
11. 示例中的数值,只使用520,1314,666,888以此类推
12. 如果源文件的规则包含配置选项进而导致无法给出明确的建议时,先问我要怎么配置,当我回得具体的配置项后,再根据配置进行翻译
13. 返回的格式必须满足下面的示例格式(返回结果请保留markdown原文,以便我复制)

## 下面---之间的内容是示例格式

---示例格式开始---

# 规则英文名

规则中文名

### 为什么

为什么会有这条规则

### 建议

建议如何修改

### 错误示例

```

```

### 正确示例

```

```

### 参考

- [规则英文名](规则链接)

---示例格式结束---

下面---之间的内容是一段原文

---原文开始---
Files containing multiple classes can often result in a less navigable and poorly structured codebase. Best practice is to keep each file limited to a single responsibility.

## Rule Details

This rule enforces that each file may contain only a particular number of classes and no more.
Examples of **incorrect** code for this rule:
::: incorrect

```js
/*eslint max-classes-per-file: "error"*/
// index.js
class Foo {}
class Bar {}
class MoreExamples {}
```

:::
Examples of **correct** code for this rule:
::: correct

```js
/*eslint max-classes-per-file: "error"*/
// Foo.js
class Foo {}
```

:::

## Options

This rule may be configured with either an object or a number. If the option is an object, it may contain one or both of:

- `ignoreExpressions`: a boolean option (defaulted to `false`) to ignore class expressions.
- `max`: a numeric option (defaulted to 1) to specify the maximum number of classes.
  For example:

```json
{ "max-classes-per-file": ["error", 1] }
```

```json
{ "max-classes-per-file": ["error", { "ignoreExpressions": true, "max": 2 }] }
```

Examples of **correct** code for this rule with the `max` option set to `2`:
::: correct

```js
/* eslint max-classes-per-file: ["error", 2] */
// index.js
class Foo {}
class Bar {}
```

:::
Examples of **correct** code for this rule with the `ignoreExpressions` option set to `true`:
::: correct

```js
/* eslint max-classes-per-file: ["error", { ignoreExpressions: true }] */
// Foo.js
class Foo {
  forDescriptor(descriptor) {
    return class {
      visit(node) {
        return `Visiting ${descriptor}.`;
      }
    };
  }
}
```

:::
---原文结束---

下面---之间的内容是翻译示例

下面2行是模拟场景,并不是你的真正的回复内容.只有当规则原文中包含配置选项时你才会提问题,等我回答之后你再开始正式的翻译

你的提问: 该规则存在配置项,请描述你的配置项
我的回复: 'max-classes-per-file': ['error', 1],

---翻译示例开始---

# max-classes-per-file

每个文件中只能有一个类

### 为什么

包含多个类的文件通常会导致代码库的导航性和结构性较差。

### 建议

多余的类单独用自己的文件存放,并且保持文件名和类名一致

### 错误示例

```js
// index.js
class Foo {}
```

### 正确示例

```js
// foo.js
class Foo {}
```

### 参考

- [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)
  ---翻译示例结束---

如果你准备好了,请回复准备好了,我就会将需要翻译的规则发给你.
