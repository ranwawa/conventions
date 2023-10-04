/*
 * @Description:
 * @Date: 2023-07-31 22:07:20
 * @Author: ranqirong 274544338@qq.com
 */
import util from '@typescript-eslint/utils';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import { rules as importRules } from 'eslint-plugin-import';

const { get } = builtinRules;
const cache = { importRules };

export const getESLintCoreRule = (ruleId) =>
  util.ESLintUtils.nullThrows(
    get(ruleId),
    `ESLint's core rule '${ruleId}' not found.`
  );

/**
 * 获取eslint-plugin-node的规则
 * @param {string} ruleName 规则名
 */
export const readNodeBaseRule = async (ruleName) => {
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

export const readESlintCoreRule = (ruleId) => {
  try {
    return getESLintCoreRule(ruleId);
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

export const PLUGIN_RULES = {
  eslintCore: readESlintCoreRule,
  node: readNodeBaseRule,
  import: readImportRule
};
