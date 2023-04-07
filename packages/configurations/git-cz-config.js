module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['feat', 'fix', 'test', 'refactor', 'style', 'docs', 'build'],
  maxMessageLength: 80,
  minMessageLength: 0,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    feat: {
      description: '新功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'bug修复',
      emoji: '🐛',
      value: 'fix',
    },
    test: {
      description: '增加测试用例',
      emoji: '💍',
      value: 'test',
    },
    refactor: {
      description: '重构代码(既不是新增功能也不是修复bug)',
      emoji: '💡',
      value: 'refactor',
    },
    style: {
      description: '空格,格式化,分号,文字错误等不影响功能的修改',
      emoji: '💄',
      value: 'style',
    },
    docs: {
      description: '注释,文档等无关代码的修改',
      emoji: '️📖',
      value: 'docs',
    },
    build: {
      description: '构建/持续集成相关的修改',
      emoji: '🎡',
      value: 'build',
    },
  },
};
