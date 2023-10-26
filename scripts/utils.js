/*
 * @Description: 通用的工具函数
 * @Date: 2023-10-03 12:38:35
 * @Author: ranqirong 274544338@qq.com
 */
import fs from 'fs';
import path from 'path';

export const MARKDOWN_EXT = '.md';
export const OfficialUrlMap = {
  import:
    'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
  javascript: 'https://eslint.org/docs/rules/'
};
export const OfficialEditUrlMap = {
  import:
    'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
  javascript: 'https://github.com/eslint/eslint/edit/main/docs/src/rules/'
};

const ENABLED_SIGN = { error: true, warn: true, 1: true, 2: true };
const IGNORE_FILE = 'index.md';

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
 * @param {object | null} pluginConfigPath
 */
export const readEnabledRules = async (pluginConfigPath) => {
  let rules;

  try {
    const res = await import(pluginConfigPath);
    rules = res.default;
  } catch (error) {
    console.log('不存在的路径', pluginConfigPath);
    return null;
  }

  const newRules = {};

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
      newRules[key] = true;
    }
  });

  return newRules;
};

export const readReferenceDocLink = (prefix, ruleName, isEdit = false) => {
  let mapObject = OfficialUrlMap;

  if (isEdit) {
    mapObject = OfficialEditUrlMap;
  }

  let link = `${mapObject[prefix || 'javascript']}${ruleName}.md`;

  // 规则都是github的md文件所以需要
  // eslint官方规则基于md创建的网页,不需要md后缀
  if (prefix === '' && isEdit === false) {
    link = link.replace(/\.md$/, '');
  }

  return link;
};
