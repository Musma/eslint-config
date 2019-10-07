module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'eol-last': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-pascal-case': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    strict: ['error', 'global'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
