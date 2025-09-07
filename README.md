# 🚀 Vite + React + TypeScript + Tailwind Starter

Instant starter focused on **speed and good defaults**.

## 🧩 Requirements

- Node ≥ 18, npm ≥ 9
- Git (for Husky hooks to run)
- VS Code extensions: Prettier, ESLint, Tailwind CSS (auto-prompted)

## 🧰 Stack
Vite • React • TypeScript • Tailwind (via `@tailwindcss/vite`) • ESLint • Prettier • Husky + lint-staged • VS Code settings • `@` path alias

## ✨ What we added (at a glance)
- 🔧 **Tailwind via Vite plugin** – simple `@import "tailwindcss";` entry.
- 🎨 **Design tokens & utilities** – example `.max-container`, `.input`, and `@theme` tokens in `src/index.css`.
- 🧹 **ESLint + Prettier (flat)** – formatting-friendly lint rules.
- 🐶 **Husky + lint-staged** – auto format/lint staged files on commit.
- 🧭 **Path alias** – `@` → `src` for clean imports.
- 📦 **Constants pattern** – `src/constants/index.ts` for app config.
- 🧑‍💻 **VS Code workspace settings** – format on save + ESLint fixes.
- 📄 **.gitattributes** (optional) – normalize line endings.

## ⚡ Quick start
```bash
npm i
npm run dev
```

## 🔎 Snippets

**vite.config.ts**
```ts
plugins: [react(), 
    tailwindcss()],
```

**src/index.css**
```css
@import "tailwindcss";
/* tokens & utilities live here (e.g., @theme, .max-container, .input) */
```

**package.json**
```jsonc
lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier -w"
    ]
}
```

**.husky/pre-commit**
```sh
npx lint-staged
```

**.vscode/settings.json**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": { "source.fixAll.eslint": "explicit" }
}
```

**eslint.config.js**
- Flat config using `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `eslint-config-prettier` to avoid formatting conflicts.

## 📁 Condensed Project Layout
```
src/ (components, assets, constants, index.css, main.tsx, App.tsx)
.vscode/ (settings.json)
.husky/ (pre-commit)
eslint.config.js
vite.config.ts
tsconfig.json
.prettierrc / .prettierignore
```

## 📝 License
MIT
