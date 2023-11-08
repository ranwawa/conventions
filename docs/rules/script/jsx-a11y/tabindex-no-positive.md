# jsx-a11y/tabindex-no-positive

禁止使用正数的tabIndex属性值

### 为什么

正常情况下,tab顺序是根据可交互元素出现的顺序排列的

如果显示指定了tableIndex

- 大于0的tableIndex会在所有没有显示指定tableIndex的交互元素后面聚焦
- 小于等于0的tableIndex会在最开始获取焦点

### 建议

tabIndex属性值使用0或者-1

### 错误示例

```js
<div>
  <button tableIndex={5} />
  <button />
</div>
```

### 正确示例

```js
<div>
  <button tableIndex={0} />
  <button />
</div>
```

### 参考

- [jsx-a11y/tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)
