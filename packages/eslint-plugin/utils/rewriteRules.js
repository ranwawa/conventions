/*
 * @Description: 重写插件的默认规则
 * @Date: 2023-05-06 18:45:39
 * @Author: ranwawa <ranwawa@zmn.cn>
 */

const PLUGIN_NAME = '@awawa';

/**
 * 重写eslint规则集
 * @param {object} rules 内置规则
 * @param {object} overrideRules 已经重写过的规则
 */
const rewriteBuiltInRules = (
  rules,
  overrideRules = {},
  pluginName = PLUGIN_NAME
) => {
  const newRules = {};

  for (const key in rules) {
    if (Object.hasOwnProperty.call(rules, key)) {
      const rule = rules[key];

      if (overrideRules[key]) {
        newRules[key] = 'off';
        newRules[`${pluginName}/${key}`] = rule;
      } else {
        newRules[key] = rule;
      }
    }
  }

  return newRules;
};

module.exports = {
  rewriteBuiltInRules
};
