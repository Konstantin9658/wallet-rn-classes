import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/babel.config.js",
      "**/.eslintrc.js",
      "**/.prettierrc.js",
      "**/jest.config.js",
      "**/metro.config.js",
      "**/orval.config.js",
      "**/react-native.config.js",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    plugins: {
      prettier,
      react,
      "react-native": fixupPluginRules({
        rules: reactNative.rules,
      }),
      "@typescript-eslint": typescriptEslint,
      "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2019,
      sourceType: "module",

      parserOptions: {
        project: ["tsconfig.json"],
      },
    },

    rules: {
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-color-literals": 2,
      "react-native/no-raw-text": 2,
      "react-native/no-single-element-style-arrays": 2,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "none",
          caughtErrors: "all",
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
          argsIgnorePattern: "_",
          varsIgnorePattern: "^_",
        },
      ],
      "react-hooks/exhaustive-deps": "warn",

      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          useTabs: false,
          semi: true,
          trailingComma: "all",
          bracketSpacing: true,
          endOfLine: "auto",
        },
      ],

      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
