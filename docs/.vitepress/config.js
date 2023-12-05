/*
 * @Description:
 * @Date: 2023-05-14 20:17:12
 * @Author: ranqirong 274544338@qq.com
 */
export default {
  title: 'awawa',
  description: 'awawa前端通用规范',
  cleanUrls: true,
  base: '/conventions/',
  themeConfig: {
    nav: [
      { text: '工具接入', link: '/guide/script/quick-start' },
      { text: '规范细则', link: '/rules/index' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'eslint接入',
          items: [
            { text: '快速开始', link: '/guide/script/quick-start' },
            { text: 'GIT集成', link: '/guide/script/git-integration' },
            { text: 'IDE集成', link: '/guide/script/ide-integration' },
            { text: '常见问题', link: '/guide/script/qa' },
            { text: '项目介绍', link: '/guide/script/project' },
            { text: '贡献代码', link: '/guide/script/contribute' }
          ]
        },
        {
          text: 'stylelint接入',
          items: [
            { text: '快速开始', link: '/guide/style/quick-start' },
            { text: 'Getting Started', link: '/getting-started' }
          ]
        },
        {
          text: 'readmelint接入',
          items: [
            { text: '快速开始', link: '/guide/style/quick-start' },
            { text: 'Getting Started', link: '/getting-started' }
          ]
        }
      ],
      '/rules/': [
        {
          text: '逻辑代码(eslint)',
          link: '/rules/script/index',
          items: [
            {
              text: 'import(模块化)',
              link: '/rules/script/import/'
            },
            {
              text: 'javascript',
              link: '/rules/script/eslint-core/'
            },
            {
              text: 'node',
              link: '/rules/script/node/'
            },
            {
              text: 'react',
              link: '/rules/script/react/'
            },
            {
              text: 'typescript',
              link: '/rules/script//@typescript-eslint/'
            },
            {
              text: 'vue',
              link: '/rules/script/vue/'
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ranwawa/conventions'
      }
    ]
  },
  prev: '上一页',
  next: '下一页',
  lastUpdated: true
};
