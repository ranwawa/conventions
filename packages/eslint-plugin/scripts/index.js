/*
 * @Description: 重写规则元信息(帮助文档,汉化提示信息)
 * @Date: 2023-05-10 08:49:24
 * @Author: ranwawa <ranwawa@zmn.cn>
 */
const path = require('path');

const lodash = require('lodash');

const typescriptRuleConfig = require('../rules/@typescript-eslint/originalRules');
const typescriptTranslatedMap = require('../rules/@typescript-eslint/translatedMap');
const eslintCoreRuleConfig = require('../rules/eslint-core/originalRules');
const eslintCoreTranslatedMap = require('../rules/eslint-core/translatedMap');
const importRuleConfig = require('../rules/import/originalRules');
const importTranslatedMap = require('../rules/import/translatedMap');
const jsxA11yRuleConfig = require('../rules/jsx-a11y/originalRules');
const jsxa11yTranslatedMap = require('../rules/jsx-a11y/translatedMap');
const nodeRuleConfig = require('../rules/node/_commons');
const nodeTranslatedMap = require('../rules/node/translatedMap');
const reactRuleConfig = require('../rules/react/originalRules');
const reactTranslatedMap = require('../rules/react/translatedMap');
const reactHooksRuleConfig = require('../rules/react-hooks/originalRules');
const reactHooksTranslatedMap = require('../rules/react-hooks/translatedMap');
const vueRuleConfig = require('../rules/vue/originalRules');
const vueTranslatedMap = require('../rules/vue/translatedMap');
const vue2RuleConfig = require('../rules/vue2/originalRules');

const { WHITE_LIST } = require('./constants');
const PLUGIN_RULES = require('./parsers');
const { MARKDOWN_EXT, readAllMDFiles } = require('./utils');

const TRANSLATION_DIR = path.resolve('./docs/rules/script');
const RULE_DIR = './packages/eslint-plugin/rules';

// TODO: 要调用reWriteEslintRules中的createTranslatedMap动态获取已经翻译的规则
// 而不需要再通过一个文件来转存
const TRANSLATED_JSON = {
  import: importTranslatedMap,
  'eslint-core': eslintCoreTranslatedMap,
  'jsx-a11y': jsxa11yTranslatedMap,
  node: nodeTranslatedMap,
  react: reactTranslatedMap,
  'react-hooks': reactHooksTranslatedMap,
  '@typescript-eslint': typescriptTranslatedMap,
  vue: vueTranslatedMap
};

const ORIGINAL_PLUGIN_RULE_CONFIG = {
  '@typescript-eslint': typescriptRuleConfig,
  import: importRuleConfig,
  'eslint-core': eslintCoreRuleConfig,
  react: reactRuleConfig,
  'react-hooks': reactHooksRuleConfig,
  'jsx-a11y': jsxA11yRuleConfig,
  node: nodeRuleConfig,
  vue2: vue2RuleConfig,
  vue: vueRuleConfig
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
const createEslintRuleMetaInfo = (docUrl) => ({
  docs: {
    url: docUrl
  }
});

/**
 * 获取插件名对应的翻译目录/规则目录以及配置目录
 * @param {string} pluginName 插件名
 * @returns
 */
const readPluginDirs = (pluginName) => ({
  translationDir: path.resolve(TRANSLATION_DIR, pluginName),
  ruleDir: path.resolve(RULE_DIR, pluginName)
});

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
  // 内置规则实际上是没有插件前缀的
  if (originalPluginName === 'eslint-core') {
    return ruleName;
  }
  return `${originalPluginName}/${ruleName}`;
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

  const { translationDir } = readPluginDirs(pluginName);
  const translatedFiles = readAllMDFiles(translationDir);

  const translatedRules = translatedFiles.map((fileName) =>
    path.basename(fileName, MARKDOWN_EXT)
  );

  translatedRules.forEach((ruleName) => {
    const docUrl = createCustomDocUrl(translationDir, ruleName, domain);
    const newMeta = createEslintRuleMetaInfo(docUrl);

    const originalRule = PLUGIN_RULES[pluginName][ruleName];

    if (WHITE_LIST[pluginName]?.[ruleName]) {
      console.log(
        `${pluginName}下的规则${ruleName}在白名单内,不需要创建新的自定义规则`
      );
      return;
    }
    updateOriginalRuleMessages(originalRule, translatedJson[ruleName]);

    const newRule = generateNewRule(newMeta, originalRule);

    rules[readOriginalPluginRuleName(pluginName, ruleName)] = newRule;
  });

  return rules;
};

module.exports = {
  createTranslatedPluginRules,
  ORIGINAL_PLUGIN_RULE_CONFIG
};
