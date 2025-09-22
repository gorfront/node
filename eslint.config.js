import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import path from "path";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  {
    ignores: ["node_modules", "dist"],
  },

  // --- webapp ---
  {
    files: ["webapp/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve("./webapp/tsconfig.eslint.json"), // 👈 именно webapp
        tsconfigRootDir: path.resolve("./webapp"),
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: false, orderImportKind: "asc" },
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "jsx-a11y/anchor-is-valid": "off",
      curly: ["error", "all"],
      "no-irregular-whitespace": ["error", { skipTemplates: true, skipStrings: true }],
      "no-console": ["error", { allow: ["info", "error", "warn"] }],
    },
  },

  // --- backend ---
  {
    files: ["backend/**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve("./backend/tsconfig.json"), // 👈 именно backend
        tsconfigRootDir: path.resolve("./backend"),
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
