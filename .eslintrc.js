module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off'
  }
}
