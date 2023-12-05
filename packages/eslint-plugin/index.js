/*
 * @Description:
 * @Date: 2023-06-09 22:00:39
 * @Author: ranqirong 274544338@qq.com
 */

const nodeModule = require('./configs/node-module');
const nodeScript = require('./configs/node-script');
const react = require('./configs/react');
const vue = require('./configs/vue');
const uniApp = require('./environments/uni-app');
const package = require('./package');
const { ESLINT_PLUGINS } = require('./scripts/constants');
const { createTranslatedPluginRules } = require('./scripts/index');

// TODO 这个应该配置文件来取,以方便第3方OEM
const options = {
  domain: 'https://ranwawa.github.io/conventions/rules/script',
  pluginName: '@awawa'
};

const createAllCustomRules = () => {
  const allCustomRules = {};

  ESLINT_PLUGINS.map((pluginName) =>
    Object.assign(
      allCustomRules,
      createTranslatedPluginRules(pluginName, options)
    )
  );

  return allCustomRules;
};

module.exports = {
  meta: {
    name: package.name,
    version: package.version
  },
  // 注入自定义插件(修改源插件名及文档链接)
  rules: createAllCustomRules(),
  configs: {
    vue,
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
