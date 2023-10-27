/*
 * @Description: 重写规则元信息(帮助文档,汉化提示信息)
 * @Date: 2023-05-10 08:49:24
 * @Author: ranwawa <ranwawa@zmn.cn>
 */
const fs = require('fs');
const path = require('path');

const lodash = require('lodash');
const prettier = require('prettier');

const importRuleJson = require('../../../docs/rules/script/import/index');
const eslintCoreRuleJson = require('../../../docs/rules/script/javascript/index');
const importRuleConfig = require('../rules/import/originalRules');
const eslintCoreRuleConfig = require('../rules/javascript/originalRules');

const PLUGIN_RULES = require('./parsers.js');
const { MARKDOWN_EXT, readAllMDFiles } = require('./utils.js');

const TRANSLATION_DIR = path.resolve('./docs/rules/script');
const RULE_DIR = './packages/eslint-plugin/rules';
const CONFIG_DIR = './packages/eslint-plugin/configs';

const TRANSLATED_JSON = {
  import: importRuleJson,
  javascript: eslintCoreRuleJson
};

const ORIGINAL_PLUGIN_RULE_CONFIG = {
  import: importRuleConfig,
  javascript: eslintCoreRuleConfig
};

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

  const docUrl = `${domain}/${rulePath}/${ruleName}`;

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
  return {
    translationDir: path.resolve(TRANSLATION_DIR, pluginName),
    ruleDir: path.resolve(RULE_DIR, pluginName)
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

const updateOriginalRuleMessages = (originalRule, chineseTitle) => {
  const { messages } = originalRule.meta;

  for (const key in messages) {
    if (Object.hasOwnProperty.call(messages, key)) {
      const msg = messages[key];
      messages[key] = `${msg}\n\n${chineseTitle}\n`;
    }
  }
};

const readOriginalPluginRuleName = (originalPluginName, ruleName) => {
  // eslint内置规则在项目中是使用的javascript
  // 内置规则实际上是没有插件前缀的
  if (originalPluginName === 'javascript') {
    return ruleName;
  }
  return `${originalPluginName}/${ruleName}`;
};

/**
 * 禁用已翻译的原始规则
 * @param {string} ruleDir 规则所在的目录
 * @param {string[]} translatedRules 已翻译的规则
 */
const disableTranslatedRules = async (
  ruleDir,
  translatedRules,
  originalPluginName
) => {
  const disabledRules = {};

  translatedRules.forEach((ruleName) => {
    const originalPluginRuleName = readOriginalPluginRuleName(
      originalPluginName,
      ruleName
    );

    disabledRules[originalPluginRuleName] = 'off';
  });

  const fileContent = `
// 文件内容由代码自动生成,请勿修改
module.exports = ${JSON.stringify(disabledRules)}
`;

  fs.writeFileSync(
    path.resolve(ruleDir, 'disabledOriginalRules.js'),
    await prettier.format(fileContent, { parser: 'babel' })
  );
};

/**
 * 启用自定义规则
 * @param {string} ruleDir 规则所在的目录
 * @param {string[]} translatedRules 已翻译的规则
 * @param {string} customPluginName 自定义插件前缀
 */
const enableCustomRules = async (
  ruleDir,
  translatedRules,
  originalPluginName,
  customPluginName
) => {
  const enabledRuleConfig = {};
  const originalRuleConfig = ORIGINAL_PLUGIN_RULE_CONFIG[originalPluginName];

  translatedRules.forEach((ruleName) => {
    const originalPluginRuleName = readOriginalPluginRuleName(
      originalPluginName,
      ruleName
    );
    const originalRule = originalRuleConfig[originalPluginRuleName];
    enabledRuleConfig[`${customPluginName}/${originalPluginRuleName}`] =
      originalRule;
  });

  const fileContent = `
// 文件内容由代码自动生成,请勿修改
module.exports = ${JSON.stringify(enabledRuleConfig)}
`;

  fs.writeFileSync(
    path.resolve(ruleDir, 'enabledCustomRules.js'),
    await prettier.format(fileContent, { parser: 'babel' })
  );
};

/**
 * 重写所有已经翻译过的规则的文档链接,并将规则名修改成自定义插件的规则名
 * 1. 读取指定插件的所有翻译文件
 * 2. 依次调用 generateNewBuiltInRule生成新的规则元信息
 * @param {string} pluginName 插件名
 * @param {object} options    配置信息
 * @param {object} options.domain  域名
 * @param {object} options.prefix  前缀
 * @example order -> @awawa/order
 */
const createTranslatedPluginRules = (pluginName, { domain, prefix }) => {
  if (!pluginName) {
    console.warn('插件名必传');
    return null;
  }

  if (!domain) {
    console.warn('域名必传');
    return null;
  }

  const translatedJson = TRANSLATED_JSON[pluginName];

  const rules = {};

  const { translationDir, ruleDir } = readPluginDirs(pluginName);
  const translatedFiles = readAllMDFiles(translationDir);

  const translatedRules = translatedFiles.map((fileName) =>
    path.basename(fileName, MARKDOWN_EXT)
  );

  translatedRules.forEach((ruleName) => {
    const docUrl = createCustomDocUrl(translationDir, ruleName, domain);
    const newMeta = createEslintRuleMetaInfo(docUrl);
    const originalRule = readOriginalRule(ruleName, pluginName);

    updateOriginalRuleMessages(originalRule, translatedJson[ruleName]);

    const newRule = generateNewRule(newMeta, originalRule);

    rules[readOriginalPluginRuleName(pluginName, ruleName)] = newRule;
  });

  enableCustomRules(ruleDir, translatedRules, pluginName, prefix);
  disableTranslatedRules(ruleDir, translatedRules, pluginName);

  return rules;
};

module.exports = {
  createTranslatedPluginRules
};
