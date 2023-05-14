const { rewriteBuiltInRule } = require('./rewriteRule');

describe('rewriteBuiltInRule', () => {
  it('如果没传入规则名,警告并返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const result = rewriteBuiltInRule({}, '');
    expect(consoleWarnSpy).toHaveBeenCalledWith('请传入规则名');
    expect(result).toBeUndefined();
    consoleWarnSpy.mockRestore();
  });

  it('如果没传入docs.url,警告返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const result = rewriteBuiltInRule({}, 'no-undef');
    expect(consoleWarnSpy).toHaveBeenCalledWith('文档url必传');
    expect(result).toBeUndefined();
    consoleWarnSpy.mockRestore();
  });

  it('如果eslint内置规则不存在,警告返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const result = rewriteBuiltInRule(
      { docs: { url: 'https://www.baidu.com' } },
      'not-found'
    );
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'eslint内置规则不存在,请检查: ',
      'not-found'
    );
    expect(result).toBeUndefined();
    consoleWarnSpy.mockRestore();
  });

  it('如果找到对应规则,则用自定义链接重写默认链接', () => {
    const result = rewriteBuiltInRule(
      { docs: { url: 'https://www.baidu.com' } },
      'no-undef'
    );
    expect(result.meta.docs.url).toBe('https://www.baidu.com');
  });
});
