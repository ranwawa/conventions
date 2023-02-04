# 必须使用简写

## Why?

> 挨个写每个属性不仅写着麻烦,别人看着也累,所以请替换成简写形式

## bad

```scss
a {
  margin-top: 1px;
  margin-right: 2px;
  margin-bottom: 3px;
  margin-left: 4px;
}
```

## good

```scss
a {
  margin: 1px 2px 3px 4px;
}
```

## 参考

- [declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties)
