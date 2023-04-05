### 4.2 一行最宽 80 个字符

- BAD

```javascript
const a =
  'Ran wawa is a frontend developer that have more than three years expirence in vue & react.' +
  'Will you hire him to your company?';
```

- GOOD

```javascript
const a =
  'Ran wawa is a frontend developer that have more than three years expirence in vue & react.' +
  'Will you hire him to your company?';
```

- WHY
  - 前端一般都是分屏开发,HTML,SCRIPT,CSS 独占一个编辑器窗口
  - 太宽了难以滚动阅读.
  - 所以超过 80 个字符就要换行
