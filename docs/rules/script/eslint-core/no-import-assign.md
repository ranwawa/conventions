# no-import-assign

禁止修改导入的绑定

### 为什么

ES模块的导入绑定更新会导致运行时错误。

### 建议

如果想要修改一个全局共享的单例值,可以修改导出模块的一个属性.

### 错误示例

```js
import mod from './moduleA.js';

mod = 520;
```

### 正确示例

```js
import mod from './moduleA.js';

mod.prop = 520;
```

### 参考

- [no-import-assign](https://eslint.org/docs/rules/no-import-assign)
