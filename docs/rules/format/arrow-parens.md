### 4.9 箭头函数的参数始终用括号包起来

- BAD

```javascript
const func = (x) => x;
```

- GOOD

```javascript
const func = (x) => x;
```

- WHY
  - 便于在 ts 类型或参数有默认值时的风格统一
