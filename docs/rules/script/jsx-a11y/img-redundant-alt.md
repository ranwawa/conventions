# jsx-a11y/img-redundant-alt

图片的alt属性不能包含'image', 'picture', 'photo'等词汇

### 为什么

屏幕阅读器已经将img元素声明为图像，再在里面使用'image', 'photo', 'picture'等关键词就是多余的了。

### 建议

把图片描述文本换成跟内容有关的文案.

### 错误示例

```js
<img src="foo" alt="一张马的图片" />
```

### 正确示例

```js
<img src="foo" alt="在草原上奔跑的俊马" />
```

### 参考

- [jsx-a11y/img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
- [WebAIM, Alternative Text](https://webaim.org/techniques/alttext/)
