<p align="center">
  <img src="https://user-images.githubusercontent.com/26466516/141659551-d7ba5630-7200-46fe-863b-87818dae970a.png" alt="Next.js Starter">
</p>

<br />

<div align="center"><strong>TypeScript starter for Next.js</strong></div>
<div align="center">All you need to build your next project.</div>

<br />

<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=0076FF&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/csorlandi/nextjs-template?style=flat-square&color=0076FF&labelColor=000000">

  <a href="https://github.com/csorlandi">
    <img src="https://img.shields.io/static/v1?label=Follow&message=@csorlandi&style=flat-square&color=0076FF&labelColor=000000" alt="Follow @csorlandi" />
  </a>
</div>

<div align="center">
  <sub>Created by <a href="https://linkedin.com/in/csorlandi">Claudio Orlandi</a>.</sub>
</div>

<br />

## Features

- ⚡️ Next.js 15 (App Router)
- ⚛️ React 19
- ⛑ TypeScript
- 📏 ESLint 9 — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- 🔐 CSP — Content Security Policy for enhanced security (default minimal policy)
- 🧳 T3 Env — Type-safe environment variables

## Quick Start

The best way to start with this template is using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```
# yarn
yarn create next-app -e https://github.com/csorlandi/nextjs-template
# pnpm
pnpm create next-app -e https://github.com/csorlandi/nextjs-template
# npm
npx create-next-app -e https://github.com/csorlandi/nextjs-template
```

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 20
- yarn

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn lint:fix` — Runs ESLint fix for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn format:check` — Check Prettier list of files that need to be formatted.
- `yarn format:ci` — Prettier check for CI.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';
// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

### Environment Variables

We use [T3 Env](https://env.t3.gg/) to manage environment variables. Create a `.env.local` file in the root of the project and add your environment variables there.

When adding additional environment variables, the schema in `./src/lib/env/client.ts` or `./src/lib/env/server.ts` should be updated accordingly.

### CSP (Content Security Policy)

The Content Security Policy (CSP) is a security layer that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. The CSP is implemented in the `next.config.ts` file.

It contains a default and minimal policy that you can customize to fit your application needs. It's a foundation to build upon.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for more information.
