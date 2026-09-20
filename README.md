# ci-actions-demo

Small Node/TypeScript repo with a basic GitHub Actions pipeline: lint, unit tests, then build.

I use it as a reference for wiring CI on similar projects.

## Stack

- TypeScript (Node **22+**; see `engines` in `package.json`)
- ESLint
- Node built-in test runner
- GitHub Actions

## Setup

```bash
npm ci
npm run lint
npm test
npm run build
node dist/index.js
```

Optional arg:

```bash
node dist/index.js Younes
```

## CI

Workflow: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

Runs on push to `main`, pull requests, and manual `workflow_dispatch`.

Jobs: install → lint → test → build.

## License

MIT
