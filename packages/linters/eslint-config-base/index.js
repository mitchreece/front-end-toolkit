module.exports = {
  extends: [
    'eslint:recommended',
    ...['./rules/variables'].map(require.resolve),
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
}
