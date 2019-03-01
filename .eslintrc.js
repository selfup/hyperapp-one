module.exports = {
  extends: 'airbnb-base',
  plugins: ['import', 'react', 'jest'],
  rules: {
    'linebreak-style': 'off',
    'no-unused-vars': [2, { varsIgnorePattern: 'h' }],
    'react/jsx-uses-vars': 2,
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
};
