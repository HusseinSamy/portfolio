# portfolio

Turborepo monorepo (npm workspaces).

```
apps/web            Nuxt 4 frontend (SSR)
packages/content    Shared content schema (types), imported by the frontend and the CMS
```

Root scripts (`dev`, `build`, `lint`, `type-check`, `test:unit`, `test:e2e`) run through
`turbo` across every workspace. Add the CMS as `apps/cms` — the workspace glob picks it up.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Dev and preview both serve on http://localhost:3000.

### Type-Check and Build for Production

```sh
npm run build
```

The build output is `apps/web/.output` — run it with `node apps/web/.output/server/index.mjs`,
or `npm run preview --workspace web`.

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
