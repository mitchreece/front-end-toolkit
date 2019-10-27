module.exports = {
  extends: [
    'eslint:recommended',
    ...[
      './rules/possible-errors',
      './rules/best-practices',
      './rules/variables',
      './rules/style',
      './rules/es6',
    ].map(require.resolve),
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
}
