/*
 * @Description:
 * @Date: 2023-05-14 20:48:33
 * @Author: ranqirong 274544338@qq.com
 */
const path = require('path');

const findUp = require('find-up');

const {
  generateNewBuiltInRule,
  generateRules,
  getTranslatedRules
} = require('./rewriteRule');

describe('rewriteBuiltInRule', () => {
  it('没传入规则名,警告并返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const result = generateNewBuiltInRule({}, '');
    expect(consoleWarnSpy).toHaveBeenCalledWith('请传入规则名');
    expect(result).toBeUndefined();
    consoleWarnSpy.mockRestore();
  });

  it('没传入docs.url,警告返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const result = generateNewBuiltInRule({}, 'no-undef');
    expect(consoleWarnSpy).toHaveBeenCalledWith('文档url必传');
    expect(result).toBeUndefined();
    consoleWarnSpy.mockRestore();
  });

  it('eslint内置规则不存在,警告返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const result = generateNewBuiltInRule(
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

  it('找到对应规则,用自定义链接重写默认链接', () => {
    const result = generateNewBuiltInRule(
      { docs: { url: 'https://www.baidu.com' } },
      'no-undef'
    );
    expect(result.meta.docs.url).toBe('https://www.baidu.com');
  });
});

describe.only('getTranslatedRules', () => {
  it('文档路径不存在,输出错误信息并返回空数组', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const result = getTranslatedRules('builtIn', '');
    expect(consoleWarnSpy).toHaveBeenCalledWith('未找到规则文档目录: ', '');
    expect(result).toEqual([]);
    consoleWarnSpy.mockRestore();
  });

  it('插件翻译目录不存在,输出错误信息并返回空数组', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    // 模拟findUp.sync,返回固定的字符串
    const findupSpy = jest.spyOn(findUp, 'sync').mockImplementation((a) => a);
    // 模拟path.resolve,返回第二个入参
    const resolveSpy = jest
      .spyOn(path, 'resolve')
      .mockImplementation((a, b) => b);

    const result = getTranslatedRules('not-found');
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      '未找到插件规则翻译目录: ',
      'not-found'
    );
    expect(result).toEqual([]);
    consoleWarnSpy.mockRestore();
    resolveSpy.mockRestore();
    findupSpy.mockRestore();
  });

  it('返回node插件下的翻译文件', () => {
    const result = getTranslatedRules('node', 'docs/rules/script');
    expect(result).toContain('no-deprecated-api.md');
  });
});

describe('generateRules', () => {
  it('不传翻译目录,警告并返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    generateRules('', 'https://www.baidu.com');
    expect(consoleWarnSpy).toHaveBeenCalledWith('翻译目录不存在');
    consoleWarnSpy.mockRestore();
  });

  it('不传域名,警告并返回空', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    generateRules('./', '');
    expect(consoleWarnSpy).toHaveBeenCalledWith('域名必传');
    consoleWarnSpy.mockRestore();
  });

  it('如果传入正确的翻译目录和域名,则重写所有规则的文档链接', () => {
    generateRules('script/node/', 'https://www.baidu.com');
  });
});
