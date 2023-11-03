/*
 * @Description: 重写eslint规则
 * @Date: 2023-11-03 08:29:51
 * @Author: ranqirong 274544338@qq.com
 */
import fs from 'fs';
import path from 'path';
import url from 'url';

import markdownIt from 'markdown-it';
import prettier from 'prettier';

import { ESLINT_PLUGINS, PLUGINS_CONFIG } from './constants.js';
import {
  readDocDirPath,
  readPluginNameAndRuleName,
  readRuleDirPath,
  readTranslatedRules
} from './utils.js';
import { ORIGINAL_PLUGIN_RULE_CONFIG } from '../packages/eslint-plugin/scripts/index.js';

/**
 * 禁用已翻译的原始规则
 * @param {string} ruleDir 规则所在的目录
 * @param {string[]} translatedRules 已翻译的规则
 */
const createDisabledRulesFile = async (pluginName, translatedRules) => {
  const disabledRules = {};
  const ruleDirPath = readRuleDirPath(pluginName);

  translatedRules.forEach((completeRuleName) => {
    disabledRules[completeRuleName] = 'off';
  });

  const filePath = path.resolve(ruleDirPath, 'disabledOriginalRules.js');
  const fileContent = `
  // 文件内容由代码自动生成,请勿修改
  module.exports = ${JSON.stringify(disabledRules)}
  `;

  fs.writeFileSync(
    filePath,
    await prettier.format(fileContent, { parser: 'babel' })
  );
};

/**
 * 启用自定义规则
 * @param {string} ruleDir 规则所在的目录
 * @param {string[]} translatedRules 已翻译的规则
 * @param {string} customPluginName 自定义插件前缀
 */
const createEnableCustomRulesFile = async (
  pluginName,
  translatedRules,
  customPluginName = '@awawa'
) => {
  const enabledRuleConfig = {};
  const ruleDirPath = readRuleDirPath(pluginName);
  const originalRuleConfig = ORIGINAL_PLUGIN_RULE_CONFIG[pluginName];

  translatedRules.forEach((completeRuleName) => {
    const originalRule = originalRuleConfig[completeRuleName];
    enabledRuleConfig[`${customPluginName}/${completeRuleName}`] = originalRule;
  });

  const filePath = path.resolve(ruleDirPath, 'enabledCustomRules.js');
  const fileContent = `
  // 文件内容由代码自动生成,请勿修改
  module.exports = ${JSON.stringify(enabledRuleConfig)}
  `;

  fs.writeFileSync(
    filePath,
    await prettier.format(fileContent, { parser: 'babel' })
  );
};

const readChineseTitle = (content) => {
  const ast = markdownIt().parse(content);
  const englishTitleIndex = ast.findIndex(
    (token) =>
      token.tag === 'h1' && token.level === 0 && token.type === 'heading_close'
  );

  if (englishTitleIndex === -1) {
    return undefined;
  }

  const chineseTitleToken = ast.find(
    (token, index) =>
      index > englishTitleIndex &&
      token.tag === '' &&
      token.type === 'inline' &&
      token.content
  );

  return chineseTitleToken.content;
};

const writeFile = (filePath, content, json) => {
  // 文件存在时直接覆盖
  // 不存在时创建一个
  fs.writeFileSync(filePath, content);
  fs.writeFileSync(filePath.replace('.md', '.json'), JSON.stringify(json));
};

const readTranslatedRuleContent = (pluginName, ruleName) => {
  const docDirPath = readDocDirPath(pluginName);
  const filePath = path.resolve(docDirPath, `${ruleName}.md`);
  return fs.readFileSync(filePath, 'utf-8');
};

const createTocContent = (pluginName, translatedRules) => {
  const tocItems = translatedRules
    .map((completeRuleName) => {
      const { ruleName } = readPluginNameAndRuleName(completeRuleName);
      const fileContent = readTranslatedRuleContent(pluginName, ruleName);
      const title = readChineseTitle(fileContent);

      return `[${title}](./${ruleName}.md)`;
    })
    .join('\n\n');

  const tocContent = [
    `# ${pluginName}`,
    '<!-- ',
    '该文件是代码自动生成,请勿修改',
    '-->',
    tocItems
  ].join('\n');

  return `${tocContent}\n`;
};

const createTocFilePath = (pluginName) => {
  const docDirPath = readDocDirPath(pluginName);
  return path.resolve(docDirPath, 'index.md');
};

/**
 *
 * @param {} params
 */
const createTOCFile = (pluginName, translatedRules) => {
  const tocContent = createTocContent(pluginName, translatedRules);
  const tocFilePath = createTocFilePath(pluginName);

  fs.writeFileSync(tocFilePath, tocContent);
};

const reWriteEslintRules = () => {
  // 1. 生成插件翻译目录
  // 2. 禁用已翻译的规则
  // 3. 启用自定义规则

  ESLINT_PLUGINS.forEach((pluginName) => {
    const translatedRules = readTranslatedRules(pluginName);
    createTOCFile(pluginName, translatedRules);
    createDisabledRulesFile(pluginName, translatedRules);
    createEnableCustomRulesFile(pluginName, translatedRules);
  });
};

reWriteEslintRules();
