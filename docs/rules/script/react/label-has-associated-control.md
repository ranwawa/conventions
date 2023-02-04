# 必须在可交互式标签上进行键盘导航

why?

> 可交互式标签比如 a,button 应该在没有鼠标的情况下也能使用.自定义的可交互标签不支持 tab 聚焦,请手动添加 tabIndex 属性进行聚焦.

## bad

```jsx
<span onclick="submitForm();" role="button">
  Submit
</span>
```

## good

```jsx
// 添加tabIndex进行聚焦
<span onclick="submitForm();" role="button" tabIndex="0">Submit</span>

// href属性的a标签本身可以用tab聚焦
<a href="javascript:void(0);" onClick="doSomething();">Click ALL the things!</a>

// button标签本身可以用tab聚焦
<button onClick="doSomething();">Click the button :)</button>
```

## 参考

- [jsx-a11y/interactive-supports-focus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)
