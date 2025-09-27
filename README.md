# SolidStart on Cloudflare Pages

This project was bootstrapped with [`create-cloudflare`](https://www.npmjs.com/package/create-cloudflare) using the SolidStart starter. It is preconfigured for deployment to [Cloudflare Pages](https://developers.cloudflare.com/pages/) and demonstrates the default Solid router, SSR, and asset pipeline.

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

The project is configured to emit a Cloudflare Pages compatible build. Run:

```bash
npm run build
```

The static assets and worker bundle will be written to the `dist/` directory. You can preview the production build locally with:

```bash
npx wrangler pages dev dist
```

## Deploying to Cloudflare Pages

Push your repository to GitHub and configure a Pages project with the following settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build directory | `dist` |

Alternatively, you can deploy directly from the CLI with:

```bash
npm run deploy
```

Refer to the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/framework-guides/deploy-a-solid-start-site/) for more details.
