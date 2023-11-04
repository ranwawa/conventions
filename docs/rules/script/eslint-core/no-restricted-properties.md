# no-restricted-properties

禁止使用特定的对象属性

### 为什么

有些API已经被废弃,或者使用的时候存在很严重的安全隐患.

### 建议

换成新版规范推荐的写法

### 错误示例

```js
function foo() {
  console.log(arguments.callee);
}
global.isFinite();
self.isNaN();
window.__defineGetter__('bar', baz);
Math.pow(2, 3);
```

### 正确示例

```js
Number.isFinite(520);
Number.isNaN(1314);
Object.defineProperty({}, 'bar', { value: 666 });
const res = 2 ** 3;
```

### 参考

- [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)
