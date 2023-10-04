/*
 * @Description: 重写规则元信息(帮助文档,汉化提示信息)
 * @Date: 2023-05-10 08:49:24
 * @Author: ranwawa <ranwawa@zmn.cn>
 */
import path from 'path';

import lodash from 'lodash';

import { MARKDOWN_EXT, readAllMDFiles } from '../utils.js';

import { PLUGIN_RULES } from './parsers.js';

const TRANSLATION_DIR = path.resolve('./docs/rules/script');

/**
 * 生成新的规则
 * 通过覆盖原始规则的元信息来实现
 * @param {import('eslint').Rule.RuleMetaData} newMetaInfo 新的meta信息
 * @param {import('eslint').Rule} originalRule 原始的eslint规则
 * @return {import('eslint').Rule}
 */
const generateNewRule = (newMetaInfo, originalRule) => {
  const { docs } = newMetaInfo;
  if (!docs?.url) {
    console.warn('文档url必传');
    return null;
  }

  return lodash.merge(originalRule, { meta: newMetaInfo });
};

/**
 * 根据翻译文件路径生成新的规则文档链接
 * 1. 获取翻译文件的文件名,作为规则名
 * 2. 获取翻译文件的相对路径,作为文档路径
 * 3. 用指定的域名拼接翻译文件的相对路径形成新的文档链接
 * @param {string} translatedFilePath 翻译文件路径
 * @param {string} domain 文档域名
 */
const createCustomDocUrl = (translationDir, ruleName, domain) => {
  const rulePath = path.relative(TRANSLATION_DIR, translationDir);

  const docUrl = `${domain}/rules/${rulePath}/${ruleName}`;

  return docUrl;
};

/**
 * 创建新的eslint规则元信息
 * 主要是覆写原规则的文档链接
 * @param {string} docUrl 文档链接
 */
const createEslintRuleMetaInfo = (docUrl) => {
  return {
    docs: {
      url: docUrl
    }
  };
};

/**
 * 获取插件名对应的翻译目录/规则目录以及配置目录
 * @param {string} pluginName 插件名
 * @returns
 */
const readPluginDirs = (pluginName) => {
  const RULE_DIR = './packages/eslint-plugin/rules';
  const CONFIG_DIR = './packages/eslint-plugin/configs';

  return {
    translationDir: path.resolve(TRANSLATION_DIR, pluginName)
  };
};

/**
 * 获取原始规则
 * @param {string} ruleName 规则名
 * @param {string} pluginName 插件名
 */
const readOriginalRule = (ruleName, pluginName) => {
  const originalRule = PLUGIN_RULES[pluginName](ruleName);

  return originalRule;
};

/**
 *
 * 自动重写所有已经翻译过的规则的文档链接
 * 1. 读取指定插件的所有翻译文件
 * 2. 依次调用 generateNewBuiltInRule生成新的规则元信息
 * @param {string} pluginName 插件名
 * @param {string} domain     文档域名
 */
const createNewRules = (pluginName, domain) => {
  if (!pluginName) {
    console.warn('插件名必传');
    return null;
  }

  if (!domain) {
    console.warn('域名必传');
    return null;
  }

  const rules = {};

  const { translationDir } = readPluginDirs(pluginName);
  const translatedFiles = readAllMDFiles(translationDir);

  translatedFiles.forEach((fileName) => {
    const ruleName = path.basename(fileName, MARKDOWN_EXT);

    const docUrl = createCustomDocUrl(translationDir, ruleName, domain);
    const newMeta = createEslintRuleMetaInfo(docUrl);
    const originalRule = readOriginalRule(ruleName, pluginName);
    const newRule = generateNewRule(newMeta, originalRule);

    rules[ruleName] = newRule;
  });

  return rules;
};

const res = createNewRules('import', 'https://ranwawa.github.io/conventions');

console.log(1234, res.order);
