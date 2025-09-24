import tseslint from "typescript-eslint";
import path from "path";

export default [
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: path.resolve("./tsconfig.json"),
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
