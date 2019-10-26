module.exports = {
  env: { es6: true },
  rules: {
    // disallow the use of variables before they are defined
    'no-use-before-define': 'error',

    // require or disallow initialization in variable declarations
    'init-declarations': ['error', 'always'],
  },
}
