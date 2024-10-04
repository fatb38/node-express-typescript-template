module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [{
    files: ['*.test.*'],
    rules: {
      'import/no-extraneous-dependencies': 'off'
    }
  }],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'no-console': 'off'
  }
}
