### 4.6 对象属性只在必要时使用引号

- BAD

```javascript
const handsomer = {
  name: 'ranwawa',
  'real-age': 18
};
```

- GOOD

```javascript
const handsomer = {
  name: 'ranwawa',
  'real-age': 18
};
```

- WHY
  - 可减少大量开发时间
