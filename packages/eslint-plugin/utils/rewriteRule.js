/*
 * @Description: 重写规则元信息(帮助文档,汉化提示信息)
 * @Date: 2023-05-10 08:49:24
 * @Author: ranwawa <ranwawa@zmn.cn>
 */
const lodash = require('lodash');

const rewriteBuiltInRule = (meta, ruleName) => {
  if (!ruleName) {
    console.warn('请传入规则名');
    return;
  }

  // eslint-disable-next-line global-require
  const baseRule = require('eslint/use-at-your-own-risk').builtinRules.get(
    ruleName
  );

  if (!baseRule) {
    console.warn('eslint内置规则不存在,请检查: ', ruleName);
    return;
  }

  const { docs } = meta;
  if (!docs.url) {
    console.warn('文档url必传');
    return;
  }

  // eslint-disable-next-line consistent-return
  return lodash.merge(baseRule, { meta });
};

module.exports = {
  rewriteBuiltInRule
};
