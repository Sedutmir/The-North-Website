module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier',
    "autofix",
  ],
  rules: {
    "prettier/prettier": 2,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
  },
}
