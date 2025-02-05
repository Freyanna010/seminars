import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginImport from "eslint-plugin-import";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: eslintPluginImport,
      "@stylistic": stylistic,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // "no-console": ["error", { "allow": ["warn", "error"] }],
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-newline": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "object-curly-spacing": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      semi: ["error", "always"],
      "jsx-a11y/anchor-is-valid": "off",
      "react-hooks/rules-of-hooks": "off",
      "react/iframe-missing-sandbox": "off",
      "@stylistic/indent": ["error", 2],
      "react/jsx-props-no-multi-spaces": "error",
      "react/sort-prop-types": "error",
      "react/no-array-index-key": "error",
      "react/jsx-tag-spacing": "error",
      "react/jsx-sort-props": "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "export", next: "export" },
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            {
              pattern: "react**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@app/**/*",
              group: "sibling",
              position: "before",
            },
            {
              pattern: "@pages/**/*",
              group: "sibling",
              position: "before",
            },
            {
              pattern: "@entities/**/*",
              group: "sibling",
              position: "before",
            },
            {
              pattern: "@shared/**/*",
              group: "sibling",
              position: "before",
            },
            {
              pattern: "{..}+/**/*",
              group: "sibling",
              position: "before",
            },
            {
              pattern: "./**/*.scss",
              group: "index",
              position: "after",
            },
          ],
          alphabetize: {
            order: "asc",
          },
          pathGroupsExcludedImportTypes: ["builtin"],
          distinctGroup: false,
        },
      ],
      "react/jsx-key": "error",
    },
  },
);
