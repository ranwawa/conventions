# imports

## 必须导入可解析的模块

Why?

> 引用的文件必须已创建或安装,否则运行时会报错

package.json

```json
{
  "dependencies": {
    "md5": "*"
  }
}
```

bad

```js
import moment from 'moment';
```

good

```js
import md5 from 'md5';
```

参考:

- [no-var-requires](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

## 必须导入已存在的命名模块

Why?

> 导入的模块必须已经被导出,否则在运行时会抛出异常

outer.js

```js
export const name = 'zmn';
```

bad

```js
import { name1 } from './outer.js';
```

good

```js
import { name } from './outer.js';
```

参考:

- [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

## 禁止导出重复的模块

Why?

> 重复导出相同的模块,后续导出的模块值会被忽略,容易产生混淆,会导致维护难度加大.

bad

```js
export default class a {};
export default class b {}
```

good

```js
export default class a {}
export const b = class {};
```

参考:

- [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

## 禁用使用已存在的具名模块导入默认模块

Why?

> 绝大部分情况是忘记输入花括号导致.如果确实是导入默认模块,这种样命名很容易使其他同事产生误解,应该要换个名字

outer.js

```js
export default 'zmn';
export const name = 'ranwawa';
```

bad

```js
import name from './outer.js';
```

good

```js
// good
import myName from './outer.js';
```

参考:

- [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

## 禁止在默认模块上访问已存在的具名模块

Why?

> 在默认模块上访问具名模块,通常是因为对模块系统原理不熟悉导致.应当在导入时直接导入具名模块

outer.js

```js
export default 'zmn';
export const name = 'ranwawa';
```

bad

```js
import index from './outer.js';
const { name } = index;
```

good

```js
import { name } from './outer.js';
```

参考:

- [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

## 中能从 dependencies 导入依赖包

Why?

> 项目任为依赖包发布时,只会安装 dependencies 中的模块,devDependencies/peerDependencies/optionalDependencies 中的模块不会进行安装,这会导致生产代码报找不到模块的错

下面这些文件中可以引入放在 devDependencies 中的依赖

```shell
[
  'test/**',
  'tests/**',
  'spec/**',
  '**/__tests__/**',
  '**/__mocks__/**',
  'test.{js,jsx}',
  'test-*.{js,jsx}',
  '**/*{.,_}{test,spec}.{js,jsx}',
  '**/jest.config.js',
  '**/jest.setup.js',
  '**/vue.config.js',
  '**/webpack.config.js',
  '**/webpack.config.*.js',
  '**/rollup.config.js',
  '**/rollup.config.*.js',
  '**/gulpfile.js',
  '**/gulpfile.*.js',
  '**/Gruntfile{,.js}',
  '**/protractor.conf.js',
  '**/protractor.conf.*.js',
  '**/karma.conf.js',
  '**/.eslintrc.js',
];
```

index.js

```js
import lodash from 'lodash';
```

bad

```json
// package.json
{
  "devDependencies": {
    "lodash": "*"
  }
}
```

good

```json
// package.json
{
  "dependencies": {
    "lodash": "*"
  }
}
```

参考:

- [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)

## 禁止导出可更改的模块

Why?

> ES6 模块是单例的,模块被修改后会影响其他所有地方的使用,为避免意外对模块造成破坏,禁止导出可编辑的模块(即 let, var)

bad

```js
export let name = 'zmn';
```

good

```js
export const name = 'zmn';
```

参考:

- [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

## 禁止使用 CMD,AMD 模块语法

Why?

> EMS 是官方标准大势所趋,即使在 node 端 ESM 可以兼容 CMD,反之则不行,所以统一使用 EMS 模块语法即可

bad

```js
const lodash = require('lodash');
```

good

```js
import lodash from 'lodash';
```

参考:

- [import/no-commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)

## 必须将 import 语句放在最前面

Why?

> import 语句运行时提升,即便放在代码后面,也会最开始执行.使其行为和视觉顺序保持一致,有利于减少混乱.

bad

```js
const name = 'zmn';
import lodash from 'lodash';
```

good

```js
import lodash from 'lodash';
const name = 'ran';
```

参考:

- [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

## 必须在一条语句中完成所有全名模块导入

Why?

> 在页面引用变多时会出现这种情况,额外增加了代码行数,也使相同的逻辑分散到了不同的地方

bad

```js
import { chunk } from 'lodash';
import { contact } from 'lodash';
```

good

```js
import { chunk, contact } from 'lodash';
```

参考:

- [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

## 引入的文件必须包含后缀名

Why?

> 虽然大部分编译器会自动补全,但始终会消耗额外的性能.明确后缀名也可避免同名但不同后缀文件时引发的异常

bad

```js
import outer from './outer';
```

good

```js
import outer from './outer.js';
```

参考:

- [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

## 必须按固定顺序引入模块

Why?

> 统一的顺序有利于快速区分模块和代码 review.不同分组之间添加一个换行符也有利于后期 review.

bad

```js
import outer from './outer.js';
import lodash from 'lodash';
```

good

```js
// node内置模块
import fs from 'fs';

// node_modules模块
import lodash from 'lodash';

// 别名模块
import outer from '@/outer.js';

// 父级目录中的模块
import parent from '../parent.js';

// 兄弟目录中的模块
import sibling from './sibling/index.js';

// 同目录中的index模块
import index from './index.js';

// ts类型
import type { T } from 'lodash';

// 对象语法(仅ts支持)
import log = console.log;
```

参考:

- [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)

## 必须在最后一条 import 语句后换行

Why?

> 模块引入和业务代码分开,从视觉层面区分开他们的用途.

bad

```js
import lodash from 'lodash';
console.log(lodash);
```

good

```js
import lodash from 'lodash';

console.log(lodash);
```

参考:

- [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

## 必须使用 default 导出惟一的模块

Why?

> 文件只导出一个模块,使用 default 导出.调用方不用关心导出的模块名,更容易上手.

bad

```js
export const name = 'zmn';
```

good

```js
const name = 'zmn';
export default name;
```

参考:

- [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

## 禁止使用绝对路径导入模块

Why?

> 绝对路径在发布到 npm 仓库后或者其他同事开发时无法使用,统一使用相对路径

bad

```js
import outer from '/outer.js';
```

good

```js
import outer from '../outer.js';
```

参考:

- [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)

## 禁止使用 webpack loader 语法

Why?

> 非标准的语法,降低代码可读性,也给不熟悉 webpack 的同事带来困扰.统一在 webpack 配置文件中处理

bad

```js
import outer from 'xx-loader!../outer.js';
```

good

```js
import outer from '../outer.js';
```

参考:

- [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

## 优先导入具名模块

Why?

> 具名模块具有直接字面意思,使代码更容易维护.

outer.js

```js
export const name = 'zmn';
export default name;
```

bad

```js
import myName from '../outer.js';
```

good

```js
import { name } from '../outer.js';
```

参考:

- [import/no-anonymous-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md)

## 禁止引用同一文件自身的模块

Why?

> 同个文件的模块,直接使用即可,不需要通过 import 语法引入,容易产生混淆.

bad

```js
// index.js
import newName from './index.js';

const name = 'zmn';
export default name;

console.log(newName);
```

good

```js
const name = 'zmn';
export default name;

console.log(newName);
```

参考:

- [import//no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules//no-self-import.md)

## 禁止文件间互相引用模块

Why?

> 不同的文件互相引用彼此模块,容易导致死循环.可通过拆分模块或全局变量的方式处理.

outer.js

```js
import age from './index.js';

export default name = 'zmn';
```

bad

```js
// index.js
import name from '../outer.js';

export default age = 18;
```

good

```js
export default age = 18;
```

参考:

- [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)

## 禁止多余的相对路径符号

Why?

> 增加理解和维护难度,始终保持最简洁的路径.

bad

```js
import outer from './../outer.js';
```

good

```js
import outer from '../outer.js';
```

参考:

- [import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)

## 禁止存在未使用的模块文件

Why?

> 删除未使用的模块文件,有利于减少项目复杂度.随着项目增长,如果存在大量未实际使用的代码,会增加维护成本.

bad

```js
const name = 'zmn';
```

good

```js
const name = 'zmn';
export default name;
```

参考:

- [import/no-unused-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md)

## 禁止混用 import 和 module.exports

Why?

> 混用容易产生混淆,统一使用 ESM;

bad

```js
import lodash from 'lodash';

module.exports = {};
```

good

```js
import lodash from 'lodash';

export default {};
```

参考:

- [import/no-import-module-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)

## 禁止使用相对路径引入 monorepo 包

Why?

> 发布到 npm 仓库后或者代码拆分出去后会引起运行时错误,通过 npm 包名引用

目录结构

```shell
my-project
├── packages
│   ├── foo
│   │   ├── index.js
│   │   └── package.json
│   └── bar
│       ├── index.js
│       └── package.json
└── entry.js
```

bad

```js
// foo/index.js
import bar from '../bar.js';
```

good

```js
// foo/index.js
import bar from 'bar';
```

- [import/no-relative-packages](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)
