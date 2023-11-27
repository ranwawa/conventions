/*
 * @Description: 常量
 * @Date: 2023-11-01 20:42:19
 * @Author: ranqirong 274544338@qq.com
 */
const ESLINT_PLUGINS = [
  'eslint-core',
  'import',
  'jsx-a11y',
  'node',
  'react-hooks',
  'react',
  '@typescript-eslint',
  'vue'
];

const WHITE_LIST = {
  react: { 'jsx-quotes': true, 'class-methods-use-this': true }
};

module.exports = { ESLINT_PLUGINS, WHITE_LIST };
