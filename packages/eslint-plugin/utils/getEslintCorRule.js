const util = require('@typescript-eslint/utils');

const getESLintCoreRule = (ruleId) =>
  util.ESLintUtils.nullThrows(
    require('eslint/use-at-your-own-risk').builtinRules.get(ruleId),
    `ESLint's core rule '${ruleId}' not found.`
  );

module.exports.maybeGetESLintCoreRule = (ruleId) => {
  try {
    return getESLintCoreRule(ruleId);
  } catch (error) {
    console.log('error: ', error);
    return null;
  }
};
