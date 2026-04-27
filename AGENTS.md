# AGENTS.md

## Overview
- This repository is a personal portfolio site built with Next.js 14 App Router, React 18, TypeScript, and Tailwind CSS.
- The UI is intentionally styled like an editor/terminal interface with a forced dark theme via `app/layout.tsx`.
- Most portfolio content is centralized in `data/index.ts`; prefer updating data there instead of hardcoding copy inside section components.

## Runbook
- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Build for production with `npm run build`.
- Lint with `npm run lint`.

## Required Environment Variables
- `GEMINI_API_KEY`: used by `app/api/chat/route.ts` for the portfolio chat assistant.
- `RESEND_API_KEY`: used by `app/api/send/route.ts` for the contact form email endpoint.

## Codebase Map
- `app/layout.tsx`: root metadata, global font, global CSS, Vercel analytics, toaster.
- `app/(main)/layout.tsx`: main shell with header, sidebar, line numbers, scroll container, and terminal panel.
- `app/(main)/page.tsx`: homepage composition for all sections.
- `app/api/chat/route.ts`: Gemini-backed chat API using portfolio context from `data/index.ts`.
- `app/api/send/route.ts`: Resend-backed contact email API.
- `components/sections/*`: user-facing page sections.
- `components/layout/*`: editor-like chrome such as header, sidebar, terminal, footer.
- `components/ui/*`: reusable UI primitives.
- `hooks/*`: small navigation/section tracking hooks.
- `data/index.ts`: canonical content for home, projects, technologies, contact, and experience history.
- `public/*`: images, icons, lottie files, and project/company assets.

## Working Conventions
- Prefer server components by default; add `"use client"` only when hooks, browser APIs, animation state, or event handlers require it.
- Keep new homepage content aligned with the existing section model in `components/sections`.
- If the change is content-oriented, edit `data/index.ts` first and keep components presentational.
- Use the `@/*` import alias instead of deep relative imports.
- Keep styling in Tailwind utility classes and existing CSS variables. Reuse tokens from `app/globals.css` and `tailwind.config.ts` instead of introducing ad hoc colors.
- Reuse existing shadcn-style primitives in `components/ui` before adding new base controls.
- Preserve the current editor/IDE visual language unless the task explicitly asks for a redesign.

## API Notes
- `app/api/chat/route.ts` assumes `GEMINI_API_KEY` is present and builds its prompt context from `data/index.ts`.
- `app/api/send/route.ts` posts email via Resend and currently sends to the portfolio owner directly.
- When changing request/response shapes for either API, update the corresponding client component in `components/sections/contact/`.

## Validation
- There is no dedicated test suite in this repository.
- For most changes, run `npm run lint`.
- Run `npm run build` when changes affect routes, API handlers, types, or config.
- If you change form behavior, chat behavior, scrolling, or layout interactions, verify them manually in `npm run dev`.

## Practical Guidance
- Do not commit secrets from `.env` or `.env.local`.
- Avoid editing generated output such as `.next/`.
- Keep asset references under `public/` stable; several components depend on exact paths from `data/index.ts`.
- If you touch navigation state, check both `hooks/use-hash.ts` and `hooks/use-cur-section.ts` because section highlighting and hash updates are coupled.
