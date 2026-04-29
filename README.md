# Prince Seth Portfolio

Elite Next.js portfolio for Prince Seth, built with the App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app` - App Router routes, metadata, SEO, and resume download endpoint.
- `src/components` - Hero, projects, skills, education, AI, and supporting UI.
- `src/lib/site.ts` - Content model for the portfolio.

## Deployment

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Set the project root to this folder.
4. Let Vercel detect Next.js automatically.
5. Deploy with the default build command: `npm run build`.

## Notes

- The resume download is generated on the server at `/api/resume`.
- Replace profile links and contact details before publishing.