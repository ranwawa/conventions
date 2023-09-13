# no-self-import

禁止引用同一文件自身的模块

### 为什么?

同个文件的模块,直接使用即可,不需要通过 import 语法引入,容易产生混淆.

### 错误示例

```js
// index.js
import newName from './index.js';

const name = 'zmn';
export default name;

console.log(newName);
```

### 正确示例

```js
const name = 'zmn';
export default name;

console.log(newName);
```

### 参考

- [import//no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules//no-self-import.md)
