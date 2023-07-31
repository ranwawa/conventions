# no-extraneous-dependencies

中能从 dependencies 导入依赖包

### 为什么?

项目任为依赖包发布时,只会安装 dependencies 中的模块,devDependencies/peerDependencies/optionalDependencies 中的模块不会进行安装,这会导致生产代码报找不到模块的错

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

### 错误示例

```json
// package.json
{
  "devDependencies": {
    "lodash": "*"
  }
}
```

### 正确示例

```json
// package.json
{
  "dependencies": {
    "lodash": "*"
  }
}
```

### 参考

- [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)
