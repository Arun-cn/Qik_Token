import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "packages/client/dist/",
      "packages/server/dist/"
    ],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2021,
      sourceType: "module"
    },
    plugins: {
      react,
      '@typescript-eslint': tseslint
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
