/*
 * @Description: 通用的工具函数
 * @Date: 2023-10-03 12:38:35
 * @Author: ranqirong 274544338@qq.com
 */
import fs from 'fs';
import path from 'path';

const ENABLED_SIGN = { error: true, warn: true, 1: true, 2: true };
export const MARKDOWN_EXT = '.md';
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
