/*
 * @Description: 常量
 * @Date: 2023-11-01 20:42:19
 * @Author: ranqirong 274544338@qq.com
 */
export { ESLINT_PLUGINS } from '../packages/eslint-plugin/scripts/constants.js';

export const PLUGINS_CONFIG = {
  import: {
    /** 文档目录 存放翻译后的md文件 */
    docDirPath: 'docs/rules/script/import',
    /** 规则目录 存放插件规则配置文件 */
    ruleDirPath: 'packages/eslint-plugin/rules/import',
    /** 规则路径 插件已启用的规则 */
    ruleFilePath: 'packages/eslint-plugin/rules/import/originalRules.js',
    /** 官方文档链接 */
    officialUrl:
      'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
    /** 官方文档链接 编辑模式 */
    officialEditUrl:
      'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/'
  },
  'jsx-a11y': {
    docDirPath: 'docs/rules/script/jsx-a11y',
    ruleDirPath: 'packages/eslint-plugin/rules/jsx-a11y',
    ruleFilePath: 'packages/eslint-plugin/rules/jsx-a11y/originalRules.js',
    officialUrl: 'https://github.com/evcohen/eslint-plugin-jsx-a11y/',
    officialEditUrl:
      'https://github.com/evcohen/eslint-plugin-jsx-a11y/edit/master/docs/src/rules/'
  },
  'eslint-core': {
    docDirPath: 'docs/rules/script/eslint-core',
    ruleDirPath: 'packages/eslint-plugin/rules/eslint-core',
    ruleFilePath: 'packages/eslint-plugin/rules/eslint-core/originalRules.js',
    officialUrl: 'https://eslint.org/docs/rules/',
    officialEditUrl:
      'https://github.com/eslint/eslint/edit/main/docs/src/rules/'
  },
  node: {
    docDirPath: 'docs/rules/script/node',
    ruleDirPath: 'packages/eslint-plugin/rules/node',
    ruleFilePath: 'packages/eslint-plugin/rules/node/_commons.js',
    officialUrl: '',
    officialEditUrl: ''
  },
  react: {
    docDirPath: 'docs/rules/script/react',
    ruleDirPath: 'packages/eslint-plugin/rules/react',
    ruleFilePath: 'packages/eslint-plugin/rules/react/originalRules.js',
    officialUrl: '',
    officialEditUrl: ''
  },
  'react-hooks': {
    docDirPath: 'docs/rules/script/react-hooks',
    ruleDirPath: 'packages/eslint-plugin/rules/react-hooks',
    ruleFilePath: 'packages/eslint-plugin/rules/react-hooks/originalRules.js',
    officialUrl: '',
    officialEditUrl: ''
  },
  typescript: {
    docDirPath: 'docs/rules/script/typescript',
    ruleDirPath: 'packages/eslint-plugin/rules/typescript',
    ruleFilePath: 'packages/eslint-plugin/rules/typescript/originalRules.js',
    officialUrl: '',
    officialEditUrl: ''
  },
  vue2: {
    docDirPath: 'docs/rules/script/vue2',
    ruleDirPath: 'packages/eslint-plugin/rules/vue2',
    ruleFilePath: 'packages/eslint-plugin/rules/vue2/originalRules.js',
    officialUrl: '',
    officialEditUrl: ''
  },
  vue3: {
    docDirPath: 'docs/rules/script/vue3',
    ruleDirPath: 'packages/eslint-plugin/rules/vue3',
    ruleFilePath: 'packages/eslint-plugin/rules/vue3/originalRules.js',
    officialUrl: '',
    officialEditUrl: ''
  }
};
