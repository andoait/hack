import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "comma-dangle": ["error", "never"]
    }
  },
  {
    ...tseslint.configs.recommended[0],
    rules: {
      ...(tseslint.configs.recommended[0]?.rules ?? {}),
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "comma-dangle": ["error", "never"]
    }
  }
])
