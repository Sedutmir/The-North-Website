module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "stylelint-config-prettier"
  ],
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    "prettier/prettier": 2,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off"
  },
  "import/order": [
    2,
    {
      "groups": ["external", "builtin", "index", "sibling", "parent", "internal", "type"],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      },
      "newlines-between": "always-and-inside-groups"
    }
  ]
}
