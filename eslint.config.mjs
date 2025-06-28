// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier'; // 📌 eklendi

export default defineConfig([
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    env: {
      node: true,
      commonjs: true,
      browser: true,
      es6: true,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: 'writable',
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier, // 📌 Prettier config en sonda devreye giriyor
]);
