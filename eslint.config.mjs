import eslint from '@eslint/js';
//import prettierPlugin from 'eslint-plugin-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

import reactHooks from 'eslint-plugin-react-hooks';

import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";

export default tseslint.config(
  {
    ignores: [
      "**/.vscode",
      "**/.yarn",
      "tsconfig.*.json",
      ".yarn/**",
      "dist",
      "*.mjs",
      "**/node_modules",
      "**/build",
      "**/dist",
      "**/.DS_Store",
      "**/.env*",
      "!**/.env.example",
      "**/cypress.env*",
      "**/package.json",
      "**/yarn.lock",
      "**/manifest.json",
      'tailwind.config.*'
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  //prettierConfig,
  prettierPlugin,
  {
  languageOptions: {
    parser: tseslint.parser,
    ecmaVersion: 2022,
    sourceType: 'module',
    parserOptions: {
      project: [
        'tsconfig.json',
        'tsconfig.node.json',
        'tsconfig.app.json'
      ],
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    promise,
    react,
    'react-hooks': reactHooks
  },
  
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "no-console": ["warn", { allow: ["error"] }],
    "@typescript-eslint/no-floating-promises": "error",
    "react/jsx-key": "error",
    "linebreak-style": "off",
    "no-tabs": "warn",
    "max-len": ["warn", { tabWidth: 2, code: 120 }],
    camelcase: "off",
    "implicit-arrow-linebreak": "off",
    "no-underscore-dangle": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "comma-dangle": "off",
    semi: "off",
    "no-use-before-define": "off",
    "object-curly-newline": "off",
    "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "variable", format: ["camelCase", "PascalCase", "UPPER_CASE"], leadingUnderscore: "forbid" },
      { selector: "function", format: ["camelCase"] },
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: "enum", format: ["UPPER_CASE"] },
    ],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
        arrowFunctions: "always",
        defaultPropsOnCompositeComponents: 1,
      },
    ],
    "operator-linebreak": [
      "warn",
      "after",
      {
        overrides: {
          "&&": "after",
          "||": "after",
          "?": "before",
          ":": "before",
        },
      },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx", ".js", ".jsx"] }],
    "react/jsx-pascal-case": "warn",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "react/require-default-props": "off",
    "consistent-return": "off",
    "prettier/prettier": "warn",
  },
});
