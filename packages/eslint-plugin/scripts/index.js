/*
 * @Description: 重写插件的默认规则
 * @Date: 2023-05-06 18:45:39
 * @Author: ranwawa <ranwawa@zmn.cn>
 */

const PLUGIN_NAME = '@awawa';

/**
 * 重写eslint规则集
 * @description 如果当前规则已被翻译
 *              则关闭原规则
 *              交将其复制到新规则
 * @param {object} originalRules 原规则
 * @param {object} translatedRules 已经翻译过的规则
 * @param {string} pluginName 插件名
 */
const rewriteTranslatedRules = (
  originalRules,
  translatedRules = {},
  pluginName = PLUGIN_NAME
) => {
  const newRules = {};

  for (const key in originalRules) {
    if (Object.hasOwnProperty.call(originalRules, key)) {
      const rule = originalRules[key];

      if (translatedRules[key]) {
        newRules[key] = 'off';
        newRules[`${pluginName}/${key}`] = rule;
      } else {
        newRules[key] = rule;
      }
    }
  }

  return translatedRules;
};

module.exports = { rewriteTranslatedRules };
