module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'no-useless-catch': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
  },
};
