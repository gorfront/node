import tseslint from "typescript-eslint";
import path from "path";
import n from "eslint-plugin-n";

export default [
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: path.resolve("./tsconfig.json"),
      },
    },
    plugins: {
      n,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "n/no-process-env": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
