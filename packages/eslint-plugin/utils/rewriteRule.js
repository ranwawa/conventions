/*
 * @Description: 重写规则元信息(帮助文档,汉化提示信息)
 * @Date: 2023-05-10 08:49:24
 * @Author: ranwawa <ranwawa@zmn.cn>
 */
const fs = require('fs');
const path = require('path');

const findUp = require('find-up');
const lodash = require('lodash');

const { PARSERS } = require('./parsers');

/**
 *
 * @param {import('eslint').Rule.RuleMetaData} meta 重写的meta信息
 * @param {string} ruleName eslint内置规则名
 * @param {'builtIn' | 'node' | 'typescript' | 'vue2' | 'vue3' | 'react'} pluginName 解析器,用于解析原生规则
 * @returns
 */
const generateNewBuiltInRule = (
  meta = {},
  ruleName = '',
  pluginName = 'builtIn'
) => {
  if (!ruleName) {
    console.warn('请传入规则名');
    return;
  }

  const baseRule = PARSERS[pluginName](ruleName);

  if (!baseRule) {
    console.warn(`${pluginName}内置规则不存在,请检查: `, ruleName);
    return;
  }

  const { docs } = meta;
  if (!docs?.url) {
    console.warn('文档url必传');
    return;
  }

  // eslint-disable-next-line consistent-return
  return lodash.merge(baseRule, { meta });
};

/**
 * 读取指定插件的所有翻译文件
 * @param {string} pluginName     插件名
 * @param {string} docsRulesPath  规则文档目录
 * @returns {string[]}
 */
const getTranslatedRules = (pluginName, docsRulesPath = 'docs/rules') => {
  // 将相对路径转换为项目根目录下./docs/rules的路径
  const docsPath = findUp.sync(docsRulesPath, {
    cwd: __dirname,
    type: 'directory'
  });

  if (!docsPath) {
    console.warn('未找到规则文档目录: ', docsRulesPath);
    return [];
  }

  const rulesPath = path.resolve(docsPath, pluginName);

  if (!fs.existsSync(rulesPath)) {
    console.warn('未找到插件规则翻译目录: ', rulesPath);
    return [];
  }

  return fs.readdirSync(rulesPath);
};

/**
 *
 * 自动重写所有已经翻译过的规则的文档链接
 * 1. 读取指定插件的所有翻译文件
 * 2. 获取翻译文件的文件名,作为规则名
 * 3. 获取翻译文件的相对路径,作为文档路径
 * 4. 用指定的域名拼接翻译文件的相对路径形成新的文档链接
 * 5. 依次调用 generateNewBuiltInRule生成新的规则元信息
 * @param {string} pluginName 插件名
 * @param {string} domain     文档域名
 */
const generateRules = (pluginName, domain) => {
  if (!domain) {
    console.warn('域名必传');
    return {};
  }

  const files = getTranslatedRules(pluginName);
  const rules = {};

  files.forEach((file) => {
    const ruleName = path.basename(file, '.md');
    const rulePath = path.relative(
      path.resolve(__dirname, '../'),
      path.resolve(pluginName, file)
    );

    const docsUrl = `${domain}/${rulePath}`;
    const meta = {
      docs: {
        url: docsUrl
      }
    };

    const newRule = generateNewBuiltInRule(meta, ruleName, pluginName);
    rules[ruleName] = newRule;
  });
  console.log(4444, rules);

  return rules;
};

module.exports = {
  generateNewBuiltInRule,
  getTranslatedRules,
  generateRules
};
