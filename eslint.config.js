import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import i18next from "eslint-plugin-i18next";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist", "node_modules", ".next", ".playwright-mcp", "supabase", "*.config.ts", "*.config.js"] },
  // Base config for all TypeScript files
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "i18next": i18next,
      "prettier": prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      // Prettier integration
      "prettier/prettier": "error",
    },
  },
  // i18n enforcement only for application components (not UI library components)
  {
    files: ["src/components/*.tsx", "app/**/*.tsx"],
    rules: {
      // i18n enforcement - ERROR level to block commits with hardcoded strings
      "i18next/no-literal-string": [
        "error",
        {
          mode: "jsx-text-only",
          "jsx-attributes": {
            include: ["alt", "aria-label", "aria-placeholder", "aria-roledescription", "aria-valuetext", "placeholder", "title"],
            exclude: ["className", "id", "data-testid", "href", "src", "type", "name", "to", "key", "htmlFor", "viewBox", "d", "fill", "stroke", "strokeWidth", "strokeLinecap", "x1", "x2", "y1", "y2", "offset", "stopColor", "style"]
          },
          words: {
            exclude: [
              // Constants and identifiers
              "^[A-Z_]+$",
              // Numbers
              "^\\d+$",
              // Kebab-case (CSS classes, IDs)
              "^[a-z]+(-[a-z]+)*$",
              // Single characters
              "^.$",
              // Common technical strings
              "^(px|em|rem|vh|vw|%|deg|ms|s)$"
            ]
          },
          "should-validate-template": false
        }
      ],
    },
  },
  eslintConfigPrettier // Must be last to override other configs
);
