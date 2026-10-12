This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CI/CD: SSH and PM2

`.github/workflows/deploy.yml` runs `npm ci` and `npm run build` with Node.js 22
on pushes and pull requests to `main`, `master`, and `murad`. Pull requests only
run the build check. Successful pushes deploy over SSH; the workflow can also
be started manually from GitHub Actions.

Add these repository secrets in **Settings > Secrets and variables > Actions**:

| Secret | Value |
| --- | --- |
| `SERVER_HOST` | Deployment server hostname or IP address |
| `SERVER_USER` | SSH user |
| `SERVER_SSH_KEY` | Private SSH key authorized on the server |
| `APP_DIR` | Absolute path to this project's existing Git clone on the server |
| `SERVER_PORT` | Optional SSH port; defaults to `22` |
| `APP_NAME` | Optional PM2 process name; defaults to `arbione-presentation` |
| `APP_PORT` | Optional application port; defaults to `3006` |

The server needs Git, Node.js 22, npm, and PM2 (`npm install -g pm2`), available
in the SSH session's PATH. Clone this repository into `APP_DIR` before the first
deployment and configure server Git credentials to fetch from `origin`.
Keep any required `.env.production` file on the server.

Deployment updates the selected branch with `git pull --ff-only`, checks that
the server commit matches the CI commit, installs dependencies, builds, and
starts or reloads the PM2 process. All configured branches use the same server
directory and PM2 process, so deployments are serialized. A run whose branch
has advanced skips deployment; the newer push runs its own build check.
Use a separate `APP_DIR`, process name, and port from the landing page project.
Configure your reverse proxy to forward this application's traffic to `APP_PORT`.
