const { rewriteBuiltInRules } = require('./rewriteRules');

describe('overrideBuiltInRules', () => {
  it('如果没有重写规则,原样返回默认规则', () => {
    const rules = {
      'no-console': 'error',
      'no-debugger': 'error'
    };
    const overrideRules = {};
    const newRules = rewriteBuiltInRules(rules, overrideRules);
    expect(newRules).toEqual(rules);
  });

  it('如果重写规则,则禁用内置规则,启用自定义规则', () => {
    const rules = {
      'no-console': 'error',
      'no-debugger': 'error'
    };
    const overrideRules = {
      'no-debugger': true
    };

    const newRules = rewriteBuiltInRules(rules, overrideRules);

    expect(newRules).toEqual({
      'no-console': 'error',
      'no-debugger': 'off',
      '@awawa/no-debugger': 'error'
    });
  });

  it('传入插件名,以插件名自定义规则名', () => {
    const rules = {
      'no-console': 'error',
      'no-debugger': 'error'
    };
    const overrideRules = {
      'no-debugger': true
    };

    const newRules = rewriteBuiltInRules(rules, overrideRules, 'customPlugin');

    expect(newRules).toEqual({
      'no-console': 'error',
      'no-debugger': 'off',
      'customPlugin/no-debugger': 'error'
    });
  });
});
