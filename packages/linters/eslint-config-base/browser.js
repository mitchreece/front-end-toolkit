module.exports = {
  extends: require.resolve('./index'),
  env: {
    browser: true,
  },
  rules: {
    // disallow the use of console
    'no-console': 'error',
  },
}
