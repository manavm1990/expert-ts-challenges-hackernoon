# TypeScript Starter

Uses `"strict"` settings, includes `eslint`, `prettier`, the each and everything. Just do `npm i` and then `npm start` or read on...

## `package.json`

As you can see, we can just run `npm start`. This will start up a `tsc` compiler and `nodemon`. As you work, your files will auto-save, compile with `tsc` and be served up by `nodemon`.

Alternatively, you may just want to run `npm run tsc` and manually run `node dist/index.js` and/or `npm t`.

In either case, auto-saving, formatting and linting will happen because of the `.vscode/settings.json` file.

## 🎶

Add: `"new-cap": ["error", { capIsNewExceptions: "Router" }],` to `.eslintrc.cjs` to avoid issue when doing with TS/ESLint when doing: `const router = Router()` (or similar).

This includes opinions, especially in `.vscode/settings.json`. If you are beginner, especially, I am urge you to give them a solid try before making changes. And, feel free to give me some feedback on this too!
