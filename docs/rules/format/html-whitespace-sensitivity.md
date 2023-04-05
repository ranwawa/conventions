### 4.12 HTML 中的空白始终用根据 CSS 逻辑处理

- BAD

```shell
<div>name:      ranwawa <span>age: 18 </span></div>
```

- GOOD

```html
<div>name: ranwawa <span>age: 18 </span></div>
```

- WHY
  - 避免 CSS 空白属性不一致导致的界面异常
