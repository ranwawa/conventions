# 限制圈复杂度

## Why?

> 通过在项目中设置一个圈复杂度阈值来控制代码的复杂度,它将会在圈复杂度超过配置的阈值时发出警告 (默认是 20)

## bad

```js
// 最大阈值为 2 代码示例

function a(x) {
  if (true) {
    return x;
  } else if (false) {
    return x + 1;
  } else {
    return 4; // 3rd path
  }
}
```

## good

```js
function a(x) {
  if (true) {
    return x;
  } else {
    return 4;
  }
}
```

## 参考:

- [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)
