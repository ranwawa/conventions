### 4.3 缩进宽度 2 个空格

- BAD

```javascript
function handsomer() {
  const name = 'ranwawa';
  const age = 18;
}
```

- GOOD

```javascript
function handsomer() {
  const name = 'ranwawa';
  const age = 18;
}
```

- WHY
  - tab 和空格混用,肉眼看不出来,但 git 提交时会产生冲突,所以要禁用 tab
  - 前端 HTML 层级以及回调函数层级比较多,4 个缩进容易超出 80 个最宽限制.所以使用 2 个空格缩进.
