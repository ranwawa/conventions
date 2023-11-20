# 贡献代码

## 翻译文档

### 翻译文档的流程

#### 执行翻译检测命令

通过命令检测已经启用但未翻译的规则

```shell
npm run checkUnTranslateRules
```

该命令会自动执行以下操作

1. 检测当前所有已启用但未被翻译的规则
2. 针对第1条未翻译规则,创建翻译模板文件,并在vscode中打开
3. 在浏览器中打开第1条未翻译规则的官方文档
4. 复制GPT翻译提示词到剪贴版

#### 翻译

人工核对修改GPT的翻译结果,并将其保存上一步自动创建的模板文件中

#### 执行生成翻译目录命令

通过命令将已翻译的规则,生成目录文件

```shell
npm run reWriteEslintRules
```

该命令会自动执行以下操作

1. 生成插件的翻译目录
2. 禁用插件已翻译的原始规则,比如`'import/export': 'off'`
3. 启用自定义规则,,比如`'@awawa/import/export': 'off'`

#### 提交修改

通过提交命令创建一个提交,注意提交类型选择`docs`

```shell
npm run commit
```

### 文档格式

```markdown
# 规则英文名称

用中文描述规则的作用

### 为什么?

产生这个规则的原因,以及怎么解决这个问题.

### 建议

针对当前问题的修改建议

### 错误示例

用代码示例说明这个规则的错误用法

### 正确示例

用代码示例说明这个规则的正确用法

### 参考

用无序列表列出参考文档的链接
```

### 注意事项

1. 翻译文件必须放在对应插件目录下
2. 翻译文件必须以规则名命名
3. 描述规则的作用时,必须包含以下关键字: `禁止`, `必须`, `建议`, `不建议`
4. 描述为什么时,必须包含如下内容
   - 产生这个规则的原因
   - 问题引起的后果
5. 示例代码必须包含语言标识

### 文档示例

请参考 `./docs/guide/script/import/export.md` 文件

## 重写文档链接

在`vscode`等`ide`中,点击eslint的异常信息可以查看该异常的详细文档通

过重写eslint规则的文档链接,可以将其重定向到我们自己已翻译的网站上.

### 重写源规则的元数据

通过`eslint-plugin/scripts/index`createTranslatedPluginRules进行修改

例:

```json
{
  "import/order": {
    "meta": {
      "docs": {
        "url": "https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md"
      }
    }
  }
}
```

重写后:

```json
{
  "@awawa/import/order": {
    "meta": {
      "docs": {
        "url": "https://ranwawa.github.io/conventions/rules/script/import/order"
      }
    }
  }
}
```

### 注入自定义规则

`createTranslatedPluginRules进行修改`的返回值是新的规则

将新规则注入到`eslint-plugin/index.js:rules`属性中,生成新的自定义插件

### 禁用源规则并启用自定义规则

`createTranslatedPluginRules`同时会生成`disabledOriginalRules`和`enabledCustomRules`文件.用于禁用源规则和启用新规则

在对应规则的配置文件中,引入这两个文件覆盖原始配置

如:

`eslint-plugin/rules/import/index.js:rules`
