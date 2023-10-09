/*
 * @Description:
 * @Date: 2023-07-31 22:07:20
 * @Author: ranqirong 274544338@qq.com
 */
const util = require('@typescript-eslint/utils');
const builtinRules = require('eslint/use-at-your-own-risk').builtinRules;
const { rules: importRules } = require('eslint-plugin-import');

const cache = { importRules };

const readESLintCoreRule = (ruleId) =>
  util.ESLintUtils.nullThrows(
    builtinRules.get(ruleId),
    `ESLint's core rule '${ruleId}' not found.`
  );

/**
 * 获取eslint-plugin-node的规则
 * @param {string} ruleName 规则名
 */
const readNodeBaseRule = async (ruleName) => {
  if (!ruleName) {
    console.warn('请传入规则名');
    return null;
  }

  if (!cache.node) {
    cache.nodeRules = await import('eslint-plugin-node').rules;
  }

  const baseRule = cache.nodeRules[ruleName];

  if (!baseRule) {
    console.warn('eslint-plugin-node规则不存在,请检查: ', ruleName);
    return null;
  }

  return baseRule;
};

const readESlintCoreRule = (ruleId) => {
  try {
    return readESLintCoreRule(ruleId);
  } catch (error) {
    console.log('error: ', error);
    return null;
  }
};

const readImportRule = (ruleName) => {
  const baseRule = cache.importRules[ruleName];

  if (!baseRule) {
    console.warn('eslint-plugin-node规则不存在,请检查: ', ruleName);
    return null;
  }

  return baseRule;
};

module.exports = {
  eslintCore: readESlintCoreRule,
  javascript: readESlintCoreRule,
  node: readNodeBaseRule,
  import: readImportRule
};
