import js from "@eslint/js";
import tsplugin from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        React: "readonly",
        document: "readonly",
        setTimeout: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsplugin,
      react,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["vite.config.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.node.json",
      },
    },
  },
];
