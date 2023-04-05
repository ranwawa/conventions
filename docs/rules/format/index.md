# 代码格式化

### 4.11 HTML 结点`>`多行时要换行显示

- BAD

```react
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}>
  Click Here
</button>
```

-GOOD

```react
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}
>
  Click Here
</button>
```

- WHY
  - 属性和内容分开展示,便于 CR
