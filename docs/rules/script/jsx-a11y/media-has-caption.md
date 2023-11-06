# jsx-a11y/media-has-caption

媒体必须有字幕

### 为什么

当电脑的音响失效的时候，字幕就很有用了。对听力障碍的人友好.

### 建议

媒体元素应包含字幕元素，或者设置muted属性。

### 错误示例

```js
<video />
```

### 正确示例

```js
<video>
  <track kind="captions" />
</video>
```

### 参考

- [jsx-a11y/media-has-caption](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md)
