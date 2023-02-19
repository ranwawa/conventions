# at-rule-no-vendor-prefix

禁止在@规则前加浏览器前缀

### 为什么?

Autoprefixer 插件会自动插入浏览器前缀,不需要自己处理,请删除掉前缀

### 错误示例

```scss
@-webkit-keyframes {
  0% {
    top: 0;
  }
}
```

### 正确示例

```scss
@keyframes {
  0% {
    top: 0;
  }
}
```

## 参考

- [at-rule-no-vendor-prefix](https://stylelint.io/user-guide/rules/list/at-rule-no-vendor-prefix)
