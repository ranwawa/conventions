# 常见问题

## vue setup 模式下 template 中使用的变量报 no-unused-vars 错误

这是老版本 vue-eslint-parser 不兼容 setup 语法导致.先删除本地的 vue-eslint-parser 然后重新安装即可

```shell
npm uninstall vue-eslint-parser

npm install --save-dev vue-eslint-parser
```

### 参考

- [eslint-plugin-vue 官网](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)

## 一下扫描出几百几千个错误怎么办?

对于老项目这种现象非常正常.我们只需要关心自己修改的文件即可.可以将 npm 命令修改成只扫描对应文件

```json
{
  "scripts": {
    "lint-fix:script": "eslint ./src/App.vue --ext .js,.ts,.vue,.jsx,.tsx --fix"
  }
}
```
