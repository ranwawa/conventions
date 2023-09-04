将eslint规则翻译成中文.

要求:

1. 概括规则名(必须以禁止,必须,推荐,不推荐开头.20字以内)
2. 概述为什么会有这条规则(50字以内)
3. 概述建议怎么修改(30字以内)
4. 正确和错误的示例分别只保留一个
5. 示例中的字符串值统一使用'ranwawa','zhangshan'
6. 引入外部模块示例,只使用react和lodash
7. 引入内部模块示例,只使用./moduleA.js ./moduleB.js以此类推
8. 返回的格式必须满足以下格式(返回结果不需要转换成html,请保留markdown原文,以便我复制markdown原文)

## 下面---之间的内容是示例格式

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

---

下面---之间的内容是一段原文

---

# import/named

💼🚫 This rule is enabled in the following configs: ❗ `errors`, ☑️ `recommended`. This rule is _disabled_ in the ⌨️ `typescript` config.

<!-- end auto-generated rule header -->

Verifies that all named imports are part of the set of named exports in the referenced module.

For `export`, verifies that all named exports exist in the referenced module.

Note: for packages, the plugin will find exported names
from [`jsnext:main`] (deprecated) or `module`, if present in `package.json`.
Redux's npm module includes this key, and thereby is lintable, for example.

A module path that is [ignored] or not [unambiguously an ES module] will not be reported when imported. Note that type imports and exports, as used by [Flow], are always ignored.

[ignored]: ../../README.md#importignore
[unambiguously an ES module]: https://github.com/bmeck/UnambiguousJavaScriptGrammar
[Flow]: https://flow.org/

## Rule Details

Given:

```js
// ./foo.js
export const foo = "I'm so foo";
```

The following is considered valid:

```js
// ./bar.js
import { foo } from './foo';

// ES7 proposal
export { foo as bar } from './foo';

// node_modules without jsnext:main are not analyzed by default
// (import/ignore setting)
import { SomeNonsenseThatDoesntExist } from 'react';
```

...and the following are reported:

```js
// ./baz.js
import { notFoo } from './foo';

// ES7 proposal
export { notFoo as defNotBar } from './foo';

// will follow 'jsnext:main', if available
import { dontCreateStore } from 'redux';
```

---

下面---之间的内容是翻译示例

---

# @ranwawa/named

禁止导入不存在的模块

### 为什么?

导入不存在的模块,会导致运行时异常.

### 建议

请删除不存在的模块导入语句.

### 错误示例

> moduleA.js

```js
export const foo = 'ranwawa';
export const bar = 'zhangsan';
```

> moduleB.js

```js
import { noFoo } from './moduleA.js'; // -> SyntaxError: The requested module './moduleA.js' does not provide an export named 'noFoo'
```

### 正确示例

> moduleC.js

```js
import { foo } from './moduleA.js';
```

---

如果你准备好了,请回复准备好了,我就会将需要翻译的规则发给你.
