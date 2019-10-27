module.exports = {
  env: { es6: true },
  rules: {
    // disallow duplicate module imports
    'no-duplicate-imports': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // require template literals instead of string concatenation
    'prefer-template': 'error',

    // require const declarations for variables that are never reassigned after declared
    'prefer-const': 'error',

    // require let or const instead of var
    'no-var': 'error',
  },
}
