module.exports = {
 parser: '@typescript-eslint/parser',
 parserOptions: {
  project: './api/tsconfig.json',
  // @ts-ignore
  sconfigRootDir: __dirname
 },
 extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/recommended',
  'plugin:import/typescript',
  'airbnb-base',
  'airbnb-typescript/base',
  'prettier'
 ],
 plugins: ['@typescript-eslint', 'prettier'],
 settings: {
  'import/resolver': {
    node: {
      extensions: ['.js', '.ts']
    },
    typescript: true,
    caseSensitive: false
  }
 },
 rules: {
  // 'prettier/prettier': 2,
  'import/no-extraneous-dependencies': 'off',
  'class-methods-use-this': 'off',
  'import/prefer-default-export': 'off',
  'comma-dangle': ['error', 'never'],
  'no-unused-vars': 'off',
  'import/no-unresolved': [2, { caseSensitive: false }],
  '@typescript-eslint/no-unused-vars': 'off',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      ts: 'never'
    }
  ],
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error'
 }
}