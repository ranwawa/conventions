/*
 * @Description:
 * @Date: 2023-06-09 22:00:39
 * @Author: ranqirong 274544338@qq.com
 */

const nodeModule = require('./configs/node-module');
const nodeScript = require('./configs/node-script');
const react = require('./configs/react');
const vue2 = require('./configs/vue2');
const vue3 = require('./configs/vue3');
const uniApp = require('./environments/uni-app');
const package = require('./package');
const { createTranslatedPluginRules } = require('./scripts/index');

const options = {
  domain: 'https://ranwawa.github.io/conventions/rules/script',
  pluginName: '@awawa'
};

module.exports = {
  meta: {
    name: package.name,
    version: package.version
  },
  rules: {
    // 注入自定义插件(修改源插件名及文档链接)
    ...createTranslatedPluginRules('import', options),
    ...createTranslatedPluginRules('javascript', options)
  },
  configs: {
    vue2,
    vue3,
    react,
    'node-module': nodeModule,
    'node-script': nodeScript
  },
  environments: {
    'uni-app': {
      globals: uniApp
    }
  }
};
