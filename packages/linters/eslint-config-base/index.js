module.exports = {
  extends: [
    'eslint:recommended',
    ...['./rules/variables', './rules/style', './rules/possible-errors'].map(
      require.resolve
    ),
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
}
