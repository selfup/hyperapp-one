module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import',
    'react',
    'jest',
  ],
  'rules': {
    'linebreak-style': 'off',
    'no-unused-vars': [2, { 'varsIgnorePattern': 'h' }],
    'react/jsx-uses-vars': 2,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    'browser': true,
    'jest': true,
  }
};
