export default {
  title: '前端规范',
  description: '前端规范',
  cleanUrls: true,
  base: '/conventions/',
  themeConfig: {
    nav: [
      { text: '接入', link: '/guide/script/quick-start' },
      { text: '规则', link: '/rules/script/index' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '逻辑代码',
          items: [
            { text: '快速开始', link: '/guide/script/quick-start' },
            { text: '编辑器集成', link: '/guide/script/editor-integration' },
            { text: '本地自动化', link: '/guide/script/automation' },
            { text: '常见问题', link: '/guide/script/qa' },
            { text: '项目介绍', link: '/guide/script/project' },
            { text: '贡献代码', link: '/guide/script/contribute' }
          ]
        },
        {
          text: '样式代码',
          items: [
            { text: '快速开始', link: '/guide/style/quick-start' },
            { text: 'Getting Started', link: '/getting-started' }
          ]
        },
        {
          text: '自述文件',
          items: [
            { text: '快速开始', link: '/guide/style/quick-start' },
            { text: 'Getting Started', link: '/getting-started' }
          ]
        }
      ],
      '/rules/': [
        {
          text: '逻辑代码',
          items: [
            {
              text: 'imports(模块化)',
              link: '/rules/script/imports'
            },
            {
              text: 'javascript',
              link: '/rules/script/javascript'
            },
            {
              text: 'node',
              link: '/rules/script/node'
            },
            {
              text: 'react',
              link: '/rules/script/react'
            },
            {
              text: 'typescript',
              link: '/rules/script/typescript'
            },
            {
              text: 'vue',
              link: '/rules/script/vue'
            }
          ]
        }
      ]
    }
  },
  prev: '上一页',
  next: '下一页',
  lastUpdated: true
};
