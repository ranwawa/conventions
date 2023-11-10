/*
 * @Description: 通用的工具函数
 * @Date: 2023-10-03 12:38:35
 * @Author: ranqirong 274544338@qq.com
 */
import fs from 'fs';
import path from 'path';
import URL from 'url';

import chalk from 'chalk';

import { PLUGINS_CONFIG } from './constants.js';

export const MARKDOWN_EXT = '.md';

const ENABLED_SIGN = { error: true, warn: true, 1: true, 2: true };
const IGNORE_FILE = 'index.md';

export const readDocDirPath = (pluginName) =>
  PLUGINS_CONFIG[pluginName].docDirPath;

export const readRuleDirPath = (pluginName) =>
  PLUGINS_CONFIG[pluginName].ruleDirPath;

export const readOfficialUrl = (pluginName) =>
  PLUGINS_CONFIG[pluginName].officialUrl;

export const readOfficialEditUrl = (pluginName) =>
  PLUGINS_CONFIG[pluginName].officialEditUrl;

const readRuleFilePath = (pluginName) =>
  PLUGINS_CONFIG[pluginName].ruleFilePath;

/**
 * 获取目录下所有markdown文件
 * @param {string} directory 目录名
 * @returns
 */
export const readAllMDFiles = (directory) => {
  const files = fs.readdirSync(directory);

  const mdFiles = files.filter(
    (file) => path.extname(file) === MARKDOWN_EXT && file !== IGNORE_FILE
  );

  return mdFiles;
};

/**
 * 获取插件启用的规则
 * @param {object | null} pluginName
 */
export const readEnabledRules = async (pluginName) => {
  const ruleFilePath = path.resolve('./', readRuleFilePath(pluginName));
  let rules;

  try {
    const res = await import(URL.pathToFileURL(ruleFilePath));
    rules = res.default;
  } catch (error) {
    console.log(chalk.red('不存在的路径: '), error);
    return null;
  }

  const enabledRules = {};
  let total = 0;

  Object.entries(rules).forEach(([key, value]) => {
    let isEnabled = false;
    const type = typeof value;

    switch (type) {
      case 'string':
      case 'number':
        isEnabled = ENABLED_SIGN[value];
        break;
      default:
        isEnabled = ENABLED_SIGN[value[0]];
        break;
    }

    if (isEnabled) {
      enabledRules[key] = true;
      total += 1;
    }
  });

  Object.defineProperty(enabledRules, 'total', {
    value: total,
    enumerable: false
  });
  return enabledRules;
};

export const readReferenceDocLink = (pluginName, ruleName, isEdit = false) => {
  let url = readOfficialUrl(pluginName);

  if (isEdit) {
    url = readOfficialEditUrl(pluginName);
  }

  let link = `${url}${ruleName}.md`;

  // 规则都是github的md文件所以需要
  // eslint官方规则基于md创建的网页,不需要md后缀
  if (pluginName === '' && isEdit === false) {
    link = link.replace(/\.md$/, '');
  }

  return link;
};

const readPluginPrefix = (pluginName) => {
  if (pluginName === 'eslint-core') {
    return '';
  }

  return `${pluginName}/`;
};

export const readTranslatedRules = (pluginName) => {
  const docDirPath = readDocDirPath(pluginName);
  const pluginPrefix = readPluginPrefix(pluginName);
  const translatedFiles = readAllMDFiles(docDirPath);

  const translatedRules = translatedFiles.map(
    (file) => `${pluginPrefix}${file.replace(/\.md$/, '')}`
  );

  return translatedRules;
};

export const readPluginNameAndRuleName = (completeRuleName) => {
  const res = completeRuleName.match(/^([^/]+)\/(.*)$/);

  // eslint规则没有前缀
  if (!res) {
    return {
      pluginName: 'eslint-core',
      ruleName: completeRuleName
    };
  }

  const [, pluginName, ruleName] = res;

  return { pluginName, ruleName };
};
