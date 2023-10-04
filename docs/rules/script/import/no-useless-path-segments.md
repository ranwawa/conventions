# import/no-useless-path-segments

禁止使用不必要的路径段

### 为什么?

使用不必要的路径段会使代码看起来更加混乱，不易于理解和维护。

### 建议

请删除import语句中不必要的路径段。

### 错误示例

> my-project/app.js

```js
import './../my-project/pages/header.js'; // 应该是 "./pages/header.js"
import '../my-project/pages/about.js'; // 应该是 "./pages/about.js"
import './pages//about'; // 应该是 "./pages/about"
import './pages/'; // 应该是 "./pages"
```

### 正确示例

> my-project/app.js

```js
import './pages/header.js';
import './pages/about.js';
import './pages';
```

### 参考

- [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md)
