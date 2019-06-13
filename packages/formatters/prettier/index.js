module.exports = {
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  arrowParens: 'always',
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.json', '*.yml'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
