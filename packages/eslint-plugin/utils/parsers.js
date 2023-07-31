// eslint-disable-next-line import/no-extraneous-dependencies, node/no-extraneous-require
const util = require('@typescript-eslint/utils');
const { get } = require('eslint/use-at-your-own-risk').builtinRules;

const getESLintCoreRule = (ruleId) =>
  util.ESLintUtils.nullThrows(
    get(ruleId),
    `ESLint's core rule '${ruleId}' not found.`
  );

/**
 * 获取eslint-plugin-node的规则
 * @param {string} ruleName 规则名
 */
const getNodeRule = (ruleName) => {
  if (!ruleName) {
    console.warn('请传入规则名');
    return;
  }

  // eslint-disable-next-line global-require
  const baseRule = require('eslint-plugin-node').rules[ruleName];

  if (!baseRule) {
    console.warn('eslint-plugin-node规则不存在,请检查: ', ruleName);
    return;
  }

  // eslint-disable-next-line consistent-return
  return baseRule;
};

const getBuiltInRule = (ruleId) => {
  try {
    return getESLintCoreRule(ruleId);
  } catch (error) {
    console.log('error: ', error);
    return null;
  }
};

const PARSERS = {
  builtIn: getBuiltInRule,
  node: getNodeRule
};

module.exports = {
  getNodeRule,
  maybeGetESLintCoreRule: getBuiltInRule,
  PARSERS
};
