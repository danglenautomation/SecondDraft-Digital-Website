# SecondDraft Digital Website

Professional marketing site for SecondDraft Digital - website creation and hosting for small businesses. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is generated in `out/` (static export for Azure Static Web Apps).

## Contact form (static export)

With `output: "export"`, there is no server; the contact form cannot use `/api/contact` in production. Set `NEXT_PUBLIC_CONTACT_API_URL` to your Azure Function (or other endpoint) that accepts a POST with the form JSON. See `.env.example`.

## Deploy to Azure Static Web Apps

1. Build: `npm run build`
2. Deploy the `out/` folder to Azure Static Web Apps (e.g. via GitHub Actions or SWA CLI).
3. Configure `NEXT_PUBLIC_CONTACT_API_URL` in your Static Web App environment to point to an Azure Function or other backend for the contact form.

## Environment variables

Copy `.env.example` to `.env.local` and adjust. For production static export, set `NEXT_PUBLIC_CONTACT_API_URL` to your form handler URL.
