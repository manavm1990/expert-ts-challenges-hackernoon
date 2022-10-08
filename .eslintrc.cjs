module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['xo', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'capitalized-comments': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
