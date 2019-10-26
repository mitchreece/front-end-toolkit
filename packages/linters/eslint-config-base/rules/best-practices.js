module.exports = {
  rules: {
    // disallow async functions which have no await expression
    'require-await': 'error',

    // enforce default parameters to be last
    'default-param-last': 'error',

    // disallow reassigning function parameters
    'no-param-reassign': ['error', { props: false }],

    // disallow assignment operators in return statements
    'no-return-assign': ['error', 'always'],

    // disallow extending native types
    'no-extend-native': 'error',

    // require the use of === and !==
    eqeqeq: ['error', 'smart'],

    // require or disallow “Yoda” conditions
    yoda: 'error',
  },
}
