# react-hooks/exhaustive-deps

必须在React Hook的依赖数组中列出所有依赖

### 为什么

为了确保React Hook的依赖正确，避免因缺失依赖导致的潜在bug。

### 建议

在React Hook的依赖数组中列出所有依赖。

### 错误示例

```js
import React, { useEffect } from 'react';

function Foo({ bar }) {
  useEffect(() => {
    console.log(bar);
  }, []); // 这里缺少依赖 'bar'
}
```

### 正确示例

```js
import React, { useEffect } from 'react';

function Foo({ bar }) {
  useEffect(() => {
    console.log(bar);
  }, [bar]); // 这里列出了所有依赖
}
```

### 参考

- [react-hooks/exhaustive-deps](https://legacy.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)
