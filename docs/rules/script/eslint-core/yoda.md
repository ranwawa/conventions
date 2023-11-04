# yoda

禁止Yoda条件

### 为什么

Yoda条件是因为条件的字面值在前，变量在后而得名。例如，以下是一个Yoda条件：

```js
if ('red' === color) {
  // ...
}
```

这被称为Yoda条件，因为它读起来像"如果红色等于颜色"，类似于星球大战角色Yoda的说话方式。比较一下其他方式安排操作数：

```js
if (color === 'red') {
  // ...
}
```

这通常读作"如果颜色等于红色"，这可能是描述比较的更自然的方式。

### 建议

比较变量和字面值时，应始终将变量放在前面。

### 错误示例

```js
const color = 'ranwawa';

if ('red' === color) {
  // ...
}
```

### 正确示例

```js
const color = 'ranwawa';

if (color === 'red') {
  // ...
}
```

### 参考

- [yoda](https://eslint.org/docs/rules/yoda)
