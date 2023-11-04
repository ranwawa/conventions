# no-useless-rename

禁止无用的重命名

### 为什么

import和export语句以及解构赋值中要以重命名引用。如果重命名为相同的名称，那重命名他干什么呢?

### 建议

换一个不一样的名字或者直接引用.

### 错误示例

```js
import { foo as foo } from './moduleA';
```

### 正确示例

```js
import { foo } from './moduleA';
```

### 参考

- [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)
