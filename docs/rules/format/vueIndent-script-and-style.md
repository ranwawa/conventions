### 4.13 VUE sciprt/style 标签不进行缩进

- BAD

```vue
<script>
export default {};
</script>
<style>
div {
  color: red;
}
</style>
```

- GOOD

```vue
<script>
export default {};
</script>
<style>
div {
  color: red;
}
</style>
```

- WHY
  - 减少缩进层次,避免内部代码超过 80 个字符宽度的限制
