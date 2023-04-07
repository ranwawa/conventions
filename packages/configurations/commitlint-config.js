const Configuration = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'test', 'refactor', 'style', 'docs', 'build'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-max-length': [0, 'never', 0],
    'type-min-length': [0, 'never', 0],
    'scope-enum': [0, 'always', []],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'subject-case': [0, 'always', []],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never', '.'],
    'subject-max-length': [0, 'never', 0],
    'subject-min-length': [0, 'never', 0],
    'subject-exclamation-mark': [0, 'never'],
    'header-case': [0, 'never', 'lower-case'],
    'header-max-length': [0, 'never', 0],
    'header-min-length': [0, 'never', 0],
    'header-full-stop': [0, 'never', '.'],
    'body-full-stop': [0, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'body-empty': [0, 'never'],
    'body-max-length': [0, 'never', 0],
    'body-min-length': [0, 'never', 0],
    'body-max-line-length': [0, 'never', 0],
    'body-case': [0, 'always', []],
    'footer-leading-blank': [2, 'always'],
    'footer-empty': [0, 'never'],
    'footer-max-length': [0, 'never', 0],
    'footer-min-length': [0, 'never', 0],
  },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  ignores: [(commit) => commit === ''],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl: 'https://github.com/ranwawa/commitlint-plugin-ranwawa',
};

module.exports = Configuration;
