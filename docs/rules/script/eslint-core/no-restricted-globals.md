# no-restricted-globals

禁止使用特定的全局变量

### 为什么

全局变量很有可能被其他人覆盖掉,使用的时候就会报错.

如下变量禁止访问:

- isFinite
- isNaN
- addEventListener
- blur
- close
- closed
- confirm
- defaultStatus
- defaultstatus
- event
- external
- find
- focus
- frameElement
- frames
- history
- innerHeight
- innerWidth
- length
- location
- locationbar
- menubar
- moveBy
- moveTo
- name
- onblur
- onerror
- onfocus
- onload
- onresize
- onunload
- open
- opener
- opera
- outerHeight
- outerWidth
- pageXOffset
- pageYOffset
- parent
- print
- removeEventListener
- resizeBy
- resizeTo
- screen
- screenLeft
- screenTop
- screenX
- screenY
- scroll
- scrollbars
- scrollBy
- scrollTo
- scrollX
- scrollY
- self
- status
- statusbar
- stop
- toolbar
- top

### 建议

不要使用特定的全局变量，例如'isFinite'和'isNaN'，应使用Number.isFinite和Number.isNaN代替。

### 错误示例

```js
function onClick() {
  console.log(event);
}
```

### 正确示例

```js
import event from './moduleA';

console.log(event);
```

### 参考

- [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)
