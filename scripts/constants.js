/*
 * @Description: 常量
 * @Date: 2023-11-01 20:42:19
 * @Author: ranqirong 274544338@qq.com
 */
export const ESLINT_PLUGINS = [
  'eslintCore',
  'import',
  'node',
  'react-hooks',
  'react',
  'typescript',
  'vue2',
  'vue3'
];

export const PLUGINS_CONFIG = {
  import: {
    /** 文档目录 存放翻译后的md文件 */
    docDirPath: 'docs/rules/script/import',
    /** 规则路径 插件已启用的规则 */
    ruleFilePath: 'packages/eslint-plugin/rules/import/originalRules.js'
  },
  eslintCore: {
    docDirPath: 'docs/rules/script/javascript',
    ruleFilePath: 'packages/eslint-plugin/rules/javascript/originalRules.js'
  },
  node: {
    docDirPath: 'docs/rules/script/node',
    ruleFilePath: 'packages/eslint-plugin/rules/node/_commons.js'
  },
  react: {
    docDirPath: 'docs/rules/script/react',
    ruleFilePath: 'packages/eslint-plugin/rules/react/originalRules.js'
  },
  'react-hooks': {
    docDirPath: 'docs/rules/script/react-hooks',
    ruleFilePath: 'packages/eslint-plugin/rules/react-hooks/originalRules.js'
  },
  typescript: {
    docDirPath: 'docs/rules/script/typescript',
    ruleFilePath: 'packages/eslint-plugin/rules/typescript/originalRules.js'
  },
  vue2: {
    docDirPath: 'docs/rules/script/vue2',
    ruleFilePath: 'packages/eslint-plugin/rules/vue2/originalRules.js'
  },
  vue3: {
    docDirPath: 'docs/rules/script/vue3',
    ruleFilePath: 'packages/eslint-plugin/rules/vue3/originalRules.js'
  }
};

export default ESLINT_PLUGINS;
