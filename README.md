# Marc Esteban — Developer Portfolio

A modern, dark-mode, terminal-inspired portfolio for **Marc Esteban**, a junior full-stack web
developer and Computer Science graduate. Built with **Next.js (App Router)**, **TypeScript**,
**Tailwind CSS v4**, and **Framer Motion**.

## Features

- Single-page portfolio: Hero (animated typing roles), About (animated stats), Skills grid,
  Projects, Experience timeline, Education, Strengths, and Contact.
- Dedicated case-study pages at `/projects/[slug]` (statically generated).
- Working contact form backed by a Next.js API route (Gmail SMTP via Nodemailer).
- Responsive, keyboard-accessible, `prefers-reduced-motion`–aware, SEO + Open Graph metadata,
  sitemap, and robots.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup (email delivery)

The contact form sends email via Gmail SMTP using a **Google App Password**.

1. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```
2. Enable 2-Step Verification on the Gmail account, then create an App Password at
   <https://myaccount.google.com/apppasswords>.
3. Fill in `.env.local`:
   ```
   GMAIL_USER=your-address@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   CONTACT_TO=marcdelacruzesteban@gmail.com
   ```

Without these vars the form returns a graceful "not configured" message instead of crashing.

## Editing content

All content is data-driven — edit the typed arrays in [`src/data/`](src/data):

- `site.ts` — name, social/resume links (**replace placeholder URLs**), nav, hero text
- `skills.ts`, `projects.ts` (incl. case-study fields), `experience.ts`, `education.ts`,
  `strengths.ts`, `stats.ts`

Replace the placeholder assets in [`public/`](public): `resume.pdf`, `og-image.svg`, and
`profilepic.png`. Project screenshots/architecture diagrams have marked placeholder slots on each
case-study page.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Deploy

Deploys to any Node.js host (e.g. [Vercel](https://vercel.com/new)). Set the `GMAIL_USER`,
`GMAIL_APP_PASSWORD`, and `CONTACT_TO` environment variables in your hosting dashboard, and update
`site.url` in `src/data/site.ts` to your production domain.
