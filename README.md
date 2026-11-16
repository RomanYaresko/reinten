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
- **Client Components:** Used only when necessary, currently in `Section.tsx`, which relies on Motion for scroll-based animations.

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