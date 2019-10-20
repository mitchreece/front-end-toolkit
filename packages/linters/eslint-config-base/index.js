module.exports = {
  extends: [
    'eslint:recommended',
    ...['./rules/variables', './rules/style'].map(require.resolve),
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
}
