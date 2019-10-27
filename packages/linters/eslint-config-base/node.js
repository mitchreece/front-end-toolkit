module.exports = {
  extends: require.resolve('./index'),
  env: {
    node: true,
  },
  rules: {
    // require require() calls to be placed at top-level module scope
    'global-require': 'error',

    // disallow require calls to be mixed with regular variable declarations
    'no-mixed-requires': ['error'],

    // disallow new operators with calls to require
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',

    // disallow the use of console
    'no-console': 'off',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'error',
  },
  parserOptions: {
    sourceType: 'script',
  },
}
