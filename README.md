## Overview

This application is built using **Next.js** and **React**.

- simplicity
- built-in SEO capabilities
- support for Static Site Generation (SSG).

## Technology Stack

- **Next.js**
- **React**
- **Motion**
- **ESLint**
- **Prettier**

## Rendering Strategy

- **Static Site Generation (SSG):** Pages are pre-rendered into static HTML during the build process.
- **Server Components:** Used by default for React components that do not require client-side interactivity.
- **Client Components:** Used only when necessary.

## SEO and Images

- Set `NEXT_PUBLIC_SITE_URL` to the deployed site origin in the build environment. The production `/reinten` base path is added automatically.
- Add the 1200x630 social preview image at `public/images/og-image.png`.
- Images are pre-optimized as WebP for the static export; new images should be optimized before being added.

## Contact Form

- Set `NEXT_PUBLIC_FORMSUBMIT_EMAIL` to the receiving address before building. FormSubmit requires email confirmation when the address is first used.
- The recipient address is public in the static client bundle; do not treat it as a secret.

## Project Architecture

```text
project/
├── app/
│   ├── ...                 # Next.js configuration and application pages
│
├── components/
│   ├── ...                 # Reusable React components
│
├── features/
│   ├── project/
│   │   ├── project.service.ts
│   │   └── project.types.ts
│   └── ...                 # Feature-specific services and types
│
├── data/
│   ├── ...                 # Static feature data consumed by services
│
├── public/
│   ├── ...                 # Static assets, including local images
│   └── data/
│       └── ...             # Static data-related resources and entries
│
└── ...
```

## Code Quality and Formatting

- **ESLint:** Identifies potential code issues and enforces coding conventions.
- **Prettier:** Automatically formats source files to maintain consistent code style.
