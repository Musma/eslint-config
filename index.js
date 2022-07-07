module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: [],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      }
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // import React from 'react' 제외
    "import/default": "off",
    "import/order": [
      // Import Sort
      "error",
      {
        "groups": ["builtin", "external", [ "parent", "sibling", "index"]],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }
    ],
    "import/no-unresolved": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'eol-last': 'error',    
  },
}
