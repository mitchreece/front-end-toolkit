module.exports = {
  rules: {
    // enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'self'],

    // enforce position of line comments
    'line-comment-position': ['error', { position: 'above' }],

    // disallow the unary operators ++ and --
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
}
